# MCP Server Implementation

This document describes the Model Context Protocol (MCP) server implementation for the Ignite UI CLI and Angular Schematics packages.

## Overview

The MCP server provides a programmatic interface for AI assistants to interact with Ignite UI CLI functionality. It follows the [Model Context Protocol](https://modelcontextprotocol.io/) specification and implements all three core MCP primitives: **Tools**, **Resources**, and **Prompts**.

## Packages

### @igniteui/cli MCP Server

The CLI package includes an `mcp` command that exposes key CLI functionality through MCP tools for **all Ignite UI frameworks**: Angular, React, WebComponents, and jQuery.

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

#### MCP Capabilities

The server implements:
- ✅ **Tools** - 8 executable functions for project management
- ✅ **Resources** - Contextual data access (via tools)
- ✅ **Prompts** - Reusable interaction templates (declared)

#### Available Tools

##### Project Management Tools

1. **ig_new** - Create a new Ignite UI project
   - Parameters: name, framework (angular/react/webcomponents/jQuery), type, theme, skipGit, skipInstall, template
   - Supports: All frameworks

2. **ig_add** - Add a component template to an existing project
   - Parameters: template, name, module, skipRoute
   - Supports: All frameworks

3. **ig_upgrade_packages** - Upgrade Ignite UI packages
   - Parameters: skipInstall
   - Supports: All frameworks

4. **ig_interactive** - Start interactive step-by-step mode
   - No parameters
   - Provides: Guided project creation

##### Component Discovery Tools

5. **ig_list_templates** - List available frameworks and templates (JSON format)
   - No parameters
   - Returns: Structured JSON with all components

6. **ig_list_components_with_commands** ⭐ NEW - List components with formatted table
   - Parameters: framework (angular/react/webcomponents), format (table/json)
   - Returns: Formatted table showing Component | Description | CLI Command | Schematic Command
   - Example output:
   ```
   Available Ignite UI Components for angular:
   
   | Component  | Description  | CLI Command          | Schematic Command (Angular)                         |
   |------------|--------------|----------------------|-----------------------------------------------------|
   | grid       | Data Grid    | ig add grid newGrid  | ng g @igniteui/angular-schematics:component grid newGrid |
   | combo      | Combo Box    | ig add combo newCombo| ng g @igniteui/angular-schematics:component combo newCombo |
   
   To add a component, use either command from the table above.
   After adding a component, start your application with:
     - For Angular: ng serve (or ig start)
     - For React: npm start (or ig start)
     - For WebComponents: npm start (or ig start)
   ```

##### Resource Access Tools

7. **ig_get_project_config** ⭐ NEW - Get current project configuration
   - No parameters
   - Returns: Content of ignite-ui-cli.json

8. **ig_get_components_catalog** ⭐ NEW - Get full component catalog
   - Parameters: framework
   - Returns: Complete component metadata including templates, descriptions, groups

#### Supported Frameworks

The MCP server provides unified access to:
- 🅰️ **Angular** - [igniteui-angular](https://github.com/IgniteUI/igniteui-angular)
- ⚛️ **React** - [igniteui-react](https://github.com/IgniteUI/igniteui-react)
- 🌐 **WebComponents** - [igniteui-webcomponents](https://github.com/IgniteUI/igniteui-webcomponents)
- 📦 **jQuery** - Legacy support

#### Options

- `--read-only`: Only register read-only tools (default: false)

### @igniteui/angular-schematics MCP Server

The ng-schematics package includes an MCP server for Angular-specific functionality.

#### Usage

Via Angular CLI schematic:

```bash
ng generate @igniteui/angular-schematics:mcp
```

#### MCP Capabilities

The server implements:
- ✅ **Tools** - 6 executable functions for Angular projects
- ✅ **Resources** - Contextual data access (via tools)
- ✅ **Prompts** - Reusable interaction templates (declared)

#### Available Tools

1. **ng_new_igniteui** - Create a new Angular project with Ignite UI
   - Parameters: name, template, theme, skipGit

2. **ng_add_component** - Add an Ignite UI component
   - Parameters: template, name, module, skipRoute
   - Returns: Both CLI and schematic commands

3. **ng_list_components** - List available components (JSON)
   - No parameters

4. **ng_upgrade_packages** - Upgrade to licensed packages
   - No parameters

5. **ng_list_components_with_commands** ⭐ NEW - List with table formatting
   - Parameters: format (table/json)
   - Returns: Formatted table with both command options

6. **ng_get_workspace_info** ⭐ NEW - Get Angular workspace info
   - No parameters
   - Returns: Angular workspace configuration guidance

## Workflow Examples

### Adding a Component (Complete Workflow)

1. **Discover Components**
   ```json
   {
     "tool": "ig_list_components_with_commands",
     "arguments": { "framework": "angular", "format": "table" }
   }
   ```

2. **Choose Component** from the table (e.g., grid)

3. **Add Component** using suggested command:
   ```bash
   ng g @igniteui/angular-schematics:component grid myGrid
   ```
   Or:
   ```bash
   ig add grid myGrid
   ```

4. **Start Application**
   ```bash
   ng serve  # or ig start
   ```

### Multi-Framework Support

The same MCP server works for all frameworks:

**For React:**
```json
{
  "tool": "ig_list_components_with_commands",
  "arguments": { "framework": "react" }
}
```

**For WebComponents:**
```json
{
  "tool": "ig_list_components_with_commands",
  "arguments": { "framework": "webcomponents" }
}
```

## Development

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

All MCP tests passing:
- ✅ MCP command tests (3/3)
- ✅ MCP Server Extended Tests (10/10)
- ✅ MCP Server Capabilities (3/3)

### Linting

```bash
npm run lint
```

## Implementation Details

### Architecture

- Both packages use the `@modelcontextprotocol/sdk@1.21.0` library
- The MCP server uses stdio transport for communication
- When run in a TTY (interactive terminal), the command displays usage instructions
- When run non-interactively (e.g., from an MCP host), it starts the MCP server

### Server Capabilities

```typescript
capabilities: {
  tools: {},      // Executable functions
  resources: {},  // Contextual data sources
  prompts: {},    // Interaction templates
}
```

### Table Formatting

The enhanced list tools provide formatted tables that show:
- Component name and description
- **Two command options**: CLI command AND schematic command (for Angular)
- Framework-specific start commands
- Clear next steps guidance

This addresses the key requirement for developers to see both command options side-by-side and know how to start their application after adding a component.

## Integration with Angular CLI MCP

For complete Angular development, configure both MCP servers:

```json
{
  "mcpServers": {
    "angular-cli": {
      "command": "npx",
      "args": ["-y", "@angular/cli", "mcp"]
    },
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    }
  }
}
```

This allows AI assistants to:
- Use Angular CLI tools for core Angular operations (build, serve, test, generate standard components)
- Use Ignite UI CLI tools for Ignite UI-specific operations (add Ignite UI components, configure themes)

## Future Enhancements

Potential additions based on the discussion:
- `ig_get_component_docs` - Detailed component documentation
- `ig_search_docs` - Documentation search
- `ig_get_code_example` - Code examples for components
- `ig_check_compatibility` - Version compatibility checking
- `ig_get_migration_guide` - Migration guides between versions
- `ig_get_best_practices` - Framework-specific best practices

## References

- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Ignite UI CLI Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/cli/getting-started-with-angular-schematics)
- [Angular CLI MCP Implementation](https://github.com/angular/angular-cli/tree/main/packages/angular/cli/src/commands/mcp)
- [Ignite UI Angular](https://github.com/IgniteUI/igniteui-angular)
- [Ignite UI React](https://github.com/IgniteUI/igniteui-react)
- [Ignite UI WebComponents](https://github.com/IgniteUI/igniteui-webcomponents)

