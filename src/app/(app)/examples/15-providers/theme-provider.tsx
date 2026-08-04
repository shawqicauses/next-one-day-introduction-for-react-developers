// REVIEWED

"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

// THEME PROVIDER.
// React context is client-side. createContext only works behind
// "use client", so the provider is a Client Component that accepts
// children. Whatever the server renders into that slot passes
// through unchanged.

type Theme = "light" | "dark";

type ThemeContextValue = { theme: Theme; toggle: () => void };

const ThemeContext = createContext<ThemeContextValue | null>(null);

// The hook hides the context plumbing from consumers.
export const useTheme = function useTheme() {
  const value = useContext(ThemeContext);

  if (value === null)
    throw new Error("useTheme only works inside ThemeProvider.");

  return value;
};

export const ThemeProvider = function ThemeProvider({
  children,
}: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("light");

  // Memoized so consumers only re-render when the theme changes.
  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      toggle: () => {
        setTheme((current) => (current === "light" ? "dark" : "light"));
      },
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
