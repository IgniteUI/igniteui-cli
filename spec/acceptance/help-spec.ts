import { GoogleAnalytics } from "@igniteui/cli-core";
import { spawnSync } from "child_process";
import * as cli from "../../packages/cli/lib/cli";
import { Worker } from "worker_threads";

const execLocation = "packages/cli/bin/execute.js";
describe("Help command", () => {

	it("should list all available commands", async done => {
		const exitError = Error("exit");
		let thrownError;
		const listeners = []/* process.listeners("exit") */;

		const mockProcess: Partial<NodeJS.Process> = {};
		spyOn(process, "on").and.callFake((type: string, handler: unknown)  => {
			if (type === "exit") {
				listeners.push(handler);
			} else {
				throw Error("wrong event type");
			}
			return mockProcess as NodeJS.Process;
		});
		spyOn(process, "exit").and.callFake(() => {
			// still terminate execution, but not the whole process
			listeners.forEach(x => x.call(process, 0));
			throw exitError;
		});
		spyOn(GoogleAnalytics, "post");
		const consoleSpy = spyOn(console, "log");

		try {
			await cli.run(["--help"]);
		} catch (e) {
			thrownError = e;
		}
		expect(process.on).toHaveBeenCalled();
		expect(process.exit).toHaveBeenCalled();
		expect(thrownError).toEqual(exitError);

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
		--version, -v  Show current Ignite UI CLI version                    [boolean]
		--help, -h     Show help                                             [boolean]`.replace(/\s/g, "");

		expect(GoogleAnalytics.post).toHaveBeenCalledWith({ t: "screenview", cd: "$ig help" });
		expect(consoleSpy).toHaveBeenCalledTimes(1);
		const actualText: string = (consoleSpy.calls.mostRecent().args[0] + "").replace(/\s/g, "");
		expect(originalHelpText).toEqual(actualText);
		done();
	});

	it("should show help for individual commands", async done => {
		const child = spawnSync("node", [execLocation, "new", "--help"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `Options:
		--version, -v         Show current Ignite UI CLI version             [boolean]
		--help, -h            Show help                                      [boolean]
		--name, -n            Project name                                    [string]
		--framework, -f       Framework to setup project for
				  [string] [choices: "angular", "jquery", "react", "webcomponents"] [default: "jquery"]
		--type, -t            Project type (depends on framework)             [string]
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

	it("should show help config sub-commands", async done => {
		const child = spawnSync("node", [execLocation, "config", "--help"], {
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
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});
	it("should show help generate sub-commands", async done => {
		const child = spawnSync("node", [execLocation, "generate", "--help"], {
			encoding: "utf-8"
		});
		const originalNewHelpText: string = `Commands:
		template	[name]	generates custom template		[aliases: t]

		Options:
		--version,	-v	Show current Ignite UI CLI version	[boolean]
		--help,		-h	Show help							[boolean]`;

		const replacedNewHelpText: string = originalNewHelpText.replace(/\s/g, "");
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});
	it("should show help generate template sub-commands", async done => {
		const child = spawnSync("node", [execLocation, "g", "t", "-h"], {
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
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});
	it("should show help for list command", async done => {
		const child = spawnSync("node", [execLocation, "list", "-h"], {
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
		const actualNewText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualNewText).toContain(replacedNewHelpText);
		done();
	});
});
