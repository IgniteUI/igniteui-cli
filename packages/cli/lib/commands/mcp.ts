import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { Util } from "@igniteui/cli-core";
import { ArgumentsCamelCase } from "yargs";
import { CommandType, PositionalArgs } from "./types";
import { TemplateManager } from "../TemplateManager";
import { PromptSession } from "../PromptSession";
import newCommand from "./new";
import add from "./add";
import upgrade from "./upgrade";

const INTERACTIVE_MESSAGE = `
To start using the Ignite UI CLI MCP Server, add this configuration to your host:

{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    }
  }
}

Exact configuration may differ depending on the host.

For more information, visit: https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/cli/getting-started-with-angular-schematics
`;

interface McpOptions {
	readOnly?: boolean;
}

async function createMcpServer(
	templateManager: TemplateManager,
	options: McpOptions
): Promise<McpServer> {
	const packageJson = require("../../package.json");
	const server = new McpServer(
		{
			name: "igniteui-cli-server",
			version: packageJson.version,
		},
		{
			capabilities: {
				tools: {},
			},
			instructions: `
<General Purpose>
This server provides a safe, programmatic interface to the Ignite UI CLI for an AI assistant.
Your primary goal is to use these tools to create, modify, and manage Ignite UI projects.
You MUST prefer the tools provided by this server over using shell commands for equivalent actions.
</General Purpose>

<Core Workflows & Tool Guide>
* **1. Create a New Project:** Use the \`ig_new\` tool to create a new Ignite UI project with a specific framework (angular, react, jquery, webcomponents).

* **2. Add Components:** Use the \`ig_add\` tool to add Ignite UI components to an existing project.

* **3. Upgrade Packages:** Use the \`ig_upgrade_packages\` tool to upgrade Ignite UI packages in a project.

* **4. Interactive Mode:** Use the \`ig_interactive\` tool to start the step-by-step guided mode for project creation.

* **5. List Available Templates:** Use the \`ig_list_templates\` tool to see available frameworks, project types, and component templates.
</Core Workflows & Tool Guide>

<Key Concepts>
* **Framework:** The base technology (angular, react, jquery, webcomponents)
* **Project Type:** The specific variant within a framework (e.g., igx-ts for Angular)
* **Template:** Pre-built components or views that can be added to a project
</Key Concepts>
`,
		}
	);

	// Register tools
	server.tool(
		"ig_new",
		"Create a new Ignite UI project",
		{
			name: {
				type: "string",
				description: "Project name (required)",
			},
			framework: {
				type: "string",
				description: "Framework to setup project for (jquery, angular, react, webcomponents)",
			},
			type: {
				type: "string",
				description: "Project type (depends on framework)",
			},
			theme: {
				type: "string",
				description: "Project theme (depends on project type)",
			},
			skipGit: {
				type: "boolean",
				description: "Do not automatically initialize repository with Git",
			},
			skipInstall: {
				type: "boolean",
				description: "Do not automatically install packages",
			},
			template: {
				type: "string",
				description: "Project template",
			},
		},
		async (args: any) => {
			try {
				const argv = {
					_: ["new"],
					$0: "ig",
					name: args.name,
					framework: args.framework || "angular",
					type: args.type,
					theme: args.theme,
					skipGit: args.skipGit || false,
					skipInstall: args.skipInstall || false,
					template: args.template,
				} as ArgumentsCamelCase<PositionalArgs>;

				newCommand.templateManager = templateManager;
				await newCommand.handler(argv);

				return {
					content: [
						{
							type: "text",
							text: `Successfully created project "${args.name}"`,
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
		"ig_add",
		"Add a component template to an existing Ignite UI project",
		{
			template: {
				type: "string",
				description: 'Template ID (e.g., "grid", "combo", "chart")',
			},
			name: {
				type: "string",
				description: "Component file name",
			},
			module: {
				type: "string",
				description: "The module to which the template is to be added",
			},
			skipRoute: {
				type: "boolean",
				description: "Don't auto-generate an app navigation route for the new component",
			},
		},
		async (args: any) => {
			try {
				const argv = {
					_: ["add"],
					$0: "ig",
					template: args.template,
					name: args.name,
					module: args.module,
					skipRoute: args.skipRoute || false,
				} as ArgumentsCamelCase<PositionalArgs>;

				add.templateManager = templateManager;
				await add.handler(argv);

				return {
					content: [
						{
							type: "text",
							text: `Successfully added template "${args.template}" as "${args.name}"`,
						},
					],
				};
			} catch (error: any) {
				return {
					content: [
						{
							type: "text",
							text: `Error adding template: ${error.message}`,
						},
					],
					isError: true,
				};
			}
		}
	);

	server.tool(
		"ig_upgrade_packages",
		"Upgrade Ignite UI packages in the current project",
		{
			skipInstall: {
				type: "boolean",
				description: "Run upgrade command without performing install",
			},
		},
		async (args: any) => {
			try {
				const argv = {
					_: ["upgrade-packages"],
					$0: "ig",
					skipInstall: args.skipInstall || false,
				} as ArgumentsCamelCase<PositionalArgs>;

				upgrade.templateManager = templateManager;
				await upgrade.handler(argv);

				return {
					content: [
						{
							type: "text",
							text: "Successfully upgraded Ignite UI packages",
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

	server.tool(
		"ig_list_templates",
		"List available frameworks, project types, and component templates",
		{},
		async () => {
			try {
				const frameworks = templateManager.getFrameworkIds();
				const result: any = {
					frameworks: [],
				};

				for (const frameworkId of frameworks) {
					const framework = templateManager.getFrameworkById(frameworkId);
					const projectLibraries = framework?.projectLibraries || [];
					
					const frameworkInfo: any = {
						id: frameworkId,
						name: framework?.name || frameworkId,
						projectTypes: [],
					};

					for (const projectLib of projectLibraries) {
						const projectTypeInfo: any = {
							id: projectLib.projectType,
							name: projectLib.name,
							themes: projectLib.themes,
							projects: projectLib.projectIds,
							components: projectLib.components.map((c: any) => ({
								id: c.id,
								name: c.name,
								description: c.description,
							})),
						};
						frameworkInfo.projectTypes.push(projectTypeInfo);
					}

					result.frameworks.push(frameworkInfo);
				}

				return {
					content: [
						{
							type: "text",
							text: JSON.stringify(result, null, 2),
						},
					],
				};
			} catch (error: any) {
				return {
					content: [
						{
							type: "text",
							text: `Error listing templates: ${error.message}`,
						},
					],
					isError: true,
				};
			}
		}
	);

	server.tool(
		"ig_interactive",
		"Start the Ignite UI CLI in interactive step-by-step mode",
		{},
		async () => {
			try {
				const prompts = new PromptSession(templateManager);
				await prompts.start();

				return {
					content: [
						{
							type: "text",
							text: "Interactive session completed",
						},
					],
				};
			} catch (error: any) {
				return {
					content: [
						{
							type: "text",
							text: `Error in interactive mode: ${error.message}`,
						},
					],
					isError: true,
				};
			}
		}
	);

	return server;
}

function isTTY(): boolean {
	return Boolean(process.stdout.isTTY);
}

const command: CommandType = {
	command: "mcp",
	describe: "Start the Ignite UI CLI MCP (Model Context Protocol) server",
	templateManager: null,
	builder: (yargs) => {
		return yargs
			.option("read-only", {
				type: "boolean",
				default: false,
				describe: "Only register read-only tools",
			})
			.usage("");
	},
	async handler(argv: ArgumentsCamelCase<PositionalArgs & { readOnly?: boolean }>) {
		if (isTTY()) {
			Util.log(INTERACTIVE_MESSAGE);
			return;
		}

		const server = await createMcpServer(
			command.templateManager || new TemplateManager(),
			{
				readOnly: argv.readOnly,
			}
		);

		const transport = new StdioServerTransport();
		await server.connect(transport);
	},
};

export default command;
