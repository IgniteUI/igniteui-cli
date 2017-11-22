import * as fs from "fs";
import cli = require("../../lib/cli");
describe("New command", () => {

	it("React project", async done => {
		process.chdir("./output");
		// process.argv = ["new", "reactProj", "--framework=react"];

		// this isn't really going to wait.. TODO
		await cli.run(["new", "reactProj", "--framework=react"]);

		//TODO: read entire structure from ./templates and verify everything is copied over
		expect(fs.existsSync("./reactProj")).toBeTruthy();
		process.chdir("../");
		done();
	});

});
