import { getPlatformConfig, type Platform } from './platforms.js';

/**
 * Components that are deprecated in the product but not marked as such in the
 * API reference the MCP is built from (the shipped assembly / docs carry no
 * [Obsolete] or @deprecated marker). Every symbol listed here is dropped from
 * the API index, and any tool asked about one answers with a deprecation
 * notice instead of documentation.
 *
 * Temporary: remove an entry once the upstream API reference flags it.
 */
export interface Deprecation {
  platform: Platform;
  /** The component the notice is about, e.g. "IgbDataGrid". */
  component: string;
  /** What to use instead, e.g. "IgbGrid". */
  replacement: string;
  /** Framework-specific pointer to the replacement, appended to the notice. */
  guidance: string;
  /** Every API symbol to hide: the component plus its columns, helpers and modules. */
  symbols: readonly string[];
}

export const DEPRECATIONS: readonly Deprecation[] = [
  {
    platform: 'blazor',
    component: 'IgbDataGrid',
    replacement: 'IgbGrid',
    guidance:
      'Declare its columns with `IgbColumn`. Look it up with get_api_reference ' +
      '(platform "blazor", component "IgbGrid") or search_docs (framework "blazor", e.g. "grid editing").',
    symbols: [
      'IgbDataGrid',
      'IgbDataGridCellEventArgs',
      'IgbDataGridColumn',
      'IgbDataGridComparisonOperatorSelector',
      'IgbDataGridExpansionIndicator',
      'IgbDataGridFilterDialog',
      'IgbDataGridPager',
      'IgbDataGridSortIndicator',
      'IgbDataGridSummaryResult',
      'IgbDataGridToolbar',
      'IgbDataGridAllColumnsModule',
      'IgbDataGridCoreModule',
      'IgbDataGridLocaleEnModule',
      'IgbDataGridModule',
      'IgbDataGridPagerModule',
      'IgbDataGridToolbarModule',
      // Column types — all derive from IgbDataGridColumn and only work inside IgbDataGrid.
      'IgbComboBoxColumn',
      'IgbDateTimeColumn',
      'IgbImageColumn',
      'IgbNumericColumn',
      'IgbTemplateColumn',
      'IgbTextColumn',
      'IgbComboBoxColumnModule',
      'IgbDateTimeColumnModule',
      'IgbImageColumnModule',
      'IgbNumericColumnModule',
      'IgbTemplateColumnModule',
      'IgbTextColumnModule',
    ],
  },
];

const symbolPatterns = new Map<Deprecation, RegExp>(
  DEPRECATIONS.map(d => [d, new RegExp(`\\b(?:${d.symbols.join('|')})\\b`, 'i')])
);

/** The deprecation covering `symbol` (case-insensitive, generics ignored), if any. */
export function findDeprecation(platform: Platform | undefined, symbol: string): Deprecation | undefined {
  // Generic parameters always trail the name in C#: "IgbCombo<T>" → "IgbCombo".
  const name = symbol.split('<')[0].trim().toLowerCase();
  return DEPRECATIONS.find(
    d => (!platform || d.platform === platform) && d.symbols.some(s => s.toLowerCase() === name)
  );
}

/** Deprecations whose symbols are mentioned anywhere in `texts`. */
export function findDeprecationsInText(platform: Platform | undefined, ...texts: string[]): Deprecation[] {
  return DEPRECATIONS.filter(
    d => (!platform || d.platform === platform) && texts.some(t => symbolPatterns.get(d)!.test(t))
  );
}

// Models fall back on what they learned in training, so the rule also has to
// rule out offering the component as a "legacy" alternative.
const NO_SUGGESTION_RULE =
  'not even as a legacy option or an alternative, and not for settings that only exist on it. ' +
  "If the user's existing code already uses it, recommend migrating.";

export function formatDeprecationNotice(d: Deprecation): string {
  // Module classes are registration plumbing; naming them adds noise without steering anyone.
  const related = d.symbols.filter(s => s !== d.component && !s.endsWith('Module'));
  return (
    `⚠ DEPRECATED: \`${d.component}\` (${getPlatformConfig(d.platform).displayName}) is deprecated and has been ` +
    `replaced by \`${d.replacement}\`. It receives no new features and bug fixes are deprioritized. ` +
    `Do not suggest \`${d.component}\` or its related types (${related.map(s => `\`${s}\``).join(', ')}) — ` +
    `${NO_SUGGESTION_RULE} Use \`${d.replacement}\` instead. ${d.guidance}`
  );
}

/** The deprecations as a server-instructions paragraph, so clients know before any tool call. */
export function formatDeprecationInstructions(): string {
  if (DEPRECATIONS.length === 0) return '';
  const items = DEPRECATIONS.map(
    d => `${d.component} (${getPlatformConfig(d.platform).displayName}) → use ${d.replacement}`
  );
  return `DEPRECATED COMPONENTS: never suggest ${items.join('; ')} — ${NO_SUGGESTION_RULE}`;
}

/** Prepends to `body` a notice for every deprecation mentioned in `scanned`. */
export function withDeprecationNotices(platform: Platform | undefined, body: string, scanned: string[]): string {
  const found = findDeprecationsInText(platform, ...scanned);
  if (found.length === 0) return body;
  return `${found.map(formatDeprecationNotice).join('\n\n')}\n\n${body}`;
}
