import { describe, expect, it } from 'vitest';
import {
  DEPRECATIONS,
  findDeprecation,
  findDeprecationsInText,
  formatDeprecationNotice,
  withDeprecationNotices,
} from '../../config/deprecations.js';

describe('deprecations', () => {
  const dataGrid = DEPRECATIONS.find(d => d.component === 'IgbDataGrid')!;

  it('lists the component itself among its symbols, without duplicates', () => {
    for (const d of DEPRECATIONS) {
      expect(d.symbols).toContain(d.component);
      expect(new Set(d.symbols).size).toBe(d.symbols.length);
    }
  });

  it('matches symbols case-insensitively and ignores generics', () => {
    expect(findDeprecation('blazor', 'IgbDataGrid')).toBe(dataGrid);
    expect(findDeprecation('blazor', 'igbnumericcolumn')).toBe(dataGrid);
    expect(findDeprecation('blazor', 'IgbDataGridColumn<T>')).toBe(dataGrid);
    expect(findDeprecation(undefined, 'IgbDataGridToolbar')).toBe(dataGrid);
  });

  it('does not match the replacement, prefixes or other frameworks', () => {
    expect(findDeprecation('blazor', 'IgbGrid')).toBeUndefined();
    expect(findDeprecation('blazor', 'IgbColumn')).toBeUndefined();
    expect(findDeprecation('blazor', 'IgbDataGridFoo')).toBeUndefined();
    expect(findDeprecation('react', 'IgbDataGrid')).toBeUndefined();
  });

  it('finds whole-word mentions in free text only', () => {
    expect(findDeprecationsInText('blazor', '<IgbDataGrid Height="100%">')).toEqual([dataGrid]);
    expect(findDeprecationsInText('blazor', 'use IgbGrid and IgbColumn')).toEqual([]);
    expect(findDeprecationsInText('blazor', 'MyIgbDataGridWrapper')).toEqual([]);
    expect(findDeprecationsInText('webcomponents', '<IgbDataGrid>')).toEqual([]);
  });

  it('names the replacement and the related types but not module classes', () => {
    const notice = formatDeprecationNotice(dataGrid);
    expect(notice).toContain('replaced by `IgbGrid`');
    expect(notice).toContain('`IgbTextColumn`');
    expect(notice).not.toContain('IgbTextColumnModule');
  });

  it('prepends a notice only when a scanned text mentions a deprecated symbol', () => {
    expect(withDeprecationNotices('blazor', 'body', ['nothing here'])).toBe('body');
    const withNotice = withDeprecationNotices('blazor', 'body', ['<IgbDataGrid />']);
    expect(withNotice.startsWith('⚠ DEPRECATED')).toBe(true);
    expect(withNotice.endsWith('\n\nbody')).toBe(true);
  });
});
