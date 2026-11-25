import { redirect } from "next/navigation";
import { signOut } from "@/app/auth/actions";
import { Onboarding } from "@/components/onboarding";
import { createClient } from "@/lib/supabase/server";

type ProfileRow = {
  full_name: string;
  role: string;
  tenants: { name: string; slug: string } | { name: string; slug: string }[];
};

const placeholderCards = [
  { title: "Today", body: "Appointment schedule and visit queue — coming next." },
  { title: "Patients", body: "Search, records, and follow-ups — coming next." },
  { title: "Encounters", body: "Clinical documentation — coming next." },
];

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role, tenants(name, slug)")
    .eq("id", user.id)
    .maybeSingle<ProfileRow>();

  if (!profile) {
    const fullName =
      (user.user_metadata?.full_name as string | undefined) ?? "";
    return <Onboarding defaultName={fullName} />;
  }

  const tenant = Array.isArray(profile.tenants) ? profile.tenants[0] : profile.tenants;

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-5 pb-24 pt-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            CareOS
          </p>
          <h1 className="text-lg font-bold text-slate-900">
            {tenant?.name ?? "Workspace"}
          </h1>
        </div>
        <form action={signOut}>
          <button
            type="submit"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Sign out
          </button>
        </form>
      </header>

      <p className="mt-2 text-sm text-slate-500">
        Signed in as <span className="font-medium text-slate-700">{profile.full_name}</span>{" "}
        · {profile.role}
      </p>

      <section className="mt-6 grid gap-3">
        {placeholderCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <h2 className="font-semibold text-slate-900">{card.title}</h2>
            <p className="mt-1 text-sm text-slate-500">{card.body}</p>
          </div>
        ))}
      </section>

      <nav className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white/95 backdrop-blur">
        <ul className="mx-auto flex max-w-lg items-center justify-around px-2 py-2 text-xs font-medium text-slate-500">
          {["Home", "Schedule", "Patients", "More"].map((item, i) => (
            <li
              key={item}
              className={i === 0 ? "text-brand-700" : ""}
            >
              <button type="button" className="px-3 py-1.5" disabled={i !== 0}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
