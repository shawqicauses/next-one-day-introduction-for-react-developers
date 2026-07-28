// REVIEWED

"use client";

import { useActionState } from "react";

import { insertingItem, type ItemFormState } from "./actions";

// CLIENT FORM WITH ACTION STATE.
// The form invokes the Server Function through its action prop, and
// the FormData arrives there automatically. useActionState carries
// the rest: the last state the action returned, the wired action
// for the form, and a pending flag while the submit is in flight.

const stateInitial: ItemFormState = { error: null };

const ItemForm = function ItemForm() {
  const [state, formAction, pending] = useActionState(
    insertingItem,
    stateInitial,
  );

  return (
    <form action={formAction} className="mb-5">
      <div className="mb-2 flex items-end gap-2">
        <label htmlFor="text" className="block text-sm leading-relaxed">
          Insert an item
          <input
            id="text"
            name="text"
            type="text"
            className="block rounded border border-gray-300 px-3 py-1 text-base"
          />
        </label>
        <button
          type="submit"
          disabled={pending}
          className="rounded border border-gray-300 px-3 py-1 text-base disabled:opacity-50">
          {pending ? "Saving..." : "Save"}
        </button>
      </div>
      {state.error ? (
        <p aria-live="polite" className="text-sm text-red-600">
          {state.error}
        </p>
      ) : null}
    </form>
  );
};

export default ItemForm;
