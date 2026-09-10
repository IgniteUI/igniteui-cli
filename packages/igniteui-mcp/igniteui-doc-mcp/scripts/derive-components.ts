/**
 * Rewrites the `component` frontmatter field in dist/docs_final/<framework>/ from the
 * document body, validated against the platform API index.
 *
 * The compression model decides this field today, and it drifts badly: a full rebuild
 * over unchanged sources changed `component` on 374 of 1232 documents, in one case
 * replacing the Ignite UI components with sample-app class names (MyComponent,
 * ReactiveFormsSampleComponent), which makes the doc unreachable through
 * list_components and component-filtered search.
 *
 * Deriving it mechanically removes that entire class of drift: names come from the
 * document text, every one is checked against the real API index, ordering is stable,
 * and repeated runs produce identical output.
 *
 * Usage:
 *   npx tsx scripts/derive-components.ts --framework angular
 *   npx tsx scripts/derive-components.ts --framework angular --dry-run
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { join, resolve } from "path";
import { buildCanonicalIndex } from "./rewrite-api-links.js";
import { PLATFORMS, type Platform } from "../src/config/platforms.js";

const ROOT = resolve(import.meta.dirname, "..");

// Component prefix per platform. Only names carrying the platform's own prefix are
// considered — anything else in a code sample is application code.
const PREFIX: Record<Platform, string> = {
  angular: "Igx",
  react: "Igr",
  blazor: "Igb",
  webcomponents: "Igc",
};

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 ? process.argv[i + 1] : undefined;
}

interface Frontmatter {
  block: string;
  body: string;
  component: string;
}

function splitFrontmatter(raw: string): Frontmatter | null {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const componentLine = m[1].match(/^component:[ \t]*(.*)$/m);
  return {
    block: m[0],
    body: raw.slice(m[0].length),
    component: componentLine ? componentLine[1].trim() : "",
  };
}

/** Prefixed names from `text`, in first-appearance order, that exist in the API index. */
function extract(text: string, prefix: string, index: Map<string, string>): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const re = new RegExp(`\\b${prefix}[A-Za-z0-9]+\\b`, "g");
  for (const match of text.matchAll(re)) {
    const canonical = index.get(match[0].toLowerCase());
    if (!canonical || seen.has(canonical)) continue;
    seen.add(canonical);
    out.push(canonical);
  }
  return out;
}

/**
 * The component the document is primarily about, guessed from its filename.
 * "action-strip.md" -> IgxActionStripComponent, "grid-paging.md" -> IgxGridComponent.
 */
function primaryFromFilename(file: string, prefix: string, index: Map<string, string>): string | null {
  const tokens = file.replace(/\.md$/, "").split(/[-_.]/).filter(Boolean);
  for (let take = tokens.length; take > 0; take--) {
    const stem = (prefix + tokens.slice(0, take).join("")).toLowerCase();
    const exact = index.get(stem) ?? index.get(stem + "component") ?? index.get(stem + "directive");
    if (exact) return exact;
  }
  return null;
}

/**
 * Start from the model's list and remove anything not in the API index — that alone
 * drops sample-app classes and hallucinated names. Then make sure the document's
 * primary component leads, and add any indexed component named in a heading, which
 * catches subjects the model omitted. Body-wide extraction is only a fallback: every
 * component mentioned anywhere includes those merely used by demo code, which buries
 * the actual subject.
 */
function derive(
  modelValue: string,
  body: string,
  file: string,
  prefix: string,
  index: Map<string, string>
): string[] {
  // The model sometimes emits `component: ""` for documents with no library component
  // (CLI guides, migration walkthroughs). Unquote so those become genuinely empty
  // rather than a component literally named `""`.
  const supplied = modelValue
    .split(",")
    .map(s => s.trim().replace(/^["']+|["']+$/g, "").trim())
    .filter(Boolean);
  const headings = body.split("\n").filter(l => /^#{1,4}\s/.test(l)).join("\n");
  const fromHeadings = extract(headings, prefix, index);

  // Keep a supplied name when any of these hold, and drop it otherwise:
  //   * it carries an Ignite UI prefix — the API index is incomplete (it lacks the
  //     data-visualisation components, and Angular docs legitimately reference the
  //     Igc* Web Components wrappers), so the prefix is the more reliable signal;
  //   * the index knows it;
  //   * a heading names it — covers documented API outside the index, such as the
  //     Excel library's Workbook and WorksheetChart.
  // Sample-application classes — MyComponent, ReactiveFormsSampleComponent, custom
  // validators — satisfy none of these and are what this removes.
  const kept = supplied
    .filter(s =>
      /^Ig[xrbc][A-Z]/.test(s) ||
      index.has(s.toLowerCase()) ||
      new RegExp(`\\b${s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`).test(headings))
    .map(s => index.get(s.toLowerCase()) ?? s);

  // Every supplied name was rejected, so the model listed nothing usable — the
  // sample-app-classes case. Here the body is the better source even though it also
  // picks up components used incidentally by demo code.
  const allRejected = supplied.length > 0 && kept.length === 0;
  const fallback = allRejected ? extract(body, prefix, index).slice(0, 12) : [];

  const primary = primaryFromFilename(file, prefix, index);
  const ordered = [...(primary ? [primary] : []), ...kept, ...fromHeadings, ...fallback];

  const seen = new Set<string>();
  const out: string[] = [];
  for (const name of ordered) {
    if (seen.has(name)) continue;
    seen.add(name);
    out.push(name);
  }
  // No positive evidence at all — leave the model's value alone rather than replace it
  // with components that merely appear in demo code.
  return out;
}

function main(): void {
  const framework = arg("framework") as Platform | undefined;
  const dryRun = process.argv.includes("--dry-run");

  if (!framework || !PLATFORMS.includes(framework)) {
    console.error(`--framework is required. Valid: ${PLATFORMS.join(", ")}`);
    process.exit(1);
  }

  const dir = join(ROOT, "dist", "docs_final", framework);
  if (!existsSync(dir)) {
    console.error(`Not found: ${dir}. Run the pipeline first.`);
    process.exit(1);
  }

  console.log(`Loading ${framework} API index…`);
  const index = buildCanonicalIndex(framework);
  console.log(`  ${index.size} components indexed`);

  const only = arg("only");
  const files = readdirSync(dir)
    .filter(f => f.endsWith(".md") && !f.startsWith("_"))
    .filter(f => !only || f === only);
  let rewritten = 0;
  let unchanged = 0;
  let kept = 0;
  const samples: string[] = [];

  for (const file of files) {
    const path = join(dir, file);
    const raw = readFileSync(path, "utf-8");
    const fm = splitFrontmatter(raw);
    if (!fm) {
      console.warn(`  [warn] ${file}: no frontmatter, skipped`);
      continue;
    }

    const derived = derive(fm.component, fm.body, file, PREFIX[framework], index);
    if (derived.length === 0) {
      // Nothing verifiable in the body — the model's value is better than an empty
      // field. Covers docs whose components carry another platform's prefix, such as
      // the IgcDockManagerComponent wrappers used from Angular.
      kept++;
      continue;
    }

    const next = derived.join(", ");
    if (next === fm.component) {
      unchanged++;
      continue;
    }

    if (samples.length < 5) {
      samples.push(`  ${file}\n      was: ${fm.component}\n      now: ${next}`);
    }
    rewritten++;

    if (!dryRun) {
      const block = fm.block.match(/^component:/m)
        ? fm.block.replace(/^component:[ \t]*.*$/m, `component: ${next}`)
        : fm.block.replace(/^---\r?\n/, `---\ncomponent: ${next}\n`);
      writeFileSync(path, block + fm.body, "utf-8");
    }
  }

  console.log(`\n${framework}: ${files.length} documents`);
  console.log(`  rewritten     : ${rewritten}${dryRun ? " (dry run — nothing written)" : ""}`);
  console.log(`  already correct: ${unchanged}`);
  console.log(`  kept model value (no indexed component found): ${kept}`);
  if (samples.length) {
    console.log(`\nsample changes:\n${samples.join("\n")}`);
  }
}

main();
