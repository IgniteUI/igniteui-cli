import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from "fs";
import { join, resolve, relative } from "path";

const ROOT = resolve(import.meta.dirname, "..");
const EXAMPLES_ROOT = join(ROOT, "blazor", "igniteui-blazor-examples", "samples");
const DOCS_ROOT = join(ROOT, "dist", "docs_processing", "blazor");
const OUTPUT_ROOT = join(ROOT, "dist", "docs_prepeared", "blazor");

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

function readBlazorSampleFiles(sampleDir: string): string {
  const srcDir = join(sampleDir, "src");
  if (!existsSync(srcDir)) {
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

    // Skip non-essential Blazor files
    if (entry === "_Imports.razor" || entry.endsWith(".csproj") || entry === "Program.cs") continue;
    if (entry.startsWith("wwwroot")) continue;

    let lang = "";
    if (entry.endsWith(".razor.cs")) lang = "csharp";
    else if (entry.endsWith(".razor.css")) lang = "css";
    else if (entry.endsWith(".razor")) lang = "razor";
    else if (entry.endsWith(".cs")) lang = "csharp";
    else if (entry.endsWith(".css")) lang = "css";
    else continue;

    const content = readFileSync(full, "utf-8").trim();
    if (content) {
      parts.push("```" + lang + "\n" + content + "\n```");
    }
  }

  return parts.join("\n");
}

function trimDataArrays(content: string): string {
  return content.replace(/(```(?:csharp|razor|cs)\n)([\s\S]*?)(```)/g, (_match, open, body, close) => {
    let trimmed = trimAddCalls(body);
    trimmed = trimCollectionInitializers(trimmed);
    return open + trimmed + close;
  });
}

/**
 * Pattern 1: this.Add(new ClassName() { ... }); — multi-line object initializer Add calls
 * Pattern 2: Add(new ClassName("arg1", arg2)); — single-line constructor Add calls
 *
 * Detects consecutive this.Add(...) or Add(...) calls and keeps only MAX_ARRAY_ITEMS.
 */
function trimAddCalls(code: string): string {
  const lines = code.split("\n");
  const result: string[] = [];

  let i = 0;
  while (i < lines.length) {
    const addMatch = lines[i].match(/^(\s*)(?:this\.)?Add\(new\s+\w+/);
    if (addMatch) {
      const blocks: { startLine: number; endLine: number }[] = [];
      let j = i;

      while (j < lines.length && /^\s*(?:this\.)?Add\(new\s+\w+/.test(lines[j])) {
        const start = j;
        let depth = 0;
        for (let k = j; k < lines.length; k++) {
          for (const ch of lines[k]) {
            if (ch === "(") depth++;
            else if (ch === ")") depth--;
          }
          if (depth <= 0) {
            blocks.push({ startLine: start, endLine: k });
            j = k + 1;
            break;
          }
        }
        if (depth > 0) break; // malformed, bail
      }

      if (blocks.length > MAX_ARRAY_ITEMS) {
        for (let k = 0; k < MAX_ARRAY_ITEMS; k++) {
          for (let l = blocks[k].startLine; l <= blocks[k].endLine; l++) {
            result.push(lines[l]);
          }
        }
        const removed = blocks.length - MAX_ARRAY_ITEMS;
        result.push(`${addMatch[1]}// ... ${removed} more items`);
        totalArraysTrimmed++;
        totalItemsRemoved += removed;
        i = blocks[blocks.length - 1].endLine + 1;
      } else {
        for (const block of blocks) {
          for (let l = block.startLine; l <= block.endLine; l++) {
            result.push(lines[l]);
          }
        }
        i = blocks.length > 0 ? blocks[blocks.length - 1].endLine + 1 : i + 1;
      }
    } else {
      result.push(lines[i]);
      i++;
    }
  }

  return result.join("\n");
}

/**
 * Pattern 3: new ClassName() { ... }, — items inside C# collection initializers
 * e.g. new List<T>() { new T() { ... }, new T() { ... }, ... }
 *
 * Detects sequences of `new ClassName() {` or `new ClassName(args) {` items
 * separated by commas inside collection/array initializer blocks.
 */
function trimCollectionInitializers(code: string): string {
  const lines = code.split("\n");
  const result: string[] = [];

  let i = 0;
  while (i < lines.length) {
    const trimmed = lines[i].trim();

    // Look for collection initializer opening: new List<T>() { or new T[] {
    if (/new\s+(?:List<[^>]+>|[A-Z]\w*\[\])\s*\(?\)?\s*$/.test(trimmed)) {
      result.push(lines[i]);
      // Next line should be `{`
      if (i + 1 < lines.length && lines[i + 1].trim() === "{") {
        result.push(lines[i + 1]);
        i += 2;

        // Now collect `new ClassName() { ... }` items
        const items: { startLine: number; endLine: number }[] = [];
        const startI = i;

        while (i < lines.length) {
          const lt = lines[i].trim();
          if (lt.startsWith("new ")) {
            const itemStart = i;
            let braceDepth = 0;
            for (let k = i; k < lines.length; k++) {
              for (const ch of lines[k]) {
                if (ch === "{") braceDepth++;
                else if (ch === "}") braceDepth--;
              }
              if (braceDepth <= 0) {
                items.push({ startLine: itemStart, endLine: k });
                i = k + 1;
                break;
              }
            }
            if (braceDepth > 0) break;
          } else if (lt === "}" || lt === "}," || lt === "};") {
            // End of collection initializer
            break;
          } else {
            i++;
          }
        }

        if (items.length > MAX_ARRAY_ITEMS) {
          for (let k = 0; k < MAX_ARRAY_ITEMS; k++) {
            for (let l = items[k].startLine; l <= items[k].endLine; l++) {
              result.push(lines[l]);
            }
          }
          const removed = items.length - MAX_ARRAY_ITEMS;
          const indent = lines[items[0].startLine].match(/^(\s*)/)?.[1] || "";
          result.push(`${indent}// ... ${removed} more items`);
          totalArraysTrimmed++;
          totalItemsRemoved += removed;
        } else {
          // Keep all items
          for (const item of items) {
            for (let l = item.startLine; l <= item.endLine; l++) {
              result.push(lines[l]);
            }
          }
        }

        // Output the closing brace line
        if (i < lines.length) {
          result.push(lines[i]);
          i++;
        }
        continue;
      }
    }

    result.push(lines[i]);
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

    const replacement = readBlazorSampleFiles(sampleDir);
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
  const SIZE_THRESHOLD = 300 * 1024;

  for (const f of files) {
    const stat = statSync(f);
    totalSize += stat.size;

    if (stat.size > SIZE_THRESHOLD) {
      const content = readFileSync(f, "utf-8");
      const codeViewCount = (content.match(/```razor/g) || []).length + (content.match(/```csharp/g) || []).length;
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
    console.error("Run 'npm run export:blazor' first.");
    process.exit(1);
  }

  console.error("Injecting Blazor sample code into docs...");
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
