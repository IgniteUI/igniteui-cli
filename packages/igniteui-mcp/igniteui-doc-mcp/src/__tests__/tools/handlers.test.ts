import { describe, expect, it, vi } from 'vitest';
import { createGetApiReferenceHandler, createSearchApiHandler } from '../../tools/handlers.js';
import type { ApiDocLoader } from '../../lib/api-doc-loader.js';
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
    formatStructuredComponent: vi.fn().mockReturnValue(null),
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

  it('returns isError when component is not found', async () => {
    const loader = makeLoader();
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxNonExistent', section: 'all' });

    expect(result.isError).toBe(true);
    expect(result.content[0].text).toContain('IgxNonExistent');
    expect(result.content[0].text).toContain('not found');
  });

  it('falls back to case-insensitive match', async () => {
    const entry = makeEntry({ component: 'IgxGridComponent' });
    const loader = makeLoader({
      get: vi.fn().mockReturnValueOnce(undefined).mockReturnValue(entry),
      search: vi.fn().mockReturnValue([entry]),
    });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'igxgridcomponent', section: 'all' });

    expect(result.isError).toBeUndefined();
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

  it('uses formatStructuredComponent output when available (typedoc-json platforms)', async () => {
    const loader = makeLoader({
      get: vi.fn().mockReturnValue(makeEntry()),
      formatStructuredComponent: vi.fn().mockReturnValue('# Formatted\nsome content'),
    });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'react', component: 'IgrGrid', section: 'all' });

    expect(result.content[0].text).toBe('# Formatted\nsome content');
  });

  it('defaults section to "all" when omitted', async () => {
    const loader = makeLoader({ get: vi.fn().mockReturnValue(makeEntry()) });
    const handler = createGetApiReferenceHandler(loader);
    const result = await handler({ platform: 'angular', component: 'IgxGridComponent' } as any);

    expect(result.isError).toBeUndefined();
    // Should return full content (all sections) when section defaults to "all"
    expect(result.content[0].text).toContain('Properties');
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
