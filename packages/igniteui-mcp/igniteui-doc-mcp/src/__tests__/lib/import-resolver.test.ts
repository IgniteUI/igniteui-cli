import { mkdtempSync, rmSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ImportResolver, inferPlatform, loadImportMaps, type ImportMaps } from '../../lib/import-resolver.js';
import type { ApiDocLoader } from '../../lib/api-doc-loader.js';
import type { DocEntry } from '../../lib/types/docs.types.js';

function entry(overrides: Partial<DocEntry>): DocEntry {
  return {
    filepath: '/fake/llms-full.txt',
    title: overrides.component ?? 'X',
    component: 'X',
    type: 'class',
    keywords: [],
    summary: '',
    platform: 'angular',
    ...overrides,
  };
}

function makeLoader(entries: DocEntry[], packages: Record<string, string[]> = {}): ApiDocLoader {
  const find = (platform: string, name: string) =>
    entries.find(e => e.platform === platform && e.component.replace(/<[^>]*>/g, '').toLowerCase() === name.replace(/<[^>]*>/g, '').toLowerCase());
  return {
    get: vi.fn((platform: string, name: string) => find(platform, name)),
    search: vi.fn(({ platform }: { platform?: string }) => entries.filter(e => !platform || e.platform === platform)),
    getPackages: vi.fn((e: DocEntry) => packages[e.component] ?? (e.package ? [e.package] : [])),
  } as unknown as ApiDocLoader;
}

const MAPS: ImportMaps = {
  angular: {
    IgxGridComponent: { module: 'igniteui-angular/grids/grid', kind: 'class' },
    IgxGridModule: { module: 'igniteui-angular/grids/grid', kind: 'class' },
    IgxColumnComponent: { module: 'igniteui-angular/grids/core', kind: 'class' },
    IGridState: { module: 'igniteui-angular/grids/core', kind: 'interface' },
    IGX_GRID_DIRECTIVES: { module: 'igniteui-angular/grids/grid', kind: 'const' },
    GridSelectionMode: { module: 'igniteui-angular/grids/core', kind: 'const' },
  },
  react: {
    IgrGrid: { module: 'igniteui-react-grids' },
    GridSelectionMode: { module: 'igniteui-react-grids' },
  },
};

describe('inferPlatform', () => {
  it.each([
    ['IgxGridComponent', 'angular'],
    ['igxgridcomponent', 'angular'],
    ['IGX_GRID_DIRECTIVES', 'angular'],
    ['IgrGrid', 'react'],
    ['IgcButtonComponent', 'webcomponents'],
    ['IgbCombo', 'blazor'],
  ])('%s → %s', (symbol, platform) => {
    expect(inferPlatform(symbol)).toBe(platform);
  });

  it.each(['IGridState', 'IGroupingExpression', 'GridSelectionMode', 'Igniter'])('does not infer a platform for %s', symbol => {
    expect(inferPlatform(symbol)).toBeUndefined();
  });
});

describe('ImportResolver', () => {
  it('resolves an exact name from the import map', () => {
    const resolver = new ImportResolver(makeLoader([]), MAPS);
    expect(resolver.resolve('IgxGridComponent').matches).toEqual([
      { symbol: 'IgxGridComponent', platform: 'angular', module: 'igniteui-angular/grids/grid', kind: 'class' },
    ]);
  });

  it('matches case-insensitively and returns the canonical spelling', () => {
    const resolver = new ImportResolver(makeLoader([]), MAPS);
    const [match] = resolver.resolve('igxcolumncomponent').matches;
    expect(match.symbol).toBe('IgxColumnComponent');
    expect(match.module).toBe('igniteui-angular/grids/core');
  });

  it('searches every platform for a name without a prefix', () => {
    const resolver = new ImportResolver(makeLoader([]), MAPS);
    const platforms = resolver.resolve('GridSelectionMode').matches.map(m => m.platform);
    expect(platforms).toEqual(['angular', 'react']);
  });

  it('restricts to the given platform', () => {
    const resolver = new ImportResolver(makeLoader([]), MAPS);
    const matches = resolver.resolve('GridSelectionMode', 'react').matches;
    expect(matches).toHaveLength(1);
    expect(matches[0].module).toBe('igniteui-react-grids');
  });

  it('resolves I-prefixed interfaces without treating them as React', () => {
    const resolver = new ImportResolver(makeLoader([]), MAPS);
    const matches = resolver.resolve('IGridState').matches;
    expect(matches.map(m => m.platform)).toEqual(['angular']);
  });

  it('falls back to the API docs package when the map has no entry', () => {
    const loader = makeLoader([entry({ platform: 'react', component: 'IgrDockManager', package: 'igniteui-react-dockmanager' })]);
    const resolver = new ImportResolver(loader, MAPS);
    expect(resolver.resolve('IgrDockManager').matches[0]).toMatchObject({ module: 'igniteui-react-dockmanager', kind: 'class' });
  });

  it('applies subpath overrides for API-docs packages', () => {
    const loader = makeLoader([entry({ platform: 'webcomponents', component: 'IgcGridComponent', package: 'igniteui-webcomponents-grids' })]);
    const resolver = new ImportResolver(loader, {});
    expect(resolver.resolve('IgcGridComponent').matches[0].module).toBe('igniteui-webcomponents-grids/grids');
  });

  it('strips generics and lists other packages for Blazor', () => {
    const combo = entry({ platform: 'blazor', component: 'IgbCombo<T>', package: 'IgniteUI.Blazor.Lite' });
    const loader = makeLoader([combo], { 'IgbCombo<T>': ['IgniteUI.Blazor.Lite', 'IgniteUI.Blazor'] });
    const [match] = new ImportResolver(loader, {}).resolve('IgbCombo').matches;
    expect(match).toMatchObject({ symbol: 'IgbCombo', module: 'IgniteUI.Blazor', alsoIn: ['IgniteUI.Blazor.Lite'] });
  });

  it('ignores API-docs hits in the main Angular package that the entry-point map does not know', () => {
    const loader = makeLoader([entry({ component: 'IgxRemovedComponent', package: 'igniteui-angular' })]);
    expect(new ImportResolver(loader, MAPS).resolve('IgxRemovedComponent').matches).toEqual([]);
  });

  it('uses the API docs for other Angular packages', () => {
    const loader = makeLoader([entry({ component: 'IgxRadialGaugeComponent', package: 'igniteui-angular-gauges' })]);
    expect(new ImportResolver(loader, MAPS).resolve('IgxRadialGaugeComponent').matches[0].module).toBe('igniteui-angular-gauges');
  });

  describe('suggestions', () => {
    it('suggests the suffixed name for a bare component name', () => {
      const result = new ImportResolver(makeLoader([]), MAPS).resolve('IgxGrid');
      expect(result.matches).toEqual([]);
      expect(result.suggestions.slice(0, 2)).toEqual(['IgxGridComponent', 'IgxGridModule']);
    });

    it('suggests close misspellings', () => {
      const result = new ImportResolver(makeLoader([]), MAPS).resolve('IgxColumComponent');
      expect(result.suggestions).toContain('IgxColumnComponent');
    });

    it('returns no suggestions for unrelated names', () => {
      expect(new ImportResolver(makeLoader([]), MAPS).resolve('FooBar').suggestions).toEqual([]);
    });

    it('returns no suggestions when the name resolves', () => {
      expect(new ImportResolver(makeLoader([]), MAPS).resolve('IgxGridComponent').suggestions).toEqual([]);
    });
  });
});

describe('loadImportMaps', () => {
  let dir: string | undefined;

  afterEach(() => {
    if (dir) rmSync(dir, { recursive: true, force: true });
    dir = undefined;
  });

  it('loads the symbols of every platform file present', () => {
    dir = mkdtempSync(join(tmpdir(), 'import-map-'));
    writeFileSync(join(dir, 'angular.json'), JSON.stringify({
      platform: 'angular',
      sources: {},
      symbols: { IgxGridComponent: { module: 'igniteui-angular/grids/grid' } },
    }));
    const maps = loadImportMaps(dir);
    expect(maps.angular?.IgxGridComponent.module).toBe('igniteui-angular/grids/grid');
    expect(maps.react).toBeUndefined();
  });

  it('skips unreadable files', () => {
    dir = mkdtempSync(join(tmpdir(), 'import-map-'));
    writeFileSync(join(dir, 'react.json'), '{ not json');
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(loadImportMaps(dir).react).toBeUndefined();
  });

  it('loads the committed maps', () => {
    const maps = loadImportMaps();
    expect(maps.angular?.IgxGridComponent?.module).toBe('igniteui-angular/grids/grid');
  });
});
