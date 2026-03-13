import { z } from 'zod';
import { PLATFORMS } from '../config/platforms.js';

export const getApiReferenceSchema = z.object({
  platform: z.enum(PLATFORMS).describe('Platform (angular, react, webcomponents)'),
  component: z.string().describe('Component/class name (e.g., "IgxGridComponent")'),
  section: z.enum(['properties', 'methods', 'events', 'all']).optional().describe('Specific section to return (default: all)')
});

export const searchApiSchema = z.object({
  query: z.string().describe('Search term to find in API docs'),
  platform: z.enum(PLATFORMS).optional().describe('Optional: limit search to specific platform'),
});

export type GetApiReferenceParams = z.infer<typeof getApiReferenceSchema>;
export type SearchApiParams = z.infer<typeof searchApiSchema>;