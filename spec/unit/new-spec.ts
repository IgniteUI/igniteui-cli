import { App, BaseTemplate, Config, GoogleAnalytics, PackageManager, ProjectConfig, ProjectTemplate, Util } from "@igniteui/cli-core";
import * as path from "path";
import { default as newCmd } from "../../packages/cli/lib/commands/new";
import { PromptSession } from "../../packages/cli/lib/PromptSession";
import { resetSpy } from "../helpers/utils";
import * as aiConfig from "../../packages/cli/lib/commands/ai-config";

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
		isHidden: false,
		templatePaths: ["/path/to/template"],
		generateConfig: null,
		getExtraConfiguration: jasmine.createSpy().and.returnValue([]),
		setExtraConfiguration: jasmine.createSpy()
    };
}

describe("Unit - New command", () => {
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(Util, "execSync");
		spyOn(process, "chdir");
		spyOn(PackageManager, "installPackages");
		spyOn(aiConfig, "configure").and.returnValue(Promise.resolve());
		spyOn(Util, "directoryExists").and.returnValue(false);
	});

	afterEach(() => {
		// clean test folder:
		process.chdir("../../");
	});

	it("New command in existing project", async () => {
		spyOn(Util, "error");
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);

		await newCmd.handler({ _: ["new"], $0: "new" });
		expect(Util.error).toHaveBeenCalledWith("There is already an existing project.", "red");
	});

	it("Should validate and trim name", async () => {
		spyOn(Util, "error");
		spyOn(ProjectConfig, "getConfig").and.returnValue(null);

		const errorCombos = [
			{ name: "1 is not valid", inError: "1 is not valid" },
			{ name: "   1 is   not valid  \t   ", inError: "1 is   not valid" },
			{ name: "../newProject", inError: "../newProject" },
			{ name: "/newProject", inError: "/newProject" },
			{ name: " .newProject", inError: ".newProject" },
			{ name: "name!", inError: "name!" },
			{ name: "bits~and*bobs()", inError: "bits~and*bobs()" }
		];

		for (const item of errorCombos) {
			resetSpy(Util.error);
			await newCmd.handler({ name: item.name, _: ["new"], $0: "new" });
			expect(Util.error).toHaveBeenCalledWith(`Name '${item.inError}' is not valid. `
				+ "Name should start with a letter and can also contain numbers, dashes and spaces.",
				"red");
		}
	});

	it("Logs error for wrong framework", async () => {
		spyOn(Util, "error");
		//spied getFrameworkById won't return anything, i.e. not found
		newCmd.templateManager = jasmine.createSpyObj("TemplateManager", ["getFrameworkById", "getProjectLibrary"]);

		await newCmd.handler({ name: "Test", framework: "jq", _: ["new"], $0: "new" });

		expect(newCmd.templateManager.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(Util.error).toHaveBeenCalledWith("Framework not supported", "red");
		//no further attempts to get project:
		expect(newCmd.templateManager.getProjectLibrary).toHaveBeenCalledTimes(0);
		expect(Util.log).toHaveBeenCalledTimes(0);
	});

	it("Logs error for wrong project type", async () => {
		spyOn(Util, "error");
		newCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			// return nothing, i.e. not found
			getProjectLibrary: undefined
		});

		await newCmd.handler({ name: "Test", framework: "jq", type: "js", _: ["new"], $0: "new"});

		expect(newCmd.templateManager.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(newCmd.templateManager.getProjectLibrary).toHaveBeenCalledWith("jq", "js");
		expect(Util.error).toHaveBeenCalledWith(`Project type "js" not found in framework 'jq'`);
		//no further attempts to get project:
		expect(Util.log).toHaveBeenCalledTimes(0);
	});

	it("Logs error for wrong project theme", async () => {
		spyOn(Util, "error");

		const mockProjLib = {
			getProject: () => { },
			projectIds: ["empty"],
			projectType: "type",
			themes: ["ig"]
		};
		newCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});
		spyOn(mockProjLib, "getProject");
		await newCmd.handler({ name: "Test", framework: "jq", type: "js", theme: "mega-custom", _: ["new"], $0: "new" });

		expect(newCmd.templateManager.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(newCmd.templateManager.getProjectLibrary).toHaveBeenCalledWith("jq", "js");
		expect(Util.error).toHaveBeenCalledWith("Theme not supported");
		//no further attempts to get project:
		expect(Util.log).toHaveBeenCalledTimes(0);
		expect(mockProjLib.getProject).toHaveBeenCalledTimes(0);
	});

	it("Should start prompt session with missing arg", async () => {
		spyOn(ProjectConfig, "getConfig").and.returnValue(null);

		const mockProjLib = {};
		newCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});

		const promptSession =  PromptSession.prototype;
		spyOn(promptSession, "start");
		//spied getFrameworkById won't return anything, i.e. not found

		await newCmd.handler({ _: ["new"], $0: "new" });
		expect(promptSession.start).toHaveBeenCalled();
	});

	it("Logs error for unavailable project", async () => {
		spyOn(Util, "error");

		const mockProjLib = {
			getProject: () => { },
			projectIds: ["empty"],
			projectType: "type",
			themes: ["ig"]
		};
		newCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});
		spyOn(mockProjLib, "getProject");
		await newCmd.handler({ name: "Test", framework: "jq", type: "type", _: ["new"], $0: "new" });

		expect(newCmd.templateManager.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(newCmd.templateManager.getProjectLibrary).toHaveBeenCalledWith("jq", "type");
		expect(Util.log).toHaveBeenCalledWith("Project Name: Test, framework jq, type type, theme ig");
		expect(mockProjLib.getProject).toHaveBeenCalled();
		expect(Util.error).toHaveBeenCalledWith("Project template not found");
		//no other logs:
		expect(Util.log).toHaveBeenCalledTimes(1);
	});

	it("Generates default without project type", async () => {
		const mockBaseTemplate = createMockBaseTemplate();
		const mockProjectTemplate: ProjectTemplate = {
			...mockBaseTemplate,
			installModules: jasmine.createSpy().and.callFake(() => {}),
			upgradeIgniteUIPackages: jasmine.createSpy().and.returnValue(Promise.resolve(true))
		};
		const mockConfig = { test: "test" };
		mockProjectTemplate.generateConfig = jasmine.createSpy().and.returnValue(mockConfig);
		const mockProjLib = {
			getProject: () => {
				return mockProjectTemplate;
			},
			projectIds: ["empty"],
			projectType: "js",
			themes: ["ig"]
		};
		newCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});
		//spyOn(newCmd.template, "getFrameworkById").and.returnValue({});
		//spyOn(newCmd.template, "getProjectLibrary").and.returnValue(mockProjLib);

		spyOn(process, "cwd").and.returnValue("Mock dir");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		spyOn(Util, "fileExists").and.returnValue(false);

		const mockFileSystem = {
			fileExists: jasmine.createSpy().and.returnValue(false),
			readFile: jasmine.createSpy().and.returnValue(JSON.stringify({ key: "value" }))
		};
		spyOn(App.container, 'get').and.returnValue(mockFileSystem);

		await newCmd.handler({ name: "Test", framework: "jq", theme: "ig", _: ["new"], $0: "new" });

		expect(newCmd.templateManager.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(newCmd.templateManager.getProjectLibrary).toHaveBeenCalledWith("jq");
		expect(Util.log).toHaveBeenCalledWith("Project Name: Test, framework jq, type js, theme ig");
		expect(mockProjectTemplate.generateConfig).toHaveBeenCalledWith("Test", "ig");
		expect(Util.processTemplates)
		.toHaveBeenCalledWith("/path/to/template", path.join("Mock dir", "Test"), mockConfig, mockBaseTemplate.delimiters, false);
		expect(PackageManager.installPackages).toHaveBeenCalled();
		expect(process.chdir).toHaveBeenCalledWith("Test");
		expect(process.chdir).toHaveBeenCalledWith("..");
		expect(Util.log).toHaveBeenCalledWith(jasmine.stringMatching("Project Created"));
	});

	it("Correctly generates passed project type", async () => {
		const mockBaseTemplate = createMockBaseTemplate();
		const mockConfig = { test: "test" };
		const mockTemplate = {
			delimiters: mockBaseTemplate.delimiters,
			generateConfig: jasmine.createSpy().and.returnValue(mockConfig),
			templatePaths: ["test"]
		};
		const mockProjLib = {
			getProject: () => {
				return mockTemplate;
			},
			projectIds: ["empty"],
			projectType: "type",
			themes: ["ig"]
		};
		newCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});

		spyOn(process, "cwd").and.returnValue("Mock dir");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		spyOn(Util, "fileExists").and.returnValue(false);

		const mockFileSystem = {
			fileExists: jasmine.createSpy().and.returnValue(false),
			readFile: jasmine.createSpy().and.returnValue(JSON.stringify({ key: "value" }))
		};
		spyOn(App.container, 'get').and.returnValue(mockFileSystem);

		await newCmd.handler({ name: "Test", framework: "jq", type: "type", theme: "ig", _: ["new"], $0: "new" });

		expect(newCmd.templateManager.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(newCmd.templateManager.getProjectLibrary).toHaveBeenCalledWith("jq", "type");
		expect(mockTemplate.generateConfig).toHaveBeenCalledWith("Test", "ig");
		expect(Util.processTemplates)
		.toHaveBeenCalledWith("test", path.join("Mock dir", "Test"), mockConfig, mockBaseTemplate.delimiters, false);
		expect(PackageManager.installPackages).toHaveBeenCalled();
		expect(process.chdir).toHaveBeenCalledWith("Test");
		expect(process.chdir).toHaveBeenCalledWith("..");
		expect(Util.log).toHaveBeenCalledWith("Project Name: Test, framework jq, type type, theme ig");
		expect(Util.log).toHaveBeenCalledWith(jasmine.stringMatching("Project Created"));
	});

	it("Git initialization", async () => {
		const projectName = "projTitle";

		const mockTemplate = {
			generateConfig: jasmine.createSpy().and.returnValue({ test: "test" }),
			templatePaths: ["test"]
		};
		const mockProjLib = {
			getProject: () => {
				return mockTemplate;
			},
			projectIds: ["empty"],
			projectType: "type",
			themes: ["ig"]
		};
		newCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});

		await newCmd.handler({ name: projectName, framework: "jq", _: ["new"], $0: "new" });

		expect(Util.execSync).toHaveBeenCalledWith("git init", jasmine.any(Object));
		expect(Util.execSync).toHaveBeenCalledWith("git add .", jasmine.any(Object));
		expect(Util.execSync).toHaveBeenCalledWith("git commit -m \"Initial commit for project\"",
			jasmine.any(Object));
		expect(Util.log).toHaveBeenCalledWith(
			jasmine.stringMatching("Git Initialized and Project '" + projectName + "' Committed")
		);
	});

	it("Skip Git initialization with command option", async () => {
		const projectName = "projTitle";

		const mockTemplate = {
			generateConfig: jasmine.createSpy().and.returnValue({ test: "test" }),
			templatePaths: ["test"]
		};
		const mockProjLib = {
			getProject: () => {
				return mockTemplate;
			},
			projectIds: ["empty"],
			projectType: "type",
			themes: ["ig"]
		};
		newCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});

		spyOn(Util, "gitInit");

		await newCmd.handler({ "name": projectName, "framework": "jq", "skip-git": true, _: ["new"], $0: "new" });

		expect(Util.gitInit).not.toHaveBeenCalled();
	});

	it("Skip Git initialization with configuration option", async () => {
		const projectName = "projTitle";

		const mockTemplate = {
			generateConfig: jasmine.createSpy().and.returnValue({ test: "test" }),
			templatePaths: ["test"]
		};
		const mockProjLib = {
			getProject: () => {
				return mockTemplate;
			},
			projectIds: ["empty"],
			projectType: "type",
			themes: ["ig"]
		};
		newCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});

		const mockProjectConfig = { skipGit: true } as unknown as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);
		spyOn(Util, "gitInit");

		await newCmd.handler({ name: projectName, framework: "jq", _: ["new"], $0: "new" });

		expect(Util.gitInit).not.toHaveBeenCalled();
	});

	it("Skip package install with command option", async () => {
		const mockTemplate = {
			generateConfig: jasmine.createSpy().and.returnValue({ test: "test" }),
			templatePaths: ["test"]
		};
		const mockProjLib = {
			getProject: () => {
				return mockTemplate;
			},
			projectIds: ["empty"],
			projectType: "type",
			themes: ["ig"]
		};
		newCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});

		spyOn(Util, "gitInit");

		await newCmd.handler({ name: "title", framework: "jq", skipInstall: true, _: ["new"], $0: "new" });

		expect(PackageManager.installPackages).not.toHaveBeenCalled();
	});

	describe("AI agents configuration", () => {
		let configureSpy: jasmine.Spy;

		beforeEach(() => {
			configureSpy = aiConfig.configure as jasmine.Spy;
		});

		function createProjectMocks() {
			const mockTemplate = {
				generateConfig: jasmine.createSpy().and.returnValue({ test: "test" }),
				templatePaths: ["test"]
			};
			const mockProjLib = {
				getProject: () => mockTemplate,
				projectIds: ["empty"],
				projectType: "type",
				themes: ["ig"]
			};
			newCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
				getFrameworkById: {},
				getProjectLibrary: mockProjLib
			});
			spyOn(Util, "gitInit");
		}

		it("calls configure with provided agents", async () => {
			createProjectMocks();

			await newCmd.handler({ name: "Test", framework: "jq", agents: ["claude", "cursor"], _: ["new"], $0: "new" });

			expect(configureSpy).toHaveBeenCalledWith(["claude", "cursor"], true, undefined);
		});

		it("calls configure with undefined when --agents is not provided", async () => {
			createProjectMocks();

			await newCmd.handler({ name: "Test", framework: "jq", _: ["new"], $0: "new" });

			expect(configureSpy).toHaveBeenCalledWith(undefined, true, undefined);
		});

		it("calls configure with single agent", async () => {
			createProjectMocks();

			await newCmd.handler({ name: "Test", framework: "jq", agents: ["generic"], _: ["new"], $0: "new" });

			expect(configureSpy).toHaveBeenCalledWith(["generic"], true, undefined);
		});

		it("calls configure before package install", async () => {
			createProjectMocks();
			const callOrder: string[] = [];
			(PackageManager.installPackages as jasmine.Spy).and.callFake(() => {
				callOrder.push("install");
				return Promise.resolve();
			});
			configureSpy.and.callFake(() => {
				callOrder.push("configure");
				return Promise.resolve();
			});

			await newCmd.handler({ name: "Test", framework: "jq", agents: ["claude"], _: ["new"], $0: "new" });

			expect(callOrder).toEqual(["configure", "install"]);
		});

		it("calls configure from within the project directory", async () => {
			createProjectMocks();
			let cwdDuringConfigure: string | undefined;
			const chdirSpy = process.chdir as jasmine.Spy;
			configureSpy.and.callFake(() => {
				// capture the chdir calls made before configure was invoked
				cwdDuringConfigure = chdirSpy.calls.mostRecent()?.args[0];
				return Promise.resolve();
			});

			await newCmd.handler({ name: "MyProject", framework: "jq", agents: ["claude"], _: ["new"], $0: "new" });

			expect(cwdDuringConfigure).toBe("MyProject");
			// after configure, should chdir back
			const allChdirCalls = chdirSpy.calls.allArgs().map((a: string[]) => a[0]);
			const configureIdx = allChdirCalls.lastIndexOf("MyProject");
			expect(allChdirCalls[configureIdx + 1]).toBe("..");
		});

		it("calls configure even when skipInstall is true", async () => {
			createProjectMocks();

			await newCmd.handler({ name: "Test", framework: "jq", skipInstall: true, agents: ["claude"], _: ["new"], $0: "new" });

			expect(PackageManager.installPackages).not.toHaveBeenCalled();
			expect(configureSpy).toHaveBeenCalledWith(["claude"], true, undefined);
		});

		it("does not call configure when project creation fails (bad name)", async () => {
			spyOn(Util, "error");
			spyOn(ProjectConfig, "getConfig").and.returnValue(null);

			await newCmd.handler({ name: "1invalid", _: ["new"], $0: "new" });

			expect(configureSpy).not.toHaveBeenCalled();
		});
	});
});
