// The joke about the demo — role reversal: the agent writes the code, then
// asks the human to explain what it does.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My coding agent wrote the whole feature, then asked me to explain what it does — the demo turned into my own code interviewing me for my job.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
