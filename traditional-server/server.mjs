// REVIEWED

// TRADITIONAL SERVER.
// One Node.js process starts, binds port 4000, and stays alive.
// Run it with: node traditional-server/server.mjs

import { createServer } from "node:http";

// This variable lives as long as the process lives. Every request
// sees and updates the same number. That is the traditional server
// promise: memory persists between requests. Serverless makes no
// such promise. There, each request may land on a fresh instance
// and the count starts over.
let requestCount = 0;

const server = createServer((request, response) => {
  requestCount += 1;

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(
    JSON.stringify({
      message: "Hello from one long-running process.",
      requestCount,
    }),
  );
});

server.listen(4000, () => {
  console.log("Traditional server listening on http://localhost:4000");
});
