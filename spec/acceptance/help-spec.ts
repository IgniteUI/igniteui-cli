import { spawnSync } from "child_process";
import * as fs from "fs-extra";
import cli = require("../../lib/cli");
describe("Help command", () => {

	it("Should list all available commands", async done => {
		const child = spawnSync("node", ["bin/execute.js", "--help" ], {
			encoding: "utf-8"
		});
		// tslint:disable-next-line:max-line-length
		const originalHelpText: string = `Commands:
			quickstart             A quick start for your project
			start                  start the project
			new <name>             Creating a new project
			build                  build the project
			test                   test the project
			add <template> <name>  Add component by it ID and providing a name.
		  Options:
			--help  Show help      [boolean]`;

		const replacedHelptext: string = originalHelpText.replace(/\s/g, "");
		const actualText: string = (child.stdout.toString("utf-8")).replace(/\s/g, "");

		expect(replacedHelptext).toEqual(actualText);
		done();
	});

});
