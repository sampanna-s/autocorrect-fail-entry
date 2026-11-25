import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Can't wait to sue you tonight, wear something nice";

if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0) {
  throw new Error("entry line fails the gate: must be 1-199 non-blank characters");
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const tmp = join(outDir, ".entry.txt.tmp");
writeFileSync(tmp, LINE, "utf8");
renameSync(tmp, join(outDir, "entry.txt"));
