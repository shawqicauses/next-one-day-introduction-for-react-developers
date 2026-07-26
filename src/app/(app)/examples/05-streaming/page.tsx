// REVIEWED

import { Suspense } from "react";

// STREAMING.
// The server does not wait for the whole page. It sends the fast
// shell first, then streams each Suspense boundary in when its
// content is ready. Every boundary is an independent streaming
// point.
// Note: pnpm build pre-renders this page because nothing here reads
// request data, so the delay runs once at build time. Run pnpm dev
// to watch the stream happen per request.

const wait = function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

// This component pretends to be a slow database query.
const SlowPart = async function SlowPart() {
  await wait(2000);
  return <p>The slow part arrived after two seconds.</p>;
};

// The page itself waits a short moment before it can render. While
// it waits, the page segment is suspended, and that is the moment
// loading.tsx is visible. Without this await the page renders
// instantly and the route-level fallback never appears.
const StreamingPage = async function StreamingPage() {
  await wait(800);

  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">05 Streaming</h2>
      <p className="mb-2">Fast header. This text is part of the shell.</p>
      <Suspense fallback={<p>Waiting for the slow part...</p>}>
        <SlowPart />
      </Suspense>
    </main>
  );
};

export default StreamingPage;
