/**
 * build-import-map.ts
 *
 * Generates data/import-map/{angular,react,webcomponents}.json — symbol → module
 * maps used by the resolve_import tool.
 *
 *   angular        igniteui-angular secondary entry points, walked with the
 *                  TypeScript compiler (angular/igniteui-angular submodule), plus
 *                  imports observed in the Angular examples for the other
 *                  igniteui-angular-* packages (charts, maps, ...).
 *   react          imports observed in react/igniteui-react-examples.
 *   webcomponents  imports observed in webcomponents/igniteui-wc-examples.
 *
 * Usage: npx tsx scripts/build-import-map.ts
 */

import { execSync } from "child_process";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join, resolve } from "path";
import {
  collectEntryPointExports,
  collectObservedImports,
  walkSourceFiles,
  type ImportMapFile,
  type ImportMapSymbol,
} from "./lib/import-map.js";

const ROOT = resolve(import.meta.dirname, "..");
const OUT_DIR = join(ROOT, "data", "import-map");
const ANGULAR_LIB = join(ROOT, "angular", "igniteui-angular", "projects", "igniteui-angular");

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
requireDir(ANGULAR_LIB);
const angularExamples = join(ROOT, "angular", "igniteui-angular-examples", "samples");
const angularSamples = join(ROOT, "angular", "igniteui-angular-samples", "src");
const angularEntryPoints = collectEntryPointExports(ANGULAR_LIB, "igniteui-angular");
const angularObserved = observed(
  [angularExamples, angularSamples],
  [".ts"],
  m => m.startsWith("igniteui-angular-"),
);
write(
  "angular",
  {
    "igniteui-angular": describeRevision(ANGULAR_LIB),
    "igniteui-angular-examples": describeRevision(angularExamples),
  },
  { ...angularObserved, ...angularEntryPoints },
);

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
