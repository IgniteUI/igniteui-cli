/**
 * export-api.ts
 *
 * Shared implementation for the four `export-<platform>-api.ts` scripts.
 * Each platform wrapper supplies an ApiExportConfig; this module runs the
 * common pipeline:
 *
 *   1. Verify common/api-docs submodule is present
 *   2. npm install inside common/api-docs
 *   3. (optional) platform-specific prebuild hook
 *   4. Run the platform's Astro build script
 *   5. Copy dist/en/api/<platform>/{pkg}/{ver}/llms-full.txt
 *        → docs/<output>/{pkg}/{ver}/llms-full.txt
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
import { pickLatestVersionDir } from '../../src/lib/version-picker.js';

export interface PrebuildContext {
  submoduleDir: string;
  run: (cmd: string) => void;
}

export interface ApiExportConfig {
  /** Platform key used in log messages, e.g. 'angular', 'blazor'. */
  platform: string;
  /** Human-readable name used in console output, e.g. 'Web Components'. */
  displayName: string;
  /** Subdirectory under api-docs/dist/en/api/ produced by the Astro build. */
  astroDistSubdir: string;
  /** Directory name under docs/ where llms-full.txt files are written. */
  outputDirName: string;
  /** npm script in api-docs that runs the Astro build for this platform. */
  buildScript: string;
  /** Optional hook for extra steps before the Astro build (e.g. Blazor docfx). */
  prebuild?: (ctx: PrebuildContext) => void;
}

export function exportApi(cfg: ApiExportConfig): void {
  const scriptsDir = resolve(import.meta.dirname, '..');
  const root = resolve(scriptsDir, '..');
  const submoduleDir = join(root, 'common', 'api-docs');
  const astroDist = join(submoduleDir, 'dist', 'en', 'api', cfg.astroDistSubdir);
  const outputDir = join(root, 'docs', cfg.outputDirName);

  const run = (cmd: string): void => {
    console.log(`\n▶ ${cmd}`);
    execSync(cmd, { cwd: submoduleDir, stdio: 'inherit' });
  };

  if (!existsSync(submoduleDir)) {
    console.error(
      `❌ Submodule not found: ${submoduleDir}\n` +
      `   Run: git submodule update --init common/api-docs`
    );
    process.exit(1);
  }

  console.log('📦 Installing api-docs dependencies...');
  run('npm install --silent');

  if (cfg.prebuild) {
    cfg.prebuild({ submoduleDir, run });
  }

  console.log(`\n🚀 Building Astro site for ${cfg.displayName} (generates llms-full.txt files)...`);
  run(`npm run ${cfg.buildScript}`);

  if (!existsSync(astroDist)) {
    console.error(
      `❌ Astro build output not found: ${astroDist}\n` +
      `   The Astro build may have failed.`
    );
    process.exit(1);
  }

  console.log(`\n📂 Exporting llms-full.txt files to docs/${cfg.outputDirName}/...`);
  mkdirSync(outputDir, { recursive: true });

  let copied = 0;

  for (const pkgName of readdirSync(astroDist)) {
    const pkgSrc = join(astroDist, pkgName);
    if (!statSync(pkgSrc).isDirectory()) continue;

    const versions = readdirSync(pkgSrc)
      .filter(n => statSync(join(pkgSrc, n)).isDirectory());
    if (versions.length === 0) continue;

    const latest = pickLatestVersionDir(versions);
    const srcFile = join(pkgSrc, latest, 'llms-full.txt');
    if (!existsSync(srcFile)) continue;

    const pkgDest = join(outputDir, pkgName);
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

  console.log(`\n✅ Exported ${copied} llms-full.txt file(s) to docs/${cfg.outputDirName}/`);
}
