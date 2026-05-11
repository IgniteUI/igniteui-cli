import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('fs', async () => {
  const actual = await vi.importActual<typeof import('fs')>('fs');
  return {
    ...actual,
    existsSync: vi.fn(),
    readFileSync: vi.fn(),
    readdirSync: vi.fn(),
    statSync: vi.fn(),
    realpathSync: vi.fn((p: string) => p),
  };
});

import { existsSync, readFileSync, readdirSync, statSync } from 'fs';
import { ApiDocLoader, ApiDocsInitializationError } from '../../lib/api-doc-loader.js';
import type { PlatformConfig } from '../../config/platforms.js';

const mockExistsSync = vi.mocked(existsSync);
const mockReadFileSync = vi.mocked(readFileSync);
const mockReaddirSync = vi.mocked(readdirSync);
const mockStatSync = vi.mocked(statSync);

const FIXTURE_LLMS_CONTENT = [
  '### [IgxGridComponent](https://example.com/angular/igxgrid)',
  '',
  'A data grid component.',
  '',
  '- **rowSelection**: string — Row selection mode.',
  '',
  '### [IgxComboComponent](https://example.com/angular/igxcombo)',
  '',
  'A combo box component.',
  '',
  '- **displayKey**: string — Key for display.',
  '',
].join('\n');

const FIXTURE_CONFIG: PlatformConfig = {
  key: 'angular',
  displayName: 'Angular',
  submodulePath: 'blazor/api-docs',
  docsPath: 'docs/angular-api',
  apiSource: { kind: 'llms-full-txt', docsPath: 'docs/angular-api' },
};

function setupFsMocks() {
  mockExistsSync.mockImplementation((p) => {
    const s = String(p);
    return s.endsWith('angular-api') || s.endsWith('llms-full.txt') || s.endsWith('webcomponents-api');
  });
  mockReaddirSync.mockImplementation((p) => {
    const s = String(p);
    if (s.endsWith('angular-api') || s.endsWith('webcomponents-api')) {
      return ['igniteui-angular'] as unknown as ReturnType<typeof readdirSync>;
    }
    if (s.endsWith('igniteui-angular')) {
      return ['21.0.x'] as unknown as ReturnType<typeof readdirSync>;
    }
    return [] as unknown as ReturnType<typeof readdirSync>;
  });
  mockStatSync.mockReturnValue({ isDirectory: () => true } as ReturnType<typeof statSync>);
  mockReadFileSync.mockReturnValue(FIXTURE_LLMS_CONTENT);
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
    it('loads entries for a platform with an llms-full.txt file', () => {
      const loader = createLoadedLoader();
      expect(loader.get('angular', 'IgxGridComponent')).toBeDefined();
      expect(loader.get('angular', 'IgxComboComponent')).toBeDefined();
    });

    it('skips platform gracefully when docs directory is missing', () => {
      mockExistsSync.mockReturnValue(false);
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      expect(() => loader.load()).not.toThrow();
      expect(loader.get('angular', 'IgxGridComponent')).toBeUndefined();
    });

    it('skips platform gracefully when llms-full.txt has no component entries', () => {
      mockExistsSync.mockReturnValue(true);
      mockReaddirSync.mockReturnValue(['igniteui-angular'] as unknown as ReturnType<typeof readdirSync>);
      mockStatSync.mockReturnValue({ isDirectory: () => true } as ReturnType<typeof statSync>);
      mockReadFileSync.mockReturnValue('# Package — no components here');
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
      expect(() => loader.load()).not.toThrow();
      expect(loader.get('angular', 'IgxGridComponent')).toBeUndefined();
    });

    it('loads multiple platforms', () => {
      setupFsMocks();

      const wcConfig: PlatformConfig = {
        key: 'webcomponents',
        displayName: 'Web Components',
        submodulePath: 'blazor/api-docs',
        docsPath: 'docs/webcomponents-api',
        apiSource: { kind: 'llms-full-txt', docsPath: 'docs/webcomponents-api' },
      };

      const loader = new ApiDocLoader([FIXTURE_CONFIG, wcConfig]);
      loader.load();

      // Both platforms should have the same fixture entries
      expect(loader.get('angular', 'IgxGridComponent')).toBeDefined();
      expect(loader.get('webcomponents', 'IgxGridComponent')).toBeDefined();
    });

    it('returns zero entries when llms-full.txt exists but has no ### headings', () => {
      mockExistsSync.mockReturnValue(true);
      mockReaddirSync.mockReturnValue(['igniteui-angular'] as unknown as ReturnType<typeof readdirSync>);
      mockStatSync.mockReturnValue({ isDirectory: () => true } as ReturnType<typeof statSync>);
      mockReadFileSync.mockReturnValue('# Just a header\n\nNo component sections.');
      const loader = new ApiDocLoader([FIXTURE_CONFIG]);
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

    it('populates content chunk from llms-full.txt', () => {
      const loader = createLoadedLoader();
      const entry = loader.get('angular', 'IgxGridComponent');
      expect(entry?.content).toContain('IgxGridComponent');
      expect(entry?.content).toContain('A data grid component.');
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
      const results = loader.search({ filter: 'combo' });
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
