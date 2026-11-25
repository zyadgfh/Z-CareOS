"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function Onboarding({ defaultName }: { defaultName: string }) {
  const router = useRouter();
  const [clinicName, setClinicName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleCreate(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setPending(true);

    const supabase = createClient();
    const { error: rpcError } = await supabase.rpc("create_workspace", {
      p_name: clinicName.trim(),
    });

    setPending(false);

    if (rpcError) {
      setError(rpcError.message);
      return;
    }

    router.refresh();
  }

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-5 py-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-brand-700">
          One-time setup
        </p>
        <h1 className="mt-1 text-xl font-bold text-slate-900">
          Create your clinic workspace
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          This is your private tenant — {defaultName ? `welcome, ${defaultName}. ` : ""}
          You can rename it later.
        </p>

        <form onSubmit={handleCreate} className="mt-6 grid gap-4">
          <label className="grid gap-1.5 text-sm font-medium text-slate-700">
            Clinic / practice name
            <input
              type="text"
              required
              minLength={2}
              maxLength={120}
              value={clinicName}
              onChange={(e) => setClinicName(e.target.value)}
              placeholder="e.g. El-Nour Clinic"
              className="rounded-xl border border-slate-300 px-3.5 py-3 text-base outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            />
          </label>

          {error ? (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-800 disabled:opacity-60"
          >
            {pending ? "Creating…" : "Create workspace"}
          </button>
        </form>
      </div>
    </main>
  );
}
