import type { DocsProvider } from '../providers/DocsProvider.js';
import { BLAZOR_DOTNET_GUIDE, SETUP_DOCS, SETUP_MD } from './constants.js';

export const MISSING_FRAMEWORK_MESSAGE =
  'Which framework are you using? Please specify one of: angular, react, blazor, or webcomponents.';

// Sanitize user input for FTS4 MATCH syntax.
// Strip characters that are FTS4 operators or commonly cause syntax issues:
//   " (phrase delimiter), ( ) (grouping), { } [ ] (extra grouping/bracketing),
//   : (column filter), @ (internal)
// Preserve hyphens — the porter tokenizer handles them consistently
// at both index and query time (e.g. "grid-editing" stays as one phrase).
// Preserve trailing * — FTS4 prefix queries (e.g. grid*) rely on it,
// and the DB is built with prefix="2,3" indexes to support this.
//
// Multi-word queries use implicit AND (space-separated in FTS4), meaning all
// terms must appear in the document. This is far more precise than OR:
//   "virtual scroll" → `"virtual" "scroll"` (both required)
// Single-word and prefix queries are unaffected by this change.
// Natural-language filler words dropped before FTS4 matching. FTS4 uses implicit
// AND, so leaving "how"/"do"/"i" in a query like "how do I enable row editing"
// forces those words to appear in a doc and collapses recall to near zero.
// Deliberately excludes and/or/but — those are left as ordinary terms.
const SEARCH_STOPWORDS = new Set([
  'how', 'do', 'does', 'did', 'i', 'a', 'an', 'the', 'to', 'of', 'in', 'on',
  'is', 'are', 'am', 'be', 'my', 'me', 'we', 'you', 'your', 'it', 'its',
  'this', 'that', 'these', 'those', 'when', 'what', 'which', 'who', 'why',
  'want', 'need', 'can', 'could', 'would', 'should', 'please', 'help',
]);

// Quote a plain term for FTS4, or pass through a prefix query (grid*). Bare
// asterisks have no prefix and would be an FTS4 syntax error — drop them.
function quoteOrPrefixTerm(term: string): string | null {
  if (term.endsWith('*')) {
    return /[^*]/.test(term) ? term : null;
  }
  return `"${term}"`;
}

export function sanitizeSearchDocsQuery(queryText: string): string | null {
  const rawTerms = queryText
    .replace(/["(){}[\]:@]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  // Strip stopwords, but if that leaves nothing (e.g. a pure "how do I" query)
  // fall back to the full term list rather than returning no query at all.
  const meaningful = rawTerms.filter((t) => !SEARCH_STOPWORDS.has(t.toLowerCase()));
  const terms = meaningful.length > 0 ? meaningful : rawTerms;

  const sanitized = terms
    .map(quoteOrPrefixTerm)
    .filter((term): term is string => Boolean(term))
    .join(' ');

  return sanitized || null;
}

/**
 * Normalise a doc name to kebab-case so callers can pass component class
 * names (e.g. IgxCarousel, IgrCarousel, Carousel) in addition to the
 * canonical kebab-case doc names (e.g. carousel).
 *
 * Steps:
 *   1. Strip Ignite UI framework prefix: Igx (Angular), Igr (React),
 *      Igc (Web Components), Igb (Blazor)
 *   2. Strip trailing "Component" suffix (e.g. IgxGridComponent → Grid)
 *   3. Convert PascalCase / camelCase to kebab-case and lowercase
 */
export function normalizeDocName(name: string): string {
  let normalized = name.trim().replace(/^Ig[xrcb]/i, '');
  normalized = normalized.replace(/Component$/i, '');
  normalized = normalized.replace(/([a-z0-9])([A-Z])/g, '$1-$2');
  // Collapse spaces/underscores to hyphens so multi-word names ("date picker",
  // "tree grid") resolve like their kebab-case doc keys.
  normalized = normalized.replace(/[\s_]+/g, '-').toLowerCase();
  normalized = normalized.replace(/-+/g, '-').replace(/^-|-$/g, '');
  return normalized || name.toLowerCase();
}

/**
 * Per-framework alias maps: normalized kebab-case name → actual doc key.
 *
 * Covers cases where the doc key cannot be derived mechanically:
 *   - Combo Box overview is keyed as "overview" not "combo" / "combo-box"
 *   - Combo sub-docs use bare generic names: "features", "templates", "single-selection"
 *   - Grid overview is "grid-grid" or "data-grid", not "grid"
 *   - Several components append "-overview" or "-chart" suffix
 *   - "radio" covers both Radio and Radio Group
 *   - "slider" covers both Slider and Range Slider
 */
const DOC_ALIASES: Record<string, Record<string, string>> = {
    react: {
        // Combo Box
        combo: 'overview',
        'combo-box': 'overview',
        combobox: 'overview',
        'combo-overview': 'overview',
        'combo-features': 'features',
        'combobox-features': 'features',
        'combo-templates': 'templates',
        'combobox-templates': 'templates',
        'combo-single-selection': 'single-selection',
        'combobox-single-selection': 'single-selection',
        // Grid types
        grid: 'data-grid',
        'hierarchical-grid': 'hierarchical-grid-overview',
        'tree-grid': 'tree-grid-overview',
        'pivot-grid': 'pivot-grid-overview',
        'grid-lite': 'grid-lite-overview',
        spreadsheet: 'spreadsheet-overview',
        'zoom-slider': 'zoomslider-overview',
        zoomslider: 'zoomslider-overview',
        // Virtualization
        virtualization: 'grid-virtualization',
        'virtual-scroll': 'grid-virtualization',
        'virtual-scrolling': 'grid-virtualization',
        'grid-performance': 'grid-virtualization',
        // Non-obvious renames
        treemap: 'treemap-chart',
        'radio-group': 'radio',
        'radio-and-radio-group': 'radio',
        'range-slider': 'slider',
        dashboard: 'dashboard-tile',
        themes: 'themes-overview',
        theme: 'themes-overview',
        'geographic-map': 'geo-map',
        'geo-map-overview': 'geo-map',
        'geographic-map-features': 'geo-map',
    },
    angular: {
        // Combo Box
        'combo-box': 'combo',
        combobox: 'combo',
        // Grid types
        grid: 'grid-grid',
        'hierarchical-grid': 'hierarchicalgrid-hierarchical-grid',
        'tree-grid': 'treegrid-tree-grid',
        'pivot-grid': 'pivotgrid-pivot-grid',
        spreadsheet: 'spreadsheet-overview',
        'zoom-slider': 'zoomslider-overview',
        zoomslider: 'zoomslider-overview',
        // Virtualization — Angular uses different naming convention (hierarchicalgrid-, treegrid-)
        virtualization: 'grid-virtualization',
        'virtual-scroll': 'grid-virtualization',
        'virtual-scrolling': 'grid-virtualization',
        'grid-performance': 'grid-virtualization',
        'hierarchical-grid-virtualization': 'hierarchicalgrid-virtualization',
        'tree-grid-virtualization': 'treegrid-virtualization',
        // igxFor / virtual-for directive
        'for-of': 'for-of',
        igxfor: 'for-of',
        igxforof: 'for-of',
        forof: 'for-of',
        'virtual-for': 'for-of',
        'igx-for-of': 'for-of',
        // Non-obvious renames
        treemap: 'types-treemap-chart',
        'radio-group': 'radio-button',
        'range-slider': 'slider',
        'geographic-map': 'geo-map',
        'geo-map-overview': 'geo-map',
    },
    webcomponents: {
        // Combo Box
        combo: 'overview',
        'combo-box': 'overview',
        combobox: 'overview',
        // Grid types
        grid: 'data-grid',
        'hierarchical-grid': 'hierarchical-grid-overview',
        'tree-grid': 'tree-grid-overview',
        'pivot-grid': 'pivot-grid-overview',
        'grid-lite': 'grid-lite-overview',
        spreadsheet: 'spreadsheet-overview',
        'zoom-slider': 'zoomslider-overview',
        zoomslider: 'zoomslider-overview',
        // Virtualization
        virtualization: 'grid-virtualization',
        'virtual-scroll': 'grid-virtualization',
        'virtual-scrolling': 'grid-virtualization',
        'grid-performance': 'grid-virtualization',
        // Non-obvious renames
        treemap: 'treemap-chart',
        'radio-group': 'radio',
        'range-slider': 'slider',
        'geographic-map': 'geo-map',
        'geo-map-overview': 'geo-map',
    },
    blazor: {
        // Combo Box
        combo: 'overview',
        'combo-box': 'overview',
        combobox: 'overview',
        // Grid types
        grid: 'data-grid',
        'hierarchical-grid': 'hierarchical-grid-overview',
        'tree-grid': 'tree-grid-overview',
        'pivot-grid': 'pivot-grid-overview',
        'zoom-slider': 'zoomslider-overview',
        zoomslider: 'zoomslider-overview',
        // Virtualization
        virtualization: 'grid-virtualization',
        'virtual-scroll': 'grid-virtualization',
        'virtual-scrolling': 'grid-virtualization',
        'grid-performance': 'grid-virtualization',
        // Non-obvious renames
        treemap: 'treemap-chart',
        'radio-group': 'radio',
        'range-slider': 'slider',
        'geographic-map': 'geo-map',
        'geo-map-overview': 'geo-map',
    },
};


/** Apply the alias map after normalizeDocName. Returns the alias if one exists, otherwise the input unchanged. */
export function applyDocAlias(framework: string, normalizedName: string): string {
  return DOC_ALIASES[framework]?.[normalizedName] ?? normalizedName;
}

/**
 * Angular keys its grid-variant feature docs with a compact, unhyphenated
 * component prefix (treegrid-filtering, hierarchicalgrid-paging), while the
 * user-facing component name — and the DOC_ALIASES entry for it — is
 * hyphenated (tree-grid). Composing a component and a topic therefore yields
 * names like "tree-grid-filtering" that no doc uses. Rewriting the prefix
 * resolves ~90 Angular docs that would otherwise fall through to the search
 * fallback and land on a related-but-wrong doc (e.g. tree-grid-editing →
 * treegrid-batch-editing).
 *
 * React, Web Components and Blazor key these docs with the hyphenated form
 * (hierarchical-grid-advanced-filtering), so the rewrite is Angular-only.
 */
const ANGULAR_COMPACT_GRID_PREFIXES: Array<[string, string]> = [
  ['hierarchical-grid-', 'hierarchicalgrid-'],
  ['tree-grid-', 'treegrid-'],
  ['pivot-grid-', 'pivotgrid-'],
];

/**
 * Rewrite a hyphenated Angular grid-variant prefix to its compact doc-key form.
 * Returns null when no rewrite applies, so callers can skip the extra lookup.
 */
export function applyCompactGridPrefix(framework: string, name: string): string | null {
  if (framework !== 'angular') return null;
  for (const [hyphenated, compact] of ANGULAR_COMPACT_GRID_PREFIXES) {
    if (name.startsWith(hyphenated)) {
      return compact + name.slice(hyphenated.length);
    }
  }
  return null;
}

// Names that already carry a component-type prefix — skip the generic grid- retry for these.
const PREFIXED_DOC_RE =
  /^(grid|hierarchical|tree|pivot|hierarchicalgrid|treegrid|pivotgrid|combo|drop-down|select|for-of)[-]/;

/** Extract result doc names, in rank order, from searchDocs markdown (the `(`name`)` tokens). */
function parseDocNames(searchOutput: string): string[] {
  return [...searchOutput.matchAll(/\(`([^`]+)`\)/g)].map((m) => m[1]);
}

/**
 * True when the requested name and a candidate doc name share a meaningful token
 * (substring either direction, min 3 chars). Guards the search fallback against
 * accepting an unrelated top hit — e.g. "textarea" → "grid-paste-excel" (no
 * shared token, rejected) while still allowing "navigation-drawer" → "navdrawer"
 * ("navdrawer" contains "drawer").
 */
function sharesToken(requestName: string, docName: string): boolean {
  const reqTokens = requestName.split('-').filter((t) => t.length >= 3);
  const docTokens = docName.split('-').filter((t) => t.length >= 3);
  return (
    reqTokens.some((t) => docName.includes(t)) ||
    docTokens.some((t) => requestName.includes(t))
  );
}

export interface ResolvedDoc {
  text: string;
  found: boolean;
  servedName: string;
  /**
   * True when the doc was located by the full-text search fallback rather than
   * by a deterministic name mapping. The served doc is only a best guess at
   * what the caller meant, so callers should say so in their response.
   */
  fuzzy: boolean;
}

/**
 * Resolve a caller-supplied doc name to actual doc content, shared by get_doc
 * and get_example. Applies normalizeDocName + applyDocAlias, then the Angular
 * compact grid prefix rewrite (tree-grid-x → treegrid-x), then a generic grid-
 * prefix fallback for bare feature names (e.g. "sorting" → "grid-sorting").
 * As a last resort, runs a full-text search and serves the top hit — this
 * catches names that don't map mechanically (e.g. angular "navigation drawer"
 * → navdrawer, angular charts under the types- prefix) and is the only path
 * that sets fuzzy.
 */
export async function resolveDoc(
  docsProvider: DocsProvider,
  framework: string,
  name: string,
): Promise<ResolvedDoc> {
  const resolvedName = applyDocAlias(framework, normalizeDocName(name.trim()));
  let { text, found } = await docsProvider.getDoc(framework, resolvedName);
  let servedName = resolvedName;

  if (!found) {
    const compactName = applyCompactGridPrefix(framework, resolvedName);
    if (compactName) {
      const rewritten = await docsProvider.getDoc(framework, compactName);
      if (rewritten.found) {
        ({ text, found } = rewritten);
        servedName = compactName;
      }
    }
  }

  if (!found && !PREFIXED_DOC_RE.test(resolvedName)) {
    const withGridPrefix = await docsProvider.getDoc(framework, `grid-${resolvedName}`);
    if (withGridPrefix.found) {
      ({ text, found } = withGridPrefix);
      servedName = `grid-${resolvedName}`;
    }
  }

  let fuzzy = false;

  if (!found) {
    const query = sanitizeSearchDocsQuery(resolvedName.replace(/-/g, ' '));
    if (query) {
      const results = await docsProvider.searchDocs(framework, query);
      // Accept the highest-ranked hit that shares a token with the request.
      // Checking the top few (not just #1) recovers cases where the best hit
      // ranks second, without accepting an unrelated doc.
      const candidates = parseDocNames(results)
        .slice(0, 5)
        .filter((name) => sharesToken(resolvedName, name));
      for (const candidate of candidates) {
        const hit = await docsProvider.getDoc(framework, candidate);
        if (hit.found) {
          ({ text, found } = hit);
          servedName = candidate;
          fuzzy = true;
          break;
        }
      }
    }
  }

  return { text, found, servedName, fuzzy };
}

/**
 * Notice prepended to a response whose doc came from the search fallback, so the
 * caller can tell "here is the doc you asked for" apart from "here is the
 * nearest thing I found". Without it a request for tree-grid-editing that lands
 * on treegrid-batch-editing reads as an exact hit.
 */
export function formatSubstitutionNotice(requestedName: string, servedName: string): string {
  return (
    `Note: no doc named \`${requestedName}\` exists — showing the closest match, \`${servedName}\`. ` +
    `The content below may cover a different feature than requested; use list_components or search_docs to see other options.`
  );
}

export interface CodeBlock {
  lang: string;
  code: string;
}

export interface CodeExample {
  heading: string;
  blocks: CodeBlock[];
}

// Fence-language aliases → canonical name, so a language filter of "typescript"
// also matches ```ts, "csharp" matches ```cs, "shell" matches ```cmd, etc.
const LANG_ALIASES: Record<string, string> = {
  ts: 'typescript',
  typescript: 'typescript',
  js: 'javascript',
  javascript: 'javascript',
  cs: 'csharp',
  'c#': 'csharp',
  csharp: 'csharp',
  razor: 'razor',
  cshtml: 'razor',
  html: 'html',
  htm: 'html',
  scss: 'scss',
  sass: 'scss',
  sh: 'shell',
  bash: 'shell',
  shell: 'shell',
  cmd: 'shell',
  powershell: 'shell',
};

/** Normalise a fence info-string to its canonical language for filter matching. */
export function canonicalLang(lang: string): string {
  const l = lang.trim().toLowerCase();
  return LANG_ALIASES[l] ?? l;
}

/**
 * Extract fenced code blocks from doc markdown, discarding all prose.
 *
 * Consecutive fenced blocks separated only by blank lines are grouped into one
 * example — this is how the inject pipeline emits a single <code-view> sample
 * as back-to-back TS/HTML/SCSS blocks. Any heading or prose line between two
 * blocks starts a new example. Each example is labelled with the nearest
 * preceding markdown heading. An optional language filter keeps only blocks
 * whose fence info-string matches (e.g. "html", "typescript") — matching is
 * alias-aware, so "typescript" also matches ```ts (see canonicalLang).
 */
export function extractCodeExamples(
  content: string,
  opts?: { language?: string },
): CodeExample[] {
  const langFilter = opts?.language?.trim() ? canonicalLang(opts.language) : null;
  const lines = content.split(/\r?\n/);
  const examples: CodeExample[] = [];

  let currentHeading = '';
  let currentExample: CodeExample | null = null;
  // Whether a heading or prose line has appeared since the last collected block.
  // When true, the next block starts a fresh example instead of grouping.
  let brokeGroup = true;

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    const headingMatch = line.match(/^#{1,6}\s+(.*)$/);
    if (headingMatch) {
      currentHeading = headingMatch[1].trim();
      brokeGroup = true;
      currentExample = null;
      i++;
      continue;
    }

    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})(.*)$/);
    if (fenceMatch) {
      const fence = fenceMatch[1];
      const fenceChar = fence[0];
      const lang = fenceMatch[2].trim().split(/\s+/)[0].toLowerCase();

      const codeLines: string[] = [];
      i++;
      while (i < lines.length) {
        const close = lines[i].match(/^\s*(`{3,}|~{3,})\s*$/);
        if (close && close[1][0] === fenceChar && close[1].length >= fence.length) {
          i++;
          break;
        }
        codeLines.push(lines[i]);
        i++;
      }

      const code = codeLines.join('\n').replace(/\n+$/, '');
      const keep = code.trim().length > 0 && (!langFilter || canonicalLang(lang) === langFilter);
      if (keep) {
        const block: CodeBlock = { lang, code };
        if (currentExample && !brokeGroup) {
          currentExample.blocks.push(block);
        } else {
          currentExample = { heading: currentHeading, blocks: [block] };
          examples.push(currentExample);
        }
      }
      brokeGroup = false;
      continue;
    }

    if (line.trim() !== '') {
      brokeGroup = true;
    }
    i++;
  }

  return examples;
}

/**
 * Merge adjacent examples that share a heading. A single doc section is often
 * split into several <code-view> demos by intervening prose, which surfaces as
 * consecutive examples under the same heading; merging their blocks collapses
 * that back into one section instead of repeating the heading.
 */
export function mergeExamplesByHeading(examples: CodeExample[]): CodeExample[] {
  const merged: CodeExample[] = [];
  for (const ex of examples) {
    const last = merged[merged.length - 1];
    if (last && ex.heading && last.heading === ex.heading) {
      last.blocks.push(...ex.blocks);
    } else {
      merged.push({ heading: ex.heading, blocks: [...ex.blocks] });
    }
  }
  return merged;
}

/** Render extracted examples as a code-only markdown response. */
export function formatCodeExamples(
  examples: CodeExample[],
  meta: { framework: string; docName: string; language?: string },
): string {
  const merged = mergeExamplesByHeading(examples);

  // Count headings so any that still repeat (non-adjacent sections with the same
  // title) can be numbered — "Setup (1)", "Setup (2)" — instead of duplicated.
  const counts = new Map<string, number>();
  for (const ex of merged) {
    if (ex.heading) counts.set(ex.heading, (counts.get(ex.heading) ?? 0) + 1);
  }
  const seen = new Map<string, number>();

  const langNote = meta.language ? ` (${meta.language} only)` : '';
  const header = `Code examples from \`${meta.docName}\` (${meta.framework})${langNote}:`;

  const sections = merged.map((ex, idx) => {
    let title = ex.heading || `Example ${idx + 1}`;
    if (ex.heading && (counts.get(ex.heading) ?? 0) > 1) {
      const n = (seen.get(ex.heading) ?? 0) + 1;
      seen.set(ex.heading, n);
      title = `${ex.heading} (${n})`;
    }
    const body = ex.blocks
      .map((b) => '```' + b.lang + '\n' + b.code + '\n```')
      .join('\n\n');
    return `## ${title}\n\n${body}`;
  });

  return `${header}\n\n${sections.join('\n\n')}`;
}

// Build the setup-guide response for the requested framework.
// For Blazor, combine the base .NET guide with any MCP-fetched docs
// that are available for the configured setup document names.
// For other frameworks, return the static setup markdown when present,
// otherwise fall back to a simple "not available" message.
export async function buildProjectSetupGuide(
  docsProvider: DocsProvider,
  framework?: string,
): Promise<string> {
  if (!framework) {
    return MISSING_FRAMEWORK_MESSAGE;
  }

  if (framework === 'blazor') {
    const docNames = SETUP_DOCS.blazor || [];
    const sections: string[] = [BLAZOR_DOTNET_GUIDE];

    for (const name of docNames) {
      const { text, found } = await docsProvider.getDoc(framework, name);
      if (found) {
        sections.push(text);
      }
    }

    return sections.join('\n\n---\n\n');
  }

  return (
    SETUP_MD[framework] ??
    `No setup guide available for framework: ${framework}`
  );
}