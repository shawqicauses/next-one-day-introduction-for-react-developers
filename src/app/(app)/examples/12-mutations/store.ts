// REVIEWED

// MODULE-LEVEL STATE, ON PURPOSE. THE SERVERLESS LESSON AGAIN.
// This array lives in the memory of one server process. It resets
// when the process restarts, and on serverless two requests can hit
// two instances with two different copies. Memory is a cache, never
// a store. A real app would write to a database here.

export type Item = { id: number; text: string };

export const items: Item[] = [];
