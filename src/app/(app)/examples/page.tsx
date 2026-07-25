// REVIEWED

import Link from "next/link";

// EXAMPLES INDEX.
// Each example is one small idea. Open the file behind the route
// and read the comments. The module number maps to the workshop.

const examples = [
  {
    href: "/examples/01-client-rendering",
    title: "01 Client rendering",
    description: "The browser renders the page and then fetches the data.",
    module: "Module 4, rendering patterns",
  },
  {
    href: "/examples/02-server-rendering",
    title: "02 Server rendering",
    description: "The server makes fresh HTML for every request.",
    module: "Module 4, rendering patterns",
  },
  {
    href: "/examples/03-static-rendering",
    title: "03 Static rendering",
    description: "The HTML is made once at build time and reused.",
    module: "Module 4, rendering patterns",
  },
  {
    href: "/examples/04-revalidation",
    title: "04 Revalidation",
    description: "Static HTML that refreshes in the background every 30s.",
    module: "Module 4, rendering patterns",
  },
  {
    href: "/examples/05-streaming",
    title: "05 Streaming",
    description: "The fast shell arrives first, slow parts stream in later.",
    module: "Module 4, rendering patterns",
  },
  {
    href: "/examples/06-server-client-boundary",
    title: "06 Server and client boundary",
    description: "A server page with one interactive client island.",
    module: "Module 3, the mental model",
  },
  {
    href: "/examples/07-route-handler",
    title: "07 Route handler",
    description: "A folder that answers with JSON instead of a page.",
    module: "Module 9, servers and serverless",
  },
  {
    href: "/examples/08-server-function",
    title: "08 Server function",
    description: "A form that runs a function on the server, plus a lesson.",
    module: "Module 6, mutations",
  },
  {
    href: "/examples/09-data-fetching",
    title: "09 Data fetching",
    description: "An async server component that awaits its own data.",
    module: "Module 3, the mental model",
  },
  {
    href: "/examples/10-dynamic-route",
    title: "10 Dynamic route",
    description: "One [slug] folder that makes many pages from data.",
    module: "Module 3, the mental model",
  },
  {
    href: "/examples/11-error-not-found",
    title: "11 Errors and not found",
    description: "error.tsx catches a crash, not-found.tsx renders the 404.",
    module: "Module 5, guardrails",
  },
  {
    href: "/examples/12-mutations",
    title: "12 Mutations",
    description: "A form action that validates, writes, and revalidates.",
    module: "Module 6, mutations",
  },
  {
    href: "/examples/13-metadata",
    title: "13 Metadata",
    description: "generateMetadata writes the title and the open graph tags.",
    module: "Module 8, the daily tool-kit",
  },
  {
    href: "/examples/14-image-font",
    title: "14 Image and font",
    description: "next/image sizing and a self-hosted Google font.",
    module: "Module 8, the daily tool-kit",
  },
  {
    href: "/examples/15-providers",
    title: "15 Providers",
    description:
      "A client context provider around one island on a server page.",
    module: "Module 7, state and providers",
  },
];

const ExamplesPage = function ExamplesPage() {
  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">All examples</h2>
      <ul className="space-y-10">
        {examples.map((example) => (
          <li key={example.href}>
            <Link
              href={example.href}
              className="mb-2 inline-block font-medium leading-none underline">
              {example.title}
            </Link>
            <p className="mb-2 text-sm">{example.description}</p>
            <p className="text-xs text-gray-500">{example.module}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ExamplesPage;
