/**
 * build-import-map.ts
 *
 * Generates data/import-map/{angular,react,webcomponents}.json — symbol → module
 * maps used by the resolve_import tool.
 *
 *   angular        secondary entry points of the PUBLISHED igniteui-angular
 *                  package (npm, `latest` by default), read from its typings with
 *                  the TypeScript compiler and verified by type-checking every
 *                  mapped import; plus imports observed in the Angular examples
 *                  for the other igniteui-angular-* packages (charts, maps, ...).
 *   react          imports observed in react/igniteui-react-examples.
 *   webcomponents  imports observed in webcomponents/igniteui-wc-examples.
 *
 * Usage:
 *   npx tsx scripts/build-import-map.ts                   # igniteui-angular@latest
 *   npx tsx scripts/build-import-map.ts --angular 22.1.4  # pin a version or dist-tag
 */

import { execSync } from "child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join, resolve } from "path";
import {
  collectObservedImports,
  collectPublishedExports,
  fetchPublishedPackage,
  readPublishedPackage,
  verifyPublishedImports,
  walkSourceFiles,
  type ImportMapFile,
  type ImportMapSymbol,
} from "./lib/import-map.js";

const ROOT = resolve(import.meta.dirname, "..");
const OUT_DIR = join(ROOT, "data", "import-map");

function argValue(flag: string): string | undefined {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : undefined;
}

function describeRevision(dir: string): string {
  try {
    return execSync("git describe --tags --always", { cwd: dir, encoding: "utf-8" }).trim();
  } catch {
    return "unknown";
  }
}

function requireDir(dir: string): void {
  if (!existsSync(dir)) {
    console.error(`❌ Not found: ${dir}\n   Run: git submodule update --init ${dir.slice(ROOT.length + 1).replace(/\\/g, "/")}`);
    process.exit(1);
  }
}

function write(platform: string, sources: Record<string, string>, symbols: Record<string, ImportMapSymbol>): void {
  const file: ImportMapFile = { platform, sources, symbols };
  mkdirSync(OUT_DIR, { recursive: true });
  const out = join(OUT_DIR, `${platform}.json`);
  writeFileSync(out, JSON.stringify(file, null, 1) + "\n");
  console.log(`✅ ${platform}: ${Object.keys(symbols).length} symbols → ${out}`);
}

function observed(dirs: string[], extensions: string[], accept: (m: string) => boolean) {
  function* all() {
    for (const dir of dirs) yield* walkSourceFiles(dir, extensions);
  }
  return collectObservedImports(all(), accept);
}

// ── Angular ────────────────────────────────────────────────────────────────
const angularSpec = `igniteui-angular@${argValue("--angular") ?? "latest"}`;
const workDir = mkdtempSync(join(tmpdir(), "igniteui-import-map-"));
try {
  console.log(`📦 Fetching ${angularSpec}...`);
  const pkg = readPublishedPackage(fetchPublishedPackage(angularSpec, workDir));
  console.log(`   ${pkg.name}@${pkg.version}: ${pkg.entries.length} entry points`);

  const entryPoints = collectPublishedExports(pkg);
  const failures = verifyPublishedImports(pkg, entryPoints);
  if (failures.length > 0) {
    console.error(`❌ ${failures.length} mapped imports do not compile against ${pkg.name}@${pkg.version}:`);
    for (const f of failures) console.error(`   ${f.symbol} from '${f.module}': ${f.message}`);
    throw new Error("Import map verification failed");
  }
  console.log(`   ✔ all ${Object.keys(entryPoints).length} imports type-check against the published typings`);

  const angularExamples = join(ROOT, "angular", "igniteui-angular-examples", "samples");
  const angularSamples = join(ROOT, "angular", "igniteui-angular-samples", "src");
  const angularObserved = observed(
    [angularExamples, angularSamples],
    [".ts"],
    m => m.startsWith("igniteui-angular-"),
  );
  write(
    "angular",
    {
      [pkg.name]: pkg.version,
      "igniteui-angular-examples": describeRevision(angularExamples),
    },
    { ...angularObserved, ...entryPoints },
  );
} finally {
  rmSync(workDir, { recursive: true, force: true });
}

// ── React ──────────────────────────────────────────────────────────────────
const reactExamples = join(ROOT, "react", "igniteui-react-examples", "samples");
requireDir(reactExamples);
write(
  "react",
  { "igniteui-react-examples": describeRevision(reactExamples) },
  observed([reactExamples], [".ts", ".tsx"], m => m.startsWith("igniteui-react")),
);

// ── Web Components ─────────────────────────────────────────────────────────
const wcExamples = join(ROOT, "webcomponents", "igniteui-wc-examples", "samples");
requireDir(wcExamples);
write(
  "webcomponents",
  { "igniteui-wc-examples": describeRevision(wcExamples) },
  observed([wcExamples], [".ts"], m => /^igniteui-(webcomponents|dockmanager|grid-lite)/.test(m)),
);
