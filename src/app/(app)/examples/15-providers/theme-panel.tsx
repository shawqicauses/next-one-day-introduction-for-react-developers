// REVIEWED

"use client";

import { useTheme } from "./theme-provider";

// CLIENT CONSUMER ISLAND.
// Only Client Components can read context. This island calls the
// useTheme hook, shows the current value, and flips it. Clicking
// re-renders this island alone, not the server page around it.

const ThemePanel = function ThemePanel() {
  const { theme, toggle } = useTheme();

  return (
    <div>
      <p className="mb-2 text-sm">Current theme: {theme}</p>
      <button
        type="button"
        onClick={toggle}
        className="rounded border border-gray-300 px-3 py-1 text-base">
        Toggle theme
      </button>
    </div>
  );
};

export default ThemePanel;
