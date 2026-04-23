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
		ig new [name]             creates a project
		ig add [template] [name]  adds a component or view template to the current project
		ig build                  builds the project
		ig start                  starts the project
		ig generate               generates custom templates (see subcommands) [aliases: g]
		ig config                 gets, sets or adds a configuration property (see subcommands)
		ig doc [term]             opens the Infragistics search for the given term
		ig test                   executes project tests
		ig list                   lists frameworks, project templates and component templates [aliases: l]
		ig upgrade-packages       upgrades Ignite UI packages [aliases: upgrade]
		ig mcp                    starts the Ignite UI MCP server for AI assistant integration
		ig ai-config              configures Ignite UI AI tooling (MCP servers and AI coding skills)

	  Options:
		-v, --version  Show current Ignite UI CLI version                    [boolean]
		-h, --help     Show help                                             [boolean]`.replace(/\s/g, "");

		expect(GoogleAnalytics.post).toHaveBeenCalledWith({ t: "screenview", cd: "$ig help" });
		expect(consoleSpy).toHaveBeenCalledTimes(1);
		const actualText: string = (consoleSpy.calls.mostRecent().args[0] + "").replace(/\s/g, "");
		expect(actualText).toContain(originalHelpText);
	});

	it("should show help for the new command", async () => {
		const child = Util.spawnSync("node", [execLocation, "new", "--help"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `Options:
		-v, --version         Show current Ignite UI CLI version             [boolean]
		-h, --help            Show help                                      [boolean]
		-f, --framework       framework to scaffold the project for
				  [string] [choices: "angular", "jquery", "react", "webcomponents"] [default: "jquery"]
		-t, --type            project type (depends on framework)             [string]
		--theme, --th         project theme (depends on project type)         [string]
		--skip-git, --sg      do not initialize a git repository for the project [boolean]
		--skip-install, --si  do not install packages after scaffolding       [boolean]
		--template            project template                                [string]`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
	});

	it("should show help for the config sub-commands", async () => {
		const child = Util.spawnSync("node", [execLocation, "config", "--help"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `Commands:
		ig config get <property>          gets a configuration property
		ig config set <property> <value>  sets a configuration property
		ig config add <property> <value>  adds a value to an existing configuration array

		Options:
		-v, --version  Show current Ignite UI CLI version                    [boolean]
		-h, --help     Show help                                             [boolean]
		-g, --global   use the global configuration                          [boolean]`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
	});

	it("should show help for the generate sub-commands", async () => {
		const child = Util.spawnSync("node", [execLocation, "generate", "--help"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `Commands:
		ig generate template [name]  generates a custom template scaffold [aliases: t]

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
		-f, --framework    framework to generate the template for [string] [default: "jquery"]
		-n, --name         template name         [string] [default: "custom-template"]
		-s, --skip-config  run without updating the CLI config [boolean] [default: false]
		-t, --type         project type (depends on framework)                [string]
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
		-f, --framework  framework to list templates for                      [string]
		-t, --type       project type (depends on framework)                  [string]
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
		    --e2e      execute end-to-end tests                              [boolean]
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
		term  term to search for                                              [string]
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
		-p, --port     port to serve the app on                               [number]
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
		--skip-install, --si  run upgrade without installing packages [boolean] [default: false]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
	});
});
