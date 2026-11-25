// One Line, No Deadline Met — make.fun bounty u-markk-st-one-line-no-deadline-met-6adc00ce
//
// The program writes exactly one single-line joke to /output/entry.txt:
// a deadline-miss excuse, in the voice of a real person cornered by a
// missed deadline, with a fresh angle (gym membership) and the punch at
// the end. Deterministic: no model calls, no network, no randomness.
//
// The line:
//   "I treated the deadline like my gym membership — I signed up full of
//    hope and then just stopped showing up."
//
// Why this line: it IS an excuse for a missed deadline (I neglected it),
// it has a turn (the gym-membership comparison reframes neglect as a
// familiar, self-deprecating habit), it is one sentence that reads cleanly
// aloud, it sounds like something a person would actually say when
// cornered, and the angle is fresh — not a dog, not traffic, not Wi-Fi.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY: string =
  "I treated the deadline like my gym membership \u2014 I signed up full of hope and then just stopped showing up.";

function main(): void {
  // Gate self-check (mirrors the sealed scorer): UTF-8 text, 1 to 200
  // characters, a single line, not only whitespace. Fail loudly rather
  // than write an entry the judge would never see.
  const chars: string[] = [...ENTRY];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry is ${chars.length} characters, gate needs 1-200`);
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
