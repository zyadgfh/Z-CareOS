"use client";

import Link from "next/link";
import { useState } from "react";
import { addPatient } from "@/app/dashboard/patients/actions";
import type { PatientRow } from "@/app/dashboard/patients/page";

function ageFromBirthDate(birthDate: string | null): string | null {
  if (!birthDate) return null;
  const born = new Date(birthDate);
  if (Number.isNaN(born.getTime())) return null;
  const now = new Date();
  let age = now.getFullYear() - born.getFullYear();
  const m = now.getMonth() - born.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < born.getDate())) age -= 1;
  return age >= 0 ? `${age}y` : null;
}

export function PatientsView({
  patients,
  initialQuery,
  error,
}: {
  patients: PatientRow[];
  initialQuery: string;
  error?: string | null;
}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-5 pb-16 pt-6">
      <header className="flex items-center gap-3">
        <Link
          href="/dashboard"
          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50"
        >
          ←
        </Link>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            CareOS
          </p>
          <h1 className="text-lg font-bold text-slate-900">Patients</h1>
        </div>
      </header>

      <form
        action="/dashboard/patients"
        method="get"
        className="mt-4 flex gap-2"
      >
        <input
          type="search"
          name="q"
          defaultValue={initialQuery}
          placeholder="Search by name…"
          className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-base outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
        />
        <button
          type="submit"
          className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          Search
        </button>
      </form>

      {error ? (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <div className="mt-4">
        <button
          type="button"
          onClick={() => setShowForm((v) => !v)}
          className="w-full rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-800"
        >
          {showForm ? "Cancel" : "+ Add patient"}
        </button>
      </div>

      {showForm ? (
        <form
          action={addPatient}
          className="mt-4 grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <label className="grid gap-1.5 text-sm font-medium text-slate-700">
            Full name *
            <input
              type="text"
              name="full_name"
              required
              minLength={2}
              maxLength={120}
              placeholder="Patient name"
              className="rounded-xl border border-slate-300 px-3.5 py-3 text-base outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="grid gap-1.5 text-sm font-medium text-slate-700">
              Phone
              <input
                type="tel"
                name="phone"
                minLength={5}
                maxLength={30}
                placeholder="01x…"
                className="rounded-xl border border-slate-300 px-3.5 py-3 text-base outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
              />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-slate-700">
              Birth date
              <input
                type="date"
                name="birth_date"
                className="rounded-xl border border-slate-300 px-3.5 py-3 text-base outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
              />
            </label>
          </div>
          <label className="grid gap-1.5 text-sm font-medium text-slate-700">
            Sex
            <select
              name="sex"
              defaultValue=""
              className="rounded-xl border border-slate-300 px-3.5 py-3 text-base outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            >
              <option value="">—</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </label>
          <button
            type="submit"
            className="mt-1 rounded-xl border border-brand-600 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-800 hover:bg-brand-100"
          >
            Save patient
          </button>
        </form>
      ) : null}

      <section className="mt-6 grid gap-3">
        {patients.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
            <p className="text-sm font-medium text-slate-600">
              {initialQuery ? "No patients match your search." : "No patients yet."}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              {initialQuery
                ? "Try a different name."
                : "Add your first patient to get started."}
            </p>
          </div>
        ) : (
          patients.map((p) => {
            const age = ageFromBirthDate(p.birth_date);
            return (
              <article
                key={p.id}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-semibold text-slate-900">{p.full_name}</h2>
                  {age ? (
                    <span className="text-xs font-medium text-slate-400">{age}</span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  {[p.phone, p.sex].filter(Boolean).join(" · ") || "No contact info"}
                </p>
              </article>
            );
          })
        )}
      </section>

      {patients.length > 0 ? (
        <p className="mt-4 text-center text-xs text-slate-400">
          {patients.length} patient{patients.length === 1 ? "" : "s"}
          {initialQuery ? ` matching “${initialQuery}”` : ""}
        </p>
      ) : null}
    </main>
  );
}
