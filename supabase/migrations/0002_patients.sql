-- E03 Patient Management: tenant-scoped patients with full RLS

create table if not exists public.patients (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants (id) on delete restrict,
  full_name text not null check (char_length(btrim(full_name)) between 2 and 120),
  phone text check (phone is null or char_length(btrim(phone)) between 5 and 30),
  birth_date date,
  sex text check (sex is null or sex in ('female', 'male', 'other')),
  notes text check (notes is null or char_length(notes) <= 2000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists patients_tenant_id_idx
  on public.patients (tenant_id);

create index if not exists patients_tenant_name_idx
  on public.patients (tenant_id, full_name);

drop trigger if exists patients_touch_updated_at on public.patients;
create trigger patients_touch_updated_at
  before update on public.patients
  for each row execute function public.touch_updated_at();

alter table public.patients enable row level security;

drop policy if exists "members read patients" on public.patients;
create policy "members read patients"
  on public.patients for select
  using (public.is_member_of_tenant(tenant_id));

drop policy if exists "members insert patients" on public.patients;
create policy "members insert patients"
  on public.patients for insert
  with check (public.is_member_of_tenant(tenant_id));

drop policy if exists "members update patients" on public.patients;
create policy "members update patients"
  on public.patients for update
  using (public.is_member_of_tenant(tenant_id))
  with check (public.is_member_of_tenant(tenant_id));

drop policy if exists "members delete patients" on public.patients;
create policy "members delete patients"
  on public.patients for delete
  using (public.is_member_of_tenant(tenant_id));
