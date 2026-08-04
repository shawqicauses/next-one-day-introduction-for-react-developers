// REVIEWED

import ThemePanel from "./theme-panel";
import { ThemeProvider } from "./theme-provider";

// SERVER PAGE WITH A CLIENT PROVIDER.
// This page stays a Server Component even though it renders a
// context provider. The provider is a client island that takes
// children. Render providers as deep as possible: this one wraps
// one panel, not the whole app, so the rest of the tree stays
// server-rendered.

const ProvidersPage = function ProvidersPage() {
  // This route reads no request data, so it is pre-rendered. The
  // timestamp below is baked in and never changes on toggle.
  const renderAt = Intl.DateTimeFormat("en-ZA", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date());

  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">15 Providers</h2>
      <p className="mb-5 text-sm">
        Server part rendered at {renderAt}. Toggle below and this line does not
        re-render.
      </p>
      <ThemeProvider>
        <ThemePanel />
      </ThemeProvider>
    </main>
  );
};

export default ProvidersPage;
