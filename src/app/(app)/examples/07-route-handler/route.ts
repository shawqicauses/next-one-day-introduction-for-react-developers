// REVIEWED

// ROUTE HANDLER IN THE PAGE TREE.
// A folder can hold route.ts instead of page.tsx. Visiting
// /examples/07-route-handler returns JSON, not a page. This is the
// proof that a Next.js app has a back-end built in.

const facts = [
  "Server Components render on the server and ship no JavaScript.",
  "In Next.js 16, fetch requests are not cached by default.",
  "Serverless spins an instance up per request and may spin it down after.",
];

export const GET = async function GET() {
  return Response.json({ facts });
};
