export interface ListComponentsOptions {
  /** Substring match. Grouped mode also matches the group key. */
  filter?: string;
  /** `"groups"` (default) renders the grouped index; `"docs"` renders the flat list. */
  detail?: "groups" | "docs";
  /** A `group_key` as printed by the grouped index. */
  group?: string;
}

export interface DocsProvider {
  listComponents(framework: string, opts?: ListComponentsOptions): Promise<string>;
  getDoc(framework: string, name: string): Promise<{ text: string; found: boolean }>;
  searchDocs(framework: string, query: string): Promise<string>;
}
