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