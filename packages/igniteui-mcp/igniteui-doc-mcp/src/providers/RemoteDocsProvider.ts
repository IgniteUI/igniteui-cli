import type { DocsProvider, ListComponentsOptions } from "./DocsProvider.js";

export class RemoteDocsProvider implements DocsProvider {
  private backendUrl: string;

  constructor(backendUrl: string) {
    this.backendUrl = backendUrl;
  }

  private async fetchText(url: URL): Promise<string> {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`Backend returned ${resp.status}: ${await resp.text()}`);
    return resp.text();
  }

  async listComponents(framework: string, opts: ListComponentsOptions = {}): Promise<string> {
    const url = new URL("/api/docs", this.backendUrl);
    url.searchParams.set("framework", framework);
    if (opts.filter) url.searchParams.set("filter", opts.filter);
    if (opts.detail) url.searchParams.set("detail", opts.detail);
    if (opts.group) url.searchParams.set("group", opts.group);
    return this.fetchText(url);
  }

  async getDoc(framework: string, name: string): Promise<{ text: string; found: boolean }> {
    const url = new URL(`/api/docs/${framework}/${name}`, this.backendUrl);
    const resp = await fetch(url);
    if (resp.status === 404) {
      return {
        text: `Doc "${name}" not found for framework "${framework}". Use list_components to see available docs.`,
        found: false,
      };
    }
    if (!resp.ok) throw new Error(`Backend returned ${resp.status}: ${await resp.text()}`);
    return { text: await resp.text(), found: true };
  }

  async searchDocs(framework: string, query: string): Promise<string> {
    const url = new URL("/api/docs/search", this.backendUrl);
    url.searchParams.set("framework", framework);
    url.searchParams.set("query", query);
    return this.fetchText(url);
  }
}
