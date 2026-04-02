import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from "fs";
import { join, resolve, relative, basename } from "path";
import { execSync } from "child_process";

const ROOT = resolve(import.meta.dirname, "..");
const XPLAT_ROOT = join(ROOT, "common", "igniteui-xplat-docs");
const TOC_PATH = join(XPLAT_ROOT, "docfx", "en", "components", "toc.json");
const BUILT_DOCS = join(XPLAT_ROOT, "dist", "Blazor", "en", "components");
const OUTPUT_DIR = join(ROOT, "dist", "docs_processing", "blazor");

const ENV_JSON_PATH = join(XPLAT_ROOT, "docfx", "en", "environment.json");
const envConfig: Record<string, string> = JSON.parse(readFileSync(ENV_JSON_PATH, "utf-8")).production;

function replaceEnvironmentVars(content: string): string {
  return content.replace(/\{environment:(\w+)\}/g, (match, key) => envConfig[key] ?? match);
}

function stripImages(content: string): string {
  return content.replace(/!\[[^\]]*\]\([^)]*\)/g, "");
}

interface TocEntry {
  name: string;
  href: string;
  premium: boolean;
}

function parseTocJson(tocPath: string): TocEntry[] {
  const raw = readFileSync(tocPath, "utf-8");
  const data = JSON.parse(raw) as any[];
  const entries: TocEntry[] = [];

  function flatten(items: any[], parentExcluded: boolean) {
    for (const item of items) {
      const excludes: string[] = item.exclude || [];
      const excluded = parentExcluded || excludes.includes("Blazor");

      if (!excluded && item.href && !item.header) {
        entries.push({
          name: item.name || "",
          href: item.href,
          premium: item.premium === true,
        });
      }

      if (Array.isArray(item.items)) {
        flatten(item.items, excluded);
      }
    }
  }

  flatten(data, false);
  return entries;
}

function injectTocMetadata(content: string, entry: TocEntry): string {
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (fmMatch) {
    const fmBlock = fmMatch[1];
    let extra = `_tocName: ${entry.name}`;
    if (entry.premium) extra += `\n_premium: true`;
    const newFm = `---\n${fmBlock}\n${extra}\n---`;
    return content.slice(0, fmMatch.index!) + newFm + content.slice(fmMatch.index! + fmMatch[0].length);
  }
  let fm = `---\n_tocName: ${entry.name}`;
  if (entry.premium) fm += `\n_premium: true`;
  fm += `\n---\n`;
  return fm + content;
}

function collectFiles(dir: string, ext: string): string[] {
  const results: string[] = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...collectFiles(full, ext));
    } else if (entry.endsWith(ext)) {
      results.push(full);
    }
  }
  return results;
}

function flattenPath(href: string): string {
  const parts = href.replace(/\\/g, "/").split("/");
  if (parts.length === 1) return parts[0];

  const fileName = parts[parts.length - 1];

  if (parts.length >= 3 && parts[0] === "grids") {
    const componentDir = parts[1];
    return `${componentDir}-${fileName}`;
  }

  return fileName;
}

function main() {
  const skipBuild = process.argv.includes("--skip-build");

  if (!skipBuild) {
    console.error("Running xplat gulp build for Blazor...");
    try {
      execSync("npm run buildBlazor", {
        cwd: XPLAT_ROOT,
        stdio: "inherit",
      });
    } catch (e) {
      console.error("Failed to run buildBlazor. Make sure dependencies are installed in common/igniteui-xplat-docs/");
      process.exit(1);
    }
  }

  if (!existsSync(BUILT_DOCS)) {
    console.error(`Error: Built docs directory not found: ${BUILT_DOCS}`);
    console.error("Run 'npm run buildBlazor' inside common/igniteui-xplat-docs/ first.");
    process.exit(1);
  }

  console.error("Parsing toc.json...");
  const tocEntries = parseTocJson(TOC_PATH);
  console.error(`  Found ${tocEntries.length} Blazor entries in toc.json`);

  const builtFiles = collectFiles(BUILT_DOCS, ".md");
  const builtMap = new Map<string, string>();
  for (const f of builtFiles) {
    const rel = relative(BUILT_DOCS, f).replace(/\\/g, "/");
    builtMap.set(rel, f);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });

  let totalFiles = 0;
  let skipped = 0;
  const usedNames = new Map<string, string>();

  for (const entry of tocEntries) {
    const href = entry.href.replace(/\\/g, "/");
    const builtPath = builtMap.get(href);

    if (!builtPath) {
      console.error(`[WARN] Built file not found for toc entry "${entry.name}": ${href}`);
      skipped++;
      continue;
    }

    let content = readFileSync(builtPath, "utf-8");

    content = content.replace(/^<!--[\s\S]*?-->(?:\r?\n)*/, "");
    content = replaceEnvironmentVars(content);
    content = stripImages(content);

    content = injectTocMetadata(content, entry);

    let flatName = flattenPath(href);

    if (usedNames.has(flatName)) {
      const parts = href.replace(/\\/g, "/").split("/");
      if (parts.length >= 2) {
        flatName = `${parts[parts.length - 2]}-${basename(href)}`;
      }
      if (usedNames.has(flatName)) {
        flatName = href.replace(/\//g, "-");
      }
    }
    usedNames.set(flatName, href);

    const outPath = join(OUTPUT_DIR, flatName);
    writeFileSync(outPath, content, "utf-8");
    totalFiles++;
  }

  console.error(`\nDone!`);
  console.error(`  Files exported: ${totalFiles}`);
  console.error(`  Skipped (not found): ${skipped}`);
  console.error(`  Output: ${OUTPUT_DIR}`);
}

main();
