// REVIEWED

"use client";

// SEGMENT ERROR BOUNDARY.
// error.tsx must be a Client Component. Next.js wraps this route
// segment in a React error boundary and renders this fallback when
// the page throws. In production the message from a server throw is
// generic, and error.digest matches the entry in the server logs.
// Naming note: Next.js 16.2 added the unstable_retry prop and the
// current docs teach it. It re-fetches and re-renders the segment.
// The older reset prop still arrives too, but it only clears the
// error state without re-fetching.

const ErrorBoundary = function ErrorBoundary({
  error,
  unstable_retry: retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">
        Something went wrong
      </h2>
      <p className="mb-5 text-sm">
        The error boundary caught a throw: {error.message}
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="rounded border border-gray-300 px-3 py-1 text-sm">
        Try again
      </button>
    </main>
  );
};

export default ErrorBoundary;
