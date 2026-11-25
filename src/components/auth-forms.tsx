"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn, signUp } from "@/app/auth/actions";

type Mode = "signin" | "signup";

export function AuthForms({ defaultMode, next }: { defaultMode: Mode; next?: string }) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const safeNext = next && next.startsWith("/") && !next.startsWith("//") ? next : "/dashboard";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1">
        {(
          [
            ["signin", "Sign in"],
            ["signup", "Sign up"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setMode(key)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
              mode === key ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {mode === "signin" ? (
        <form action={signIn} className="grid gap-4">
          <input type="hidden" name="next" value={safeNext} />
          <label className="grid gap-1.5 text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@clinic.com"
              className="rounded-xl border border-slate-300 px-3.5 py-3 text-base outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            />
          </label>
          <label className="grid gap-1.5 text-sm font-medium text-slate-700">
            Password
            <input
              type="password"
              name="password"
              required
              minLength={8}
              autoComplete="current-password"
              placeholder="••••••••"
              className="rounded-xl border border-slate-300 px-3.5 py-3 text-base outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            />
          </label>
          <button
            type="submit"
            className="mt-1 rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-800"
          >
            Sign in
          </button>
        </form>
      ) : (
        <form action={signUp} className="grid gap-4">
          <label className="grid gap-1.5 text-sm font-medium text-slate-700">
            Full name
            <input
              type="text"
              name="full_name"
              required
              minLength={2}
              autoComplete="name"
              placeholder="Dr. Name"
              className="rounded-xl border border-slate-300 px-3.5 py-3 text-base outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            />
          </label>
          <label className="grid gap-1.5 text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@clinic.com"
              className="rounded-xl border border-slate-300 px-3.5 py-3 text-base outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            />
          </label>
          <label className="grid gap-1.5 text-sm font-medium text-slate-700">
            Password
            <input
              type="password"
              name="password"
              required
              minLength={8}
              autoComplete="new-password"
              placeholder="At least 8 characters"
              className="rounded-xl border border-slate-300 px-3.5 py-3 text-base outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            />
          </label>
          <button
            type="submit"
            className="mt-1 rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-800"
          >
            Create account
          </button>
        </form>
      )}

      <p className="mt-5 text-center text-xs text-slate-400">
        By continuing you agree to the pilot&apos;s data-handling terms.
      </p>
      <p className="mt-3 text-center text-xs text-slate-400">
        <Link href="/" className="hover:text-slate-600">
          ← Back
        </Link>
      </p>
    </div>
  );
}
