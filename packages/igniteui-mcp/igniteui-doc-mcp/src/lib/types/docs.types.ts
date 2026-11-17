import type { Platform } from '../../config/platforms.js';

export interface DocEntry {
  filepath: string;
  content?: string;
  title: string;
  component: string;
  type: string;
  keywords: string[];
  summary: string;
  platform: Platform;
  /** Package the entry ships in (llms-full.txt "Package:" header), e.g. "igniteui-react-grids". */
  package?: string;
  /** Release the entry was generated from (llms-full.txt "Version:" header), e.g. "19.9.1". */
  version?: string;
}

export interface SearchHit {
  entry: DocEntry;
  matches: number;
  excerpt: string;
}