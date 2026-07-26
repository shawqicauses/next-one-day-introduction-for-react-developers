// REVIEWED

import { notFound } from "next/navigation";

// DYNAMIC SEGMENT PAGE.
// This one file serves /examples/10-dynamic-route/anything. The
// folder name [slug] makes the segment dynamic, and the page reads
// the value from params. In Next.js 16 params is a Promise, so the
// component is async and awaits it.

// Stands in for a database look-up keyed by the URL segment.
const titles: Record<string, string> = {
  "next-js": "Next.js, the framework this workshop is about",
  "react": "React, the library it builds on",
};

const SlugPage = async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = titles[slug];

  // notFound() throws and stops rendering here. Next.js sends the
  // missing path into the 404 flow and responds with status 404.
  if (!title) notFound();

  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">
        10 Dynamic route: {slug}
      </h2>
      <p className="mb-2 text-sm">{title}</p>
      <p className="text-sm text-gray-500">
        The same page.tsx rendered this. Only the awaited slug changed.
      </p>
    </main>
  );
};

export default SlugPage;
