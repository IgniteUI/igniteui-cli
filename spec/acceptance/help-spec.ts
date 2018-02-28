import { spawnSync } from "child_process";
describe("Help command", () => {

	it("should list all available commands", async done => {
		const child = spawnSync("node", ["bin/execute.js", "--help" ], {
			encoding: "utf-8"
		});
		const originalHelpText: string = `Commands:
		quickstart             A quick start for your project
		start                  start the project
		new [name]             Creating a new project
		generate               Generates the specified blueprint                [aliases: g]
		build                  build the project
		config                 Get or set configuration properties
		test                   test the project
		add [template] [name]  Add component by it ID and providing a name.
		list [framework] [type] List all templates
	  Options:
		--version, -v  Show current Ignite UI CLI version                    [boolean]
		--help, -h     Show help                                             [boolean]`;

		const replacedHelpText: string = originalHelpText.replace(/\s/g, "");
		const actualText: string = (child.stdout.toString("utf-8")).replace(/\s/g, "");

		expect(replacedHelpText).toEqual(actualText);
		done();
	});

	it("should show help for individual commands", async done => {
		const child = spawnSync("node", ["bin/execute.js", "new", "--help" ], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `Options:
		--version, -v    Show current Ignite UI CLI version                  [boolean]
		--help, -h       Show help                                           [boolean]
		--name, -n       Project name                                         [string]
		--framework, -f  Framework to setup project for
				  [string] [choices: "angular", "jquery", "react"] [default: "jquery"]
		--type, -t       Project type (depends on framework)                  [string]
		--theme, --th    Project theme (depends on project type)              [string]`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString("utf-8")).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});

	it("should show help config sub-commands", async done => {
		const child = spawnSync("node", ["bin/execute.js", "config", "--help" ], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `Commands:
		get <property>          Get configuration properties
		set <property> <value>  Set configuration properties
		add <property> <value>  Add a value to an existing configuration array

		Options:
		--version, -v  Show current Ignite UI CLI version                    [boolean]
		--help, -h     Show help                                             [boolean]
		--global, -g   Specify if the global configuration should be used    [boolean]`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString("utf-8")).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});
	it("should show help generate sub-commands", async done => {
		const child = spawnSync("node", ["bin/execute.js", "generate", "--help" ], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `Commands:
		template	[name]	Generates custom template		[aliases: t]

		Options:
		--version,	-v	Show current Ignite UI CLI version	[boolean]
		--help,		-h	Show help							[boolean]`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString("utf-8")).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});
	it("should show help generate template sub-commands", async done => {
		const child = spawnSync("node", ["bin/execute.js", "g", "t", "-h" ], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `
		Options:
		--version, -v      Show current Ignite UI CLI version                [boolean]
		--help, -h         Show help                                         [boolean]
		--framework, -f    Framework to generate template for
														  [string] [default: "jquery"]
		--name, -n         Template name         [string] [default: "custom-template"]
		--skip-config, -s  Runs generate command without updating the cli config
															[boolean] [default: false]
		--type, -t         Project type (depends on framework)                [string]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString("utf-8")).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});
});
