export interface DocsProvider {
  listComponents(framework: string, filter?: string): Promise<string>;
  getDoc(framework: string, name: string): Promise<{ text: string; found: boolean }>;
  searchDocs(framework: string, query: string): Promise<string>;
}
