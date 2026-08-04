import { beforeEach, describe, expect, it, vi } from "vitest";

const mockState = vi.hoisted(() => ({
  getDoc: vi.fn(),
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
    async searchDocs() {
      return "";
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

describe("get_doc fallback resolution", () => {
  beforeEach(async () => {
    vi.resetModules();
    mockState.registeredTools.clear();
    mockState.getDoc.mockReset();
    process.argv = ["node", "index.js"];
    await import("../index.js");
  });

  it("retries with grid- prefix when a non-prefixed name is not found", async () => {
    const getDocHandler = mockState.registeredTools.get("get_doc")!;
    mockState.getDoc
      .mockResolvedValueOnce({ text: "missing", found: false })
      .mockResolvedValueOnce({ text: "grid-sorting doc", found: true });

    const result = await getDocHandler({ framework: "angular", name: "sorting" });

    expect(mockState.getDoc).toHaveBeenNthCalledWith(1, "angular", "sorting");
    expect(mockState.getDoc).toHaveBeenNthCalledWith(2, "angular", "grid-sorting");
    expect(result.isError).toBeUndefined();
    expect(result.content[0].text).toBe("grid-sorting doc");
  });

  it("does not double-prefix names that are already prefixed", async () => {
    const getDocHandler = mockState.registeredTools.get("get_doc")!;
    mockState.getDoc.mockResolvedValueOnce({ text: "missing", found: false });

    const result = await getDocHandler({ framework: "angular", name: "grid-sorting" });

    expect(mockState.getDoc).toHaveBeenCalledTimes(1);
    expect(mockState.getDoc).toHaveBeenCalledWith("angular", "grid-sorting");
    expect(result.isError).toBe(true);
  });
});
