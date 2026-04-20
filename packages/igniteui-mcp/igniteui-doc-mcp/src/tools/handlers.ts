import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { ApiDocLoader } from '../lib/api-doc-loader.js';
import { searchApiDocs, extractSection } from '../lib/api-doc-search.js';
import type { GetApiReferenceParams, SearchApiParams } from './schemas.js';
import { getPlatformConfig } from '../config/platforms.js';

export function createGetApiReferenceHandler(docLoader: ApiDocLoader) {
  return async (params: GetApiReferenceParams): Promise<CallToolResult> => {
    const { platform, component, section = 'all' } = params;

    let resolvedComponent = component;
    let entry = docLoader.get(platform, resolvedComponent);

    if (!entry) {
      // Try case-insensitive search within platform
      const results = docLoader.search({ platform, filter: resolvedComponent });
      const caseInsensitive = results.find(
        e => e.component.toLowerCase() === resolvedComponent.toLowerCase()
      );

      if (caseInsensitive) {
        resolvedComponent = caseInsensitive.component;
        entry = caseInsensitive;
      }

      if (!entry) {
        const platformName = getPlatformConfig(platform).displayName;
        return {
          content: [{
            type: "text",
            text: `API reference for "${resolvedComponent}" not found in ${platformName}. Use search_api to find available components.`
          }],
          isError: true,
        };
      }
    }

    const formatted = docLoader.formatStructuredComponent(platform, resolvedComponent, section);
    if (formatted) {
      return { content: [{ type: "text", text: formatted }] };
    }

    const content = entry.content;
    if (!content) {
      return {
        content: [{
          type: "text",
          text: `API content for "${resolvedComponent}" is not available in memory.`
        }],
        isError: true,
      };
    }

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

export function createSearchApiHandler(docLoader: ApiDocLoader) {
  return async (params: SearchApiParams): Promise<CallToolResult> => {
    const { platform, query } = params;

    const docs = docLoader.search({ platform });
    const hits = searchApiDocs(docs, query, 10);

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