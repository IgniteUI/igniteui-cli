import { SchematicContext, Tree } from "@angular-devkit/schematics";
import { NodePackageTaskOptions } from "@angular-devkit/schematics/tasks/node-package/options";
import { RepositoryInitializerTaskOptions } from "@angular-devkit/schematics/tasks/repo-init/options";
import { RunSchematicTaskOptions } from "@angular-devkit/schematics/tasks/run-schematic/options";
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";
import * as IgxProjectLibrary from "@igniteui/angular-templates";
import { ProjectLibrary } from "@igniteui/cli-core";
import * as path from "path";
import { take } from "rxjs/operators";
import * as AppProjectSchematic from "../app-projects/index";
import { SchematicsPromptSession } from "../prompt/SchematicsPromptSession";

const collectionPath = path.join(__dirname, "../collection.json");

describe("igniteui-angular-schematics", () => {
	it("works with no name provided", done => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const myTree = Tree.empty();
		const workingDirectory = "my-test-project";
		const mockLibrary = {
			getProject: jasmine.createSpy("getProject").and.returnValue(true), projectIds: ["empty-page"], themes: ["custom"]
		};

		const mockSession = {
			chooseActionLoop: spyOn(SchematicsPromptSession.prototype, "chooseActionLoop")
			.and.returnValue(Promise.resolve(true)),
			getProjectLibrary: spyOn(SchematicsPromptSession.prototype, "getProjectLibrary")
			.and.returnValue((Promise.resolve(mockLibrary))),
			getUserInput: spyOn(SchematicsPromptSession.prototype, "getUserInput")
			.and.returnValue(Promise.resolve(workingDirectory)),
			setTree: spyOn(SchematicsPromptSession.prototype, "setContext").and.callThrough()
		};

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
			const expectedInstall: NodePackageTaskOptions = {
				command: "install",
				quiet: true,
				workingDirectory,
				packageName: undefined,
				packageManager: undefined
			};
			const expectedInit: RepositoryInitializerTaskOptions = {
				workingDirectory,
				commit: true,
				message: `Initial commit for project: ${workingDirectory}`,
				authorName: undefined,
				authorEmail: undefined
			};
			const expectedStart: RunSchematicTaskOptions<any> = {
				collection: null,
				name: "start",
				options: {
					directory: "my-test-project"
				}
			};
			expect(taskOptions).toContain(expectedInstall);
			expect(taskOptions).toContain(expectedInit);
			expect(taskOptions).toContain(expectedStart);
			done();
		});
	});

	it("works with invalid name", done => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const myTree = Tree.empty();
		const workingDirectory = "my-test-project";
		const mockLibrary = {
			getProject: jasmine.createSpy("getProject").and.returnValue(true), projectIds: ["empty-page"], themes: ["custom"]
		};

		const mockSession = {
			chooseActionLoop: spyOn(SchematicsPromptSession.prototype, "chooseActionLoop")
			.and.returnValue(Promise.resolve(true)),
			getProjectLibrary: spyOn(SchematicsPromptSession.prototype, "getProjectLibrary")
			.and.returnValue((Promise.resolve(mockLibrary))),
			getUserInput: spyOn(SchematicsPromptSession.prototype, "getUserInput")
			.and.returnValue(Promise.resolve(workingDirectory)),
			setTree: spyOn(SchematicsPromptSession.prototype, "setContext").and.callThrough()
		};

		spyOn(AppProjectSchematic, "default").and.returnValue((currentTree: Tree, _context: SchematicContext) => {
			currentTree.create("gitignore", "");
			return currentTree;
		});

		runner.runSchematicAsync("ng-new", { version: "8.0.3", name: "1name" }, myTree)
		.pipe(take(1))
		.subscribe((e: UnitTestTree) => {
			for (const mockFunc of Object.entries(mockSession)) {
				expect(mockFunc[1]).toHaveBeenCalled();
			}
			expect(AppProjectSchematic.default).toHaveBeenCalled();
			expect(e.files.length).toEqual(1);
			expect(e.exists(`${workingDirectory}/.gitignore`)).toBeTruthy();
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
				commit: true,
				message: `Initial commit for project: ${workingDirectory}`,
				authorName: undefined,
				authorEmail: undefined
			};
			const expectedStart: RunSchematicTaskOptions<any> = {
				collection: null,
				name: "start",
				options: {
					directory: "my-test-project"
				}
			};
			expect(taskOptions).toContain(expectedInstall);
			expect(taskOptions).toContain(expectedInit);
			expect(taskOptions).toContain(expectedStart);
			done();
		});
	});

	it("works with name provided", done => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const myTree = Tree.empty();
		const workingDirectory = "my-test-project";
		const mockLibrary = {
			getProject: jasmine.createSpy("getProject").and.returnValue(true), projectIds: ["empty-page"], themes: ["custom"]
		};

		const mockSession = {
			getProjectLibrary: spyOn(SchematicsPromptSession.prototype, "getProjectLibrary")
			.and.returnValue((Promise.resolve(mockLibrary)))
		};

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
			const expectedInstall: NodePackageTaskOptions = {
				command: "install",
				quiet: true,
				workingDirectory,
				packageName: undefined,
				packageManager: undefined
			};
			const expectedInit: RepositoryInitializerTaskOptions = {
				workingDirectory,
				commit: true,
				message: `Initial commit for project: ${workingDirectory}`,
				authorName: undefined,
				authorEmail: undefined
			};
			const expectedStart: RunSchematicTaskOptions<any> = {
				collection: null,
				name: "start",
				options: {
					directory: "my-test-project"
				}
			};
			expect(taskOptions).toContain(expectedInstall);
			expect(taskOptions).toContain(expectedInit);
			expect(taskOptions).toContain(expectedStart);
			done();
		});
	});
});
