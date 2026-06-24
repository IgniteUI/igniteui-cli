import { describe, expect, it } from 'vitest';
import { applyDocAlias, normalizeDocName, sanitizeSearchDocsQuery } from '../../tools/doc-tools.js';

describe('sanitizeSearchDocsQuery', () => {
  it('quotes plain terms with OR', () => {
    expect(sanitizeSearchDocsQuery('grid selection')).toBe('"grid" OR "selection"');
  });

  it('quotes a single term', () => {
    expect(sanitizeSearchDocsQuery('grid')).toBe('"grid"');
  });

  it('preserves trailing * for prefix queries without quoting', () => {
    expect(sanitizeSearchDocsQuery('grid*')).toBe('grid*');
  });

  it('handles mix of prefix and plain terms', () => {
    expect(sanitizeSearchDocsQuery('grid* selection')).toBe('grid* OR "selection"');
  });

  it('strips double quotes (FTS4 phrase delimiter)', () => {
    expect(sanitizeSearchDocsQuery('"grid"')).toBe('"grid"');
  });

  it('strips parentheses (FTS4 grouping operators)', () => {
    expect(sanitizeSearchDocsQuery('(grid OR combo)')).toBe('"grid" OR "OR" OR "combo"');
  });

  it('strips colons (FTS4 column filters)', () => {
    expect(sanitizeSearchDocsQuery('title:grid')).toBe('"title" OR "grid"');
  });

  it('strips @ characters (FTS4 internal)', () => {
    expect(sanitizeSearchDocsQuery('@grid')).toBe('"grid"');
  });

  it('strips curly braces and brackets', () => {
    expect(sanitizeSearchDocsQuery('{grid} [combo]')).toBe('"grid" OR "combo"');
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
    expect(sanitizeSearchDocsQuery('grid   selection')).toBe('"grid" OR "selection"');
  });

  it('handles realistic user query: column pinning', () => {
    expect(sanitizeSearchDocsQuery('column pinning')).toBe('"column" OR "pinning"');
  });

  it('handles realistic user query: tree* prefix search', () => {
    expect(sanitizeSearchDocsQuery('tree*')).toBe('tree*');
  });

  it('handles realistic user query with special chars injected', () => {
    expect(sanitizeSearchDocsQuery('grid" OR "1=1')).toBe('"grid" OR "OR" OR "1=1"');
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

  it('resolves react grid to grid-grid', () => {
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
