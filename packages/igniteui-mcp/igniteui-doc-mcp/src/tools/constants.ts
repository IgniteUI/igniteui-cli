import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const SETUP_MD: string = readFileSync(join(__dirname, "setup.md"), "utf-8");

export const TOOL_DESCRIPTIONS = {
  get_project_setup_guide: `Returns setup guides for creating a new Ignite UI project for the specified framework.
*Before you start*: Call list_components or search_api to identify which Ignite UI components you want to use, then call get_project_setup_guide for the relevant framework to get the official setup instructions.
**Rule of thumb:**Start with base template unless routing between multiple views is required. A single-view implementation doesn't need a side-nav shell. Only use side-nav when routing between multiple views is genuinely required.
**For Angular, React, Web Components:** Returns the Ignite UI CLI documentation with step-by-step instructions for project scaffolding using \`igniteui-cli\`.
**For Blazor:** Returns a guide for creating a Blazor app using \`dotnet new\` and adding Ignite UI Blazor dependencies via NuGet.

**Parameters:**
- framework: REQUIRED — angular | react | blazor | webcomponents

Use this tool when the user wants to create a new project or needs setup instructions.`,
get_api_reference: `
  <overview>
      Retrieve the full API reference for one Ignite UI component or class. Supports angular, react, and webcomponents. Component name matching is case-insensitive.
  </overview>

  <when_to_use>
      Use this when you already know the component name (e.g. from a search_api result or from the user's code). If you only have a keyword, feature, or partial name, run search_api first to discover the exact name and platform.
  </when_to_use>

  <returns>
      Formatted markdown for the requested API entry. The full entry (section="all") includes the class/interface summary, properties with types and descriptions, methods with signatures, and events. Use section="properties", "methods", or "events" to retrieve a single section and reduce response size.
  </returns>

  <constraints>
      Blazor is currently not supported — covers angular, react, and webcomponents only. Component name must be ≤128 characters. Returns isError if the component is not found, with a prompt to use search_api.
  </constraints>

  <workflow>
      Typical follow-up to search_api: take the exact component name and platform from a search result, then call get_api_reference.
  </workflow>
  `,
  search_api: `
  <overview>
      Search Ignite UI API entries by keyword, feature, or partial component name across angular, react, and webcomponents. Returns up to 10 results ranked by match count.
  </overview>

  <when_to_use>
      Use this as the discovery step when the exact component name is unknown, when you want to narrow candidates, or when you want to confirm which platform an entry belongs to. Once you have a result, call get_api_reference with the exact name and platform.
      Do NOT use this if you already know the exact component name — call get_api_reference directly.
  </when_to_use>

  <returns>
      Up to 10 text results ranked by match count. Each result includes the exact component name, platform tag, API type (class/interface/directive/enum), match count, keyword list, and a content excerpt. Use the component name and platform from a result to call get_api_reference.
  </returns>

  <constraints>
      Blazor is currently not supported. Omit platform to search all three platforms simultaneously. Search matches against component names, keywords, API type, and document content. Output is text, not structured JSON. Maximum query length is 256 characters.
  </constraints>
  `
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
5. **Use \`get_project_framework\`** to auto-detect from local project files
6. **Ask the user** if none of the above apply

## Documentation Tools

- **\`search_docs\`** — full-text search when user asks "how do I..." or describes a feature need
- **\`list_components\`** — find docs by component name or keyword
- **\`get_doc\`** — retrieve full markdown doc once you know the exact name (kebab-case, no .md extension)

## API Reference Tools

- **\`search_api\`** — discover components by keyword when the exact name is unknown (supports angular, react, webcomponents)
- **\`get_api_reference\`** — retrieve properties, methods, and events for a known component

## Project Setup

- **\`get_project_setup_guide\`** — returns setup guides for creating a new Ignite UI project (CLI guides for Angular/React/WC, dotnet + NuGet guides for Blazor)

## Other Tools

- **\`get_project_framework\`** — auto-detect framework from local project files`;