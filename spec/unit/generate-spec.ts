import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import os from "os";
import * as fs from "fs";
import * as path from "path";
import { default as config } from "../../packages/cli/lib/commands/config";
import { default as generateCmd } from "../../packages/cli/lib/commands/generate";
import { deleteAll } from "../helpers/utils";

describe("Unit - Generate command", () => {
	let testFolder = path.parse(__filename).name;

	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		// test folder, w/ existing check:
		while (fs.existsSync(`./output/${testFolder}`)) {
			testFolder += 1;
		}
		fs.mkdirSync(`./output/${testFolder}`);
		process.chdir(`./output/${testFolder}`);

		// ~/.global/ homedir for global files:
		fs.mkdirSync(`.global`);
		spyOn(os, "homedir").and.returnValue(path.join(process.cwd(), ".global"));

		spyOn(Util, "error");
		spyOn(Util, "log");
	});

	afterEach(() => {
		process.chdir("../../");
		deleteAll(`./output/${testFolder}`);
		fs.rmdirSync(`./output/${testFolder}`);
	});

	it("Should generate template pass with correct values", async done => {
		spyOn(Util, "isAlphanumericExt").and.returnValue(true);
		spyOn(Util, "directoryExists").and.returnValue(false);
		spyOn(Util, "processTemplates").and.returnValue(new Promise<boolean>((res, rej) => { res(true); }));

		const projectLib = {
			generateTemplateFolderPath: "somePath"
		};
		generateCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: projectLib
		});

		spyOn(config, "addHandler").and.stub();

		await generateCmd.handler({ name: "custom-template", framework: "jquery", type: "js", _: ["generate"], $0: "generate" });

		expect(Util.error).toHaveBeenCalledTimes(0);

		expect(Util.isAlphanumericExt).toHaveBeenCalledTimes(1);
		expect(Util.isAlphanumericExt).toHaveBeenCalledWith("custom-template");

		const outDir = path.join(process.cwd(), "custom-template");
		expect(Util.directoryExists).toHaveBeenCalledTimes(1);
		expect(Util.directoryExists).toHaveBeenCalledWith(outDir);

		expect(Util.log).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledWith("Template generated successfully");

		expect(Util.processTemplates).toHaveBeenCalledWith(
			projectLib.generateTemplateFolderPath,
			outDir,
			{
				templateFramework: "jquery",
				templateName: "custom-template",
				templateType: "js"
			}, {});

		const addHandlerExpectedParameter = {
			property: "customTemplates",
			value: "path:" + outDir,
			// tslint:disable-next-line:object-literal-sort-keys
			global: true,
			skipAnalytics: true,
			_: ["config"],
			$0: "config"
		};
		expect(config.addHandler).toHaveBeenCalledTimes(1);
		expect(config.addHandler).toHaveBeenCalledWith(addHandlerExpectedParameter);

		done();
	});

	it("Logs error for wrong name", async done => {
		spyOn(Util, "isAlphanumericExt").and.returnValue(false);

		await generateCmd.handler({ name: "123wrongName", framework: "jquery", type: "js", _: ["generate"], $0: "generate" });

		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledWith(
			"Name '123wrongName' is not valid. Name should start with a letter and can also contain numbers, dashes and spaces.",
			"red");

		expect(Util.log).not.toHaveBeenCalled();

		done();
	});

	it("Logs error for existing folder", async done => {
		spyOn(Util, "isAlphanumericExt").and.returnValue(true);
		spyOn(Util, "directoryExists").and.returnValue(true);

		spyOn(config, "addHandler").and.stub();

		await generateCmd.handler({ name: "custom-template", framework: "jquery", type: "js", _: ["generate"], $0: "generate" });

		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledWith("Folder 'custom-template' already exists!", "red");

		expect(Util.log).not.toHaveBeenCalled();

		done();
	});

	it("Logs error for wrong framework", async done => {
		spyOn(Util, "isAlphanumericExt").and.returnValue(true);
		spyOn(Util, "directoryExists").and.returnValue(false);

		generateCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: undefined
		});

		await generateCmd.handler({ name: "custom-template", framework: "wrongFramework", type: "js", _: ["generate"], $0: "generate" });

		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledWith("Framework not supported", "red");

		expect(Util.log).not.toHaveBeenCalled();

		done();
	});

	it("Logs error for wrong type", async done => {
		spyOn(Util, "isAlphanumericExt").and.returnValue(true);
		spyOn(Util, "directoryExists").and.returnValue(false);

		generateCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: undefined
		});

		await generateCmd.handler({ name: "custom-template", framework: "jquery", type: "wrongType", _: ["generate"], $0: "generate" });

		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledWith("Project type 'wrongType' not found in framework 'jquery'");

		expect(Util.log).not.toHaveBeenCalled();

		done();
	});

	it("Logs error if generate template fail", async done => {
		spyOn(Util, "isAlphanumericExt").and.returnValue(true);
		spyOn(Util, "directoryExists").and.returnValue(false);
		spyOn(Util, "processTemplates").and.returnValue(new Promise<boolean>((res, rej) => { res(false); }));

		generateCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: {}
		});

		await generateCmd.handler({ name: "custom-template", framework: "jquery", type: "js", _: ["generate"], $0: "generate" });

		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledWith("Template generation failed!", "red");

		expect(Util.log).not.toHaveBeenCalled();

		done();
	});

	it("Should not add path to global config if skip-config is true", async done => {
		spyOn(Util, "isAlphanumericExt").and.returnValue(true);
		spyOn(Util, "directoryExists").and.returnValue(false);
		spyOn(Util, "processTemplates").and.returnValue(new Promise<boolean>((res, rej) => { res(true); }));

		const projectLib = {
			generateTemplateFolderPath: "somePath"
		};
		generateCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: projectLib
		});

		spyOn(config, "addHandler").and.stub();

		await generateCmd.handler({ name: "custom-template", framework: "jquery", type: "js", skipConfig: true, _: ["generate"], $0: "generate" });

		expect(Util.error).toHaveBeenCalledTimes(0);

		expect(Util.log).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledWith("Template generated successfully");

		expect(config.addHandler).not.toHaveBeenCalled();

		done();
	});
});
