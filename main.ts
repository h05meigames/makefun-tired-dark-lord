// The Tired Dark Lord: A 100-Word Villain Monologue
// Entry for https://make.fun/c/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb
//
// Prints the monologue to stdout and writes it to /output/entry.txt
// (the artifact the make.fun program/v1 harness grades).

import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE =
  "Ah. The hero arrives, right on schedule — sword up, speech ready, boots tracking mud across the rug I had cleaned. " +
  "Sit. No, not there. That chair bites. " +
  "Listen, I have toppled kings, bound the tide to my will, buried a brother beneath the Ashen Coast — and still, every Tuesday, some bright-eyed child kicks down my door to save the world before supper. " +
  "Tonight the eclipse crowns the tide black, the rite is ready, and all I need is one quiet hour. " +
  "So. Shall we do this quickly? I have a kingdom to ruin — and a nap to take.";

console.log(MONOLOGUE);

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MONOLOGUE + "\n", "utf8");
} catch {
  // /output may not exist outside the grading sandbox; stdout is the fallback.
}
