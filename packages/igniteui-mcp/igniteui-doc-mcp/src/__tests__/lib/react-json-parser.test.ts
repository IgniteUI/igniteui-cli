import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('fs', async () => {
  const actual = await vi.importActual<typeof import('fs')>('fs');
  return {
    ...actual,
    readFileSync: vi.fn(),
  };
});

import { readFileSync } from 'fs';
import { ReactJsonParser } from '../../lib/react-json-parser.js';
import type { TypeDocReflection } from '../../lib/types/react-json-parser.types.js';

const mockReadFileSync = vi.mocked(readFileSync);

// Minimal TypeDoc-like JSON fixture with a component that has properties, methods, events.
const TYPEDOC_FIXTURE: TypeDocReflection = {
  id: 0,
  name: 'igniteui-react',
  kind: 1, // Module
  children: [
    {
      id: 1,
      name: 'IgrGrid',
      kind: 128, // Class
      comment: {
        summary: [{ text: 'A powerful data grid component.' }],
        blockTags: [
          { tag: '@slot', content: [{ text: 'header - The header slot' }] },
          { tag: '@csspart', content: [{ text: 'base - The base container' }] },
        ],
      },
      categories: [
        { title: 'Properties', children: [10, 11] },
        { title: 'Methods', children: [20] },
        { title: 'Events', children: [30] },
      ],
      children: [
        {
          id: 10,
          name: 'rowSelection',
          kind: 1024, // Property
          type: { type: 'intrinsic', name: 'string' },
          comment: { summary: [{ text: 'Configures row selection mode.' }] },
        },
        {
          id: 11,
          name: 'dataSource',
          kind: 1024,
          type: { type: 'reference', name: 'Array' },
          comment: { summary: [{ text: 'The data source.' }] },
        },
        {
          id: 20,
          name: 'selectAllRows',
          kind: 2048, // Method
          comment: { summary: [{ text: 'Selects all rows.' }] },
          signatures: [
            {
              parameters: [
                { name: 'emit', type: { type: 'intrinsic', name: 'boolean' } },
              ],
              type: { type: 'intrinsic', name: 'void' },
            },
          ],
        },
        {
          id: 30,
          name: 'onRowSelect',
          kind: 1024,
          type: { type: 'reference', name: 'EventEmitter' },
          comment: { summary: [{ text: 'Emitted when a row is selected.' }] },
        },
      ],
    },
    {
      id: 2,
      name: 'IgrCombo',
      kind: 128,
      comment: { summary: [{ text: 'A combo box component.' }] },
      children: [],
    },
    {
      id: 3,
      name: 'SomeHelper',
      kind: 128, // Class but NOT prefixed with Igr
      children: [],
    },
    {
      id: 4,
      name: 'GridDirection',
      kind: 256, // Interface
      children: [],
    },
  ],
};

function setupFixture(fixture: unknown = TYPEDOC_FIXTURE) {
  mockReadFileSync.mockReturnValue(JSON.stringify(fixture));
}

describe('ReactJsonParser', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('constructor', () => {
    it('reads and parses the JSON file', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      expect(mockReadFileSync).toHaveBeenCalledWith('/fake/path.json', 'utf-8');
      expect(parser).toBeDefined();
    });

    it('throws when JSON is not a valid TypeDoc reflection', () => {
      mockReadFileSync.mockReturnValue(JSON.stringify({ invalid: true }));
      expect(() => new ReactJsonParser('/fake/path.json')).toThrow('Invalid React TypeDoc model');
    });

    it('throws on malformed JSON', () => {
      mockReadFileSync.mockReturnValue('not json{{');
      expect(() => new ReactJsonParser('/fake/path.json')).toThrow();
    });
  });

  describe('getAllComponents()', () => {
    it('returns only Igr-prefixed class names', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      const components = parser.getAllComponents();

      expect(components).toContain('IgrGrid');
      expect(components).toContain('IgrCombo');
      expect(components).not.toContain('SomeHelper');
      expect(components).not.toContain('GridDirection');
    });

    it('returns empty array when model has no Igr components', () => {
      setupFixture({
        id: 0, name: 'empty', kind: 1,
        children: [{ id: 1, name: 'NotIgr', kind: 128 }],
      });
      const parser = new ReactJsonParser('/fake/path.json');
      expect(parser.getAllComponents()).toEqual([]);
    });

    it('returns empty array when model has no children', () => {
      setupFixture({ id: 0, name: 'empty', kind: 1 });
      const parser = new ReactJsonParser('/fake/path.json');
      expect(parser.getAllComponents()).toEqual([]);
    });
  });

  describe('getComponent()', () => {
    it('returns a parsed entry for a known component', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      const entry = parser.getComponent('IgrGrid');

      expect(entry).not.toBeNull();
      expect(entry!.name).toBe('IgrGrid');
      expect(entry!.type).toBe('class');
      expect(entry!.summary).toBe('A powerful data grid component.');
    });

    it('extracts properties from the Properties category', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      const entry = parser.getComponent('IgrGrid')!;

      expect(entry.properties).toHaveLength(2);
      expect(entry.properties[0].name).toBe('rowSelection');
      expect(entry.properties[0].type).toBe('string');
      expect(entry.properties[0].description).toContain('row selection');
    });

    it('extracts methods with signatures', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      const entry = parser.getComponent('IgrGrid')!;

      expect(entry.methods).toHaveLength(1);
      expect(entry.methods[0].name).toBe('selectAllRows');
      expect(entry.methods[0].signature).toContain('emit: boolean');
      expect(entry.methods[0].signature).toContain('void');
    });

    it('extracts events', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      const entry = parser.getComponent('IgrGrid')!;

      expect(entry.events).toHaveLength(1);
      expect(entry.events[0].name).toBe('onRowSelect');
      expect(entry.events[0].type).toBe('EventEmitter');
    });

    it('extracts slots from blockTags', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      const entry = parser.getComponent('IgrGrid')!;

      expect(entry.slots).toHaveLength(1);
      expect(entry.slots[0]).toContain('header');
    });

    it('extracts cssParts from blockTags', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      const entry = parser.getComponent('IgrGrid')!;

      expect(entry.cssParts).toHaveLength(1);
      expect(entry.cssParts[0]).toContain('base');
    });

    it('returns null for an unknown component', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      expect(parser.getComponent('IgrNonExistent')).toBeNull();
    });

    it('returns empty arrays when component has no categories', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      const entry = parser.getComponent('IgrCombo')!;

      expect(entry.properties).toEqual([]);
      expect(entry.methods).toEqual([]);
      expect(entry.events).toEqual([]);
    });
  });

  describe('formatAsMarkdown()', () => {
    it('renders all sections by default', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      const entry = parser.getComponent('IgrGrid')!;
      const md = parser.formatAsMarkdown(entry);

      expect(md).toContain('# class: IgrGrid');
      expect(md).toContain('## Properties');
      expect(md).toContain('## Methods');
      expect(md).toContain('## Events');
      expect(md).toContain('## Slots');
      expect(md).toContain('## CSS Parts');
    });

    it('renders only Properties section when specified', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      const entry = parser.getComponent('IgrGrid')!;
      const md = parser.formatAsMarkdown(entry, 'properties');

      expect(md).toContain('## Properties');
      expect(md).toContain('rowSelection');
      expect(md).not.toContain('## Methods');
      expect(md).not.toContain('## Events');
    });

    it('renders only Methods section when specified', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      const entry = parser.getComponent('IgrGrid')!;
      const md = parser.formatAsMarkdown(entry, 'methods');

      expect(md).toContain('## Methods');
      expect(md).toContain('selectAllRows');
      expect(md).not.toContain('## Properties');
    });

    it('renders only Events section when specified', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      const entry = parser.getComponent('IgrGrid')!;
      const md = parser.formatAsMarkdown(entry, 'events');

      expect(md).toContain('## Events');
      expect(md).toContain('onRowSelect');
      expect(md).not.toContain('## Properties');
    });

    it('includes summary in output', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      const entry = parser.getComponent('IgrGrid')!;
      const md = parser.formatAsMarkdown(entry);

      expect(md).toContain('A powerful data grid component.');
    });

    it('includes type annotations for properties', () => {
      setupFixture();
      const parser = new ReactJsonParser('/fake/path.json');
      const entry = parser.getComponent('IgrGrid')!;
      const md = parser.formatAsMarkdown(entry, 'properties');

      expect(md).toContain('`string`');
      expect(md).toContain('`Array`');
    });
  });
});
