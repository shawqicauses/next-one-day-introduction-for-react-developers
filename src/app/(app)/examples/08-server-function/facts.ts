// REVIEWED

// MODULE-LEVEL STATE, ON PURPOSE. THIS IS THE MODULE 9 LESSON.
// This array lives in the memory of one server process. It resets
// every time the process restarts. Stop the dev server and the list
// is gone. On serverless, two requests may land on two different
// instances, each with its own copy of this array. Memory is a
// cache, never a store. A real app would write to a database.

export const facts: { id: number; text: string }[] = [];
