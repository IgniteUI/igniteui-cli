import type { DocsProvider } from '../providers/DocsProvider.js';
import { BLAZOR_DOTNET_GUIDE, SETUP_DOCS, SETUP_MD } from './constants.js';

export const MISSING_FRAMEWORK_MESSAGE =
  'Which framework are you using? Please specify one of: angular, react, blazor, or webcomponents.';

// Sanitize user input for FTS4 MATCH syntax.
// Strip characters that are FTS4 operators or cause syntax errors:
//   " (phrase delimiter), ( ) (grouping), : (column filter), @ (internal)
// Preserve hyphens — the porter tokenizer handles them consistently
// at both index and query time (e.g. "grid-editing" stays as one phrase).
// Preserve trailing * — FTS4 prefix queries (e.g. grid*) rely on it,
// and the DB is built with prefix="2,3" indexes to support this.
export function sanitizeSearchDocsQuery(queryText: string): string | null {
  const sanitized = queryText
    .replace(/["(){}[\]:@]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((term) => {
      // Terms ending with * are prefix queries — don't quote them
      // because FTS4 treats "grid*" as a literal match for the
      // asterisk character, while unquoted grid* does prefix expansion.
      // Drop terms that are only asterisks (e.g. *, **) — they have
      // no actual prefix and would cause an FTS4 syntax error.
      if (term.endsWith('*')) {
        return /[^*]/.test(term) ? term : null;
      }

      return `"${term}"`;
    })
    .filter((term): term is string => Boolean(term))
    .join(' OR ');

  return sanitized || null;
}

// Build the setup-guide response for the requested framework.
// For Blazor, combine the base .NET guide with any MCP-fetched docs
// that are available for the configured setup document names.
// For other frameworks, return the static setup markdown when present,
// otherwise fall back to a simple "not available" message.
export async function buildProjectSetupGuide(
  docsProvider: DocsProvider,
  framework?: string,
): Promise<string> {
  if (!framework) {
    return MISSING_FRAMEWORK_MESSAGE;
  }

  if (framework === 'blazor') {
    const docNames = SETUP_DOCS.blazor || [];
    const sections: string[] = [BLAZOR_DOTNET_GUIDE];

    for (const name of docNames) {
      const { text, found } = await docsProvider.getDoc(framework, name);
      if (found) {
        sections.push(text);
      }
    }

    return sections.join('\n\n---\n\n');
  }

  return (
    SETUP_MD[framework] ??
    `No setup guide available for framework: ${framework}`
  );
}