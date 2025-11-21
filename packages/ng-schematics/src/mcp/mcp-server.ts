import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";

interface McpOptions {
	readOnly?: boolean;
}

export async function createMcpServer(options: McpOptions): Promise<McpServer> {
	const packageJson = require("../../package.json");
	const server = new McpServer(
		{
			name: "igniteui-ng-schematics-server",
			version: packageJson.version,
		},
		{
			capabilities: {
				tools: {},
				resources: {},
				prompts: {},
			},
			instructions: `
<General Purpose>
This server provides a safe, programmatic interface to the Ignite UI for Angular Schematics for an AI assistant.
Your primary goal is to use these tools to create and modify Angular projects with Ignite UI components.
You MUST prefer the tools provided by this server over using shell commands for equivalent actions.
</General Purpose>

<Core Workflows & Tool Guide>
* **1. Create a New Angular Project:** Use the \`ng_new_igniteui\` tool to create a new Angular project with Ignite UI for Angular.

* **2. Add Components:** Use the \`ng_add_component\` tool to add Ignite UI for Angular components to an existing project.

* **3. List Available Components:** Use the \`ng_list_components\` tool to see available Ignite UI for Angular components.

* **4. Upgrade Packages:** Use the \`ng_upgrade_packages\` tool to upgrade to the licensed Ignite UI for Angular packages.
</Core Workflows & Tool Guide>

<Key Concepts>
* **Component:** Pre-built Ignite UI for Angular components that can be added to a project
* **Module:** The Angular module where the component will be registered
* **Route:** Automatically generated navigation route for new components
</Key Concepts>
`,
		}
	);

	// Register tools
	server.tool(
		"ng_new_igniteui",
		"Create a new Angular project with Ignite UI for Angular",
		{
			name: {
				type: "string",
				description: "Project name (required)",
			},
			template: {
				type: "string",
				description: "Project template (e.g., side-nav, side-nav-auth)",
			},
			theme: {
				type: "string",
				description: "Theme name for the project",
			},
			skipGit: {
				type: "boolean",
				description: "Skip initializing a Git repository",
			},
		},
		async (args: any) => {
			try {
				return {
					content: [
						{
							type: "text",
							text: `To create a new Ignite UI for Angular project, use: ng new ${args.name} --collection=@igniteui/angular-schematics`,
						},
					],
				};
			} catch (error: any) {
				return {
					content: [
						{
							type: "text",
							text: `Error creating project: ${error.message}`,
						},
					],
					isError: true,
				};
			}
		}
	);

	server.tool(
		"ng_add_component",
		"Add an Ignite UI for Angular component to the current project",
		{
			template: {
				type: "string",
				description: 'Component template ID (e.g., "grid", "combo", "chart")',
			},
			name: {
				type: "string",
				description: "Component name",
			},
			module: {
				type: "string",
				description: "Module to add the component to",
			},
			skipRoute: {
				type: "boolean",
				description: "Skip adding a route for this component",
			},
		},
		async (args: any) => {
			try {
				const templateManager = new SchematicsTemplateManager();
				const projLib = templateManager.getProjectLibrary("angular", "igx-ts");
				
				if (!projLib.hasTemplate(args.template)) {
					return {
						content: [
							{
								type: "text",
								text: `Component template "${args.template}" not found. Use ng_list_components to see available templates.`,
							},
						],
						isError: true,
					};
				}

				const commandParts = [`ng generate @igniteui/angular-schematics:component`];
				commandParts.push(`--template=${args.template}`);
				if (args.name) {
					commandParts.push(`--name=${args.name}`);
				}
				if (args.module) {
					commandParts.push(`--module=${args.module}`);
				}
				if (args.skipRoute) {
					commandParts.push(`--skip-route`);
				}
				const command = commandParts.join(' ');
				
				return {
					content: [
						{
							type: "text",
							text: `To add the component, run: ${command}`,
						},
					],
				};
			} catch (error: any) {
				return {
					content: [
						{
							type: "text",
							text: `Error adding component: ${error.message}`,
						},
					],
					isError: true,
				};
			}
		}
	);

	server.tool(
		"ng_list_components",
		"List available Ignite UI for Angular components",
		{},
		async () => {
			try {
				const templateManager = new SchematicsTemplateManager();
				const projLib = templateManager.getProjectLibrary("angular", "igx-ts");
				
				const components = projLib.components.map((c: any) => ({
					id: c.id,
					name: c.name,
					description: c.description,
					group: c.group,
				}));

				return {
					content: [
						{
							type: "text",
							text: JSON.stringify({ components }, null, 2),
						},
					],
				};
			} catch (error: any) {
				return {
					content: [
						{
							type: "text",
							text: `Error listing components: ${error.message}`,
						},
					],
					isError: true,
				};
			}
		}
	);

	server.tool(
		"ng_upgrade_packages",
		"Upgrade to the licensed Ignite UI for Angular packages",
		{},
		async () => {
			try {
				return {
					content: [
						{
							type: "text",
							text: "To upgrade packages, run: ng generate @igniteui/angular-schematics:upgrade-packages",
						},
					],
				};
			} catch (error: any) {
				return {
					content: [
						{
							type: "text",
							text: `Error upgrading packages: ${error.message}`,
						},
					],
					isError: true,
				};
			}
		}
	);

	// Enhanced tool with table formatting for component listing
	server.tool(
		"ng_list_components_with_commands",
		"List all available Ignite UI for Angular components with their corresponding CLI and schematic commands in table format",
		{
			format: {
				type: "string",
				description: "Output format: 'table' (default) or 'json'",
			},
		},
		async (args: any) => {
			try {
				const format = args.format || "table";
				const templateManager = new SchematicsTemplateManager();
				const projLib = templateManager.getProjectLibrary("angular", "igx-ts");
				
				const components: any[] = [];
				for (const component of projLib.components) {
					// Get first template for the component to extract ID
					const firstTemplate = component.templates[0];
					if (firstTemplate) {
						const componentId = firstTemplate.id;
						const cliCommand = `ig add ${componentId} new${component.name.replace(/\s/g, "")}`;
						const schematicCommand = `ng g @igniteui/angular-schematics:component ${componentId} new${component.name.replace(/\s/g, "")}`;
						
						components.push({
							id: componentId,
							name: component.name,
							description: component.description || "",
							cliCommand,
							schematicCommand,
						});
					}
				}

				if (format === "table") {
					// Create formatted table
					let table = `
Available Ignite UI for Angular Components:

| Component       | Description                    | CLI Command                    | Schematic Command                                                |
|-----------------|--------------------------------|--------------------------------|------------------------------------------------------------------|
`;
					for (const comp of components) {
						const id = comp.id.padEnd(15);
						const desc = (comp.description.substring(0, 30)).padEnd(30);
						const cli = comp.cliCommand.padEnd(30);
						const schematic = comp.schematicCommand.padEnd(64);
						table += `| ${id} | ${desc} | ${cli} | ${schematic} |\n`;
					}

					table += `
\nTo add a component, use either command from the table above.

Example for adding a grid component:
  ng g @igniteui/angular-schematics:component grid myGrid
  
Or using Ignite UI CLI:
  ig add grid myGrid

After adding a component, start your application with:
  ng serve
`;

					return {
						content: [
							{
								type: "text",
								text: table,
							},
						],
					};
				} else {
					// Return JSON format
					return {
						content: [
							{
								type: "text",
								text: JSON.stringify({ framework: "angular", components }, null, 2),
							},
						],
					};
				}
			} catch (error: any) {
				return {
					content: [
						{
							type: "text",
							text: `Error listing components: ${error.message}`,
						},
					],
					isError: true,
				};
			}
		}
	);

	// Tool to get Angular workspace information
	server.tool(
		"ng_get_workspace_info",
		"Get Angular workspace configuration and project information",
		{},
		async () => {
			try {
				// This would read angular.json in a real implementation
				// For now, provide guidance
				return {
					content: [
						{
							type: "text",
							text: "To get workspace info, read the angular.json file in your project root. This tool provides Angular workspace configuration including projects, build configurations, and paths.",
						},
					],
				};
			} catch (error: any) {
				return {
					content: [
						{
							type: "text",
							text: `Error getting workspace info: ${error.message}`,
						},
					],
					isError: true,
				};
			}
		}
	);

	return server;
}
