import { createHash } from "crypto";
import * as fs from "fs";
import * as path from "path";
import OpenAI from "openai";
import { parseFrontmatter } from "./lib/frontmatter.js";
import type { TocSidecarRecord } from "./lib/toc-sidecar.js";

const ROOT = path.resolve(".");
const DOCS_FINAL_DIR = path.join(ROOT, "dist", "docs_final");
const TOC_INDEX_DIR = path.join(ROOT, "dist", "toc-index");
const OUTPUT_DIR = path.join(ROOT, "data", "group-summaries");
const FRAMEWORKS = ["angular", "react", "blazor", "webcomponents"];

// Bump when the prompt changes: it is part of the cache hash, so every group
// regenerates rather than silently keeping output from the previous wording.
const PROMPT_VERSION = 1;

const SYSTEM_PROMPT = `You write one-line summaries for groups of component documentation.

You are given the name of a documentation group and the summaries of the docs it contains. Write a single sentence describing what the group covers, so a developer can decide whether to open it.

Rules:
- 120-160 characters. Never exceed 160.
- Name the concrete capabilities the group covers, in the docs' own vocabulary.
- No framework names, no product names, no "this group", no "documentation for".
- No markdown, no quotes, no trailing period beyond the single sentence's own.
- Output the sentence and nothing else.`;

interface CacheEntry {
  groupKey: string;
  section: string;
  groupLabel: string;
  summary: string;
  hash: string;
  model: string;
  promptVersion: number;
}

interface GroupInput {
  groupKey: string;
  section: string;
  groupLabel: string;
  members: { file: string; summary: string }[];
  landing: string;
}

function loadCache(framework: string): Map<string, CacheEntry> {
  const file = path.join(OUTPUT_DIR, `${framework}.json`);
  if (!fs.existsSync(file)) return new Map();
  const entries = JSON.parse(fs.readFileSync(file, "utf-8")) as CacheEntry[];
  return new Map(entries.map((e) => [e.groupKey, e]));
}

function docSummary(framework: string, file: string): string {
  const full = path.join(DOCS_FINAL_DIR, framework, file);
  if (!fs.existsSync(full)) return "";
  return parseFrontmatter(fs.readFileSync(full, "utf-8")).summary;
}

/**
 * Group the sidecar's memberships, deduplicating by `(groupKey, file)` and
 * keeping the lowest `ord` — the same rule the renderer and `doc_groups.doc_count`
 * apply. Feeding raw records in would repeat a doc in the prompt and hash a
 * member list that does not match what gets rendered.
 */
function collectGroups(framework: string): GroupInput[] {
  const sidecarPath = path.join(TOC_INDEX_DIR, `${framework}.json`);
  if (!fs.existsSync(sidecarPath)) {
    console.error(`No TOC sidecar for ${framework} at ${sidecarPath} — run export:${framework} first.`);
    process.exit(1);
  }
  const records = JSON.parse(fs.readFileSync(sidecarPath, "utf-8")) as TocSidecarRecord[];

  const byGroup = new Map<string, Map<string, TocSidecarRecord>>();
  const landings = new Map<string, string>();

  for (const rec of records) {
    let members = byGroup.get(rec.groupKey);
    if (!members) {
      members = new Map();
      byGroup.set(rec.groupKey, members);
    }
    const existing = members.get(rec.file);
    if (!existing || rec.ord < existing.ord) members.set(rec.file, rec);
    if (rec.landing) landings.set(rec.groupKey, rec.file);
  }

  const groups: GroupInput[] = [];
  for (const [groupKey, members] of byGroup) {
    const ordered = [...members.values()].sort((a, b) => a.ord - b.ord);
    const landingFile = landings.get(groupKey);
    groups.push({
      groupKey,
      section: ordered[0].section,
      groupLabel: ordered[0].groupLabel,
      members: ordered.map((r) => ({ file: r.file, summary: docSummary(framework, r.file) })),
      landing: landingFile ? docSummary(framework, landingFile) : "",
    });
  }
  return groups.sort((a, b) => a.groupKey.localeCompare(b.groupKey));
}

function hashOf(group: GroupInput, model: string): string {
  const payload = JSON.stringify({
    members: group.members.map((m) => [m.file, m.summary]),
    landing: group.landing,
    promptVersion: PROMPT_VERSION,
    model,
  });
  return createHash("sha256").update(payload).digest("hex").slice(0, 32);
}

function userPrompt(group: GroupInput): string {
  const lines = [`Group: ${group.groupKey}`];
  if (group.landing) lines.push(`Group overview: ${group.landing}`);
  lines.push("", "Docs in this group:");
  for (const m of group.members) {
    lines.push(`- ${m.file.replace(/\.md$/, "")}${m.summary ? `: ${m.summary}` : ""}`);
  }
  return lines.join("\n");
}

async function generate(client: OpenAI, model: string, group: GroupInput): Promise<string> {
  const response = await client.chat.completions.create({
    model,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userPrompt(group) },
    ],
    max_completion_tokens: 2000,
  });
  return (response.choices[0].message.content ?? "").trim().replace(/\s+/g, " ");
}

async function run(framework: string, model: string, force: boolean, apiBase?: string) {
  const groups = collectGroups(framework);
  const cache = loadCache(framework);

  const stale = groups.filter((g) => {
    if (force) return true;
    const hit = cache.get(g.groupKey);
    return !hit || !hit.summary || hit.hash !== hashOf(g, model);
  });

  console.log(`${framework}: ${groups.length} group(s), ${stale.length} to regenerate, ${groups.length - stale.length} cached`);

  let client: OpenAI | null = null;
  if (stale.length > 0) {
    if (!process.env.OPENAI_API_KEY) {
      console.error(
        `${stale.length} group(s) need a summary but OPENAI_API_KEY is not set. ` +
        `Provide a key, or leave the cache as-is (groups build with a NULL summary).`
      );
      process.exit(1);
    }
    const clientOpts: ConstructorParameters<typeof OpenAI>[0] = {};
    if (apiBase) clientOpts.baseURL = apiBase;
    client = new OpenAI(clientOpts);
  }

  const staleKeys = new Set(stale.map((g) => g.groupKey));
  const out: CacheEntry[] = [];

  for (const group of groups) {
    if (!staleKeys.has(group.groupKey)) {
      // Copy the cached summary through; make no call.
      out.push({ ...cache.get(group.groupKey)!, section: group.section, groupLabel: group.groupLabel });
      continue;
    }

    const summary = await generate(client!, model, group);
    if (!summary) {
      console.warn(`  [warn] empty summary for "${group.groupKey}" — leaving it uncached`);
      continue;
    }
    console.log(`  ${group.groupKey} (${group.members.length} docs) -> ${summary.length} ch`);
    out.push({
      groupKey: group.groupKey,
      section: group.section,
      groupLabel: group.groupLabel,
      summary,
      hash: hashOf(group, model),
      model,
      promptVersion: PROMPT_VERSION,
    });
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const file = path.join(OUTPUT_DIR, `${framework}.json`);
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, `${JSON.stringify(out, null, 2)}\n`, "utf-8");
  fs.renameSync(tmp, file);
  console.log(`${framework}: wrote ${out.length} summary/summaries -> ${file}`);
}

async function main() {
  const args = process.argv.slice(2);
  const arg = (name: string) => {
    const i = args.indexOf(name);
    return i !== -1 ? args[i + 1] : undefined;
  };

  const targetFramework = arg("--framework");
  if (targetFramework && !FRAMEWORKS.includes(targetFramework)) {
    console.error(`Unknown framework: ${targetFramework}. Valid: ${FRAMEWORKS.join(", ")}`);
    process.exit(1);
  }

  const model = arg("--model") || process.env.COMPRESS_MODEL || "gpt-5.6-luna";
  const force = args.includes("--force");

  for (const fw of targetFramework ? [targetFramework] : FRAMEWORKS) {
    await run(fw, model, force, arg("--api-base"));
  }
}

main();
