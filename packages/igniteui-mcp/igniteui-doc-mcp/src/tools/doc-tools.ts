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
export function sanitizeSearchDocsQuery(queryText: string): string | null {
  const sanitized = queryText
    .replace(/["(){}[\]:@]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((term) => {
      // Terms ending with * are prefix queries — don't quote them
      // because FTS4 treats "grid*" as a literal match for the
      // asterisk character, while unquoted grid* does prefix expansion.
      // Drop terms that are only asterisks (e.g. *, **) — they have
      // no actual prefix and would cause an FTS4 syntax error.
      if (term.endsWith('*')) {
        return /[^*]/.test(term) ? term : null;
      }

      return `"${term}"`;
    })
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
  let normalized = name.replace(/^Ig[xrcb]/i, '');
  normalized = normalized.replace(/Component$/i, '');
  normalized = normalized.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
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