import { Config, GoogleAnalytics, GoogleAnalyticsParameters, ProjectConfig, Template } from "@igniteui/cli-core";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as cli from "../../packages/cli/lib/cli";
import { deleteAll } from "../helpers/utils";

describe("Generate command", () => {
	let testFolder = path.parse(__filename).name;
	let expectedTemplate: any;
	let actualTemplate: any;

	beforeEach(() => {
		spyOn(console, "log");
		spyOn(console, "error");
		spyOn(GoogleAnalytics, "post");

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

	it("Should correctly generate template with default values", async () => {
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
			description: "Ignite UI for jQuery template created with Ignite UI CLI",
			framework: "jquery",
			id: "custom-template",
			listInComponentTemplates: false,
			listInCustomTemplates: true,
			name: "custom-template",
			packages: [],
			projectType: "js"
		};
		expect(expectedTemplate).toEqual(actualTemplate);

		let expectedParams: GoogleAnalyticsParameters = {
			t: "screenview",
			cd: "Generate"
		};
		expect(GoogleAnalytics.post).toHaveBeenCalledWith(expectedParams);

		expectedParams = {
			t: "event",
			ec: "$ig generate",
			el: "subcommand: template",
			ea: "template name: custom-template; framework: jquery;project type: js; skip-config: false",
			cd1: "jquery",
			cd2: "js",
			cd7: "custom-template",
			cd9: "template",
			cd10: false
		};
		expect(GoogleAnalytics.post).toHaveBeenCalledWith(expectedParams);

		expect(GoogleAnalytics.post).toHaveBeenCalledTimes(2);
	});

	it("Should correctly generate angular wrappers template", async () => {
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
			description: "Ignite UI wrappers for Angular template created with Ignite UI CLI",
			framework: "angular",
			id: "angular-wrapper",
			listInComponentTemplates: false,
			listInCustomTemplates: true,
			name: "angular-wrapper",
			packages: [],
			projectType: "ig-ts"
		};
		expect(expectedTemplate).toEqual(actualTemplate);

		const pathDirectory = path.join(templateFolderPath, "files", "src", "app", "components", "__path__");
		expect(fs.existsSync(pathDirectory)).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__filePrefix__.component.ts"))).toBeTruthy();
	});

	it("Should correctly generate angular template", async () => {
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
			description: "Ignite UI for Angular template created with Ignite UI CLI",
			framework: "angular",
			id: "angular",
			listInComponentTemplates: false,
			listInCustomTemplates: true,
			name: "angular",
			packages: [],
			projectType: "igx-ts"
		};
		expect(expectedTemplate).toEqual(actualTemplate);

		const pathDirectory = path.join(templateFolderPath, "files", "src", "app", "__path__");
		expect(fs.existsSync(pathDirectory)).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__filePrefix__.component.scss"))).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__filePrefix__.component.html"))).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__filePrefix__.component.spec.ts"))).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__filePrefix__.component.ts"))).toBeTruthy();
	});

	it("Should correctly generate react template", async () => {
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
			description: "Ignite UI Components for React template created with Ignite UI CLI",
			framework: "react",
			id: "react",
			listInComponentTemplates: false,
			listInCustomTemplates: true,
			name: "react",
			packages: [],
			projectType: "es6"
		};
		expect(expectedTemplate).toEqual(actualTemplate);

		const clientDirectory = path.join(templateFolderPath, "files", "src");
		expect(fs.existsSync(clientDirectory)).toBeTruthy();
		expect(fs.existsSync(path.join(clientDirectory, "components", "__path__", "index.js"))).toBeTruthy();
	});
});
