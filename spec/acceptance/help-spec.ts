import { spawnSync } from "child_process";
describe("Help command", () => {

	it("should list all available commands", async done => {
		const child = spawnSync("node", ["bin/execute.js", "--help" ], {
			encoding: "utf-8"
		});
		const originalHelpText: string = `Commands:
		quickstart             creates rich feature grid
		new [name]             creates a project
		add [template] [name]  adds template by its ID
		build                  builds the project
		start                  starts the project
		generate               generates custom template                  [aliases: g]
		config                 gets, sets or adds a configuration property
		doc [term]             opens the Infragistics search for the given term
		test                   tests the project
		list				   list all templates                           [aliases: l]
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
		get <property>          Gets a configuration property
		set <property> <value>  Sets a configuration property
		add <property> <value>  Adds a value to an existing configuration array

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
		template	[name]	generates custom template		[aliases: t]

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
	it("should show help for list command", async done => {
		const child = spawnSync("node", ["bin/execute.js", "list", "-h" ], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `
		Options:
		--version, -v    Show current Ignite UI CLI version                  [boolean]
		--help, -h       Show help                                           [boolean]
		--framework, -f  Framework to list templates for  [string] [default: "jquery"]
		--type, -t       Project type (depends on framework)                  [string]
		`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString("utf-8")).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});
});
