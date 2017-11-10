import * as fs from "fs";
describe("New", () => {

	// tslint:disable-next-line:only-arrow-functions
	it("React project", async function(done) {
		process.chdir("./output");
		process.argv = ["node", "cli", "new", "reactProj", "--framework=react"];

		const cli = require("../../lib/cli");

		// this isn't really going to wait.. TODO
		await cli.run();

		//TODO: read entire structure from ./templates and verify everything is copied over
		expect(fs.existsSync("./reactProj")).toBeTruthy();
		done();
	});

});
