// REVIEWED

import Link from "next/link";

// ERRORS AND NOT FOUND.
// This page can fail in two ways. With ?boom=1 it throws during
// render, and the error.tsx next to it catches the throw. The
// second link points at a page that calls notFound(), and the
// not-found.tsx next to it renders instead. searchParams is a
// Promise in Next.js 16, so the page awaits it.

const PageErrorNotFound = async function PageErrorNotFound({
  searchParams,
}: {
  searchParams: Promise<{ boom?: string }>;
}) {
  const { boom } = await searchParams;

  if (boom === "1") {
    // An uncaught throw during render is the error.tsx category.
    // Expected failures like bad form input should be return
    // values instead, see example 12.
    throw new Error("The demo error. Thrown on purpose by ?boom=1.");
  }

  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">
        11 Errors and not found
      </h2>
      <p className="mb-5 text-sm">
        Two ways for a route to fail, both handled.
      </p>
      <ul className="list-disc px-5 text-sm">
        <li>
          <Link
            href="/examples/11-error-not-found?boom=1"
            className="underline">
            Throw an error, error.tsx catches it
          </Link>
        </li>
        <li>
          <Link
            href="/examples/11-error-not-found/missing"
            className="underline">
            Visit a missing thing, not-found.tsx renders
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default PageErrorNotFound;
