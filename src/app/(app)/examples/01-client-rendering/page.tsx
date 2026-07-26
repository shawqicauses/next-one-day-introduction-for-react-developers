// REVIEWED

"use client";

import { useEffect, useState } from "react";

// CLIENT RENDERING.
// This page opts into the client bundle. The server sends almost no
// HTML for it, just the loading state below. The browser downloads
// the JavaScript, renders, and only then fires the fetch.

const ClientRenderingPage = function ClientRenderingPage() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    // This runs in the browser, after render. View source and the
    // time is not in the HTML. It arrives later as JSON.
    fetch("/api/time")
      .then((response) => response.json())
      .then((data: { now: string }) => setTime(data.now))
      .catch(() => setTime("The fetch failed."));
  }, []);

  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">
        01 Client rendering
      </h2>
      <p className="mb-2">{time ?? "Loading the time from /api/time..."}</p>
      <p className="text-sm text-gray-500">
        Refresh and watch the loading state flash before the time appears.
      </p>
    </main>
  );
};

export default ClientRenderingPage;
