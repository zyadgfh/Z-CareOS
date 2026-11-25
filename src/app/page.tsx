import Link from "next/link";

const features = [
  {
    title: "Daily schedule",
    body: "Appointments, reschedules, and the visit queue in one place.",
  },
  {
    title: "Patient records",
    body: "Fast search, clinical notes, and safe account lifecycle.",
  },
  {
    title: "Specialty workflow",
    body: "Documentation built around how your specialty actually works.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col px-5 py-10 sm:max-w-2xl">
      <header className="flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight text-brand-800">CareOS</span>
        <Link
          href="/login"
          className="rounded-full px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-50"
        >
          Sign in
        </Link>
      </header>

      <section className="mt-16">
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Clinical workflow,
          <br />
          built for one practitioner.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          CareOS keeps appointments, patient records, and the visit workflow on your
          phone — without the clutter of enterprise systems.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/login?mode=signup"
            className="rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-800"
          >
            Get started
          </Link>
          <Link
            href="/login"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Sign in
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="font-semibold text-slate-900">{f.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.body}</p>
          </div>
        ))}
      </section>

      <footer className="mt-auto pt-16 text-center text-xs text-slate-400">
        CareOS — early access · Egypt
      </footer>
    </main>
  );
}
