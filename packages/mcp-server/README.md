# Ignite UI MCP Server

Model Context Protocol (MCP) server for Ignite UI CLI, enabling AI assistants to create and manage Ignite UI projects programmatically.

## Overview

This MCP server exposes the capabilities of the Ignite UI CLI through the Model Context Protocol, allowing AI assistants and other MCP clients to:

- Create new Ignite UI projects for Angular, React, Web Components, and jQuery
- Upgrade projects from trial to licensed versions
- Access Ignite UI documentation and generate component code

## Installation

```bash
npm install -g @igniteui/mcp-server
```

Or use it directly with npx:

```bash
npx @igniteui/mcp-server
```

## Usage

### With Claude Desktop

Add to your Claude Desktop configuration file:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "igniteui": {
      "command": "npx",
      "args": ["-y", "@igniteui/mcp-server"]
    }
  }
}
```

### With Other MCP Clients

The server communicates over stdio and follows the MCP protocol specification. Start it with:

```bash
npx @igniteui/mcp-server
```

## Available Tools

### 1. create_igniteui_project

Create a new Ignite UI project for the specified framework.

**Parameters:**
- `name` (required): Project name
- `framework` (required): One of `angular`, `react`, `webcomponents`, or `jquery`
- `projectType` (optional): Project type specific to the framework:
  - Angular: `igx-ts` (TypeScript with Ignite UI)
  - React: `es6`, `igr-es6`, or `igr-ts` (TypeScript with Ignite UI)
  - Web Components: `igc-ts` (TypeScript with Ignite UI)
  - jQuery: `js` (JavaScript)
  - If not specified, uses the first available type for the framework
- `template` (optional): Project template (e.g., `empty`, `side-nav`, `side-nav-auth`)
- `theme` (optional): Theme name
- `skipGit` (optional): Skip Git initialization (default: false)
- `skipInstall` (optional): Skip npm installation (default: false)

**Example:**
```typescript
{
  "name": "my-app",
  "framework": "angular",
  "projectType": "igx-ts",
  "template": "side-nav"
}
```

### 2. upgrade_to_licensed

Upgrade an Ignite UI project from trial to licensed version. This command updates the package.json file to use the licensed Ignite UI packages instead of trial versions. This is useful when you have obtained a license for Ignite UI and want to upgrade an existing project.

**Note**: This command works with Angular (igx-ts), React (igr-ts), and Web Components (igc-ts) projects. jQuery projects do not support this upgrade path.

**Parameters:**
- `projectPath` (optional): Path to project directory (defaults to current directory)
- `skipInstall` (optional): Skip npm installation after upgrade (default: false)

**Example:**
```typescript
{
  "projectPath": "./my-app",
  "skipInstall": false
}
```

### 3. generate_from_docs

Generate component code from Ignite UI documentation.

**Parameters:**
- `component` (required): Component or term to search (e.g., `grid`, `data-grid`, `chart`)
- `framework` (optional): Framework context for documentation search

**Example:**
```typescript
{
  "component": "data-grid",
  "framework": "angular"
}
```

## Supported Frameworks

- **Ignite UI for Angular**: Create TypeScript Angular applications with Ignite UI components
- **Ignite UI for React**: Create React applications with Ignite UI components
- **Ignite UI for Web Components**: Create standards-based Web Components applications
- **Ignite UI for jQuery**: Create jQuery applications with Ignite UI controls

## Development

### Building

```bash
npm run build
```

### Running Locally

```bash
npm run build
node dist/index.js
```

## License

MIT

## Links

- [Ignite UI CLI Documentation](https://github.com/IgniteUI/igniteui-cli/wiki)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular)
- [Ignite UI for React](https://www.infragistics.com/products/ignite-ui-react)
- [Ignite UI for Web Components](https://www.infragistics.com/products/ignite-ui-web-components)
