import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import { BaseTemplate, Config, GoogleAnalytics, ProjectConfig, ProjectLibrary, ProjectTemplate, Template } from "@igniteui/cli-core";
import * as path from "path";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";

const collectionPath = path.join(__dirname, "../collection.json");

describe("component",  () => {

	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	it("works", () => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const mockInst = {
			generateConfig: jasmine.createSpy(),
			packages: [],
			registerInProject: jasmine.createSpy(),
			templatePaths: []
		};
		const mockBaseTemplate: BaseTemplate = {
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

		const mockProjectTemplate: ProjectTemplate = {
			...mockBaseTemplate,
			installModules: jasmine.createSpy().and.callFake(() => {}),
			upgradeIgniteUIPackages: jasmine.createSpy().and.returnValue(Promise.resolve(true))
		};

		const mockTemplate: Template = {
			...mockBaseTemplate,
			components: ["mock-component"],
			controlGroup: "mock-group",
			listInComponentTemplates: true,
			listInCustomTemplates: true,
			packages: ["mock-package"],
			registerInProject: jasmine.createSpy(),
		};

		const mockLib: ProjectLibrary = {
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

		const projLibSpy = spyOn(SchematicsTemplateManager.prototype, "getProjectLibrary");
		projLibSpy.and.returnValue(mockLib);

		const mockConfig = {
			project: {
				theme: "Custom"
			}
		} as unknown as Config;

		const projConfigSpy = spyOn(ProjectConfig, "getConfig");
		projConfigSpy.and.returnValue(mockConfig);

		const tree = runner.runSchematic("component",
			{ name: "my-combo", template: "combo", templateInst: mockInst, skipRoute: false }, Tree.empty());
		tree.then(state => {
			expect(mockInst.generateConfig).toHaveBeenCalledWith("my-combo", {});
			expect(mockInst.registerInProject).toHaveBeenCalledWith("", "my-combo", { skipRoute: false, modulePath: undefined });
			expect(projLibSpy).toHaveBeenCalledWith("angular", "igx-ts");
			expect(mockLib.hasTemplate).toHaveBeenCalledWith("combo");
			expect(mockLib.getTemplateById).toHaveBeenCalledWith("combo");
			expect(state.files).toEqual([]);
		});
	});
});
