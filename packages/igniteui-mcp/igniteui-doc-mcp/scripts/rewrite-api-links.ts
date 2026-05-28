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
  requireHtmlSuffix: boolean;
}

function parseCli(argv: string[]): CliArgs {
  let platform: string | undefined;
  let input: string | undefined;
  let dryRun = false;
  let requireHtmlSuffix = true;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--platform") platform = argv[++i];
    else if (arg === "--input") input = argv[++i];
    else if (arg === "--dry-run") dryRun = true;
    else if (arg === "--no-html-suffix") requireHtmlSuffix = false;
  }

  if (!platform || !(PLATFORMS as readonly string[]).includes(platform)) {
    console.error(`Error: --platform must be one of ${PLATFORMS.join(", ")}`);
    process.exit(1);
  }

  return { platform: platform as Platform, input, dryRun, requireHtmlSuffix };
}

// ---------- URL patterns (one per platform) ----------

// The :kind(classes|interfaces|enums) constraint is what distinguishes API
// reference URLs from /components/ doc pages and /docs/sass/ mixin URLs, which
// must pass through untouched. The :file group captures the full final segment
// (including any "package.component" prefix and the .html suffix).
const URL_PATTERNS: Record<Platform, URLPattern[]> = {
  angular: [
    new URLPattern({ pathname: "/products/ignite-ui-angular/{api/}?docs/typescript/:version/:kind(classes|interfaces|enums)/:file" }),
  ],
  react: [
    new URLPattern({ pathname: "/products/ignite-ui-react/{api/}?docs/typescript/:version/:kind(classes|interfaces|enums)/:file" }),
  ],
  webcomponents: [
    new URLPattern({ pathname: "/products/ignite-ui-web-components/{api/}?docs/typescript/:version/:kind(classes|interfaces|enums)/:file" }),
    new URLPattern({ pathname: "/products/ignite-ui/dock-manager/docs/typescript/:version/:kind(classes|interfaces|enums)/:file" }),
  ],
  blazor: [
    // Blazor URLs preserve the PascalCase FQN, e.g. IgniteUI.Blazor.Controls.IgbGrid.html
    new URLPattern({ pathname: "/blazor/docs/api/api/:file" }),
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

export interface RewriteOptions {
  /** Require the API URL's final path segment to end in `.html`. Legacy docs use
   *  a `.html` suffix; the newer doc build strips it. Set false to accept both
   *  forms (the suffix is stripped when present either way). Default: true. */
  requireHtmlSuffix?: boolean;
}

const MD_LINK_RE = /\[([^\]]*)\]\(([^)\s]+)\)/g;

function isCanonical(segment: string): boolean {
  return /^[A-Z]/.test(segment);
}

export function rewriteApiLinksInMarkdown(
  md: string,
  platform: Platform,
  index: CanonicalIndex,
  options: RewriteOptions = {},
): RewriteResult {
  const { requireHtmlSuffix = true } = options;
  const patterns = URL_PATTERNS[platform];
  const skipped: RewriteResult["skipped"] = [];
  let rewrites = 0;

  const output = md.replace(MD_LINK_RE, (whole, text: string, url: string) => {
    // exec() parses url as a URL and returns null for non-URL strings (relative
    // paths, #anchors, mailto:) — so it is safe to run on every markdown link.
    for (const pattern of patterns) {
      const result = pattern.exec(url);
      if (!result) continue;

      const file = result.pathname.groups.file ?? "";
      const hasHtmlSuffix = file.toLowerCase().endsWith(".html");
      if (requireHtmlSuffix && !hasHtmlSuffix) continue;

      // fqn keeps any "package.component" prefix and the FQN for Blazor anchor
      // decoding; rawSegment is the bare trailing component name.
      const fqn = hasHtmlSuffix ? file.slice(0, -".html".length) : file;
      const dot = fqn.lastIndexOf(".");
      const rawSegment = dot === -1 ? fqn : fqn.slice(dot + 1);
      const fragment = result.hash.input || undefined;

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
          ? decodeBlazorAnchor(fqn, fragment)
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
  console.error(`   .html suffix: ${args.requireHtmlSuffix ? "required" : "optional"}`);

  let totalRewrites = 0;
  let filesTouched = 0;
  const skipLog: Array<{ file: string; url: string; reason: string }> = [];

  for (const file of files) {
    const md = readFileSync(file, "utf-8");
    const { output, rewrites, skipped } = rewriteApiLinksInMarkdown(md, args.platform, index, {
      requireHtmlSuffix: args.requireHtmlSuffix,
    });
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
