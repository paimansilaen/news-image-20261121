// The World in One Day — Saturday, 21 November 2026.
// make.fun bounty news-image-20261121: the entry is the image beside this
// file, and this program hands it in by copying it to /output/entry.png
// (or $MAKEFUN_OUTPUT_DIR/entry.png when that is set).
// Node 22, standard library only; no network.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
const dest = join(out, 'entry.png');
copyFileSync(src, dest);

// Verify the hand-in is the whole image: a short copy must never pass.
if (statSync(dest).size !== statSync(src).size) {
  throw new Error(`entry.png copy incomplete: ${statSync(dest).size} of ${statSync(src).size} bytes`);
}
