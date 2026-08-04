// REVIEWED - 01

// STATIC RENDERING.
// This page reads no request data, so Next.js pre-renders it at
// build time. Every visitor gets the same HTML. Refresh and the
// time does not change. In the build output this route carries the
// static symbol.

const StaticRenderingPage = async function StaticRenderingPage() {
  // This const is evaluated once, when the page is pre-rendered. It is
  // a build-time timestamp, not a request-time one.
  const wasBuiltAt = Intl.DateTimeFormat("en-ZA", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date());

  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">
        03 Static rendering
      </h2>
      <p className="mb-2">Pre-rendered at {wasBuiltAt}</p>
      <p className="text-sm text-gray-500">
        Run pnpm build and this value is frozen into the HTML until the next
        build.
      </p>
    </main>
  );
};

export default StaticRenderingPage;
