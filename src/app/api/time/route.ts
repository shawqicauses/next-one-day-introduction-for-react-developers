// REVIEWED - 01

// ROUTE HANDLER.
// A Route Handler runs on the server. This is the smallest back-end
// Next.js gives you. Visiting /api/time returns JSON, not HTML.
// GET handlers are not cached by default, so the time is fresh on
// every request.

export const GET = async function GET() {
  // sleep for 1 second
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return Response.json({
    now: Intl.DateTimeFormat("en-ZA", {
      dateStyle: "medium",
      timeStyle: "medium",
    }).format(new Date()),
  });
};
