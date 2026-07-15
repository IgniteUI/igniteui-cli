import { describe, expect, it } from 'vitest';
import { extractMember, extractSection, searchApiDocs } from '../../lib/api-doc-search.js';
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

  describe('inference fallback (flat bullet list — real llms-full.txt shape)', () => {
    const flat = [
      '### [IgxGridComponent](https://example.com)',
      'Grid component.',
      '',
      '- **data**: `any[]` — Gets/Sets the data.',
      '- **groupsExpanded**: `boolean` — Gets/Sets whether groups are expanded.',
      '- **groupingDone**: `EventEmitter<IGroupingDoneEventArgs>` — Emitted when grouping is performed.',
      '- **groupingExpressionsChange**: `EventEmitter<IGroupingExpression[]>` — Emitted when grouping changes.',
      '- **clearGrouping**(name?: string): void — Clears grouping.',
      '- **groupBy**(expr: IGroupingExpression): void — Groups by a column.',
      '- static readonly **tagName**: `"igx-grid"` — The tag name.',
    ].join('\n');

    it('returns only properties', () => {
      const result = extractSection(flat, 'properties');
      expect(result).not.toBeNull();
      expect(result).toContain('**data**');
      expect(result).toContain('**groupsExpanded**');
      expect(result).toContain('**tagName**');
      expect(result).not.toContain('**groupingDone**');
      expect(result).not.toContain('**clearGrouping**');
    });

    it('returns only methods', () => {
      const result = extractSection(flat, 'methods');
      expect(result).not.toBeNull();
      expect(result).toContain('**clearGrouping**');
      expect(result).toContain('**groupBy**');
      expect(result).not.toContain('**data**');
      expect(result).not.toContain('**groupingDone**');
    });

    it('returns only events', () => {
      const result = extractSection(flat, 'events');
      expect(result).not.toBeNull();
      expect(result).toContain('**groupingDone**');
      expect(result).toContain('**groupingExpressionsChange**');
      expect(result).not.toContain('**data**');
      expect(result).not.toContain('**clearGrouping**');
    });

    it('classifies Blazor EventCallback bullets as events', () => {
      const blazor = [
        '### [IgbGrid](https://example.com)',
        '- **Data**: `object`',
        '- **GroupingDone**: `EventCallback<IgbGroupingDoneEventArgs>`',
        '- **ClearGrouping**(name: string): void',
      ].join('\n');

      const events = extractSection(blazor, 'events');
      expect(events).not.toBeNull();
      expect(events).toContain('**GroupingDone**');
      expect(events).not.toContain('**Data**');
      expect(events).not.toContain('**ClearGrouping**');

      const props = extractSection(blazor, 'properties');
      expect(props).toContain('**Data**');
      expect(props).not.toContain('**GroupingDone**');
    });

    it('classifies Angular OutputEmitterRef bullets as events', () => {
      const angular = [
        '### [IgxChatComponent](https://example.com)',
        '- readonly **attachmentClick**: `OutputEmitterRef<IgcChatMessageAttachment>` — Emitted when an attachment is clicked',
        '- readonly **draftMessage**: `InputSignal<any>` — Draft message with text and optional attachments',
        '- readonly **messageCreated**: `OutputEmitterRef<IgcChatMessage>` — Emitted when a new message is created',
        '- **ngOnInit**(): void',
      ].join('\n');

      const events = extractSection(angular, 'events');
      expect(events).not.toBeNull();
      expect(events).toContain('**attachmentClick**');
      expect(events).toContain('**messageCreated**');
      expect(events).not.toContain('**draftMessage**');
      expect(events).not.toContain('**ngOnInit**');

      const props = extractSection(angular, 'properties');
      expect(props).toContain('**draftMessage**');
      expect(props).not.toContain('**attachmentClick**');
    });

    it('returns null when no bullets match the requested kind', () => {
      const eventsOnly = '- **change**: `EventEmitter<void>` — Fires on change.';
      expect(extractSection(eventsOnly, 'methods')).toBeNull();
      expect(extractSection(eventsOnly, 'properties')).toBeNull();
    });

    it('prefers the heading-based path when both shapes are present', () => {
      const mixed = [
        '## Properties',
        '- **viaHeading**: `string` — Under explicit heading.',
        '## Methods',
        '- **doIt**(): void — Under explicit heading.',
      ].join('\n');
      const props = extractSection(mixed, 'properties');
      expect(props).toContain('## Properties');
      expect(props).toContain('**viaHeading**');
      // Heading walk wins — methods bullets do not bleed into the properties response.
      expect(props).not.toContain('**doIt**');
    });
  });
});

describe('extractMember', () => {
  const md = [
    '## Properties',
    '',
    '- **checked** `boolean` — Whether the checkbox is checked.',
    '- **disabled** `boolean` — Whether disabled.',
    '',
    '## Methods',
    '',
    '- **click()** — Toggles the checkbox.',
    '- **setCustomValidity(message: string): void** — Sets a validation message.',
    '',
    '## Events',
    '',
    '- **igcChange** — Fired on state change.',
    '',
  ].join('\n');

  it('finds a property and returns its section + line', () => {
    const hit = extractMember(md, 'checked');
    expect(hit).not.toBeNull();
    expect(hit!.section).toBe('property');
    expect(hit!.line).toContain('**checked**');
  });

  it('finds a method by its bare name (without parens)', () => {
    const hit = extractMember(md, 'click');
    expect(hit).not.toBeNull();
    expect(hit!.section).toBe('method');
    expect(hit!.line).toContain('**click()**');
  });

  it('finds a method with parameters in its signature', () => {
    const hit = extractMember(md, 'setCustomValidity');
    expect(hit).not.toBeNull();
    expect(hit!.section).toBe('method');
    expect(hit!.line).toContain('setCustomValidity');
  });

  it('finds an event', () => {
    const hit = extractMember(md, 'igcChange');
    expect(hit).not.toBeNull();
    expect(hit!.section).toBe('event');
  });

  it('matches case-insensitively when no exact case match exists', () => {
    const hit = extractMember(md, 'IGCCHANGE');
    expect(hit).not.toBeNull();
    expect(hit!.section).toBe('event');
  });

  it('returns null for an unknown member', () => {
    expect(extractMember(md, 'nonexistent')).toBeNull();
  });

  it('returns null for empty markdown', () => {
    expect(extractMember('', 'checked')).toBeNull();
  });

  it('matches a flat bullet list with no section headings (real llms-full.txt shape)', () => {
    const flat = [
      '### [IgxGridComponent](https://example.com)',
      'Grid component.',
      '',
      '- **data**: `any[]` — Gets/Sets the data.',
      '- **groupingDone**: `EventEmitter<IGroupingDoneEventArgs>` — Emitted when grouping.',
      '- **clearGrouping**(name?: string): void — Clears grouping.',
      '- static readonly **tagName**: `"igx-grid"` — The tag name.',
    ].join('\n');

    const prop = extractMember(flat, 'data');
    expect(prop).not.toBeNull();
    expect(prop!.section).toBe('property');

    const event = extractMember(flat, 'groupingDone');
    expect(event).not.toBeNull();
    expect(event!.section).toBe('event');

    const method = extractMember(flat, 'clearGrouping');
    expect(method).not.toBeNull();
    expect(method!.section).toBe('method');

    const staticReadonly = extractMember(flat, 'tagName');
    expect(staticReadonly).not.toBeNull();
    expect(staticReadonly!.section).toBe('property');
    expect(staticReadonly!.line).toContain('static readonly');
  });

  it('prefers exact case before falling back to case-insensitive', () => {
    const dual = [
      '## Properties',
      '- **Value** `string` — PascalCase variant.',
      '- **value** `string` — camelCase variant.',
    ].join('\n');
    const hit = extractMember(dual, 'value');
    expect(hit!.line).toContain('camelCase');
  });
});
