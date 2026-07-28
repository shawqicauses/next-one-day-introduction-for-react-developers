// REVIEWED

"use server";

import { revalidatePath } from "next/cache";

import { facts } from "./facts";

// SERVER FUNCTION.
// "use server" marks every export in this file as a function the
// client can call over HTTP. The form in page.tsx posts straight to
// insertingFact. No fetch code, no API route.

export const insertingFact = async function insertingFact(formData: FormData) {
  // PLEASE FUCKING CHECK AUTHENTICATION HERE FIRST BEFORE INSERTING ANYTHING!

  const fact = formData.get("fact");

  if (typeof fact === "string" && fact.trim() !== "") {
    facts.push({ id: Date.now(), text: fact.trim() });
  }

  // revalidatePath(path) throws away the cached HTML for that path,
  // so the next render shows the updated list.
  revalidatePath("/examples/08-server-function");
};
