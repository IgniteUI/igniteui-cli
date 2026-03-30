import type { DocEntry, SearchHit } from './types/docs.types.js';

export function searchApiDocs(
  docs: DocEntry[],
  query: string,
  limit: number = 10
): SearchHit[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  const hits: SearchHit[] = [];

  for (const entry of docs) {
    const content = entry.content ?? '';
    const contentLower = content.toLowerCase();

    let matches = 0;
    let firstIdx = -1;

    for (const term of terms) {
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(`\\b${escaped}`, "i");

      const contentMatch = re.exec(contentLower);
      const keywordHit = entry.keywords.some(k => re.test(k));
      const componentHit = re.test(entry.component.toLowerCase());
      const typeHit = re.test(entry.type);

      if (contentMatch || keywordHit || componentHit || typeHit) {
        matches++;
        if (firstIdx === -1 && contentMatch) {
          firstIdx = contentMatch.index;
        }
      }
    }

    if (matches === 0) continue;

    let excerpt: string;
    if (firstIdx !== -1) {
      const start = Math.max(0, firstIdx - 80);
      const end = Math.min(content.length, firstIdx + 80);
      excerpt =
        (start > 0 ? "..." : "") +
        content.slice(start, end).replace(/\n/g, " ") +
        (end < content.length ? "..." : "");
    } else {
      excerpt = entry.summary || "(keyword match)";
    }

    hits.push({ entry, matches, excerpt });
  }

  hits.sort((a, b) => b.matches - a.matches);
  return hits.slice(0, limit);
}

export function extractSection(markdown: string, section: string): string | null {
  const headingMap: Record<string, string[]> = {
    properties: ['properties', 'accessors'],
    methods: ['methods', 'functions'],
    events: ['events', 'outputs', 'fires'],
  };

  const headings = headingMap[section.toLowerCase()] || [];
  if (headings.length === 0) {
    return null;
  }

  const lines = markdown.split(/\r?\n/);
  const matches: string[] = [];
  let currentStart = -1;
  let currentHeading = '';

  for (let index = 0; index < lines.length; index++) {
    const match = lines[index].match(/^##\s+(.+?)\s*$/);
    if (!match) {
      continue;
    }

    const normalizedHeading = match[1].toLowerCase().replace(/\s+/g, ' ').trim();

    if (currentStart !== -1) {
      matches.push(lines.slice(currentStart, index).join('\n').trimEnd());
      currentStart = -1;
      currentHeading = '';
    }

    if (headings.includes(normalizedHeading)) {
      currentStart = index;
      currentHeading = normalizedHeading;
    }
  }

  if (currentStart !== -1 && headings.includes(currentHeading)) {
    matches.push(lines.slice(currentStart).join('\n').trimEnd());
  }

  if (matches.length === 0) {
    return null;
  }

  return matches.join('\n\n');
}