# Ignite UI MCP Servers

A monorepo containing Model Context Protocol (MCP) servers for working with Ignite UI components. It includes two complementary servers: one for live GitHub repository exploration across multiple frameworks, and another for serving pre-compressed component documentation.

## Repository Structure

```
igniteui-mcp/
├── igniteui-cli-mcp/       # Live GitHub-based MCP server (Angular, React, WebComponents, Blazor)
├── igniteui-doc-mcp/       # Documentation MCP server with Angular, React, WebComponents & Blazor doc processing pipelines
├── Specification.md        # Detailed tool specification and use cases
└── README.md
```

---

## igniteui-cli-mcp

An MCP server that provides intelligent tools for discovering, exploring, and working with Ignite UI components across frameworks via the GitHub API and Ignite UI CLI.

### Tools

- **igniteui_search_documentation** — Search for documentation across multiple IgniteUI repositories
- **igniteui_get_api_definition** — Retrieve TypeScript/C# API definitions (interfaces, classes, types) from component source files
- **igniteui_get_example_scaffold** — Find example implementations and scaffolds for specific component types
- **igniteui_generate_ignite_app** — Create a new Ignite UI project using the CLI
- **igniteui_add_ignite_component** — Add a component to an existing project using the CLI
- **igniteui_get_cli_templates_list** — List available Ignite UI CLI templates and components

### Supported Frameworks

- Angular
- React
- WebComponents
- Blazor

### Data Sources

The server searches across multiple IgniteUI GitHub repositories:
- [igniteui-docfx](https://github.com/IgniteUI/igniteui-docfx) — Angular documentation
- [igniteui-xplat-docs](https://github.com/IgniteUI/igniteui-xplat-docs) — React, WebComponents and Blazor documentation
- [igniteui-angular-samples](https://github.com/IgniteUI/igniteui-angular-samples) — Angular component samples
- [igniteui-react-examples](https://github.com/IgniteUI/igniteui-react-examples) — React component samples
- [igniteui-blazor-examples](https://github.com/IgniteUI/igniteui-blazor-examples) — Blazor component samples


## Prerequisites

Before using this project, ensure you have the following global npm packages installed:

```bash
npm i -g --ignore-scripts @angular/cli@latest
npm i -g --ignore-scripts igniteui-cli@latest
npm i -g --ignore-scripts @igniteui/cli-core@latest
npm i -g --ignore-scripts @igniteui/angular-schematics@latest
```

### Setup

```bash
cd igniteui-cli-mcp
npm install
```

### Configuration

Create a `.env.local` file with your GitHub token:

```env
GITHUB_TOKEN=your_github_personal_access_token
```

### Build & Run

```bash
npm run build     # Compile TypeScript → dist/
npm start         # Run the MCP server
npm run dev       # Development mode with tsx
npm run inspector # Debug with the MCP Inspector
```

### MCP Client Configuration

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "node",
      "args": ["path/to/igniteui-cli-mcp/dist/index.js"]
    }
  }
}
```

---

## igniteui-doc-mcp

An MCP server that serves pre-compressed Ignite UI component documentation. It loads markdown docs at startup and exposes them via prefixed MCP tools. Includes documentation processing pipelines for Angular, React, WebComponents, and Blazor that export, inject sample code into, and LLM-compress docs from the source repositories.

### Tools

- **list_components** — List/filter available component docs by keyword match against filename, component name, keywords, or summary
- **get_doc** — Retrieve the full markdown content of a specific component doc
- **search_docs** — Full-text search across all docs with ranked results
- **search_api** — Search API entries by keyword, feature name, or partial component name
- **get_api_reference** — Retrieve the API reference for a specific component or class
- **get_project_setup_guide** — Return setup guides for creating a new Ignite UI project

### Documentation Pipelines

Each platform (Angular, React, WebComponents, Blazor) has a 4-step pipeline: **export → inject → compress → validate**.

```bash
cd igniteui-doc-mcp

# Full pipelines:
npm run pipeline:angular          # Angular: clear → export → inject → compress
npm run pipeline:react            # React: clear → build → export → inject → compress
npm run pipeline:webcomponents    # WebComponents: clear → build → export → inject → compress
npm run pipeline:blazor           # Blazor: clear → build → export → inject → compress

# Validation (any platform):
npm run validate:angular
npm run validate:react
npm run validate:webcomponents
npm run validate:blazor
```

**Pipeline steps:**

1. **Export** — Processes source docs (docfx for Angular, xplat gulp build for React/WC/Blazor), filters by toc, injects metadata
2. **Inject** — Replaces `<code-view>` tags with actual component source code from example repositories
3. **Compress** — LLM-based ~50% size reduction with platform-specific prompts. Counts tokens per file via `js-tiktoken`. Outputs `_compression_log.csv` and `_compression_stats.json`
4. **Validate** — LLM-as-Judge scoring on completeness, accuracy, hallucination, and structure

| Platform | Prefix | Sample Files | Examples Repo |
|----------|--------|-------------|---------------|
| Angular | `Igx` | `.ts`, `.html`, `.scss` | `igniteui-angular-samples`, `igniteui-angular-examples` |
| React | `Igr` | `.tsx`, `.ts`, `.css` | `igniteui-react-examples` |
| WebComponents | `Igc` + `Component` | `.html`, `.ts`, `.css` | `igniteui-wc-examples` |
| Blazor | `Igb` | `.razor`, `.razor.cs`, `.css` | `igniteui-blazor-examples` |

### Git Submodules

```bash
git submodule update --init --recursive     # Initialize after cloning
git submodule update --remote --merge       # Pull latest changes
```

- `angular/igniteui-docfx` — DocFX-based Angular documentation
- `angular/igniteui-angular-samples` — Angular sample apps
- `angular/igniteui-angular-examples` — Angular example projects
- `react/igniteui-react-examples` — React example projects
- `webcomponents/igniteui-wc-examples` — WebComponents example projects
- `blazor/igniteui-blazor-examples` — Blazor example projects
- `common/igniteui-xplat-docs` — Cross-platform docs source (React, Blazor, WC)

### Setup

```bash
cd igniteui-doc-mcp
npm install
```

### Configuration

Create a `.env` file with your OpenAI API key (required for compress and validate steps):

```env
OPENAI_API_KEY=your_openai_api_key
```

### Build & Run

```bash
npm run build     # Compile TypeScript → build/
npm start         # Run the MCP server (node build/index.js)
```

### MCP Client Configuration

```json
{
  "mcpServers": {
    "igniteui-docs": {
      "command": "node",
      "args": ["path/to/igniteui-doc-mcp/build/index.js"]
    }
  }
}
```

---

## Technology Stack

- **TypeScript** — Type-safe development (ES2022, Node16 module resolution)
- **@modelcontextprotocol/sdk** — MCP server SDK
- **Octokit** — GitHub API client (igniteui-cli-mcp)
- **OpenAI** — LLM-based documentation compression (igniteui-doc-mcp)
- **js-tiktoken** — Token counting for compressed docs (igniteui-doc-mcp)
- **js-yaml** — YAML parsing for toc.yml (igniteui-doc-mcp)
- **Zod** — Runtime schema validation

## License

MIT
