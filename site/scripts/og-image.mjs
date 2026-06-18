// Generate the 1200×630 social card: the white Tufts·CCA lockup centered on a
// Tufts-navy field. Run with `node scripts/og-image.mjs` (sharp is a dependency).
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const lockup = fileURLToPath(new URL('../src/assets/tucca/cca-horiz-white.png', import.meta.url));
const out = fileURLToPath(new URL('../public/og.png', import.meta.url));

const W = 1200;
const H = 630;
const NAVY = { r: 0, g: 46, b: 109, alpha: 1 }; // #002E6D

const lockupBuf = await sharp(lockup)
  .resize({ width: 760, withoutEnlargement: false })
  .toBuffer();

await sharp({ create: { width: W, height: H, channels: 4, background: NAVY } })
  .composite([{ input: lockupBuf, gravity: 'center' }])
  .png()
  .toFile(out);

console.log('Wrote', out);
