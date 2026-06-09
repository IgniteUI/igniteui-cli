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

const MEMBER_SECTIONS: ReadonlyArray<{ key: 'property' | 'method' | 'event'; aliases: ReadonlyArray<string> }> = [
  { key: 'property', aliases: ['properties', 'accessors'] },
  { key: 'method', aliases: ['methods', 'functions'] },
  { key: 'event', aliases: ['events', 'outputs', 'fires'] },
];

// Allow TypeScript modifier keywords (static, readonly, static readonly, ...)
// between the bullet marker and the member name in **bold**.
const MEMBER_BULLET_RE = /^\s*[-*]\s+(?:\w+\s+){0,3}\*\*([A-Za-z_$][A-Za-z0-9_$]*)\b/;

export interface MemberMatch {
  section: 'property' | 'method' | 'event';
  name: string;
  line: string;
}

// When the markdown lacks ## Properties / ## Methods / ## Events headings
// (the shape produced by Astro's llms-full.txt), classify each bullet from
// its syntax:
//   - **name**(args): T   → method (signature follows the name)
//   - **name**: `EventEmitter<...>` → event
//   - otherwise           → property
function inferSectionFromBullet(line: string): MemberMatch['section'] {
  const afterName = line.replace(/^.*?\*\*[A-Za-z_$][A-Za-z0-9_$]*\*\*/, '');
  if (afterName.startsWith('(')) return 'method';
  // Angular/WC/React emit events as EventEmitter<T>; Blazor uses EventCallback<T>;
  // Angular signal-based outputs use OutputEmitterRef<T>.
  if (/\b(?:EventEmitter|EventCallback|OutputEmitterRef)\b/.test(afterName)) return 'event';
  return 'property';
}

export function extractMember(markdown: string, member: string): MemberMatch | null {
  const lines = markdown.split(/\r?\n/);
  const memberLower = member.toLowerCase();

  for (const caseInsensitive of [false, true]) {
    let currentSection: MemberMatch['section'] | null = null;

    for (const line of lines) {
      const heading = line.match(/^##\s+(.+?)\s*$/);
      if (heading) {
        const normalized = heading[1].toLowerCase().replace(/\s+/g, ' ').trim();
        currentSection = MEMBER_SECTIONS.find(s => s.aliases.includes(normalized))?.key ?? null;
        continue;
      }

      const bullet = MEMBER_BULLET_RE.exec(line);
      if (!bullet) continue;
      const name = bullet[1].trim();
      const matches = caseInsensitive ? name.toLowerCase() === memberLower : name === member;
      if (matches) {
        const section = currentSection ?? inferSectionFromBullet(line);
        return { section, name, line: line.trim() };
      }
    }
  }

  return null;
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

  if (matches.length > 0) {
    return matches.join('\n\n');
  }

  // Fallback for flat bullet lists (real llms-full.txt shape — no ## headings).
  // Classify each bullet by its syntax and return only those matching the target.
  const sectionKey = section.toLowerCase();
  const targetKind: MemberMatch['section'] | null =
    sectionKey === 'properties' || sectionKey === 'accessors' ? 'property' :
    sectionKey === 'methods'    || sectionKey === 'functions' ? 'method' :
    sectionKey === 'events'     || sectionKey === 'outputs' || sectionKey === 'fires' ? 'event' :
    null;
  if (!targetKind) return null;

  const bullets: string[] = [];
  for (const line of lines) {
    const bullet = MEMBER_BULLET_RE.exec(line);
    if (!bullet) continue;
    if (bullet[1] === 'constructor') continue;
    if (inferSectionFromBullet(line) === targetKind) {
      bullets.push(line.trim());
    }
  }

  return bullets.length > 0 ? bullets.join('\n') : null;
}