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
 *   4. Fetch source repos / tooling and generate TypeDoc JSON for each entry
 *      in `prebuildScripts` (these produce the src/data/<platform>/*.json
 *      files that the Astro build reads — without them llms-full.txt comes
 *      out empty because api-loader silently falls back to empty data).
 *   5. Run the platform's Astro build script
 *   6. Copy dist/en/api/<platform>/{pkg}/{ver}/llms-full.txt
 *        → docs/<output>/{pkg}/{ver}/llms-full.txt
 */

import {
  existsSync,
  mkdirSync,
  copyFileSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  unlinkSync,
} from 'fs';
import { join, resolve } from 'path';
import { execSync } from 'child_process';
import { pickLatestVersionDir } from '../../src/lib/version-picker.js';
import { getLatestVersion } from './platforms-config.js';

export interface PrebuildContext {
  submoduleDir: string;
  run: (cmd: string) => void;
  /**
   * Resolves the latest version of a package from
   * `common/api-docs/src/data/platforms-config.json` (versions[0]). Throws
   * if the package id is unknown — that's preferable to silently producing
   * an empty build, which is what hardcoded versions did when they drifted.
   */
  latestVersion: (packageId: string) => string;
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
  /**
   * npm scripts to run after `prebuild` and before the Astro build. Each
   * entry is passed verbatim to `npm run`, so pass-through args are written
   * with `--`, e.g. `'fetch:repo:angular -- 21.2.0'`. Used to fetch source
   * repos and produce the TypeDoc JSON the Astro build consumes. Pass a
   * function to look up the latest version per package from the submodule's
   * platforms-config.json instead of hardcoding it.
   */
  prebuildScripts?: string[] | ((ctx: PrebuildContext) => string[]);
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

  const latestVersion = (packageId: string): string =>
    getLatestVersion(submoduleDir, packageId);

  const ctx: PrebuildContext = { submoduleDir, run, latestVersion };

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
    cfg.prebuild(ctx);
  }

  const prebuildScripts = typeof cfg.prebuildScripts === 'function'
    ? cfg.prebuildScripts(ctx)
    : cfg.prebuildScripts;

  const prebuildFailures: string[] = [];
  if (prebuildScripts?.length) {
    console.log(`\n🛠  Generating TypeDoc JSON for ${cfg.displayName}...`);
    for (const script of prebuildScripts) {
      try {
        run(`npm run ${script}`);
      } catch (err) {
        // Non-fatal: a single fetch/typedoc failure (often a Windows-tar
        // issue in the submodule's fetch-*.js scripts) shouldn't kill the
        // whole platform's build. The Astro step tolerates missing JSON via
        // ALLOW_MISSING_PACKAGE_JSON — affected packages just get an empty
        // llms-full.txt while the rest are built normally.
        prebuildFailures.push(script);
        console.warn(`⚠  Prebuild step failed (continuing): ${script}`);
      }
    }
  }

  // TypeDoc occasionally writes a stub file (e.g. literal `undefined`) when
  // it converts a package with no source — which Vite then refuses to parse,
  // crashing the Astro build. The api-loader uses `import.meta.glob` across
  // src/data/ so a corrupt file in any platform's subdir poisons every
  // build. Walk all four platform dirs and drop unparseable JSON so the
  // missing-file fallback can kick in instead.
  for (const subdir of ['angular', 'react', 'web-components', 'blazor']) {
    const dataDir = join(submoduleDir, 'src', 'data', subdir);
    if (!existsSync(dataDir)) continue;
    for (const name of readdirSync(dataDir)) {
      if (!name.endsWith('.json')) continue;
      const file = join(dataDir, name);
      try {
        JSON.parse(readFileSync(file, 'utf-8'));
      } catch {
        console.warn(`⚠  Removing unparseable JSON: ${subdir}/${name}`);
        unlinkSync(file);
      }
    }
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

  if (prebuildFailures.length) {
    console.warn(
      `\n⚠  ${prebuildFailures.length} prebuild step(s) failed; affected packages will have empty llms-full.txt:`
    );
    for (const f of prebuildFailures) console.warn(`   - ${f}`);
  }
}
