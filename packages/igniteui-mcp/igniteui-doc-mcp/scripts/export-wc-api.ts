/**
 * export-wc-api.ts
 *
 * Builds the Web Components API docs from the blazor/api-docs submodule and
 * exports the generated llms-full.txt files into:
 *   docs/webcomponents-api/{package}/{version}/llms-full.txt
 *
 * Steps (handled here):
 *   1. Verify blazor/api-docs submodule is present
 *   2. npm install inside blazor/api-docs
 *   3. (skipped) fetch:tools:wc / fetch:wc-grids — tool data download not working
 *   4. npm run build:wc:en    — Astro SSG → dist/en/api/webcomponents/**
 *   5. Copy dist/en/api/webcomponents/{pkg}/{ver}/llms-full.txt
 *        → docs/webcomponents-api/{pkg}/{ver}/llms-full.txt
 */

import {
  existsSync,
  mkdirSync,
  copyFileSync,
  readdirSync,
  statSync,
} from 'fs';
import { join, resolve } from 'path';
import { execSync } from 'child_process';

const ROOT = resolve(import.meta.dirname, '..');
const SUBMODULE_DIR = join(ROOT, 'blazor', 'api-docs');
const ASTRO_DIST = join(SUBMODULE_DIR, 'dist', 'en', 'api', 'webcomponents');
const OUTPUT_DIR = join(ROOT, 'docs', 'webcomponents-api');

function run(cmd: string, cwd: string): void {
  console.log(`\n▶ ${cmd}`);
  execSync(cmd, { cwd, stdio: 'inherit' });
}

// ── Step 1: verify submodule is present ───────────────────────────────────
if (!existsSync(SUBMODULE_DIR)) {
  console.error(
    `❌ Submodule not found: ${SUBMODULE_DIR}\n` +
    `   Run: git submodule update --init blazor/api-docs`
  );
  process.exit(1);
}

// ── Step 2: install deps in submodule ─────────────────────────────────────
console.log('📦 Installing api-docs dependencies...');
run('npm install --silent', SUBMODULE_DIR);

// ── Step 3: (skipped) fetch WC tools and grid typedoc JSON ──────────────
// Tool data download is not currently working — tracked with package author.
// run('npm run fetch:tools:wc', SUBMODULE_DIR);
// run('npm run fetch:wc-grids', SUBMODULE_DIR);

// ── Step 4: Astro static build → dist/en/api/webcomponents/** ————————
console.log('\n🚀 Building Astro site for Web Components (generates llms-full.txt files)...');
run('npm run build:wc:en', SUBMODULE_DIR);

// ── Step 5: copy llms-full.txt files to docs/webcomponents-api/ ──────────
if (!existsSync(ASTRO_DIST)) {
  console.error(
    `❌ Astro build output not found: ${ASTRO_DIST}\n` +
    `   The Astro build may have failed.`
  );
  process.exit(1);
}

console.log('\n📂 Exporting llms-full.txt files to docs/webcomponents-api/...');
mkdirSync(OUTPUT_DIR, { recursive: true });

let copied = 0;

for (const pkgName of readdirSync(ASTRO_DIST)) {
  const pkgSrc = join(ASTRO_DIST, pkgName);
  if (!statSync(pkgSrc).isDirectory()) continue;

  for (const versionName of readdirSync(pkgSrc)) {
    const versionSrc = join(pkgSrc, versionName);
    if (!statSync(versionSrc).isDirectory()) continue;

    const srcFile = join(versionSrc, 'llms-full.txt');
    if (!existsSync(srcFile)) continue;

    const destDir = join(OUTPUT_DIR, pkgName, versionName);
    mkdirSync(destDir, { recursive: true });

    const destFile = join(destDir, 'llms-full.txt');
    copyFileSync(srcFile, destFile);
    console.log(`  ✓ ${pkgName}/${versionName}/llms-full.txt`);
    copied++;
  }
}

if (copied === 0) {
  console.error('❌ No llms-full.txt files were found in the Astro build output.');
  process.exit(1);
}

console.log(`\n✅ Exported ${copied} llms-full.txt file(s) to docs/webcomponents-api/`);
