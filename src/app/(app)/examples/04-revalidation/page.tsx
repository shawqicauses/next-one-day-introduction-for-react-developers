// REVIEWED

// REVALIDATION.
// This page is static HTML with a shelf life. For 30 seconds every
// visitor gets the same cached page. After that, the next visitor
// still gets the cached page, and Next.js rebuilds it in the
// background. Stale first, fresh after. That is stale while
// revalidate.

export const revalidate = 30;

const RevalidationPage = async function RevalidationPage() {
  // This runs at build time, then again on each background rebuild.
  const renderAt = Intl.DateTimeFormat("en-ZA", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date());

  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">
        04 Revalidation
      </h2>
      <p className="mb-2">Page generated at {renderAt}</p>
      <p className="text-sm text-gray-500">
        In production this value changes at most every 30 seconds, no matter how
        often you refresh.
      </p>
    </main>
  );
};

export default RevalidationPage;
