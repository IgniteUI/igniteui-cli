import { readFileSync } from 'fs';
import type { DocEntry } from './doc-loader.js';

export interface SearchHit {
  entry: DocEntry;
  matches: number;
  excerpt: string;
}

export function searchDocs(
  docs: DocEntry[],
  query: string,
  limit: number = 10
): SearchHit[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  const hits: SearchHit[] = [];

  for (const entry of docs) {
    const content = readFileSync(entry.filepath, "utf-8");
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
    properties: ['## Properties', '## Accessors'],
    methods: ['## Methods', '## Functions'],
    events: ['## Events', '## Outputs'],
  };

  const headings = headingMap[section] || [];

  for (const heading of headings) {
    const regex = new RegExp(`^${heading}[\\s\\S]*?(?=^## |$)`, 'im');
    const match = markdown.match(regex);
    if (match) return match[0];
  }

  return null;
}