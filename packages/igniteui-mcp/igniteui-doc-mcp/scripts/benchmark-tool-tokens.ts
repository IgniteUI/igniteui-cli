/**
 * Compare the token cost of get_doc vs get_example over the whole doc corpus.
 *
 * Counts tokens on the exact string each tool puts in content[0].text, so the
 * numbers are the model-visible payload with no thinking/tool-call overhead.
 *
 *   npx tsx scripts/benchmark-tool-tokens.ts
 *   npx tsx scripts/benchmark-tool-tokens.ts --framework angular --language typescript
 *   npx tsx scripts/benchmark-tool-tokens.ts --csv dist/tool-token-benchmark.csv
 */
import { encodingForModel } from "js-tiktoken";
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { LocalDocsProvider } from "../src/providers/LocalDocsProvider.js";
import { extractCodeExamples, formatCodeExamples } from "../src/tools/doc-tools.js";

const FRAMEWORKS = ["angular", "react", "webcomponents", "blazor"] as const;

// Language filter representative of what a caller on each framework would ask for.
const PRIMARY_LANGUAGE: Record<string, string> = {
  angular: "typescript",
  react: "tsx",
  webcomponents: "typescript",
  blazor: "razor",
};

function parseArgs() {
  const argv = process.argv.slice(2);
  const get = (flag: string) => {
    const i = argv.indexOf(flag);
    return i >= 0 ? argv[i + 1] : undefined;
  };
  return {
    framework: get("--framework"),
    language: get("--language"),
    csv: get("--csv"),
  };
}

interface Row {
  framework: string;
  name: string;
  docTokens: number;
  exampleTokens: number;
  exampleLangTokens: number;
  examples: number;
}

function stats(values: number[]) {
  if (values.length === 0) return { mean: 0, median: 0, p90: 0, max: 0, total: 0 };
  const sorted = [...values].sort((a, b) => a - b);
  const at = (q: number) => sorted[Math.min(sorted.length - 1, Math.floor(q * sorted.length))];
  const total = values.reduce((a, b) => a + b, 0);
  return {
    mean: Math.round(total / values.length),
    median: at(0.5),
    p90: at(0.9),
    max: sorted[sorted.length - 1],
    total,
  };
}

function pct(from: number, to: number): string {
  if (from === 0) return "n/a";
  return `${Math.round(((from - to) / from) * 100)}%`;
}

async function main() {
  const args = parseArgs();
  const enc = encodingForModel("gpt-4o");
  const count = (s: string) => enc.encode(s).length;

  // Run from source, so resolve the built DB rather than LocalDocsProvider's
  // dist-relative default.
  const dbPath =
    process.env.DB_PATH ?? join(dirname(fileURLToPath(import.meta.url)), "..", "dist", "igniteui-docs.db");
  const provider = new LocalDocsProvider(dbPath);
  await provider.init();

  const frameworks = args.framework ? [args.framework] : [...FRAMEWORKS];
  const rows: Row[] = [];

  for (const framework of frameworks) {
    const language = args.language ?? PRIMARY_LANGUAGE[framework];
    const listing = await provider.listComponents(framework);
    const names = [...listing.matchAll(/\(`([^`]+)`\)/g)].map((m) => m[1]);

    process.stdout.write(`${framework}: ${names.length} docs`);

    for (const name of names) {
      const { text, found } = await provider.getDoc(framework, name);
      if (!found) continue;

      // get_doc returns the doc body verbatim.
      const docTokens = count(text);

      // get_example returns the formatted examples, or a one-line miss message.
      const all = extractCodeExamples(text);
      const exampleText = all.length
        ? formatCodeExamples(all, { framework, docName: name })
        : `No code examples found in \`${name}\` (${framework}). Use get_doc for the full doc, or try a different topic.`;

      const filtered = extractCodeExamples(text, { language });
      const exampleLangText = filtered.length
        ? formatCodeExamples(filtered, { framework, docName: name, language })
        : `No code examples in \`${language}\` found in \`${name}\` (${framework}). Use get_doc for the full doc, or try a different topic.`;

      rows.push({
        framework,
        name,
        docTokens,
        exampleTokens: count(exampleText),
        exampleLangTokens: count(exampleLangText),
        examples: all.length,
      });
    }
    process.stdout.write(" ✓\n");
  }

  console.log("\n=== Average tokens returned per call (gpt-4o / o200k_base) ===\n");
  const header = ["framework", "docs", "get_doc", "get_example", "vs doc", "get_example+lang", "vs doc", "no-example docs"];
  console.log(header.join("\t"));

  const report = (label: string, subset: Row[]) => {
    if (subset.length === 0) return;
    const doc = stats(subset.map((r) => r.docTokens));
    const ex = stats(subset.map((r) => r.exampleTokens));
    const exLang = stats(subset.map((r) => r.exampleLangTokens));
    const empty = subset.filter((r) => r.examples === 0).length;
    console.log(
      [
        label,
        subset.length,
        doc.mean,
        ex.mean,
        pct(doc.mean, ex.mean),
        exLang.mean,
        pct(doc.mean, exLang.mean),
        `${empty} (${Math.round((empty / subset.length) * 100)}%)`,
      ].join("\t")
    );
  };

  for (const framework of frameworks) {
    report(framework, rows.filter((r) => r.framework === framework));
  }
  report("ALL", rows);

  console.log("\n=== Distribution, docs that actually have examples ===\n");
  console.log(["framework", "docs", "median doc", "median ex", "p90 doc", "p90 ex", "max doc", "max ex"].join("\t"));
  for (const framework of frameworks) {
    const subset = rows.filter((r) => r.framework === framework && r.examples > 0);
    if (subset.length === 0) continue;
    const doc = stats(subset.map((r) => r.docTokens));
    const ex = stats(subset.map((r) => r.exampleTokens));
    console.log(
      [framework, subset.length, doc.median, ex.median, doc.p90, ex.p90, doc.max, ex.max].join("\t")
    );
  }

  const withExamples = rows.filter((r) => r.examples > 0);
  const docTotal = stats(withExamples.map((r) => r.docTokens)).total;
  const exTotal = stats(withExamples.map((r) => r.exampleTokens)).total;
  console.log(
    `\nCorpus totals (docs with examples, n=${withExamples.length}): ` +
      `get_doc ${docTotal.toLocaleString()} tok vs get_example ${exTotal.toLocaleString()} tok — ${pct(docTotal, exTotal)} lower.`
  );

  if (args.csv) {
    mkdirSync(dirname(args.csv), { recursive: true });
    const csv = [
      "framework,name,doc_tokens,example_tokens,example_lang_tokens,examples",
      ...rows.map((r) =>
        [r.framework, r.name, r.docTokens, r.exampleTokens, r.exampleLangTokens, r.examples].join(",")
      ),
    ].join("\n");
    writeFileSync(args.csv, csv);
    console.log(`\nPer-doc rows written to ${args.csv}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
