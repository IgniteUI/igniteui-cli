import { GoogleAnalytics, PackageManager, ProjectConfig, Util } from "@igniteui/cli-core";
import * as path from "path";
import { default as newCmd } from "../../packages/cli/lib/commands/new";
import { PromptSession } from "../../packages/cli/lib/PromptSession";
import { resetSpy } from "../helpers/utils";

describe("Unit - New command", () => {
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(Util, "execSync");
		spyOn(process, "chdir");
		spyOn(PackageManager, "installPackages");
	});

	afterEach(() => {
		// clean test folder:
		process.chdir("../../");
	});

	it("New command in existing project", async done => {
		spyOn(Util, "error");
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);

		await newCmd.handler({ _: ["new"], $0: "new" });
		expect(Util.error).toHaveBeenCalledWith("There is already an existing project.", "red");
		done();
	});

	it("Should validate and trim name", async done => {
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

		done();
	});

	it("Logs error for wrong framework", async done => {
		spyOn(Util, "error");
		//spied getFrameworkById won't return anything, i.e. not found
		newCmd.templateManager = jasmine.createSpyObj("TemplateManager", ["getFrameworkById", "getProjectLibrary"]);

		await newCmd.handler({ name: "Test", framework: "jq", _: ["new"], $0: "new" });

		expect(newCmd.templateManager.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(Util.error).toHaveBeenCalledWith("Framework not supported", "red");
		//no further attempts to get project:
		expect(newCmd.templateManager.getProjectLibrary).toHaveBeenCalledTimes(0);
		expect(Util.log).toHaveBeenCalledTimes(0);
		done();
	});

	it("Logs error for wrong project type", async done => {
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
		done();
	});

	it("Logs error for wrong project theme", async done => {
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
		done();
	});

	it("Should start prompt session with missing arg", async done => {
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
		done();
	});

	it("Logs error for unavailable project", async done => {
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
		done();
	});

	it("Generates default without project type", async done => {
		const mockDelimiters = { mockDelimiter: { start: "test", end: "test" }};
		const mockTemplate = {
			delimiters: mockDelimiters,
			generateConfig: { test: "test" },
			templatePaths: ["test"]
		};
		const mockProjLib = {
			getProject: () => {
				return mockTemplate;
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
		const mockConfig = { test: "test" };
		spyOn(mockTemplate, "generateConfig").and.returnValue(mockConfig);
		spyOn(process, "cwd").and.returnValue("Mock dir");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));

		await newCmd.handler({ name: "Test", framework: "jq", theme: "ig", _: ["new"], $0: "new" });

		expect(newCmd.templateManager.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(newCmd.templateManager.getProjectLibrary).toHaveBeenCalledWith("jq");
		expect(Util.log).toHaveBeenCalledWith("Project Name: Test, framework jq, type js, theme ig");
		expect(mockTemplate.generateConfig).toHaveBeenCalledWith("Test", "ig");
		expect(Util.processTemplates)
		.toHaveBeenCalledWith("test", path.join("Mock dir", "Test"), mockConfig, mockDelimiters, false);
		expect(PackageManager.installPackages).toHaveBeenCalled();
		expect(process.chdir).toHaveBeenCalledWith("Test");
		expect(process.chdir).toHaveBeenCalledWith("..");
		expect(Util.log).toHaveBeenCalledWith(jasmine.stringMatching("Project Created"));
		done();
	});

	it("Correctly generates passed project type", async done => {
		const mockDelimiters = { mockDelimiter: { start: "test", end: "test" }};
		const mockTemplate = {
			delimiters: mockDelimiters,
			generateConfig: { test: "test" },
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
		const mockConfig = { test: "test" };
		spyOn(mockTemplate, "generateConfig").and.returnValue(mockConfig);
		spyOn(process, "cwd").and.returnValue("Mock dir");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));

		await newCmd.handler({ name: "Test", framework: "jq", type: "type", theme: "ig", _: ["new"], $0: "new" });

		expect(newCmd.templateManager.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(newCmd.templateManager.getProjectLibrary).toHaveBeenCalledWith("jq", "type");
		expect(mockTemplate.generateConfig).toHaveBeenCalledWith("Test", "ig");
		expect(Util.processTemplates)
		.toHaveBeenCalledWith("test", path.join("Mock dir", "Test"), mockConfig, mockDelimiters, false);
		expect(PackageManager.installPackages).toHaveBeenCalled();
		expect(process.chdir).toHaveBeenCalledWith("Test");
		expect(process.chdir).toHaveBeenCalledWith("..");
		expect(Util.log).toHaveBeenCalledWith("Project Name: Test, framework jq, type type, theme ig");
		expect(Util.log).toHaveBeenCalledWith(jasmine.stringMatching("Project Created"));
		done();
	});

	it("Git initialization", async done => {
		const projectName = "projTitle";

		const mockTemplate = {
			generateConfig: { test: "test" },
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
		spyOn(mockTemplate, "generateConfig");

		await newCmd.handler({ name: projectName, framework: "jq", _: ["new"], $0: "new" });

		expect(Util.execSync).toHaveBeenCalledWith("git init", jasmine.any(Object));
		expect(Util.execSync).toHaveBeenCalledWith("git add .", jasmine.any(Object));
		expect(Util.execSync).toHaveBeenCalledWith("git commit -m " + "\"Initial commit for project: " + projectName + "\"",
			jasmine.any(Object));
		expect(Util.log).toHaveBeenCalledWith(
			jasmine.stringMatching("Git Initialized and Project '" + projectName + "' Committed")
		);
		done();
	});

	it("Skip Git initialization with command option", async done => {
		const projectName = "projTitle";

		const mockTemplate = {
			generateConfig: { test: "test" },
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
		spyOn(mockTemplate, "generateConfig");
		spyOn(Util, "gitInit");

		await newCmd.handler({ "name": projectName, "framework": "jq", "skip-git": true, _: ["new"], $0: "new" });

		expect(Util.gitInit).not.toHaveBeenCalled();
		done();
	});

	it("Skip Git initialization with configuration option", async done => {
		const projectName = "projTitle";

		const mockTemplate = {
			generateConfig: { test: "test" },
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
		spyOn(mockTemplate, "generateConfig");
		spyOn(ProjectConfig, "getConfig").and.returnValue({ skipGit: true });
		spyOn(Util, "gitInit");

		await newCmd.handler({ name: projectName, framework: "jq", _: ["new"], $0: "new" });

		expect(Util.gitInit).not.toHaveBeenCalled();
		done();
	});

	it("Skip package install with command option", async done => {
		const mockTemplate = {
			generateConfig: { test: "test" },
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
		spyOn(mockTemplate, "generateConfig");
		spyOn(Util, "gitInit");

		await newCmd.handler({ name: "title", framework: "jq", skipInstall: true, _: ["new"], $0: "new" });

		expect(PackageManager.installPackages).not.toHaveBeenCalled();
		expect(process.chdir).not.toHaveBeenCalled();
		done();
	});
});
