// REVIEWED

import type { Metadata } from "next";

// METADATA.
// generateMetadata runs on the server and produces the head tags
// for this page. It is async so the values can depend on data. The
// simpler sibling is a static object, export const metadata = {...},
// for values known ahead of time. A segment exports one or the
// other, never both.

// Stands in for fetching the page record from a CMS or database.
const getPageRecord = async function getPageRecord() {
  return {
    title: "13 Metadata",
    description: "How Next.js writes the head tags for a page.",
  };
};

export const generateMetadata =
  async function generateMetadata(): Promise<Metadata> {
    const record = await getPageRecord();

    return {
      title: record.title,
      description: record.description,
      openGraph: {
        title: record.title,
        description: record.description,
      },
    };
  };

const MetadataPage = function MetadataPage() {
  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">13 Metadata</h2>
      <p className="text-sm">
        Nothing visible changed in the body. Look in two places instead: the
        browser tab now reads 13 Metadata, and view-source shows the og:title
        and og:description meta tags in the head.
      </p>
    </main>
  );
};

export default MetadataPage;
