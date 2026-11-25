"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function addPatient(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const fullName = String(formData.get("full_name") ?? "").trim();
  const phoneRaw = String(formData.get("phone") ?? "").trim();
  const birthDate = String(formData.get("birth_date") ?? "").trim();
  const sex = String(formData.get("sex") ?? "").trim();

  const { data: profile } = await supabase
    .from("profiles")
    .select("tenant_id")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile) redirect("/dashboard");

  let insertError: string | null = null;
  try {
    const { error } = await supabase.from("patients").insert({
      tenant_id: profile.tenant_id,
      full_name: fullName,
      phone: phoneRaw || null,
      birth_date: birthDate || null,
      sex: sex || null,
    });
    if (error) insertError = error.message;
  } catch {
    insertError = "Database is unreachable from this environment.";
  }

  if (insertError) {
    redirect(
      `/dashboard/patients?error=${encodeURIComponent(insertError)}`,
    );
  }

  revalidatePath("/dashboard/patients");
}
