// REVIEWED - 01

"use client";

import { useState } from "react";

// CLIENT ISLAND.
// "use client" marks the boundary. Only this component and its
// imports join the client bundle. The rest of the page stays on the
// server and ships as HTML.

const Counter = function Counter({ startAt }: { startAt: number }) {
  const [count, setCount] = useState(startAt);

  return (
    <div>
      <p className="mb-2">Count: {count}</p>
      <button
        type="button"
        // There is a bad practice in this state update. Can you spot it?
        onClick={() => setCount(count + 1)}
        className="rounded border border-gray-300 px-3 py-1 text-sm">
        Add one
      </button>
    </div>
  );
};

export default Counter;
