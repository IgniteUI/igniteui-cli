import { describe, expect, it } from 'vitest';
import {
  applyCompactGridPrefix,
  applyDocAlias,
  formatSubstitutionNotice,
  normalizeDocName,
  parseDocNames,
  resolveDoc,
  sanitizeSearchDocsQuery,
} from '../../tools/doc-tools.js';
import type { DocsProvider } from '../../providers/DocsProvider.js';

describe('sanitizeSearchDocsQuery', () => {
  it('quotes plain terms with AND (implicit in FTS4)', () => {
    expect(sanitizeSearchDocsQuery('grid selection')).toBe('"grid" "selection"');
  });

  it('quotes a single term', () => {
    expect(sanitizeSearchDocsQuery('grid')).toBe('"grid"');
  });

  it('preserves trailing * for prefix queries without quoting', () => {
    expect(sanitizeSearchDocsQuery('grid*')).toBe('grid*');
  });

  it('handles mix of prefix and plain terms', () => {
    expect(sanitizeSearchDocsQuery('grid* selection')).toBe('grid* "selection"');
  });

  it('strips double quotes (FTS4 phrase delimiter)', () => {
    expect(sanitizeSearchDocsQuery('"grid"')).toBe('"grid"');
  });

  it('strips parentheses (FTS4 grouping operators)', () => {
    expect(sanitizeSearchDocsQuery('(grid OR combo)')).toBe('"grid" "OR" "combo"');
  });

  it('strips colons (FTS4 column filters)', () => {
    expect(sanitizeSearchDocsQuery('title:grid')).toBe('"title" "grid"');
  });

  it('strips @ characters (FTS4 internal)', () => {
    expect(sanitizeSearchDocsQuery('@grid')).toBe('"grid"');
  });

  it('strips curly braces and brackets', () => {
    expect(sanitizeSearchDocsQuery('{grid} [combo]')).toBe('"grid" "combo"');
  });

  it('preserves hyphens (porter tokenizer handles them)', () => {
    expect(sanitizeSearchDocsQuery('grid-editing')).toBe('"grid-editing"');
  });

  it('drops bare asterisks (would cause FTS4 syntax error)', () => {
    expect(sanitizeSearchDocsQuery('*')).toBe(null);
  });

  it('drops multiple asterisks', () => {
    expect(sanitizeSearchDocsQuery('**')).toBe(null);
  });

  it('keeps prefix term but drops bare asterisk', () => {
    expect(sanitizeSearchDocsQuery('grid* *')).toBe('grid*');
  });

  it('returns null for empty input', () => {
    expect(sanitizeSearchDocsQuery('')).toBe(null);
  });

  it('returns null for whitespace-only input', () => {
    expect(sanitizeSearchDocsQuery('   ')).toBe(null);
  });

  it('returns null when all characters are stripped', () => {
    expect(sanitizeSearchDocsQuery('(){}[]"":@')).toBe(null);
  });

  it('collapses multiple spaces', () => {
    expect(sanitizeSearchDocsQuery('grid   selection')).toBe('"grid" "selection"');
  });

  it('handles realistic user query: column pinning', () => {
    expect(sanitizeSearchDocsQuery('column pinning')).toBe('"column" "pinning"');
  });

  it('handles realistic user query: tree* prefix search', () => {
    expect(sanitizeSearchDocsQuery('tree*')).toBe('tree*');
  });

  it('handles realistic user query with special chars injected', () => {
    expect(sanitizeSearchDocsQuery('grid" OR "1=1')).toBe('"grid" "OR" "1=1"');
  });

  it('strips natural-language stopwords (how do I ...)', () => {
    expect(sanitizeSearchDocsQuery('how do I enable row editing')).toBe(
      '"enable" "row" "editing"',
    );
  });

  it('strips a leading article', () => {
    expect(sanitizeSearchDocsQuery('the grid selection')).toBe('"grid" "selection"');
  });

  it('keeps and/or/but as ordinary terms (not stopwords)', () => {
    expect(sanitizeSearchDocsQuery('drag and drop')).toBe('"drag" "and" "drop"');
  });

  it('falls back to full terms when every term is a stopword', () => {
    expect(sanitizeSearchDocsQuery('how do I')).toBe('"how" "do" "I"');
  });

  it('does not strip meaningful component words that resemble nothing in the list', () => {
    expect(sanitizeSearchDocsQuery('column pinning')).toBe('"column" "pinning"');
  });
});

describe('normalizeDocName', () => {
  it('returns a plain kebab-case name unchanged', () => {
    expect(normalizeDocName('grid-editing')).toBe('grid-editing');
  });

  it('lowercases a plain name', () => {
    expect(normalizeDocName('Carousel')).toBe('carousel');
  });

  it('strips Angular Igx prefix', () => {
    expect(normalizeDocName('IgxGrid')).toBe('grid');
  });

  it('strips React Igr prefix', () => {
    expect(normalizeDocName('IgrCombo')).toBe('combo');
  });

  it('strips Web Components Igc prefix', () => {
    expect(normalizeDocName('IgcAccordion')).toBe('accordion');
  });

  it('strips Blazor Igb prefix', () => {
    expect(normalizeDocName('IgbPivotGrid')).toBe('pivot-grid');
  });

  it('strips trailing Component suffix', () => {
    expect(normalizeDocName('IgxGridComponent')).toBe('grid');
  });

  it('converts PascalCase to kebab-case', () => {
    expect(normalizeDocName('HierarchicalGrid')).toBe('hierarchical-grid');
  });

  it('converts PascalCase with prefix to kebab-case', () => {
    expect(normalizeDocName('IgxHierarchicalGrid')).toBe('hierarchical-grid');
  });

  it('handles camelCase input', () => {
    expect(normalizeDocName('pivotGrid')).toBe('pivot-grid');
  });

  it('falls back to lowercased input when normalization yields empty string', () => {
    expect(normalizeDocName('Igx')).toBe('igx');
  });

  it('kebab-cases a spaced multi-word name', () => {
    expect(normalizeDocName('date picker')).toBe('date-picker');
  });

  it('kebab-cases a three-word name', () => {
    expect(normalizeDocName('navigation drawer panel')).toBe('navigation-drawer-panel');
  });

  it('collapses multiple spaces and trims', () => {
    expect(normalizeDocName('  tree   grid  ')).toBe('tree-grid');
  });

  it('converts underscores to hyphens', () => {
    expect(normalizeDocName('color_editor')).toBe('color-editor');
  });

  it('leaves a class name equivalent to its spaced form', () => {
    expect(normalizeDocName('IgxDatePicker')).toBe(normalizeDocName('date picker'));
  });
});

describe('applyDocAlias', () => {
  it('returns the input unchanged when no alias exists', () => {
    expect(applyDocAlias('angular', 'accordion')).toBe('accordion');
  });

  it('resolves react combo to overview', () => {
    expect(applyDocAlias('react', 'combo')).toBe('overview');
  });

  it('resolves react combo-box to overview', () => {
    expect(applyDocAlias('react', 'combo-box')).toBe('overview');
  });

  it('resolves react grid to data-grid', () => {
    expect(applyDocAlias('react', 'grid')).toBe('data-grid');
  });

  it('resolves react hierarchical-grid to hierarchical-grid-overview', () => {
    expect(applyDocAlias('react', 'hierarchical-grid')).toBe('hierarchical-grid-overview');
  });

  it('resolves angular combo-box to combo', () => {
    expect(applyDocAlias('angular', 'combo-box')).toBe('combo');
  });

  it('resolves angular hierarchical-grid correctly', () => {
    expect(applyDocAlias('angular', 'hierarchical-grid')).toBe('hierarchicalgrid-hierarchical-grid');
  });

  it('resolves angular grid to grid-grid', () => {
    expect(applyDocAlias('angular', 'grid')).toBe('grid-grid');
  });

  it('resolves webcomponents combo to overview', () => {
    expect(applyDocAlias('webcomponents', 'combo')).toBe('overview');
  });

  it('resolves webcomponents grid to data-grid', () => {
    expect(applyDocAlias('webcomponents', 'grid')).toBe('data-grid');
  });

  it('resolves blazor radio-group to radio', () => {
    expect(applyDocAlias('blazor', 'radio-group')).toBe('radio');
  });

  it('resolves blazor range-slider to slider', () => {
    expect(applyDocAlias('blazor', 'range-slider')).toBe('slider');
  });

  it('resolves blazor grid to data-grid', () => {
    expect(applyDocAlias('blazor', 'grid')).toBe('data-grid');
  });
  it('returns input unchanged for unknown framework', () => {
    expect(applyDocAlias('unknown-fw', 'combo')).toBe('combo');
  });

  it('IgxGridComponent normalizes then aliases correctly for angular', () => {
    const normalized = normalizeDocName('IgxGridComponent');
    expect(applyDocAlias('angular', normalized)).toBe('grid-grid');
  });

  it('IgrCombo normalizes then aliases correctly for react', () => {
    const normalized = normalizeDocName('IgrCombo');
    expect(applyDocAlias('react', normalized)).toBe('overview');
  });
});

describe('resolveDoc', () => {
  // Stub provider backed by a fixed set of known doc filenames. searchDocs
  // returns the LocalDocsProvider-style markdown (all known docs, in insertion
  // order = rank order) so the fallback parser, guard, and iteration are exercised.
  function makeProvider(known: Record<string, string>): DocsProvider {
    return {
      async listComponents() {
        return '';
      },
      async getDoc(_framework: string, name: string) {
        const key = name.replace(/\.md$/, '');
        return key in known
          ? { text: known[key], found: true }
          : { text: 'not found', found: false };
      },
      async searchDocs(_framework: string, _query: string) {
        const keys = Object.keys(known);
        if (keys.length === 0) return 'No results';
        return keys.map((k) => `- **X** (\`${k}\`)`).join('\n');
      },
    };
  }

  it('resolves a direct name', async () => {
    const p = makeProvider({ accordion: 'ACC' });
    const r = await resolveDoc(p, 'angular', 'accordion');
    expect(r).toMatchObject({ found: true, servedName: 'accordion', text: 'ACC' });
  });

  it('applies the grid- prefix fallback for bare feature names', async () => {
    const p = makeProvider({ 'grid-sorting': 'SORT' });
    const r = await resolveDoc(p, 'angular', 'sorting');
    expect(r).toMatchObject({ found: true, servedName: 'grid-sorting' });
  });

  it('falls back to search when the name does not resolve mechanically', async () => {
    const p = makeProvider({ navdrawer: 'NAV' });
    const r = await resolveDoc(p, 'angular', 'navigation drawer');
    expect(r.found).toBe(true);
    expect(r.servedName).toBe('navdrawer');
    expect(r.text).toBe('NAV');
  });


  it('resolves through the search fallback when the provider returns remote-format results', async () => {
    // RemoteDocsProvider proxies DocsController.cs, which renders each hit as
    // `**doc-name** [Component]` followed by an excerpt line — no backticks.
    const p: DocsProvider = {
      async listComponents() {
        return '';
      },
      async getDoc(_framework: string, name: string) {
        return name === 'navdrawer'
          ? { text: 'NAV', found: true }
          : { text: 'not found', found: false };
      },
      async searchDocs() {
        return [
          '**navdrawer** [IgxNavigationDrawer]',
          'The **Navigation Drawer** slides in from the side...',
          '',
          '**grid-sorting** [IgxGrid]',
          'Sort rows by column.',
        ].join('\n');
      },
    };
    const r = await resolveDoc(p, 'angular', 'navigation drawer');
    expect(r).toMatchObject({ found: true, servedName: 'navdrawer', text: 'NAV', fuzzy: true });
  });
  it('returns not found when search also yields nothing', async () => {
    const p = makeProvider({}); // searchDocs returns "No results"
    const r = await resolveDoc(p, 'angular', 'totally unknown widget');
    expect(r.found).toBe(false);
  });

  it('rejects an unrelated search hit that shares no token with the request', async () => {
    const p = makeProvider({ 'grid-paste-excel': 'X' });
    const r = await resolveDoc(p, 'angular', 'textarea');
    expect(r.found).toBe(false); // guard rejects; better an honest miss than a wrong doc
  });

  it('skips an unrelated top hit and accepts a lower-ranked one that shares a token', async () => {
    // Top hit unrelated; second hit shares the "drawer" token.
    const p = makeProvider({ 'grid-paste-excel': 'X', navdrawer: 'NAV' });
    const r = await resolveDoc(p, 'angular', 'navigation drawer');
    expect(r).toMatchObject({ found: true, servedName: 'navdrawer', text: 'NAV' });
  });

  it('accepts a feature doc that shares the component token', async () => {
    const p = makeProvider({ 'treegrid-export-excel': 'T' });
    const r = await resolveDoc(p, 'angular', 'treegrid');
    expect(r).toMatchObject({ found: true, servedName: 'treegrid-export-excel' });
  });

  it('rewrites an angular tree-grid- topic name to the compact doc key', async () => {
    const p = makeProvider({ 'treegrid-filtering': 'TF' });
    const r = await resolveDoc(p, 'angular', 'tree-grid-filtering');
    expect(r).toMatchObject({ found: true, servedName: 'treegrid-filtering', fuzzy: false });
  });

  it('rewrites angular hierarchical-grid- and pivot-grid- topic names', async () => {
    const p = makeProvider({ 'hierarchicalgrid-paging': 'HP', 'pivotgrid-sorting': 'PS' });
    await expect(resolveDoc(p, 'angular', 'hierarchical-grid-paging')).resolves.toMatchObject({
      found: true,
      servedName: 'hierarchicalgrid-paging',
    });
    await expect(resolveDoc(p, 'angular', 'pivot-grid-sorting')).resolves.toMatchObject({
      found: true,
      servedName: 'pivotgrid-sorting',
    });
  });

  it('prefers the exact compact doc over a related search hit', async () => {
    // Regression: "tree-grid-editing" used to fall through to search and serve
    // treegrid-batch-editing, which covers a different feature.
    const p = makeProvider({ 'treegrid-batch-editing': 'BATCH', 'treegrid-editing': 'EDIT' });
    const r = await resolveDoc(p, 'angular', 'tree-grid-editing');
    expect(r).toMatchObject({ found: true, servedName: 'treegrid-editing', text: 'EDIT', fuzzy: false });
  });

  it('does not rewrite grid prefixes for non-angular frameworks', async () => {
    // React keys these docs with the hyphenated form; a rewrite would break them.
    const p = makeProvider({ 'tree-grid-filtering': 'TF' });
    const r = await resolveDoc(p, 'react', 'tree-grid-filtering');
    expect(r).toMatchObject({ found: true, servedName: 'tree-grid-filtering' });
  });

  it('marks a search-fallback resolution as fuzzy', async () => {
    const p = makeProvider({ navdrawer: 'NAV' });
    const r = await resolveDoc(p, 'angular', 'navigation drawer');
    expect(r.fuzzy).toBe(true);
  });

  it('does not mark deterministic resolutions as fuzzy', async () => {
    const direct = await resolveDoc(makeProvider({ accordion: 'ACC' }), 'angular', 'accordion');
    expect(direct.fuzzy).toBe(false);

    const aliased = await resolveDoc(makeProvider({ 'grid-grid': 'G' }), 'angular', 'IgxGrid');
    expect(aliased).toMatchObject({ found: true, fuzzy: false });

    const gridPrefixed = await resolveDoc(makeProvider({ 'grid-sorting': 'S' }), 'angular', 'sorting');
    expect(gridPrefixed).toMatchObject({ found: true, fuzzy: false });
  });

  it('is not fuzzy when nothing was found at all', async () => {
    const r = await resolveDoc(makeProvider({}), 'angular', 'totally unknown widget');
    expect(r).toMatchObject({ found: false, fuzzy: false });
  });
});

describe('applyCompactGridPrefix', () => {
  it('rewrites the three angular grid-variant prefixes', () => {
    expect(applyCompactGridPrefix('angular', 'tree-grid-filtering')).toBe('treegrid-filtering');
    expect(applyCompactGridPrefix('angular', 'hierarchical-grid-paging')).toBe('hierarchicalgrid-paging');
    expect(applyCompactGridPrefix('angular', 'pivot-grid-sorting')).toBe('pivotgrid-sorting');
  });

  it('returns null when no prefix matches', () => {
    expect(applyCompactGridPrefix('angular', 'grid-sorting')).toBeNull();
    expect(applyCompactGridPrefix('angular', 'accordion')).toBeNull();
  });

  it('returns null for the bare component name (no topic suffix)', () => {
    expect(applyCompactGridPrefix('angular', 'tree-grid')).toBeNull();
  });

  it('returns null for non-angular frameworks', () => {
    expect(applyCompactGridPrefix('react', 'tree-grid-filtering')).toBeNull();
    expect(applyCompactGridPrefix('blazor', 'hierarchical-grid-paging')).toBeNull();
    expect(applyCompactGridPrefix('webcomponents', 'pivot-grid-sorting')).toBeNull();
  });

  it('preserves multi-segment topics', () => {
    expect(applyCompactGridPrefix('angular', 'tree-grid-column-moving')).toBe('treegrid-column-moving');
  });
});

describe('formatSubstitutionNotice', () => {
  it('names both the requested and the served doc', () => {
    const notice = formatSubstitutionNotice('tree-grid-editing', 'treegrid-batch-editing');
    expect(notice).toContain('`tree-grid-editing`');
    expect(notice).toContain('`treegrid-batch-editing`');
  });

  it('points at the discovery tools', () => {
    const notice = formatSubstitutionNotice('x', 'y');
    expect(notice).toContain('list_components');
    expect(notice).toContain('search_docs');
  });
});

describe('parseDocNames', () => {
  it('parses local-format results from the backtick token, not the bold toc title', () => {
    const out = [
      'Found 2 results for "sort" in **angular**:',
      '',
      '- **Grid Sorting** (`grid-sorting`)',
      '  Sort rows by one or more columns.',
      '- **Tree Grid Sorting** (`treegrid-sorting`)',
    ].join('\n');
    expect(parseDocNames(out)).toEqual(['grid-sorting', 'treegrid-sorting']);
  });

  it('parses remote-format results from the line-leading bold doc name', () => {
    const out = [
      '**grid-sorting** [IgxGrid]',
      'Sort rows by one or more columns.',
      '',
      '**treegrid-sorting**',
      'Tree grid sorting excerpt.',
    ].join('\n');
    expect(parseDocNames(out)).toEqual(['grid-sorting', 'treegrid-sorting']);
  });

  it('ignores bold prose inside a remote excerpt', () => {
    const out = ['**grid-editing** [IgxGrid]', '**Note:** editing requires primaryKey.'].join('\n');
    expect(parseDocNames(out)).toEqual(['grid-editing']);
  });

  it('returns an empty list for a no-results message', () => {
    expect(parseDocNames('No results found for "xyz".')).toEqual([]);
    expect(parseDocNames('No results')).toEqual([]);
  });
});
