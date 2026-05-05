import { readFileSync, existsSync, realpathSync, readdirSync, statSync } from 'fs';
import { join, dirname, resolve, relative, isAbsolute } from 'path';
import { fileURLToPath } from 'url';
import type { Platform, PlatformConfig } from '../config/platforms.js';
import { type ReactDocSection, ReactJsonParser } from './react-json-parser.js';
import type { DocEntry, IndexEntry } from './types/docs.types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

function isIndexEntry(value: unknown): value is IndexEntry {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const entry = value as Partial<IndexEntry>;
  return (
    typeof entry.file === 'string' &&
    typeof entry.title === 'string' &&
    typeof entry.component === 'string' &&
    typeof entry.type === 'string'
  );
}

export class ApiDocsInitializationError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, { cause: options?.cause });
    this.name = 'ApiDocsInitializationError';
  }
}

export class ApiDocLoader {
  private docs = new Map<string, DocEntry>();
  private platformConfigs: PlatformConfig[];
  private typedocJsonParsers = new Map<Platform, ReactJsonParser>();

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
      switch (config.apiSource.kind) {
        case 'typedoc-json':
          return this.parseTypedocJson(config);
        case 'markdown-index':
          return this.parseMarkdownIndex(config);
        case 'llms-full-txt':
          return this.parseLlmsFullTxt(config);
      }
    } catch (err) {
      if (err instanceof ApiDocsInitializationError) {
        console.error(`   ⚠ ${config.displayName}: API reference not available (get_api_reference and search_api tools will skip this framework)`);
      } else {
        throw err;
      }
    }
  }

  private parseMarkdownIndex(config: PlatformConfig): void {
    const docsPath = join(__dirname, '..', '..', config.docsPath);
    const indexPath = join(docsPath, 'index.json');

    if (!existsSync(indexPath)) {
      throw new ApiDocsInitializationError(
        `API docs not found for ${config.displayName}: ${indexPath}. Run: npm run build:docs:${config.key}`
      );
    }

    try {
      const docsPathResolved = resolve(docsPath);
      const docsPathReal = realpathSync(docsPathResolved);
      const indexContent = readFileSync(indexPath, 'utf-8');
      const parsedIndex = JSON.parse(indexContent) as unknown;
      if (!parsedIndex || typeof parsedIndex !== 'object') {
        throw new Error(`Invalid API index format: ${indexPath}`);
      }

      const index = parsedIndex as Record<string, unknown>;

      let count = 0;
      for (const [name, rawEntry] of Object.entries(index)) {
        if (!isIndexEntry(rawEntry)) {
          throw new ApiDocsInitializationError(
            `Invalid docs index entry for ${config.displayName} (${config.key}) in ${indexPath}: key="${name}" has invalid shape.`
          );
        }

        // Use platform-prefixed key to avoid collisions
        const key = `${config.key}:${name}`;
        const filepath = this.resolveValidatedDocPath(
          docsPathReal,
          rawEntry.file,
          config,
          indexPath
        );
        const content = readFileSync(filepath, 'utf-8');

        this.docs.set(key, {
          filepath,
          content,
          title: rawEntry.title,
          component: rawEntry.component,
          type: rawEntry.type,
          keywords: rawEntry.keywords ?? [],
          summary: rawEntry.summary ?? '',
          platform: config.key,
        });
        count++;
      }

      console.error(`   ${config.displayName}: ${count} entries`);
    } catch (err: unknown) {
      throw new ApiDocsInitializationError(
        `Failed to load ${config.displayName} index: ${indexPath}`,
        { cause: err }
      );
    }
  }

  private resolveValidatedDocPath(
    docsPathReal: string,
    entryFile: string,
    config: PlatformConfig,
    indexPath: string
  ): string {
    const filepath = resolve(docsPathReal, entryFile);
    const filepathReal = realpathSync(filepath);
    const rel = relative(docsPathReal, filepathReal);
    const isContained = rel !== '' && !rel.startsWith('..') && !isAbsolute(rel);

    if (!isContained) {
      throw new ApiDocsInitializationError(
        `Invalid docs index entry for ${config.displayName} (${config.key}) in ${indexPath}: file="${entryFile}" resolves outside docs root (${docsPathReal}).`
      );
    }

    return filepathReal;
  }

  /**
   * Loads Blazor API docs from pre-built llms-full.txt files.
   * Expected layout: docs/blazor/{package}/{version}/llms-full.txt
   * Each file is split on "### [" headings — one DocEntry per component.
   */
  private parseLlmsFullTxt(config: PlatformConfig): void {
    if (config.apiSource.kind !== 'llms-full-txt') {
      throw new ApiDocsInitializationError(
        `Invalid llms-full-txt source configuration for ${config.displayName} (${config.key}).`
      );
    }

    const docsPath = join(__dirname, '..', '..', config.apiSource.docsPath);

    if (!existsSync(docsPath)) {
      throw new ApiDocsInitializationError(
        `Blazor API docs not found at ${docsPath}. Run: npm run build:docs:blazor`
      );
    }

    let count = 0;

    // Walk docs/blazor/{package}/{version}/llms-full.txt
    for (const pkgName of readdirSync(docsPath)) {
      const pkgDir = join(docsPath, pkgName);
      if (!statSync(pkgDir).isDirectory()) continue;

      for (const versionName of readdirSync(pkgDir)) {
        const versionDir = join(pkgDir, versionName);
        if (!statSync(versionDir).isDirectory()) continue;

        const llmsFile = join(versionDir, 'llms-full.txt');
        if (!existsSync(llmsFile)) continue;

        const content = readFileSync(llmsFile, 'utf-8');

        // Split on "### [ComponentName](url)" headings
        // Each chunk starts with the heading line and contains the member list
        const chunks = content.split(/(?=^### \[)/m).filter(c => c.trim());

        for (const chunk of chunks) {
          // Extract component name from "### [IgbAvatar](url)"
          const headingMatch = chunk.match(/^### \[([^\]]+)\]/);
          if (!headingMatch) continue;

          const componentName = headingMatch[1].trim();

          // Determine type from name prefix / chunk content
          const type = this.inferBlazorType(chunk);

          // Extract first line of prose as summary (skip the heading itself)
          const bodyLines = chunk.split('\n').slice(1);
          const summaryLine = bodyLines.find(l => l.trim() && !l.startsWith('-') && !l.startsWith('#')) ?? '';

          // Keywords: component name parts split by camelCase
          const keywords = componentName
            .replace(/^Igb/, '')
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
        `No Blazor API entries found in ${docsPath}. Ensure the Astro build has been run.`
      );
    }

    console.error(`   ${config.displayName}: ${count} entries (from llms-full.txt)`);
  }

  private inferBlazorType(chunk: string): string {
    if (/^### \[Igb\w+EventArgs\]/m.test(chunk)) return 'interface';
    if (/^### \[Igb\w+Options\]/m.test(chunk)) return 'interface';
    if (/enum/i.test(chunk.split('\n')[0])) return 'enum';
    return 'class';
  }

  private parseTypedocJson(config: PlatformConfig): void {
    if (config.apiSource.kind !== 'typedoc-json') {
      throw new ApiDocsInitializationError(
        `Invalid typedoc JSON source configuration for ${config.displayName} (${config.key}).`
      );
    }

    const jsonPath = join(__dirname, '..', '..', config.apiSource.jsonPath);

    if (!existsSync(jsonPath)) {
      throw new ApiDocsInitializationError(`${config.displayName} API model not found: ${jsonPath}`);
    }

    const parser = new ReactJsonParser(jsonPath);
    this.typedocJsonParsers.set(config.key, parser);

    const components = parser.getAllComponents();
    for (const name of components) {
      const key = `${config.key}:${name}`;
      this.docs.set(key, {
        filepath: jsonPath, // Points to JSON, not markdown
        title: `Class: ${name}`,
        component: name,
        type: 'class',
        keywords: [],
        summary: '',
        platform: config.key,
      });
    }

    console.error(`   ${config.displayName}: ${components.length} entries (from JSON)`);
  }

  get(platform: Platform, name: string): DocEntry | undefined {
    return this.docs.get(`${platform}:${name}`);
  }

  formatStructuredComponent(
    platform: Platform,
    name: string,
    section: ReactDocSection = 'all'
  ): string | null {
    const config = this.platformConfigs.find(candidate => candidate.key === platform);
    if (!config || config.apiSource.kind !== 'typedoc-json') {
      return null;
    }

    const parser = this.typedocJsonParsers.get(platform);
    if (!parser) {
      return null;
    }

    const component = parser.getComponent(name);
    if (!component) {
      return null;
    }

    return parser.formatAsMarkdown(component, section);
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