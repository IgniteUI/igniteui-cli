import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const SETUP_MD: string = readFileSync(join(__dirname, "setup.md"), "utf-8");

export const TOOL_DESCRIPTIONS = {
  get_project_setup_guide: `Returns setup guides for creating a new Ignite UI project for the specified framework.
*Before you start*: Call list_components or search_api to identify which Ignite UI components you want to use, then call get_project_setup_guide for the relevant framework to get the official setup instructions.
**Rule of thumb:**Start with base template unless routing between multiple views is required. A single-view implementation doesn't need a side-nav shell. Only use side-nav when routing between multiple views is genuinely required.

Returns a formatted list where each entry includes: doc name (pass this as the 'name' parameter to igniteui_get_doc), display name, summary, and premium status. Without a filter, returns the full catalog for the framework.

No pagination — the full result set is returned in one call.`,

  get_doc: `Retrieve the full markdown content of one specific Ignite UI component doc by its exact name. The name is kebab-case without the .md extension (e.g. "grid-editing", "combo-overview", "accordion").

Use this after discovering doc names from igniteui_list_components or igniteui_search_docs. Do NOT guess doc names — call one of those discovery tools first if the name is unknown.

Returns YAML frontmatter (component, keywords, summary) followed by the complete markdown body with code samples, tables, and links.

Returns isError if the doc name is not found, with a suggestion to use igniteui_list_components.`,

  search_docs: `Full-text search across all Ignite UI documentation for a specific framework. Supports prefix matching with trailing * (e.g. "grid*" matches grid, grids, grid-editing) and hyphenated terms (e.g. "grid-editing" matched as a phrase).

Use this when the user asks "how do I..." or describes a feature need — e.g. "column pinning", "data validation", "tree*". For browsing by component name instead, use igniteui_list_components.

Returns up to 20 results ranked by relevance. Each result includes: doc name (pass to igniteui_get_doc for full content), display name, summary, and a text excerpt with matching terms highlighted between >>> and <<<.

Query must be non-empty. Special characters are sanitized automatically — only * for prefix matching needs to be passed explicitly.`,

  generate_ignite_app: `Return setup guides and step-by-step instructions for creating a new Ignite UI project. For Angular, React, and Web Components, returns the Ignite UI CLI documentation with scaffolding commands. For Blazor, returns a guide using dotnet new and NuGet package installation.

Use this when the user wants to create a new project, needs installation steps, or asks "how do I set up Ignite UI". This does NOT generate files or run commands — it returns documentation text only.

Returns one or more markdown documents concatenated together (separated by ---) with the full setup walkthrough for the requested framework, including CLI commands and configuration steps.

All four frameworks are supported. Returns a message if no setup guide is available for the given framework.`,

  get_api_reference: `Look up the full API reference for a specific Ignite UI component or class by exact name. Case-insensitive matching. Covers angular, react, and webcomponents (Blazor API not yet available).

Use this when you already know the exact component name — from the user's code (e.g. IgxGridComponent, IgrGrid, IgcSelect) or from a previous igniteui_search_api result. If you only have a keyword or partial name, call igniteui_search_api first to discover the exact name.

Returns formatted markdown with the class/interface summary, properties (with types and descriptions), methods (with signatures), and events. Use section="properties", "methods", or "events" to retrieve only that section and reduce response size. Defaults to section="all".

Component name must be ≤128 characters. Returns isError with a suggestion to use igniteui_search_api if not found.`,

  search_api: `Search Ignite UI API entries by keyword, feature name, or partial component name. Returns up to 10 results ranked by relevance across angular, react, and webcomponents (Blazor API not yet available).

Use this as the discovery step when the exact component name is unknown — e.g. the user asks about "grid virtualization" or "combo filtering". Also use it to confirm which framework a component belongs to. Do NOT use this if you already know the exact component name — call igniteui_get_api_reference directly instead.

Each result includes: exact component name, framework tag, API type (class/interface/directive/enum), match count, keyword list, and a content excerpt. Pass the component name and framework from a result to igniteui_get_api_reference for full details. To reduce response size, use section="properties", "methods", or "events" instead of the default "all".

Omit framework to search all frameworks at once. Maximum query length is 256 characters.`
};

export const SETUP_DOCS: Record<string, string[]> = {
  angular: ["cli-getting-started-with-cli", "cli-step-by-step-guide-using-cli"],
  react: ["general-cli-overview"],
  webcomponents: ["general-cli-overview"],
  blazor: ["general-installing-blazor", "general-nuget-feed"],
};

export const BLAZOR_DOTNET_GUIDE = `# Creating a Blazor Application
Before you start: Call \`list_components\` or \`search_api\` to identify which Ignite UI components you want to use, then call \`get_project_setup_guide\` for the relevant framework to get the official setup instructions.

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

## What's Next

Once the project is running:
1. Call \`igniteui_list_components\` or\`igniteui_search_docs\` to find the component you want to add.
2. Call \`igniteui_get_doc\` with the component name to get full usage instructions.
3. Call \`igniteui_get_api_reference\` or \`igniteui_search_api\` to look up properties, methods, and events.
4. Apply theming via the **igniteui-theming MCP** before or after adding components. 

After creating the app, follow the guides below to add Ignite UI for Blazor components.

---

`;

export const USAGE_GUIDE = `# Ignite UI Tools — Usage Guide

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
5. **Ask the user** if none of the above apply

## Documentation Tools

- **\`igniteui_search_docs\`** — full-text search when user asks "how do I..." or describes a feature need
- **\`igniteui_list_components\`** — find docs by component name or keyword
- **\`igniteui_get_doc\`** — retrieve full markdown doc once you know the exact name (kebab-case, no .md extension)

## API Reference Tools

- **\`igniteui_search_api\`** — discover components by keyword when the exact name is unknown (supports angular, react, webcomponents)
- **\`igniteui_get_api_reference\`** — retrieve properties, methods, and events for a known component

## Project Setup

- **\`get_project_setup_guide\`** — returns setup guides for creating a new Ignite UI project (CLI guides for Angular/React/WC, dotnet + NuGet guides for Blazor)