---
title: React Theming MCP | Infragistics 
_description: React works with the Ignite UI Theming MCP server that allows you to create custom themes, palettes, typography, and elevations for your Ignite UI for React applications. Learn how to use the MCP server to generate and apply custom themes that match your brand and design requirements.
_keywords: Ignite UI for React controls, React widgets, web widgets, UI widgets, Components Suite, Artificial Intelligence, AI, MCP, Model Context Protocol, Theming, Custom Themes, Palettes, Typography, Elevations
_license: MIT
mentionedTypes: []
_tocName: Theming MCP
---

# Ignite UI Theming MCP

<p class="highlight">The Ignite UI Theming MCP is a <a href="https://modelcontextprotocol.io/" target="_blank">Model Context Protocol</a> (MCP) server that enables AI assistants to generate production-ready theming code for Ignite UI applications. MCP is an open standard that lets AI assistants call specialized tools provided by external servers. Connect the Ignite UI Theming MCP to your editor or desktop AI client and describe what you want — the assistant does the rest.</p>

<div class="divider"></div>

## Overview

Instead of writing styles by hand, you can describe your theming intent in plain language and let an AI assistant generate the correct code for you. The MCP server gives the AI the knowledge and tools it needs to produce accurate theming code — including palettes with proper shade generation, typography, elevations, component design token overrides, and more.

The server supports all four Ignite UI design systems — **Material**, **Bootstrap**, **Fluent**, and **Indigo** — in both light and dark variants. While this guide focuses on React, the MCP server also works with all Ignite UI component libraries from Infragistics. The `detect_platform` tool reads your `package.json` and selects the correct import paths and selectors automatically.

Most tools can produce either **Sass** or **CSS** output. Sass output is the default and integrates with the `igniteui-theming` Sass module. CSS output generates ready-to-use CSS custom properties and can be used **without a local Sass toolchain** — the server compiles it for you.

**Example prompts to try once connected:**

> *"Create a complete Material Design dark theme for my React app with primary #2563eb and coral secondary #f97316."*

> *"What design tokens are available for the button component? Customize it with my brand purple #8b5cf6."*

> *"My brand guidelines specify exact hex values for every primary shade — create a custom palette with those explicit values."*

> *"Make the calendar component use smaller spacing."*

## Prerequisites

Before configuring the MCP server, make sure you have:

- **Node.js** (v18 or later) installed — this provides the `npx` command used to launch the server.
- A project with an **Ignite UI package** listed as a dependency in `package.json`.
- An **AI client with MCP support** — for example, VS Code with GitHub Copilot, Cursor, Claude Desktop, Claude Code, or a JetBrains IDE with the AI Assistant plugin.

If you do not have Ignite UI Theming installed yet, run:

```bash
npm install igniteui-theming
```

## Setup

The MCP server is bundled with the `igniteui-theming` package and launched via `npx`. No separate installation is needed beyond having an Ignite UI package already in your project.

The canonical launch command is:

```bash
npx -y igniteui-theming igniteui-theming-mcp
```

> \[!NOTE]
> The `-y` flag tells `npx` to auto-confirm the package download prompt so the server can start without manual intervention.

### VS Code

GitHub Copilot in VS Code supports MCP servers through a workspace-level configuration file. Create or edit `.vscode/mcp.json` in your project root:

```json
{
  "servers": {
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

Once saved, open the GitHub Copilot chat panel, switch to **Agent** mode, and the Ignite UI Theming tools will be available.

> \[!NOTE]
> MCP support in VS Code requires GitHub Copilot and VS Code 1.99 or later.

### Cursor

Cursor supports project-scoped MCP configuration. Create or edit `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

The server will be picked up automatically when you open a new Cursor chat session.

> \[!NOTE]
> You can also configure MCP servers globally via **Settings → MCP** in Cursor.

### Claude Desktop

Add the server to your Claude Desktop configuration file:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

Restart Claude Desktop after saving. You will see an MCP server indicator (slider icon) in the chat input area, confirming that MCP tools are active.

### Claude Code

Claude Code supports MCP servers through its CLI and a project-scoped `.mcp.json` file. To share the configuration with your team, create or edit `.mcp.json` in your project root:

```json
{
  "mcpServers": {
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

Alternatively, you can add the server via the command line for your local environment only:

```bash
claude mcp add igniteui-theming -- npx -y igniteui-theming igniteui-theming-mcp
```

Use the `/mcp` command inside Claude Code to verify the server is connected.

### JetBrains IDEs

JetBrains AI Assistant supports MCP servers through the IDE settings:

1. Open **Settings** (or **Preferences** on macOS).

2. Navigate to **Tools → AI Assistant → Model Context Protocol (MCP)**.

3. Click **+ Add** and choose **As JSON** or use the form fields.

4. Enter the following configuration:

    ```json
    {
      "mcpServers": {
        "igniteui-theming": {
          "command": "npx",
          "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
        }
      }
    }
    ```

5. Click **OK** and restart the AI Assistant.

> \[!NOTE]
> MCP support requires the AI Assistant plugin to be installed and enabled in your JetBrains IDE.

### Other MCP Clients

For any other MCP-compatible client, use the STDIO transport with the following command and arguments:

- **Command**: `npx`
- **Arguments**: `-y`, `igniteui-theming`, `igniteui-theming-mcp`

## Customizing AI Behavior with Project Rules

This section is optional. It is aimed at teams that want to fine-tune *how* the AI generates theming code to match their existing codebase conventions.

Editors like VS Code and Cursor let you provide project-level instruction files that shape how the AI behaves. The MCP server already teaches the AI *which tools to call and in what order* — you do not need to repeat that. Instead, use these instruction files to encode your **project's design decisions, code conventions, and file organization** so the AI produces code that fits your codebase on the first try.

### VS Code (`.github/copilot-instructions.md`)

```markdown
## Theming Conventions

### Sass Code Style
- Use `@use` / `@forward` — never `@import`.
- Extract repeated color values into Sass variables (e.g., `$brand-hover: #a78bfa`).
- Prefer setting primary design tokens over overriding many dependent tokens.
  For example, setting `$foreground` on a flat button automatically derives
  `$hover-background`, `$focus-background`, and `$active-background`.
- Keep component overrides scoped — use the component's default selector
  (e.g., `.igx-button--flat`) unless a narrower scope is needed.
```

### Cursor (`.cursor/rules/theming.mdc`)

```markdown
---
description: Ignite UI for React theming conventions
globs: ["**/*.scss", "**/styles/**"]
---

## Project Theming Rules

### Code conventions
- `@use` / `@forward` only — no `@import`.
- Extract shared colors into variables; do not repeat hex literals.
- Prefer primary tokens — let dependent tokens derive automatically.
- One component override per file. Name the file after the component.
- Comment every override with the design rationale.
- Never hard-code gray shades for text — use palette grays so dark mode works.
- For dark mode, only the palette changes. Component overrides stay the same.
```

> \[!NOTE]
> Both files are committed to source control, so every team member gets the same AI behavior without manual setup. Adapt the brand colors, design system, and file paths to match your project.

## Available Tools

The MCP server exposes a set of tools that the AI uses automatically based on your prompts. You never need to call them directly — just describe what you want.

To see the current full list of tools and their parameters at any time, ask your AI assistant:

> *"What tools does the Ignite UI Theming MCP provide?"*

Here is a brief overview of each tool:

| Tool | Description |
|------|-------------|
| `detect_platform` | Reads `package.json` and identifies whether the project uses Ignite UI for Angular, Web Components, React, or Blazor. Selects the correct import paths and component selectors for all subsequent tools. |
| `create_palette` | Generates a color palette with automatic shade variants (50–900, A100–A700) from your base brand colors. Accepts an `output` parameter (`sass` or `css`) and a `designSystem` to select the schema. |
| `create_custom_palette` | Fine-grained palette creation — specify exact hex values for every shade when automatic generation is not suitable. |
| `create_typography` | Sets up a font family and type scale for a given design system. |
| `create_elevations` | Configures box-shadow elevation levels (0–24) for Material or Indigo design systems. |
| `create_theme` | One-shot complete theme: palette + typography + elevations, ready to include in your `styles.scss`. Accepts a `designSystem` (`material`, `bootstrap`, `fluent`, or `indigo`) and `variant` (`light` or `dark`). |
| `set_size` | Sets `--ig-size` globally or for a specific component (`small`, `medium`, or `large`). |
| `set_spacing` | Sets `--ig-spacing` (and optionally inline/block overrides) globally or per component. |
| `set_roundness` | Sets `--ig-radius-factor` (0 = square, 1 = fully round) globally or per component. |
| `get_component_design_tokens` | Returns all available design tokens for a component — always call this before `create_component_theme`. |
| `create_component_theme` | Generates Sass or CSS to customize a component's tokens (colors, borders, etc.). Accepts a `variant` (`light` or `dark`) to select the correct schema. |
| `get_color` | Returns a CSS variable reference for a palette color, e.g. `var(--ig-primary-500)`. Supports optional contrast and opacity parameters. |
| `read_resource` | Reads built-in reference resources organized into four categories: platform configs (6), palette/typography/elevation presets (5), color guidance (7), and layout/spacing docs (8). |

> \[!NOTE]
> For compound components (e.g., `combo`, `select`, `grid`), `get_component_design_tokens` returns a list of related child themes instead of a flat token list. For example, querying `grid` may return child themes such as `grid`, `grid-toolbar`, `grid-filtering`, and `paginator`. The AI will generate a separate `create_component_theme` call for each child theme using the appropriate scoped selector.

## Example Scenarios

The following scenarios show what you can ask the AI to do once the MCP server is connected.

### New Project Theme

> *"I'm starting a new React project with Ignite UI. Create a complete Material Design light theme with primary #2563eb, secondary #f97316, and Roboto font."*

The AI will call `create_theme` and return a ready-to-use `styles.scss` file. The generated output will look similar to this:

```scss
/* styles.scss */
@use 'igniteui-theming' as *;
@use 'igniteui-theming/sass/typography/presets' as *;
@use 'igniteui-theming/sass/elevations/presets' as *;

$my-palette: palette(
  $primary: #2563eb,
  $secondary: #f97316,
  $surface: #fff,
);

@include elevations($material-elevations);
@include palette($light-material-palette);
@include typography(
  $font-family: "Titillium Web, sans-serif",
  $type-scale: $material-type-scale
);
```

### Dark Mode Variant

> *"I need a dark mode version of my existing theme. Keep the same primary blue but use a dark surface #121212."*

### Brand-Exact Color Shades

> *"Our design system specifies exact hex values for all 14 shades of our primary green. I'll paste the values — create a custom palette."*

The AI will call `create_custom_palette` with `mode: "explicit"` for the primary color and auto-generate the rest.

### Component-Level Customization

> *"Style the flat button with a purple background #8b5cf6 and white text, with a lighter purple #a78bfa on hover."*

The AI will call `get_component_design_tokens` first to discover valid token names, then call `create_component_theme` with the correct values.

### Layout Adjustments

> *"The calendar feels bloated — reduce its spacing, and make all components slightly smaller."*

The AI will call `set_spacing` scoped to the calendar component and `set_size` at the `:root` level.

## Troubleshooting

**Platform not detected**

If `detect_platform` returns `null` or `generic`, make sure your `package.json` lists an Ignite UI package (e.g., `igniteui-react`) as a dependency. You can also tell the AI explicitly: *"Use Ignite UI for React."*

**Luminance warning on colors**

If the AI warns about color luminance, it means the chosen color is too light or too dark for automatic shade generation to work well. Either pick a mid-range color or ask the AI to use `create_custom_palette` with explicit shade values instead.

**Surface color mismatch**

For light themes use a light surface (e.g., `#fafafa`). For dark themes use a dark surface (e.g., `#121212`). Mismatched surface colors cause the AI to emit a warning.

## Additional Resources

- [Ignite UI for React Skills](./skills.md)
- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
