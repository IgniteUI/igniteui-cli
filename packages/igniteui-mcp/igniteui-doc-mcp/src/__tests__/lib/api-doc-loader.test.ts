import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('fs', async () => {
  const actual = await vi.importActual<typeof import('fs')>('fs');
  return {
    ...actual,
    existsSync: vi.fn(),
    readFileSync: vi.fn(),
    realpathSync: vi.fn((p: string) => p),
  };
});

import { existsSync, readFileSync } from 'fs';
import { ApiDocLoader, ApiDocsInitializationError } from '../../lib/api-doc-loader.js';
import type { PlatformConfig } from '../../config/platforms.js';

const mockExistsSync = vi.mocked(existsSync);
const mockReadFileSync = vi.mocked(readFileSync);

const FIXTURE_INDEX = JSON.stringify({
  IgxGridComponent: {
    file: 'IgxGridComponent.md',
    title: 'IgxGridComponent',
    component: 'IgxGridComponent',
    type: 'class',
    keywords: ['grid', 'data'],
    summary: 'A data grid component.',
  },
  IgxComboComponent: {
    file: 'IgxComboComponent.md',
    title: 'IgxComboComponent',
    component: 'IgxComboComponent',
    type: 'class',
    keywords: ['combo', 'select'],
    summary: 'A combo box component.',
  },
});

const FIXTURE_CONFIG: PlatformConfig = {
  key: 'angular',
  displayName: 'Angular',
  submodulePath: 'angular/igniteui-angular',
  docsPath: 'docs/angular/api',
  apiSource: { kind: 'markdown-index' },
};

const FIXTURE_REACT_CONFIG: PlatformConfig = {
  key: 'react',
  displayName: 'React',
  submodulePath: 'react/igniteui-react',
  docsPath: 'docs/react',
  apiSource: { kind: 'typedoc-json', jsonPath: 'docs/react/igniteui-react.json' },
};

function setupFsMocks() {
  mockExistsSync.mockImplementation((p) => String(p).endsWith('index.json'));
  mockReadFileSync.mockImplementation((p) => {
    if (String(p).endsWith('index.json')) return FIXTURE_INDEX;
    return '# Component\n\n## Properties\nprop: string';
  });
}

/** Creates a loader with fs mocks configured and load() already called. */
function createLoadedLoader(configs: PlatformConfig[] = [FIXTURE_CONFIG]): ApiDocLoader {
  setupFsMocks();
  const loader = new ApiDocLoader(configs);
  loader.load();
  return loader;
}

describe('ApiDocLoader', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('load()', () => {
    it('loads entries for a platform with a markdown index', () => {
      const loader = createLoadedLoader();
      expect(loader.get('angular', 'IgxGridComponent')).toBeDefined();
      expect(loader.get('angular', 'IgxComboComponent')).toBeDefined();
    });

    it('skips platform gracefully when index.json is missing', () => {
      mockExistsSync.mockReturnValue(false);
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      expect(() => loader.load()).not.toThrow();
      expect(loader.get('angular', 'IgxGridComponent')).toBeUndefined();
    });

    it('skips platform gracefully when index JSON is malformed', () => {
      mockExistsSync.mockReturnValue(true);
      mockReadFileSync.mockReturnValue('not valid json{{');
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      // loadPlatform catches ApiDocsInitializationError and logs it without re-throwing
      expect(() => loader.load()).not.toThrow();
      expect(loader.get('angular', 'IgxGridComponent')).toBeUndefined();
    });

    it('loads multiple platforms', () => {
      mockExistsSync.mockImplementation((p) => {
        const s = String(p);
        return s.endsWith('index.json') || s.endsWith('.json');
      });
      mockReadFileSync.mockImplementation((p) => {
        if (String(p).endsWith('index.json')) return FIXTURE_INDEX;
        // Return a minimal TypeDoc JSON for react config
        if (String(p).endsWith('.json')) {
          return JSON.stringify({ name: 'root', kind: 1, id: 0, children: [
            { name: 'IgrGrid', kind: 128, id: 1 }
          ]});
        }
        return '# Component\n\n## Properties\nprop: string';
      });

      const wcConfig: PlatformConfig = {
        key: 'webcomponents',
        displayName: 'Web Components',
        submodulePath: 'webcomponents/igniteui-webcomponents',
        docsPath: 'docs/webcomponents/api',
        apiSource: { kind: 'markdown-index' },
      };

      const loader = new ApiDocLoader([FIXTURE_CONFIG, wcConfig]);
      loader.load();

      // Both platforms should have the same fixture entries
      expect(loader.get('angular', 'IgxGridComponent')).toBeDefined();
      expect(loader.get('webcomponents', 'IgxGridComponent')).toBeDefined();
    });

    it('skips entries with invalid shape in index.json', () => {
      mockExistsSync.mockReturnValue(true);
      mockReadFileSync.mockImplementation((p) => {
        if (String(p).endsWith('index.json')) {
          return JSON.stringify({
            InvalidEntry: { title: 'Missing required fields' },
          });
        }
        return '';
      });

      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      // Invalid entries cause ApiDocsInitializationError which is caught
      expect(() => loader.load()).not.toThrow();
    });
  });

  describe('get()', () => {
    it('returns the entry for a known component', () => {
      const loader = createLoadedLoader();
      const entry = loader.get('angular', 'IgxGridComponent');
      expect(entry?.component).toBe('IgxGridComponent');
      expect(entry?.platform).toBe('angular');
      expect(entry?.keywords).toContain('grid');
    });

    it('populates content from the markdown file', () => {
      const loader = createLoadedLoader();
      const entry = loader.get('angular', 'IgxGridComponent');
      expect(entry?.content).toBe('# Component\n\n## Properties\nprop: string');
    });

    it('returns undefined for an unknown component', () => {
      const loader = createLoadedLoader();
      expect(loader.get('angular', 'IgxNonExistent')).toBeUndefined();
    });

    it('returns undefined for a known component on the wrong platform', () => {
      const loader = createLoadedLoader();
      expect(loader.get('react', 'IgxGridComponent')).toBeUndefined();
    });
  });

  describe('search()', () => {
    it('returns all entries when no filter is applied', () => {
      const loader = createLoadedLoader();
      expect(loader.search({})).toHaveLength(2);
    });

    it('filters by platform', () => {
      const loader = createLoadedLoader();
      expect(loader.search({ platform: 'angular' })).toHaveLength(2);
      expect(loader.search({ platform: 'react' })).toHaveLength(0);
    });

    it('filters by component name substring (case-insensitive)', () => {
      const loader = createLoadedLoader();
      const results = loader.search({ filter: 'combo' });
      expect(results).toHaveLength(1);
      expect(results[0].component).toBe('IgxComboComponent');
    });

    it('filters by keyword', () => {
      const loader = createLoadedLoader();
      const results = loader.search({ filter: 'select' });
      expect(results).toHaveLength(1);
      expect(results[0].component).toBe('IgxComboComponent');
    });

    it('filters by summary substring', () => {
      const loader = createLoadedLoader();
      const results = loader.search({ filter: 'combo box' });
      expect(results).toHaveLength(1);
      expect(results[0].component).toBe('IgxComboComponent');
    });

    it('filters by type', () => {
      const loader = createLoadedLoader();
      expect(loader.search({ type: 'class' })).toHaveLength(2);
      expect(loader.search({ type: 'directive' })).toHaveLength(0);
    });

    it('combines platform and filter', () => {
      const loader = createLoadedLoader();
      expect(loader.search({ platform: 'angular', filter: 'grid' })).toHaveLength(1);
      expect(loader.search({ platform: 'react', filter: 'grid' })).toHaveLength(0);
    });

    it('returns results sorted by component name', () => {
      const loader = createLoadedLoader();
      const names = loader.search({}).map(e => e.component);
      expect(names).toEqual([...names].sort());
    });
  });

  describe('getStats()', () => {
    it('returns total count per platform', () => {
      const loader = createLoadedLoader();
      expect(loader.getStats().angular?.total).toBe(2);
    });

    it('breaks down totals by type', () => {
      const loader = createLoadedLoader();
      expect(loader.getStats().angular?.byType['class']).toBe(2);
    });

    it('returns empty stats for platforms with no entries', () => {
      const loader = createLoadedLoader();
      expect(loader.getStats().react).toBeUndefined();
    });
  });

  describe('ApiDocsInitializationError', () => {
    it('has the correct error name', () => {
      const err = new ApiDocsInitializationError('test');
      expect(err.name).toBe('ApiDocsInitializationError');
    });

    it('preserves the cause', () => {
      const cause = new Error('underlying');
      const err = new ApiDocsInitializationError('test', { cause });
      expect(err.cause).toBe(cause);
    });
  });
});
