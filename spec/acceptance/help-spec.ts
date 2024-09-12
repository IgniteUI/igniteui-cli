import { GoogleAnalytics } from "@igniteui/cli-core";
import { spawnSync } from "child_process";
import * as cli from "../../packages/cli/lib/cli";

const execLocation = "packages/cli/bin/execute.js";
describe("Help command", () => {
	it("should list all available commands", async done => {
		spyOn(GoogleAnalytics, "post");
		const consoleSpy = spyOn(console, "log");

		try {
			await cli.run(["--help"]);
		} catch (e) {
			fail(e);
		}

		const originalHelpText: string = `Commands:
		quickstart             creates rich feature grid
		new [name]             creates a project
		add [template] [name]  adds template by its ID
		build                  builds the project
		start                  starts the project
		generate               generates custom template                  [aliases: g]
		config                 gets, sets or adds a configuration property
		doc [term]             opens the Infragistics search for the given term
		test                   executes project tests
		list                   list all templates                           [aliases: l]
		upgrade-packages        upgrades Ignite UI Packages
	  Options:
		-v, --version  Show current Ignite UI CLI version                    [boolean]
		-h, --help     Show help                                             [boolean]`.replace(/\s/g, "");

		expect(GoogleAnalytics.post).toHaveBeenCalledWith({ t: "screenview", cd: "$ig help" });
		expect(consoleSpy).toHaveBeenCalledTimes(1);
		const actualText: string = (consoleSpy.calls.mostRecent().args[0] + "").replace(/\s/g, "");
		expect(originalHelpText).toEqual(actualText);
		done();
	});

	it("should show help for the new command", async done => {
		const child = spawnSync("node", [execLocation, "new", "--help"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `Options:
		-v, --version         Show current Ignite UI CLI version             [boolean]
		-h, --help            Show help                                      [boolean]
		-n, --name            Project name                                    [string]
		-f, --framework       Framework to setup project for
				  [string] [choices: "angular", "jquery", "react", "webcomponents"] [default: "jquery"]
		-t, --type            Project type (depends on framework)             [string]
		--theme, --th         Project theme (depends on project type)         [string]
		--skip-git, --sg      Do not automatically initialize repository for the
							  project with Git                               [boolean]
		--skip-install, --si  Do not automatically install packages          [boolean]
		--template            Project template                                [string]`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});

	it("should show help for the config sub-commands", async done => {
		const child = spawnSync("node", [execLocation, "config", "--help"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `Commands:
		config get <property>          Gets a configuration property
		config set <property> <value>  Sets a configuration property
		config add <property> <value>  Adds a value to an existing configuration array

		Options:
		-v, --version  Show current Ignite UI CLI version                    [boolean]
		-h, --help     Show help                                             [boolean]
		-g, --global   Specify if the global configuration should be used    [boolean]`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});

	it("should show help for the generate sub-commands", async done => {
		const child = spawnSync("node", [execLocation, "generate", "--help"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `Commands:
		generate template	[name]	generates custom template		[aliases: t]

		Options:
		-v, --version		Show current Ignite UI CLI version	[boolean]
		-h, --help			Show help							[boolean]`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});

	it("should show help for the generate template sub-commands", async done => {
		const child = spawnSync("node", [execLocation, "g", "t", "-h"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `
		Options:
		-v, --version      Show current Ignite UI CLI version                [boolean]
		-h, --help         Show help                                         [boolean]
		-f, --framework    Framework to generate template for
											              [string] [default: "jquery"]
		-n, --name         Template name         [string] [default: "custom-template"]
		-s, --skip-config  Runs generate command without updating the cli config
															[boolean] [default: false]
		-t, --type         Project type (depends on framework)                [string]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});

	it("should show help for the list command", async done => {
		const child = spawnSync("node", [execLocation, "list", "-h"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `
		Options:
		-v, --version    Show current Ignite UI CLI version                  [boolean]
		-h, --help       Show help                                           [boolean]
		-f, --framework  Framework to list templates for  [string] [default: "jquery"]
		-t, --type       Project type (depends on framework)                  [string]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});

	it("should show help for the quickstart command", async done => {
		const child = spawnSync("node", [execLocation, "quickstart", "-h"], {
			encoding: "utf-8"
		});

		const originalNewHelpText: string = `
		Options:
		-v, --version    Show current Ignite UI CLI version                  [boolean]
		-h, --help       Show help                                           [boolean]
		-f, --framework  Framework to setup quickstart for
		          [string] [choices: "jquery", "react", "angular"] [default: "jquery"]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});

	it("should show help for the test command", async done => {
		const child = spawnSync("node", [execLocation, "test", "-h"], {
			encoding: "utf-8"
		});

		const originalNewHelpText: string = `
		Options:
		-v, --version  Show current Ignite UI CLI version                    [boolean]
		-h, --help     Show help                                             [boolean]
		    --e2e      Executes end-to-end tests                             [boolean]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});

	it("should show help for the doc command", async done => {
		const child = spawnSync("node", [execLocation, "doc", "-h"], {
			encoding: "utf-8"
		});

		const originalNewHelpText: string = `
		Options:
		-v, --version  Show current Ignite UI CLI version                    [boolean]
		-h, --help     Show help                                             [boolean]
		    --term     The term you would like to search for                  [string]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});

	it("should show help for the build command", async done => {
		const child = spawnSync("node", [execLocation, "build", "-h"], {
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
		done();
	});

	it("should show help for the start command", async done => {
		const child = spawnSync("node", [execLocation, "start", "-h"], {
			encoding: "utf-8"
		});

		const originalNewHelpText: string = `
		Options:
		-v, --version  Show current Ignite UI CLI version                    [boolean]
		-h, --help     Show help                                             [boolean]
		-p, --port     serve app port                                         [number]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});

	it("should show help for the upgrade command", async done => {
		const child = spawnSync("node", [execLocation, "upgrade-packages", "-h"], {
			encoding: "utf-8"
		});

		const originalNewHelpText: string = `
		Options:
		-v, --version             Show current Ignite UI CLI version         [boolean]
		-h, --help                Show help                                  [boolean]
		--skip-install, --si  Runs upgrade command without performing install
                                                      [boolean] [default: false]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});
});
