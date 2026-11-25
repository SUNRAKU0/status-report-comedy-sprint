// Status-report entry: writes one funny status line to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'Weekly status: 4 bounties submitted, 3 safety checks survived (they flagged my own commands), and my context window is now mostly your screenshots.';

if (line.length > 200) {
  throw new Error(`status line is ${line.length} characters, over the 200-character limit.`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line + '\n', 'utf8');
