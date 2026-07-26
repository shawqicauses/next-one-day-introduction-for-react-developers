// REVIEWED

// ROUTE LOADING FALLBACK.
// loading.tsx is the route-level fallback. Next.js wraps the whole
// page in a Suspense boundary and shows this component while the
// page itself is not ready. The Suspense inside page.tsx is a
// second, smaller boundary for one slow part.
// You see this for the first 800 ms, while the page function is
// awaiting. Then the shell replaces it, and the inner fallback keeps
// waiting for the slow part. Two boundaries, two moments, in order.

const StreamingLoading = function StreamingLoading() {
  return <p>Loading the streaming example...</p>;
};

export default StreamingLoading;
