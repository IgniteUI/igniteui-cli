import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { PLATFORMS, type Platform } from '../config/platforms.js';
import { stripGenerics, type ApiDocLoader } from './api-doc-loader.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEFAULT_MAP_DIR = join(__dirname, '..', '..', 'data', 'import-map');

export interface ImportMapSymbol {
  module: string;
  kind?: string;
}

export interface ImportMapFile {
  platform: string;
  sources: Record<string, string>;
  symbols: Record<string, ImportMapSymbol>;
}

export type ImportMaps = Partial<Record<Platform, Record<string, ImportMapSymbol>>>;

export interface ResolvedImport {
  symbol: string;
  platform: Platform;
  module: string;
  kind?: string;
  /** Other packages that ship the same symbol (e.g. the Blazor Lite package). */
  alsoIn?: string[];
}

export interface ResolveResult {
  query: string;
  matches: ResolvedImport[];
  suggestions: string[];
}

// Packages whose public API lives under a subpath rather than the package root.
const PACKAGE_MODULE_OVERRIDES: Record<string, string> = {
  'igniteui-webcomponents-grids': 'igniteui-webcomponents-grids/grids',
};

// Symbols in the main Angular package must come from the entry-point map; an
// API-docs-only hit there is a symbol from an older release that no longer exists.
const ENTRY_POINT_PACKAGES: Partial<Record<Platform, string>> = {
  angular: 'igniteui-angular',
};

const SUFFIXES = ['Component', 'Directive', 'Module', 'Service', 'Pipe'];

export function loadImportMaps(dir: string = DEFAULT_MAP_DIR): ImportMaps {
  const maps: ImportMaps = {};
  for (const platform of PLATFORMS) {
    const file = join(dir, `${platform}.json`);
    if (!existsSync(file)) continue;
    try {
      const parsed = JSON.parse(readFileSync(file, 'utf-8')) as ImportMapFile;
      maps[platform] = parsed.symbols ?? {};
    } catch (err) {
      console.error(`   ⚠ Failed to read import map ${file}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }
  return maps;
}

const PREFIX_PLATFORMS: Record<string, Platform> = { x: 'angular', r: 'react', c: 'webcomponents', b: 'blazor' };

/**
 * Igx/Igr/Igc/Igb prefix (any case, e.g. "igxgridcomponent") or IGX_ constants.
 * "IGridState"-style interface names start with I + capital and carry no prefix.
 */
export function inferPlatform(symbol: string): Platform | undefined {
  const match = /^ig([xrcb])(?=[A-Z_]|[a-z]*$)/i.exec(symbol);
  if (!match || (/^I[A-Z]/.test(symbol) && !/^IG[XRCB]_/.test(symbol))) return undefined;
  return PREFIX_PLATFORMS[match[1].toLowerCase()];
}

function editDistance(a: string, b: string): number {
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let diag = prev[0];
    prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
      diag = tmp;
    }
  }
  return prev[b.length];
}

function stripSuffix(name: string): string {
  const suffix = SUFFIXES.find(s => name.endsWith(s) && name.length > s.length);
  return suffix ? name.slice(0, -suffix.length) : name;
}

export class ImportResolver {
  private byLowerName = new Map<Platform, Map<string, string>>();
  private names = new Map<Platform, string[]>();

  constructor(private docLoader: ApiDocLoader, private maps: ImportMaps = loadImportMaps()) {}

  resolve(query: string, platform?: Platform): ResolveResult {
    const symbol = stripGenerics(query.trim());
    const platforms = platform ? [platform] : [inferPlatform(symbol) ?? PLATFORMS].flat();

    const matches: ResolvedImport[] = [];
    for (const p of platforms) {
      const match = this.resolveOn(symbol, p);
      if (match) matches.push(match);
    }

    return {
      query,
      matches,
      suggestions: matches.length > 0 ? [] : this.suggest(symbol, platforms),
    };
  }

  private resolveOn(symbol: string, platform: Platform): ResolvedImport | undefined {
    const map = this.maps[platform] ?? {};
    const exact = map[symbol] ? symbol : this.lowerIndex(platform).get(symbol.toLowerCase());
    if (exact && map[exact]) {
      return { symbol: exact, platform, ...map[exact] };
    }

    const entry = this.docLoader.get(platform, symbol);
    if (!entry) return undefined;
    // Shortest id first so the main package leads (IgniteUI.Blazor before IgniteUI.Blazor.Lite).
    const modules = this.docLoader
      .getPackages(entry)
      .filter(p => p !== ENTRY_POINT_PACKAGES[platform])
      .sort((a, b) => a.length - b.length || a.localeCompare(b))
      .map(p => PACKAGE_MODULE_OVERRIDES[p] ?? p);
    if (modules.length === 0) return undefined;
    return {
      symbol: stripGenerics(entry.component),
      platform,
      module: modules[0],
      kind: entry.type,
      ...(modules.length > 1 ? { alsoIn: modules.slice(1) } : {}),
    };
  }

  private lowerIndex(platform: Platform): Map<string, string> {
    let index = this.byLowerName.get(platform);
    if (!index) {
      index = new Map(Object.keys(this.maps[platform] ?? {}).map(n => [n.toLowerCase(), n]));
      this.byLowerName.set(platform, index);
    }
    return index;
  }

  private allNames(platform: Platform): string[] {
    let names = this.names.get(platform);
    if (!names) {
      const fromDocs = this.docLoader
        .search({ platform })
        .filter(e => e.package !== ENTRY_POINT_PACKAGES[platform])
        .map(e => stripGenerics(e.component));
      names = [...new Set([...Object.keys(this.maps[platform] ?? {}), ...fromDocs])];
      this.names.set(platform, names);
    }
    return names;
  }

  private suggest(symbol: string, platforms: Platform[], limit = 5): string[] {
    const lower = symbol.toLowerCase();
    const base = stripSuffix(symbol).toLowerCase();
    const scored: { name: string; score: number }[] = [];

    for (const platform of platforms) {
      for (const name of this.allNames(platform)) {
        const nameLower = name.toLowerCase();
        let score: number;
        if (stripSuffix(name).toLowerCase() === base) {
          score = 0;
        } else if (nameLower.startsWith(lower) || (base.length >= 3 && nameLower.includes(base))) {
          score = 1 + (name.length - symbol.length) / 100;
        } else {
          const distance = editDistance(lower, nameLower);
          if (distance > Math.max(2, Math.floor(symbol.length / 4))) continue;
          score = 2 + distance;
        }
        scored.push({ name, score });
      }
    }

    return [...new Set(
      scored.sort((a, b) => a.score - b.score || a.name.localeCompare(b.name)).map(s => s.name)
    )].slice(0, limit);
  }
}
