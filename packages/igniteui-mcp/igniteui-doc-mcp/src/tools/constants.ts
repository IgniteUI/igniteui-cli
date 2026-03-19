export const description = {
  generate_ignite_app: `Returns setup guides for creating a new Ignite UI project for the specified framework.

**For Angular, React, Web Components:** Returns the Ignite UI CLI documentation with step-by-step instructions for project scaffolding using \`igniteui-cli\`.
**For Blazor:** Returns a guide for creating a Blazor app using \`dotnet new\` and adding Ignite UI Blazor dependencies via NuGet.

**Parameters:**
- framework: REQUIRED — angular | react | blazor | webcomponents

Use this tool when the user wants to create a new project or needs setup instructions.`,
};

export const SETUP_DOCS: Record<string, string[]> = {
  angular: ["cli-getting-started-with-cli", "cli-step-by-step-guide-using-cli"],
  react: ["general-cli-overview"],
  webcomponents: ["general-cli-overview"],
  blazor: ["general-installing-blazor", "general-nuget-feed"],
};

export const BLAZOR_DOTNET_GUIDE = `# Creating a Blazor Application

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

## GitHub API Tools

- **\`search_components\`** — find component source file paths on GitHub
- **\`get_api_definition\`** — extract public API (interfaces, classes, types) from a source file found via \`search_components\`
- **\`get_scaffold_reference\`** — find real-world usage examples from sample repositories

## Project Setup

- **\`generate_ignite_app\`** — returns setup guides for creating a new Ignite UI project (CLI guides for Angular/React/WC, dotnet + NuGet guides for Blazor)

## Other Tools

- **\`get_project_framework\`** — auto-detect framework from local project files`;