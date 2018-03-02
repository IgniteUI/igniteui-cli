import * as fs from "fs";
import cli = require("../../lib/cli");
import { Util } from "../../lib/Util";
import { deleteAll, resetSpy } from "../helpers/utils";

describe("New command", () => {
	beforeEach(() => {
		spyOn(console, "log");
		spyOn(console, "error");
		process.chdir("./output");
	});

	afterEach(() => {
		// clean test folder:
		deleteAll(this.testFolder);
		fs.rmdirSync(this.testFolder);
		process.chdir("../");
	});

	it("Creates React project", async done => {
		// process.argv = ["new", "reactProj", "--framework=react"];

		await cli.run(["new", "reactProj", "--framework=react"]);

		//TODO: read entire structure from ./templates and verify everything is copied over
		expect(fs.existsSync("./reactProj")).toBeTruthy();
		expect(fs.existsSync("./reactProj/.gitignore")).toBeTruthy();
		this.testFolder = "./reactProj";
		done();
	});

	it("Creates Angular project", async done => {
		// process.argv = ["new", "reactProj", "--framework=react"];

		await cli.run(["new", "ngxProj", "--framework=angular", "--type=igx-ts"]);

		//TODO: read entire structure from ./templates and verify everything is copied over
		expect(fs.existsSync("./ngxProj")).toBeTruthy();
		expect(fs.existsSync("./ngxProj/.gitignore")).toBeTruthy();
		this.testFolder = "./ngxProj";
		done();
	});

	it("Should not work on existing folders", async done => {
		fs.mkdirSync("testProj");
		await cli.run(["new", "testProj"]);
		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Folder "testProj" already exists!/));
		fs.rmdirSync("testProj");

		await cli.run(["new", "testProj2"]);
		expect(fs.existsSync("./testProj2")).toBeTruthy();
		expect(fs.existsSync("./testProj2/ignite-cli-views.js")).toBeTruthy();

		fs.writeFileSync("./testProj2/ignite-cli-views.js", "text");
		await cli.run(["new", "testProj2"]);
		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Folder "testProj2" already exists!/));
		expect(fs.readFileSync("./testProj2/ignite-cli-views.js").toString())
			.toEqual("text", "Shouldn't overwrite existing project files!");

		resetSpy(console.error);
		await cli.run(["new", "   testProj2  \t  "]);
		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Folder "testProj2" already exists!/));
		expect(fs.readFileSync("./testProj2/ignite-cli-views.js").toString())
			.toEqual("text", "Shouldn't overwrite existing project files!");

		this.testFolder = "./testProj2";
		done();
	});

	it("Git Status", async done => {
		const projectName = "angularProj";
		await cli.run(["new", projectName, "--framework=angular", "--type=igx-ts"]);

		process.chdir(projectName);
		expect(fs.existsSync(".git")).toBeTruthy();
		expect(Util.exec("git log -1 --pretty=format:'%s'").toString())
			.toMatch("Initial commit for project: " + projectName);
		process.chdir("../");
		this.testFolder = "./angularProj";
		done();
	});

	it("Skip Git with command option", async done => {
		const projectName = "angularProj";
		await cli.run(["new", projectName, "--framework=angular", "--type=igx-ts", "--skip-git"]);

		expect(fs.existsSync("./" + projectName + "/.git")).not.toBeTruthy();
		done();
	});
});
