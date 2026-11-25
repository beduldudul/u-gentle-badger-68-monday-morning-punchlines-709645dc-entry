import { writeFileSync, mkdirSync } from "node:fs";

// One Monday-morning joke: Monday personified, knocking at 6 AM,
// the punchline is the meeting invite slipped under the door.
const joke =
  "Monday knocked on my door at 6 AM. " +
  "I pretended I wasn't home. " +
  "It left a meeting invite under the door.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke);
