import { beforeEach, describe, expect, it, vi } from "vitest";

const mockState = vi.hoisted(() => ({
  getDoc: vi.fn(),
  searchDocs: vi.fn(),
  registeredTools: new Map<string, (...args: any[]) => Promise<any>>(),
}));

vi.mock("@modelcontextprotocol/sdk/server/mcp.js", () => ({
  McpServer: class {
    registerTool(name: string, _config: unknown, handler: (...args: any[]) => Promise<any>) {
      mockState.registeredTools.set(name, handler);
    }
    registerPrompt() {}
    async connect() {}
  },
}));

vi.mock("@modelcontextprotocol/sdk/server/stdio.js", () => ({
  StdioServerTransport: class {},
}));

vi.mock("dotenv", () => ({
  default: { config: vi.fn() },
}));

vi.mock("../providers/LocalDocsProvider.js", () => ({
  LocalDocsProvider: class {
    async init() {}
    async listComponents() {
      return "";
    }
    async getDoc(framework: string, name: string) {
      return mockState.getDoc(framework, name);
    }
    async searchDocs(framework: string, query: string) {
      return mockState.searchDocs(framework, query);
    }
  },
}));

vi.mock("../providers/RemoteDocsProvider.js", () => ({
  RemoteDocsProvider: class {},
}));

vi.mock("../lib/api-doc-loader.js", () => ({
  ApiDocLoader: class {
    load() {}
  },
}));

vi.mock("../config/platforms.js", () => ({
  PLATFORMS: ["angular", "react", "blazor", "webcomponents"],
  getPlatforms: () => [],
}));

describe("get_example tool", () => {
  beforeEach(async () => {
    vi.resetModules();
    mockState.registeredTools.clear();
    mockState.getDoc.mockReset();
    mockState.searchDocs.mockReset();
    mockState.searchDocs.mockResolvedValue("");
    process.argv = ["node", "index.js"];
    await import("../index.js");
  });

  it("returns isError when the doc is not found", async () => {
    const handler = mockState.registeredTools.get("get_example")!;
    // Use component+topic so the requested name is "grid-editing" (already prefixed,
    // no further fallback attempts) and mock all calls as not found.
    mockState.getDoc.mockResolvedValue({ text: "not found", found: false });

    const result = await handler({ framework: "angular", component: "grid", topic: "editing" });

    expect(result.isError).toBe(true);
    expect(result.content[0].text).toBe("not found");
  });

  it("combines component and topic into the doc name lookup", async () => {
    const handler = mockState.registeredTools.get("get_example")!;
    mockState.getDoc.mockResolvedValueOnce({
      text: "```typescript\nconst x = 1;\n```",
      found: true,
    });

    await handler({ framework: "angular", component: "grid", topic: "editing" });

    expect(mockState.getDoc).toHaveBeenCalledWith("angular", "grid-editing");
  });

  it("returns 'no examples found' message when doc has no code blocks", async () => {
    const handler = mockState.registeredTools.get("get_example")!;
    // Use component+topic so the requested name is "grid-editing" — already prefixed,
    // which avoids the grid- fallback retry in resolveDoc.
    mockState.getDoc
      .mockResolvedValueOnce({ text: "This doc has no code examples.", found: true });

    const result = await handler({ framework: "angular", component: "grid", topic: "editing" });

    expect(result.isError).toBeUndefined();
    expect(result.content[0].text).toContain("No code examples");
    expect(result.content[0].text).toContain("`grid-editing`");
  });

  it("includes language in the 'no examples found' message when language is specified", async () => {
    const handler = mockState.registeredTools.get("get_example")!;
    mockState.getDoc
      .mockResolvedValueOnce({ text: "```html\n<div></div>\n```", found: true });

    const result = await handler({ framework: "angular", component: "grid", topic: "editing", language: "typescript" });

    expect(result.content[0].text).toContain("`typescript`");
    expect(result.content[0].text).toContain("No code examples");
  });

  it("prepends substitution notice when a fuzzy match is used and examples are present", async () => {
    const handler = mockState.registeredTools.get("get_example")!;
    // Simulate the fuzzy path: searchDocs returns a parseable doc name that shares
    // a token with "grid-editing", and the follow-up getDoc call succeeds.
    mockState.getDoc
      .mockResolvedValueOnce({ text: "not found", found: false })  // direct "grid-editing" lookup
      .mockResolvedValueOnce({ text: "```typescript\nconst x = 1;\n```", found: true });  // fuzzy hit
    mockState.searchDocs.mockResolvedValueOnce("(`grid-editing`)");

    const result = await handler({ framework: "angular", component: "grid", topic: "editing" });

    // The response must include the code example text and the substitution notice.
    expect(result.content[0].text).toContain("```typescript");
    expect(result.content[0].text).toContain("grid-editing");
  });

  it("includes 'no examples found' message with servedName when doc has no matching language blocks", async () => {
    const handler = mockState.registeredTools.get("get_example")!;
    mockState.getDoc
      .mockResolvedValueOnce({ text: "```html\n<div></div>\n```", found: true });

    const result = await handler({ framework: "angular", component: "grid", topic: "editing", language: "scss" });

    expect(result.content[0].text).toContain("No code examples");
    expect(result.content[0].text).toContain("`scss`");
    expect(result.content[0].text).toContain("`grid-editing`");
  });
});
