import { AuthForms } from "@/components/auth-forms";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{
    error?: string;
    message?: string;
    mode?: string;
    next?: string;
  }>;
}) {
  const { error, message, mode, next } = await searchParams;

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-5 py-10">
      <div className="mb-8 text-center">
        <span className="text-xl font-bold tracking-tight text-brand-800">CareOS</span>
        <p className="mt-1 text-sm text-slate-500">
          Sign in to your clinic workspace
        </p>
      </div>

      {error ? (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}
      {message ? (
        <div className="mb-4 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800">
          {message}
        </div>
      ) : null}

      <AuthForms defaultMode={mode === "signup" ? "signup" : "signin"} next={next} />

      <p className="mt-8 text-center text-xs text-slate-400">
        Synthetic-data development build · No real patient data
      </p>
    </main>
  );
}
