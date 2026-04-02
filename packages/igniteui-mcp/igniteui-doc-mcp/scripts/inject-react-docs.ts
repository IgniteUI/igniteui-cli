import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from "fs";
import { join, resolve, relative } from "path";

const ROOT = resolve(import.meta.dirname, "..");
const EXAMPLES_ROOT = join(ROOT, "react", "igniteui-react-examples", "samples");
const DOCS_ROOT = join(ROOT, "dist", "docs_processing", "react");
const OUTPUT_ROOT = join(ROOT, "dist", "docs_prepeared", "react");

const MAX_ARRAY_ITEMS = 3;

let warnings = 0;
let totalReplaced = 0;
let totalStripped = 0;
let totalFiles = 0;
let totalArraysTrimmed = 0;
let totalItemsRemoved = 0;

function warn(msg: string) {
  console.error(`[WARN] ${msg}`);
  warnings++;
}

function collectMdFiles(dir: string): string[] {
  const results: string[] = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...collectMdFiles(full));
    } else if (entry.endsWith(".md")) {
      results.push(full);
    }
  }
  return results;
}

function readReactSampleFiles(sampleDir: string): string {
  const srcDir = join(sampleDir, "src");
  if (!existsSync(srcDir)) {
    // Some samples may have files directly in the sample dir
    return readFilesFromDir(sampleDir);
  }
  return readFilesFromDir(srcDir);
}

function readFilesFromDir(dir: string): string {
  if (!existsSync(dir)) return "";

  const parts: string[] = [];
  const entries = readdirSync(dir).sort();

  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) continue;

    let lang = "";
    if (entry.endsWith(".tsx")) lang = "tsx";
    else if (entry.endsWith(".ts")) lang = "typescript";
    else if (entry.endsWith(".jsx")) lang = "jsx";
    else if (entry.endsWith(".js")) lang = "javascript";
    else if (entry.endsWith(".css")) lang = "css";
    else if (entry.endsWith(".scss")) lang = "scss";
    else continue;

    // Skip test files, config files, and non-essential files
    if (entry === "index.ts" || entry === "react-app-env.d.ts" || entry === "setupTests.ts") continue;
    if (entry.endsWith(".test.tsx") || entry.endsWith(".test.ts")) continue;

    const content = readFileSync(full, "utf-8").trim();
    if (content) {
      parts.push("```" + lang + "\n" + content + "\n```");
    }
  }

  return parts.join("\n");
}

/**
 * Trim large data arrays inside code blocks.
 *
 * Handles three patterns:
 * 1. const newItems = [new Item({...}), new Item({...}), ...];  (single-line items)
 * 2. this.push(new Item({...})); this.push(new Item({...}));    (multi-line push calls)
 * 3. export const X = [{...}, {...}, ...];                       (plain object arrays)
 *
 * Keeps the first MAX_ARRAY_ITEMS items and replaces the rest with a comment.
 */
function trimDataArrays(content: string): string {
  // Process each code block independently
  return content.replace(/(```(?:tsx|typescript|ts|javascript|jsx)\n)([\s\S]*?)(```)/g, (_match, open, body, close) => {
    let trimmed = trimNewItemsArrays(body);
    trimmed = trimPushCalls(trimmed);
    trimmed = trimObjectArrays(trimmed);
    return open + trimmed + close;
  });
}

/**
 * Pattern 1: const newItems = [\n  new Item({...}),\n  new Item({...}),\n];
 * Single-line items in a const array assignment.
 */
function trimNewItemsArrays(code: string): string {
  const lines = code.split("\n");
  const result: string[] = [];
  let inArray = false;
  let itemCount = 0;
  let totalItems = 0;
  let indent = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!inArray) {
      result.push(line);
      if (/^\s*(const|let|var)\s+\w+\s*=\s*\[\s*$/.test(line)) {
        const nextLine = i + 1 < lines.length ? lines[i + 1].trim() : "";
        if (nextLine.startsWith("new ")) {
          totalItems = 0;
          for (let j = i + 1; j < lines.length; j++) {
            const l = lines[j].trim();
            if (l.startsWith("new ")) totalItems++;
            else if (l.startsWith("];") || l === "]") break;
          }
          if (totalItems > MAX_ARRAY_ITEMS) {
            inArray = true;
            itemCount = 0;
            indent = line.match(/^(\s*)/)?.[1] || "";
          }
        }
      }
      continue;
    }

    if (trimmed.startsWith("new ")) {
      itemCount++;
      if (itemCount <= MAX_ARRAY_ITEMS) {
        result.push(line);
      } else if (itemCount === MAX_ARRAY_ITEMS + 1) {
        const removed = totalItems - MAX_ARRAY_ITEMS;
        result.push(`${indent}    // ... ${removed} more items`);
        totalArraysTrimmed++;
        totalItemsRemoved += removed;
      }
    } else if (trimmed.startsWith("];") || trimmed === "]") {
      inArray = false;
      result.push(line);
    } else if (inArray && itemCount > MAX_ARRAY_ITEMS) {
      // skip trailing lines from skipped items (shouldn't happen for single-line items, but safety)
    } else {
      result.push(line);
    }
  }

  return result.join("\n");
}

/**
 * Pattern 2: this.push(new Item(\n{...}\n));  (multi-line push calls, repeated)
 * Detect constructor bodies that consist of repeated this.push(new ...) calls.
 */
function trimPushCalls(code: string): string {
  const lines = code.split("\n");
  const result: string[] = [];

  // First pass: identify regions of consecutive this.push(new ...) calls
  // A push block starts at `this.push(new ClassName(` and ends at `}));`
  let i = 0;
  while (i < lines.length) {
    const trimmed = lines[i].trim();

    // Detect start of a push sequence: look for constructor() { super(); followed by this.push(new
    if (/^\s*this\.push\(new\s+\w+\(/.test(lines[i])) {
      // Count how many consecutive push blocks follow
      const pushBlocks: { startLine: number; endLine: number }[] = [];
      let j = i;
      while (j < lines.length) {
        if (/^\s*this\.push\(new\s+\w+\(/.test(lines[j])) {
          const start = j;
          // Find the closing }));
          while (j < lines.length && !lines[j].trim().endsWith("}));")) {
            j++;
          }
          pushBlocks.push({ startLine: start, endLine: j });
          j++;
        } else {
          break;
        }
      }

      if (pushBlocks.length > MAX_ARRAY_ITEMS) {
        // Keep first MAX_ARRAY_ITEMS push blocks
        for (let k = 0; k < MAX_ARRAY_ITEMS; k++) {
          for (let l = pushBlocks[k].startLine; l <= pushBlocks[k].endLine; l++) {
            result.push(lines[l]);
          }
        }
        const removed = pushBlocks.length - MAX_ARRAY_ITEMS;
        const indent = lines[pushBlocks[0].startLine].match(/^(\s*)/)?.[1] || "";
        result.push(`${indent}// ... ${removed} more items`);
        totalArraysTrimmed++;
        totalItemsRemoved += removed;
        i = pushBlocks[pushBlocks.length - 1].endLine + 1;
      } else {
        // Not enough to trim, keep all
        for (const block of pushBlocks) {
          for (let l = block.startLine; l <= block.endLine; l++) {
            result.push(lines[l]);
          }
        }
        i = pushBlocks[pushBlocks.length - 1].endLine + 1;
      }
    } else {
      result.push(lines[i]);
      i++;
    }
  }

  return result.join("\n");
}

/**
 * Pattern 3: export const X = [\n  {...},\n  {...},\n];  (plain object array)
 * Objects are multi-line, delimited by lone `{` and `},` or `}`
 */
function trimObjectArrays(code: string): string {
  const lines = code.split("\n");
  const result: string[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Detect: (export)? (const|let|var) NAME = \n  [  or  = [
    if (/^\s*(?:export\s+)?(?:const|let|var)\s+\w+\s*=\s*$/.test(line)) {
      // Next line should be `[` or `    [`
      const nextTrimmed = i + 1 < lines.length ? lines[i + 1].trim() : "";
      if (nextTrimmed === "[") {
        // Count objects in the array: each starts with `{` on its own line
        const arrayStartIdx = i + 1;
        const objects: { startLine: number; endLine: number }[] = [];
        let j = arrayStartIdx + 1;
        while (j < lines.length) {
          const t = lines[j].trim();
          if (t === "{" || t.startsWith("{")) {
            const objStart = j;
            // Find closing: `},` or `}`
            while (j < lines.length) {
              const ct = lines[j].trim();
              if (ct === "}," || ct === "}" || ct.endsWith("},")) {
                objects.push({ startLine: objStart, endLine: j });
                j++;
                break;
              }
              j++;
            }
          } else if (t.startsWith("]")) {
            break;
          } else {
            j++;
          }
        }

        if (objects.length > MAX_ARRAY_ITEMS) {
          result.push(line); // const X =
          result.push(lines[arrayStartIdx]); // [
          for (let k = 0; k < MAX_ARRAY_ITEMS; k++) {
            for (let l = objects[k].startLine; l <= objects[k].endLine; l++) {
              result.push(lines[l]);
            }
          }
          const removed = objects.length - MAX_ARRAY_ITEMS;
          const indent = lines[objects[0].startLine].match(/^(\s*)/)?.[1] || "";
          result.push(`${indent}// ... ${removed} more items`);
          totalArraysTrimmed++;
          totalItemsRemoved += removed;
          // Skip to the closing ]
          i = j;
          continue;
        }
      }
    }

    result.push(line);
    i++;
  }

  return result.join("\n");
}

function processFile(mdPath: string): string {
  let content = readFileSync(mdPath, "utf-8");
  const codeViewRe = /<code-view[\s\S]*?<\/code-view>/g;

  content = content.replace(codeViewRe, (match) => {
    const githubSrcMatch = match.match(/github-src="([^"]+)"/);
    if (!githubSrcMatch) {
      // Try iframe-src as fallback for path extraction
      const iframeSrcMatch = match.match(/iframe-src="[^"]*\/([^"]+)"/);
      if (iframeSrcMatch) {
        warn(`No github-src in code-view, using iframe-src path: ${iframeSrcMatch[1]} in ${mdPath}`);
      } else {
        warn(`No github-src or iframe-src in code-view in ${mdPath}`);
      }
      totalStripped++;
      return "";
    }

    const githubSrc = githubSrcMatch[1];
    const sampleDir = join(EXAMPLES_ROOT, githubSrc);

    if (!existsSync(sampleDir)) {
      warn(`Sample directory not found: ${sampleDir} (github-src="${githubSrc}")`);
      totalStripped++;
      return "";
    }

    const replacement = readReactSampleFiles(sampleDir);
    if (!replacement) {
      warn(`All sample files empty for: ${sampleDir}`);
      totalStripped++;
      return "";
    }

    totalReplaced++;
    return replacement;
  });

  content = trimDataArrays(content);

  return content;
}

function runSizeReport(outputDir: string) {
  const files = collectMdFiles(outputDir);
  let totalSize = 0;
  const largeFiles: { name: string; sizeKb: number; codeViews: number }[] = [];
  const SIZE_THRESHOLD = 300 * 1024; // 300KB

  for (const f of files) {
    const stat = statSync(f);
    totalSize += stat.size;

    if (stat.size > SIZE_THRESHOLD) {
      const content = readFileSync(f, "utf-8");
      const codeViewCount = (content.match(/```tsx/g) || []).length + (content.match(/```typescript/g) || []).length;
      largeFiles.push({
        name: relative(outputDir, f),
        sizeKb: Math.round(stat.size / 1024),
        codeViews: codeViewCount,
      });
    }
  }

  console.error(`\n--- SIZE REPORT ---`);
  console.error(`  Total files: ${files.length}`);
  console.error(`  Aggregate size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);

  if (largeFiles.length > 0) {
    console.error(`\n  WARNING: ${largeFiles.length} file(s) exceed 300KB:`);
    for (const f of largeFiles.sort((a, b) => b.sizeKb - a.sizeKb)) {
      console.error(`    ${f.name}: ${f.sizeKb}KB (${f.codeViews} code blocks injected)`);
    }
  } else {
    console.error(`  All files under 300KB threshold.`);
  }
}

function main() {
  if (!existsSync(DOCS_ROOT)) {
    console.error(`Error: Input directory not found: ${DOCS_ROOT}`);
    console.error("Run 'npm run export:react' first.");
    process.exit(1);
  }

  console.error("Injecting React sample code into docs...");
  mkdirSync(OUTPUT_ROOT, { recursive: true });

  const mdFiles = collectMdFiles(DOCS_ROOT);

  for (const mdPath of mdFiles) {
    const relPath = relative(DOCS_ROOT, mdPath);
    const outPath = join(OUTPUT_ROOT, relPath);

    mkdirSync(join(OUTPUT_ROOT, relative(DOCS_ROOT, join(mdPath, ".."))), { recursive: true });

    const processed = processFile(mdPath);
    writeFileSync(outPath, processed, "utf-8");
    totalFiles++;
  }

  console.error(`\nDone!`);
  console.error(`  Files processed: ${totalFiles}`);
  console.error(`  Code-views replaced: ${totalReplaced}`);
  console.error(`  Code-views stripped (not found): ${totalStripped}`);
  console.error(`  Data arrays trimmed: ${totalArraysTrimmed} (${totalItemsRemoved} items removed)`);
  console.error(`  Warnings: ${warnings}`);

  runSizeReport(OUTPUT_ROOT);
}

main();
