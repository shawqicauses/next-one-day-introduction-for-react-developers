// REVIEWED

import { headers } from "next/headers";

// SERVER RENDERING.
// This page renders on the server for every request. Awaiting
// headers() reads request data, and that opts the whole route into
// dynamic rendering. Refresh and the time changes. In the build
// output this route carries the dynamic symbol.

const ServerRenderingPage = async function ServerRenderingPage() {
  // headers() is async in Next.js 16. It is a request-time API, so
  // this HTML can only be made when a real request exists.
  const requestHeaders = await headers();
  const userAgent = requestHeaders.get("user-agent") ?? "unknown";

  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">
        02 Server rendering
      </h2>
      <p className="mb-2">
        Rendered on the server at{" "}
        {Intl.DateTimeFormat("en-ZA", {
          dateStyle: "medium",
          timeStyle: "medium",
        }).format(new Date())}
      </p>
      <p className="text-sm text-gray-500">Your user agent: {userAgent}</p>
    </main>
  );
};

export default ServerRenderingPage;
