import { z } from 'zod';
import { PLATFORMS } from '../config/platforms.js';

const MAX_COMPONENT_LENGTH = 128;
const MAX_QUERY_LENGTH = 256;

export const getApiReferenceSchema = z.object({
  platform: z.enum(PLATFORMS).describe('Platform to look up: angular, react, webcomponents, or blazor.'),
  component: z
    .string()
    .trim()
    .min(1, 'Component name is required')
    .max(MAX_COMPONENT_LENGTH, `Component name must be at most ${MAX_COMPONENT_LENGTH} characters`)
    .describe('Component or class name (case-insensitive). Use the exact name returned by search_api. Examples: "IgxGridComponent", "IgrGrid", "IgcSelect"'),
  section: z.enum(['properties', 'methods', 'events', 'all']).default('all').describe('Section to return: "properties" (types and descriptions), "methods" (signatures and docs), "events" (names and descriptions), or "all" (full entry). Defaults to "all". Use a specific section to reduce response size. Ignored when "member" is also supplied.'),
  member: z
    .string()
    .trim()
    .max(MAX_COMPONENT_LENGTH, `Member name must be at most ${MAX_COMPONENT_LENGTH} characters`)
    .optional()
    .describe('Optional member name (property, method, or event) to return only that entry instead of the full component. Examples: "checked", "click", "igcChange". Takes precedence over "section" when both are supplied. Omit it (do not pass an empty string) to get the full component or section; an empty/whitespace value is treated as omitted.')
});

export const searchApiSchema = z.object({
  query: z
    .string()
    .trim()
    .min(1, 'Search query is required')
    .max(MAX_QUERY_LENGTH, `Search query must be at most ${MAX_QUERY_LENGTH} characters`)
    .describe('Keyword, feature name, or partial component name. Matches against component names, keywords, API type, and content. Partial names work. Examples: "grid virtualization", "IgxCombo", "drag drop", "selection"'),
  platform: z.enum(PLATFORMS).optional().describe('Limit results to one platform (angular, react, webcomponents, or blazor). Omit to search all platforms simultaneously.'),
});

const MAX_IMPORT_SYMBOLS = 50;
const IMPORT_KEYWORDS = new Set(['import', 'export', 'type', 'typeof']);

/**
 * Agents send more than bare names: a JSON array serialized as a string,
 * `type IGridEditEventArgs` copied from a type-only import, `X as Y`, or a whole
 * pasted import statement. Reduce all of those to the symbol names.
 */
export function extractSymbolNames(value: unknown): unknown {
  let input = value;
  if (typeof input === 'string' && input.trim().startsWith('[')) {
    try {
      input = JSON.parse(input);
    } catch {
      // not JSON — tokenized as plain text below
    }
  }
  const items = typeof input === 'string' ? [input] : input;
  if (!Array.isArray(items) || items.some(item => typeof item !== 'string')) return input;

  const names: string[] = [];
  for (const item of items as string[]) {
    let text = item.replace(/\bfrom\s*(['"`]).*?\1/g, ' ');
    while (/<[^<>]*>/.test(text)) text = text.replace(/<[^<>]*>/g, '');
    const tokens = text.split(/[\s,;{}[\]"'`]+/).filter(Boolean);
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === 'as') {
        i++;
      } else if (!IMPORT_KEYWORDS.has(tokens[i])) {
        names.push(tokens[i]);
      }
    }
  }
  return names;
}

export const resolveImportSchema = z.object({
  symbols: z
    .preprocess(
      extractSymbolNames,
      z
        .array(z.string().trim().max(MAX_COMPONENT_LENGTH, `Symbol names must be at most ${MAX_COMPONENT_LENGTH} characters`))
        .transform(list => [...new Set(list.filter(Boolean))])
        .pipe(z.array(z.string()).min(1, 'At least one symbol is required').max(MAX_IMPORT_SYMBOLS, `At most ${MAX_IMPORT_SYMBOLS} symbols per call`))
    )
    .describe('Exported symbol names to resolve — components, directives, modules, services, interfaces, enums, types or constants. Pass every symbol a file needs in one call; `type` prefixes and pasted import statements are accepted. Examples: ["IgxGridComponent", "IgxColumnComponent", "IGX_GRID_DIRECTIVES"], ["IgrGrid"], ["IgcButtonComponent"], ["IgbGrid"]'),
  platform: z.enum(PLATFORMS).optional().describe('Platform to resolve against: angular, react, webcomponents, or blazor. Optional — inferred per symbol from the Igx/Igr/Igc/Igb prefix. Pass it for symbols without a prefix (e.g. "GridSelectionMode", "IGridState"), otherwise every platform is searched.'),
});

export type GetApiReferenceParams = z.infer<typeof getApiReferenceSchema>;
export type SearchApiParams = z.infer<typeof searchApiSchema>;
export type ResolveImportParams = z.infer<typeof resolveImportSchema>;
