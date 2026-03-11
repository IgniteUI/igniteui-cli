import { readFileSync } from 'fs';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { DocLoader } from '../lib/doc-loader.js';
import { searchDocs, extractSection } from '../lib/doc-search.js';
import type { GetApiReferenceParams, SearchApiParams } from './schemas.js';
import { getPlatformConfig } from '../config/platforms.js';

export function createGetApiReferenceHandler(docLoader: DocLoader) {
  return async (params: GetApiReferenceParams): Promise<CallToolResult> => {
    const { platform, component, section = 'all' } = params;

    const entry = docLoader.get(platform, component);

    if (!entry) {
      // Try case-insensitive search within platform
      const results = docLoader.search({ platform, filter: component });
      const caseInsensitive = results.find(
        e => e.component.toLowerCase() === component.toLowerCase()
      );

      if (caseInsensitive) {
        return createGetApiReferenceHandler(docLoader)({
          platform,
          component: caseInsensitive.component,
          section
        });
      }

      const platformName = getPlatformConfig(platform).displayName;
      return {
        content: [{
          type: "text",
          text: `API reference for "${component}" not found in ${platformName}. Use search_api to find available components.`
        }],
        isError: true,
      };
    }

    const content = readFileSync(entry.filepath, "utf-8");

    // Extract specific section if requested
    if (section !== 'all') {
      const extracted = extractSection(content, section);
      if (extracted) {
        const header = `# ${entry.component} (${entry.platform}) - ${section}\n\n`;
        return { content: [{ type: "text", text: header + extracted }] };
      }
    }

    return { content: [{ type: "text", text: content }] };
  };
}

export function createSearchApiHandler(docLoader: DocLoader) {
  return async (params: SearchApiParams): Promise<CallToolResult> => {
    const { platform, query } = params;

    if (!query.trim()) {
      return { content: [{ type: "text", text: "Empty query." }] };
    }

    const docs = docLoader.search({ platform });
    const hits = searchDocs(docs, query, 10);

    if (hits.length === 0) {
      const platformText = platform ? ` in ${getPlatformConfig(platform).displayName}` : '';
      return {
        content: [{
          type: "text",
          text: `No results found for "${query}"${platformText}.`
        }]
      };
    }

    const lines = hits.map(h => {
      const platformTag = `[${h.entry.platform}]`;
      const typeTag = `[${h.entry.type}]`;
      const kwTag = h.entry.keywords.length 
        ? `\nKeywords: ${h.entry.keywords.join(", ")}` 
        : "";
      return `**${h.entry.component}** ${platformTag} ${typeTag} (${h.matches} matches)${kwTag}\n${h.excerpt}`;
    });

    return { content: [{ type: "text", text: lines.join("\n\n") }] };
  };
}