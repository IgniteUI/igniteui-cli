import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
const PKG_PATH = join(ROOT, 'blazor', 'api-docs', 'package.json');

const OVERRIDES = {
  '@astrojs/sitemap': '^3.7.2',
  zod: '^4.3.6',
};

if (!existsSync(PKG_PATH)) {
  console.error(
    `Submodule package.json not found: ${PKG_PATH}\n` +
    `   Run: git submodule update --init blazor/api-docs`
  );
  process.exit(1);
}

const raw = readFileSync(PKG_PATH, 'utf8');
const pkg = JSON.parse(raw);

const current = pkg.overrides ?? {};
const merged = { ...current, ...OVERRIDES };

const alreadyApplied = Object.entries(OVERRIDES).every(
  ([k, v]) => current[k] === v
);

if (alreadyApplied) {
  console.log(`Overrides already applied in ${PKG_PATH}`);
  process.exit(0);
}

pkg.overrides = merged;
const trailingNewline = raw.endsWith('\n') ? '\n' : '';
writeFileSync(PKG_PATH, JSON.stringify(pkg, null, 2) + trailingNewline);

console.log(`Patched overrides in ${PKG_PATH}:`);
for (const [k, v] of Object.entries(OVERRIDES)) {
  console.log(`   ${k}: ${v}`);
}
