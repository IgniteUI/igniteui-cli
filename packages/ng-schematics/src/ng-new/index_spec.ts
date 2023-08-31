import { SchematicContext, Tree } from "@angular-devkit/schematics";
import { NodePackageTaskOptions } from "@angular-devkit/schematics/tasks/package-manager/options";
import { RepositoryInitializerTaskOptions } from "@angular-devkit/schematics/tasks/repo-init/options";
import { RunSchematicTaskOptions } from "@angular-devkit/schematics/tasks/run-schematic/options";
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";
import { GoogleAnalytics, ProjectLibrary, ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { take } from "rxjs/operators";
import * as AppProjectSchematic from "../app-projects/index";
import { SchematicsPromptSession } from "../prompt/SchematicsPromptSession";

const collectionPath = path.join(__dirname, "../collection.json");

describe("Schematics ng-new", () => {

	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	it("works with no name provided", done => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const myTree = Tree.empty();
		const workingDirectory = "my-test-project";
		const mockLibrary: Partial<ProjectLibrary> = {
			getProject: jasmine.createSpy("getProject").and.returnValue(true), projectIds: ["empty-page"], themes: ["custom"]
		};

		const mockProject: Partial<ProjectTemplate> = {
			upgradeIgniteUIPackages: () => Promise.resolve(true)
		};

		spyOn(mockProject as ProjectTemplate, "upgradeIgniteUIPackages").and.callThrough();

		const mockSession = {
			chooseActionLoop: spyOn(SchematicsPromptSession.prototype, "chooseActionLoop")
				.and.returnValue(Promise.resolve()),
			getProjectLibrary: spyOn(SchematicsPromptSession.prototype, "getProjectLibrary")
				.and.returnValue((Promise.resolve(mockLibrary as ProjectLibrary))),
			getProjectTemplate: spyOn(SchematicsPromptSession.prototype, "getProjectTemplate")
				.and.returnValue(Promise.resolve(mockProject as ProjectTemplate)),
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
			done();
		});
	});

	it("works with name provided", done => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const myTree = Tree.empty();
		const workingDirectory = "my-test-project";
		const mockProject: Partial<ProjectTemplate> = {
			upgradeIgniteUIPackages: () => Promise.resolve(true)
		};
		spyOn(mockProject as ProjectTemplate, "upgradeIgniteUIPackages").and.callThrough();
		const mockLibrary: Partial<ProjectLibrary> = {
			getProject: jasmine.createSpy("getProject").and.returnValue(mockProject),
			projectIds: ["empty-page"],
			themes: ["custom"]
		};

		const mockSession = {
			getProjectLibrary: spyOn(SchematicsPromptSession.prototype, "getProjectLibrary")
			.and.returnValue((Promise.resolve(mockLibrary as ProjectLibrary)))
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
			done();
		});
	});
});
