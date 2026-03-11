# IgniteUI-CLI MCP Server Specification

## Version: 1.2.0
## Date: February 16, 2026

## Overview
The IgniteUI-CLI MCP (Model Context Protocol) Server provides programmatic access to IgniteUI repositories, enabling AI assistants, development tools, and automation systems to interact with IgniteUI projects through a standardized protocol.

The Framework MCP Server solves the "Context Gap" encountered by AI models when working with custom or rapidly evolving UI libraries. By utilizing the GitHub Octokit API, the server transforms raw codebases into actionable knowledge, allowing an AI to understand not just what code exists, but how to implement it according to specific framework standards.

## 1.3 Target Users
- AI coding assistants (GitHub Copilot, Claude, etc.)

## Use Cases
- ### Automatic Component Discovery
An engineer asks, "How do I add a multi-select filter to the Grid?" The AI uses the server to search  IgniteUI framework repositories, identifies the specific "Filtering" component in the relevant framework, and retrieves its latest usage patterns.

- ### Cross-Framework Migration
A developer needs to port a feature from an existing Angular project to a new React project. The AI uses the server to compare the Interface definitions and Input properties of the Angular component against the React equivalent, ensuring a feature-parity migration.

- ### Zero-Config Onboarding
When a developer opens a local project, the AI automatically invokes the detection tool. It identifies the project as "Blazor" and immediately restricts its internal search tools to the Blazor documentation and component repositories, preventing framework-mismatch hallucinations.

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
The server exposes seven core tools built using the @modelcontextprotocol/sdk and validated via Zod schemas.

## Tool 

```
1. list_components      → Detect user's framework
2. search_documentation        → Understand concepts/patterns
3. get_api_definition         → Get detailed API signatures
4. get_example_scaffold     → Find implementation examples
5. generate_ignite_app        → Create new projects
6. add_ignite_component       → Add components to existing projects
7. get_cli_templates_list → List available templates and components using the Ignite UI CLI
```

## Tool Definitions

### **search_documentation**
**Purpose**: Retrieves official Markdown documentation containing setup instructions, best practices, and configuration patterns.

**Logic**: 
- Searches for .md files in framework-specific documentation repositories


### **get_api_definition**
**Purpose**: Extracts public API surface (interfaces, classes, types, decorators) from component source files.

**Logic**: 
- Fetches file content via Octokit
- Uses regex pattern matching to extract: interface, class, type, export declarations
- Filters out internal implementation logic
- Reduces token usage by returning only API contracts

**Return**: Filtered API definitions (interfaces, type signatures, @Input/@Output decorators).

### **get_exmple_scaffolde**
**Purpose**: Finds complete implementation examples showing how multiple components work together.

**Logic**: 
- Searches sample repositories (igniteui-angular-samples, igniteui-react-examples, etc.)
- Uses broad search terms (form, grid-editing, dashboard)

### **generate_ignite_app**
**Purpose**: Creates a new Ignite UI project scaffold using the official CLI.

**Logic**: 
- Executes `npx igniteui-cli new <name> --framework=<framework>`
- Generates complete project structure with dependencies
- Does NOT require get_project_framework (creates new project)

**Schema**: 
- `name`: String (project folder name)
- `framework`: Enum (angular|react|webcomponents)
- `type`: String (template type, e.g., "igx-ts" for Angular)

**Return**: Success message with next steps (npm install, npm start).

### **add_ignite_component**
**Purpose**: Adds a specific Ignite UI component to an existing project using the CLI.

**Logic**: 
- Executes `npx igniteui-cli add <templateId> <name>`
- Scaffolds component with proper imports and registration
- Requires existing Ignite UI project

**Schema**: 
- `templateId`: String (e.g., "grid", "tabs", "category-chart")
- `name`: String (component instance name)
- `projectPath`: String (default: "./")

**Return**: Success message with generated file locations.

### **get_cli_templates_list**
**Purpose**: Lists available templates and components using the Ignite UI CLI (`npx igniteui-cli list`).

**Logic**:
- Executes `npx igniteui-cli list` (optionally with `--framework=<framework>`)
- Parses and returns the CLI output, which includes available templates and components for the selected framework

**Schema**:
- `framework`: Enum (angular|react|webcomponents) (optional)

**Return**: List of available templates and components as reported by the CLI.

## Architecture and Security

### Communication Layer
The server communicates via Standard Input/Output (stdio), allowing it to run as a local process. This ensures that sensitive credentials like GITHUB_TOKEN remain in the user's environment and are never sent to a remote AI service.

## Deployment Guide
To deploy this server:

Build: Compile the TypeScript source into the dist/ directory.

```json
"framework-mcp": {
  "command": "node",
  "args": ["/path/to/dist/index.js"],
}
```
