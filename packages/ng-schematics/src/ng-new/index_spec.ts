import { SchematicContext, Tree } from "@angular-devkit/schematics";
import { NodePackageTaskOptions } from "@angular-devkit/schematics/tasks/package-manager/options";
import { RepositoryInitializerTaskOptions } from "@angular-devkit/schematics/tasks/repo-init/options";
import { RunSchematicTaskOptions } from "@angular-devkit/schematics/tasks/run-schematic/options";
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";
import { BaseTemplate, GoogleAnalytics, ProjectLibrary, ProjectTemplate, Template } from "@igniteui/cli-core";
import * as path from "path";
import { take } from "rxjs/operators";
import * as AppProjectSchematic from "../app-projects/index";
import { SchematicsPromptSession } from "../prompt/SchematicsPromptSession";

const collectionPath = path.join(__dirname, "../collection.json");

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
        upgradeIgniteUIPackages: jasmine.createSpy().and.returnValue(Promise.resolve(true)),
        generateConfig: jasmine.createSpy().and.returnValue({}),
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

describe("Schematics ng-new", () => {

	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	it("works with no name provided", () => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const myTree = Tree.empty();
		const workingDirectory = "my-test-project";

		const mockBaseTemplate = createMockBaseTemplate();
        const mockProjectTemplate = createMockProjectTemplate(mockBaseTemplate);
        const mockTemplate = createMockTemplate(mockBaseTemplate);
        const mockLibrary = createMockLibrary(mockTemplate, mockProjectTemplate);

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

		runner.runSchematicAsync("ng-new", { version: "8.0.3" }, myTree)
		.pipe(take(1))
		.subscribe((e: UnitTestTree) => {
			for (const mockFunc of Object.entries(mockSession)) {
				expect(mockFunc[1]).toHaveBeenCalled();
			}
			expect(AppProjectSchematic.default).toHaveBeenCalled();
			expect(e.files.length).toEqual(1);
			expect(e.exists(`${workingDirectory}/.gitignore`)).toBeTruthy();
			const taskOptions = runner.tasks.map(task => task.options);
			// tslint:disable:object-literal-sort-keys
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
				message: `Initial commit for project: ${workingDirectory}`
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
	});

	it("works with name provided", () => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const myTree = Tree.empty();
		const workingDirectory = "my-test-project";
		const mockProject: Partial<ProjectTemplate> = {
			upgradeIgniteUIPackages: () => Promise.resolve(true)
		};
		spyOn(mockProject, "upgradeIgniteUIPackages").and.callThrough();

		const mockBaseTemplate = createMockBaseTemplate();
        const mockProjectTemplate = createMockProjectTemplate(mockBaseTemplate);
        const mockTemplate = createMockTemplate(mockBaseTemplate);
        const mockLibrary = createMockLibrary(mockTemplate, mockProjectTemplate);

		const mockSession = {
			getProjectLibraryByType: spyOn(SchematicsPromptSession.prototype, "getProjectLibraryByType")
			.and.returnValue((Promise.resolve(mockLibrary)))
		};

		const userAnswers = new Map<string, any>();
		userAnswers.set("upgradePackages", true);
		spyOnProperty(SchematicsPromptSession.prototype, "userAnswers", "get").and.returnValue(userAnswers);

		spyOn(AppProjectSchematic, "default").and.returnValue((currentTree: Tree, _context: SchematicContext) => {
			currentTree.create("gitignore", "");
			return currentTree;
		});

		runner.runSchematicAsync("ng-new", { version: "8.0.3", name: workingDirectory }, myTree)
		.pipe(take(1))
		.subscribe((e: UnitTestTree) => {
			for (const mockFunc of Object.entries(mockSession)) {
				expect(mockFunc[1]).toHaveBeenCalled();
			}
			expect(AppProjectSchematic.default).toHaveBeenCalled();
			expect(e.files.length).toEqual(1);
			expect(e.exists(`${workingDirectory}/.gitignore`)).toBeTruthy();
			const taskOptions = runner.tasks.map(task => task.options);
			// tslint:disable:object-literal-sort-keys
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
				message: `Initial commit for project: ${workingDirectory}`
			};
			expect(taskOptions.length).toBe(2);
			expect(mockProject.upgradeIgniteUIPackages).toHaveBeenCalled();
			expect(taskOptions).toContain(jasmine.objectContaining(expectedInstall));
			expect(taskOptions).toContain(expectedInit);
		});
	});
});
