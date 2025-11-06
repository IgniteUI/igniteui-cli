# MCP Server Implementation

This document describes the Model Context Protocol (MCP) server implementation for the Ignite UI CLI and Angular Schematics packages.

## Overview

The MCP server provides a programmatic interface for AI assistants to interact with Ignite UI CLI functionality. It follows the [Model Context Protocol](https://modelcontextprotocol.io/) specification.

## Packages

### @igniteui/cli MCP Server

The CLI package includes an `mcp` command that exposes key CLI functionality through MCP tools.

#### Usage

To start the MCP server:

```bash
ig mcp
```

Or via npx:

```bash
npx igniteui-cli mcp
```

#### Configuration

Add the following configuration to your MCP host:

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    }
  }
}
```

#### Available Tools

1. **ig_new** - Create a new Ignite UI project
   - Parameters: name, framework, type, theme, skipGit, skipInstall, template

2. **ig_add** - Add a component template to an existing project
   - Parameters: template, name, module, skipRoute

3. **ig_upgrade_packages** - Upgrade Ignite UI packages
   - Parameters: skipInstall

4. **ig_list_templates** - List available frameworks and templates
   - No parameters

5. **ig_interactive** - Start interactive step-by-step mode
   - No parameters

#### Options

- `--read-only`: Only register read-only tools (default: false)

### @igniteui/angular-schematics MCP Server

The ng-schematics package includes an MCP server for Angular-specific functionality.

#### Usage

Via Angular CLI schematic:

```bash
ng generate @igniteui/angular-schematics:mcp
```

#### Available Tools

1. **ng_new_igniteui** - Create a new Angular project with Ignite UI
   - Parameters: name, template, theme, skipGit

2. **ng_add_component** - Add an Ignite UI component
   - Parameters: template, name, module, skipRoute

3. **ng_list_components** - List available components
   - No parameters

4. **ng_upgrade_packages** - Upgrade to licensed packages
   - No parameters

## Development

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
```

## Implementation Details

- Both packages use the `@modelcontextprotocol/sdk` library
- The MCP server uses stdio transport for communication
- When run in a TTY (interactive terminal), the command displays usage instructions
- When run non-interactively (e.g., from an MCP host), it starts the MCP server

## References

- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Ignite UI CLI Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/cli/getting-started-with-angular-schematics)
- [Angular CLI MCP Implementation](https://github.com/angular/angular-cli/tree/main/packages/angular/cli/src/commands/mcp)
