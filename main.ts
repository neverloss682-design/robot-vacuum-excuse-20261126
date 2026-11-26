// The Robot Vacuum's Funniest Excuse — one-line entry generator.
// Writes the entry verbatim to <output>/entry.txt (default /output,
// or $MAKEFUN_OUTPUT_DIR). Node 22, stdlib only, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a robot vacuum defending itself for missing a spot.
// Reversal: the "missed" crumbs by the fridge were left on purpose,
// as a breadcrumb trail for the 3 a.m. kitchen run.
const ENTRY =
  "I didn't miss the crumbs by the fridge \u2014 I left them as a trail so you can find the kitchen again at 3 a.m.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the entry exactly, no trailing newline, so the file holds
// precisely the 107 characters the gate counts.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
