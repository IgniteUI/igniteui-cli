import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { Platform, PlatformConfig } from '../config/platforms.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export interface DocEntry {
  filepath: string;
  title: string;
  component: string;
  type: string;
  keywords: string[];
  summary: string;
  platform: Platform;
}

export class DocLoader {
  private docs = new Map<string, DocEntry>();
  private platformConfigs: PlatformConfig[];

  constructor(platformConfigs: PlatformConfig[]) {
    this.platformConfigs = platformConfigs;
  }

  load(): void {
    for (const config of this.platformConfigs) {
      this.loadPlatform(config);
    }
    
    console.log(`Loaded ${this.docs.size} API entries across ${this.platformConfigs.length} platforms`);
  }

  private loadPlatform(config: PlatformConfig): void {
    const docsPath = join(__dirname, '..', '..', config.docsPath);
    const indexPath = join(docsPath, 'index.json');

    if (!existsSync(indexPath)) {
      console.error(`API docs not found for ${config.displayName}: ${indexPath}`);
      console.error(`   Run: npm run build-docs -- ${config.key}`);
      process.exit(1);
    }

    try {
      const indexContent = readFileSync(indexPath, 'utf-8');
      const index = JSON.parse(indexContent);

      let count = 0;
      for (const [name, entry] of Object.entries(index) as [string, any][]) {
        // Use platform-prefixed key to avoid collisions
        const key = `${config.key}:${name}`;
        
        this.docs.set(key, {
          filepath: join(docsPath, entry.file),
          title: entry.title,
          component: entry.component,
          type: entry.type,
          keywords: entry.keywords || [],
          summary: entry.summary || '',
          platform: config.key,
        });
        count++;
      }

      console.log(`   ${config.displayName}: ${count} entries`);
    } catch (err: any) {
      console.error(`Failed to load ${config.displayName} index:`, err.message);
      process.exit(1);
    }
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
        e.keywords.some(k => k.includes(lower)) ||
        e.summary.toLowerCase().includes(lower)
      );
    }

    return entries.sort((a, b) => a.component.localeCompare(b.component));
  }

  getStats() {
    const stats: Record<Platform, { total: number; byType: Record<string, number> }> = {} as any;
    
    for (const entry of this.docs.values()) {
      if (!stats[entry.platform]) {
        stats[entry.platform] = { total: 0, byType: {} };
      }
      
      stats[entry.platform].total++;
      stats[entry.platform].byType[entry.type] = (stats[entry.platform].byType[entry.type] || 0) + 1;
    }
    
    return stats;
  }
}