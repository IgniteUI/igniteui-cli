import { IgniteUIForAngularTemplate, AngularTypeScriptFileUpdate } from "@igniteui/angular-templates";
import {
	App, BaseTemplate, Config, GoogleAnalytics, PackageManager, ProjectConfig, ProjectLibrary, ProjectTemplate, Template, TemplateDelimiters, TypeScriptUtils, Util
} from "@igniteui/cli-core";
import * as path from "path";
import * as ts from "typescript";
import { default as addCmd } from "../../packages/cli/lib/commands/add";
import { PromptSession } from "../../packages/cli/lib/PromptSession";
import { AngularTemplate } from "../../packages/cli/lib/templates/AngularTemplate";
import { resetSpy } from "../helpers/utils";

function createMockBaseTemplate(): BaseTemplate {
    return {
        id: "mock-template-id",
        name: "mock-template",
        description: "A mock template",
        delimiters: {
            content: { start: "{{", end: "}}" },
            path: { start: "[[", end: "]]" }
        },
        dependencies: ["mock-dependency"],
        framework: "angular",
        projectType: "ts",
        hasExtraConfiguration: true,
        templatePaths: ["/path/to/template"],
        generateConfig: jasmine.createSpy().and.returnValue({}),
        getExtraConfiguration: jasmine.createSpy().and.returnValue([]),
        setExtraConfiguration: jasmine.createSpy()
    };
}

function createMockProjectTemplate(baseTemplate: BaseTemplate): ProjectTemplate {
    return {
        ...baseTemplate,
        installModules: jasmine.createSpy().and.callFake(() => {}),
        upgradeIgniteUIPackages: jasmine.createSpy().and.returnValue(Promise.resolve(true))
    };
}

function createMockTemplate(baseTemplate: BaseTemplate): Template {
    return {
        ...baseTemplate,
        components: ["mock-component"],
        controlGroup: "mock-group",
        listInComponentTemplates: true,
        listInCustomTemplates: true,
        packages: ["mock-package"],
        registerInProject: jasmine.createSpy(),
    };
}

function createMockLibrary(mockTemplate: Template, mockProjectTemplate: ProjectTemplate): ProjectLibrary {
    return {
        name: "mock-library",
        themes: ["mock-theme"],
        components: [{
            name: "mock-component",
            description: "A mock component",
            group: "mock-group",
            groupPriority: 1,
            templates: [mockTemplate]
        }],
        projectIds: ["another-mock"],
        projects: [mockProjectTemplate],
        templates: [mockTemplate],
        projectType: "ts",
        generateTemplateFolderPath: "/path/to/templates",
        getCustomTemplateNames: jasmine.createSpy().and.returnValue([]),
        getTemplateByName: jasmine.createSpy().and.returnValue(mockTemplate),
        getTemplateById: jasmine.createSpy().and.returnValue(mockTemplate),
        getComponentByName: jasmine.createSpy().and.returnValue({
            name: "mock-component",
            description: "A mock component",
            group: "mock-group",
            groupPriority: 1,
            templates: [mockTemplate]
        }),
        getComponentGroupNames: jasmine.createSpy().and.returnValue(["mock-group"]),
        getComponentsByGroup: jasmine.createSpy().and.returnValue([{
            name: "mock-component",
            description: "A mock component",
            group: "mock-group",
            groupPriority: 1,
            templates: [mockTemplate]
        }]),
        getComponentGroups: jasmine.createSpy().and.returnValue([{
            name: "mock-group",
            description: "A mock component group"
        }]),
        getCustomTemplates: jasmine.createSpy().and.returnValue([mockTemplate]),
        getProject: jasmine.createSpy().and.returnValue(mockProjectTemplate),
        hasProject: jasmine.createSpy().and.returnValue(false),
        hasTemplate: jasmine.createSpy().and.returnValue(false),
        registerTemplate: jasmine.createSpy()
    };
}

describe("Unit - Add command", () => {

	beforeEach(() => {
		spyOn(GoogleAnalytics, "post");
	});

	it("Should start prompt session with missing arg", async () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		const mockProjectConfig = {
			project: {
			  framework: "angular",
			   theme: "infragistics"
		    }
	    } as unknown as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		const mockBaseTemplate = createMockBaseTemplate();
        const mockProjectTemplate = createMockProjectTemplate(mockBaseTemplate);
        const mockTemplate = createMockTemplate(mockBaseTemplate);
        const mockProjLib = createMockLibrary(mockTemplate, mockProjectTemplate);

		addCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});

		const promptSession =  PromptSession.prototype;
		spyOn(promptSession, "chooseActionLoop");

		await addCmd.handler({ _: ["add"], $0: "add" });
		expect(promptSession.chooseActionLoop).toHaveBeenCalledWith(mockProjLib);
	});

	it("Should validate and trim name", async () => {
		const mockProjectConfig = {
			project: {
			  framework: "angular",
			   theme: "infragistics"
		    }
	    } as unknown as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);
		spyOn(Util, "error");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(false));
		spyOn(process, "cwd").and.returnValue("Mock directory");

		const mockTemplate = jasmine.createSpyObj("Template", ["generateConfig", "templatePath", "registerInProject"]);
		const mockConfig = { test: "test" };
		mockTemplate.generateConfig.and.returnValue(mockConfig);
		mockTemplate.templatePaths = ["test"];
		const mockDelimiters: TemplateDelimiters = {
			content: { start: "{{", end: "}}" },
			path: { start: "[[", end: "]]" }
		};
		mockTemplate.delimiters = mockDelimiters;
		const errorCombos = [
			{ name: "name.ts", inError: "name.ts" }, // file extension test
			{ name: "1 is not valid", inError: "1 is not valid" },
			{ name: "   1 is   not valid  \t   ", inError: "1 is   not valid" },
			{ name: "name!", inError: "name!" },
			{ name: "bits~and*bobs()", inError: "bits~and*bobs()" }
		];

		for (const item of errorCombos) {
			resetSpy(Util.error);
			await addCmd.addTemplate(item.name, mockTemplate);
			expect(Util.error).toHaveBeenCalledWith(`Name '${item.inError}' is not valid. `
			+ "Name should start with a letter and can also contain numbers, dashes and spaces.", "red");
		}

		const validCombos = [
			{ name: "   valid  name  \t   ", valid: "valid  name" },
			{ name: "th1s is valid", valid: "th1s is valid" },
			{ name: "b1ts-and bobs ", valid: "b1ts-and bobs" },
			{ name: "../editors", valid: "../editors" },
			{ name: "template/editors", valid: "template/editors" },
			{ name: "a      name", valid: "a      name" },
			{ name: "a", valid: "a" } // single letter name test
		];

		for (const item of validCombos) {
			await addCmd.addTemplate(item.name, mockTemplate);
			expect(mockTemplate.generateConfig).toHaveBeenCalledWith(item.valid, { parentName: "app", parentRoutingModulePath: "src/app/app-routing.ts", selector: "app-undefined" });
			expect(Util.processTemplates).toHaveBeenCalledWith("test", "Mock directory", mockConfig, mockDelimiters);
		}
	});

	it("Should queue package dependencies and wait for install", async () => {
		const mockProjectConfig = {
			project: {
			  framework: "angular",
			   theme: "infragistics"
		    }
	    } as unknown as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);
		spyOn(Util, "log");
		spyOn(PackageManager, "queuePackage");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));

		const mockTemplate = jasmine.createSpyObj("Template", ["generateConfig", "registerInProject"]);
		mockTemplate.templatePaths = ["test"];
		mockTemplate.packages = ["tslib" , "test-pack"];
		addCmd.templateManager = jasmine.createSpyObj("TemplateManager", ["updateProjectConfiguration"]);

		await addCmd.addTemplate("template with packages", mockTemplate);
		expect(mockTemplate.generateConfig).toHaveBeenCalled();
		expect(mockTemplate.registerInProject).toHaveBeenCalled();
		expect(Util.processTemplates).toHaveBeenCalledTimes(1);
		expect(addCmd.templateManager.updateProjectConfiguration).toHaveBeenCalled();
		expect(PackageManager.queuePackage).toHaveBeenCalledTimes(2);
		expect(PackageManager.queuePackage).toHaveBeenCalledWith("tslib");
		expect(PackageManager.queuePackage).toHaveBeenCalledWith("test-pack");

		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		addCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: mockTemplate,
			getProjectLibrary: jasmine.createSpyObj("ProjectLibrary", {
				getTemplateById: mockTemplate,
				hasTemplate: true
			})
		});

		spyOn(addCmd, "addTemplate");
		spyOn(PackageManager, "flushQueue").and.returnValue(Promise.resolve());
		spyOn(PackageManager, "ensureIgniteUISource");
		await addCmd.handler({ name: "template with packages", template: "test-id", _: ["add"], $0: "add" });
		expect(addCmd.addTemplate).toHaveBeenCalledWith("template with packages", mockTemplate, jasmine.any(Object));
		expect(PackageManager.flushQueue).toHaveBeenCalled();
	});

	it("Should properly accept module args when passed - IgniteUI for Angular", async () => {
		const mockProjectConfig = {
			project: {
			  framework: "angular",
			   theme: "infragistics"
		    }
	    } as unknown as Config;
		spyOn(TypeScriptUtils, "getFileSource").and.returnValue(
			ts.createSourceFile("test-file-name", ``, ts.ScriptTarget.Latest, true)
		);
		const routeSpy = spyOn(AngularTypeScriptFileUpdate.prototype, "addRoute");
		const ngMetaSpy = spyOn(AngularTypeScriptFileUpdate.prototype, "addNgModuleMeta");
		const finalizeSpy = spyOn(AngularTypeScriptFileUpdate.prototype, "finalize");
		const mockTemplate = new IgniteUIForAngularTemplate("test");
		mockTemplate.packages = [];
		mockTemplate.dependencies = [];
		spyOn(mockTemplate, "fileExists").and.returnValue(true);

		const directoryPath = path.join("My/Example/Path");
		spyOn(process, "cwd").and.returnValue(directoryPath);
		spyOn(mockTemplate, "generateConfig");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		spyOn(mockTemplate, "registerInProject").and.callThrough();
		// const sourceFilesSpy = spyOn<any>(mockTemplate, "ensureSourceFiles");
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
		const mockVirtFs = {
			fileExists: (file: string): boolean => {
				return false;
			}
		};
		spyOn(App.container, "get").and.returnValue(mockVirtFs);
		spyOn(mockVirtFs, "fileExists").and.callFake(file => {
			if (file === "src/app/app-routing.module.ts") {
				return true;
			}
		});
		await addCmd.handler({
			name: "test-file-name", template: "CustomTemplate",
			// tslint:disable-next-line:object-literal-sort-keys
			module: "myCustomModule/my-custom-module.module.ts",
			_: ["add"],
			$0: "add"
		});
		expect(addCmd.addTemplate).toHaveBeenCalledWith(
			"test-file-name", mockTemplate,
			jasmine.objectContaining({ modulePath: "myCustomModule/my-custom-module.module.ts" })
		);
		expect(PackageManager.flushQueue).toHaveBeenCalled();
		expect(mockTemplate.generateConfig).toHaveBeenCalledTimes(1);
		expect(mockTemplate.generateConfig).toHaveBeenCalledWith(
			"test-file-name",
			jasmine.objectContaining({ modulePath: "myCustomModule/my-custom-module.module.ts" })
		);
		expect(mockTemplate.registerInProject).toHaveBeenCalledTimes(1);
		expect(mockTemplate.registerInProject).toHaveBeenCalledWith(
			directoryPath, "test-file-name",
			jasmine.objectContaining({ modulePath: "myCustomModule/my-custom-module.module.ts" })
		);

		expect(routeSpy).toHaveBeenCalledTimes(1);
		expect(ngMetaSpy).toHaveBeenCalledTimes(1);
		expect(ngMetaSpy).toHaveBeenCalledWith({
				declare: [
					"TestFileNameComponent"
				],
				from: "../test-file-name/test-file-name.component",
				export: [ 'TestFileNameComponent' ]
			},
			jasmine.any(Object),
			true
		);
		expect(finalizeSpy).toHaveBeenCalledTimes(2);
		expect(addCmd.templateManager.updateProjectConfiguration).toHaveBeenCalledTimes(1);
	});

	it("Should properly accept module args when passed - Angular Wrappers", async () => {
		const mockProjectConfig = {
			project: {
			  framework: "angular",
			   theme: "infragistics"
		    }
	    } as unknown as Config;
		spyOn(TypeScriptUtils, "getFileSource").and.returnValue(
			ts.createSourceFile("test-file-name", ``, ts.ScriptTarget.Latest, true)
		);
		const routeSpy = spyOn(AngularTypeScriptFileUpdate.prototype, "addRoute");
		// const declarationSpy = spyOn(AngularTypeScriptFileUpdate.prototype, "addDeclaration").and.callThrough();
		const ngMetaSpy = spyOn(AngularTypeScriptFileUpdate.prototype, "addNgModuleMeta");
		const finalizeSpy = spyOn(AngularTypeScriptFileUpdate.prototype, "finalize");
		const mockTemplate = new AngularTemplate("test");
		mockTemplate.packages = [];
		mockTemplate.dependencies = [];

		const directoryPath = path.join("My/Example/Path");
		spyOn(process, "cwd").and.returnValue(directoryPath);
		spyOn(mockTemplate, "generateConfig");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		spyOn(mockTemplate, "registerInProject").and.callThrough();
		spyOn(Util, "directoryExists").and.returnValue(true);
		// const sourceFilesSpy = spyOn<any>(mockTemplate, "ensureSourceFiles");
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
		await addCmd.handler({
			name: "test-file-name", template: "CustomTemplate",
			module: "myCustomModule/my-custom-module.module.ts",
			_: ["add"],
			$0: "add"
		});
		expect(addCmd.addTemplate).toHaveBeenCalledWith(
			"test-file-name", mockTemplate,
			jasmine.objectContaining({ modulePath: "myCustomModule/my-custom-module.module.ts" })
		);
		expect(PackageManager.flushQueue).toHaveBeenCalled();
		expect(mockTemplate.generateConfig).toHaveBeenCalledTimes(1);
		expect(mockTemplate.generateConfig).toHaveBeenCalledWith(
			"test-file-name",
			jasmine.objectContaining({ modulePath: "myCustomModule/my-custom-module.module.ts" })
		);
		expect(mockTemplate.registerInProject).toHaveBeenCalledTimes(1);
		expect(mockTemplate.registerInProject).toHaveBeenCalledWith(
			directoryPath, "test-file-name",
			jasmine.objectContaining({ modulePath: "myCustomModule/my-custom-module.module.ts" }));;
		expect(routeSpy).toHaveBeenCalledTimes(1);
		expect(ngMetaSpy).toHaveBeenCalledTimes(1);
		expect(ngMetaSpy).toHaveBeenCalledWith({
			declare: ["TestFileNameComponent"],
			from: "../components/test-file-name/test-file-name.component",
			export: [ 'TestFileNameComponent' ]
		});
		expect(finalizeSpy).toHaveBeenCalledTimes(2);
		expect(addCmd.templateManager.updateProjectConfiguration).toHaveBeenCalledTimes(1);
	});

	it("Should properly accept skip-route args when passed", async () => {
		const mockProjectConfig = {
			project: {
			  framework: "angular",
			   theme: "infragistics"
		    }
	    } as unknown as Config;
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		const mockTemplate = jasmine.createSpyObj("Template", {
			generateConfig: { test: "test", parentName: "app", parentRoutingModulePath: "src/app/app-routing.ts", selector: "app-test" }, registerInProject: null
		});
		mockTemplate.templatePaths = ["test"];
		mockTemplate.packages = [];
		const mockLibrary = jasmine.createSpyObj("frameworkLibrary", {
			getTemplateById: mockTemplate, hasTemplate: true
		});
		addCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockLibrary,
			updateProjectConfiguration: () => {}
		});

		const directoryPath = path.join("My/Example/Path");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		spyOn(process, "cwd").and.returnValue(directoryPath);
		spyOn(addCmd, "addTemplate").and.callThrough();
		spyOn(PackageManager, "flushQueue").and.returnValue(Promise.resolve());
		spyOn(PackageManager, "ensureIgniteUISource");

		await addCmd.handler({
			name: "test-file-name", template: "CustomTemplate",
			// tslint:disable-next-line:object-literal-sort-keys
			skipRoute: true,
			_: ["add"],
			$0: "add"
		});
		expect(addCmd.addTemplate).toHaveBeenCalledWith(
			"test-file-name", mockTemplate,
			jasmine.objectContaining({ skipRoute: true })
		);
		expect(Util.processTemplates).toHaveBeenCalledTimes(1);
		expect(PackageManager.flushQueue).toHaveBeenCalled();
		expect(mockTemplate.generateConfig).toHaveBeenCalledTimes(1);
		expect(mockTemplate.generateConfig).toHaveBeenCalledWith(
			"test-file-name",
			jasmine.objectContaining({ skipRoute: true })
		);
		expect(mockTemplate.registerInProject).toHaveBeenCalledTimes(1);
		expect(mockTemplate.registerInProject).toHaveBeenCalledWith(
			directoryPath, "test-file-name",
			jasmine.objectContaining({ skipRoute: true })
		);
		expect(addCmd.templateManager.updateProjectConfiguration).toHaveBeenCalledWith(mockTemplate);
	});

	it("Should not add component and should log error if wrong path is passed to module", async () => {
		spyOn(Util, "fileExists").and.returnValue(false);
		spyOn(Util, "error");
		const wrongPath = "myCustomModule/my-custom-module.module.ts";
		addCmd.addTemplate("test-file-name", new AngularTemplate(__dirname), { modulePath: wrongPath });
		expect(Util.fileExists).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledWith(`Wrong module path provided: ${wrongPath}. No components were added!`);
	});
});
