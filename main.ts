// Entry: "The watchmaker's loupe..." — gratitude shown, not told.
// The loupe image: a pause the movement earned; each speck a pause earned by reading.
// Exact size: 165 Unicode code points / 167 bytes (UTF-8).
// Deterministic output required: graded twice in sandbox; all runs must be byte-identical.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const text = `The watchmaker's loupe catches dust on the gear train —
each speck a pause the movement earned.
Your reading does that for these lines.
May your pause be that clean.`;

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, text, "utf8");