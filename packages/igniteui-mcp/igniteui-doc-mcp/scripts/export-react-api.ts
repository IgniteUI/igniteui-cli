/**
 * export-react-api.ts
 *
 * Builds the React API docs from the common/api-docs submodule and exports
 * the generated llms-full.txt files into:
 *   docs/react-api/{package}/{version}/llms-full.txt
 *
 * Steps (handled here):
 *   1. Verify common/api-docs submodule is present
 *   2. npm install inside common/api-docs
 *   3. (skipped) fetch:tools:react — tool data download not currently working
 *   4. npm run build:react:en    — Astro SSG → dist/en/api/react/**
 *   5. Copy dist/en/api/react/{pkg}/{ver}/llms-full.txt
 *        → docs/react-api/{pkg}/{ver}/llms-full.txt
 */

import {
  existsSync,
  mkdirSync,
  copyFileSync,
  readdirSync,
  rmSync,
  statSync,
} from 'fs';
import { join, resolve } from 'path';
import { execSync } from 'child_process';
import { pickLatestVersionDir } from '../src/lib/version-picker.js';

const ROOT = resolve(import.meta.dirname, '..');
const SUBMODULE_DIR = join(ROOT, 'common', 'api-docs');
const ASTRO_DIST = join(SUBMODULE_DIR, 'dist', 'en', 'api', 'react');
const OUTPUT_DIR = join(ROOT, 'docs', 'react-api');

function run(cmd: string, cwd: string): void {
  console.log(`\n▶ ${cmd}`);
  execSync(cmd, { cwd, stdio: 'inherit' });
}

// ── Step 1: verify submodule is present ───────────────────────────────────
if (!existsSync(SUBMODULE_DIR)) {
  console.error(
    `❌ Submodule not found: ${SUBMODULE_DIR}\n` +
    `   Run: git submodule update --init common/api-docs`
  );
  process.exit(1);
}

// ── Step 2: install deps in submodule ─────────────────────────────────────
console.log('📦 Installing api-docs dependencies...');
run('npm install --silent', SUBMODULE_DIR);

// ── Step 3: (skipped) fetch React tools ─────────────────────────────────
// Tool data download is not currently working — tracked with package author.
// run('npm run fetch:tools:react', SUBMODULE_DIR);

// ── Step 4: Astro static build → dist/en/api/react/** ────────────────
console.log('\n🚀 Building Astro site for React (generates llms-full.txt files)...');
run('npm run build:react:en', SUBMODULE_DIR);

// ── Step 5: copy llms-full.txt files to docs/react-api/ ──────────────────
if (!existsSync(ASTRO_DIST)) {
  console.error(
    `❌ Astro build output not found: ${ASTRO_DIST}\n` +
    `   The Astro build may have failed.`
  );
  process.exit(1);
}

console.log('\n📂 Exporting llms-full.txt files to docs/react-api/...');
mkdirSync(OUTPUT_DIR, { recursive: true });

let copied = 0;

for (const pkgName of readdirSync(ASTRO_DIST)) {
  const pkgSrc = join(ASTRO_DIST, pkgName);
  if (!statSync(pkgSrc).isDirectory()) continue;

  const versions = readdirSync(pkgSrc)
    .filter(n => statSync(join(pkgSrc, n)).isDirectory());
  if (versions.length === 0) continue;

  const latest = pickLatestVersionDir(versions);
  const srcFile = join(pkgSrc, latest, 'llms-full.txt');
  if (!existsSync(srcFile)) continue;

  const pkgDest = join(OUTPUT_DIR, pkgName);
  rmSync(pkgDest, { recursive: true, force: true });
  const destDir = join(pkgDest, latest);
  mkdirSync(destDir, { recursive: true });

  copyFileSync(srcFile, join(destDir, 'llms-full.txt'));
  const note = versions.length > 1 ? ` (latest of ${versions.length})` : '';
  console.log(`  ✓ ${pkgName}/${latest}/llms-full.txt${note}`);
  copied++;
}

if (copied === 0) {
  console.error('❌ No llms-full.txt files were found in the Astro build output.');
  process.exit(1);
}

console.log(`\n✅ Exported ${copied} llms-full.txt file(s) to docs/react-api/`);
