// REVIEWED

import { insertingFact } from "./actions";
import { facts } from "./facts";

// SERVER FUNCTION FORM.
// This page is a Server Component with a plain HTML form. The form
// action is a function that runs on the server. Submitting posts
// the form data there, the function updates the list, and
// revalidatePath refreshes this page.

const ServerFunctionPage = function ServerFunctionPage() {
  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">
        08 Server function
      </h2>
      <form action={insertingFact} className="mb-5 flex items-end gap-2">
        <label htmlFor="fact" className="block text-sm leading-relaxed">
          Insert a fact
          <input
            id="fact"
            name="fact"
            type="text"
            className="block rounded border border-gray-300 px-3 py-1 text-base"
          />
        </label>
        <button
          type="submit"
          className="rounded border border-gray-300 px-3 py-1 text-base">
          Save
        </button>
      </form>
      {facts.length === 0 ? (
        <p className="text-sm text-gray-500">
          No facts yet. The list lives in server memory, so it also empties
          whenever the server process restarts. That is the serverless lesson
          from module 9.
        </p>
      ) : (
        <ul className="list-disc px-5">
          {facts.map((fact) => (
            <li key={fact.id}>{fact.text}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default ServerFunctionPage;
