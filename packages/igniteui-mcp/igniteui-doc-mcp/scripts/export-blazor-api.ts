/**
 * export-blazor-api.ts
 *
 * Builds the Blazor API docs from the api-docs submodule and exports the
 * generated llms-full.txt files into docs/blazor/{package}/{version}/llms-full.txt.
 *
 * Prerequisites (handled here):
 *   1. npm install inside blazor/api-docs
 *   2. dotnet tool restore inside blazor/api-docs
 *   3. npm run fetch:tools:blazor  — downloads NuGet DLLs
 *   4. npm run build:IgniteUI.Blazor (×5 packages)  — docfx → JSON
 *   5. npm run build:blazor:en  — Astro SSG → dist/en/api/blazor/**
 *   6. Copy dist/en/api/blazor/{pkg}/{ver}/llms-full.txt → docs/blazor/{pkg}/{ver}/llms-full.txt
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
const ASTRO_DIST = join(SUBMODULE_DIR, 'dist', 'en', 'api', 'blazor');
const OUTPUT_DIR = join(ROOT, 'docs', 'blazor');

// Blazor package build scripts in api-docs — order matters (base package first)
const BLAZOR_BUILD_SCRIPTS = [
  'build:IgniteUI.Blazor',
  'build:IgniteUI.Blazor.Documents.Core',
  'build:IgniteUI.Blazor.Documents.Excel',
  'build:IgniteUI.Blazor.Lite',
  'build:IgniteUI.Blazor.GridLite',
];

function run(cmd: string, cwd: string): void {
  console.log(`\n▶ ${cmd}`);
  execSync(cmd, { cwd, stdio: 'inherit' });
}

// ── Step 1: install deps in submodule ──────────────────────────────────────
if (!existsSync(SUBMODULE_DIR)) {
  console.error(
    `❌ Submodule not found: ${SUBMODULE_DIR}\n` +
    `   Run: git submodule update --init blazor/api-docs`
  );
  process.exit(1);
}

console.log('📦 Installing api-docs dependencies...');
run('npm install --silent', SUBMODULE_DIR);

// ── Step 2: restore dotnet tools (docfx) ──────────────────────────────────
console.log('\n🔧 Restoring dotnet local tools (docfx)...');
run('dotnet tool restore', SUBMODULE_DIR);

// ── Step 3: fetch Blazor NuGet packages ───────────────────────────────────
console.log('\n📥 Fetching Blazor NuGet packages...');
run('npm run fetch:tools:blazor', SUBMODULE_DIR);

// ── Step 4: build each Blazor docfx package → JSON ────────────────────────
for (const script of BLAZOR_BUILD_SCRIPTS) {
  console.log(`\n🏗️  Running ${script}...`);
  run(`npm run ${script}`, SUBMODULE_DIR);
}

// ── Step 5: Astro static build → dist/en/api/blazor/** ───────────────────
console.log('\n🚀 Building Astro site for Blazor (generates llms-full.txt files)...');
run('npm run build:blazor:en', SUBMODULE_DIR);

// ── Step 6: copy llms-full.txt files to docs/blazor/ ─────────────────────
if (!existsSync(ASTRO_DIST)) {
  console.error(
    `❌ Astro build output not found: ${ASTRO_DIST}\n` +
    `   The Astro build may have failed.`
  );
  process.exit(1);
}

console.log('\n📂 Exporting llms-full.txt files to docs/blazor/...');
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

console.log(`\n✅ Exported ${copied} llms-full.txt file(s) to docs/blazor/`);
