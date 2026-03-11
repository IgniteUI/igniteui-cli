import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, resolve, relative, basename } from "path";
import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";

const ROOT = resolve(import.meta.dirname, "..");

interface CliArgs {
  model: string;
  apiBase?: string;
  sample: number;
  delay: number;
  only?: string;
  input: string;
  original: string;
  output: string;
}

interface FileScore {
  file: string;
  originalSizeKb: number;
  compressedSizeKb: number;
  reductionPct: number;
  completeness: number;
  accuracy: number;
  hallucination: number;
  structureQuality: number;
  overallScore: number;
  issues: string[];
  summary: string;
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);
  const opts: CliArgs = {
    model: "gpt-5.1",
    sample: 10,
    delay: 1,
    input: "",
    original: "",
    output: "",
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--model":
        opts.model = args[++i];
        break;
      case "--api-base":
        opts.apiBase = args[++i];
        break;
      case "--sample":
        opts.sample = parseInt(args[++i]);
        break;
      case "--delay":
        opts.delay = parseFloat(args[++i]);
        break;
      case "--only":
        opts.only = args[++i];
        break;
      case "--input":
        opts.input = resolve(args[++i]);
        break;
      case "--original":
        opts.original = resolve(args[++i]);
        break;
      case "--output":
        opts.output = resolve(args[++i]);
        break;
    }
  }

  if (!opts.input) {
    console.error("Error: --input <dir> is required (path to compressed docs)");
    process.exit(1);
  }
  if (!opts.original) {
    // Default: sibling "docs_prepeared" directory matching the input structure
    opts.original = opts.input.replace(/docs_final/, "docs_prepeared");
  }
  if (!opts.output) {
    // Derive platform from last segment of input path (e.g. "angular" from .../docs_final/angular)
    const platform = basename(opts.input);
    opts.output = join(ROOT, "dist", `validation_report_${platform}.json`);
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

function getJudgePrompt(): string {
  return `You are evaluating the quality of LLM-compressed Ignite UI for Angular documentation. You will receive an ORIGINAL document and a COMPRESSED version. Score the compressed version on these criteria:

SCORING (1-10 scale for each):

1. **completeness** — Are all features, APIs, properties, methods, and concepts from the original preserved in the compressed version? Deduct points for missing sections, dropped API references, or omitted features. A score of 10 means nothing important was lost.

2. **accuracy** — Is the compressed content factually correct? Are code examples valid and unmodified in meaning? Are component names, property names, and types correct? Deduct heavily for changed import paths, wrong component names, or altered code logic. A score of 10 means everything is accurate.

3. **hallucination** — Does the compressed version contain ANY content not present in or derivable from the original? This includes invented API properties, fabricated code examples, made-up descriptions, or new sections. A score of 10 means zero hallucination. A score of 1 means extensive fabrication.

4. **structureQuality** — Is the compressed document well-organized? Does it have proper frontmatter (component, keywords, summary)? Are markdown headers preserved? Are code blocks properly formatted? A score of 10 means excellent structure.

RESPONSE FORMAT — you MUST return ONLY a single JSON object with these fields:
- "completeness": integer 1-10
- "accuracy": integer 1-10
- "hallucination": integer 1-10
- "structureQuality": integer 1-10
- "issues": array of strings describing specific problems found (empty array if none)
- "summary": one paragraph overall assessment (max 500 characters)

IMPORTANT:
- The "issues" array should list specific problems found (empty array if none).
- Be strict about hallucination — any invented content is a serious issue.
- Code examples that are simplified but retain correct logic are acceptable.
- Data-heavy files (large datasets, lookup tables) are expected to be reduced to 1-2 representative items. Do NOT penalize for truncating data arrays as long as the data shape and class/function structure are preserved.
- Removal of verbose/redundant prose is expected and good.
- Check that the frontmatter component field uses Angular's Igx prefix (not Igr/Igc/Igb).
- If the original contains _premium: true in frontmatter, the compressed should have premium: true.`;
}

const JudgeResultSchema = z.object({
  completeness: z.number().int().min(1).max(10),
  accuracy: z.number().int().min(1).max(10),
  hallucination: z.number().int().min(1).max(10),
  structureQuality: z.number().int().min(1).max(10),
  issues: z.array(z.string()),
  summary: z.string(),
});

type JudgeResult = z.infer<typeof JudgeResultSchema>;

async function judgeFile(
  client: OpenAI,
  model: string,
  originalContent: string,
  compressedContent: string
): Promise<JudgeResult> {
  const userMessage = `ORIGINAL DOCUMENT:\n\n${originalContent}\n\n---\n\nCOMPRESSED DOCUMENT:\n\n${compressedContent}`;

  try {
    const response = await client.responses.parse({
      model,
      input: [
        { role: "system", content: getJudgePrompt() },
        { role: "user", content: userMessage },
      ],
      text: {
        format: zodTextFormat(JudgeResultSchema, "judge_result"),
      },
    });

    if (response.output_parsed) {
      return response.output_parsed;
    }
    throw new Error("No parsed output in response");
  } catch (err: any) {
    // Retry once on failure
    console.log(`RETRY (${err.message})`);
    try {
      const response = await client.responses.parse({
        model,
        input: [
          { role: "system", content: getJudgePrompt() },
          { role: "user", content: userMessage },
        ],
        text: {
          format: zodTextFormat(JudgeResultSchema, "judge_result"),
        },
      });

      if (response.output_parsed) {
        return response.output_parsed;
      }
      throw new Error("No parsed output in retry response");
    } catch (retryErr: any) {
      console.error(`  Failed after retry: ${retryErr.message}`);
      return {
        completeness: 0,
        accuracy: 0,
        hallucination: 0,
        structureQuality: 0,
        issues: [`Failed: ${retryErr.message}`],
        summary: "",
      };
    }
  }
}

function selectSample(files: string[], sampleSize: number): string[] {
  if (sampleSize >= files.length) return files;

  // Stratified sampling: pick files across size range
  const withSize = files.map((f) => ({
    path: f,
    size: readFileSync(f, "utf-8").length,
  }));
  withSize.sort((a, b) => a.size - b.size);

  const selected: string[] = [];
  const step = Math.max(1, Math.floor(withSize.length / sampleSize));
  for (let i = 0; i < withSize.length && selected.length < sampleSize; i += step) {
    selected.push(withSize[i].path);
  }

  return selected;
}

function sleep(seconds: number): Promise<void> {
  return new Promise((r) => setTimeout(r, seconds * 1000));
}

function fileName(path: string): string {
  return path.split(/[/\\]/).pop()!;
}

async function main() {
  const opts = parseArgs();

  if (!existsSync(opts.original)) {
    console.error(`Error: Original docs directory not found: ${opts.original}`);
    process.exit(1);
  }

  if (!existsSync(opts.input)) {
    console.error(`Error: Compressed docs directory not found: ${opts.input}`);
    process.exit(1);
  }

  const clientOpts: ConstructorParameters<typeof OpenAI>[0] = {};
  if (opts.apiBase) clientOpts.baseURL = opts.apiBase;
  const client = new OpenAI(clientOpts);

  // Find matching file pairs
  const compressedFiles = collectMdFiles(opts.input);
  const pairs: { original: string; compressed: string; relPath: string }[] = [];

  for (const compFile of compressedFiles) {
    const relPath = relative(opts.input, compFile);
    const origFile = join(opts.original, relPath);
    if (existsSync(origFile)) {
      pairs.push({ original: origFile, compressed: compFile, relPath });
    }
  }

  if (pairs.length === 0) {
    console.error("No matching file pairs found between original and compressed directories.");
    process.exit(1);
  }

  // Select files to validate
  let filesToValidate: typeof pairs;
  if (opts.only) {
    filesToValidate = pairs.filter((p) => fileName(p.compressed) === opts.only);
    if (filesToValidate.length === 0) {
      console.error(`File "${opts.only}" not found in compressed docs.`);
      process.exit(1);
    }
  } else {
    const selectedPaths = new Set(
      selectSample(pairs.map((p) => p.compressed), opts.sample)
    );
    filesToValidate = pairs.filter((p) => selectedPaths.has(p.compressed));
  }

  console.log(`Validating ${filesToValidate.length} files from ${pairs.length} total pairs`);
  console.log(`Model: ${opts.model}`);
  console.log("-".repeat(60));

  const scores: FileScore[] = [];

  for (const { original, compressed, relPath } of filesToValidate) {
    const origContent = readFileSync(original, "utf-8");
    const compContent = readFileSync(compressed, "utf-8");
    const origSize = origContent.length / 1024;
    const compSize = compContent.length / 1024;
    const reduction = (1 - compSize / origSize) * 100;

    process.stdout.write(`  ${relPath} (${origSize.toFixed(1)}KB → ${compSize.toFixed(1)}KB, ${reduction.toFixed(0)}%)... `);

    try {
      const result = await judgeFile(client, opts.model, origContent, compContent);
      const overall =
        (result.completeness + result.accuracy + result.hallucination + result.structureQuality) / 4;

      scores.push({
        file: relPath,
        originalSizeKb: Math.round(origSize * 10) / 10,
        compressedSizeKb: Math.round(compSize * 10) / 10,
        reductionPct: Math.round(reduction),
        completeness: result.completeness,
        accuracy: result.accuracy,
        hallucination: result.hallucination,
        structureQuality: result.structureQuality,
        overallScore: Math.round(overall * 10) / 10,
        issues: result.issues,
        summary: result.summary,
      });

      console.log(
        `C:${result.completeness} A:${result.accuracy} H:${result.hallucination} S:${result.structureQuality} → ${overall.toFixed(1)}`
      );

      if (result.issues.length > 0) {
        for (const issue of result.issues) {
          console.log(`    ⚠ ${issue}`);
        }
      }
    } catch (e: any) {
      console.log(`ERROR: ${e.message}`);
      scores.push({
        file: relPath,
        originalSizeKb: Math.round(origSize * 10) / 10,
        compressedSizeKb: Math.round(compSize * 10) / 10,
        reductionPct: Math.round(reduction),
        completeness: 0,
        accuracy: 0,
        hallucination: 0,
        structureQuality: 0,
        overallScore: 0,
        issues: [`Validation error: ${e.message}`],
        summary: "",
      });
    }

    if (opts.delay > 0) await sleep(opts.delay);
  }

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("VALIDATION SUMMARY");
  console.log("=".repeat(60));

  const validScores = scores.filter((s) => s.overallScore > 0);
  if (validScores.length > 0) {
    const avg = (field: keyof FileScore) => {
      const vals = validScores.map((s) => s[field] as number);
      return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);
    };

    console.log(`  Files validated:    ${validScores.length}`);
    console.log(`  Avg completeness:   ${avg("completeness")}/10`);
    console.log(`  Avg accuracy:       ${avg("accuracy")}/10`);
    console.log(`  Avg hallucination:  ${avg("hallucination")}/10 (10 = no hallucination)`);
    console.log(`  Avg structure:      ${avg("structureQuality")}/10`);
    console.log(`  Avg overall:        ${avg("overallScore")}/10`);

    const avgReduction =
      validScores.reduce((a, s) => a + s.reductionPct, 0) / validScores.length;
    console.log(`  Avg size reduction: ${avgReduction.toFixed(0)}%`);

    // Flag problematic files
    const lowScores = validScores.filter((s) => s.overallScore < 6);
    if (lowScores.length > 0) {
      console.log(`\n  ⚠ LOW QUALITY FILES (score < 6):`);
      for (const s of lowScores) {
        console.log(`    ${s.file}: ${s.overallScore}/10 — ${s.issues.join("; ") || s.summary.slice(0, 100)}`);
      }
    }

    const hallucinated = validScores.filter((s) => s.hallucination < 7);
    if (hallucinated.length > 0) {
      console.log(`\n  🚨 HALLUCINATION CONCERNS (score < 7):`);
      for (const s of hallucinated) {
        console.log(`    ${s.file}: hallucination=${s.hallucination}/10`);
        for (const issue of s.issues) {
          console.log(`      → ${issue}`);
        }
      }
    }
  }

  if (scores.some((s) => s.overallScore === 0)) {
    console.log(`\n  ❌ ERRORS: ${scores.filter((s) => s.overallScore === 0).length} files failed validation`);
  }

  // Write report
  const report = {
    timestamp: new Date().toISOString(),
    model: opts.model,
    filesValidated: scores.length,
    scores,
  };
  writeFileSync(opts.output, JSON.stringify(report, null, 2), "utf-8");
  console.log(`\nFull report: ${opts.output}`);
}

main();
