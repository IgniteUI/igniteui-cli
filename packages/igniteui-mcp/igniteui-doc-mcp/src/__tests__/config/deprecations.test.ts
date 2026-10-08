import { describe, expect, it } from 'vitest';
import {
  DEPRECATIONS,
  findDeprecation,
  findDeprecationsInText,
  formatDeprecationInstructions,
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

  it('covers the enums and event args only the deprecated component uses', () => {
    expect(findDeprecation('blazor', 'EditModeClickAction')).toBe(dataGrid);
    expect(findDeprecation('blazor', 'DataGridSelectionMode')).toBe(dataGrid);
    expect(findDeprecation('blazor', 'IgbGridCellEditStartedEventArgs')).toBe(dataGrid);
    // Shared with live components — must stay visible.
    expect(findDeprecation('blazor', 'MouseButton')).toBeUndefined();
    expect(findDeprecation('blazor', 'GridSelectionMode')).toBeUndefined();
  });

  it('matches unprefixed names only when the platform is known', () => {
    // DataGridSelectionMode also ships in the React and Web Components data-grid packages.
    expect(findDeprecation(undefined, 'DataGridSelectionMode')).toBeUndefined();
    expect(findDeprecation('react', 'DataGridSelectionMode')).toBeUndefined();
    expect(findDeprecation(undefined, 'IgbGridCellEditStartedEventArgs')).toBe(dataGrid);
    expect(findDeprecationsInText(undefined, 'DataGridSelectionMode')).toEqual([]);
    expect(findDeprecationsInText('blazor', 'DataGridSelectionMode')).toEqual([dataGrid]);
  });

  it('finds whole-word mentions in free text only', () => {
    expect(findDeprecationsInText('blazor', '<IgbDataGrid Height="100%">')).toEqual([dataGrid]);
    expect(findDeprecationsInText('blazor', 'use IgbGrid and IgbColumn')).toEqual([]);
    expect(findDeprecationsInText('blazor', 'MyIgbDataGridWrapper')).toEqual([]);
    expect(findDeprecationsInText('webcomponents', '<IgbDataGrid>')).toEqual([]);
  });

  it('names the replacement and steers away from the old column types', () => {
    const notice = formatDeprecationNotice(dataGrid);
    expect(notice).toContain('replaced by `IgbGrid`');
    expect(notice).toContain('`IgbColumn`, not `IgbTextColumn`');
    expect(notice).not.toContain('Part of its API');
  });

  it('names the requested symbols that belong to the component, in their canonical case', () => {
    const notice = formatDeprecationNotice(dataGrid, ['editmodeclickaction', 'IgbDataGrid', 'IgbGrid']);
    expect(notice).toContain('Part of its API: `EditModeClickAction`.');
  });

  it('rules out offering the component as a legacy alternative', () => {
    expect(formatDeprecationNotice(dataGrid)).toContain('not even as a legacy option');
  });

  it('summarizes every deprecation for the server instructions', () => {
    const instructions = formatDeprecationInstructions();
    expect(instructions).toContain('never suggest IgbDataGrid (Blazor) → use IgbGrid');
    expect(instructions).toContain('not even as a legacy option');
  });

  it('prepends a notice only when a scanned text mentions a deprecated symbol', () => {
    expect(withDeprecationNotices('blazor', 'body', ['nothing here'])).toBe('body');
    const withNotice = withDeprecationNotices('blazor', 'body', ['<IgbDataGrid />']);
    expect(withNotice.startsWith('⚠ DEPRECATED')).toBe(true);
    expect(withNotice.endsWith('\n\nbody')).toBe(true);
  });
});
