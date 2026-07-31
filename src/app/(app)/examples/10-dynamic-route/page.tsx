// REVIEWED - 01

import Link from "next/link";

// DYNAMIC ROUTE INDEX.
// The folder next to this file is named [slug]. Folders with square
// brackets are dynamic segments: one folder serves many URLs, and
// the page reads which one from params. The first two links below
// exist in the data. The third one does not, so its page calls
// notFound() and the 404 flow takes over.

const links = [
  {
    href: "/examples/10-dynamic-route/next-js",
    label: "next-js, a known slug",
  },
  { href: "/examples/10-dynamic-route/react", label: "react, a known slug" },
  { href: "/examples/10-dynamic-route/tailwind", label: "tailwind, missing" },
];

const DynamicRoutePage = function DynamicRoutePage() {
  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">
        10 Dynamic route
      </h2>
      <p className="mb-5 text-sm">
        One [slug] folder serves every link below. Two slugs exist in the data,
        one does not.
      </p>
      <ul className="list-disc px-5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

// /a -> /s (replace) -> /h: browser's history would be: a -> h
// /a -> /s (push) -> /h: browser's history would be: a -> s -> h

export default DynamicRoutePage;
