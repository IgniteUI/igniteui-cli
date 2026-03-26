import { describe, expect, it } from 'vitest';
import { sanitizeFtsQuery } from '../../lib/fts-sanitizer.js';

describe('sanitizeFtsQuery', () => {
  it('quotes plain terms with OR', () => {
    expect(sanitizeFtsQuery('grid selection')).toBe('"grid" OR "selection"');
  });

  it('quotes a single term', () => {
    expect(sanitizeFtsQuery('grid')).toBe('"grid"');
  });

  it('preserves trailing * for prefix queries without quoting', () => {
    expect(sanitizeFtsQuery('grid*')).toBe('grid*');
  });

  it('handles mix of prefix and plain terms', () => {
    expect(sanitizeFtsQuery('grid* selection')).toBe('grid* OR "selection"');
  });

  it('strips double quotes (FTS4 phrase delimiter)', () => {
    expect(sanitizeFtsQuery('"grid"')).toBe('"grid"');
  });

  it('strips parentheses (FTS4 grouping operators)', () => {
    expect(sanitizeFtsQuery('(grid OR combo)')).toBe('"grid" OR "OR" OR "combo"');
  });

  it('strips colons (FTS4 column filters)', () => {
    expect(sanitizeFtsQuery('title:grid')).toBe('"title" OR "grid"');
  });

  it('strips @ characters (FTS4 internal)', () => {
    expect(sanitizeFtsQuery('@grid')).toBe('"grid"');
  });

  it('strips curly braces and brackets', () => {
    expect(sanitizeFtsQuery('{grid} [combo]')).toBe('"grid" OR "combo"');
  });

  it('preserves hyphens (porter tokenizer handles them)', () => {
    expect(sanitizeFtsQuery('grid-editing')).toBe('"grid-editing"');
  });

  it('drops bare asterisks (would cause FTS4 syntax error)', () => {
    expect(sanitizeFtsQuery('*')).toBe('');
  });

  it('drops multiple asterisks', () => {
    expect(sanitizeFtsQuery('**')).toBe('');
  });

  it('keeps prefix term but drops bare asterisk', () => {
    expect(sanitizeFtsQuery('grid* *')).toBe('grid*');
  });

  it('returns empty string for empty input', () => {
    expect(sanitizeFtsQuery('')).toBe('');
  });

  it('returns empty string for whitespace-only input', () => {
    expect(sanitizeFtsQuery('   ')).toBe('');
  });

  it('returns empty string when all characters are stripped', () => {
    expect(sanitizeFtsQuery('(){}[]"":@')).toBe('');
  });

  it('collapses multiple spaces', () => {
    expect(sanitizeFtsQuery('grid   selection')).toBe('"grid" OR "selection"');
  });

  it('handles realistic user query: column pinning', () => {
    expect(sanitizeFtsQuery('column pinning')).toBe('"column" OR "pinning"');
  });

  it('handles realistic user query: tree* prefix search', () => {
    expect(sanitizeFtsQuery('tree*')).toBe('tree*');
  });

  it('handles realistic user query with special chars injected', () => {
    expect(sanitizeFtsQuery('grid" OR "1=1')).toBe('"grid" OR "OR" OR "1=1"');
  });
});
