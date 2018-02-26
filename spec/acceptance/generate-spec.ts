import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import cli = require("../../lib/cli");
import { ProjectConfig } from "../../lib/ProjectConfig";
import { Util } from "../../lib/Util";
import { deleteAll } from "../helpers/utils";

describe("Generate command", () => {
	let testFolder = path.parse(__filename).name;
	let expectedTemplate: any;
	let actualTemplate: any;

	beforeEach(() => {
		spyOn(console, "log");
		spyOn(console, "error");

		// test folder, w/ existing check:
		while (fs.existsSync(`./output/${testFolder}`)) {
			testFolder += 1;
		}

		fs.mkdirSync(`./output/${testFolder}`);
		process.chdir(`./output/${testFolder}`);

		// ~/.global/ homedir for global files:
		fs.mkdirSync(`.global`);
		spyOn(os, "homedir").and.returnValue(path.join(process.cwd(), ".global"));
		const config = {};
		ProjectConfig.setConfig(config as Config, true);
	});

	afterEach(() => {
		delete require.cache[require.resolve(path.join(process.cwd(), ".global", "ignite-ui-cli.json"))];

		process.chdir("../../");
		deleteAll(`./output/${testFolder}`);
		fs.rmdirSync(`./output/${testFolder}`);
	});

	it("Should correctly generate template with default values", async done => {
		await cli.run(["generate", "template"]);

		expect(fs.existsSync(path.join(process.cwd(), ".global"))).toBeTruthy();

		const globalConfigPath = path.join(process.cwd(), ".global", "ignite-ui-cli.json");
		expect(fs.existsSync(globalConfigPath)).toBeTruthy();

		const templateFolderPath = path.join(process.cwd(), "custom-template");
		const globalConfigActual = require(globalConfigPath);
		const globalConfigExpected = {
			customTemplates: [
				"path:" + templateFolderPath
			]
		};
		expect(globalConfigActual).toEqual(globalConfigExpected);
		expect(fs.existsSync(templateFolderPath)).toBeTruthy();
		expect(fs.existsSync(path.join(templateFolderPath, "files"))).toBeTruthy();

		const templatePath = path.join(templateFolderPath, "template.json");
		expect(fs.existsSync(templatePath)).toBeTruthy();
		expectedTemplate = require(templatePath) as Template;
		actualTemplate = {
			components: [],
			controlGroup: "",
			dependencies: [],
			description: "This is custom template with id: custom-template, created with IgniteUI CLI for jQuery",
			framework: "jquery",
			id: "custom-template",
			listInComponentTemplates: false,
			listInCustomTemplates: true,
			name: "custom-template",
			projectType: "js"
		};
		expect(expectedTemplate).toEqual(actualTemplate);
		done();
	});

	it("Should correctly generate angular wrappers template", async done => {
		await cli.run(["generate", "template", "angular-wrapper", "-f=angular", "-t=ig-ts"]);

		expect(fs.existsSync(path.join(process.cwd(), ".global"))).toBeTruthy();
		expect(fs.existsSync(path.join(process.cwd(), "angular-wrapper"))).toBeTruthy();
		const templatePath = path.join(process.cwd(), "angular-wrapper", "template.json");
		expect(fs.existsSync(templatePath)).toBeTruthy();

		const globalConfigPath = path.join(process.cwd(), ".global", "ignite-ui-cli.json");
		expect(fs.existsSync(globalConfigPath)).toBeTruthy();
		const templateFolderPath = path.join(process.cwd(), "angular-wrapper");
		const igniteUiCliActual = require(globalConfigPath);
		const igniteUiCliExpected = {
			customTemplates: [
				"path:" + templateFolderPath
			]
		};
		expect(igniteUiCliActual).toEqual(igniteUiCliExpected);

		expectedTemplate = require(templatePath) as Template;
		actualTemplate = {
			components: [],
			controlGroup: "",
			dependencies: [],
			description: "This is custom template with id: angular-wrapper, created with IgniteUI CLI for Angular wrappers",
			framework: "angular",
			id: "angular-wrapper",
			listInComponentTemplates: false,
			listInCustomTemplates: true,
			name: "angular-wrapper",
			projectType: "ig-ts"
		};
		expect(expectedTemplate).toEqual(actualTemplate);

		const pathDirectory = path.join(templateFolderPath, "files", "src", "app", "components", "__path__");
		expect(fs.existsSync(pathDirectory)).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__name__.component.ts"))).toBeTruthy();
		done();
	});

	it("Should correctly generate angular template", async done => {
		await cli.run(["generate", "template", "angular", "-f=angular", "-t=igx-ts"]);

		expect(fs.existsSync(path.join(process.cwd(), ".global"))).toBeTruthy();
		const globalConfigPath = path.join(process.cwd(), ".global", "ignite-ui-cli.json");
		expect(fs.existsSync(globalConfigPath)).toBeTruthy();

		const templateFolderPath = path.join(process.cwd(), "angular");
		const igniteUiCliActual = require(globalConfigPath);
		const igniteUiCliExpected = {
			customTemplates: [
				"path:" + templateFolderPath
			]
		};
		expect(igniteUiCliActual).toEqual(igniteUiCliExpected);

		expect(fs.existsSync(templateFolderPath)).toBeTruthy();
		const templatePath = path.join(templateFolderPath, "template.json");
		expect(fs.existsSync(templatePath)).toBeTruthy();
		expectedTemplate = require(templatePath) as Template;
		actualTemplate = {
			components: [],
			controlGroup: "",
			dependencies: [],
			description: "This is custom template with id: angular, created with IgniteUI CLI for Angular",
			framework: "angular",
			id: "angular",
			listInComponentTemplates: false,
			listInCustomTemplates: true,
			name: "angular",
			projectType: "igx-ts"
		};
		expect(expectedTemplate).toEqual(actualTemplate);

		const pathDirectory = path.join(templateFolderPath, "files", "src", "app", "__path__");
		expect(fs.existsSync(pathDirectory)).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__name__.component.css"))).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__name__.component.html"))).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__name__.component.spec.ts"))).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__name__.component.ts"))).toBeTruthy();
		done();
	});

	it("Should correctly generate react template", async done => {
		await cli.run(["generate", "template", "react", "-f=react", "-t=es6"]);

		expect(fs.existsSync(path.join(process.cwd(), ".global"))).toBeTruthy();
		const globalConfigPath = path.join(process.cwd(), ".global", "ignite-ui-cli.json");
		expect(fs.existsSync(globalConfigPath)).toBeTruthy();

		const templateFolderPath = path.join(process.cwd(), "react");
		const igniteUiCliActual = require(globalConfigPath);
		const igniteUiCliExpected = {
			customTemplates: [
				"path:" + templateFolderPath
			]
		};
		expect(igniteUiCliActual).toEqual(igniteUiCliExpected);
		expect(fs.existsSync(templateFolderPath)).toBeTruthy();
		const templatePath = path.join(templateFolderPath, "template.json");
		expect(fs.existsSync(templatePath)).toBeTruthy();
		expectedTemplate = require(templatePath) as Template;
		actualTemplate = {
			components: [],
			controlGroup: "",
			dependencies: [],
			description: "This is custom template with id: react, created with IgniteUI CLI for React",
			framework: "react",
			id: "react",
			listInComponentTemplates: false,
			listInCustomTemplates: true,
			name: "react",
			projectType: "es6"
		};
		expect(expectedTemplate).toEqual(actualTemplate);

		const clientDirectory = path.join(templateFolderPath, "files", "client");
		expect(fs.existsSync(clientDirectory)).toBeTruthy();
		expect(fs.existsSync(path.join(clientDirectory, "components", "__path__", "index.js"))).toBeTruthy();
		expect(fs.existsSync(path.join(clientDirectory, "pages", "__path__", "index.js"))).toBeTruthy();
		done();
	});
});
