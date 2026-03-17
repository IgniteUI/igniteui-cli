import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { appendFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";
import { description } from "./tools/description.js";
import type { DocsProvider } from "./providers/DocsProvider.js";
import { RemoteDocsProvider } from "./providers/RemoteDocsProvider.js";
import { LocalDocsProvider } from "./providers/LocalDocsProvider.js";

const execAsync = promisify(exec);

dotenv.config({ quiet: true });

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOG_PATH = join(__dirname, "mcp-server.log");
const BACKEND_URL = process.env.DOCS_BACKEND_URL || "https://codegen-test5.indigo.design";

mkdirSync(dirname(LOG_PATH), { recursive: true });

function log(tool: string, input: Record<string, any>, output: string, durationMs: number) {
  const timestamp = new Date().toISOString();
  const outputPreview = output.length > 500 ? output.slice(0, 500) + `... (${output.length} chars total)` : output;
  const line =
    `[${timestamp}] ${tool} (${durationMs}ms)\n` +
    `  INPUT:  ${JSON.stringify(input)}\n` +
    `  OUTPUT: ${outputPreview}\n\n`;
  appendFileSync(LOG_PATH, line);
}

function isLocalMode(): boolean {
  return process.argv.includes("--local") || process.env.DOCS_MODE === "local";
}

async function createDocsProvider(): Promise<DocsProvider> {
  if (isLocalMode()) {
    const provider = new LocalDocsProvider();
    await provider.init();
    return provider;
  }
  return new RemoteDocsProvider(BACKEND_URL);
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
}

server.registerTool(
  "generate_ignite_app",
  {
    description: description.generate_ignite_app,
    inputSchema: {
      name: z
        .string()
        .regex(/^[a-zA-Z0-9_\-]+$/, "Project name must be a valid folder name (alphanumeric, -, _)")
        .describe("The name of the new project folder"),
      framework: z.enum(["angular", "react", "webcomponents"]).describe("The framework for the project"),
      type: z.string().describe("The project template type (e.g., 'igx-ts', 'igr-ts', 'igc-ts')").optional(),
      template: z
        .enum(["base", "side-nav", "empty"])
        .describe("The UI template layout (e.g., 'base', 'side-nav', 'empty'). Defaults to 'base'.")
        .optional()
        .default("base"),
      outputPath: z.string().describe("The absolute or relative path where the project should be created.").optional(),
    },
  },
  async ({ name, framework, type, template, outputPath }) => {
    const templateType = type || { angular: "igx-ts", react: "igr-ts", webcomponents: "igc-ts" }[framework];

    const basePath = outputPath ? path.resolve(outputPath) : process.cwd();

    try {
      const command = [
        "npx -y igniteui-cli new",
        name,
        `--framework=${framework}`,
        ...(framework === "angular" ? ["--collection=@igniteui/angular-schematics"] : []),
        `--type=${templateType}`,
        `--skip-git=true`,
        `--skip-install=true`,
        `--template=${template}`,
      ].join(" ");

      const { stdout } = await execAsync(command, { cwd: basePath });

      return {
        content: [
          {
            type: "text" as const,
            text:
              `Project '${name}' generated successfully.\n\n` +
              `**Project Configuration Details:**\n` +
              `* Output Path: ${basePath}\n` +
              `* Requested Template: ${template}\n` +
              `* Registered projectTemplate (in JSON): ${JSON.stringify({ type: templateType, template }, null, 2)}\n\n` +
              `CLI Output:\n${stdout}`,
          },
        ],
      };
    } catch (error: any) {
      return { isError: true, content: [{ type: "text" as const, text: `Generation failed: ${error.stderr || error.message}` }] };
    }
  }
);

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

## CLI Scaffolding Tools

- **\`get_project_framework\`** — auto-detect framework from local project files
- **\`get_cli_templates_list\`** — list available CLI templates before scaffolding
- **\`generate_ignite_app\`** — scaffold a new Ignite UI project
- **\`add_ignite_component\`** — add a component to an existing Ignite UI CLI project`,
      },
    },
  ],
}));

async function main() {
  const docsProvider = await createDocsProvider();

  const mode = isLocalMode() ? "local" : "remote";
  appendFileSync(LOG_PATH, `[${new Date().toISOString()}] Server starting in ${mode} mode\n\n`);

  registerDocTools(server, docsProvider);

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
