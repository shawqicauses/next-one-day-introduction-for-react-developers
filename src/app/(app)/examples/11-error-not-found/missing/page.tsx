// REVIEWED

import { notFound } from "next/navigation";

// A PAGE THAT IS ALWAYS MISSING.
// notFound() throws, so rendering stops on this line and the
// nearest not-found.tsx renders. No return is needed after it
// because its TypeScript type is never.

const MissingPage = function MissingPage() {
  notFound();
};

export default MissingPage;
