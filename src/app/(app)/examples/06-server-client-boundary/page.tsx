// REVIEWED

import Counter from "./counter";

// SERVER AND CLIENT BOUNDARY.
// This page is a Server Component. It ships no JavaScript of its
// own. Counter is the one island on the page that does. The startAt
// prop crosses the boundary as plain serializable data.

const ServerClientBoundaryPage = function ServerClientBoundaryPage() {
  // This route reads no request data, so it is pre-rendered. The
  // timestamp below is baked in at build time.
  const renderedAt = Intl.DateTimeFormat("en-ZA", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date());

  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">
        06 Server and client boundary
      </h2>
      <p className="mb-5">Server part rendered at {renderedAt}</p>
      <Counter startAt={3} />
    </main>
  );
};

export default ServerClientBoundaryPage;
