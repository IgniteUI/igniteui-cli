import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from "fs";
import { join, dirname, resolve, relative } from "path";
import yaml from "js-yaml";

const ROOT = resolve(import.meta.dirname, "..");
const DOCFX_ROOT = join(ROOT, "angular", "igniteui-docfx");
const LANG = process.argv[2] || "en";
const DOCFX_ARTICLES = join(DOCFX_ROOT, LANG, "components");
const OUTPUT_DIR = join(ROOT, "dist", "docs_processing", "angular");

// Replace API documentation URL placeholders with production URLs
const ENV_JSON_PATH = join(DOCFX_ROOT, LANG, "environment.json");
const envConfig: Record<string, string> = JSON.parse(readFileSync(ENV_JSON_PATH, "utf-8")).production;

const API_ENV_VARS = ["angularApiUrl", "sassApiUrl", "dvApiBaseUrl"];

function replaceEnvironmentVars(content: string): string {
  return content.replace(/\{environment:(\w+)\}/g, (match, key) => {
    return API_ENV_VARS.includes(key) ? (envConfig[key] ?? match) : match;
  });
}

function stripImages(content: string): string {
  return content.replace(/!\[[^\]]*\]\([^)]*\)/g, "");
}

const gridsConfigs: Record<string, Record<string, string>> = {
  grid: {
    igPath: "grid",
    igMainTopic: "grid",
    igObjectRef: "grid",
    igDemoBasePath: "grid",
    igComponent: "Grid",
    igxName: "IgxGrid",
    igTypeDoc: "igxgridcomponent",
    igSelector: "igx-grid",
  },
  treeGrid: {
    igPath: "treegrid",
    igMainTopic: "tree-grid",
    igObjectRef: "treeGrid",
    igDemoBasePath: "tree-grid",
    igComponent: "Tree Grid",
    igxName: "IgxTreeGrid",
    igTypeDoc: "igxtreegridcomponent",
    igSelector: "igx-tree-grid",
  },
  hierarchicalGrid: {
    igPath: "hierarchicalgrid",
    igMainTopic: "hierarchical-grid",
    igObjectRef: "hierarchicalGrid",
    igDemoBasePath: "hierarchical-grid",
    igComponent: "Hierarchical Grid",
    igxName: "IgxHierarchicalGrid",
    igTypeDoc: "igxhierarchicalgridcomponent",
    igSelector: "igx-hierarchical-grid",
  },
  pivotGrid: {
    igPath: "pivotGrid",
    igMainTopic: "pivot-grid",
    igObjectRef: "pivotGrid",
    igDemoBasePath: "pivot-grid",
    igComponent: "Pivot Grid",
    igxName: "IgxPivotGrid",
    igTypeDoc: "igxpivotgridcomponent",
    igSelector: "igx-pivot-grid",
  },
};

interface TocEntry {
  name: string;
  href: string;
  premium: boolean;
}

function parseToc(tocPath: string): TocEntry[] {
  const raw = readFileSync(tocPath, "utf-8");
  const entries: TocEntry[] = [];

  function flatten(items: any[]) {
    for (const item of items) {
      if (item.href) {
        entries.push({
          name: item.name || "",
          href: item.href,
          premium: item.premium === true,
        });
      }
      if (Array.isArray(item.items)) {
        flatten(item.items);
      }
    }
  }

  const parsed = yaml.load(raw) as any[];
  if (Array.isArray(parsed)) {
    flatten(parsed);
  }

  return entries;
}

function injectTocMetadata(content: string, entry: TocEntry): string {
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (fmMatch) {
    const fmBlock = fmMatch[1];
    let extra = `_tocName: ${entry.name}`;
    if (entry.premium) extra += `\n_premium: true`;
    const newFm = `---\n${fmBlock}\n${extra}\n---`;
    return content.slice(0, fmMatch.index!) + newFm + content.slice(fmMatch.index! + fmMatch[0].length);
  }
  let fm = `---\n_tocName: ${entry.name}`;
  if (entry.premium) fm += `\n_premium: true`;
  fm += `\n---\n`;
  return fm + content;
}

function collectFiles(dir: string, ext: string): string[] {
  const results: string[] = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...collectFiles(full, ext));
    } else if (entry.endsWith(ext)) {
      results.push(full);
    }
  }
  return results;
}

function processFileInclude(content: string, context: Record<string, string>, filePath: string): string {
  // Process @@include directives
  content = content.replace(/@@include\(\s*'([^']+)'\s*(?:,\s*(\{[^)]*\}))?\s*\)/g, (match, includePath, ctxStr) => {
    const resolved = resolve(dirname(filePath), includePath);
    if (!existsSync(resolved)) {
      console.error(`[WARN] Include file not found: ${resolved}`);
      return match;
    }
    let includeCtx = { ...context };
    if (ctxStr) {
      try {
        const parsed = JSON.parse(ctxStr.replace(/'/g, '"'));
        includeCtx = { ...includeCtx, ...parsed };
      } catch { /* use parent context */ }
    }
    const included = readFileSync(resolved, "utf-8");
    return processFileInclude(included, includeCtx, resolved);
  });

  // Process @@if blocks (supports nested)
  content = processConditionals(content, context);

  // Replace @@variable references
  for (const [key, value] of Object.entries(context)) {
    content = content.replaceAll(`@@{${key}}`, value);
    content = content.replaceAll(`@@${key}`, value);
  }

  return content;
}

function processConditionals(content: string, context: Record<string, string>): string {
  // Match @@if (variable === 'value') { ... }
  // Need to handle nested braces
  const ifRegex = /@@if\s*\(\s*(\w+)\s*(===|!==)\s*'([^']*)'\s*\)\s*\{/g;
  let result = content;
  let match: RegExpExecArray | null;

  while ((match = ifRegex.exec(result)) !== null) {
    const variable = match[1];
    const operator = match[2];
    const value = match[3];
    const startIdx = match.index;
    const braceStart = startIdx + match[0].length;

    let depth = 1;
    let i = braceStart;
    while (i < result.length && depth > 0) {
      if (result[i] === "{") depth++;
      else if (result[i] === "}") depth--;
      i++;
    }

    if (depth !== 0) break;

    const blockContent = result.slice(braceStart, i - 1);
    const ctxValue = context[variable] || "";
    const conditionMet = operator === "===" ? ctxValue === value : ctxValue !== value;

    const replacement = conditionMet ? blockContent : "";
    result = result.slice(0, startIdx) + replacement + result.slice(i);

    // Reset regex since we modified the string
    ifRegex.lastIndex = startIdx + replacement.length;
  }

  return result;
}

function expandGridTemplates(): Map<string, { relPath: string; content: string }> {
  const templatesDir = join(DOCFX_ARTICLES, "grids_templates");
  const expanded = new Map<string, { relPath: string; content: string }>();

  if (!existsSync(templatesDir)) {
    console.error(`[WARN] grids_templates directory not found: ${templatesDir}`);
    return expanded;
  }

  const templates = collectFiles(templatesDir, ".md");

  for (const [, config] of Object.entries(gridsConfigs)) {
    for (const tmplPath of templates) {
      const fileName = relative(templatesDir, tmplPath);
      const outRelPath = join(config.igPath, fileName);
      let content = readFileSync(tmplPath, "utf-8");
      content = processFileInclude(content, config, tmplPath);
      expanded.set(outRelPath, { relPath: outRelPath, content });
    }
  }

  return expanded;
}

function main() {
  console.error(`Exporting Angular docs (lang: ${LANG})...`);

  // Step 1: Parse toc.yml for the definitive file list
  console.error("Parsing toc.yml...");
  const tocPath = join(DOCFX_ARTICLES, "toc.yml");
  const tocEntries = parseToc(tocPath);
  console.error(`  Found ${tocEntries.length} entries in toc.yml`);

  // Step 2: Expand grid templates
  console.error("Expanding grid templates...");
  const expandedGridDocs = expandGridTemplates();

  let totalFiles = 0;

  // Step 3: Process toc entries
  console.error("Processing toc entries...");

  for (const entry of tocEntries) {
    const relPath = entry.href;

    // Check if this is an expanded grid template
    const normalizedRel = relPath.replace(/\//g, "\\");
    const gridDoc = expandedGridDocs.get(relPath) || expandedGridDocs.get(normalizedRel);

    let content: string;
    if (gridDoc) {
      content = gridDoc.content;
      // Remove leading comments
      content = content.replace(/^<!--[\s\S]*?-->(?:\r?\n)*/, "");
      // Remove blank lines before non-empty lines (same as gulp pipeline)
      content = content.replace(/^\s*\n(?=\S)/gm, "");
    } else {
      const mdPath = join(DOCFX_ARTICLES, relPath);
      if (!existsSync(mdPath)) {
        console.error(`[WARN] File not found for toc entry "${entry.name}": ${mdPath}`);
        continue;
      }
      content = readFileSync(mdPath, "utf-8");
      // Remove leading comments
      content = content.replace(/^<!--[\s\S]*?-->(?:\r?\n)*/, "");
    }

    // Inject toc metadata into frontmatter
    content = injectTocMetadata(content, entry);

    // Replace environment variables with production URLs
    content = replaceEnvironmentVars(content);
    content = stripImages(content);

    const outPath = join(OUTPUT_DIR, relPath);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, content, "utf-8");
    totalFiles++;
  }

  console.error(`\nDone!`);
  console.error(`  Files exported: ${totalFiles}`);
  console.error(`  Output: ${OUTPUT_DIR}`);
}

main();
