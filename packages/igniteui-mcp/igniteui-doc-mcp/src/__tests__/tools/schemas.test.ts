import { describe, expect, it } from 'vitest';
import { getApiReferenceSchema, resolveImportSchema, searchApiSchema } from '../../tools/schemas.js';

describe('resolveImportSchema', () => {
  it('accepts a list of symbols with an optional platform', () => {
    expect(resolveImportSchema.parse({ symbols: ['IgxGridComponent'], platform: 'angular' })).toEqual({
      symbols: ['IgxGridComponent'],
      platform: 'angular',
    });
  });

  it('splits a comma or space separated string into symbols', () => {
    expect(resolveImportSchema.parse({ symbols: 'IgxGridComponent, IgxColumnComponent IgxComboComponent' }).symbols)
      .toEqual(['IgxGridComponent', 'IgxColumnComponent', 'IgxComboComponent']);
  });

  it('trims, drops blanks and de-duplicates', () => {
    expect(resolveImportSchema.parse({ symbols: [' IgrGrid ', '', 'IgrGrid'] }).symbols).toEqual(['IgrGrid']);
  });

  it('rejects an empty list', () => {
    expect(resolveImportSchema.safeParse({ symbols: [] }).success).toBe(false);
    expect(resolveImportSchema.safeParse({ symbols: '  ' }).success).toBe(false);
  });

  it('rejects more than 50 symbols', () => {
    const symbols = Array.from({ length: 51 }, (_, i) => `IgxThing${i}`);
    expect(resolveImportSchema.safeParse({ symbols }).success).toBe(false);
  });

  it('rejects an unknown platform', () => {
    expect(resolveImportSchema.safeParse({ symbols: ['X'], platform: 'vue' }).success).toBe(false);
  });

  it('strips `type` prefixes copied from type-only imports', () => {
    expect(resolveImportSchema.parse({ symbols: ['type IGridEditEventArgs', 'typeof IGX_GRID_DIRECTIVES'] }).symbols)
      .toEqual(['IGridEditEventArgs', 'IGX_GRID_DIRECTIVES']);
  });

  it('accepts an array serialized as a JSON string', () => {
    expect(resolveImportSchema.parse({ symbols: '["IGridEditEventArgs", "IPageEventArgs"]' }).symbols)
      .toEqual(['IGridEditEventArgs', 'IPageEventArgs']);
  });

  it('reduces a pasted import statement to its names, dropping aliases and the module', () => {
    const pasted = `import { type IRowDataEventArgs, IgxGridComponent as Grid } from 'igniteui-angular/grids/grid';`;
    expect(resolveImportSchema.parse({ symbols: [pasted] }).symbols).toEqual(['IRowDataEventArgs', 'IgxGridComponent']);
  });

  it('drops generic parameters, including ones with commas', () => {
    expect(resolveImportSchema.parse({ symbols: ['IgbCombo<T>', 'Map<string, Array<number>>'] }).symbols)
      .toEqual(['IgbCombo', 'Map']);
  });

  it('still rejects non-string entries', () => {
    expect(resolveImportSchema.safeParse({ symbols: [42] }).success).toBe(false);
  });
});

describe('getApiReferenceSchema', () => {
  it('accepts valid input with all fields', () => {
    expect(getApiReferenceSchema.safeParse({
      platform: 'angular',
      component: 'IgxGridComponent',
      section: 'properties',
    }).success).toBe(true);
  });

  it('defaults section to "all" when omitted', () => {
    const result = getApiReferenceSchema.parse({ platform: 'angular', component: 'IgxGrid' });
    expect(result.section).toBe('all');
  });

  it('trims whitespace from component name', () => {
    const result = getApiReferenceSchema.parse({ platform: 'angular', component: '  IgxGrid  ' });
    expect(result.component).toBe('IgxGrid');
  });

  it('rejects empty component name', () => {
    expect(getApiReferenceSchema.safeParse({ platform: 'angular', component: '' }).success).toBe(false);
  });

  it('rejects component name exceeding 128 characters', () => {
    expect(getApiReferenceSchema.safeParse({
      platform: 'angular',
      component: 'x'.repeat(129),
    }).success).toBe(false);
  });

  it('rejects unknown platform', () => {
    expect(getApiReferenceSchema.safeParse({ platform: 'vue', component: 'Component' }).success).toBe(false);
    expect(getApiReferenceSchema.safeParse({ platform: 'svelte', component: 'Component' }).success).toBe(false);
  });

  it('accepts all valid platforms', () => {
    for (const platform of ['angular', 'react', 'webcomponents', 'blazor'] as const) {
      expect(getApiReferenceSchema.safeParse({ platform, component: 'IgxGrid' }).success).toBe(true);
    }
  });

  it('accepts all valid section values', () => {
    for (const section of ['properties', 'methods', 'events', 'all'] as const) {
      expect(getApiReferenceSchema.safeParse({ platform: 'angular', component: 'IgxGrid', section }).success).toBe(true);
    }
  });

  it('rejects invalid section values', () => {
    expect(getApiReferenceSchema.safeParse({ platform: 'angular', component: 'IgxGrid', section: 'slots' }).success).toBe(false);
  });

  it('accepts an optional member name', () => {
    expect(getApiReferenceSchema.safeParse({
      platform: 'angular',
      component: 'IgxGridComponent',
      member: 'rowSelection',
    }).success).toBe(true);
  });

  it('leaves member undefined when omitted', () => {
    const result = getApiReferenceSchema.parse({ platform: 'angular', component: 'IgxGrid' });
    expect(result.member).toBeUndefined();
  });

  it('trims whitespace from member name', () => {
    const result = getApiReferenceSchema.parse({
      platform: 'angular',
      component: 'IgxGrid',
      member: '  checked  ',
    });
    expect(result.member).toBe('checked');
  });

  it('accepts an empty member name (treated as omitted by the handler)', () => {
    expect(getApiReferenceSchema.safeParse({
      platform: 'angular',
      component: 'IgxGrid',
      member: '',
    }).success).toBe(true);
  });

  it('accepts a whitespace-only member name and trims it to empty', () => {
    const result = getApiReferenceSchema.parse({
      platform: 'angular',
      component: 'IgxGrid',
      member: '   ',
    });
    expect(result.member).toBe('');
  });

  it('rejects member name exceeding 128 characters', () => {
    expect(getApiReferenceSchema.safeParse({
      platform: 'angular',
      component: 'IgxGrid',
      member: 'x'.repeat(129),
    }).success).toBe(false);
  });
});

describe('searchApiSchema', () => {
  it('accepts a query without a platform', () => {
    expect(searchApiSchema.safeParse({ query: 'grid selection' }).success).toBe(true);
  });

  it('accepts a query with a valid platform', () => {
    expect(searchApiSchema.safeParse({ query: 'grid', platform: 'react' }).success).toBe(true);
  });

  it('trims whitespace from query', () => {
    const result = searchApiSchema.parse({ query: '  grid  ' });
    expect(result.query).toBe('grid');
  });

  it('rejects empty query', () => {
    expect(searchApiSchema.safeParse({ query: '' }).success).toBe(false);
  });

  it('rejects query exceeding 256 characters', () => {
    expect(searchApiSchema.safeParse({ query: 'x'.repeat(257) }).success).toBe(false);
  });

  it('rejects unknown platform', () => {
    expect(searchApiSchema.safeParse({ query: 'grid', platform: 'vue' }).success).toBe(false);
    expect(searchApiSchema.safeParse({ query: 'grid', platform: 'svelte' }).success).toBe(false);
  });

  it('accepts all valid platforms', () => {
    for (const platform of ['angular', 'react', 'webcomponents', 'blazor'] as const) {
      expect(searchApiSchema.safeParse({ query: 'grid', platform }).success).toBe(true);
    }
  });

  it('platform is optional', () => {
    const result = searchApiSchema.safeParse({ query: 'grid' });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.platform).toBeUndefined();
    }
  });
});
