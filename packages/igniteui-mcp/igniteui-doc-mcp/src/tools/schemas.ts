import { z } from 'zod';
import { PLATFORMS } from '../config/platforms.js';

const MAX_COMPONENT_LENGTH = 128;
const MAX_QUERY_LENGTH = 256;

export const getApiReferenceSchema = z.object({
  platform: z.enum(PLATFORMS).describe('Platform to look up: angular, react, or webcomponents. Blazor is currently not supported by this tool.'),
  component: z
    .string()
    .trim()
    .min(1, 'Component name is required')
    .max(MAX_COMPONENT_LENGTH, `Component name must be at most ${MAX_COMPONENT_LENGTH} characters`)
    .describe('Component or class name (case-insensitive). Use the exact name returned by search_api. Examples: "IgxGridComponent", "IgrGrid", "IgcSelect"'),
  section: z.enum(['properties', 'methods', 'events', 'all']).default('all').describe('Section to return: "properties" (types and descriptions), "methods" (signatures and docs), "events" (names and descriptions), or "all" (full entry). Defaults to "all". Use a specific section to reduce response size.')
});

export const searchApiSchema = z.object({
  query: z
    .string()
    .trim()
    .min(1, 'Search query is required')
    .max(MAX_QUERY_LENGTH, `Search query must be at most ${MAX_QUERY_LENGTH} characters`)
    .describe('Keyword, feature name, or partial component name. Matches against component names, keywords, API type, and content. Partial names work. Examples: "grid virtualization", "IgxCombo", "drag drop", "selection"'),
  platform: z.enum(PLATFORMS).optional().describe('Limit results to one platform (angular, react, or webcomponents). Omit to search all platforms simultaneously.'),
});

export type GetApiReferenceParams = z.infer<typeof getApiReferenceSchema>;
export type SearchApiParams = z.infer<typeof searchApiSchema>;