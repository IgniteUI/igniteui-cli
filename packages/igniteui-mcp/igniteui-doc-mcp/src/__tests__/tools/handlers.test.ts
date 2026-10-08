import { describe, expect, it, vi } from 'vitest';
import { createGetApiReferenceHandler, createResolveImportHandler, createSearchApiHandler } from '../../tools/handlers.js';
import type { ApiDocLoader } from '../../lib/api-doc-loader.js';
import type { ImportResolver, ResolvedImport, ResolveResult } from '../../lib/import-resolver.js';
import type { DocEntry } from '../../lib/types/docs.types.js';

function makeEntry(overrides: Partial<DocEntry> = {}): DocEntry {
  return {
    filepath: '/fake/IgxGrid.md',
    title: 'IgxGridComponent',
    component: 'IgxGridComponent',
    type: 'class',
    keywords: ['grid'],
    summary: 'A data grid.',
    platform: 'angular',
    content: '## Properties\nrowSelection: string\n\n## Methods\nselectAllRows(): void\n\n## Events\nonRowSelect',
    ...overrides,
  };
}

function makeLoader(overrides: Partial<ApiDocLoader> = {}): ApiDocLoader {
  return {
    get: vi.fn().mockReturnValue(undefined),
    search: vi.fn().mockReturnValue([]),
    load: vi.fn(),
    getStats: vi.fn(),
    ...overrides,
  } as unknown as ApiDocLoader;
}

describe('createGetApiReferenceHandler', () => {
  it('returns valid MCP response format when component is found', async () => {
    const loader = makeLoader({ get: vi.fn().mockReturnValue(makeEntry()) });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxGridComponent', section: 'all' });

    expect(result).toHaveProperty('content');
    expect(result.content).toBeInstanceOf(Array);
    expect(result.content[0]).toHaveProperty('type', 'text');
    expect(result.content[0]).toHaveProperty('text');
    expect(result.isError).toBeUndefined();
  });

  it('returns full content when section is "all"', async () => {
    const loader = makeLoader({ get: vi.fn().mockReturnValue(makeEntry()) });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxGridComponent', section: 'all' });

    expect(result.content[0].text).toContain('Properties');
    expect(result.content[0].text).toContain('Methods');
    expect(result.content[0].text).toContain('Events');
  });

  it('returns the full entry when member is an empty string (blank member sent for "full entry")', async () => {
    const loader = makeLoader({ get: vi.fn().mockReturnValue(makeEntry()) });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxGridComponent', section: 'all', member: '' });

    expect(result.isError).toBeUndefined();
    expect(result.content[0].text).toContain('Properties');
    expect(result.content[0].text).toContain('Methods');
    expect(result.content[0].text).toContain('Events');
  });

  it('returns the requested section when member is an empty string', async () => {
    const loader = makeLoader({ get: vi.fn().mockReturnValue(makeEntry()) });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxGridComponent', section: 'properties', member: '' });

    expect(result.isError).toBeUndefined();
    expect(result.content[0].text).toContain('- properties');
  });

  it('returns isError when component is not found', async () => {
    const loader = makeLoader();
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxNonExistent', section: 'all' });

    expect(result.isError).toBe(true);
    expect(result.content[0].text).toContain('IgxNonExistent');
    expect(result.content[0].text).toContain('not found');
  });

  it('delegates fuzzy name matching to the loader and reports the resolved name', async () => {
    // ApiDocLoader.get handles case-insensitive and generic-stripped lookups;
    // the handler just uses whatever entry comes back.
    const entry = makeEntry({ component: 'IgbCombo<T>', platform: 'blazor' });
    const loader = makeLoader({ get: vi.fn().mockReturnValue(entry) });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'blazor', component: 'IgbCombo', section: 'properties' });

    expect(loader.get).toHaveBeenCalledWith('blazor', 'IgbCombo');
    expect(result.isError).toBeUndefined();
    expect(result.content[0].text).toContain('# IgbCombo<T> (blazor) - properties');
  });

  it('treats a placeholder member with no letters or digits as omitted', async () => {
    const loader = makeLoader({ get: vi.fn().mockReturnValue(makeEntry()) });
    const handler = createGetApiReferenceHandler(loader);

    for (const member of ['.*', '*', '-', '?']) {
      const result = await handler({ platform: 'angular', component: 'IgxGridComponent', section: 'all', member });
      expect(result.isError, `member=${JSON.stringify(member)}`).toBeUndefined();
      expect(result.content[0].text).toContain('Methods');
    }
  });

  it('still reports not-found for a real-looking member that does not exist', async () => {
    const loader = makeLoader({ get: vi.fn().mockReturnValue(makeEntry()) });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxGridComponent', section: 'all', member: ':invalid' });

    expect(result.isError).toBe(true);
    expect(result.content[0].text).toContain('Member ":invalid" not found');
  });

  it('returns isError with suggestion to use search_api when not found even case-insensitively', async () => {
    const loader = makeLoader({ search: vi.fn().mockReturnValue([]) });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxNonExistent', section: 'all' });

    expect(result.isError).toBe(true);
    expect(result.content[0].text).toContain('search_api');
  });

  it('returns isError when content is undefined on the entry', async () => {
    const entry = makeEntry({ content: undefined });
    const loader = makeLoader({ get: vi.fn().mockReturnValue(entry) });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxGridComponent', section: 'all' });

    expect(result.isError).toBe(true);
    expect(result.content[0].text).toContain('not available');
  });

  it('extracts Properties section and includes header with component name', async () => {
    const loader = makeLoader({ get: vi.fn().mockReturnValue(makeEntry()) });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxGridComponent', section: 'properties' });

    expect(result.isError).toBeUndefined();
    expect(result.content[0].text).toContain('# IgxGridComponent');
    expect(result.content[0].text).toContain('Properties');
    expect(result.content[0].text).not.toContain('Methods');
  });

  it('extracts Methods section', async () => {
    const loader = makeLoader({ get: vi.fn().mockReturnValue(makeEntry()) });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxGridComponent', section: 'methods' });

    expect(result.isError).toBeUndefined();
    expect(result.content[0].text).toContain('Methods');
    expect(result.content[0].text).toContain('selectAllRows');
    expect(result.content[0].text).not.toContain('Properties');
  });

  it('extracts Events section', async () => {
    const loader = makeLoader({ get: vi.fn().mockReturnValue(makeEntry()) });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxGridComponent', section: 'events' });

    expect(result.isError).toBeUndefined();
    expect(result.content[0].text).toContain('Events');
    expect(result.content[0].text).toContain('onRowSelect');
  });

  it('falls back to full content when requested section is absent', async () => {
    const entry = makeEntry({ content: '# Grid\n\nSome content only.' });
    const loader = makeLoader({ get: vi.fn().mockReturnValue(entry) });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxGridComponent', section: 'events' });

    // extractSection returns null for missing section, so handler falls through to full content
    expect(result.isError).toBeUndefined();
    expect(result.content[0].text).toContain('Some content only');
  });

  it('defaults section to "all" when omitted', async () => {
    const loader = makeLoader({ get: vi.fn().mockReturnValue(makeEntry()) });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxGridComponent' } as any);

    expect(result.isError).toBeUndefined();
    // Should return full content (all sections) when section defaults to "all"
    expect(result.content[0].text).toContain('Properties');
  });

  describe('member-targeted lookup', () => {
    const checkboxContent = [
      '## Properties',
      '',
      '- **checked** `boolean` — Whether the checkbox is checked.',
      '- **disabled** `boolean` — Whether disabled.',
      '',
      '## Methods',
      '',
      '- **click()** — Toggles the checkbox.',
      '',
      '## Events',
      '',
      '- **igcChange** — Fired on state change.',
      '',
    ].join('\n');

    const makeCheckboxEntry = () => makeEntry({
      component: 'IgcCheckboxComponent',
      platform: 'webcomponents',
      content: checkboxContent,
    });

    it('returns a single property line when member matches a property', async () => {
      const loader = makeLoader({ get: vi.fn().mockReturnValue(makeCheckboxEntry()) });
      const handler = createGetApiReferenceHandler(loader);
      const result = await handler({
        platform: 'webcomponents',
        component: 'IgcCheckboxComponent',
        section: 'all',
        member: 'checked',
      });

      expect(result.isError).toBeUndefined();
      expect(result.content[0].text).toContain('IgcCheckboxComponent.checked (property)');
      expect(result.content[0].text).toContain('**checked**');
      expect(result.content[0].text).not.toContain('**disabled**');
    });

    it('returns a single method line when member matches a method', async () => {
      const loader = makeLoader({ get: vi.fn().mockReturnValue(makeCheckboxEntry()) });
      const handler = createGetApiReferenceHandler(loader);
      const result = await handler({
        platform: 'webcomponents',
        component: 'IgcCheckboxComponent',
        section: 'all',
        member: 'click',
      });

      expect(result.isError).toBeUndefined();
      expect(result.content[0].text).toContain('(method)');
      expect(result.content[0].text).toContain('**click()**');
    });

    it('returns a single event line when member matches an event', async () => {
      const loader = makeLoader({ get: vi.fn().mockReturnValue(makeCheckboxEntry()) });
      const handler = createGetApiReferenceHandler(loader);
      const result = await handler({
        platform: 'webcomponents',
        component: 'IgcCheckboxComponent',
        section: 'all',
        member: 'igcChange',
      });

      expect(result.isError).toBeUndefined();
      expect(result.content[0].text).toContain('(event)');
      expect(result.content[0].text).toContain('igcChange');
    });

    it('returns isError when member does not exist on the component', async () => {
      const loader = makeLoader({ get: vi.fn().mockReturnValue(makeCheckboxEntry()) });
      const handler = createGetApiReferenceHandler(loader);
      const result = await handler({
        platform: 'webcomponents',
        component: 'IgcCheckboxComponent',
        section: 'all',
        member: 'nonexistent',
      });

      expect(result.isError).toBe(true);
      expect(result.content[0].text).toContain('Member "nonexistent" not found');
      expect(result.content[0].text).toContain('IgcCheckboxComponent');
    });

    it('parses "Component#member" passed in `component` and resolves the member', async () => {
      const loader = makeLoader({ get: vi.fn().mockReturnValue(makeCheckboxEntry()) });
      const handler = createGetApiReferenceHandler(loader);
      const result = await handler({
        platform: 'webcomponents',
        component: 'IgcCheckboxComponent#checked',
        section: 'all',
      } as any);

      expect(result.isError).toBeUndefined();
      expect(result.content[0].text).toContain('IgcCheckboxComponent.checked (property)');
      expect(result.content[0].text).toContain('**checked**');
    });

    it('explicit `member` parameter wins over a `#`-suffix in `component`', async () => {
      const loader = makeLoader({ get: vi.fn().mockReturnValue(makeCheckboxEntry()) });
      const handler = createGetApiReferenceHandler(loader);
      const result = await handler({
        platform: 'webcomponents',
        component: 'IgcCheckboxComponent#click',
        section: 'all',
        member: 'checked',
      });

      expect(result.isError).toBeUndefined();
      expect(result.content[0].text).toContain('.checked (property)');
    });

    it('takes precedence over section: returns single line even when section is set', async () => {
      const loader = makeLoader({ get: vi.fn().mockReturnValue(makeCheckboxEntry()) });
      const handler = createGetApiReferenceHandler(loader);
      const result = await handler({
        platform: 'webcomponents',
        component: 'IgcCheckboxComponent',
        section: 'methods',
        member: 'checked',
      });

      expect(result.isError).toBeUndefined();
      expect(result.content[0].text).toContain('.checked (property)');
      expect(result.content[0].text).not.toContain('**click()**');
    });
  });
});

describe('createSearchApiHandler', () => {
  it('returns valid MCP response format with results', async () => {
    const entry = makeEntry();
    const loader = makeLoader({
      search: vi.fn().mockReturnValue([entry]),
    });
    const handler = createSearchApiHandler(loader);
    const result = await handler({ query: 'grid' });

    expect(result).toHaveProperty('content');
    expect(result.content[0].type).toBe('text');
    expect(result.content[0].text).toContain('IgxGridComponent');
  });

  it('includes platform and type tags in output', async () => {
    const entry = makeEntry({ platform: 'angular', type: 'class' });
    const loader = makeLoader({ search: vi.fn().mockReturnValue([entry]) });
    const handler = createSearchApiHandler(loader);
    const result = await handler({ query: 'grid' });

    expect(result.content[0].text).toContain('[angular]');
    expect(result.content[0].text).toContain('[class]');
  });

  it('includes match count in output', async () => {
    const entry = makeEntry({ content: 'grid selection grid' });
    const loader = makeLoader({ search: vi.fn().mockReturnValue([entry]) });
    const handler = createSearchApiHandler(loader);
    const result = await handler({ query: 'grid' });

    expect(result.content[0].text).toMatch(/\d+ match/);
  });

  it('returns a "no results" message when nothing matches', async () => {
    const loader = makeLoader({ search: vi.fn().mockReturnValue([]) });
    const handler = createSearchApiHandler(loader);
    const result = await handler({ query: 'nonexistent' });

    expect(result.content[0].text).toContain('No results');
    expect(result.content[0].text).toContain('nonexistent');
  });

  it('includes platform name in "no results" message when platform is specified', async () => {
    const loader = makeLoader({ search: vi.fn().mockReturnValue([]) });
    const handler = createSearchApiHandler(loader);
    const result = await handler({ platform: 'angular', query: 'nonexistent' });

    expect(result.content[0].text).toContain('Angular');
  });

  it('includes keywords in output when entry has keywords', async () => {
    const entry = makeEntry({ keywords: ['selection', 'virtual'] });
    const loader = makeLoader({ search: vi.fn().mockReturnValue([entry]) });
    const handler = createSearchApiHandler(loader);
    const result = await handler({ query: 'selection' });

    expect(result.content[0].text).toContain('selection');
    expect(result.content[0].text).toContain('virtual');
  });

  it('omits keywords line when entry has no keywords', async () => {
    const entry = makeEntry({ keywords: [] });
    const loader = makeLoader({ search: vi.fn().mockReturnValue([entry]) });
    const handler = createSearchApiHandler(loader);
    const result = await handler({ query: 'grid' });

    expect(result.content[0].text).not.toContain('Keywords:');
  });

  it('passes platform filter to docLoader.search when provided', async () => {
    const searchMock = vi.fn().mockReturnValue([]);
    const loader = makeLoader({ search: searchMock });
    const handler = createSearchApiHandler(loader);
    await handler({ platform: 'react', query: 'grid' });

    expect(searchMock).toHaveBeenCalledWith({ platform: 'react' });
  });

  it('searches all platforms when platform is omitted', async () => {
    const searchMock = vi.fn().mockReturnValue([]);
    const loader = makeLoader({ search: searchMock });
    const handler = createSearchApiHandler(loader);
    await handler({ query: 'grid' });

    expect(searchMock).toHaveBeenCalledWith({ platform: undefined });
  });
});

describe('createResolveImportHandler', () => {
  function makeResolver(table: Record<string, ResolvedImport[]>, suggestions: Record<string, string[]> = {}): ImportResolver {
    return {
      resolve: vi.fn((query: string): ResolveResult => ({
        query,
        matches: table[query] ?? [],
        suggestions: table[query] ? [] : (suggestions[query] ?? []),
      })),
    } as unknown as ImportResolver;
  }

  const ng = (symbol: string, module: string, kind = 'class'): ResolvedImport => ({ symbol, platform: 'angular', module, kind });

  it('groups symbols into one import line per module', async () => {
    const handler = createResolveImportHandler(makeResolver({
      IgxGridComponent: [ng('IgxGridComponent', 'igniteui-angular/grids/grid')],
      IGX_GRID_DIRECTIVES: [ng('IGX_GRID_DIRECTIVES', 'igniteui-angular/grids/grid', 'const')],
      IgxColumnComponent: [ng('IgxColumnComponent', 'igniteui-angular/grids/core')],
      IGridState: [ng('IGridState', 'igniteui-angular/grids/core', 'interface')],
    }));
    const result = await handler({ symbols: ['IgxGridComponent', 'IGX_GRID_DIRECTIVES', 'IgxColumnComponent', 'IGridState'] });
    const text = result.content[0].text as string;

    expect(result.isError).toBeUndefined();
    expect(text).toContain(`import { type IGridState, IgxColumnComponent } from 'igniteui-angular/grids/core';`);
    expect(text).toContain(`import { IGX_GRID_DIRECTIVES, IgxGridComponent } from 'igniteui-angular/grids/grid';`);
    expect(text).toContain('`@infragistics/igniteui-angular/grids/grid`');
  });

  it('passes the platform through to the resolver', async () => {
    const resolver = makeResolver({});
    await createResolveImportHandler(resolver)({ symbols: ['GridSelectionMode'], platform: 'react' });
    expect(resolver.resolve).toHaveBeenCalledWith('GridSelectionMode', 'react');
  });

  it('reports unresolved names with suggestions alongside resolved ones', async () => {
    const handler = createResolveImportHandler(makeResolver(
      { IgxComboComponent: [ng('IgxComboComponent', 'igniteui-angular/combo')] },
      { IgxGrid: ['IgxGridComponent', 'IgxGridModule'] },
    ));
    const result = await handler({ symbols: ['IgxComboComponent', 'IgxGrid'] });
    const text = result.content[0].text as string;

    expect(result.isError).toBeUndefined();
    expect(text).toContain(`from 'igniteui-angular/combo'`);
    expect(text).toContain('## Not resolved');
    expect(text).toContain('Did you mean: IgxGridComponent, IgxGridModule?');
  });

  it('returns isError when nothing resolves', async () => {
    const result = await createResolveImportHandler(makeResolver({}))({ symbols: ['FooBar'] });
    expect(result.isError).toBe(true);
    expect(result.content[0].text).toContain('`FooBar` — not found');
  });

  it('warns when a name resolves in several frameworks', async () => {
    const handler = createResolveImportHandler(makeResolver({
      GridSelectionMode: [
        ng('GridSelectionMode', 'igniteui-angular/grids/core', 'const'),
        { symbol: 'GridSelectionMode', platform: 'react', module: 'igniteui-react-grids' },
      ],
    }));
    const text = (await handler({ symbols: ['GridSelectionMode'] })).content[0].text as string;
    expect(text).toContain('"GridSelectionMode" exists in several frameworks');
    expect(text).toContain('## Angular');
    expect(text).toContain('## React');
  });

  it('adds defineComponents and grid registration notes for Web Components', async () => {
    const handler = createResolveImportHandler(makeResolver({
      IgcButtonComponent: [{ symbol: 'IgcButtonComponent', platform: 'webcomponents', module: 'igniteui-webcomponents', kind: 'class' }],
      IgcGridComponent: [{ symbol: 'IgcGridComponent', platform: 'webcomponents', module: 'igniteui-webcomponents-grids/grids' }],
    }));
    const text = (await handler({ symbols: ['IgcButtonComponent', 'IgcGridComponent'] })).content[0].text as string;
    expect(text).toContain('defineComponents(IgcButtonComponent)');
    expect(text).toContain(`import 'igniteui-webcomponents-grids/grids/combined';`);
  });

  it('renders Blazor as @using, NuGet packages and module registration', async () => {
    const handler = createResolveImportHandler(makeResolver({
      IgbCombo: [{ symbol: 'IgbCombo', platform: 'blazor', module: 'IgniteUI.Blazor', kind: 'class', alsoIn: ['IgniteUI.Blazor.Lite'], registerModule: 'IgbComboModule' }],
      IgbComboChangeEventArgs: [{ symbol: 'IgbComboChangeEventArgs', platform: 'blazor', module: 'IgniteUI.Blazor', kind: 'class' }],
    }));
    const text = (await handler({ symbols: ['IgbCombo', 'IgbComboChangeEventArgs'] })).content[0].text as string;
    expect(text).toContain('@using IgniteUI.Blazor.Controls');
    expect(text).toContain('NuGet `IgniteUI.Blazor`: IgbCombo (also in `IgniteUI.Blazor.Lite`), IgbComboChangeEventArgs');
    expect(text).toContain('AddIgniteUIBlazor(typeof(IgbComboModule));');
    expect(text).not.toContain('import {');
  });

  it('registers no Blazor module the resolver did not find', async () => {
    const handler = createResolveImportHandler(makeResolver({
      IgbDataChart: [{ symbol: 'IgbDataChart', platform: 'blazor', module: 'IgniteUI.Blazor', kind: 'class' }],
    }));
    const text = (await handler({ symbols: ['IgbDataChart'] })).content[0].text as string;
    expect(text).not.toContain('AddIgniteUIBlazor');
  });

  it('does not claim a namespace for Blazor Documents packages', async () => {
    const handler = createResolveImportHandler(makeResolver({
      Workbook: [{ symbol: 'Workbook', platform: 'blazor', module: 'IgniteUI.Blazor.Documents.Excel', kind: 'class' }],
    }));
    const text = (await handler({ symbols: ['Workbook'], platform: 'blazor' })).content[0].text as string;
    expect(text).not.toContain('@using IgniteUI.Blazor.Controls');
    expect(text).toContain('namespace for `IgniteUI.Blazor.Documents.Excel` is not listed here');
    expect(text).not.toContain('AddIgniteUIBlazor');
  });
});

describe('deprecated components', () => {
  const blazorGrid = (symbol: string): ResolvedImport => ({ symbol, platform: 'blazor', module: 'IgniteUI.Blazor', kind: 'class' });

  it('get_api_reference answers with the deprecation notice and never looks the entry up', async () => {
    const get = vi.fn();
    const result = await createGetApiReferenceHandler(makeLoader({ get }))({ platform: 'blazor', component: 'IgbDataGrid', section: 'all' });
    const text = result.content[0].text as string;

    expect(result.isError).toBeUndefined();
    expect(text).toContain('⚠ DEPRECATED: `IgbDataGrid`');
    expect(text).toContain('replaced by `IgbGrid`');
    expect(get).not.toHaveBeenCalled();
  });

  it('get_api_reference covers related types, member lookups and case variations', async () => {
    const handler = createGetApiReferenceHandler(makeLoader());
    const column = await handler({ platform: 'blazor', component: 'igbtextcolumn', section: 'all' });
    const member = await handler({ platform: 'blazor', component: 'IgbDataGrid#StartEditModeAsync', section: 'all' });

    expect(column.content[0].text).toContain('⚠ DEPRECATED: `IgbDataGrid`');
    expect(member.content[0].text).toContain('⚠ DEPRECATED: `IgbDataGrid`');
  });

  it('get_api_reference does not flag the same name on another framework', async () => {
    const loader = makeLoader({ get: vi.fn().mockReturnValue(makeEntry({ component: 'IgbDataGrid', platform: 'angular' })) });
    const result = await createGetApiReferenceHandler(loader)({ platform: 'angular', component: 'IgbDataGrid', section: 'all' });
    expect(result.content[0].text).not.toContain('DEPRECATED');
  });

  it('search_api prepends the notice when the query names a deprecated symbol', async () => {
    const loader = makeLoader({ search: vi.fn().mockReturnValue([makeEntry({ component: 'IgbGrid', platform: 'blazor', content: 'IgbGrid cell editing' })]) });
    const result = await createSearchApiHandler(loader)({ platform: 'blazor', query: 'IgbDataGrid cell' });
    const text = result.content[0].text as string;

    expect(text.startsWith('⚠ DEPRECATED: `IgbDataGrid`')).toBe(true);
    expect(text).toContain('**IgbGrid**');
  });

  it('search_api prepends the notice on an empty result too', async () => {
    const result = await createSearchApiHandler(makeLoader())({ platform: 'blazor', query: 'IgbDataGrid' });
    expect(result.content[0].text).toContain('⚠ DEPRECATED: `IgbDataGrid`');
    expect(result.content[0].text).toContain('No results found');
  });

  it('search_api ignores deprecated names that only appear in result excerpts', async () => {
    const entry = makeEntry({ component: 'IgbLocalDataSource', platform: 'blazor', content: 'summary: IgbDataGridSummaryResult[]' });
    const result = await createSearchApiHandler(makeLoader({ search: vi.fn().mockReturnValue([entry]) }))({ platform: 'blazor', query: 'summary' });
    expect(result.content[0].text).not.toContain('DEPRECATED');
  });

  it('resolve_import returns the notice instead of an import and is not an error', async () => {
    const resolver = { resolve: vi.fn() } as unknown as ImportResolver;
    const result = await createResolveImportHandler(resolver)({ symbols: ['IgbDataGrid', 'IgbTextColumn'], platform: 'blazor' });
    const text = result.content[0].text as string;

    expect(result.isError).toBeUndefined();
    expect(text.match(/⚠ DEPRECATED/g)).toHaveLength(1);
    expect(text).not.toContain('NuGet');
    expect(resolver.resolve).not.toHaveBeenCalled();
  });

  it('resolve_import still resolves the other symbols in the same call', async () => {
    const resolver = {
      resolve: vi.fn((query: string): ResolveResult => ({ query, matches: [blazorGrid(query)], suggestions: [] })),
    } as unknown as ImportResolver;
    const text = (await createResolveImportHandler(resolver)({ symbols: ['IgbDataGrid', 'IgbGrid'] })).content[0].text as string;

    expect(text).toContain('⚠ DEPRECATED: `IgbDataGrid`');
    expect(text).toContain('- NuGet `IgniteUI.Blazor`: IgbGrid');
    expect(resolver.resolve).toHaveBeenCalledTimes(1);
  });

  it('get_api_reference names the requested enum that belongs to the deprecated component', async () => {
    const result = await createGetApiReferenceHandler(makeLoader())({ platform: 'blazor', component: 'EditModeClickAction', section: 'all' });
    expect(result.content[0].text).toContain('⚠ DEPRECATED: `IgbDataGrid`');
    expect(result.content[0].text).toContain('Part of its API: `EditModeClickAction`.');
  });

  it('resolve_import without a platform still resolves an unprefixed name shared with React and Web Components', async () => {
    const shared: ResolvedImport[] = [
      { symbol: 'DataGridSelectionMode', platform: 'react', module: 'igniteui-react-data-grids' },
      { symbol: 'DataGridSelectionMode', platform: 'webcomponents', module: 'igniteui-webcomponents-data-grids' },
    ];
    const resolver = {
      resolve: vi.fn((query: string): ResolveResult => ({ query, matches: shared, suggestions: [] })),
    } as unknown as ImportResolver;
    const result = await createResolveImportHandler(resolver)({ symbols: ['DataGridSelectionMode'] });
    const text = result.content[0].text as string;

    expect(resolver.resolve).toHaveBeenCalledWith('DataGridSelectionMode', undefined);
    expect(text).not.toContain('DEPRECATED');
    expect(text).toContain(`from 'igniteui-react-data-grids'`);
    expect(text).toContain(`from 'igniteui-webcomponents-data-grids'`);
  });

  it('resolve_import stays an error when every non-deprecated symbol is unresolved', async () => {
    const resolver = {
      resolve: vi.fn((query: string): ResolveResult => ({ query, matches: [], suggestions: [] })),
    } as unknown as ImportResolver;
    const result = await createResolveImportHandler(resolver)({ symbols: ['IgbDataGrid', 'NotARealSymbol'], platform: 'blazor' });
    const text = result.content[0].text as string;

    expect(result.isError).toBe(true);
    expect(text).toContain('⚠ DEPRECATED: `IgbDataGrid`');
    expect(text).toContain('`NotARealSymbol` — not found');
  });

  it('resolve_import with platform "blazor" flags the same unprefixed name', async () => {
    const resolver = { resolve: vi.fn() } as unknown as ImportResolver;
    const text = (await createResolveImportHandler(resolver)({ symbols: ['DataGridSelectionMode'], platform: 'blazor' })).content[0].text as string;

    expect(text).toContain('Part of its API: `DataGridSelectionMode`.');
    expect(resolver.resolve).not.toHaveBeenCalled();
  });
});
