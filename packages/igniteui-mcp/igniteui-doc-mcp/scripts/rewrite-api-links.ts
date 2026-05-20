/**
 * Rewrite infragistics.com API documentation URLs in compiled docs to
 * deterministic mcp:get_api_reference?... refs.
 *
 *   [IgcCheckbox API](https://www.infragistics.com/.../classes/igccheckboxcomponent.html#checked)
 *   → [IgcCheckbox API](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=checked)
 *
 * Runs after inject:<platform> and before diff/compress in the pipeline.
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, mkdirSync } from "fs";
import { join, resolve } from "path";
import { ApiDocLoader } from "../src/lib/api-doc-loader.js";
import { PLATFORM_CONFIGS, type Platform, PLATFORMS } from "../src/config/platforms.js";

const ROOT = resolve(import.meta.dirname, "..");

interface CliArgs {
  platform: Platform;
  input?: string;
  dryRun: boolean;
}

function parseCli(argv: string[]): CliArgs {
  let platform: string | undefined;
  let input: string | undefined;
  let dryRun = false;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--platform") platform = argv[++i];
    else if (arg === "--input") input = argv[++i];
    else if (arg === "--dry-run") dryRun = true;
  }

  if (!platform || !(PLATFORMS as readonly string[]).includes(platform)) {
    console.error(`Error: --platform must be one of ${PLATFORMS.join(", ")}`);
    process.exit(1);
  }

  return { platform: platform as Platform, input, dryRun };
}

// ---------- URL patterns (one per platform) ----------

interface UrlPattern {
  regex: RegExp;
  // Given a regex match, return the lowercase-or-PascalCase component segment.
  // For "package.component" forms, takes the substring after the final dot.
  extractSegment(match: RegExpExecArray): string;
}

const URL_PATTERNS: Record<Platform, UrlPattern[]> = {
  angular: [
    {
      regex: /\/products\/ignite-ui-angular\/(?:api\/)?docs\/typescript\/[^/]+\/(?:classes|interfaces|enums)\/([^/)\s#]+?)\.html(?:#([^)\s]+))?/g,
      extractSegment: (m) => {
        const seg = m[1];
        const dot = seg.lastIndexOf(".");
        return dot === -1 ? seg : seg.slice(dot + 1);
      },
    },
  ],
  react: [
    {
      regex: /\/products\/ignite-ui-react\/(?:api\/)?docs\/typescript\/[^/]+\/(?:classes|interfaces|enums)\/([^/)\s#]+?)\.html(?:#([^)\s]+))?/g,
      extractSegment: (m) => {
        const seg = m[1];
        const dot = seg.lastIndexOf(".");
        return dot === -1 ? seg : seg.slice(dot + 1);
      },
    },
  ],
  webcomponents: [
    {
      regex: /\/products\/ignite-ui-web-components\/(?:api\/)?docs\/typescript\/[^/]+\/(?:classes|interfaces|enums)\/([^/)\s#]+?)\.html(?:#([^)\s]+))?/g,
      extractSegment: (m) => {
        const seg = m[1];
        const dot = seg.lastIndexOf(".");
        return dot === -1 ? seg : seg.slice(dot + 1);
      },
    },
    {
      regex: /\/products\/ignite-ui\/dock-manager\/docs\/typescript\/[^/]+\/(?:classes|interfaces|enums)\/([^/)\s#]+?)\.html(?:#([^)\s]+))?/g,
      extractSegment: (m) => m[1],
    },
  ],
  blazor: [
    {
      // Blazor URLs preserve the PascalCase FQN, e.g. IgniteUI.Blazor.Controls.IgbGrid.html
      regex: /\/blazor\/docs\/api\/api\/([A-Za-z0-9_.]+?)\.html(?:#([^)\s]+))?/g,
      extractSegment: (m) => {
        const seg = m[1];
        const dot = seg.lastIndexOf(".");
        return dot === -1 ? seg : seg.slice(dot + 1);
      },
    },
  ],
};

// ---------- Canonical-name index ----------

export type CanonicalIndex = Map<string, string>;

export function buildCanonicalIndex(platform: Platform): CanonicalIndex {
  const index: CanonicalIndex = new Map();
  const config = PLATFORM_CONFIGS[platform];
  const loader = new ApiDocLoader([config]);
  loader.load();

  for (const entry of loader.search({ platform })) {
    index.set(entry.component.toLowerCase(), entry.component);
  }
  return index;
}

// ---------- Fragment / member encoding ----------

// Decode a Blazor docfx synthetic anchor (e.g. "IgniteUI_Blazor_Controls_IgbGrid_Sort")
// into the bare member name ("Sort"). Returns the original fragment if it does not
// start with the expected FQN prefix.
function decodeBlazorAnchor(fqn: string, fragment: string): string {
  const prefix = fqn.replace(/\./g, "_") + "_";
  if (!fragment.startsWith(prefix)) return fragment;
  const rest = fragment.slice(prefix.length);
  const token = rest.split("_")[0];
  return token || fragment;
}

// ---------- Core rewriter ----------

export interface RewriteResult {
  output: string;
  rewrites: number;
  skipped: Array<{ url: string; reason: "unknown-component" | "non-api" }>;
}

const MD_LINK_RE = /\[([^\]]*)\]\(([^)\s]+)\)/g;

function isCanonical(segment: string): boolean {
  return /^[A-Z]/.test(segment);
}

export function rewriteApiLinksInMarkdown(
  md: string,
  platform: Platform,
  index: CanonicalIndex,
): RewriteResult {
  const patterns = URL_PATTERNS[platform];
  const skipped: RewriteResult["skipped"] = [];
  let rewrites = 0;

  const output = md.replace(MD_LINK_RE, (whole, text: string, url: string) => {
    // Each platform regex must match the full URL — they're anchored to
    // /<classes|interfaces|enums>/ which only appears in API URLs.
    for (const pat of patterns) {
      pat.regex.lastIndex = 0;
      const m = pat.regex.exec(url);
      if (!m) continue;

      const rawSegment = pat.extractSegment(m);
      const fragment = m[2];

      let canonical: string;
      if (isCanonical(rawSegment)) {
        canonical = rawSegment;
      } else {
        const lookup = index.get(rawSegment.toLowerCase());
        if (!lookup) {
          skipped.push({ url, reason: "unknown-component" });
          return whole;
        }
        canonical = lookup;
      }

      const params = new URLSearchParams();
      params.set("platform", platform);
      params.set("component", canonical);

      if (fragment) {
        const member = platform === "blazor"
          ? decodeBlazorAnchor(m[1], fragment)
          : fragment;
        params.set("member", member);
      }

      // URLSearchParams encodes `=` as expected but we want the leading scheme
      // verbatim, so we string-build the final ref.
      const ref = `mcp:get_api_reference?${params.toString()}`;
      rewrites++;
      return `[${text}](${ref})`;
    }
    return whole;
  });

  return { output, rewrites, skipped };
}

// ---------- File walker / CLI entry ----------

function walkMarkdown(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walkMarkdown(full));
    else if (st.isFile() && name.endsWith(".md")) out.push(full);
  }
  return out;
}

function csvEscape(value: string): string {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

async function main() {
  const args = parseCli(process.argv.slice(2));
  const inputDir = args.input
    ? resolve(args.input)
    : join(ROOT, "dist", "docs_prepeared", args.platform);

  if (!existsSync(inputDir)) {
    console.error(`Input directory not found: ${inputDir}`);
    process.exit(1);
  }

  console.error(`Loading ${args.platform} API index…`);
  const index = buildCanonicalIndex(args.platform);
  console.error(`   indexed ${index.size} components`);

  const files = walkMarkdown(inputDir);
  console.error(`Scanning ${files.length} markdown files in ${inputDir}`);

  let totalRewrites = 0;
  let filesTouched = 0;
  const skipLog: Array<{ file: string; url: string; reason: string }> = [];

  for (const file of files) {
    const md = readFileSync(file, "utf-8");
    const { output, rewrites, skipped } = rewriteApiLinksInMarkdown(md, args.platform, index);
    if (rewrites > 0) {
      filesTouched++;
      totalRewrites += rewrites;
      if (!args.dryRun) writeFileSync(file, output);
    }
    for (const s of skipped) skipLog.push({ file, url: s.url, reason: s.reason });
  }

  const logPath = join(inputDir, "_rewrite_log.csv");
  if (!args.dryRun) {
    mkdirSync(inputDir, { recursive: true });
    const csv = ["file,url,reason", ...skipLog.map(s =>
      `${csvEscape(s.file)},${csvEscape(s.url)},${csvEscape(s.reason)}`
    )].join("\n");
    writeFileSync(logPath, csv + "\n");
  }

  console.error(
    `\nrewrote ${totalRewrites} links across ${filesTouched} files; ` +
    `${skipLog.length} skipped (unknown component)` +
    (args.dryRun ? " [dry-run, no files written]" : "")
  );
  if (!args.dryRun) console.error(`Skip log: ${logPath}`);
}

// Only run main() when invoked as a script, not when imported by tests.
const isMain = process.argv[1] && resolve(process.argv[1]) === resolve(import.meta.dirname, "rewrite-api-links.ts");
if (isMain) {
  main().catch(err => {
    console.error(err);
    process.exit(1);
  });
}
