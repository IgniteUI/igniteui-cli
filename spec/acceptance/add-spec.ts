import { spawnSync } from "child_process";
import * as fs from "fs-extra";
import { parse } from "path";
import cli = require("../../lib/cli");
import { ProjectConfig } from "../../lib/ProjectConfig";

describe("Add command", () => {
	const outWrite = process.stdout.write;
	const errWrite = process.stderr.write;
	let testFolder = parse(__filename).name;

	beforeEach(() => {
		this.log = [];
		this.errorLog = [];
		// prevent console log/error, just record:
		process.stdout.write = (str: string): boolean => {
			this.log.push(str);
			return true;
		};
		process.stderr.write = (str: string): boolean => {
			this.errorLog.push(str);
			return true;
		};
		// test folder, w/ existing check:
		while (fs.existsSync(`./output/${testFolder}`)) {
			testFolder += 1;
		}
		fs.mkdirSync(`./output/${testFolder}`);
		process.chdir(`./output/${testFolder}`);
	});

	afterEach(() => {
		// restore console log/error
		process.stdout.write = outWrite;
		process.stderr.write = errWrite;

		// clean test folder:
		process.chdir("../../");
		fs.rmdirSync(`./output/${testFolder}`);
	});

	it("Should show help with missing arg", async done => {

		const child = spawnSync("node", ["../../bin/execute.js", "add", "grid" ], {
			encoding: "utf-8"
		});
		//await cli.run(["add", "grid"]);
		expect(child.stderr.toString("utf-8")).toMatch(/add\s+<template>\s+<name>/);
		expect(child.stdout.length).toEqual(0);

		done();
	});

	it("Should not work without a project", async done => {
		await cli.run(["add", "grid", "name"]);

		expect(this.errorLog).toContain(
			jasmine.stringMatching(/Add command is supported only on existing project created with ignite-ui-cli\s*/)
		);
		expect(this.log).toEqual([]);

		done();
	});

	it("Should not work quickstart project", async done => {
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({ project: { isShowcase: true} }));
		await cli.run(["add", "grid", "name"]);

		expect(this.errorLog).toContain(
			jasmine.stringMatching(/Showcases and quickstart projects don't support the add command\s*/)
		);
		expect(this.log).toEqual([]);

		fs.unlinkSync(ProjectConfig.configFile);
		done();
	});

	it("Should not work with wrong framework", async done => {
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({ project: { framework: "angular2" } }));
		await cli.run(["add", "grid", "name"]);

		expect(this.errorLog).toContain(jasmine.stringMatching(/Framework not supported\s*/));
		expect(this.log).toEqual([]);

		fs.unlinkSync(ProjectConfig.configFile);
		done();
	});

	it("Should not work with wrong template", async done => {
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({ project: { framework: "jquery" } }));
		await cli.run(["add", "wrong", "name"]);

		expect(this.errorLog).toContain(jasmine.stringMatching(/Template doesn't exist in the current library\s*/));
		expect(this.log).toEqual([]);

		fs.unlinkSync(ProjectConfig.configFile);
		done();
	});

	it("Should correctly add jQuery template", async done => {
		// TODO: Mock out template manager and project register
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({
			project: { framework: "jquery", projectType: "js", components: [] }
		}));
		fs.writeFileSync("ignite-cli-views.js", "[];");
		await cli.run(["add", "grid", "Test view"]);

		expect(this.errorLog).toEqual([]);
		expect(this.log).toContain(jasmine.stringMatching(/View 'Test view' added\s*/));

		expect(fs.existsSync("./test-view")).toBeTruthy();
		expect(fs.existsSync("./test-view/index.html")).toBeTruthy();
		fs.unlinkSync("./test-view/index.html");
		fs.rmdirSync("./test-view");

		fs.unlinkSync("ignite-cli-views.js");
		fs.unlinkSync(ProjectConfig.configFile);
		done();
	});

	it("Should correctly add Angular template", async done => {
		// TODO: Mock out template manager and project register
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({
			project: { framework: "angular", projectType: "ts", components: [] }
		}));
		fs.mkdirSync(`./src`);
		fs.mkdirSync(`./src/app`);
		fs.writeFileSync("src/app/app-routing.module.ts", "[];");
		fs.writeFileSync("src/app/app.module.ts", "[];");
		await cli.run(["add", "grid", "Test view"]);

		expect(this.errorLog).toEqual([]);
		expect(this.log).toContain(jasmine.stringMatching(/View 'Test view' added\s*/));

		expect(fs.existsSync("./src/app/components/test-view")).toBeTruthy();
		expect(fs.existsSync("./src/app/components/test-view/test-view.component.ts")).toBeTruthy();
		fs.unlinkSync("./src/app/components/test-view/test-view.component.ts");
		fs.removeSync("./src");

		fs.unlinkSync(ProjectConfig.configFile);
		done();
	});
});
