# IgniteUI-CLI MCP Server Specification

## Version: 1.4.0
## Date: March 19, 2026

## Overview
The IgniteUI-CLI MCP (Model Context Protocol) Server provides programmatic access to IgniteUI doc repositories, enabling AI assistants, development tools, and automation systems to interact with IgniteUI projects through a standardized protocol.

The IgniteUI-CLI MCP Server solves the "Context Gap" encountered by AI models when working with custom or rapidly evolving UI libraries. By leveraging a structured documentation backend (exposed via `/api/docs/...`) built from IgniteUI framework repositories, the server transforms curated docs and metadata into actionable knowledge, allowing an AI to understand not just what APIs and components exist, but how to implement them according to specific framework standards.

## Target Users
- AI coding assistants (GitHub Copilot, Claude, etc.)

## Use Cases
- ### Automatic Component Discovery
An engineer asks, "How do I add a multi-select filter to the Grid?" The AI uses the server to search IgniteUI docs repositories, identifies the specific "Filtering" component in the relevant framework, and retrieves its latest usage patterns.

- ### Cross-Framework Migration
A developer needs to port a feature from an existing Angular project to a new React project. The AI uses the server to compare the Interface definitions and Input properties of the Angular component against the React equivalent, ensuring a feature-parity migration.

- ### Modifying Existing App
A developer wants to update or extend a large-scale sample application (for example, one of the more complex sample apps generated locally from AppBuilder). The AI can analyze the app structure, suggest component upgrades, and automate refactoring tasks.

- ### Starting New App from Scratch
A user needs to create a brand new application. The AI guides the user through project setup, component selection, and best practices, leveraging Ignite UI CLI and design system recommendations.

- ### Migrating from Old Ignite UI Libraries
A team is migrating an application built with legacy Ignite UI component libraries to the latest versions. The AI identifies deprecated APIs, maps old components to new equivalents, and generates migration steps.

- ### Migrating from Other Vendor Components
A company is converting an app built with a different vendor's UI components to Ignite UI. The AI analyzes the existing codebase, suggests Ignite UI replacements, and automates as much of the migration as possible.

- ### Building App from Figma Design
A designer provides a Figma file. The AI interprets the design, recommends matching Ignite UI components, and scaffolds the initial app layout to accelerate development.

- ### Converting App from One Framework to Another
A developer needs to port an application from one framework (e.g., Angular) to another (e.g., React or Blazor). The AI assists by mapping components, translating patterns, and ensuring feature parity across frameworks.

# Technical Description of Tools
The server exposes six core tools built using the @modelcontextprotocol/sdk and validated via Zod schemas.

## Tool Summary

```
1. list_components      → Browse available component docs by framework
2. get_doc              → Retrieve full markdown doc for a specific component
3. search_docs          → Full-text search across docs for a framework
4. generate_ignite_app  → Scaffold a new Ignite UI project via CLI
5. search_api           → Search API entries by keyword or partial name
6. get_api_reference    → Retrieve full API reference for a known component
```

## Tool Definitions

### **list_components**
**Purpose**: Lists available Ignite UI component docs, optionally filtered by keyword.

**Logic**:
- Calls `GET /api/docs?framework=<framework>[&filter=<keyword>]` on the docs backend
- Filter matches against filename, component name, toc_name, keywords, and summary fields

**Schema**:
- `framework`: Enum (angular|react|blazor|webcomponents) — required
- `filter`: String (optional keyword to narrow results)

**Return**: JSON list of matching component doc entries.

### **get_doc**
**Purpose**: Returns the full Markdown content of a specific Ignite UI component doc.

**Logic**:
- Calls `GET /api/docs/<framework>/<name>` on the docs backend
- On HTTP 200: returns the raw Markdown body as a text content item
- On HTTP 404: does **not** throw or propagate an exception — returns a structured MCP tool-level error response (see Error Response Contract below)
- On any other HTTP error status: throws, which the MCP transport surfaces as an unhandled tool error

**Schema**:
- `framework`: Enum (angular|react|blazor|webcomponents) — required
- `name`: String — doc name without `.md` extension, e.g. `"grid-editing"` or `"accordion"` — required

**Return**: Full Markdown content of the requested doc.

#### Error Response Contract

A missing doc produces a **tool-level error** — The MCP response envelope has `isError: true` and a single `text` content item:

```
Transport layer:  HTTP 200 OK  (the MCP call itself succeeded)
MCP envelope:     { isError: true, content: [{ type: "text", text: "..." }] }
```

The `text` field follows this exact template:

```
Doc "<name>" not found for framework "<framework>". Use list_components to see available docs.
```

**Example** — calling `get_doc("angular", "grid-virtual-scrolling")` when the doc does not exist:

```json
{
  "isError": true,
  "content": [
    {
      "type": "text",
      "text": "Doc \"grid-virtual-scrolling\" not found for framework \"angular\". Use list_components to see available docs."
    }
  ]
}
```
### **search_docs**
**Purpose**: Full-text search across Ignite UI docs for a specific framework. Returns the top 20 results with excerpt snippets.

**Logic**:
- Sanitizes the query by removing special FTS characters (`" - ( ) { } [ ] : ^ ~ @ `) and wraps each term in quotes joined with `OR`
- Calls `GET /api/docs/search?framework=<framework>&query=<sanitized>` on the docs backend
- Returns an empty-query message immediately if the input is blank

**Schema**:
- `query`: String — supports prefix matching (e.g. `"grid*"`) — required
- `framework`: Enum (angular|react|blazor|webcomponents) — required

**Return**: Top 20 search results with excerpt snippets.

### **generate_ignite_app**
**Purpose**: Creates a new Ignite UI project scaffold using the official Ignite UI CLI.

**Logic**:
- Runs `npx -y igniteui-cli new <name> --framework=<framework> --type=<type> --template=<template> --skip-git=true --skip-install=true`
- For Angular, also passes `--collection=@igniteui/angular-schematics`
- Resolves `outputPath` to an absolute path (defaults to `process.cwd()`)

**Schema**:
- `name`: String — project folder name (alphanumeric, `-`, `_`) — required
- `framework`: Enum (angular|react|webcomponents) — required
- `type`: String — CLI template type (e.g., `"igx-ts"`, `"igr-ts"`, `"igc-ts"`); defaults per framework if omitted — optional
- `template`: Enum (base|side-nav|empty) — UI layout template; defaults to `"base"` — optional
- `outputPath`: String — absolute or relative path where the project is created; defaults to `process.cwd()` — optional

**Return**: Success message with output path, applied template configuration, and raw CLI output. On failure, returns `isError: true` with the CLI stderr/message.

### **search_api**
**Purpose**: Search Ignite UI API entries by keyword, feature, or partial component name across Angular, React, and Web Components. Returns up to 10 results ranked by match count.

**Logic**:
- Searches against component names, keywords, API type, and document content
- Omitting `platform` searches all three supported platforms simultaneously
- Results are ranked by match count; each result includes the exact component name, platform tag, API type (class/interface/directive/enum), match count, keyword list, and a content excerpt

**Schema**:
- `query`: String — keyword, partial name, or feature description; max 256 characters — required
- `platform`: Enum (angular|react|webcomponents) — optional; omit to search all platforms

**Constraints**:
- Blazor is not supported
- Output is text, not structured JSON
- Returns an empty-query message immediately if the input is blank

**Return**: Up to 10 ranked text results. Use the exact `name` and `platform` from a result to call `get_api_reference`.

### **get_api_reference**
**Purpose**: Retrieve the full API reference for one Ignite UI component or class. Supports Angular, React, and Web Components. Component name matching is case-insensitive.

**Logic**:
- Requires the exact component name (obtained from user code or a `search_api` result)
- Accepts an optional `section` parameter to retrieve a subset of the API and reduce response size
- Returns `isError: true` with a prompt to use `search_api` if the component is not found

**Schema**:
- `name`: String — exact component or class name; max 128 characters — required
- `platform`: Enum (angular|react|webcomponents) — required
- `section`: Enum (all|properties|methods|events) — optional; defaults to `all`

**Constraints**:
- Blazor is not supported

**Return**: Formatted Markdown for the requested API entry. The full entry (`section="all"`) includes the class/interface summary, properties with types and descriptions, methods with signatures, and events.

#### Error Response Contract

A not-found component produces a **tool-level error** — not an exception propagated to the transport. The MCP response envelope has `isError: true` and a single `text` content item:

```
Transport layer:  HTTP 200 OK  (the MCP call itself succeeded)
MCP envelope:     { isError: true, content: [{ type: "text", text: "..." }] }
```

The `text` field follows this exact template:

```
Component "<name>" not found for platform "<platform>". Use search_api to discover the correct name.
```

#### Typical Workflow

```
search_api(query, platform?)     → discover exact name and platform
get_api_reference(name, platform) → retrieve full API reference
```

## Architecture

### Communication Layer
The server communicates via Standard Input/Output (stdio), allowing it to run as a local process.

## Deployment Guide
To deploy this server:

Build: Compile the TypeScript source into the dist/ directory.

**VS Code** → `.vscode/mcp.json`

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli-mcp"]
    }
  }
}
```

**Cursor** → `.cursor/mcp.json`

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli-mcp"]
    }
  }
}
```

**Claude Desktop** → `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)
or `%APPDATA%\Claude\claude_desktop_config.json` (Windows)

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli-mcp"]
    }
  }
}
```
