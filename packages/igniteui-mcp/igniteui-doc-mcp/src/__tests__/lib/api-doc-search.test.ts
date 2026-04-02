import { describe, expect, it } from 'vitest';
import { extractSection, searchApiDocs } from '../../lib/api-doc-search.js';
import type { DocEntry } from '../../lib/types/docs.types.js';

function makeEntry(overrides: Partial<DocEntry> = {}): DocEntry {
  return {
    filepath: '/fake/IgxGrid.md',
    title: 'IgxGridComponent',
    component: 'IgxGridComponent',
    type: 'class',
    keywords: [],
    summary: '',
    platform: 'angular',
    content: '',
    ...overrides,
  };
}

describe('searchApiDocs', () => {
  it('returns empty array for blank query', () => {
    expect(searchApiDocs([makeEntry({ content: 'grid data' })], '')).toEqual([]);
  });

  it('returns empty array for whitespace-only query', () => {
    expect(searchApiDocs([makeEntry({ content: 'grid data' })], '   ')).toEqual([]);
  });

  it('returns empty array when docs list is empty', () => {
    expect(searchApiDocs([], 'grid')).toEqual([]);
  });

  it('matches against component name', () => {
    const hits = searchApiDocs([makeEntry({ component: 'IgxGrid' })], 'IgxGrid');
    expect(hits).toHaveLength(1);
    expect(hits[0].entry.component).toBe('IgxGrid');
  });

  it('matches against keywords', () => {
    const hits = searchApiDocs([makeEntry({ keywords: ['selection', 'virtual'] })], 'selection');
    expect(hits).toHaveLength(1);
  });

  it('matches against type', () => {
    const hits = searchApiDocs([makeEntry({ type: 'directive' })], 'directive');
    expect(hits).toHaveLength(1);
  });

  it('matches against content', () => {
    const hits = searchApiDocs([makeEntry({ content: 'row virtualization scrolling' })], 'virtualization');
    expect(hits).toHaveLength(1);
  });

  it('is case-insensitive', () => {
    const hits = searchApiDocs([makeEntry({ component: 'IgxGridComponent' })], 'igxgridcomponent');
    expect(hits).toHaveLength(1);
  });

  it('excludes entries with no term matches', () => {
    const docs = [
      makeEntry({ component: 'IgxGrid', content: 'grid' }),
      makeEntry({ component: 'IgxCombo', content: 'combo' }),
    ];
    expect(searchApiDocs(docs, 'grid')).toHaveLength(1);
  });

  it('ranks entries by match count descending', () => {
    const low = makeEntry({ component: 'IgxGrid', content: 'grid selection' });
    const high = makeEntry({ component: 'IgxCombo', content: 'grid selection combo', keywords: ['grid'] });
    const hits = searchApiDocs([low, high], 'grid selection combo', 10);
    expect(hits[0].entry.component).toBe('IgxCombo');
  });

  it('respects the limit parameter', () => {
    const docs = Array.from({ length: 20 }, (_, i) =>
      makeEntry({ component: `Igx${i}`, content: 'grid' })
    );
    expect(searchApiDocs(docs, 'grid', 5)).toHaveLength(5);
  });

  it('includes content excerpt when match is in content', () => {
    const hits = searchApiDocs([makeEntry({ content: 'row selection feature' })], 'selection');
    expect(hits[0].excerpt).toContain('selection');
  });

  it('uses summary as excerpt for non-content matches', () => {
    const hits = searchApiDocs(
      [makeEntry({ keywords: ['grid'], summary: 'A powerful grid.' })],
      'grid'
    );
    expect(hits[0].excerpt).toBe('A powerful grid.');
  });

  it('adds ellipsis when excerpt is taken from middle of content', () => {
    const padding = 'x'.repeat(200);
    const hits = searchApiDocs(
      [makeEntry({ content: `${padding} selection ${padding}` })],
      'selection'
    );
    expect(hits[0].excerpt).toMatch(/^\.\.\./);
    expect(hits[0].excerpt).toMatch(/\.\.\.$/);
  });

  it('handles query with regex special characters safely', () => {
    const entry = makeEntry({ content: 'value (test)' });
    // Should not throw due to unescaped regex chars in query
    expect(() => searchApiDocs([entry], '(test)')).not.toThrow();
  });

  it('returns match count reflecting number of distinct terms matched', () => {
    const entry = makeEntry({
      component: 'IgxGrid',
      content: 'grid selection filtering',
      keywords: ['grid'],
    });
    const hits = searchApiDocs([entry], 'grid selection filtering');
    expect(hits[0].matches).toBe(3);
  });

  it('uses default limit of 10', () => {
    const docs = Array.from({ length: 20 }, (_, i) =>
      makeEntry({ component: `Igx${i}`, content: 'grid' })
    );
    expect(searchApiDocs(docs, 'grid')).toHaveLength(10);
  });
});

describe('extractSection', () => {
  const md = [
    '# IgxGridComponent',
    '',
    '## Properties',
    'rowSelection: string',
    '',
    '## Methods',
    'selectAllRows(): void',
    '',
    '## Events',
    'onRowSelect',
  ].join('\n');

  it('extracts Properties section and stops before the next heading', () => {
    const result = extractSection(md, 'properties');
    expect(result).toContain('## Properties');
    expect(result).toContain('rowSelection');
    expect(result).not.toContain('## Methods');
  });

  it('recognizes Accessors as an alias for properties', () => {
    const withAccessors = '# Foo\n\n## Accessors\nget value(): string\n\n## Methods\nfoo()';
    const result = extractSection(withAccessors, 'properties');
    expect(result).toContain('## Accessors');
    expect(result).not.toContain('## Methods');
  });

  it('extracts Methods section', () => {
    const result = extractSection(md, 'methods');
    expect(result).toContain('## Methods');
    expect(result).toContain('selectAllRows');
    expect(result).not.toContain('## Events');
  });

  it('recognizes Functions as an alias for methods', () => {
    const withFunctions = '# Foo\n\n## Functions\nrender(): void';
    expect(extractSection(withFunctions, 'methods')).toContain('## Functions');
  });

  it('extracts Events section through to end of file', () => {
    const result = extractSection(md, 'events');
    expect(result).toContain('## Events');
    expect(result).toContain('onRowSelect');
  });

  it('recognizes Outputs as an alias for events', () => {
    const withOutputs = '# Foo\n\n## Outputs\nonSelect: EventEmitter';
    expect(extractSection(withOutputs, 'events')).toContain('## Outputs');
  });

  it('returns null when the requested heading is absent', () => {
    expect(extractSection('# Foo\n\nsome text', 'properties')).toBeNull();
  });

  it('returns null for an unknown section name', () => {
    expect(extractSection(md, 'slots')).toBeNull();
  });

  it('returns null for empty markdown', () => {
    expect(extractSection('', 'properties')).toBeNull();
  });
});
