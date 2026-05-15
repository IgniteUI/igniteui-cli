import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import * as cli from "../../packages/cli/lib/cli";

const execLocation = "packages/cli/bin/execute.js";
describe("Help command", () => {
	it("should list all available commands", async () => {
		spyOn(GoogleAnalytics, "post");
		const consoleSpy = spyOn(console, "log");

		try {
			await cli.run(["--help"]);
		} catch (e) {
			fail(e);
		}

		const originalHelpText: string = `Usage: ig [command] [options]

		Run without a command to start the interactive step-by-step project setup.

		Commands:
		ig new [name]             Creates a project
		ig add [template] [name]  Adds a component or view template to the current project
		ig build                  Builds the project
		ig start                  Starts the project
		ig generate               Generates custom templates (see subcommands) [aliases: g]
		ig config                 Gets, sets or adds a configuration property (see subcommands)
		ig doc [term]             Opens the Infragistics search for the given term
		ig test                   Executes project tests
		ig list                   Lists frameworks, project templates and component templates [aliases: l]
		ig upgrade-packages       Upgrades Ignite UI packages [aliases: upgrade]
		ig mcp                    Starts the Ignite UI MCP server for AI assistant integration
		ig ai-config              Configures Ignite UI AI tooling (MCP servers, AI coding skills and instructions)

	  Options:
		-v, --version  Show current Ignite UI CLI version                    [boolean]
		-h, --help     Show help                                             [boolean]
		
		Examples:
		ig                                 Launch the interactive step-by-step project setup
		ig new my-app --framework angular  Scaffold a new Ignite UI for Angular	project
		ig add grid main-grid              Add a Grid component to the current project
		ig list                            Show all frameworks and their project templates`.replace(/\s/g, "");

		expect(GoogleAnalytics.post).toHaveBeenCalledWith({ t: "screenview", cd: "$ig help" });
		expect(consoleSpy).toHaveBeenCalledTimes(1);
		const actualText: string = (consoleSpy.calls.mostRecent().args[0] + "").replace(/\s/g, "");
		expect(actualText).toContain(originalHelpText);
	});

	it("should show help for the new command", async () => {
		const child = Util.spawnSync("node", [execLocation, "new", "--help"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `ig new [name]

			Creates a project

			Positionals:
			name, n  Project name                                                 [string]

			Options:
			-v, --version             Show current Ignite UI CLI version         [boolean]
			-h, --help                Show help                                  [boolean]
			-f, --framework           Framework to scaffold the project for.
				[string] [choices: "angular", "jquery", "react", "webcomponents"] [default:
																				"angular"]
			-t, --type                Project type (depends on framework)         [string]
				--theme, --th         Project theme (depends on project type)     [string]
				--skip-git, --sg      Do not initialize a git repository for the project
																				[boolean]
				--skip-install, --si  Do not install packages after scaffolding  [boolean]
				--template            Project template                            [string]
				--agents              AI agents/tools to generate configuration files for
					[array] [choices: "generic", "claude", "copilot", "cursor", "codex",
											"windsurf", "gemini", "junie", "none"]
				--assistants          Coding assistant(s) to configure MCP servers for
					[array] [choices: "generic", "vscode", "cursor", "gemini", "junie",
																			"none"]

			Examples:
			ig new my-app                       Scaffold a new project interactively
			ig new my-app -f angular -t igx-ts  Scaffold an Ignite UI for Angular project`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
	});

	it("should show help for the config sub-commands", async () => {
		const child = Util.spawnSync("node", [execLocation, "config", "--help"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `Commands:
		ig config get <property>          Gets a configuration property
		ig config set <property> <value>  Sets a configuration property
		ig config add <property> <value>  Adds a value to an existing configuration array

		Options:
		-v, --version  Show current Ignite UI CLI version                    [boolean]
		-h, --help     Show help                                             [boolean]
		-g, --global   Use the global configuration                          [boolean]`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
	});

	it("should show help for the generate sub-commands", async () => {
		const child = Util.spawnSync("node", [execLocation, "generate", "--help"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `Commands:
		ig generate template [name]  Generates a custom template scaffold [aliases: t]

		Options:
		-v, --version  Show current Ignite UI CLI version                    [boolean]
		-h, --help     Show help                                             [boolean]`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
	});

	it("should show help for the generate template sub-commands", async () => {
		const child = Util.spawnSync("node", [execLocation, "g", "t", "-h"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `
		Options:
		-v, --version      Show current Ignite UI CLI version                [boolean]
		-h, --help         Show help                                         [boolean]
		-f, --framework    Framework to generate the template for [string] [default: "jquery"]
		-n, --name         Template name         [string] [default: "custom-template"]
		-s, --skip-config  Run without updating the CLI config [boolean] [default: false]
		-t, --type         Project type (depends on framework)                [string]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
	});

	it("should show help for the list command", async () => {
		const child = Util.spawnSync("node", [execLocation, "list", "-h"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `
		Options:
		-v, --version    Show current Ignite UI CLI version                  [boolean]
		-h, --help       Show help                                           [boolean]
		-f, --framework  Framework to list templates for                      [string]
		-t, --type       Project type (depends on framework)                  [string]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
	});

	it("should show help for the test command", async () => {
		const child = Util.spawnSync("node", [execLocation, "test", "-h"], {
			encoding: "utf-8"
		});

		const originalNewHelpText: string = `
		Options:
		-v, --version  Show current Ignite UI CLI version                    [boolean]
		-h, --help     Show help                                             [boolean]
		    --e2e      Execute end-to-end tests                              [boolean]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
	});

	it("should show help for the doc command", async () => {
		const child = Util.spawnSync("node", [execLocation, "doc", "-h"], {
			encoding: "utf-8"
		});

		const originalNewHelpText: string = `
		Positionals:
		term  Term to search for                                              [string]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
	});

	it("should show help for the build command", async () => {
		const child = Util.spawnSync("node", [execLocation, "build", "-h"], {
			encoding: "utf-8"
		});

		// ig build does not expose any options so just expect to see the general help text
		const originalNewHelpText: string = `
		Options:
		-v, --version  Show current Ignite UI CLI version                    [boolean]
		-h, --help     Show help                                             [boolean]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
	});

	it("should show help for the start command", async () => {
		const child = Util.spawnSync("node", [execLocation, "start", "-h"], {
			encoding: "utf-8"
		});

		const originalNewHelpText: string = `
		Options:
		-v, --version  Show current Ignite UI CLI version                    [boolean]
		-h, --help     Show help                                             [boolean]
		-p, --port     Port to serve the app on                               [number]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
	});

	it("should show help for the upgrade command", async () => {
		const child = Util.spawnSync("node", [execLocation, "upgrade-packages", "-h"], {
			encoding: "utf-8"
		});

		const originalNewHelpText: string = `
		Options:
		-v, --version             Show current Ignite UI CLI version         [boolean]
		-h, --help                Show help                                  [boolean]
		--skip-install, --si  Run upgrade without installing packages [boolean] [default: false]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
	});

	it("should show help for the ai-config command", async () => {
		const child = Util.spawnSync("node", [execLocation, "ai-config", "-h"], {
			encoding: "utf-8"
		});

		const originalHelpText: string = `
		Options:
		-v, --version     Show current Ignite UI CLI version                           [boolean]
		-h, --help        Show help                                                    [boolean]
			--agents      AI agents/tools to generate configuration files for          [array]
				[choices: "generic", "claude", "copilot", "cursor", "codex", "windsurf", "gemini", "junie", "none"]
			--assistants  Coding assistant(s) to configure MCP servers for             [array]
				[choices: "generic", "vscode", "cursor", "gemini", "junie", "none"]
		-f, --framework   Manually set project framework to configure AI for.          [string]
			[choices: "angular", "blazor", "jquery", "react", "webcomponents"]`;

		const replacedHelpText: string = originalHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedHelpText);
	});
});
