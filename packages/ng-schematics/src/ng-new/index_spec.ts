import { SchematicContext, Tree } from "@angular-devkit/schematics";
import { NodePackageTaskOptions } from "@angular-devkit/schematics/tasks/package-manager/options";
import { RepositoryInitializerTaskOptions } from "@angular-devkit/schematics/tasks/repo-init/options";
import { RunSchematicTaskOptions } from "@angular-devkit/schematics/tasks/run-schematic/options";
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";
import { BaseTemplate, GoogleAnalytics, ProjectLibrary, ProjectTemplate, Template } from "@igniteui/cli-core";
import * as path from "path";
import * as AppProjectSchematic from "../app-projects/index";
import { SchematicsPromptSession } from "../prompt/SchematicsPromptSession";

const collectionPath = path.join(__dirname, "../collection.json");

describe("Schematics ng-new", () => {

	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	it("works with no name provided", async () => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const myTree = Tree.empty();
		const workingDirectory = "my-test-project";

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

		const mockLibrary: ProjectLibrary = {
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

		const mockProject: Partial<ProjectTemplate> = {
			upgradeIgniteUIPackages: () => Promise.resolve(true)
		};
		spyOn(mockProject, "upgradeIgniteUIPackages").and.callThrough();

		const mockSession = {
			chooseActionLoop: spyOn(SchematicsPromptSession.prototype, "chooseActionLoop")
				.and.returnValue(Promise.resolve()),
			getProjectLibraryByType: spyOn(SchematicsPromptSession.prototype, "getProjectLibraryByType")
				.and.returnValue((Promise.resolve(mockLibrary))),
			getProjectTemplate: spyOn(SchematicsPromptSession.prototype, "getProjectTemplate")
				.and.returnValue(Promise.resolve(mockProjectTemplate)),
			getTheme: spyOn(SchematicsPromptSession.prototype, "getTheme")
				.and.returnValue(Promise.resolve("custom")),
			getUserInput: spyOn(SchematicsPromptSession.prototype, "getUserInput")
				.and.returnValue(Promise.resolve(workingDirectory))
		};

		const userAnswers = new Map<string, any>();
		userAnswers.set("upgradePackages", true);
		Object.defineProperty(SchematicsPromptSession.prototype, "userAnswers", {
			configurable: true,
			get: () => userAnswers,
			set: () => void 0
		});

		spyOn(AppProjectSchematic, "default").and.returnValue((currentTree: Tree, _context: SchematicContext) => {
			currentTree.create("gitignore", "");
			return currentTree;
		});

		const tree = await runner.runSchematic("ng-new", { version: "8.0.3" }, myTree);
		for (const mockFunc of Object.entries(mockSession)) {
			expect(mockFunc[1]).toHaveBeenCalled();
		}
		expect(AppProjectSchematic.default).toHaveBeenCalled();
		expect(tree.files.length).toEqual(2);
		expect(tree.exists(`${workingDirectory}/.gitignore`)).toBeTruthy();
		const taskOptions = runner.tasks.map(task => task.options);
		const expectedInstall: NodePackageTaskOptions = {
			command: "install",
			quiet: true,
			workingDirectory,
			packageName: undefined,
			packageManager: undefined
		};
		const expectedInit: RepositoryInitializerTaskOptions = {
			workingDirectory,
			authorEmail: undefined,
			authorName: undefined,
			commit: true,
			message: `Initial commit for project`
		};
		const expectedStart: RunSchematicTaskOptions<any> = {
			collection: null,
			name: "start",
			options: {
				directory: "my-test-project"
			}
		};
		expect(taskOptions.length).toBe(3);
		expect(mockProject.upgradeIgniteUIPackages).toHaveBeenCalled();
		expect(taskOptions).toContain(jasmine.objectContaining(expectedInstall));
		expect(taskOptions).toContain(expectedInit);
		expect(taskOptions).toContain(expectedStart);
	});

	it("works with name provided", async () => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const myTree = Tree.empty();
		const workingDirectory = "my-test-project";
		const mockProject: Partial<ProjectTemplate> = {
			upgradeIgniteUIPackages: () => Promise.resolve(true)
		};
		spyOn(mockProject, "upgradeIgniteUIPackages").and.callThrough();

		const userAnswers = new Map<string, any>();
		userAnswers.set("upgradePackages", true);
		spyOnProperty(SchematicsPromptSession.prototype, "userAnswers", "get").and.returnValue(userAnswers);

		spyOn(AppProjectSchematic, "default").and.returnValue((currentTree: Tree, _context: SchematicContext) => {
			currentTree.create("gitignore", "");
			return currentTree;
		});

		const tree = await runner.runSchematic("ng-new", { version: "8.0.3", name: workingDirectory }, myTree);
		expect(AppProjectSchematic.default).toHaveBeenCalled();
		expect(tree.files.length).toEqual(2);
		expect(tree.exists(`${workingDirectory}/.gitignore`)).toBeTruthy();
		const taskOptions = runner.tasks.map(task => task.options);
		const expectedInstall: NodePackageTaskOptions = {
			command: "install",
			quiet: true,
			workingDirectory,
			packageName: undefined,
			packageManager: undefined
		};
		const expectedInit: RepositoryInitializerTaskOptions = {
			workingDirectory,
			authorEmail: undefined,
			authorName: undefined,
			commit: true,
			message: `Initial commit for project`
		};
		expect(taskOptions.length).toBe(2);
		expect(mockProject.upgradeIgniteUIPackages).toHaveBeenCalled();
		expect(taskOptions).toContain(jasmine.objectContaining(expectedInstall));
		expect(taskOptions).toContain(expectedInit);
	});

	describe("addAIConfig via ng-new", () => {
		const workingDirectory = "my-test-project";
		const mcpFilePath = `${workingDirectory}/.vscode/mcp.json`;

		function setupAndRun(runner: SchematicTestRunner, myTree: Tree): Promise<UnitTestTree> {
			spyOn(AppProjectSchematic, "default").and.returnValue((currentTree: Tree, _context: SchematicContext) => {
				currentTree.create("gitignore", "");
				return currentTree;
			});

			const userAnswers = new Map<string, any>();
			userAnswers.set("upgradePackages", false);
			spyOnProperty(SchematicsPromptSession.prototype, "userAnswers", "get").and.returnValue(userAnswers);

			return runner.runSchematic("ng-new", { version: "8.0.3", name: workingDirectory, skipInstall: true, skipGit: true }, myTree);
		}

		it("should create .vscode/mcp.json with both servers during ng-new", async () => {
			const runner = new SchematicTestRunner("schematics", collectionPath);
			const myTree = Tree.empty();

			const e = await setupAndRun(runner, myTree);

			expect(e.exists(mcpFilePath)).toBeTruthy();
			const content = JSON.parse(e.readContent(mcpFilePath));
			expect(content.servers["igniteui-cli"]).toEqual({ command: "npx", args: ["-y", "igniteui-cli", "mcp"] });
			expect(content.servers["igniteui-theming"]).toEqual({ command: "npx", args: ["-y", "igniteui-theming", "igniteui-theming-mcp"] });
		});
	});
});
