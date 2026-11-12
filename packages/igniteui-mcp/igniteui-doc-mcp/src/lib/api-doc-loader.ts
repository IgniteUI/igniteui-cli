import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { Platform, PlatformConfig } from '../config/platforms.js';
import { findDeprecation } from '../config/deprecations.js';
import type { DocEntry } from './types/docs.types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export class ApiDocsInitializationError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, { cause: options?.cause });
    this.name = 'ApiDocsInitializationError';
  }
}

/** Drop a generic type parameter list: "IgbCombo<T>" → "IgbCombo". */
export function stripGenerics(name: string): string {
  return name.replace(/<[^>]*>/g, '').trim();
}

/**
 * Orders snapshot folder names by version: "9.0.x" < "15.1.x" < "22.0.0" < "latest".
 * An "x" segment counts as 0.
 */
export function compareVersionNames(a: string, b: string): number {
  if (a === b) return 0;
  if (a === 'latest') return 1;
  if (b === 'latest') return -1;
  const pa = a.split('.').map(s => Number.parseInt(s, 10) || 0);
  const pb = b.split('.').map(s => Number.parseInt(s, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return a.localeCompare(b);
}

/**
 * The release a snapshot was generated from. The "Version:" header is the real
 * one ("7.4.1"); the folder is only a URL segment ("7.4.0", "7.3"). Older
 * snapshots carry no usable version at all ("latest").
 */
export function snapshotVersion(content: string, folderName: string): string | undefined {
  const header = content.match(/^Version:\s*(\S+)/m)?.[1];
  return [header, folderName].find(v => v && /^\d/.test(v));
}

export class ApiDocLoader {
  private docs = new Map<string, DocEntry>();
  // Secondary index keyed by lower-cased, generic-stripped name ("blazor:igbcombo"
  // for IgbCombo<T>), so callers can use the plain class name the docs refer to.
  private docsByBaseName = new Map<string, DocEntry>();
  // Every package a name appears in; the exact-name map keeps only the last one loaded.
  private packagesByKey = new Map<string, Set<string>>();
  private versionsByPackage = new Map<string, string>();
  private platformConfigs: PlatformConfig[];

  constructor(platformConfigs: PlatformConfig[]) {
    this.platformConfigs = platformConfigs;
  }

  load(): void {
    for (const config of this.platformConfigs) {
      this.loadPlatform(config);
    }

    if (this.docs.size > 0) {
      console.error(`Loaded ${this.docs.size} API entries across ${this.platformConfigs.length} platforms`);
    }
  }

  private loadPlatform(config: PlatformConfig): void {
    try {
      this.parseLlmsFullTxt(config);
    } catch (err) {
      if (err instanceof ApiDocsInitializationError) {
        console.error(`   ⚠ ${config.displayName}: API reference not available (get_api_reference and search_api tools will skip this framework)`);
      } else {
        throw err;
      }
    }
  }

  /**
   * Loads API docs from pre-built llms-full.txt files.
   * Expected layout: docs/{platform}-api/{package}/{version}/llms-full.txt
   * Only the newest {version} of each package is loaded.
   * Each file is split on "### [" headings — one DocEntry per component.
   */
  private parseLlmsFullTxt(config: PlatformConfig): void {
    const docsPath = join(__dirname, '..', '..', config.apiSource.docsPath);

    if (!existsSync(docsPath)) {
      const buildScriptMap: Record<string, string> = {
        webcomponents: 'wc-api',
        react: 'react-api',
        angular: 'angular-api',
        blazor: 'blazor-api',
      };
      const buildScript = buildScriptMap[config.key] ?? config.key;
      throw new ApiDocsInitializationError(
        `${config.displayName} API docs not found at ${docsPath}. Run: npm run build:docs:${buildScript}`
      );
    }

    let count = 0;

    // Walk {docsPath}/{package}/{version}/llms-full.txt
    for (const pkgName of readdirSync(docsPath)) {
      const pkgDir = join(docsPath, pkgName);
      if (!statSync(pkgDir).isDirectory()) continue;

      // Only the newest snapshot is served; older ones would shadow or add stale names.
      const versionName = this.newestVersion(pkgDir);
      if (versionName) {
        const llmsFile = join(pkgDir, versionName, 'llms-full.txt');

        let content: string;
        try {
          content = readFileSync(llmsFile, 'utf-8');
        } catch (err) {
          throw new ApiDocsInitializationError(
            `Failed to read ${llmsFile}: ${err instanceof Error ? err.message : String(err)}`,
            { cause: err }
          );
        }

        const packageName = content.match(/^Package:\s*(\S+)/m)?.[1] ?? pkgName;
        const packageVersion = snapshotVersion(content, versionName);
        if (packageVersion) this.versionsByPackage.set(`${config.key}:${packageName}`, packageVersion);

        // Split on "### [ComponentName](url)" headings
        // Each chunk starts with the heading line and contains the member list
        const chunks = content.split(/(?=^### \[)/m).filter(c => c.trim());

        for (const chunk of chunks) {
          // Extract component name from heading: "### [IgxGridComponent](url)"
          const headingMatch = chunk.match(/^### \[([^\]]+)\]/);
          if (!headingMatch) continue;

          const componentName = headingMatch[1].trim();

          // Deprecated components are not indexed; the handlers answer for them with a notice.
          if (findDeprecation(config.key, componentName)) continue;

          // Determine type from name prefix / chunk content
          const type = this.inferComponentType(chunk, config.key);

          // Extract first line of prose as summary (skip the heading itself)
          const bodyLines = chunk.split('\n').slice(1);
          const summaryLine = bodyLines.find(l => l.trim() && !l.startsWith('-') && !l.startsWith('#')) ?? '';

          // Keywords: component name parts split by camelCase
          // Strip known platform prefixes (Igb for Blazor, Igc for WC, Igr for React, Igx for Angular) and Component suffix
          const keywords = componentName
            .replace(/^Ig[bcrx]/, '')
            .replace(/Component$/, '')
            .split(/(?=[A-Z])/)
            .map(w => w.toLowerCase())
            .filter(Boolean);

          const key = `${config.key}:${componentName}`;
          const entry: DocEntry = {
            filepath: llmsFile,
            content: chunk,
            title: componentName,
            component: componentName,
            type,
            keywords,
            summary: summaryLine.trim(),
            platform: config.key,
            package: packageName,
            version: packageVersion,
          };
          this.docs.set(key, entry);
          this.indexBaseName(config.key, componentName, entry);
          const packages = this.packagesByKey.get(key) ?? new Set<string>();
          this.packagesByKey.set(key, packages.add(packageName));
          count++;
        }
      }
    }

    if (count === 0) {
      throw new ApiDocsInitializationError(
        `No ${config.displayName} API entries found in ${docsPath}. Ensure the Astro build has been run.`
      );
    }

    console.error(`   ${config.displayName}: ${count} entries (from llms-full.txt)`);
  }

  private newestVersion(pkgDir: string): string | undefined {
    const versions = readdirSync(pkgDir).filter(name => {
      const dir = join(pkgDir, name);
      return statSync(dir).isDirectory() && existsSync(join(dir, 'llms-full.txt'));
    });
    return versions.sort(compareVersionNames).at(-1);
  }

  private inferComponentType(chunk: string, platform: string): string {
    const heading = chunk.split('\n')[0];
    if (/enum/i.test(heading)) return 'enum';
    if (platform === 'blazor') {
      if (/^### \[Igb\w+EventArgs\]/.test(heading)) return 'interface';
      if (/^### \[Igb\w+Options\]/.test(heading)) return 'interface';
    }
    if (platform === 'webcomponents') {
      if (/^### \[Igc\w+EventArgs\]/.test(heading)) return 'interface';
      if (/interface/i.test(heading)) return 'interface';
    }
    if (platform === 'react') {
      if (/interface/i.test(heading)) return 'interface';
    }
    if (platform === 'angular') {
      // Angular interfaces conventionally start with I + uppercase (e.g., IGridState, IScrollStrategy)
      // while class names starting with Igx have a lowercase g (e.g., IgxGridComponent)
      if (/^### \[I[A-Z]/.test(heading)) return 'interface';
    }
    return 'class';
  }

  /**
   * Register an entry under its base name. Later entries replace earlier ones,
   * mirroring the exact-name map, except that a non-generic name is never
   * shadowed by a generic one (Blazor has both DynamicContentInfo and
   * DynamicContentInfo<T>).
   */
  private indexBaseName(platform: string, componentName: string, entry: DocEntry): void {
    const base = stripGenerics(componentName);
    const key = `${platform}:${base.toLowerCase()}`;
    const existing = this.docsByBaseName.get(key);
    const existingIsGeneric = existing !== undefined && stripGenerics(existing.component) !== existing.component;
    if (!existing || existingIsGeneric || base === componentName) {
      this.docsByBaseName.set(key, entry);
    }
  }

  /**
   * Exact lookup first; then a case-insensitive, generic-stripped lookup so
   * "IgbCombo" (or "igbcombo") resolves to the indexed "IgbCombo<T>".
   */
  get(platform: Platform, name: string): DocEntry | undefined {
    return (
      this.docs.get(`${platform}:${name}`) ??
      this.docsByBaseName.get(`${platform}:${stripGenerics(name).toLowerCase()}`)
    );
  }

  /** All packages that ship the entry's symbol, e.g. IgbCombo → IgniteUI.Blazor and IgniteUI.Blazor.Lite. */
  getPackages(entry: DocEntry): string[] {
    const packages = this.packagesByKey.get(`${entry.platform}:${entry.component}`);
    if (packages) return [...packages];
    return entry.package ? [entry.package] : [];
  }

  /**
   * Every package that ships the entry's symbol with the release its snapshot describes,
   * e.g. ["IgniteUI.Blazor@26.1.98", "IgniteUI.Blazor.Lite@1.0.1"]. A package whose
   * snapshot names no version is listed bare.
   */
  getPackageVersions(entry: DocEntry): string[] {
    return this.getPackages(entry).map(pkg => {
      const version = this.versionsByPackage.get(`${entry.platform}:${pkg}`);
      return version ? `${pkg}@${version}` : pkg;
    });
  }

  search(options: {
    platform?: Platform;
    filter?: string;
    type?: string;
  }): DocEntry[] {
    let entries = [...this.docs.values()];

    // Filter by platform
    if (options.platform) {
      entries = entries.filter(e => e.platform === options.platform);
    }

    // Filter by type
    if (options.type && options.type !== 'all') {
      entries = entries.filter(e => e.type === options.type);
    }

    // Filter by keyword
    if (options.filter) {
      const lower = options.filter.toLowerCase();
      entries = entries.filter(e =>
        e.component.toLowerCase().includes(lower) ||
        e.type.toLowerCase().includes(lower) ||
        e.keywords.some(k => k.toLowerCase().includes(lower)) ||
        e.summary.toLowerCase().includes(lower)
      );
    }

    return entries.sort((a, b) => a.component.localeCompare(b.component));
  }

  getStats(): Partial<Record<Platform, { total: number; byType: Record<string, number> }>> {
    const stats: Partial<Record<Platform, { total: number; byType: Record<string, number> }>> = {};

    for (const entry of this.docs.values()) {
      if (!stats[entry.platform]) {
        stats[entry.platform] = { total: 0, byType: {} };
      }

      const platformStats = stats[entry.platform];
      if (!platformStats) {
        continue;
      }

      platformStats.total++;
      platformStats.byType[entry.type] = (platformStats.byType[entry.type] || 0) + 1;
    }

    return stats;
  }
}