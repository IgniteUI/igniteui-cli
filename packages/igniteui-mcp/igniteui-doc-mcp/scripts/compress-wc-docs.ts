import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, createReadStream, unlinkSync } from "fs";
import { join, resolve, relative, dirname } from "path";
import OpenAI from "openai";
import { encodingForModel } from "js-tiktoken";

const ROOT = resolve(import.meta.dirname, "..");
const INPUT_DIR = join(ROOT, "dist", "docs_prepeared", "webcomponents");
const OUTPUT_DIR = join(ROOT, "dist", "docs_final", "webcomponents");
const LOG_FILE = join(OUTPUT_DIR, "_compression_log.csv");

interface LogEntry {
  name: string;
  originalKb: number;
  compressedKb: number;
  tokens: number;
}

interface CompressionStats {
  originalSize: number;
  compressedSize: number;
  totalTokens: number;
  filesProcessed: number;
  filesSkipped: number;
  errors: [string, string][];
}

interface CliArgs {
  model: string;
  apiBase?: string;
  minSize: number;
  dryRun: boolean;
  delay: number;
  resumeFrom?: string;
  only?: string;
  batch?: "submit" | "poll" | "retry";
  manifest?: string;
}

interface BatchState {
  batch_id: string;
  input_file_id: string;
  status: string;
  submitted_at: string;
  model: string;
  file_count: number;
  files: string[];
  completed_at?: string;
  succeeded?: number;
  failed?: number;
  invalid?: number;
  failed_files?: string[];
  invalid_files?: string[];
  retry_batch_id?: string;
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);
  const opts: CliArgs = {
    model: "gpt-5-mini",
    minSize: 0,
    dryRun: false,
    delay: 0.5,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--model":
        opts.model = args[++i];
        break;
      case "--api-base":
        opts.apiBase = args[++i];
        break;
      case "--min-size":
        opts.minSize = parseFloat(args[++i]);
        break;
      case "--dry-run":
        opts.dryRun = true;
        break;
      case "--delay":
        opts.delay = parseFloat(args[++i]);
        break;
      case "--resume-from":
        opts.resumeFrom = args[++i];
        break;
      case "--only":
        opts.only = args[++i];
        break;
      case "--batch":
        opts.batch = args[++i] as "submit" | "poll" | "retry";
        break;
      case "--manifest":
        opts.manifest = args[++i];
        break;
    }
  }
  return opts;
}

function collectMdFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...collectMdFiles(full));
    } else if (entry.endsWith(".md")) {
      results.push(full);
    }
  }
  return results.sort();
}

function getSystemPrompt(): string {
  return `You are compressing Infragistics Ignite UI for Web Components component documentation. Your goal is to reduce file size by ~50% while keeping the doc useful for developers building with these components.

FRONTMATTER (REQUIRED):
Start every output with a YAML frontmatter block. This is mandatory and must be the very first thing in the output:

---
component: IgcExactComponentNameComponent
keywords: comma, separated, lowercase keywords
summary: One or two sentence summary of what this doc covers.
premium: true
---

Rules for frontmatter fields:
- **component**: The exact Ignite UI for Web Components component class name(s) as found in the document's source code (e.g. IgcGridComponent, IgcButtonComponent, IgcComboComponent, IgcDatePickerComponent). Use the PascalCase Igc-prefixed name with the Component suffix as used in Web Components. If the doc covers multiple components, comma-separate them.
- **keywords**: Do NOT repeat the component name from the \`component\` field. Include the short common name (e.g. grid, combo-box, date-picker), related UI concepts (e.g. filtering, sorting, paging, selection), and common synonyms developers might search for (e.g. card, avatar, badge, dropdown, dialog, modal, table). Use lowercase, comma-separated. Aim for 5-15 keywords.
- **summary**: A concise 1-2 sentence description of what the document covers and what a developer can learn from it. Focus on the component's purpose and key capabilities.
- **premium**: If the input frontmatter contains \`_premium: true\`, include \`premium: true\` in your output frontmatter. Otherwise omit the premium field entirely.
- Use the \`_tocName\` from the input frontmatter as a hint for the component display name when determining the component field.

WHAT TO CUT:

1. **Sample data arrays and data-heavy files** — biggest win. For data arrays, keep only 1-2 representative items with a \`// ...\` comment. If the entire document is primarily a data resource (e.g. a utility class whose body is a large dataset), keep the class/function structure with 1-2 sample entries to show the shape of the data.

2. **Redundant code examples** — when multiple examples show minor variations of the same pattern, keep the most complete one and summarize what the others demonstrated in one line. However, if two sections cover **different component types or sub-types** (e.g. Stacked Area Chart vs Stacked Spline Area Chart, or igc-category-chart vs igc-data-chart), they are NOT redundant — each must keep its own code example showing the distinct component/element type, even if the surrounding boilerplate is similar. The key differentiator is the component tag or series type, not the data or layout code around it.

3. **Boilerplate in code blocks**:
   - Remove repeated import setup if already shown earlier in the same doc
   - Remove or minimize CSS blocks that only set margins, widths, or trivial styling
   - Keep HTML templates and TypeScript code as separate blocks — these are the primary code formats in Web Components docs
   - When trimming a code example, trim it — do NOT delete it entirely. Every section that has a code example in the original must keep at least a shortened version showing the key component usage pattern.

4. **Verbose explanations** — condense to essential points. If a paragraph restates what the code already shows, cut it.

CODE INTEGRITY RULES:
- **Never rewrite or "fix" code from the original.** Preserve property names, values, and casing exactly as they appear in the source, even if they look like typos (e.g. if the original has \`StartValue\` keep it as \`StartValue\`, do not change it to \`startValue\`).
- **Never change literal values.** If the original sets \`transitionDuration = 1000\`, do not output \`transitionDuration = 500\` or any other value. Use the exact values from the source.
- **Never change code patterns or structure.** If the original uses a lazy getter, do not replace it with direct field initialization. Compress by removing entire methods/blocks, not by rewriting the ones you keep.
- **Always mark truncation with a comment.** Whenever you remove items from an array, list, HTML children, or repeated block, insert a \`// ...\` or \`<!-- ... -->\` comment at the removal point. Use \`<!-- ... -->\` in HTML blocks and \`// ...\` in TypeScript blocks.
- **Code blocks must be self-consistent.** If a code block references a variable, function, data model field, or property, that reference must either be defined within the same block or in an adjacent block. Do not remove a definition while keeping code that uses it.
- **Do not strip component attributes from HTML.** If the original has \`<igc-data-tooltip-layer name="tooltips"></igc-data-tooltip-layer>\`, keep the \`name\` attribute. Only remove attributes that are purely cosmetic (inline style for demo layout like \`style="height: 600px"\`).
- **Use correct comment syntax.** Inside HTML markup use \`<!-- comment -->\`, inside TypeScript code use \`// comment\`. Never use JSX-style comments (\`{/* */}\`) — they are not valid in Web Components.

WHAT TO KEEP:

1. **All markdown headers** (##, ###, ####) — preserve document structure. Do not change heading levels (keep ## as ##, ### as ###). Do not merge or combine separate headings into one.
2. **API references** — property names, types, descriptions, method signatures. These are critical.
3. **At least one code example per section that had one in the original** — must include the component usage in HTML or TypeScript. This applies to every section including variant/sub-type sections (e.g. Step Area Chart, Stacked Area Chart, Radial Area Chart must each keep their own example). If the original section had a code example, the compressed version must keep at least the key HTML snippet showing the component/element type — even a 3-5 line snippet is fine. Do NOT replace a code example with only a text description like "follows the same pattern" or "see external examples". If a section has a complex/advanced example (e.g. showing slots, event handling, multiple sub-components), trim it by reducing repetitive siblings or data, but preserve the structural pattern. **Do NOT merge separate sections into a combined section** — if the original has separate ## or ### sections for different variants, keep them as separate sections in the output.
4. **Notes, Warnings, Important callouts**
5. **Key conceptual explanations** that aren't obvious from the code

OUTPUT RULES:
- Return ONLY the frontmatter block followed by the compressed markdown, no preamble, no wrapping in code fences
- The frontmatter \`---\` fences must be the very first and only YAML block
- Keep valid markdown formatting
- Aim for ~50% size reduction. If a doc is already concise, don't force cuts.
- Do NOT invent or generate new content. Never fabricate code examples, prop values, API details, or explanations that are not present in the source. If the input document contains only headers and TODO/placeholder comments with no actual documentation, return only the frontmatter and the existing headers.
- Do NOT synthesize simplified code snippets to replace originals. Compress by trimming the original code, not by rewriting it.`;
}

function validateStructure(text: string): { valid: boolean; issues: string[] } {
  const issues: string[] = [];
  const fmMatch = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) {
    issues.push("missing frontmatter block (---)");
    return { valid: false, issues };
  }

  const block = fmMatch[1];
  if (!/^component:\s*.+/m.test(block)) issues.push("missing or empty 'component' field");
  if (!/^keywords:\s*.+/m.test(block)) issues.push("missing or empty 'keywords' field");
  if (!/^summary:\s*.+/m.test(block)) issues.push("missing or empty 'summary' field");

  const body = text.slice(fmMatch[0].length).trim();
  if (!body) issues.push("document body is empty after frontmatter");
  if (!/^#{1,4}\s/m.test(body)) issues.push("no markdown headers found in body");

  return { valid: issues.length === 0, issues };
}

function stripResponseWrapper(text: string): string {
  let result = text;
  for (const prefix of ["Here is the compressed", "Here's the compressed", "```markdown\n"]) {
    if (result.startsWith(prefix)) {
      result = result.slice(prefix.length);
      break;
    }
  }
  if (result.endsWith("```")) {
    result = result.slice(0, -3);
  }
  return result.trim();
}

async function compressWithLLM(
  client: OpenAI,
  content: string,
  model: string
): Promise<string> {
  const response = await client.chat.completions.create({
    model,
    messages: [
      { role: "system", content: getSystemPrompt() },
      { role: "user", content: `Compress this documentation:\n\n${content}` },
    ],
    max_completion_tokens: 32000,
  });
  const raw = response.choices[0].message.content ?? "";
  return stripResponseWrapper(raw);
}

function sleep(seconds: number): Promise<void> {
  return new Promise((r) => setTimeout(r, seconds * 1000));
}

function fileName(path: string): string {
  return path.split(/[/\\]/).pop()!;
}

async function processFile(
  filepath: string,
  outputDir: string,
  client: OpenAI,
  model: string,
  minSizeKb: number,
  dryRun: boolean,
  stats: CompressionStats,
  fileIndex: number,
  totalFiles: number,
  enc: ReturnType<typeof encodingForModel>,
  logEntries: LogEntry[]
): Promise<boolean> {
  const pct = `[${Math.round((fileIndex / totalFiles) * 100)}%]`;
  try {
    const content = readFileSync(filepath, "utf-8");
    const originalSize = content.length;
    const sizeKb = originalSize / 1024;
    const name = fileName(filepath);

    if (sizeKb < minSizeKb) {
      const tokens = enc.encode(content).length;
      stats.totalTokens += tokens;
      console.log(`  ${pct} SKIP ${name} (${sizeKb.toFixed(1)}KB < ${minSizeKb}KB threshold) [${tokens} tokens]`);
      stats.filesSkipped++;
      if (!dryRun) {
        const outPath = join(outputDir, name);
        writeFileSync(outPath, content, "utf-8");
      }
      logEntries.push({ name, originalKb: sizeKb, compressedKb: sizeKb, tokens });
      return true;
    }

    process.stdout.write(`  ${pct} ${name} (${sizeKb.toFixed(1)}KB)... `);

    if (dryRun) {
      const tokens = enc.encode(content).length;
      stats.totalTokens += tokens;
      console.log(`(dry run) [${tokens} tokens]`);
      stats.originalSize += originalSize;
      stats.compressedSize += originalSize;
      stats.filesProcessed++;
      logEntries.push({ name, originalKb: sizeKb, compressedKb: sizeKb, tokens });
      return true;
    }

    let compressed = await compressWithLLM(client, content, model);
    let { valid, issues } = validateStructure(compressed);
    if (!valid) {
      process.stdout.write(`RETRY (${issues.join(", ")})... `);
      compressed = await compressWithLLM(client, content, model);
      ({ valid, issues } = validateStructure(compressed));
      if (!valid) {
        console.log(`WARN: still invalid after retry (${issues.join(", ")})`);
      }
    }

    const compressedSize = compressed.length;
    const compressedKb = compressedSize / 1024;
    const tokens = enc.encode(compressed).length;
    stats.totalTokens += tokens;
    const reduction = (1 - compressedSize / originalSize) * 100;
    if (reduction < 0) {
      console.log(`WARNING: content grew by ${(-reduction).toFixed(0)}%! [${tokens} tokens]`);
    } else {
      console.log(`-> ${compressedKb.toFixed(1)}KB (${reduction.toFixed(0)}% reduction) [${tokens} tokens]`);
    }

    const outPath = join(outputDir, name);
    writeFileSync(outPath, compressed, "utf-8");

    stats.originalSize += originalSize;
    stats.compressedSize += compressedSize;
    stats.filesProcessed++;
    logEntries.push({ name, originalKb: sizeKb, compressedKb, tokens });
    return true;
  } catch (e: any) {
    console.log(`ERROR: ${e.message}`);
    stats.errors.push([fileName(filepath), e.message]);
    return false;
  }
}

function filterFiles(files: string[], opts: CliArgs): string[] {
  let result = files;
  if (opts.only) {
    result = result.filter(f => fileName(f) === opts.only);
  }
  if (opts.resumeFrom) {
    const idx = result.findIndex(f => fileName(f) === opts.resumeFrom);
    if (idx >= 0) result = result.slice(idx);
  }
  if (opts.minSize > 0) {
    result = result.filter(f => {
      const size = readFileSync(f, "utf-8").length / 1024;
      return size >= opts.minSize;
    });
  }
  return result;
}

async function batchSubmit(opts: CliArgs): Promise<void> {
  if (!existsSync(INPUT_DIR)) {
    console.error(`Error: Input directory not found: ${INPUT_DIR}`);
    process.exit(1);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const clientOpts: ConstructorParameters<typeof OpenAI>[0] = {};
  if (opts.apiBase) clientOpts.baseURL = opts.apiBase;
  const client = new OpenAI(clientOpts);

  const allFiles = collectMdFiles(INPUT_DIR);
  let files = filterFiles(allFiles, opts);

  // Manifest-based incremental filtering
  if (opts.manifest) {
    const manifest = JSON.parse(readFileSync(opts.manifest, "utf-8"));
    const toProcess = new Set([...manifest.changed, ...manifest.added]);

    for (const del of manifest.deleted ?? []) {
      const target = join(OUTPUT_DIR, del);
      if (existsSync(target)) {
        unlinkSync(target);
        console.log(`  Deleted from output: ${del}`);
      }
    }

    if (toProcess.size === 0) {
      console.log(`Manifest: 0 files to process. Nothing to submit.`);
      return;
    }

    files = files.filter(f => toProcess.has(fileName(f)));
    console.log(`Manifest: ${files.length} files to compress`);
  }

  console.log(`Found ${allFiles.length} files, ${files.length} after filtering`);
  console.log(`Model: ${opts.model}`);
  console.log("-".repeat(60));

  const systemPrompt = getSystemPrompt();
  const jsonlLines: string[] = [];
  const fileNames: string[] = [];

  for (const filepath of files) {
    const relPath = relative(INPUT_DIR, filepath).replace(/\\/g, "/");
    const content = readFileSync(filepath, "utf-8");
    fileNames.push(relPath);
    const line = JSON.stringify({
      custom_id: relPath,
      method: "POST",
      url: "/v1/chat/completions",
      body: {
        model: opts.model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Compress this documentation:\n\n${content}` },
        ],
        max_completion_tokens: 32000,
      },
    });
    jsonlLines.push(line);
  }

  const jsonlPath = join(OUTPUT_DIR, "_batch_input.jsonl");
  writeFileSync(jsonlPath, jsonlLines.join("\n"), "utf-8");
  console.log(`Wrote ${jsonlLines.length} requests to ${jsonlPath}`);

  const uploaded = await client.files.create({
    file: createReadStream(jsonlPath),
    purpose: "batch",
  });
  console.log(`Uploaded input file: ${uploaded.id}`);

  const batch = await client.batches.create({
    input_file_id: uploaded.id,
    endpoint: "/v1/chat/completions",
    completion_window: "24h",
  });
  console.log(`Created batch: ${batch.id}`);

  const state: BatchState = {
    batch_id: batch.id,
    input_file_id: uploaded.id,
    status: "submitted",
    submitted_at: new Date().toISOString(),
    model: opts.model,
    file_count: files.length,
    files: fileNames,
  };
  const statePath = join(OUTPUT_DIR, "_batch_state.json");
  writeFileSync(statePath, JSON.stringify(state, null, 2), "utf-8");
  console.log(`\nBatch state saved to ${statePath}`);
  console.log(`\nNext step: npm run compress:webcomponents -- --batch poll`);
}

async function batchPoll(opts: CliArgs): Promise<void> {
  const statePath = join(OUTPUT_DIR, "_batch_state.json");
  if (!existsSync(statePath)) {
    console.error("No _batch_state.json found. Run --batch submit first.");
    process.exit(1);
  }

  const state: BatchState = JSON.parse(readFileSync(statePath, "utf-8"));
  const batchId = state.retry_batch_id ?? state.batch_id;

  const clientOpts: ConstructorParameters<typeof OpenAI>[0] = {};
  if (opts.apiBase) clientOpts.baseURL = opts.apiBase;
  const client = new OpenAI(clientOpts);

  console.log(`Polling batch ${batchId}...`);

  while (true) {
    const batch = await client.batches.retrieve(batchId);
    const now = new Date().toISOString().slice(11, 19);
    const completed = (batch.request_counts?.completed ?? 0);
    const failed = (batch.request_counts?.failed ?? 0);
    const total = (batch.request_counts?.total ?? 0);
    console.log(`[${now}] ${batch.status} | ${completed}/${total} completed | ${failed} failed`);

    if (["completed", "failed", "expired", "cancelled"].includes(batch.status)) {
      if (batch.errors?.data?.length) {
        console.log("\nBatch-level errors:");
        for (const err of batch.errors.data) {
          console.log(`  [${err.code}] ${err.message}`);
        }
      }
      await processBatchResults(client, batch, state, statePath, opts);
      return;
    }

    await sleep(30);
  }
}

async function processBatchResults(
  client: OpenAI,
  batch: OpenAI.Batches.Batch,
  state: BatchState,
  statePath: string,
  opts: CliArgs
): Promise<void> {
  const enc = encodingForModel("gpt-4o");
  const logEntries: LogEntry[] = [];
  let succeeded = 0;
  let failedCount = 0;
  let invalidCount = 0;
  const failedFiles: string[] = [];
  const invalidFiles: string[] = [];
  let totalOriginalSize = 0;
  let totalCompressedSize = 0;
  let totalTokens = 0;

  if (batch.output_file_id) {
    const content = await client.files.content(batch.output_file_id);
    const text = await content.text();
    const lines = text.trim().split("\n");

    for (const line of lines) {
      const result = JSON.parse(line);
      const name = result.custom_id as string;
      const inputPath = join(INPUT_DIR, name);
      const originalContent = existsSync(inputPath) ? readFileSync(inputPath, "utf-8") : "";
      const originalSize = originalContent.length;

      if (result.response?.status_code === 200) {
        let compressed = result.response.body.choices?.[0]?.message?.content ?? "";
        compressed = stripResponseWrapper(compressed);
        const { valid, issues } = validateStructure(compressed);

        if (!valid) {
          console.log(`  INVALID ${name}: ${issues.join(", ")}`);
          invalidCount++;
          invalidFiles.push(name);
          continue;
        }

        const compressedSize = compressed.length;
        const tokens = enc.encode(compressed).length;
        totalTokens += tokens;
        totalOriginalSize += originalSize;
        totalCompressedSize += compressedSize;
        const reduction = originalSize > 0 ? (1 - compressedSize / originalSize) * 100 : 0;
        console.log(`  OK ${name} (${(originalSize / 1024).toFixed(1)}KB -> ${(compressedSize / 1024).toFixed(1)}KB, ${reduction.toFixed(0)}% reduction) [${tokens} tokens]`);

        const outPath = join(OUTPUT_DIR, name);
        mkdirSync(dirname(outPath), { recursive: true });
        writeFileSync(outPath, compressed, "utf-8");
        succeeded++;
        logEntries.push({
          name,
          originalKb: originalSize / 1024,
          compressedKb: compressedSize / 1024,
          tokens,
        });
      } else {
        const errMsg = result.response?.body?.error?.message ?? result.error?.message ?? "unknown error";
        console.log(`  FAILED ${name}: ${errMsg}`);
        failedCount++;
        failedFiles.push(name);
      }
    }
  }

  if (batch.error_file_id) {
    const errContent = await client.files.content(batch.error_file_id);
    const errText = await errContent.text();
    if (errText.trim()) {
      const errLines = errText.trim().split("\n");
      for (const line of errLines) {
        const result = JSON.parse(line);
        const name = result.custom_id as string;
        if (!failedFiles.includes(name)) {
          failedFiles.push(name);
          failedCount++;
        }
        console.log(`  ERROR ${name}: ${result.error?.message ?? "unknown"}`);
      }
    }
  }

  console.log("-".repeat(60));
  console.log("BATCH SUMMARY");
  console.log(`  Succeeded: ${succeeded}`);
  console.log(`  Failed: ${failedCount}`);
  console.log(`  Invalid: ${invalidCount}`);
  console.log(`  Original total: ${(totalOriginalSize / 1024).toFixed(1)}KB`);
  console.log(`  Compressed total: ${(totalCompressedSize / 1024).toFixed(1)}KB`);
  const ratio = totalOriginalSize === 0 ? 0 : (1 - totalCompressedSize / totalOriginalSize) * 100;
  console.log(`  Reduction: ${ratio.toFixed(1)}%`);
  console.log(`  Total tokens: ${totalTokens.toLocaleString()}`);

  state.status = batch.status;
  state.completed_at = new Date().toISOString();
  state.succeeded = succeeded;
  state.failed = failedCount;
  state.invalid = invalidCount;
  state.failed_files = failedFiles;
  state.invalid_files = invalidFiles;
  writeFileSync(statePath, JSON.stringify(state, null, 2), "utf-8");

  const statsFile = join(OUTPUT_DIR, "_compression_stats.json");
  writeFileSync(
    statsFile,
    JSON.stringify({
      original_size_kb: totalOriginalSize / 1024,
      compressed_size_kb: totalCompressedSize / 1024,
      compression_ratio: ratio,
      files_processed: succeeded,
      files_skipped: 0,
      errors: failedFiles.map(f => [f, "batch failed"]),
      total_tokens: totalTokens,
      model: state.model,
      api_base: opts.apiBase ?? null,
      min_size_kb: opts.minSize,
    }, null, 2),
    "utf-8"
  );

  const csvHeader = "file,original_kb,compressed_kb,reduction_pct,tokens";
  const csvRows = logEntries.map(e => {
    const red = e.originalKb === 0 ? 0 : (1 - e.compressedKb / e.originalKb) * 100;
    return `${e.name},${e.originalKb.toFixed(1)},${e.compressedKb.toFixed(1)},${red.toFixed(1)},${e.tokens}`;
  });
  writeFileSync(LOG_FILE, [csvHeader, ...csvRows].join("\n"), "utf-8");

  if (failedFiles.length > 0 || invalidFiles.length > 0) {
    console.log(`\nTo retry failed/invalid files: npm run compress:webcomponents -- --batch retry`);
  }
}

async function batchRetry(opts: CliArgs): Promise<void> {
  const statePath = join(OUTPUT_DIR, "_batch_state.json");
  if (!existsSync(statePath)) {
    console.error("No _batch_state.json found. Run --batch submit first.");
    process.exit(1);
  }

  const state: BatchState = JSON.parse(readFileSync(statePath, "utf-8"));
  const retryFiles = [...(state.failed_files ?? []), ...(state.invalid_files ?? [])];

  if (retryFiles.length === 0) {
    console.log("Nothing to retry — no failed or invalid files.");
    return;
  }

  console.log(`Retrying ${retryFiles.length} files: ${retryFiles.join(", ")}`);

  const clientOpts: ConstructorParameters<typeof OpenAI>[0] = {};
  if (opts.apiBase) clientOpts.baseURL = opts.apiBase;
  const client = new OpenAI(clientOpts);

  const systemPrompt = getSystemPrompt();
  const jsonlLines: string[] = [];

  for (const name of retryFiles) {
    const filepath = join(INPUT_DIR, name);
    if (!existsSync(filepath)) {
      console.log(`  SKIP ${name} — source not found`);
      continue;
    }
    const content = readFileSync(filepath, "utf-8");
    jsonlLines.push(JSON.stringify({
      custom_id: name,
      method: "POST",
      url: "/v1/chat/completions",
      body: {
        model: opts.model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Compress this documentation:\n\n${content}` },
        ],
        max_completion_tokens: 32000,
      },
    }));
  }

  if (jsonlLines.length === 0) {
    console.log("No files to retry after filtering.");
    return;
  }

  const jsonlPath = join(OUTPUT_DIR, "_batch_retry_input.jsonl");
  writeFileSync(jsonlPath, jsonlLines.join("\n"), "utf-8");
  console.log(`Wrote ${jsonlLines.length} retry requests to ${jsonlPath}`);

  const uploaded = await client.files.create({
    file: createReadStream(jsonlPath),
    purpose: "batch",
  });
  const batch = await client.batches.create({
    input_file_id: uploaded.id,
    endpoint: "/v1/chat/completions",
    completion_window: "24h",
  });
  console.log(`Created retry batch: ${batch.id}`);

  state.retry_batch_id = batch.id;
  state.failed_files = [];
  state.invalid_files = [];
  writeFileSync(statePath, JSON.stringify(state, null, 2), "utf-8");
  console.log(`\nNext step: npm run compress:webcomponents -- --batch poll`);
}

async function main() {
  const opts = parseArgs();

  if (opts.batch) {
    switch (opts.batch) {
      case "submit": return batchSubmit(opts);
      case "poll":   return batchPoll(opts);
      case "retry":  return batchRetry(opts);
    }
  }

  if (!existsSync(INPUT_DIR)) {
    console.error(`Error: Input directory not found: ${INPUT_DIR}`);
    console.error("Run 'npm run inject:webcomponents' first.");
    process.exit(1);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const clientOpts: ConstructorParameters<typeof OpenAI>[0] = {};
  if (opts.apiBase) clientOpts.baseURL = opts.apiBase;
  const client = new OpenAI(clientOpts);

  const allFiles = collectMdFiles(INPUT_DIR);
  let files = allFiles;

  // Manifest-based incremental filtering
  if (opts.manifest) {
    const manifest = JSON.parse(readFileSync(opts.manifest, "utf-8"));
    const toProcess = new Set([...manifest.changed, ...manifest.added]);

    // Remove deleted files from output
    for (const del of manifest.deleted ?? []) {
      const target = join(OUTPUT_DIR, del);
      if (existsSync(target)) {
        unlinkSync(target);
        console.log(`  Deleted from output: ${del}`);
      }
    }

    if (toProcess.size === 0) {
      console.log(`Manifest: 0 files to process (${manifest.unchanged?.length ?? 0} unchanged). Nothing to compress.`);
      return;
    }

    files = allFiles.filter(f => toProcess.has(fileName(f)));
    console.log(`Manifest: ${files.length} files to compress (${manifest.unchanged?.length ?? 0} unchanged, ${manifest.deleted?.length ?? 0} deleted)`);
  }

  console.log(`Found ${files.length} files in ${INPUT_DIR}`);
  console.log(`Model: ${opts.model}`);
  if (opts.apiBase) console.log(`API Base: ${opts.apiBase}`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`Min size threshold: ${opts.minSize}KB`);
  if (opts.dryRun) console.log("DRY RUN - no actual compression will be performed");
  if (opts.only) console.log(`Processing single file: ${opts.only}`);
  console.log("-".repeat(60));

  const startTime = Date.now();
  const enc = encodingForModel("gpt-4o");
  const logEntries: LogEntry[] = [];

  const stats: CompressionStats = {
    originalSize: 0,
    compressedSize: 0,
    totalTokens: 0,
    filesProcessed: 0,
    filesSkipped: 0,
    errors: [],
  };

  let skipUntilFound = opts.resumeFrom != null;
  let fileIndex = 0;
  for (const filepath of files) {
    const name = fileName(filepath);

    if (opts.only && name !== opts.only) {
      continue;
    }

    if (skipUntilFound) {
      if (name === opts.resumeFrom) {
        skipUntilFound = false;
      } else {
        console.log(`  SKIP ${name} (resuming)`);
        stats.filesSkipped++;
        if (!opts.dryRun) {
          const content = readFileSync(filepath, "utf-8");
          writeFileSync(join(OUTPUT_DIR, name), content, "utf-8");
        }
        fileIndex++;
        continue;
      }
    }

    await processFile(filepath, OUTPUT_DIR, client, opts.model, opts.minSize, opts.dryRun, stats, fileIndex, files.length, enc, logEntries);
    fileIndex++;

    if (!opts.dryRun && opts.delay > 0) {
      await sleep(opts.delay);
    }
  }

  console.log("-".repeat(60));
  console.log("COMPRESSION SUMMARY");
  console.log(`  Files processed: ${stats.filesProcessed}`);
  console.log(`  Files skipped: ${stats.filesSkipped}`);
  console.log(`  Original total size: ${(stats.originalSize / 1024).toFixed(1)}KB`);
  console.log(`  Compressed total size: ${(stats.compressedSize / 1024).toFixed(1)}KB`);
  const ratio = stats.originalSize === 0 ? 0 : (1 - stats.compressedSize / stats.originalSize) * 100;
  console.log(`  Overall reduction: ${ratio.toFixed(1)}%`);
  const elapsed = Date.now() - startTime;
  const hrs = Math.floor(elapsed / 3600000);
  const mins = Math.floor((elapsed % 3600000) / 60000);
  const secs = Math.floor((elapsed % 60000) / 1000);
  console.log(`  Total tokens: ${stats.totalTokens.toLocaleString()}`);
  console.log(`  Elapsed time: ${hrs}h ${mins}m ${secs}s`);

  if (stats.errors.length > 0) {
    console.log(`\n  ERRORS (${stats.errors.length}):`);
    for (const [name, err] of stats.errors) {
      console.log(`    ${name}: ${err}`);
    }
  }

  const statsFile = join(OUTPUT_DIR, "_compression_stats.json");
  writeFileSync(
    statsFile,
    JSON.stringify(
      {
        original_size_kb: stats.originalSize / 1024,
        compressed_size_kb: stats.compressedSize / 1024,
        compression_ratio: ratio,
        files_processed: stats.filesProcessed,
        files_skipped: stats.filesSkipped,
        errors: stats.errors,
        total_tokens: stats.totalTokens,
        model: opts.model,
        api_base: opts.apiBase ?? null,
        min_size_kb: opts.minSize,
      },
      null,
      2
    ),
    "utf-8"
  );
  console.log(`\nStats saved to ${statsFile}`);

  const csvHeader = "file,original_kb,compressed_kb,reduction_pct,tokens";
  const csvRows = logEntries.map(e => {
    const red = e.originalKb === 0 ? 0 : (1 - e.compressedKb / e.originalKb) * 100;
    return `${e.name},${e.originalKb.toFixed(1)},${e.compressedKb.toFixed(1)},${red.toFixed(1)},${e.tokens}`;
  });
  writeFileSync(LOG_FILE, [csvHeader, ...csvRows].join("\n"), "utf-8");
  console.log(`Log saved to ${LOG_FILE}`);
}

main();
