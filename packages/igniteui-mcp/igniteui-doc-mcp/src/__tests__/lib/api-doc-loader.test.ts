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

function setupFsMocks() {
  mockExistsSync.mockImplementation((p) => String(p).endsWith('index.json'));
  mockReadFileSync.mockImplementation((p) => {
    if (String(p).endsWith('index.json')) return FIXTURE_INDEX;
    return '# Component\n\n## Properties\nprop: string';
  });
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
      setupFsMocks();
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      loader.load();

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
  });

  describe('get()', () => {
    it('returns the entry for a known component', () => {
      setupFsMocks();
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      loader.load();

      const entry = loader.get('angular', 'IgxGridComponent');
      expect(entry?.component).toBe('IgxGridComponent');
      expect(entry?.platform).toBe('angular');
      expect(entry?.keywords).toContain('grid');
    });

    it('returns undefined for an unknown component', () => {
      setupFsMocks();
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      loader.load();

      expect(loader.get('angular', 'IgxNonExistent')).toBeUndefined();
    });

    it('returns undefined for a known component on the wrong platform', () => {
      setupFsMocks();
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      loader.load();

      expect(loader.get('react', 'IgxGridComponent')).toBeUndefined();
    });
  });

  describe('search()', () => {
    it('returns all entries when no filter is applied', () => {
      setupFsMocks();
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      loader.load();

      expect(loader.search({})).toHaveLength(2);
    });

    it('filters by platform', () => {
      setupFsMocks();
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      loader.load();

      expect(loader.search({ platform: 'angular' })).toHaveLength(2);
      expect(loader.search({ platform: 'react' })).toHaveLength(0);
    });

    it('filters by component name substring (case-insensitive)', () => {
      setupFsMocks();
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      loader.load();

      const results = loader.search({ filter: 'combo' });
      expect(results).toHaveLength(1);
      expect(results[0].component).toBe('IgxComboComponent');
    });

    it('filters by keyword', () => {
      setupFsMocks();
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      loader.load();

      const results = loader.search({ filter: 'select' });
      expect(results).toHaveLength(1);
      expect(results[0].component).toBe('IgxComboComponent');
    });

    it('returns results sorted by component name', () => {
      setupFsMocks();
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      loader.load();

      const names = loader.search({}).map(e => e.component);
      expect(names).toEqual([...names].sort());
    });
  });

  describe('getStats()', () => {
    it('returns total count per platform', () => {
      setupFsMocks();
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      loader.load();

      expect(loader.getStats().angular?.total).toBe(2);
    });

    it('breaks down totals by type', () => {
      setupFsMocks();
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      loader.load();

      expect(loader.getStats().angular?.byType['class']).toBe(2);
    });
  });
});
