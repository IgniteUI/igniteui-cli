/**
 * Export docs for one framework from the igniteui-documentation submodule into
 * dist/docs_processing/<fw>/ — flat, TOC-driven, one .md per published page.
 *
 *   npx tsx scripts/export-docs.ts --framework angular|react|webcomponents|blazor
 *     [--lang en] [--skip-generate]
 *
 * The docs repo resolves platform blocks, TOC excludes and the shared grid topics
 * with its own generate scripts; this script runs them, then converts the MDX
 * components into plain markdown (see lib/mdx-convert.ts).
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync, rmdirSync } from "fs";
import { dirname, join, resolve } from "path";
import { execFileSync } from "child_process";
import { walkTocJson, type TocEntry, type TocNode } from "./lib/toc-index.js";
import { TocSidecar, resolveUniqueName } from "./lib/toc-sidecar.js";
import { convertMdx, createStats, resolveTokens, sortReplacements, type DocsPlatform, type ConvertOptions } from "./lib/mdx-convert.js";
import { buildCanonicalIndex } from "./rewrite-api-links.js";
import type { Platform } from "../src/config/platforms.js";

const ROOT = resolve(import.meta.dirname, "..");
const DOCS_REPO = join(ROOT, "common", "igniteui-documentation");
const XPLAT = join(DOCS_REPO, "docs", "xplat");
const ANGULAR = join(DOCS_REPO, "docs", "angular");

interface FrameworkConfig {
  platform: DocsPlatform;
  prefix: string;
  flatten: (href: string) => string;
}

const ANGULAR_GRID_DIRS: Record<string, string> = {
  grid: "grid",
  treegrid: "treegrid",
  hierarchicalgrid: "hierarchicalgrid",
  pivotgrid: "pivotGrid",
};

/**
 * Pages that moved folders in igniteui-documentation. Mapped back to the names
 * they had in igniteui-docfx so get_doc names, aliases and baselines stay stable.
 */
const ANGULAR_LEGACY_NAMES: Record<string, string> = {
  "inputs/badge.md": "badge.md",
  "inputs/button-group.md": "button-group.md",
  "layouts/avatar.md": "avatar.md",
};

/** grid/editing.md → grid-editing.md; other nested paths take their parent dir as prefix. */
function flattenAngular(href: string): string {
  if (ANGULAR_LEGACY_NAMES[href]) return ANGULAR_LEGACY_NAMES[href];
  const parts = href.split("/");
  if (parts.length === 1) return parts[0];
  const fileName = parts[parts.length - 1];
  const gridPrefix = ANGULAR_GRID_DIRS[parts[0]];
  if (gridPrefix) return `${gridPrefix}-${fileName}`;
  return `${parts[parts.length - 2]}-${fileName}`;
}

/** grids/grid/editing.md → grid-editing.md; other nested paths keep the bare file name. */
function flattenXplat(href: string): string {
  const parts = href.split("/");
  if (parts.length === 1) return parts[0];
  const fileName = parts[parts.length - 1];
  if (parts.length >= 3 && parts[0] === "grids") return `${parts[1]}-${fileName}`;
  if (parts[0] === "grid-lite") return `grid-lite-${fileName}`;
  return fileName;
}

const FRAMEWORKS: Record<Platform, FrameworkConfig> = {
  angular: { platform: "Angular", prefix: "Igx", flatten: flattenAngular },
  react: { platform: "React", prefix: "Igr", flatten: flattenXplat },
  webcomponents: { platform: "WebComponents", prefix: "Igc", flatten: flattenXplat },
  blazor: { platform: "Blazor", prefix: "Igb", flatten: flattenXplat },
};

function parseArgs() {
  const argv = process.argv.slice(2);
  const get = (flag: string) => {
    const i = argv.indexOf(flag);
    return i === -1 ? undefined : argv[i + 1];
  };
  const framework = get("--framework") as Platform | undefined;
  if (!framework || !FRAMEWORKS[framework]) {
    console.error(`Error: --framework must be one of ${Object.keys(FRAMEWORKS).join(", ")}`);
    process.exit(1);
  }
  return { framework, lang: get("--lang") ?? "en", skipGenerate: argv.includes("--skip-generate") };
}

function run(script: string, args: string[], cwd: string) {
  execFileSync(process.execPath, [script, ...args], { cwd, stdio: ["ignore", "ignore", "inherit"] });
}

function git(args: string[]): string {
  return execFileSync("git", ["-C", DOCS_REPO, ...args], { encoding: "utf-8" }).trim();
}

function untrackedFiles(lang: string): Set<string> {
  const contentPath = `docs/angular/src/content/${lang}`;
  return new Set(git(["ls-files", "--others", "--exclude-standard", "--", contentPath]).split("\n").filter(Boolean));
}

/**
 * Angular's sync step copies xplat-generated pages into docs/angular/src/content:
 * it overwrites some tracked files and adds untracked ones. Undo both so the
 * submodule is left clean enough for switch-submodules.sh to pull. Untracked
 * files that existed before the run are left alone.
 */
function restoreAngularContent(lang: string, untrackedBefore: Set<string>) {
  const contentPath = `docs/angular/src/content/${lang}`;
  const modified = git(["diff", "--name-only", "--", contentPath]).split("\n").filter(Boolean);
  if (modified.length) git(["checkout", "--", ...modified]);

  const added = [...untrackedFiles(lang)].filter((f) => !untrackedBefore.has(f));
  for (const file of added) {
    rmSync(join(DOCS_REPO, file));
    let dir = dirname(join(DOCS_REPO, file));
    while (dir.startsWith(join(DOCS_REPO, contentPath)) && readdirSync(dir).length === 0) {
      rmdirSync(dir);
      dir = dirname(dir);
    }
  }
  if (modified.length || added.length) {
    console.error(`  Cleaned up the Angular sync step: restored ${modified.length} tracked file(s), removed ${added.length} added file(s)`);
  }
}

function generate(cfg: FrameworkConfig, lang: string) {
  console.error(`Generating ${cfg.platform} content (lang: ${lang})...`);
  run(join(XPLAT, "scripts", "generate.mjs"), [`--platform=${cfg.platform}`, `--lang=${lang}`], XPLAT);
  if (cfg.platform === "Angular") {
    run(join(ANGULAR, "scripts", "sync-generated.mjs"), [`--lang=${lang}`], ANGULAR);
    run(join(ANGULAR, "scripts", "generate.mjs"), [`--lang=${lang}`], ANGULAR);
  }
}

function readToc(cfg: FrameworkConfig, lang: string): TocEntry[] {
  if (cfg.platform === "Angular") {
    const toc = JSON.parse(readFileSync(join(ANGULAR, "src", "content", lang, "components", "toc.json"), "utf-8")) as TocNode[];
    return walkTocJson(toc);
  }
  const toc = JSON.parse(readFileSync(join(XPLAT, "src", "content", lang, "toc.json"), "utf-8")) as TocNode[];
  // Header landing pages have never been exported for the xplat platforms.
  return walkTocJson(toc, { excludePlatform: cfg.platform }).filter((e) => !e.landing);
}

function contentDir(cfg: FrameworkConfig, lang: string): string {
  return cfg.platform === "Angular"
    ? join(ANGULAR, "src", "content", lang, "components")
    : join(XPLAT, "generated", cfg.platform, lang, "components");
}

function stripImages(content: string): string {
  return content.replace(/!\[[^\]]*\]\([^)]*\)/g, "");
}

function rewriteMdxLinks(content: string): string {
  return content.replace(/(\]\([^)\s]+?)\.mdx(#[^)\s]*)?\)/g, "$1.md$2)");
}

function injectTocMetadata(content: string, entry: TocEntry): string {
  let extra = `_tocName: ${entry.name}`;
  if (entry.premium) extra += `\n_premium: true`;
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (fmMatch) {
    return `---\n${fmMatch[1]}\n${extra}\n---` + content.slice(fmMatch[0].length);
  }
  return `---\n${extra}\n---\n` + content;
}

function main() {
  const { framework, lang, skipGenerate } = parseArgs();
  const cfg = FRAMEWORKS[framework];
  const outputDir = join(ROOT, "dist", "docs_processing", framework);

  if (!existsSync(join(XPLAT, "docConfig.json"))) {
    console.error(`Error: ${DOCS_REPO} is not initialized. Run: git submodule update --init common/igniteui-documentation`);
    process.exit(1);
  }

  const cleanupAngular = cfg.platform === "Angular" && !skipGenerate;
  const untrackedBefore = cleanupAngular ? untrackedFiles(lang) : new Set<string>();

  try {
    if (!skipGenerate) generate(cfg, lang);

    const docConfig = JSON.parse(readFileSync(join(XPLAT, "docConfig.json"), "utf-8"));
    const replacements = sortReplacements(docConfig[cfg.platform]?.replacements ?? []);
    const stats = createStats();
    const options: ConvertOptions = {
      platform: cfg.platform,
      replacements,
      api: { platform: framework, prefix: cfg.prefix, index: buildCanonicalIndex(framework) },
      stats,
    };

    const entries = readToc(cfg, lang);
    console.error(`  Found ${entries.length} ${cfg.platform} entries in toc.json`);

    const sourceDir = contentDir(cfg, lang);
    mkdirSync(outputDir, { recursive: true });

    const usedNames = new Map<string, string>();
    const writtenFiles = new Set<string>();
    const sidecar = new TocSidecar(framework, ROOT);
    let skipped = 0;

    for (const tocEntry of entries) {
      const entry = { ...tocEntry, name: resolveTokens(tocEntry.name, replacements).trim() };
      const sourcePath = join(sourceDir, entry.href);
      if (!existsSync(sourcePath)) {
        console.error(`[WARN] File not found for toc entry "${entry.name}": ${entry.href}`);
        skipped++;
        continue;
      }

      let content = readFileSync(sourcePath, "utf-8").replace(/^﻿/, "");
      content = content.replace(/^<!--[\s\S]*?-->\s*/, "");
      content = convertMdx(content, options);
      content = stripImages(content);
      content = rewriteMdxLinks(content);
      content = injectTocMetadata(content, entry);

      const href = entry.href.replace(/\.mdx$/, ".md");
      // A cross-listed page appears under two TOC paths. Reuse the name resolved
      // the first time so it stays one doc, but still write: injectTocMetadata has
      // already run for this entry and last-write-wins is observable in the DB.
      let flatName = sidecar.nameFor(href);
      if (!flatName) {
        flatName = resolveUniqueName(cfg.flatten(href), href, usedNames);
        usedNames.set(flatName, href);
      }

      writeFileSync(join(outputDir, flatName), content, "utf-8");
      writtenFiles.add(flatName);
      sidecar.record({ ...entry, href }, flatName);
    }

    sidecar.write(writtenFiles);

    const resolvedPct = stats.apiLinks ? ((stats.apiLinksResolved / stats.apiLinks) * 100).toFixed(1) : "100";
    const topUnresolved = [...stats.unresolvedApiTypes.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);
    console.error(`\nDone!`);
    console.error(`  Files exported: ${writtenFiles.size}`);
    console.error(`  Skipped (not found): ${skipped}`);
    console.error(`  Samples: ${stats.samples}`);
    console.error(`  API links: ${stats.apiLinksResolved}/${stats.apiLinks} resolved (${resolvedPct}%)`);
    if (topUnresolved.length) {
      console.error(`  Most frequent unresolved API types: ${topUnresolved.map(([t, n]) => `${t} (${n})`).join(", ")}`);
    }
    console.error(`  Output: ${outputDir}`);
  } finally {
    if (cleanupAngular) restoreAngularContent(lang, untrackedBefore);
  }
}

main();
