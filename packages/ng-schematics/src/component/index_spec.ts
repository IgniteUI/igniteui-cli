import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import { BaseTemplate, Config, GoogleAnalytics, ProjectConfig, ProjectLibrary, ProjectTemplate, Template } from "@igniteui/cli-core";
import * as path from "path";
import { SchematicsPromptSession } from "../prompt/SchematicsPromptSession";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";

const collectionPath = path.join(__dirname, "../collection.json");

describe("component", () => {
	let runner: SchematicTestRunner;
	let mockTemplate: Template;
	let mockLib: ProjectLibrary;
	let projLibSpy: jasmine.Spy;

	function createMocks(packages: string[]) {
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
			isHidden: false,
			// no template folders, so the schematic doesn't resolve real files
			templatePaths: [],
			generateConfig: jasmine.createSpy().and.returnValue({}),
			getExtraConfiguration: jasmine.createSpy().and.returnValue([]),
			setExtraConfiguration: jasmine.createSpy()
		};

		const mockProjectTemplate: ProjectTemplate = {
			...mockBaseTemplate,
			installModules: jasmine.createSpy().and.callFake(() => {}),
			upgradeIgniteUIPackages: jasmine.createSpy().and.returnValue(Promise.resolve(true))
		};

		mockTemplate = {
			...mockBaseTemplate,
			components: ["mock-component"],
			controlGroup: "mock-group",
			listInComponentTemplates: true,
			listInCustomTemplates: true,
			packages,
			registerInProject: jasmine.createSpy(),
		};

		const mockComponent = {
			name: "mock-component",
			description: "A mock component",
			group: "mock-group",
			groupPriority: 1,
			templates: [mockTemplate]
		};

		mockLib = {
			name: "mock-library",
			themes: ["mock-theme"],
			components: [mockComponent],
			projectIds: ["another-mock"],
			projects: [mockProjectTemplate],
			templates: [mockTemplate],
			projectType: "ts",
			generateTemplateFolderPath: "/path/to/templates",
			getCustomTemplateNames: jasmine.createSpy().and.returnValue([]),
			getTemplateByName: jasmine.createSpy().and.returnValue(mockTemplate),
			getTemplateById: jasmine.createSpy().and.returnValue(mockTemplate),
			getComponentByName: jasmine.createSpy().and.returnValue(mockComponent),
			getComponentGroupNames: jasmine.createSpy().and.returnValue(["mock-group"]),
			getComponentsByGroup: jasmine.createSpy().and.returnValue([mockComponent]),
			getComponentGroups: jasmine.createSpy().and.returnValue([{
				name: "mock-group",
				description: "A mock component group"
			}]),
			getCustomTemplates: jasmine.createSpy().and.returnValue([mockTemplate]),
			getProject: jasmine.createSpy().and.returnValue(mockProjectTemplate),
			hasProject: jasmine.createSpy().and.returnValue(false),
			hasTemplate: jasmine.createSpy().and.returnValue(true),
			registerTemplate: jasmine.createSpy()
		};

		projLibSpy = spyOn(SchematicsTemplateManager.prototype, "getProjectLibrary").and.returnValue(mockLib);
	}

	function createTree(dependencies: { [name: string]: string } = {}): Tree {
		const tree = Tree.empty();
		tree.create("package.json", JSON.stringify({ dependencies }));
		return tree;
	}

	beforeEach(() => {
		runner = new SchematicTestRunner("schematics", collectionPath);
		spyOn(GoogleAnalytics, "post");
		spyOn(ProjectConfig, "getConfig").and.returnValue({ customTemplates: [], project: { theme: "Custom" } } as unknown as Config);
	});

	it("generates and registers the template when called with arguments", async () => {
		createMocks([]);

		const state = await runner.runSchematic("component",
			{ name: "my-combo", template: "combo", skipRoute: false }, createTree());

		expect(projLibSpy).toHaveBeenCalledWith("angular", "igx-ts");
		expect(mockLib.hasTemplate).toHaveBeenCalledWith("combo");
		expect(mockLib.getTemplateById).toHaveBeenCalledWith("combo");
		expect(mockTemplate.generateConfig).toHaveBeenCalledWith("my-combo", {});
		expect(mockTemplate.registerInProject).toHaveBeenCalledWith("", "my-combo", { skipRoute: false, modulePath: undefined });
		expect(runner.tasks).toEqual([]);
		expect(JSON.parse(state.readContent("/package.json"))).toEqual({ dependencies: {} });
	});

	it("passes skipRoute and module to registerInProject", async () => {
		createMocks([]);

		await runner.runSchematic("component",
			{ name: "my-combo", template: "combo", skipRoute: true, module: "app.module.ts" }, createTree());

		expect(mockTemplate.registerInProject).toHaveBeenCalledWith("", "my-combo", { skipRoute: true, modulePath: "app.module.ts" });
	});

	it("throws for an unknown template", async () => {
		createMocks([]);
		(mockLib.hasTemplate as jasmine.Spy).and.returnValue(false);

		await expectAsync(runner.runSchematic("component", { name: "my-combo", template: "unknown" }, createTree()))
			.toBeRejectedWithError(/template with id 'unknown' not found/);
		expect(mockTemplate.registerInProject).not.toHaveBeenCalled();
	});

	it("adds missing template packages to package.json and schedules install", async () => {
		createMocks(["igniteui-angular-charts@~19.0.0", "@scope/pkg"]);

		const state = await runner.runSchematic("component",
			{ name: "my-chart", template: "chart" }, createTree({ "existing": "^1.0.0" }));

		expect(JSON.parse(state.readContent("/package.json")).dependencies).toEqual({
			"existing": "^1.0.0",
			"igniteui-angular-charts": "~19.0.0",
			"@scope/pkg": "*"
		});
		expect(runner.tasks.map(t => t.name)).toEqual(["node-package"]);
	});

	it("does not touch package.json or install when packages are already present", async () => {
		createMocks(["igniteui-angular-charts@~19.0.0"]);
		const original = JSON.stringify({ dependencies: { "igniteui-angular-charts": "^18.0.0" } });
		const tree = Tree.empty();
		tree.create("package.json", original);

		const state = await runner.runSchematic("component", { name: "my-chart", template: "chart" }, tree);

		expect(state.readContent("/package.json")).toEqual(original);
		expect(runner.tasks).toEqual([]);
	});

	it("runs the prompt session and schedules start when no template is given", async () => {
		createMocks([]);
		const loopSpy = spyOn(SchematicsPromptSession.prototype, "chooseActionLoop").and.returnValue(Promise.resolve());

		await runner.runSchematic("component", { name: "my-combo" }, createTree());

		expect(loopSpy).toHaveBeenCalledWith(mockLib);
		expect(mockTemplate.registerInProject).not.toHaveBeenCalled();
		expect(runner.tasks.map(t => t.name)).toEqual(["run-schematic"]);
	});
});
