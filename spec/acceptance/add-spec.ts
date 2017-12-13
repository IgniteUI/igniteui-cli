import { spawnSync } from "child_process";
import * as fs from "fs-extra";
import { parse } from "path";
import cli = require("../../lib/cli");
import { ProjectConfig } from "../../lib/ProjectConfig";

describe("Add command", () => {
	let testFolder = parse(__filename).name;

	beforeEach(() => {
		spyOn(console, "log");
		spyOn(console, "error");

		// test folder, w/ existing check:
		while (fs.existsSync(`./output/${testFolder}`)) {
			testFolder += 1;
		}
		fs.mkdirSync(`./output/${testFolder}`);
		process.chdir(`./output/${testFolder}`);
	});

	afterEach(() => {
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

		expect(console.error).toHaveBeenCalledWith(
			jasmine.stringMatching(/Add command is supported only on existing project created with igniteui-cli\s*/)
		);
		expect(console.log).toHaveBeenCalledTimes(0);

		done();
	});

	it("Should not work quickstart project", async done => {
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({ project: { isShowcase: true} }));
		await cli.run(["add", "grid", "name"]);

		expect(console.error).toHaveBeenCalledWith(
			jasmine.stringMatching(/Showcases and quickstart projects don't support the add command\s*/)
		);
		expect(console.log).toHaveBeenCalledTimes(0);

		fs.unlinkSync(ProjectConfig.configFile);
		done();
	});

	it("Should not work with wrong framework", async done => {
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({ project: { framework: "angular2" } }));
		await cli.run(["add", "grid", "name"]);

		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Framework not supported\s*/));
		expect(console.log).toHaveBeenCalledTimes(0);

		fs.unlinkSync(ProjectConfig.configFile);
		done();
	});

	it("Should not work with wrong template", async done => {
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({ project: { framework: "jquery" } }));
		await cli.run(["add", "wrong", "name"]);

		expect(console.error).toHaveBeenCalledWith(
			jasmine.stringMatching(/Template doesn't exist in the current library\s*/)
		);
		expect(console.log).toHaveBeenCalledTimes(0);

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

		expect(console.error).toHaveBeenCalledTimes(0);
		expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(/View 'Test view' added\s*/));

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
			project: { framework: "angular", projectType: "ig-ts", components: [] }
		}));
		fs.mkdirSync(`./src`);
		fs.mkdirSync(`./src/app`);
		fs.writeFileSync("src/app/app-routing.module.ts", "[];");
		fs.writeFileSync("src/app/app.module.ts", "[];");
		await cli.run(["add", "grid", "Test view"]);

		expect(console.error).toHaveBeenCalledTimes(0);
		expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(/View 'Test view' added\s*/));

		expect(fs.existsSync("./src/app/components/test-view")).toBeTruthy();
		expect(fs.existsSync("./src/app/components/test-view/test-view.component.ts")).toBeTruthy();
		fs.unlinkSync("./src/app/components/test-view/test-view.component.ts");
		fs.removeSync("./src");

		fs.unlinkSync(ProjectConfig.configFile);
		done();
	});

	it("Should correctly add React template", async done => {
		// TODO: Mock out template manager and project register
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({
			project: { framework: "react", projectType: "es6", components: [] }
		}));
		fs.mkdirSync(`./client`);
		fs.mkdirSync(`./client/pages`);
		fs.writeFileSync("client/pages/routesTemplate.js", "[];");
		fs.writeFileSync("client/pages/routes.js", "[];");
		await cli.run(["add", "grid", "My grid"]);

		expect(console.error).toHaveBeenCalledTimes(0);
		expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(/View 'My grid' added\s*/));

		expect(fs.existsSync("./client/components/my-grid")).toBeTruthy();
		expect(fs.existsSync("./client/components/my-grid/index.js")).toBeTruthy();
		expect(fs.existsSync("./client/pages/my-grid/index.js")).toBeTruthy();
		fs.unlinkSync("./client/components/my-grid/index.js");
		fs.removeSync("./client");

		fs.unlinkSync(ProjectConfig.configFile);
		done();
	});
});
