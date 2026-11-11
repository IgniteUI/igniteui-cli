import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { describe, expect, it, vi } from "vitest";

const mockState = vi.hoisted(() => ({ serverCreated: 0, transportCreated: 0 }));

vi.mock("@modelcontextprotocol/sdk/server/mcp.js", () => ({
  McpServer: class {
    constructor() {
      mockState.serverCreated++;
    }
  },
}));

vi.mock("@modelcontextprotocol/sdk/server/stdio.js", () => ({
  StdioServerTransport: class {
    constructor() {
      mockState.transportCreated++;
    }
  },
}));

describe("docs-api entry", () => {
  it("exposes the docs provider and the query sanitizer", async () => {
    const api = await import("../docs-api.js");

    expect(Object.keys(api).sort()).toEqual(["LocalDocsProvider", "sanitizeSearchDocsQuery"]);
    expect(api.sanitizeSearchDocsQuery("row editing")).toBe('"row" "editing"');
  });

  it("does not start the MCP server on import", async () => {
    await import("../docs-api.js");

    expect(mockState.serverCreated).toBe(0);
    expect(mockState.transportCreated).toBe(0);
  });

  it("is published as the ./docs subpath", () => {
    const manifest = JSON.parse(
      readFileSync(fileURLToPath(new URL("../../package.json", import.meta.url)), "utf-8")
    );

    expect(manifest.exports["./docs"]).toBe("./dist/docs-api.js");
  });
});
