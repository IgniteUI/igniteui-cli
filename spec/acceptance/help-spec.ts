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
		build                  build the project
		test                   test the project
		add [template] [name]  Add component by it ID and providing a name.
	  
	  Options:
		-v, --version  Show current Ignite UI CLI version                    [boolean]
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
		-v, --version    Show current Ignite UI CLI version                  [boolean]
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
});
