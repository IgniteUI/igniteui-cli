import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { Platform, PlatformConfig } from '../config/platforms.js';
import type { DocEntry } from './types/docs.types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export class ApiDocsInitializationError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, { cause: options?.cause });
    this.name = 'ApiDocsInitializationError';
  }
}

export class ApiDocLoader {
  private docs = new Map<string, DocEntry>();
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

      for (const versionName of readdirSync(pkgDir)) {
        const versionDir = join(pkgDir, versionName);
        if (!statSync(versionDir).isDirectory()) continue;

        const llmsFile = join(versionDir, 'llms-full.txt');
        if (!existsSync(llmsFile)) continue;

        let content: string;
        try {
          content = readFileSync(llmsFile, 'utf-8');
        } catch (err) {
          throw new ApiDocsInitializationError(
            `Failed to read ${llmsFile}: ${err instanceof Error ? err.message : String(err)}`,
            { cause: err }
          );
        }

        // Split on "### [ComponentName](url)" headings
        // Each chunk starts with the heading line and contains the member list
        const chunks = content.split(/(?=^### \[)/m).filter(c => c.trim());

        for (const chunk of chunks) {
          // Extract component name from heading: "### [IgxGridComponent](url)"
          const headingMatch = chunk.match(/^### \[([^\]]+)\]/);
          if (!headingMatch) continue;

          const componentName = headingMatch[1].trim();

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
          this.docs.set(key, {
            filepath: llmsFile,
            content: chunk,
            title: componentName,
            component: componentName,
            type,
            keywords,
            summary: summaryLine.trim(),
            platform: config.key,
          });
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

  get(platform: Platform, name: string): DocEntry | undefined {
    return this.docs.get(`${platform}:${name}`);
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