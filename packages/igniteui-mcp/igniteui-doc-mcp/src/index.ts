#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { appendFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { TOOL_DESCRIPTIONS, SETUP_DOCS, BLAZOR_DOTNET_GUIDE, USAGE_GUIDE } from "./tools/constants.js";
import type { DocsProvider } from "./providers/DocsProvider.js";
import { RemoteDocsProvider } from "./providers/RemoteDocsProvider.js";
import { LocalDocsProvider } from "./providers/LocalDocsProvider.js";
import { getApiReferenceSchema, searchApiSchema } from "./tools/schemas.js";
import { createGetApiReferenceHandler, createSearchApiHandler } from "./tools/handlers.js";
import { ApiDocLoader } from "./lib/api-doc-loader.js";
import { getPlatforms } from "./config/platforms.js";

dotenv.config({ quiet: true });

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOG_PATH = join(__dirname, "mcp-server.log");

function parseCliArgs(): { remote?: string; debug: boolean } {
  const args = process.argv.slice(2);
  let remote: string | undefined;
  let debug = false;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--remote") {
      remote = args[++i] || process.env.IGNITEUI_MCP_DOCS_BACKEND_URL;
      if (!remote) {
        console.error("Error: --remote requires a URL argument or IGNITEUI_MCP_DOCS_BACKEND_URL env var.");
        process.exit(1);
      }
    }
    if (args[i] === "--debug") debug = true;
  }
  if (!remote && process.env.IGNITEUI_MCP_DOCS_BACKEND_URL) {
    // env var alone does not activate remote mode
  }
  return { remote, debug };
}

const cliArgs = parseCliArgs();

function log(tool: string, input: Record<string, any>, output: string, durationMs: number) {
  if (!cliArgs.debug) return;
  const timestamp = new Date().toISOString();
  const outputPreview = output.length > 500 ? output.slice(0, 500) + `... (${output.length} chars total)` : output;
  const line =
    `[${timestamp}] ${tool} (${durationMs}ms)\n` +
    `  INPUT:  ${JSON.stringify(input)}\n` +
    `  OUTPUT: ${outputPreview}\n\n`;
  appendFileSync(LOG_PATH, line);
}

const FRAMEWORK_ENUM = z
  .enum(["angular", "react", "blazor", "webcomponents"])
  .describe(
    "Ignite UI framework. Detect from user context: Angular (Igx prefix, e.g. IgxGrid) → 'angular', React (Igr prefix, e.g. IgrGrid) → 'react', Blazor (Igb prefix, e.g. IgbGrid) → 'blazor', Web Components (Igc prefix + Component suffix, e.g. IgcGridComponent) → 'webcomponents'. Also check file extensions (.razor → blazor, .tsx → react, .ts+.html → angular or webcomponents), package names (igniteui-angular, igniteui-react, igniteui-webcomponents, IgniteUI.Blazor), or ask the user if unclear."
  );

const server = new McpServer(
  { name: "igniteui-mcp-server", version: "1.0.0" },
  {
    instructions:
      "Unified Ignite UI MCP server — documentation, API reference, and CLI scaffolding for 4 frameworks. " +
      "Most tools require a 'framework' parameter. Detect the framework from the user's code or project: " +
      "Angular → Igx prefix (IgxGrid), package 'igniteui-angular', .ts+.html files. " +
      "React → Igr prefix (IgrGrid), package 'igniteui-react', .tsx files. " +
      "Blazor → Igb prefix (IgbGrid), package 'IgniteUI.Blazor', .razor files. " +
      "Web Components → Igc prefix + Component suffix (IgcGridComponent), package 'igniteui-webcomponents', .ts+.html with custom elements. " +
      "If the framework is unclear from context, ask the user.",
  }
);

function registerApiTools(server: McpServer, docLoader: ApiDocLoader) {
  server.registerTool(
    "igniteui_get_api_reference",
    {
      title: "Get Ignite UI API Reference",
      description: TOOL_DESCRIPTIONS.get_api_reference,
      annotations: { readOnlyHint: true, openWorldHint: false },
      inputSchema: getApiReferenceSchema,
    },
    createGetApiReferenceHandler(docLoader)
  );

  server.registerTool(
    "igniteui_search_api",
    {
      title: "Search Ignite UI API",
      description: TOOL_DESCRIPTIONS.search_api,
      annotations: { readOnlyHint: true, openWorldHint: false },
      inputSchema: searchApiSchema,
    },
    createSearchApiHandler(docLoader)
  );
}

function registerDocTools(server: McpServer, docsProvider: DocsProvider) {
  server.registerTool(
    "igniteui_list_components",
    {
      title: "List Ignite UI Components",
      description: TOOL_DESCRIPTIONS.list_components,
      annotations: { readOnlyHint: true, openWorldHint: false },
      inputSchema: {
        framework: FRAMEWORK_ENUM,
        filter: z
          .string()
          .optional()
          .describe(
            "Keyword to match against filename, component name, keywords, or summary. " +
            "Case-insensitive substring match. Example: 'grid', 'combo', 'chart'. " +
            "Omit to return all docs for the framework."
          ),
      },
    },
    async ({ framework, filter }) => {
      const start = performance.now();
      const text = await docsProvider.listComponents(framework, filter);
      log("list_components", { framework, filter }, text, Math.round(performance.now() - start));
      return { content: [{ type: "text" as const, text }] };
    }
  );

  server.registerTool(
    "igniteui_get_doc",
    {
      title: "Get Ignite UI Doc",
      description: TOOL_DESCRIPTIONS.get_doc,
      annotations: { readOnlyHint: true, openWorldHint: false },
      inputSchema: {
        framework: FRAMEWORK_ENUM,
        name: z
          .string()
          .describe(
            'Exact doc name in kebab-case without the .md extension. ' +
            'Examples: "grid-editing", "combo-overview", "accordion". ' +
            'Get valid names from igniteui_list_components or igniteui_search_docs.'
          ),
      },
    },
    async ({ framework, name }) => {
      const start = performance.now();
      const { text, found } = await docsProvider.getDoc(framework, name);
      log("get_doc", { framework, name }, text, Math.round(performance.now() - start));
      return { content: [{ type: "text" as const, text }], ...(found ? {} : { isError: true }) };
    }
  );

  server.registerTool(
    "igniteui_search_docs",
    {
      title: "Search Ignite UI Docs",
      description: TOOL_DESCRIPTIONS.search_docs,
      annotations: { readOnlyHint: true, openWorldHint: false },
      inputSchema: {
        query: z
          .string()
          .min(1, "Search query is required")
          .describe(
            "Search query for full-text search. Supports prefix matching with " +
            "trailing * (e.g. 'grid*' matches grid, grids, grid-editing). " +
            "Hyphenated terms like 'grid-editing' are matched as phrases. " +
            "Examples: 'column pinning', 'tree*', 'data validation'."
          ),
        framework: FRAMEWORK_ENUM,
      },
    },
    async ({ query: queryText, framework }) => {
      const start = performance.now();
      if (!queryText.trim()) {
        log("search_docs", { query: queryText, framework }, "Empty query.", 0);
        return { content: [{ type: "text" as const, text: "Empty query." }] };
      }

      // Sanitize user input for FTS4 MATCH syntax.
      // Strip characters that are FTS4 operators or cause syntax errors:
      //   " (phrase delimiter), ( ) (grouping), : (column filter), @ (internal)
      // Preserve hyphens — the porter tokenizer handles them consistently
      // at both index and query time (e.g. "grid-editing" stays as one phrase).
      // Preserve trailing * — FTS4 prefix queries (e.g. grid*) rely on it,
      // and the DB is built with prefix="2,3" indexes to support this.
      const sanitized = queryText
        .replace(/["(){}[\]:@]/g, " ")
        .split(/\s+/)
        .filter(Boolean)
        .map((term) => {
          // Terms ending with * are prefix queries — don't quote them
          // because FTS4 treats "grid*" as a literal match for the
          // asterisk character, while unquoted grid* does prefix expansion.
          if (term.endsWith("*")) return term;
          return `"${term}"`;
        })
        .join(" OR ");
      const text = await docsProvider.searchDocs(framework, sanitized);
      log("search_docs", { query: queryText, framework }, text, Math.round(performance.now() - start));
      return { content: [{ type: "text" as const, text }] };
    }
  );

  server.registerTool(
    "igniteui_generate_app",
    {
      title: "Generate Ignite UI App",
      description: TOOL_DESCRIPTIONS.generate_ignite_app,
      inputSchema: {
        framework: FRAMEWORK_ENUM,
      },
    },
    async ({ framework }) => {
      const start = performance.now();
      const docNames = SETUP_DOCS[framework] || [];
      const sections: string[] = [];

      if (framework === "blazor") {
        sections.push(BLAZOR_DOTNET_GUIDE);
      }

      for (const name of docNames) {
        const { text, found } = await docsProvider.getDoc(framework, name);
        if (found) {
          sections.push(text);
        }
      }

      const result = sections.length > 0
        ? sections.join("\n\n---\n\n")
        : `No setup guide available for framework: ${framework}`;

      log("generate_ignite_app", { framework }, result, Math.round(performance.now() - start));
      return { content: [{ type: "text" as const, text: result }] };
    }
  );
}

// --- Prompt ---

server.registerPrompt("igniteui-usage-guide", {
  description:
    "Instructions for using Ignite UI tools — framework detection, documentation, API reference, and CLI scaffolding.",
  }, async () => ({
  messages: [
    {
      role: "user" as const,
      content: {
        type: "text" as const,
        text: USAGE_GUIDE,
      },
    },
  ],
}));

async function main() {
  const platforms = getPlatforms();
  const docLoader = new ApiDocLoader(platforms);
  docLoader.load();

  let docsProvider: DocsProvider;
  let mode: string;

  if (cliArgs.remote) {
    docsProvider = new RemoteDocsProvider(cliArgs.remote);
    mode = "remote";
  } else {
    const provider = new LocalDocsProvider();
    await provider.init();
    docsProvider = provider;
    mode = "local";
  }

  if (cliArgs.debug) {
    mkdirSync(dirname(LOG_PATH), { recursive: true });
    appendFileSync(LOG_PATH, `[${new Date().toISOString()}] Server starting in ${mode} mode\n\n`);
  }

  registerDocTools(server, docsProvider);
  registerApiTools(server, docLoader);

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  if (err instanceof Error) {
    console.error(`❌ Failed to start IgniteUI API MCP server: ${err.message}`);
    if (err.cause) {
      console.error('Cause:', err.cause);
    }
  } else {
    console.error(err);
  }

  process.exit(1);
});
