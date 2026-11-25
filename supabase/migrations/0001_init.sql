-- CareOS initial schema: tenant workspace + practitioner profiles
-- Scope: E01 (identity) + E02 (tenant workspace) foundation.
-- Security: RLS on everything; tenant/profile creation only via
-- SECURITY DEFINER RPC to prevent spoofing.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------

create table if not exists public.tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 2 and 120),
  slug text not null unique check (slug ~ '^[a-z0-9-]{2,60}$'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  tenant_id uuid not null references public.tenants (id) on delete restrict,
  full_name text not null check (char_length(btrim(full_name)) between 2 and 120),
  role text not null default 'owner' check (role in ('owner', 'member')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists profiles_tenant_id_idx
  on public.profiles (tenant_id);

-- ---------------------------------------------------------------------------
-- updated_at maintenance
-- ---------------------------------------------------------------------------

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists tenants_touch_updated_at on public.tenants;
create trigger tenants_touch_updated_at
  before update on public.tenants
  for each row execute function public.touch_updated_at();

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
  before update on public.profiles
  for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------------
-- Helper: tenant membership (SECURITY DEFINER avoids RLS recursion)
-- ---------------------------------------------------------------------------

create or replace function public.is_member_of_tenant(tenant uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.tenant_id = tenant
  );
$$;

revoke all on function public.is_member_of_tenant(uuid) from public;
grant execute on function public.is_member_of_tenant(uuid) to authenticated;

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

alter table public.tenants enable row level security;
alter table public.profiles enable row level security;

drop policy if exists "members read own tenant" on public.tenants;
create policy "members read own tenant"
  on public.tenants for select
  using (public.is_member_of_tenant(id));

drop policy if exists "users read own profile" on public.profiles;
create policy "users read own profile"
  on public.profiles for select
  using (id = auth.uid());

drop policy if exists "users read same-tenant profiles" on public.profiles;
create policy "users read same-tenant profiles"
  on public.profiles for select
  using (public.is_member_of_tenant(tenant_id));

-- No INSERT/UPDATE policies on purpose: writes go through the RPC below.

-- ---------------------------------------------------------------------------
-- RPC: create workspace (tenant + owner profile) atomically
-- ---------------------------------------------------------------------------

create or replace function public.create_workspace(p_name text)
returns public.tenants
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_name text := btrim(coalesce(p_name, ''));
  v_slug_base text;
  v_slug text;
  v_full_name text;
  v_tenant public.tenants;
begin
  if v_uid is null then
    raise exception 'not authenticated';
  end if;

  if char_length(v_name) < 2 or char_length(v_name) > 120 then
    raise exception 'workspace name must be 2-120 characters';
  end if;

  if exists (select 1 from public.profiles where id = v_uid) then
    raise exception 'user already belongs to a workspace';
  end if;

  v_slug_base := trim(both '-' from lower(regexp_replace(v_name, '[^a-z0-9]+', '-', 'g')));
  if v_slug_base = '' then
    v_slug_base := 'clinic';
  end if;
  v_slug := v_slug_base || '-' || substr(md5(random()::text || v_uid::text), 1, 6);

  v_full_name := coalesce(
    nullif(auth.jwt() -> 'user_metadata' ->> 'full_name', ''),
    'Practitioner'
  );

  insert into public.tenants (name, slug)
  values (v_name, v_slug)
  returning * into v_tenant;

  insert into public.profiles (id, tenant_id, full_name, role)
  values (v_uid, v_tenant.id, v_full_name, 'owner');

  return v_tenant;
end;
$$;

revoke all on function public.create_workspace(text) from public;
revoke all on function public.create_workspace(text) from anon;
grant execute on function public.create_workspace(text) to authenticated;
