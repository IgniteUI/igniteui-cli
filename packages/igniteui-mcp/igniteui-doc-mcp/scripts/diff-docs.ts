import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, resolve } from "path";
import { createHash } from "crypto";

const ROOT = resolve(import.meta.dirname, "..");
const PREPARED_BASE = join(ROOT, "dist", "docs_prepeared");
const BASELINE_BASE = join(ROOT, "docs_baseline");

interface DiffResult {
  framework: string;
  changed: string[];
  added: string[];
  deleted: string[];
  unchanged: string[];
}

function parseArgs(): { framework: string } {
  const args = process.argv.slice(2);
  let framework = "";
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--framework") framework = args[++i];
  }
  if (!framework) {
    console.error("Usage: diff-docs.ts --framework <angular|react|blazor|webcomponents>");
    process.exit(1);
  }
  return { framework };
}

function collectMdFiles(dir: string): string[] {
  if (!existsSync(dir)) return [];
  const results: string[] = [];
  for (const entry of readdirSync(dir)) {
    if (entry.endsWith(".md") && !entry.startsWith("_")) {
      results.push(entry);
    }
  }
  return results.sort();
}

function hashContent(filePath: string): string {
  const raw = readFileSync(filePath, "utf-8");
  const normalized = raw.replace(/\r\n/g, "\n");
  return createHash("sha256").update(normalized, "utf-8").digest("hex");
}

function main() {
  const { framework } = parseArgs();

  const preparedDir = join(PREPARED_BASE, framework);
  const baselineDir = join(BASELINE_BASE, framework);

  if (!existsSync(preparedDir)) {
    console.error(`Prepared directory not found: ${preparedDir}`);
    process.exit(1);
  }

  const preparedFiles = new Set(collectMdFiles(preparedDir));
  const baselineFiles = new Set(collectMdFiles(baselineDir));

  const result: DiffResult = {
    framework,
    changed: [],
    added: [],
    deleted: [],
    unchanged: [],
  };

  // Files in prepared but not in baseline → added
  // Files in both → compare hashes → changed or unchanged
  for (const file of preparedFiles) {
    if (!baselineFiles.has(file)) {
      result.added.push(file);
    } else {
      const preparedHash = hashContent(join(preparedDir, file));
      const baselineHash = hashContent(join(baselineDir, file));
      if (preparedHash === baselineHash) {
        result.unchanged.push(file);
      } else {
        result.changed.push(file);
      }
    }
  }

  // Files in baseline but not in prepared → deleted
  for (const file of baselineFiles) {
    if (!preparedFiles.has(file)) {
      result.deleted.push(file);
    }
  }

  // Write manifest
  const outDir = join(ROOT, "dist");
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  const manifestPath = join(outDir, "diff-manifest.json");
  writeFileSync(manifestPath, JSON.stringify(result, null, 2), "utf-8");

  // Summary
  const toProcess = result.changed.length + result.added.length;
  console.log(`Diff complete for ${framework}:`);
  console.log(`  ${result.changed.length} changed, ${result.added.length} added, ${result.deleted.length} deleted, ${result.unchanged.length} unchanged`);
  console.log(`  ${toProcess} file(s) need compression`);
  if (result.changed.length > 0) console.log(`  Changed: ${result.changed.join(", ")}`);
  if (result.added.length > 0) console.log(`  Added: ${result.added.join(", ")}`);
  if (result.deleted.length > 0) console.log(`  Deleted: ${result.deleted.join(", ")}`);
  console.log(`Manifest written to ${manifestPath}`);
}

main();
