import * as fs from "fs-extra";
import { parse } from "path";
import { default as newCmd } from "../../lib/commands/new";
import { ProjectConfig } from "../../lib/ProjectConfig";
import { PromptSession } from "../../lib/PromptSession";
import { Util } from "../../lib/Util";
import { resetSpy } from "../helpers/utils";

describe("Unit - New command", () => {

	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(Util, "exec");
		spyOn(process, "chdir");
	});

	afterEach(() => {
		// clean test folder:
		process.chdir("../../");
	});

	it("New command in existing project", async done => {
		spyOn(Util, "error");
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);

		await newCmd.execute({});
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
			await newCmd.execute({name: item.name });
			expect(Util.error).toHaveBeenCalledWith(`Name '${item.inError}' is not valid. `
				+ "Name should start with a letter and can also contain numbers, dashes and spaces.",
				"red");
		}

		done();
	});

	it("Logs error for wrong framework", async done => {
		spyOn(Util, "error");
		//spied getFrameworkById won't return anything, i.e. not found
		newCmd.template = jasmine.createSpyObj("TemplateManager", ["getFrameworkById", "getProjectLibrary"]);

		await newCmd.execute({ name: "Test", framework: "jq"});

		expect(newCmd.template.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(Util.error).toHaveBeenCalledWith("Framework not supported", "red");
		//no further attempts to get project:
		expect(newCmd.template.getProjectLibrary).toHaveBeenCalledTimes(0);
		expect(Util.log).toHaveBeenCalledTimes(0);
		done();
	});

	it("Logs error for wrong project type", async done => {
		spyOn(Util, "error");
		newCmd.template = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			// return nothing, i.e. not found
			getProjectLibrary: undefined
		});

		await newCmd.execute({ name: "Test", framework: "jq", type: "js"});

		expect(newCmd.template.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(newCmd.template.getProjectLibrary).toHaveBeenCalledWith("jq", "js");
		expect(Util.error).toHaveBeenCalledWith(`Project type "js" not found in framework 'jq'`);
		//no further attempts to get project:
		expect(Util.log).toHaveBeenCalledTimes(0);
		done();
	});

	it("Logs error for wrong project theme", async done => {
		spyOn(Util, "error");

		const mockProjLib = {
			getProject: () => { },
			projectType: "type",
			themes: ["ig"]
		};
		newCmd.template = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});
		spyOn(mockProjLib, "getProject");
		await newCmd.execute({ name: "Test", framework: "jq", type: "js", theme: "mega-custom"});

		expect(newCmd.template.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(newCmd.template.getProjectLibrary).toHaveBeenCalledWith("jq", "js");
		expect(Util.error).toHaveBeenCalledWith("Theme not supported");
		//no further attempts to get project:
		expect(Util.log).toHaveBeenCalledTimes(0);
		expect(mockProjLib.getProject).toHaveBeenCalledTimes(0);
		done();
	});

	it("Should start prompt session with missing arg", async done => {
		spyOn(ProjectConfig, "getConfig").and.returnValue(null);

		const mockProjLib = {};
		newCmd.template = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});

		const promptSession =  PromptSession.prototype;
		spyOn(promptSession, "start");
		//spied getFrameworkById won't return anything, i.e. not found

		await newCmd.execute({});
		expect(promptSession.start).toHaveBeenCalled();
		done();
	});

	it("Logs error for unavailable project", async done => {
		spyOn(Util, "error");

		const mockProjLib = {
			getProject: () => { },
			projectType: "type",
			themes: ["ig"]
		};
		newCmd.template = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});
		spyOn(mockProjLib, "getProject");
		await newCmd.execute({ name: "Test", framework: "jq", type: "type"});

		expect(newCmd.template.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(newCmd.template.getProjectLibrary).toHaveBeenCalledWith("jq", "type");
		expect(Util.log).toHaveBeenCalledWith("Project Name: Test, framework jq, type type, theme ig");
		expect(mockProjLib.getProject).toHaveBeenCalled();
		expect(Util.error).toHaveBeenCalledWith("Default project template not found");
		//no other logs:
		expect(Util.log).toHaveBeenCalledTimes(1);
		done();
	});

	it("Generates default without project type", async done => {
		const mockTemplate = {
			generateFiles: async (cwd: string, name: string, theme: string) => {
				return true;
			}
		};
		const mockProjLib = {
			getProject: () => {
				return mockTemplate;
			},
			projectType: "js",
			themes: ["ig"]
		};
		newCmd.template = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});
		//spyOn(newCmd.template, "getFrameworkById").and.returnValue({});
		//spyOn(newCmd.template, "getProjectLibrary").and.returnValue(mockProjLib);
		spyOn(mockTemplate, "generateFiles");

		await newCmd.execute({ name: "Test", framework: "jq", theme: "ig" });

		expect(newCmd.template.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(newCmd.template.getProjectLibrary).toHaveBeenCalledWith("jq");
		expect(Util.log).toHaveBeenCalledWith("Project Name: Test, framework jq, type js, theme ig");
		expect(mockTemplate.generateFiles).toHaveBeenCalledWith(process.cwd(), "Test", "ig");
		expect(Util.log).toHaveBeenCalledWith("Project Created");
		done();
	});

	it("Correctly generates passed project type", async done => {
		const mockTemplate = {
			generateFiles: async (cwd: string, name: string, theme: string) => {
				return true;
			}
		};
		const mockProjLib = {
			getProject: () => {
				return mockTemplate;
			},
			projectType: "type",
			themes: ["ig"]
		};
		newCmd.template = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});
		spyOn(mockTemplate, "generateFiles");

		await newCmd.execute({ name: "Test", framework: "jq", type: "type", theme: "ig" });

		expect(newCmd.template.getFrameworkById).toHaveBeenCalledWith("jq");
		expect(newCmd.template.getProjectLibrary).toHaveBeenCalledWith("jq", "type");
		expect(mockTemplate.generateFiles).toHaveBeenCalledWith(process.cwd(), "Test", "ig");
		expect(Util.log).toHaveBeenCalledWith("Project Name: Test, framework jq, type type, theme ig");
		expect(Util.log).toHaveBeenCalledWith("Project Created");
		done();
	});

	it("Git initialization", async done => {
		const projectName = "projTitle";

		const mockTemplate = {
			generateFiles: async (cwd: string, name: string, theme: string) => {
				return true;
			}
		};
		const mockProjLib = {
			getProject: () => {
				return mockTemplate;
			},
			projectType: "type",
			themes: ["ig"]
		};
		newCmd.template = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});
		spyOn(mockTemplate, "generateFiles");

		await newCmd.execute({ name: projectName, framework: "jq", type: "type", theme: "ig" });

		expect(Util.exec).toHaveBeenCalledWith("git init", jasmine.any(Object));
		expect(Util.exec).toHaveBeenCalledWith("git add .", jasmine.any(Object));
		expect(Util.exec).toHaveBeenCalledWith("git commit -m " + "\"Initial commit for project: " + projectName + "\"",
			jasmine.any(Object));
		expect(Util.log).toHaveBeenCalledWith("Git Initialized and Project '" + projectName + "' Commited");
		done();
	});

	it("Skip Git initialization", async done => {
		const projectName = "projTitle";

		const mockTemplate = {
			generateFiles: async (cwd: string, name: string, theme: string) => {
				return true;
			}
		};
		const mockProjLib = {
			getProject: () => {
				return mockTemplate;
			},
			projectType: "type",
			themes: ["ig"]
		};
		newCmd.template = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});
		spyOn(mockTemplate, "generateFiles");

		await newCmd.execute({ "name": projectName, "framework": "jq", "type": "type", "theme": "ig", "skip-git": true });

		expect(Util.exec).not.toHaveBeenCalled();
		done();
	});
});
