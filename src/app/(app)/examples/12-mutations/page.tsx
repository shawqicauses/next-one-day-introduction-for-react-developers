// REVIEWED

import ItemForm from "./item-form";
import { items } from "./store";

// MUTATIONS PAGE.
// A server page renders the list, and the client form below it
// writes through a Server Function. After the write the action
// calls revalidatePath, so this page renders again with the new
// item. No fetch code and no API route anywhere.

const MutationsPage = function MutationsPage() {
  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">12 Mutations</h2>
      <p className="text-sm">
        Submit the form. Leave it empty once to see the error state.
      </p>
      <ItemForm />
      {items.length === 0 ? (
        <p className="text-sm text-gray-500">
          No items yet. The list lives in server memory, so a restart empties
          it.
        </p>
      ) : (
        <ul className="list-disc px-5 text-sm">
          {items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default MutationsPage;
