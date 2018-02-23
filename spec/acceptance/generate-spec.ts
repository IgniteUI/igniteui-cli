import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import cli = require("../../lib/cli");
import { ProjectConfig } from "../../lib/ProjectConfig";
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
		process.chdir("../../");
		deleteAll(`./output/${testFolder}`);
		fs.rmdirSync(`./output/${testFolder}`);
	});

	it("Should correctly generate template with default values", async done => {
		await cli.run(["generate", "template"]);

		expect(fs.existsSync(path.join(process.cwd(), ".global"))).toBeTruthy();

		const globalConfigPath = path.join(process.cwd(), ".global", "ignite-ui-cli.json");
		expect(fs.existsSync(globalConfigPath)).toBeTruthy();

		const customTemplatePath = path.join(process.cwd(), "custom-template");
		const globalConfigActual = require(globalConfigPath);
		const globalConfigExpected = {
			customTemplates: [
				"path:" + customTemplatePath
			]
		};
		expect(globalConfigActual).toEqual(globalConfigExpected);
		expect(fs.existsSync(customTemplatePath)).toBeTruthy();
		expect(fs.existsSync(path.join(customTemplatePath, "files"))).toBeTruthy();

		const templatePath = path.join(customTemplatePath, "template.json");
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

		const pathDirectory = path.join(process.cwd(), "angular-wrapper", "files", "src", "app", "components", "__path__");
		expect(fs.existsSync(pathDirectory)).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__name__.component.ts"))).toBeTruthy();
		done();
	});

	it("Should correctly generate angular template", async done => {
		await cli.run(["generate", "template", "angular", "-f=angular", "-t=igx-ts"]);

		expect(fs.existsSync(path.join(process.cwd(), ".global"))).toBeTruthy();
		expect(fs.existsSync(path.join(process.cwd(), "angular"))).toBeTruthy();
		const templatePath = path.join(process.cwd(), "angular", "template.json");
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

		const pathDirectory = path.join(process.cwd(), "angular", "files", "src", "app", "__path__");
		expect(fs.existsSync(pathDirectory)).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__name__.component.css"))).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__name__.component.html"))).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__name__.component.spec.ts"))).toBeTruthy();
		expect(fs.existsSync(path.join(pathDirectory, "__name__.component.ts"))).toBeTruthy();
		done();
	});
});
