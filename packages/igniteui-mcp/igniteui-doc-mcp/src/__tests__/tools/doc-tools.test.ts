import { describe, expect, it } from 'vitest';
import { sanitizeSearchDocsQuery } from '../../tools/doc-tools.js';

describe('sanitizeSearchDocsQuery', () => {
  it('quotes plain terms with OR', () => {
    expect(sanitizeSearchDocsQuery('grid selection')).toBe('"grid" OR "selection"');
  });

  it('quotes a single term', () => {
    expect(sanitizeSearchDocsQuery('grid')).toBe('"grid"');
  });

  it('preserves trailing * for prefix queries without quoting', () => {
    expect(sanitizeSearchDocsQuery('grid*')).toBe('grid*');
  });

  it('handles mix of prefix and plain terms', () => {
    expect(sanitizeSearchDocsQuery('grid* selection')).toBe('grid* OR "selection"');
  });

  it('strips double quotes (FTS4 phrase delimiter)', () => {
    expect(sanitizeSearchDocsQuery('"grid"')).toBe('"grid"');
  });

  it('strips parentheses (FTS4 grouping operators)', () => {
    expect(sanitizeSearchDocsQuery('(grid OR combo)')).toBe('"grid" OR "OR" OR "combo"');
  });

  it('strips colons (FTS4 column filters)', () => {
    expect(sanitizeSearchDocsQuery('title:grid')).toBe('"title" OR "grid"');
  });

  it('strips @ characters (FTS4 internal)', () => {
    expect(sanitizeSearchDocsQuery('@grid')).toBe('"grid"');
  });

  it('strips curly braces and brackets', () => {
    expect(sanitizeSearchDocsQuery('{grid} [combo]')).toBe('"grid" OR "combo"');
  });

  it('preserves hyphens (porter tokenizer handles them)', () => {
    expect(sanitizeSearchDocsQuery('grid-editing')).toBe('"grid-editing"');
  });

  it('drops bare asterisks (would cause FTS4 syntax error)', () => {
    expect(sanitizeSearchDocsQuery('*')).toBe(null);
  });

  it('drops multiple asterisks', () => {
    expect(sanitizeSearchDocsQuery('**')).toBe(null);
  });

  it('keeps prefix term but drops bare asterisk', () => {
    expect(sanitizeSearchDocsQuery('grid* *')).toBe('grid*');
  });

  it('returns null for empty input', () => {
    expect(sanitizeSearchDocsQuery('')).toBe(null);
  });

  it('returns null for whitespace-only input', () => {
    expect(sanitizeSearchDocsQuery('   ')).toBe(null);
  });

  it('returns null when all characters are stripped', () => {
    expect(sanitizeSearchDocsQuery('(){}[]"":@')).toBe(null);
  });

  it('collapses multiple spaces', () => {
    expect(sanitizeSearchDocsQuery('grid   selection')).toBe('"grid" OR "selection"');
  });

  it('handles realistic user query: column pinning', () => {
    expect(sanitizeSearchDocsQuery('column pinning')).toBe('"column" OR "pinning"');
  });

  it('handles realistic user query: tree* prefix search', () => {
    expect(sanitizeSearchDocsQuery('tree*')).toBe('tree*');
  });

  it('handles realistic user query with special chars injected', () => {
    expect(sanitizeSearchDocsQuery('grid" OR "1=1')).toBe('"grid" OR "OR" OR "1=1"');
  });
});
