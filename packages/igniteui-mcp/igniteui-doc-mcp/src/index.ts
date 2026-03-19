import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { appendFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { description } from "./tools/description.js";
import type { DocsProvider } from "./providers/DocsProvider.js";
import { RemoteDocsProvider } from "./providers/RemoteDocsProvider.js";
import { LocalDocsProvider } from "./providers/LocalDocsProvider.js";

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
      "Unified Ignite UI MCP server — documentation, GitHub API, and CLI scaffolding for 4 frameworks. " +
      "Most tools require a 'framework' parameter. Detect the framework from the user's code or project: " +
      "Angular → Igx prefix (IgxGrid), package 'igniteui-angular', .ts+.html files. " +
      "React → Igr prefix (IgrGrid), package 'igniteui-react', .tsx files. " +
      "Blazor → Igb prefix (IgbGrid), package 'IgniteUI.Blazor', .razor files. " +
      "Web Components → Igc prefix + Component suffix (IgcGridComponent), package 'igniteui-webcomponents', .ts+.html with custom elements. " +
      "Use get_project_framework to auto-detect. If the framework is unclear from context, ask the user.",
  }
);

function registerDocTools(server: McpServer, docsProvider: DocsProvider) {
  server.registerTool(
    "list_components",
    {
      description:
        "List available Ignite UI component docs. Filter by framework and optionally by keyword match against filename, component, toc_name, keywords, summary.",
      inputSchema: {
        framework: FRAMEWORK_ENUM,
        filter: z
          .string()
          .optional()
          .describe("Optional keyword to filter by filename, component, keywords, or summary"),
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
    "get_doc",
    {
      description:
        "Return the full markdown content of a specific Ignite UI component doc. Requires framework and doc name.",
      inputSchema: {
        framework: FRAMEWORK_ENUM,
        name: z
          .string()
          .describe('Doc name without .md extension, e.g. "grid-editing" or "accordion"'),
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
    "search_docs",
    {
      description:
        "Full-text search across Ignite UI docs for a specific framework. Returns top 20 results with excerpt snippets.",
      inputSchema: {
        query: z.string().describe("Search query (supports prefix matching, e.g. 'grid*')"),
        framework: FRAMEWORK_ENUM,
      },
    },
    async ({ query: queryText, framework }) => {
      const start = performance.now();
      if (!queryText.trim()) {
        log("search_docs", { query: queryText, framework }, "Empty query.", 0);
        return { content: [{ type: "text" as const, text: "Empty query." }] };
      }
      const sanitized = queryText
        .replace(/["\-(){}[\]:^~@]/g, " ")
        .split(/\s+/)
        .filter(Boolean)
        .map((term) => `"${term}"`)
        .join(" OR ");
      const text = await docsProvider.searchDocs(framework, sanitized);
      log("search_docs", { query: queryText, framework }, text, Math.round(performance.now() - start));
      return { content: [{ type: "text" as const, text }] };
    }
  );

  const SETUP_DOCS: Record<string, string[]> = {
    angular: ["cli-getting-started-with-cli", "cli-step-by-step-guide-using-cli"],
    react: ["general-cli-overview"],
    webcomponents: ["general-cli-overview"],
    blazor: ["general-installing-blazor", "general-nuget-feed"],
  };

  const BLAZOR_DOTNET_GUIDE = `# Creating a Blazor Application

## Create a new Blazor Web App

\`\`\`bash
dotnet new blazor -n MyBlazorApp
cd MyBlazorApp
\`\`\`

## Or create a Blazor WebAssembly Standalone App

\`\`\`bash
dotnet new blazorwasm -n MyBlazorApp
cd MyBlazorApp
\`\`\`

## Run the app

\`\`\`bash
dotnet run
\`\`\`

After creating the app, follow the guides below to add Ignite UI for Blazor components.

---

`;

  server.registerTool(
    "generate_ignite_app",
    {
      description: description.generate_ignite_app,
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
    "Instructions for using Ignite UI tools — framework detection, documentation, GitHub API, and CLI scaffolding.",
  }, async () => ({
  messages: [
    {
      role: "user" as const,
      content: {
        type: "text" as const,
        text: `# Ignite UI Tools — Usage Guide

## Framework Detection

Most tools require a \`framework\` parameter. Determine the framework from the user's project context:

| Framework | Value | Component Prefix | Package Name | File Extensions |
|-----------|-------|-----------------|--------------|-----------------|
| Angular | \`angular\` | \`Igx\` (e.g. IgxGrid, IgxCombo) | \`igniteui-angular\` | .ts + .html + .scss |
| React | \`react\` | \`Igr\` (e.g. IgrGrid, IgrCombo) | \`igniteui-react\` | .tsx |
| Blazor | \`blazor\` | \`Igb\` (e.g. IgbGrid, IgbCombo) | \`IgniteUI.Blazor\` | .razor, .razor.cs |
| Web Components | \`webcomponents\` | \`Igc\` + \`Component\` suffix (e.g. IgcGridComponent) | \`igniteui-webcomponents\` | .ts + .html (custom elements) |

## Detection Priority

1. **Component prefix in code** — most reliable. \`IgxGrid\` → angular, \`IgrGrid\` → react, etc.
2. **Package name** in package.json / .csproj — \`igniteui-angular\` → angular, \`IgniteUI.Blazor\` → blazor
3. **File extensions** — .razor → blazor, .tsx → react
4. **User's explicit statement** — "I'm using Angular", "Blazor project", etc.
5. **Use \`get_project_framework\`** to auto-detect from local project files
6. **Ask the user** if none of the above apply

## Documentation Tools

- **\`search_docs\`** — full-text search when user asks "how do I..." or describes a feature need
- **\`list_components\`** — find docs by component name or keyword
- **\`get_doc\`** — retrieve full markdown doc once you know the exact name (kebab-case, no .md extension)

## GitHub API Tools

- **\`search_components\`** — find component source file paths on GitHub
- **\`get_api_definition\`** — extract public API (interfaces, classes, types) from a source file found via \`search_components\`
- **\`get_scaffold_reference\`** — find real-world usage examples from sample repositories

## Project Setup

- **\`generate_ignite_app\`** — returns setup guides for creating a new Ignite UI project (CLI guides for Angular/React/WC, dotnet + NuGet guides for Blazor)

## Other Tools

- **\`get_project_framework\`** — auto-detect framework from local project files`,
      },
    },
  ],
}));

async function main() {
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

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
