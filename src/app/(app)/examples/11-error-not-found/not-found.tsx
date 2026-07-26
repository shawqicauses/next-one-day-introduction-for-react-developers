// REVIEWED

import Link from "next/link";

// SEGMENT NOT FOUND UI.
// not-found.tsx renders when notFound() is thrown in this segment
// or below it. Unlike error.tsx this stays a Server Component. The
// response carries status 404 plus a noindex meta tag.

const NotFound = function NotFound() {
  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">Not found</h2>
      <p className="mb-5 text-sm">
        Something called notFound(), and this file rendered instead of the page.
      </p>
      <Link
        href="/examples/11-error-not-found"
        className="inline-block text-sm underline">
        Back to the example
      </Link>
    </main>
  );
};

export default NotFound;
