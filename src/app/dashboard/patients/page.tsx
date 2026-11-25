import { redirect } from "next/navigation";
import { PatientsView } from "@/components/patients";
import { createClient } from "@/lib/supabase/server";

export type PatientRow = {
  id: string;
  full_name: string;
  phone: string | null;
  birth_date: string | null;
  sex: string | null;
  created_at: string;
};

export default async function PatientsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; error?: string }>;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { q, error } = await searchParams;
  const term = (q ?? "").trim().replace(/[%_]/g, "");

  let patients: PatientRow[] = [];
  let loadError: string | null = null;

  try {
    let query = supabase
      .from("patients")
      .select("id, full_name, phone, birth_date, sex, created_at")
      .order("full_name", { ascending: true })
      .limit(100);

    if (term) query = query.ilike("full_name", `%${term}%`);

    const { data, error: queryError } = await query;
    if (queryError) loadError = queryError.message;
    else patients = (data ?? []) as PatientRow[];
  } catch {
    loadError = "Database is unreachable from this environment.";
  }

  return (
    <PatientsView
      patients={patients}
      initialQuery={term}
      error={error ?? loadError}
    />
  );
}
