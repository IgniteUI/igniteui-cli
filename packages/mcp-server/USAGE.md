# Ignite UI MCP Server - Usage Guide

This guide provides examples of how to use the Ignite UI MCP server with AI assistants and MCP clients.

## Quick Start

### Setting up with Claude Desktop

1. Install the MCP server globally:
   ```bash
   npm install -g @igniteui/mcp-server
   ```

2. Add to your Claude Desktop config file:
   
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

3. Restart Claude Desktop

## Example Use Cases

### 1. Creating a New Angular Project

Ask Claude:
```
Create a new Ignite UI Angular project called "my-dashboard" with the side-nav template
```

The MCP server will:
- Create a new Angular project with Ignite UI components
- Use the `igx-ts` project type
- Apply the `side-nav` template
- Set up the project structure

### 2. Creating a React Application

Ask Claude:
```
Create a React app named "data-viewer" using Ignite UI for React with TypeScript
```

The MCP server will:
- Create a React project with the `igr-ts` project type
- Configure TypeScript
- Set up Ignite UI for React components

### 3. Creating a Web Components Project

Ask Claude:
```
I need a Web Components project called "widget-app" using Ignite UI
```

The MCP server will:
- Create a project with the `igc-ts` project type
- Set up Ignite UI for Web Components

### 4. Upgrading to Licensed Version

Ask Claude:
```
Upgrade my current Ignite UI project to use the licensed version instead of trial
```

The MCP server will:
- Update package.json to use licensed Ignite UI packages
- Optionally run npm install to apply changes

### 5. Finding Component Documentation

Ask Claude:
```
Show me documentation for the Ignite UI data grid component in Angular
```

The MCP server will:
- Provide a search URL for the data grid documentation
- Include Angular-specific context
- Link to code examples and API documentation

## Tool Reference

### create_igniteui_project

Creates a new Ignite UI project for the specified framework.

**Example Request:**
```json
{
  "name": "create_igniteui_project",
  "arguments": {
    "name": "my-app",
    "framework": "angular",
    "projectType": "igx-ts",
    "template": "side-nav",
    "skipGit": false,
    "skipInstall": false
  }
}
```

**Supported Frameworks:**
- `angular` - Ignite UI for Angular
- `react` - Ignite UI for React
- `webcomponents` - Ignite UI for Web Components
- `jquery` - Ignite UI for jQuery

**Project Types by Framework:**
- Angular: `igx-ts` (TypeScript)
- React: `es6`, `igr-es6`, `igr-ts` (TypeScript)
- Web Components: `igc-ts` (TypeScript)
- jQuery: `js`

**Common Templates:**
- `empty` - Minimal project structure
- `side-nav` - Application with side navigation
- `side-nav-auth` - Application with side navigation and authentication

### upgrade_to_licensed

Upgrades a project from trial to licensed Ignite UI packages.

**Example Request:**
```json
{
  "name": "upgrade_to_licensed",
  "arguments": {
    "projectPath": "./my-app",
    "skipInstall": false
  }
}
```

**Supported Project Types:**
- Angular `igx-ts` projects
- React `igr-ts` projects  
- Web Components `igc-ts` projects

**Note:** jQuery projects do not support this upgrade path.

### generate_from_docs

Searches Ignite UI documentation for components and code examples.

**Example Request:**
```json
{
  "name": "generate_from_docs",
  "arguments": {
    "component": "data-grid",
    "framework": "angular"
  }
}
```

**Common Components:**
- `grid` / `data-grid` - Data grid component
- `chart` - Chart components
- `combo` - Combo box component
- `tree` - Tree component
- `dialog` - Dialog component

## Troubleshooting

### MCP Server Not Responding

1. Verify the server is installed:
   ```bash
   npm list -g @igniteui/mcp-server
   ```

2. Test the server manually:
   ```bash
   npx @igniteui/mcp-server
   ```

3. Check Claude Desktop logs for errors

### Project Creation Fails

- Ensure the project name is valid (starts with a letter, alphanumeric)
- Check that the directory doesn't already exist
- Verify you have internet connection for package downloads
- Try with `skipInstall: true` to debug installation issues

### Upgrade Command Not Working

- Verify you're in an Ignite UI project directory
- Check that `ignite-ui-cli.json` exists in the project root
- Ensure the project type is supported (igx-ts, igr-ts, or igc-ts)

## Advanced Usage

### Custom Themes

When creating a project, you can specify a custom theme:

```
Create an Angular app with the bootstrap theme
```

### Skipping Installation

For faster project creation during development:

```
Create a React app named "test-app" but skip npm install
```

### Multiple Projects

You can create multiple projects in succession:

```
Create three projects: an Angular app called "admin", a React app called "client", and a Web Components app called "widgets"
```

## Learn More

- [Ignite UI for Angular Documentation](https://www.infragistics.com/products/ignite-ui-angular)
- [Ignite UI for React Documentation](https://www.infragistics.com/products/ignite-ui-react)
- [Ignite UI for Web Components Documentation](https://www.infragistics.com/products/ignite-ui-web-components)
- [Ignite UI CLI Wiki](https://github.com/IgniteUI/igniteui-cli/wiki)
- [Model Context Protocol](https://modelcontextprotocol.io/)
