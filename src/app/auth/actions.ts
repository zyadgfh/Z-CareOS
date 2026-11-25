"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function safeNext(next: FormDataEntryValue | null): string {
  const value = typeof next === "string" ? next : "";
  return value.startsWith("/") && !value.startsWith("//") ? value : "/dashboard";
}

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const next = safeNext(formData.get("next"));

  const supabase = await createClient();

  let authError: string | null = null;
  try {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) authError = error.message;
  } catch {
    authError = "Authentication service is unreachable from this environment.";
  }

  if (authError) {
    redirect(
      `/login?error=${encodeURIComponent(authError)}&next=${encodeURIComponent(next)}`,
    );
  }

  revalidatePath("/", "layout");
  redirect(next);
}

export async function signUp(formData: FormData) {
  const fullName = String(formData.get("full_name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const supabase = await createClient();

  let authError: string | null = null;
  let needsConfirmation = false;
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    if (error) authError = error.message;
    else if (!data.session) needsConfirmation = true;
  } catch {
    authError = "Authentication service is unreachable from this environment.";
  }

  if (authError) {
    redirect(`/login?mode=signup&error=${encodeURIComponent(authError)}`);
  }

  if (needsConfirmation) {
    redirect(
      `/login?mode=signup&message=${encodeURIComponent(
        "Account created. Check your email to confirm, then sign in.",
      )}`,
    );
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
