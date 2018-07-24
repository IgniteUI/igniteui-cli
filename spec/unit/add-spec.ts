import * as path from "path";
import * as ts from "typescript";
import { default as addCmd } from "../../lib/commands/add";
import { GoogleAnalytics } from "../../lib/GoogleAnalytics";
import { PackageManager } from "../../lib/packages/PackageManager";
import { TypeScriptFileUpdate } from "../../lib/project-utility/TypeScriptFileUpdate";
import { TypeScriptUtils } from "../../lib/project-utility/TypeScriptUtils";
import { ProjectConfig } from "../../lib/ProjectConfig";
import { PromptSession } from "../../lib/PromptSession";
import { AngularTemplate } from "../../lib/templates/AngularTemplate";
import { IgniteUIForAngularTemplate } from "../../lib/templates/IgniteUIForAngularTemplate";
import { Util } from "../../lib/Util";
import { resetSpy } from "../helpers/utils";

describe("Unit - Add command", () => {

	it("Should start prompt session with missing arg", async done => {
		spyOn(GoogleAnalytics, "post");
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(ProjectConfig, "getConfig").and.returnValue({ project: {
			framework: "angular",
			theme: "infragistics"}});

		const mockProjLib = {};
		addCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});

		const promptSession =  PromptSession.prototype;
		spyOn(promptSession, "chooseActionLoop");

		await addCmd.execute({});
		expect(promptSession.chooseActionLoop).toHaveBeenCalledWith(mockProjLib, "infragistics");
		done();
	});

	it("Should validate and trim name", async done => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({ project: {
			framework: "angular",
			theme: "infragistics"}});
		spyOn(Util, "error");

		const mockTemplate = jasmine.createSpyObj("Template", ["generateFiles"]);

		const errorCombos = [
			{ name: "1 is not valid", inError: "1 is not valid" },
			{ name: "   1 is   not valid  \t   ", inError: "1 is   not valid" },
			{ name: "../editors", inError: "../editors" },
			{ name: "template/editors", inError: "template/editors" },
			{ name: "name!", inError: "name!" },
			{ name: "bits~and*bobs()", inError: "bits~and*bobs()" }
		];

		for (const item of errorCombos) {
			resetSpy(Util.error);
			await addCmd.addTemplate(item.name, mockTemplate);
			expect(Util.error).toHaveBeenCalledWith(`Name '${item.inError}' is not valid. `
			+ "Names should start with a letter and can also contain numbers, dashes and spaces.", "red");
		}

		const validCombos = [
			{ name: "   valid  name  \t   ", valid: "valid  name" },
			{ name: "th1s is valid", valid: "th1s is valid" },
			{ name: "b1ts-and bobs ", valid: "b1ts-and bobs" },
			{ name: "a      name", valid: "a      name" },
			{ name: "a", valid: "a" } // single letter name test
		];

		for (const item of validCombos) {
			await addCmd.addTemplate(item.name, mockTemplate);
			expect(mockTemplate.generateFiles).toHaveBeenCalledWith(process.cwd(), item.valid, jasmine.any(Object));
		}

		done();
	});

	it("Should queue package dependencies and wait for install", async done => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({ project: {
			framework: "angular",
			theme: "infragistics"}});
		spyOn(Util, "log");
		spyOn(PackageManager, "queuePackage");

		const mockTemplate = jasmine.createSpyObj("Template", {
			generateFiles: Promise.resolve(true),
			registerInProject: null
		});
		mockTemplate.packages = ["tslib" , "test-pack"];
		addCmd.templateManager = jasmine.createSpyObj("TemplateManager", ["updateProjectConfiguration"]);

		await addCmd.addTemplate("template with packages", mockTemplate);
		expect(mockTemplate.generateFiles).toHaveBeenCalled();
		expect(mockTemplate.registerInProject).toHaveBeenCalled();
		expect(addCmd.templateManager.updateProjectConfiguration).toHaveBeenCalled();
		expect(PackageManager.queuePackage).toHaveBeenCalledTimes(2);
		expect(PackageManager.queuePackage).toHaveBeenCalledWith("tslib");
		expect(PackageManager.queuePackage).toHaveBeenCalledWith("test-pack");

		spyOn(GoogleAnalytics, "post");
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		addCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: jasmine.createSpyObj("ProjectLibrary", {
				getTemplateById: {},
				hasTemplate: true
			})
		});

		spyOn(addCmd, "addTemplate");
		spyOn(PackageManager, "flushQueue").and.returnValue(Promise.resolve());
		spyOn(PackageManager, "ensureIgniteUISource");
		await addCmd.execute({name: "template with packages", template: "test-id"});
		expect(addCmd.addTemplate).toHaveBeenCalledWith("template with packages", {}, undefined);
		expect(PackageManager.flushQueue).toHaveBeenCalled();

		done();
	});

	it("Should properly accept module args when passed - IgniteUI for Anuglar", async done => {
		const mockProjectConfig = {project: {
			framework: "angular",
			theme: "infragistics"
		}};

		spyOn(TypeScriptUtils, "getFileSource").and.returnValue(
			ts.createSourceFile("test-file-name", ``, ts.ScriptTarget.Latest, true)
		);
		const routeSpy = spyOn(TypeScriptFileUpdate.prototype, "addRoute");
		const declarationSpy = spyOn(TypeScriptFileUpdate.prototype, "addDeclaration").and.callThrough();
		const ngMetaSpy = spyOn(TypeScriptFileUpdate.prototype, "addNgModuleMeta");
		const finalizeSpy = spyOn(TypeScriptFileUpdate.prototype, "finalize");
		const mockTemplate = new IgniteUIForAngularTemplate("");
		mockTemplate.packages = [];
		mockTemplate.dependencies = [];

		const directoryPath = path.join("My/Example/Path");
		spyOn(process, "cwd").and.returnValue(directoryPath);
		spyOn(mockTemplate, "generateFiles").and.returnValue(Promise.resolve(true));
		spyOn(mockTemplate, "registerInProject").and.callThrough();
		const sourceFilesSpy = spyOn<any>(mockTemplate, "ensureSourceFiles");
		const mockLibrary = jasmine.createSpyObj("frameworkLibrary", ["hasTemplate", "getTemplateById"]);
		mockLibrary.hasTemplate.and.returnValue(true);
		mockLibrary.getTemplateById.and.returnValue(mockTemplate);
		addCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockLibrary,
			updateProjectConfiguration: () => {}
		});
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(addCmd, "addTemplate").and.callThrough();
		spyOn(PackageManager, "flushQueue").and.returnValue(Promise.resolve());
		spyOn(PackageManager, "ensureIgniteUISource");
		spyOn(Util, "directoryExists").and.returnValue(true);
		await addCmd.execute({
			name: "test-file-name", template: "CustomTemplate",
			// tslint:disable-next-line:object-literal-sort-keys
			module: "myCustomModule/my-custom-module.module.ts"
		});
		expect(addCmd.addTemplate).toHaveBeenCalledWith("test-file-name", mockTemplate,
		"myCustomModule/my-custom-module.module.ts");
		expect(PackageManager.flushQueue).toHaveBeenCalled();
		expect(mockTemplate.generateFiles).toHaveBeenCalledTimes(1);
		expect(mockTemplate.generateFiles)
			.toHaveBeenCalledWith(directoryPath, "test-file-name", { modulePath: "myCustomModule/my-custom-module.module.ts" });
		expect(mockTemplate.registerInProject).toHaveBeenCalledTimes(1);
		expect(mockTemplate.registerInProject).toHaveBeenCalledWith(directoryPath, "test-file-name",
		{ modulePath: "myCustomModule/my-custom-module.module.ts"});
		expect(sourceFilesSpy).toHaveBeenCalledTimes(1);
		expect(routeSpy).toHaveBeenCalledTimes(1);
		expect(declarationSpy).toHaveBeenCalledTimes(1);
		expect(declarationSpy).toHaveBeenCalledWith(
			path.join(directoryPath, `src/app/test-file-name/test-file-name.component.ts`),
			true);
		expect(ngMetaSpy).toHaveBeenCalledTimes(1);
		expect(ngMetaSpy).toHaveBeenCalledWith({
			declare: null,
			from: "../test-file-name/test-file-name.component",
			// tslint:disable-next-line:object-literal-sort-keys
			export: null
		});
		expect(finalizeSpy).toHaveBeenCalledTimes(1);
		expect(addCmd.templateManager.updateProjectConfiguration).toHaveBeenCalledTimes(1);
		done();
	});

	it("Should properly accept module args when passed - Angular Wrappers", async done => {
		const mockProjectConfig = {project: {
			framework: "angular",
			theme: "infragistics"
		}};

		spyOn(TypeScriptUtils, "getFileSource").and.returnValue(
			ts.createSourceFile("test-file-name", ``, ts.ScriptTarget.Latest, true)
		);
		const routeSpy = spyOn(TypeScriptFileUpdate.prototype, "addRoute");
		const declarationSpy = spyOn(TypeScriptFileUpdate.prototype, "addDeclaration").and.callThrough();
		const ngMetaSpy = spyOn(TypeScriptFileUpdate.prototype, "addNgModuleMeta");
		const finalizeSpy = spyOn(TypeScriptFileUpdate.prototype, "finalize");
		const mockTemplate = new AngularTemplate("");
		mockTemplate.packages = [];
		mockTemplate.dependencies = [];

		const directoryPath = path.join("My/Example/Path");
		spyOn(process, "cwd").and.returnValue(directoryPath);
		spyOn(mockTemplate, "generateFiles").and.returnValue(Promise.resolve(true));
		spyOn(mockTemplate, "registerInProject").and.callThrough();
		spyOn(Util, "directoryExists").and.returnValue(true);
		const sourceFilesSpy = spyOn<any>(mockTemplate, "ensureSourceFiles");
		const mockLibrary = jasmine.createSpyObj("frameworkLibrary", ["hasTemplate", "getTemplateById"]);
		mockLibrary.hasTemplate.and.returnValue(true);
		mockLibrary.getTemplateById.and.returnValue(mockTemplate);
		addCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockLibrary,
			updateProjectConfiguration: () => {}
		});
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(addCmd, "addTemplate").and.callThrough();
		spyOn(PackageManager, "flushQueue").and.returnValue(Promise.resolve());
		spyOn(PackageManager, "ensureIgniteUISource");
		await addCmd.execute({
			name: "test-file-name", template: "CustomTemplate",
			// tslint:disable-next-line:object-literal-sort-keys
			module: "myCustomModule/my-custom-module.module.ts"
		});
		expect(addCmd.addTemplate).toHaveBeenCalledWith("test-file-name", mockTemplate,
		"myCustomModule/my-custom-module.module.ts");
		expect(PackageManager.flushQueue).toHaveBeenCalled();
		expect(mockTemplate.generateFiles).toHaveBeenCalledTimes(1);
		expect(mockTemplate.generateFiles)
			.toHaveBeenCalledWith(directoryPath, "test-file-name", {modulePath: "myCustomModule/my-custom-module.module.ts"});
		expect(mockTemplate.registerInProject).toHaveBeenCalledTimes(1);
		expect(mockTemplate.registerInProject).toHaveBeenCalledWith(directoryPath, "test-file-name",
		{ modulePath: "myCustomModule/my-custom-module.module.ts"});
		expect(sourceFilesSpy).toHaveBeenCalledTimes(1);
		expect(routeSpy).toHaveBeenCalledTimes(1);
		expect(declarationSpy).toHaveBeenCalledTimes(1);
		expect(declarationSpy).toHaveBeenCalledWith(
			path.join(directoryPath, `src/app/components/test-file-name/test-file-name.component.ts`),
			true);
		expect(ngMetaSpy).toHaveBeenCalledTimes(1);
		expect(ngMetaSpy).toHaveBeenCalledWith({
			declare: null,
			from: "../components/test-file-name/test-file-name.component",
			// tslint:disable-next-line:object-literal-sort-keys
			export: null
		});
		expect(finalizeSpy).toHaveBeenCalledTimes(1);
		expect(addCmd.templateManager.updateProjectConfiguration).toHaveBeenCalledTimes(1);
		done();
	});

	it("Should not add component and should log error if wrong path is massed to module", async done => {
		spyOn(Util, "fileExists").and.returnValue(false);
		spyOn(Util, "error");
		const wrongPath = "myCustomModule/my-custom-module.module.ts";
		addCmd.addTemplate("test-file-name", new AngularTemplate(__dirname), wrongPath);
		expect(Util.fileExists).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledWith(`Wrong module path provided: ${wrongPath}. No components were added!`);
		done();
	});
});
