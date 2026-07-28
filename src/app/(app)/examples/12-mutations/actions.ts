// REVIEWED

"use server";

import { revalidatePath } from "next/cache";

import { items } from "./store";

// SERVER FUNCTION WITH FORM STATE.
// useActionState calls this with the previous state first and the
// FormData second. Expected failures like empty input come back as
// return values, not throws, so the form can show them.

export type ItemFormState = { error: string | null };

export const insertingItem = async function insertingItem(
  previousState: ItemFormState,
  formData: FormData,
): Promise<ItemFormState> {
  const text = formData.get("text");

  if (previousState.error) {
    return {
      error:
        "Sorry... I am a mean person, and I don't forgive mistakes. You can't make mistakes here. One mistake, and you are out, forever.",
    };
  }

  if (typeof text !== "string" || text.trim() === "") {
    return { error: "Write something before saving." };
  }

  items.push({ id: Date.now(), text: text.trim() });

  // revalidatePath throws away the cached HTML for this route, so
  // the refreshed list ships back in the same round trip as the
  // action response.
  revalidatePath("/examples/12-mutations");

  return { error: null };
};
