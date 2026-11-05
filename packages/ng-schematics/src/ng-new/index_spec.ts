import { virtualFs } from "@angular-devkit/core";
import { Tree } from "@angular-devkit/schematics";
import { NodePackageTaskOptions } from "@angular-devkit/schematics/tasks/package-manager/options";
import { RepositoryInitializerTaskOptions } from "@angular-devkit/schematics/tasks/repo-init/options";
import { RunSchematicTaskOptions } from "@angular-devkit/schematics/tasks/run-schematic/options";
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";
import { NodeWorkflow } from "@angular-devkit/schematics/tools";
import {
	App, BaseTemplate, FS_TOKEN, GoogleAnalytics, IFileSystem, ProjectLibrary, ProjectTemplate, ScaffoldOptions, Template
} from "@igniteui/cli-core";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { lastValueFrom } from "rxjs";
import { SchematicsPromptSession } from "../prompt/SchematicsPromptSession";

const collectionPath = path.join(__dirname, "../collection.json");

/** Serves a library with a single project template, whose scaffold succeeds without creating anything */
function mockProjectInLibrary(): Partial<ProjectTemplate> {
	const mockProject: Partial<ProjectTemplate> = {
		id: "mock-template-id",
		framework: "angular",
		projectType: "ts",
		templatePaths: ["/path/to/template"],
		generateConfig: jasmine.createSpy().and.returnValue({}),
		upgradeIgniteUIPackages: jasmine.createSpy().and.returnValue(Promise.resolve(true)),
		scaffold: jasmine.createSpy().and.returnValue(Promise.resolve(true))
	};

	const mockLibrary: Partial<ProjectLibrary> = {
		name: "mock-library",
		themes: ["mock-theme"],
		components: [],
		projectIds: ["another-mock"],
		projects: [mockProject as ProjectTemplate],
		templates: [],
		projectType: "ts"
	};

	spyOn(SchematicsPromptSession.prototype, "getProjectLibraryByType")
		.and.returnValue(Promise.resolve(mockLibrary as ProjectLibrary));
	return mockProject;
}

/** The scaffold options the schematic passes for a project created through the schematics */
function expectedScaffoldOptions(name: string, theme: string, skipInstall: boolean): ScaffoldOptions {
	return {
		name,
		theme,
		skipInstall,
		skipGit: true,
		extraConfig: { cliPackage: "@igniteui/angular-schematics", cliVersion: jasmine.any(String) }
	};
}

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
			upgradeIgniteUIPackages: jasmine.createSpy().and.returnValue(Promise.resolve(true)),
			scaffold: jasmine.createSpy().and.returnValue(Promise.resolve(true))
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

		const mockSession = {
			// regression: AI config (ai-config schematic) must run before the interactive
			// setup/action loop, otherwise "Next Steps" prints before the AI-agents prompt.
			// Both run with the project folder as the root of the tree.
			chooseActionLoop: spyOn(SchematicsPromptSession.prototype, "chooseActionLoop")
				.and.callFake(function (this: SchematicsPromptSession) {
					expect(this.tree.exists(".mcp.json")).toBeTruthy();
					return Promise.resolve();
				}),
			getProjectLibraryByType: spyOn(SchematicsPromptSession.prototype, "getProjectLibraryByType")
				.and.returnValue((Promise.resolve(mockLibrary))),
			getProjectTemplate: spyOn(SchematicsPromptSession.prototype, "getProjectTemplate")
				.and.returnValue(Promise.resolve(mockProjectTemplate)),
			getTheme: spyOn(SchematicsPromptSession.prototype, "getTheme")
				.and.returnValue(Promise.resolve("mock-theme")),
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

		const tree = await runner.runSchematic("ng-new", { version: "8.0.3" }, myTree);
		for (const mockFunc of Object.entries(mockSession)) {
			expect(mockFunc[1]).toHaveBeenCalled();
		}
		expect(mockProjectTemplate.scaffold).toHaveBeenCalledOnceWith(expectedScaffoldOptions(workingDirectory, "mock-theme", false));
		expect(tree.files.length).toBeGreaterThanOrEqual(2);
		expect(tree.files.every(file => file.startsWith(`/${workingDirectory}/`))).toBeTrue();
		const taskOptions = runner.tasks.map(task => task.options);
		const expectedInstall: NodePackageTaskOptions = {
			command: "install",
			quiet: true,
			workingDirectory,
			packageName: undefined,
			// the scaffold created the project with npm, whatever manager the Angular CLI picked
			packageManager: "npm"
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
		expect(mockProjectTemplate.upgradeIgniteUIPackages).toHaveBeenCalled();
		expect(taskOptions).toContain(jasmine.objectContaining(expectedInstall));
		expect(taskOptions).toContain(expectedInit);
		expect(taskOptions).toContain(expectedStart);
	});

	it("works with name provided, without installing again after the scaffold", async () => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const myTree = Tree.empty();
		const workingDirectory = "my-test-project";

		const mockProject = mockProjectInLibrary();

		// only the guided loop, which a name skips, answers upgradePackages
		const userAnswers = new Map<string, any>();
		Object.defineProperty(SchematicsPromptSession.prototype, "userAnswers", {
			configurable: true,
			get: () => userAnswers,
			set: () => void 0
		});

		const tree = await runner.runSchematic("ng-new", { version: "8.0.3", name: workingDirectory }, myTree);
		expect(mockProject.scaffold).toHaveBeenCalledOnceWith(expectedScaffoldOptions(workingDirectory, "mock-theme", false));
		expect(tree.files.length).toBeGreaterThanOrEqual(2);
		expect(tree.files.every(file => file.startsWith(`/${workingDirectory}/`))).toBeTrue();
		const expectedInit: RepositoryInitializerTaskOptions = {
			workingDirectory,
			authorEmail: undefined,
			authorName: undefined,
			commit: true,
			message: `Initial commit for project`
		};
		expect(mockProject.upgradeIgniteUIPackages).not.toHaveBeenCalled();
		expect(runner.tasks.map(task => task.options))
			.withContext("the scaffold installed the packages; the git init needs no install before it")
			.toEqual([expectedInit]);
	});

	it("fails when the project cannot be created", async () => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const mockProject = mockProjectInLibrary();
		(mockProject.scaffold as jasmine.Spy).and.returnValue(Promise.resolve(false));

		await expectAsync(runner.runSchematic("ng-new", { version: "8.0.3", name: "my-test-project" }, Tree.empty()))
			.toBeRejectedWithError(/Project creation failed/);
		expect(runner.tasks).withContext("no install, git or start tasks").toEqual([]);
	});

	it("rejects dry runs before creating the project", async () => {
		const mockProject = mockProjectInLibrary();
		// how `ng new --dry-run` runs the schematic
		const workflow = new NodeWorkflow(new virtualFs.SimpleMemoryHost(), { dryRun: true });

		await expectAsync(lastValueFrom(workflow.execute({
			collection: collectionPath,
			schematic: "ng-new",
			options: { version: "8.0.3", name: "my-test-project" }
		}), { defaultValue: undefined })).toBeRejectedWithError(/--dry-run is not supported/);
		expect(mockProject.scaffold).not.toHaveBeenCalled();
	});

	it("configures AI tooling in the project the scaffold creates on disk", async () => {
		const name = "my-test-project";
		const skill = "igniteui-angular-grids/SKILL.md";
		const mockProject = mockProjectInLibrary();
		// a minimal project, written to disk the way `ng new` + `ng add igniteui-angular` write it, past the workflow's tree
		(mockProject.scaffold as jasmine.Spy).and.callFake(async () => {
			const files: Record<string, string> = {
				"package.json": JSON.stringify({ dependencies: { "igniteui-angular": "~21.0.0" } }),
				[`node_modules/igniteui-angular/skills/${skill}`]: "# Grids",
				".mcp.json": JSON.stringify({ mcpServers: { existing: { command: "existing", args: [] } } })
			};
			for (const [file, content] of Object.entries(files)) {
				fs.mkdirSync(path.dirname(path.join(name, file)), { recursive: true });
				fs.writeFileSync(path.join(name, file), content);
			}
			return true;
		});
		Object.defineProperty(SchematicsPromptSession.prototype, "userAnswers", {
			configurable: true,
			get: () => new Map<string, any>([["upgradePackages", false]]),
			set: () => void 0
		});

		const cwd = process.cwd();
		const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "ng-new-spec-"));
		try {
			process.chdir(tmpDir);
			// how `ng new` runs the schematic: the tree is backed by the file system, options get their schema defaults
			const workflow = new NodeWorkflow(tmpDir, { schemaValidation: true });
			await lastValueFrom(workflow.execute({
				collection: collectionPath,
				schematic: "ng-new",
				options: { version: "8.0.3", name, skipInstall: true, skipGit: true }
			}), { defaultValue: undefined });

			const projectDir = path.join(tmpDir, name);
			// ai-config read the installed package's skills from disk, and its writes were committed
			for (const skillsDir of [".claude/skills", ".agents/skills"]) {
				expect(fs.readFileSync(path.join(projectDir, skillsDir, skill), "utf8")).withContext(skillsDir).toBe("# Grids");
			}
			// the existing file was updated, not created over
			const mcpServers = JSON.parse(fs.readFileSync(path.join(projectDir, ".mcp.json"), "utf8")).mcpServers;
			expect(Object.keys(mcpServers)).toEqual(jasmine.arrayWithExactContents(
				["existing", "angular-cli", "igniteui-cli", "igniteui-theming"]));
		} finally {
			process.chdir(cwd);
			fs.rmSync(tmpDir, { recursive: true, force: true });
		}
	});

	it("runs the guided loop and the licensed-feed upgrade in the project the scaffold creates on disk", async () => {
		const name = "my-test-project";
		const mockProject = mockProjectInLibrary();
		(mockProject.scaffold as jasmine.Spy).and.callFake(async () => {
			fs.mkdirSync(name);
			fs.writeFileSync(path.join(name, "package.json"), JSON.stringify({ dependencies: { "igniteui-angular": "~21.0.0" } }));
			return true;
		});
		spyOn(SchematicsPromptSession.prototype, "getUserInput").and.returnValue(Promise.resolve(name));
		spyOn(SchematicsPromptSession.prototype, "getProjectTemplate").and.returnValue(Promise.resolve(mockProject as ProjectTemplate));
		spyOn(SchematicsPromptSession.prototype, "getTheme").and.returnValue(Promise.resolve("mock-theme"));
		spyOn(SchematicsPromptSession.prototype, "chooseActionLoop").and.callFake(function (this: SchematicsPromptSession) {
			expect(this.tree.exists("package.json")).withContext("guided loop reads the project").toBeTrue();
			this.tree.create("added.txt", "added");
			return Promise.resolve();
		});
		(mockProject.upgradeIgniteUIPackages as jasmine.Spy).and.callFake(async () => {
			expect(App.container.get<IFileSystem>(FS_TOKEN).fileExists("./package.json"))
				.withContext("upgrade reads the project's package.json").toBeTrue();
			return true;
		});
		Object.defineProperty(SchematicsPromptSession.prototype, "userAnswers", {
			configurable: true,
			get: () => new Map<string, any>([["upgradePackages", true]]),
			set: () => void 0
		});

		const cwd = process.cwd();
		const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "ng-new-spec-"));
		try {
			process.chdir(tmpDir);
			const workflow = new NodeWorkflow(tmpDir, { schemaValidation: true });
			await lastValueFrom(workflow.execute({
				collection: collectionPath,
				schematic: "ng-new",
				options: { version: "8.0.3", skipInstall: true, skipGit: true }
			}), { defaultValue: undefined });

			expect(mockProject.upgradeIgniteUIPackages).toHaveBeenCalledOnceWith("", "");
			expect(fs.readFileSync(path.join(tmpDir, name, "added.txt"), "utf8")).toBe("added");
		} finally {
			process.chdir(cwd);
			fs.rmSync(tmpDir, { recursive: true, force: true });
		}
	});

	describe("addAIConfig via ng-new", () => {
		const workingDirectory = "my-test-project";
		const mcpFilePath = `${workingDirectory}/.mcp.json`;

		function setupAndRun(runner: SchematicTestRunner, myTree: Tree): Promise<UnitTestTree> {
			mockProjectInLibrary();

			const userAnswers = new Map<string, any>();
			userAnswers.set("upgradePackages", false);
			Object.defineProperty(SchematicsPromptSession.prototype, "userAnswers", {
				configurable: true,
				get: () => userAnswers,
				set: () => void 0
			});

			return runner.runSchematic("ng-new", { version: "8.0.3", name: workingDirectory, skipInstall: true, skipGit: true }, myTree);
		}

		it("should create .mcp.json with both servers during ng-new", async () => {
			const runner = new SchematicTestRunner("schematics", collectionPath);
			const myTree = Tree.empty();

			const e = await setupAndRun(runner, myTree);

			expect(e.exists(mcpFilePath)).toBeTruthy();
			const content = JSON.parse(e.readContent(mcpFilePath));
			expect(content.mcpServers["igniteui-cli"]).toEqual({ command: "npx", args: ["-y", "igniteui-cli", "mcp"] });
			expect(content.mcpServers["igniteui-theming"]).toEqual({ command: "npx", args: ["-y", "igniteui-theming", "igniteui-theming-mcp"] });
		});
	});
});
