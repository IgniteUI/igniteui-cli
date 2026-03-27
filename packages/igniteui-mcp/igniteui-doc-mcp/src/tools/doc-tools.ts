import type { DocsProvider } from '../providers/DocsProvider.js';
import { BLAZOR_DOTNET_GUIDE, SETUP_DOCS, SETUP_MD } from './constants.js';

export const MISSING_FRAMEWORK_MESSAGE =
  'Which framework are you using? Please specify one of: angular, react, blazor, or webcomponents.';

export function sanitizeSearchDocsQuery(queryText: string): string | null {
  const sanitized = queryText
    .replace(/["(){}[\]:@]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((term) => {
      if (term.endsWith('*')) {
        return /[^*]/.test(term) ? term : null;
      }

      return `"${term}"`;
    })
    .filter((term): term is string => Boolean(term))
    .join(' OR ');

  return sanitized || null;
}

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
