import { z } from 'zod';
import { PLATFORMS } from '../config/platforms.js';

const MAX_COMPONENT_LENGTH = 128;
const MAX_QUERY_LENGTH = 256;

export const getApiReferenceSchema = z.object({
  platform: z.enum(PLATFORMS).describe('Platform (angular, react, webcomponents)'),
  component: z
    .string()
    .trim()
    .min(1, 'Component name is required')
    .max(MAX_COMPONENT_LENGTH, `Component name must be at most ${MAX_COMPONENT_LENGTH} characters`)
    .describe('Component/class name (e.g., "IgxGridComponent")'),
  section: z.enum(['properties', 'methods', 'events', 'all']).optional().describe('Specific section to return (default: all)')
});

export const searchApiSchema = z.object({
  query: z
    .string()
    .trim()
    .min(1, 'Search query is required')
    .max(MAX_QUERY_LENGTH, `Search query must be at most ${MAX_QUERY_LENGTH} characters`)
    .describe('Search term to find in API docs'),
  platform: z.enum(PLATFORMS).optional().describe('Optional: limit search to specific platform'),
});

export type GetApiReferenceParams = z.infer<typeof getApiReferenceSchema>;
export type SearchApiParams = z.infer<typeof searchApiSchema>;