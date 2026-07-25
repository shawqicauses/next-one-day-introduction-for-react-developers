// REVIEWED

import Link from "next/link";
import { PropsWithChildren } from "react";

// EXAMPLES LAYOUT.
// This layout wraps every example page. The nav stays the same
// while the page content below it changes per route.

const links = [
  { href: "/", label: "Home" },
  { href: "/examples/01-client-rendering", label: "01 Client" },
  { href: "/examples/02-server-rendering", label: "02 Server" },
  { href: "/examples/03-static-rendering", label: "03 Static" },
  { href: "/examples/04-revalidation", label: "04 Revalidation" },
  { href: "/examples/05-streaming", label: "05 Streaming" },
  { href: "/examples/06-server-client-boundary", label: "06 Boundary" },
  { href: "/examples/07-route-handler", label: "07 Route handler" },
  { href: "/examples/08-server-function", label: "08 Server function" },
  { href: "/examples/09-data-fetching", label: "09 Data fetching" },
  { href: "/examples/10-dynamic-route", label: "10 Dynamic route" },
  { href: "/examples/11-error-not-found", label: "11 Errors" },
  { href: "/examples/12-mutations", label: "12 Mutations" },
  { href: "/examples/13-metadata", label: "13 Metadata" },
  { href: "/examples/14-image-font", label: "14 Image and font" },
  { href: "/examples/15-providers", label: "15 Providers" },
];

const ExamplesLayout = function ExamplesLayout({
  children,
}: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10">
      <header className="mb-10 border-b border-gray-200 pb-5">
        <h1 className="mb-5 text-xl font-semibold leading-none">
          <Link href="/examples">Examples</Link>
        </h1>
        <nav aria-label="Examples">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default ExamplesLayout;
