import { App, ControlExtraConfigType, GoogleAnalytics, InquirerWrapper, PackageManager, ProjectConfig, Util } from "@igniteui/cli-core";
import * as path from "path";
import { default as add } from "../../packages/cli/lib/commands/add";
import { default as start } from "../../packages/cli/lib/commands/start";
import { default as upgrade } from "../../packages/cli/lib/commands/upgrade";
import { PromptSession } from "../../packages/cli/lib/PromptSession";
import { TemplateManager } from "../../packages/cli/lib/TemplateManager";
import { Separator } from "@inquirer/prompts";

describe("Unit - PromptSession", () => {
	App.initialize(); // TODO: remove

	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	// TODO: most of the tests use same setup - move the setup to beforeAll call
	it("chooseTerm - Should call itself if no term is passed.", async done => {
		spyOn(PromptSession, "chooseTerm").and.callThrough();
		spyOn(InquirerWrapper, "input").and.returnValues(
			Promise.resolve(""),
			Promise.resolve(""),
			Promise.resolve(""),
			Promise.resolve(""),
			Promise.resolve("Test")
		);
		const testVar = await PromptSession.chooseTerm();
		expect(PromptSession.chooseTerm).toHaveBeenCalled();
		expect(PromptSession.chooseTerm).toHaveBeenCalledTimes(5);
		expect(testVar).toBe("Test");
		expect(InquirerWrapper.input).toHaveBeenCalledTimes(5);
		done();
	});
	it("start - Should create new project correctly", async done => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({});
		const mockProject = {
			name: "Project 1",
			generateConfig: () => Promise.resolve(true),
			templatePaths: ["test"]
		};
		const mockProjectLibrary = {
			themes: ["infragistics", "infragistics.less"],
			projectIds: ["empty"],
			projects: [mockProject]
		};
		const projectLibraries = ["jQuery", "Angular", "React"];
		const mockFramework1 = {
			id: 1,
			name: "Custom Framework 1",
			projectLibraries
		};
		const mockFramework2 = {
			id: 2,
			name: "Custom Framework 2",
			projectLibraries
		};
		const mockFrameworks = [mockFramework1, mockFramework2];
		const mockTemplate = jasmine.createSpyObj("mockTemplate", {
			getProjectLibrary: mockProjectLibrary,
			frameworks: mockFrameworks,
			getFrameworkByName: mockFramework1,
			getFrameworkNames: mockFrameworks.map(f => f.name),
			getProjectLibraryNames: projectLibraries,
			getProjectLibraryByName: mockProjectLibrary
		});
		mockTemplate.templatePaths = ["test"];
		const mockSession = new PromptSession(mockTemplate);
		const mockQuestion = {
			type: "list",
			name: "theme",
			message: "Choose the theme for the project:",
			choices: ["infragistics", new Separator(), "infragistics.less"],
			default: "infragistics"
		};
		spyOn(Util, "greenCheck").and.callThrough();
		spyOn(Util, "log");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		spyOn(Util, "getAvailableName").and.returnValue(false);
		spyOn(Util, "gitInit");
		spyOn(InquirerWrapper, "input").and.returnValue(Promise.resolve("Test Project"));
		spyOn(InquirerWrapper, "select").and.returnValues(
			Promise.resolve("Custom Framework 1"),
			Promise.resolve("jQuery"),
			Promise.resolve("infragistics")
		);
		spyOn(process, "chdir");
		spyOn(mockSession, "chooseActionLoop");
		await mockSession.start();
		expect(Util.log).toHaveBeenCalledTimes(4);
		expect(Util.log).toHaveBeenCalledWith("  Proj Template: Project 1");
		expect(Util.log).toHaveBeenCalledWith("  Generating project structure.");
		expect(Util.log).toHaveBeenCalledWith("");
		expect(Util.log).toHaveBeenCalledWith(Util.greenCheck() + " Project structure generated.");
		expect(InquirerWrapper.input).toHaveBeenCalledWith(
			jasmine.objectContaining({
				type: "input",
				message: "Enter a name for your project:",
				validate: jasmine.any(Function)
			}));
		expect(Util.getAvailableName).toHaveBeenCalledTimes(1);
		expect(Util.getAvailableName).toHaveBeenCalledWith("IG Project", true);
		expect(Util.greenCheck).toHaveBeenCalledTimes(1 + 1);
		expect(Util.gitInit).toHaveBeenCalled();
		expect(InquirerWrapper.input).toHaveBeenCalledTimes(1);
		expect(InquirerWrapper.select).toHaveBeenCalledTimes(3);
		expect(InquirerWrapper.select).toHaveBeenCalledWith(mockQuestion);
		expect(mockTemplate.getFrameworkByName).toHaveBeenCalledTimes(1);
		done();
	});
	it("start - Should go into chooseActionLoop if project has local config", async done => {
		const mockTemplate = jasmine.createSpyObj("mockTemplate", {
			getProjectLibrary: {}
		});
		const mockSession = new PromptSession(mockTemplate);
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			project: {
				isShowcase: false,
				theme: ""
			}
		});
		spyOn(mockSession, "chooseActionLoop");
		await mockSession.start();
		expect(ProjectConfig.hasLocalConfig).toHaveBeenCalledTimes(1);
		expect(mockTemplate.getProjectLibrary).toHaveBeenCalledTimes(1);
		expect(mockSession.chooseActionLoop).toHaveBeenCalledTimes(1);
		expect(mockSession.chooseActionLoop).toHaveBeenCalledWith({});
		done();
	});
	it("start - Should skip framework/projType input w/ restricted config", async done => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			stepByStep: {
				frameworks: ["angular"],
				angular: {
					projTypes: ["igx-ts"]
				}
			}
		} /* as Config */);
		const mockConfig = { test: "test" };
		const mockProject = jasmine.createSpyObj({ generateConfig: mockConfig });
		mockProject.name = "Project";
		mockProject.templatePaths = ["test"];
		const mockDelimiters = { mockDelimiter: { start: "test", end: "test" } };
		mockProject.delimiters = mockDelimiters;
		const mockProjectLibrary = {
			themes: ["infragistics"],
			projectIds: ["empty"],
			projects: [mockProject]
		};
		const projectLibraries = [
			{ projectType: "ig-ts", name: "Ignite UI Angular Wrappers" },
			{ projectType: "igx-ts", name: "Ignite UI for Angular" }
		];
		const mockFramework1 = {
			id: "angular",
			name: "Custom Framework 1",
			projectLibraries
		};
		const mockTemplate = jasmine.createSpyObj("mockTemplate", {
			getFrameworkByName: mockFramework1,
			getFrameworkById: mockFramework1,
			getFrameworkNames: null,
			getProjectLibraryNames: null,
			getProjectLibraryByName: mockProjectLibrary
		});
		mockTemplate.templatePaths = ["test"];
		const mockSession = new PromptSession(mockTemplate);
		spyOn(Util, "greenCheck").and.returnValue("");
		spyOn(Util, "log");
		spyOn(Util, "directoryExists").and.returnValue(false);
		spyOn(Util, "isAlphanumericExt").and.returnValue(true);
		spyOn(Util, "gitInit");
		spyOn(InquirerWrapper, "input").and.returnValues(
			Promise.resolve("Test Project")
		);
		spyOn(process, "chdir");
		spyOn(mockSession, "chooseActionLoop");
		spyOn(process, "cwd").and.returnValue("Mock");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		await mockSession.start();

		// prompt only for project name:
		expect(InquirerWrapper.input).toHaveBeenCalledTimes(1);
		expect(InquirerWrapper.input).toHaveBeenCalledWith(
			jasmine.objectContaining({ type: "input", name: "projectName" })
		);
		expect(mockTemplate.getFrameworkNames).toHaveBeenCalledTimes(0);
		expect(mockTemplate.getProjectLibraryNames).toHaveBeenCalledTimes(0);

		expect(mockTemplate.getFrameworkByName).toHaveBeenCalledTimes(1);
		expect(mockTemplate.getFrameworkByName).toHaveBeenCalledWith("Custom Framework 1");
		expect(mockTemplate.getFrameworkById).toHaveBeenCalledTimes(1);
		expect(mockTemplate.getFrameworkById).toHaveBeenCalledWith("angular");
		expect(mockTemplate.getProjectLibraryByName).toHaveBeenCalledTimes(1);
		expect(mockTemplate.getProjectLibraryByName).toHaveBeenCalledWith(mockFramework1, "Ignite UI for Angular");

		expect(Util.log).toHaveBeenCalledWith("  Framework: Custom Framework 1");
		expect(Util.log).toHaveBeenCalledWith("  Project type: Ignite UI for Angular");
		expect(mockProject.generateConfig).toHaveBeenCalledWith("Test Project", mockProjectLibrary.themes[0]);
		expect(Util.processTemplates)
			.toHaveBeenCalledWith("test", path.join("Mock", "Test Project"), mockConfig, mockDelimiters, false);
		expect(Util.log).toHaveBeenCalledWith(" Project structure generated.");
		expect(Util.gitInit).toHaveBeenCalled();
		expect(mockSession.chooseActionLoop).toHaveBeenCalled();
		done();
	});
	it("start - New project - missing IFs", async done => {
		const mockProject = {
			name: "Project 1",
			generateConfig: () => ({ test: "test" }),
			templatePaths: ["test"]
		};
		const mockProjectLibrary = {
			projectIds: ["empty"],
			themes: ["infragistics", "infragistics.less"],
			projects: [mockProject]
		};
		const projectLibraries = ["jQuery", "Angular", "React"];
		const mockFramework1 = {
			id: 1,
			name: "Custom Framework 1",
			projectLibraries
		};
		const mockFramework2 = {
			id: 2,
			name: "Custom Framework 2",
			projectLibraries
		};
		const mockFrameworks = [mockFramework1, mockFramework2];
		const mockTemplate = jasmine.createSpyObj("mockTemplate", {
			getProjectLibrary: mockProjectLibrary,
			frameworks: mockFrameworks,
			getFrameworkByName: mockFramework1,
			getFrameworkNames: mockFrameworks.map(f => f.name),
			getProjectLibraryNames: projectLibraries,
			getProjectLibraryByName: mockProjectLibrary
		});
		mockTemplate.templatePaths = ["test"];
		const mockSession = new PromptSession(mockTemplate);
		const mockQuestion = {
			type: "list",
			name: "theme",
			message: "Choose the theme for the project:",
			choices: ["infragistics", new Separator(), "infragistics.less"],
			default: "infragistics"
		};
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			skipGit: true,
			project: {
				isShowcase: true
			}
		});
		spyOn(Util, "greenCheck").and.callThrough();
		spyOn(Util, "log");
		spyOn(Util, "directoryExists").and.returnValues([true, true, false]);
		spyOn(Util, "isAlphanumericExt").and.callThrough();
		spyOn(Util, "gitInit");
		spyOn(Util, "error");
		spyOn(InquirerWrapper, "input").and.returnValue(Promise.resolve("Dummy name"));
		spyOn(InquirerWrapper, "select").and.returnValues(
			Promise.resolve("Custom Framework 1"),
			Promise.resolve("jQuery"),
			Promise.resolve("infragistics")
		);
		spyOn(process, "chdir");
		spyOn(mockSession, "chooseActionLoop");
		await mockSession.start();

		expect(InquirerWrapper.input).toHaveBeenCalledTimes(1);
		expect(InquirerWrapper.select).toHaveBeenCalledTimes(3);
		expect(Util.log).toHaveBeenCalledTimes(4);
		expect(Util.log).toHaveBeenCalledWith("  Proj Template: Project 1");
		expect(Util.log).toHaveBeenCalledWith("");
		expect(Util.log).toHaveBeenCalledWith("  Generating project structure.");
		expect(Util.log).toHaveBeenCalledWith(Util.greenCheck() + " Project structure generated.");

		expect(Util.greenCheck).toHaveBeenCalledTimes(1 + 1);
		expect(Util.gitInit).toHaveBeenCalledTimes(0);
		expect(InquirerWrapper.select).toHaveBeenCalledWith(mockQuestion);
		expect(mockTemplate.getFrameworkByName).toHaveBeenCalledTimes(1);

		// validate:
		const firstCallArgs = (InquirerWrapper.input as jasmine.Spy).calls.first().args[0];
		expect(firstCallArgs.validate).toEqual(jasmine.any(Function));
		expect(firstCallArgs.validate("*This will ** not Work *")).toBe(false);
		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(firstCallArgs.validate("Th15 w1ll")).toBe(true);
		expect(Util.isAlphanumericExt).toHaveBeenCalledTimes(2);
		expect(Util.isAlphanumericExt).toHaveBeenCalledWith("*This will ** not Work *");
		expect(Util.isAlphanumericExt).toHaveBeenCalledWith("Th15 w1ll");
		expect(Util.directoryExists).toHaveBeenCalledTimes(3);
		expect(Util.directoryExists).toHaveBeenCalledWith("Th15 w1ll");
		done();
	});
	it("chooseActionLoop - should run through properly - Add Component", async done => {
		const mockExtraConfigurations = [{
			choices: [],
			default: "Choice 1",
			message: "Please enter a value",
			key: "customValue1",
			type: ControlExtraConfigType.Value
		}, {
			choices: [],
			default: "Choice 1",
			message: "Please enter a value",
			key: "customValue2",
			type: ControlExtraConfigType.Value
		}];
		const mockSelectedTemplate = {
			name: "Template 1",
			hasExtraConfiguration: () => true,
			getExtraConfiguration: () => mockExtraConfigurations,
			setExtraConfiguration: () => { }
		};
		const mockComponentTemplates = [mockSelectedTemplate, { name: "Template 2" }];
		const mockComponent = {
			name: "Custom Group 1 Component 2",
			templates: mockComponentTemplates,
			description: "mockComponent description"
		};
		const mockProject = {
			generateConfig: () => Promise.resolve(true)
		};
		const mockProjectLibrary = jasmine.createSpyObj("mockProjectLibrary", {
			name: "mockProjectLibrary",
			themes: ["infragistics", "infragistics.less"],
			getCustomTemplateNames: ["Custom Template 1"],
			getComponentGroupNames: ["Custom Group 1", "Custom Group 2"],
			getComponentsByGroup: [{ group: "Custom Group 1", name: "Component 1" },
			{ group: "Custom Group 1", name: "Component 2" }],
			getComponentGroups: [
				{ description: "Custom Group 1", name: "Group 1" }, { description: "Custom Group 2", name: "Group 2" }],
			getComponentByName: mockComponent,
			getProject: () => {
				return mockProject;
			}
		});
		mockProjectLibrary.components = ["igGrid", "igCombo"];
		const projectLibraries = ["jQuery", "Angular", "React"];
		const mockFramework1 = {
			id: 1,
			name: "Custom Framework 1",
			projectLibraries,
			components: []
		};
		const mockFramework2 = {
			id: 2,
			name: "Custom Framework 2",
			projectLibraries,
			components: []
		};
		const mockFrameworks = [mockFramework1, mockFramework2];
		const mockTemplate = jasmine.createSpyObj("mockTemplate", {
			getProjectLibrary: mockProjectLibrary,
			frameworks: mockFrameworks,
			getFrameworkByName: mockFramework1,
			getFrameworkNames: mockFrameworks.map(f => f.name),
			getProjectLibraryNames: projectLibraries,
			getProjectLibraryByName: mockProjectLibrary
		});
		const mockSession = new PromptSession(mockTemplate);
		spyOn(ProjectConfig, "localConfig").and.returnValue({
			project: {
				defaultPort: 4200
			}
		});
		spyOn(mockSession, "chooseActionLoop").and.callThrough();
		spyOn(Util, "log");
		spyOn(add, "addTemplate").and.returnValue(true);
		spyOn(PackageManager, "flushQueue").and.returnValue(Promise.resolve(true));
		spyOn(start, "start").and.returnValue(Promise.resolve(true));

		spyOn(InquirerWrapper, "select").and.returnValues(
			Promise.resolve("Add component"), 				// attempt to add a component
			Promise.resolve("Back"), 						// return to the previous menu
			Promise.resolve("Add component"), 				// attempt to add a component
			Promise.resolve("Custom Group 1"),				// select a component group
			Promise.resolve("Back"),						// return to the previous menu
			Promise.resolve("Custom Group 1"),				// select a component group
			Promise.resolve("Custom Group 1 Component 2"),	// select a component
			Promise.resolve("Template 1"),					// select a template
			Promise.resolve("Complete & Run")				// finalize the app
		);

		spyOn(InquirerWrapper, "input").and.returnValues(
			Promise.resolve("Template 1 Custom Name"),		// enter a custom name for the template, invoked immediately after a template has been selected
			Promise.resolve(7777)							// choose a port to run the app on
		);

		spyOn(ProjectConfig, "setConfig");
		await mockSession.chooseActionLoop(mockProjectLibrary);
		expect(mockSession.chooseActionLoop).toHaveBeenCalledTimes(1);
		expect(InquirerWrapper.select).toHaveBeenCalledTimes(9);
		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(PackageManager.flushQueue).toHaveBeenCalledWith(true);
		expect(start.start).toHaveBeenCalledTimes(1);
		expect(add.addTemplate).toHaveBeenCalledTimes(1);
		expect(InquirerWrapper.input).toHaveBeenCalledWith({
			type: "input",
			default: "Choice 1",
			message: "Please enter a value",
			name: "customValue1",
			choices: []
		});
		expect(InquirerWrapper.input).toHaveBeenCalledWith({
			type: "input",
			default: "Choice 1",
			message: "Please enter a value",
			name: "customValue2",
			choices: []
		});
		done();
	});
	it("chooseActionLoop - should run through properly - Add scenario", async done => {
		const mockSelectedTemplate = {
			name: "Custom Template 1",
			templates: [{
				description: "description for Template 1"
			}]
		};
		const mockProject = {
			generateConfig: () => Promise.resolve(true)
		};
		const mockProjectLibrary = jasmine.createSpyObj("mockProjectLibrary", {
			name: "mockProjectLibrary",
			getCustomTemplateNames: [mockSelectedTemplate.name, "Custom Template 2"],
			getTemplateByName: [mockSelectedTemplate],
			getCustomTemplates: [mockSelectedTemplate, { name: "Not selected" }],
			getProject: () => {
				return mockProject;
			}
		});
		mockProjectLibrary.components = ["igGrid", "igCombo"];
		const mockTemplate = jasmine.createSpyObj("mockTemplate", {
			getProjectLibrary: mockProjectLibrary,
			getProjectLibraryByName: mockProjectLibrary
		});
		const mockSession = new PromptSession(mockTemplate);
		spyOn(ProjectConfig, "localConfig").and.returnValue({
			project: {
				defaultPort: 4200,
				framework: "angular",
				projectType: "igx-ts"
			}
		});
		spyOn(mockSession, "chooseActionLoop").and.callThrough();
		spyOn(Util, "log");
		spyOn(add, "addTemplate").and.returnValue(true);
		spyOn(PackageManager, "flushQueue").and.returnValue(Promise.resolve(true));
		spyOn(start, "start").and.returnValue(Promise.resolve(true));
		spyOn(Util, "getAvailableName").and.callThrough();
		spyOn(InquirerWrapper, "select").and.returnValues(
			Promise.resolve("Add scenario"),			// attempt to add a scenario
			Promise.resolve("Back"),					// return to the previous menu
			Promise.resolve("Add scenario"),			// attempt to add a scenario
			Promise.resolve("Custom Template 1"),		// select a template
			Promise.resolve("Complete & Run"),			// finalize the app
			Promise.resolve("no")						// do not use paid angular
		);

		spyOn(InquirerWrapper, "input").and.returnValues(
			Promise.resolve("Custom Template Name"),	// enter a custom name for the template, invoked immediately after a template has been selected
			Promise.resolve(7777)						// choose a port to run the app on
		);

		spyOn(ProjectConfig, "setConfig");
		await mockSession.chooseActionLoop(mockProjectLibrary);
		expect(mockSession.chooseActionLoop).toHaveBeenCalledTimes(1);
		expect(InquirerWrapper.select).toHaveBeenCalledTimes(6);
		expect(InquirerWrapper.input).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledTimes(5);
		expect(PackageManager.flushQueue).toHaveBeenCalledWith(true);
		expect(start.start).toHaveBeenCalledTimes(1);
		expect(Util.getAvailableName).toHaveBeenCalledTimes(1);
		expect(add.addTemplate).toHaveBeenCalledTimes(1);
		expect(add.addTemplate).toHaveBeenCalledWith("Custom Template Name", mockSelectedTemplate);
		done();
	});
	it("chooseActionLoop - should run through properly - Add Component", async done => {
		// tslint:disable:object-literal-sort-keys
		const mockExtraConfigurations = [{
			choices: ["Choice 1", "Choice 2", "Choice 3"],
			default: "Choice 1",
			message: "Please select a value",
			key: "customValue1",
			type: ControlExtraConfigType.Choice
		}, {
			choices: ["Choice 1", "Choice 2", "Choice 3"],
			default: "Choice 1",
			message: "Please select a value",
			key: "customValue2",
			type: ControlExtraConfigType.MultiChoice
		}];
		const mockSelectedTemplate = {
			name: "Template 1",
			hasExtraConfiguration: () => true,
			getExtraConfiguration: () => mockExtraConfigurations,
			setExtraConfiguration: () => { },
			description: "description for Template 1"
		};
		const mockComponentTemplates = [mockSelectedTemplate,
			{ name: "Template 2" }];
		const mockComponent = {
			name: "Custom Group 1 Component 2",
			templates: mockComponentTemplates
		};
		const mockProject = {
			generateConfig: () => Promise.resolve(true)
		};
		const mockProjectLibrary = jasmine.createSpyObj("mockProjectLibrary", {
			name: "mockProjectLibrary",
			themes: ["infragistics", "infragistics.less"],
			getCustomTemplateNames: ["Custom Template 1"],
			getComponentGroups: [
				{ description: "Custom Group 1", name: "Group 1" }, { description: "Custom Group 2", name: "Group 2" }],
			getComponentGroupNames: ["Custom Group 1", "Custom Group 2"],
			getComponentsByGroup:
				[{
					group: "Custom Group 1", name: "Component 1", description: "description for Component 1",
					// tslint:disable-next-line:align
					templates: [{ description: "description for Template 1" }]
				},
				{
					group: "Custom Group 1", name: "Component 2", description: "description for Component 2",
					templates: [{ description: "description for Template 2" }]
				}],
			getComponentByName: mockComponent,
			getProject: () => {
				return mockProject;
			}
		});
		mockProjectLibrary.components = ["igGrid", "igCombo"];
		const projectLibraries = ["jQuery", "Angular", "React"];
		const mockFramework1 = {
			id: 1,
			name: "Custom Framework 1",
			projectLibraries,
			components: []
		};
		const mockFramework2 = {
			id: 2,
			name: "Custom Framework 2",
			projectLibraries,
			components: []
		};
		const mockFrameworks = [mockFramework1, mockFramework2];
		const mockTemplate = jasmine.createSpyObj("mockTemplate", {
			getProjectLibrary: mockProjectLibrary,
			frameworks: mockFrameworks,
			getFrameworkByName: mockFramework1,
			getFrameworkNames: mockFrameworks.map(f => f.name),
			getProjectLibraryNames: projectLibraries,
			getProjectLibraryByName: mockProjectLibrary
		});
		const mockSession = new PromptSession(mockTemplate);
		spyOn(ProjectConfig, "localConfig").and.returnValue({
			project: {
				defaultPort: 4200
			}
		});
		spyOn(mockSession, "chooseActionLoop").and.callThrough();
		spyOn(Util, "log");
		spyOn(add, "addTemplate").and.returnValue(true);
		spyOn(PackageManager, "flushQueue").and.returnValue(Promise.resolve(true));
		//spyOn(start, "start").and.returnValue(Promise.resolve({port: 3333 }));
		spyOn(start, "start").and.returnValue(Promise.resolve(true));

		spyOn(InquirerWrapper, "select").and.returnValues(
			Promise.resolve("Add component"), 				// attempt to add a component
			Promise.resolve("Back"), 						// return to the previous menu
			Promise.resolve("Add component"), 				// attempt to add a component
			Promise.resolve("Custom Group 1"),				// select a component group
			Promise.resolve("Back"),						// return to the previous menu
			Promise.resolve("Custom Group 1"),				// select a component group
			Promise.resolve("Custom Group 1 Component 2"),	// select a component
			Promise.resolve("Template 1"),					// select a template
			Promise.resolve("Choice 1"),					// setup extra configuration for the template
			Promise.resolve("Complete & Run")				// finalize the app
		);

		spyOn(InquirerWrapper, "checkbox").and.returnValues(
			Promise.resolve("Choice 1")
		);

		spyOn(InquirerWrapper, "input").and.returnValues(
			Promise.resolve("Template 1 Custom Name"),		// enter a custom name for the template, invoked immediately after a template has been selected
			Promise.resolve(7777)							// choose a port to run the app on
		);

		spyOn(ProjectConfig, "setConfig");
		await mockSession.chooseActionLoop(mockProjectLibrary);
		expect(mockSession.chooseActionLoop).toHaveBeenCalledTimes(1);
		expect(InquirerWrapper.select).toHaveBeenCalledTimes(10);
		expect(InquirerWrapper.input).toHaveBeenCalledTimes(2);
		expect(InquirerWrapper.checkbox).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(PackageManager.flushQueue).toHaveBeenCalledWith(true);
		expect(start.start).toHaveBeenCalledTimes(1);
		expect(add.addTemplate).toHaveBeenCalledTimes(1);
		expect(InquirerWrapper.checkbox).toHaveBeenCalledWith({
			type: "checkbox",
			default: "Choice 1",
			message: "Please select a value",
			name: "customValue2",
			choices: ["Choice 1", "Choice 2", "Choice 3"]
		});
		done();
	});
	it("chooseActionLoop - Complete and Run should update default port", async done => {
		const mockProject = {
			generateConfig: () => Promise.resolve(true)
		};
		const mockProjectLibrary = jasmine.createSpyObj("mockProjectLibrary", {
			name: "mockProjectLibrary",
			getCustomTemplateNames: [],
			getTemplateByName: [],
			getCustomTemplates: [],
			getProject: () => {
				return mockProject;
			}
		});
		mockProjectLibrary.components = ["igGrid", "igCombo"];
		const mockTemplate = jasmine.createSpyObj("mockTemplate", {
			getProjectLibrary: mockProjectLibrary,
			getProjectLibraryByName: mockProjectLibrary
		});
		const params = {
			project: {
				defaultPort: 4200,
				framework: "angular",
				projectType: "igx-ts"
			},
			packagesInstalled: true
		};
		spyOn(ProjectConfig, "localConfig").and.returnValue(params);
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		const mockSession = new PromptSession(mockTemplate);
		spyOn(mockSession, "chooseActionLoop").and.callThrough();
		spyOn(InquirerWrapper, "select").and.returnValues(
			Promise.resolve("Complete & Run"),
		);
		spyOn(InquirerWrapper, "input").and.returnValues(
			Promise.resolve(7777)
		);
		params.project.defaultPort = 7777;
		spyOn(start, "start");
		spyOn(ProjectConfig, "setConfig");

		await mockSession.chooseActionLoop(mockProjectLibrary);
		expect(start.start).toHaveBeenCalledWith({ port: 7777 });
		expect(ProjectConfig.setConfig).toHaveBeenCalledWith(params);

		// validate:
		spyOn(Util, "log");
		spyOn(Util, "error");
		const lastCallArgs = (InquirerWrapper.input as jasmine.Spy).calls.mostRecent().args[0];
		expect(lastCallArgs.validate).toEqual(jasmine.any(Function));

		expect(lastCallArgs.validate("not a number")).toBe(false);
		expect(lastCallArgs.validate("1a")).toBe(false);
		expect(Util.error).toHaveBeenCalledWith(
			"port should be a number. Input valid port or use the suggested default port",
			"red");
		expect(lastCallArgs.validate("3210")).toBe(true);
		expect(Util.error).toHaveBeenCalledTimes(2);
		done();
	});
	it("chooseActionLoop - should call `upgradePackages` when update angular is true", async done => {
		const params = {
			project: {
				defaultPort: 4200,
				framework: "angular",
				projectType: "igx-ts"
			},
			packagesInstalled: false
		};
		spyOn(ProjectConfig, "localConfig").and.returnValue(params);
		spyOn(ProjectConfig, "setConfig");

		const mockSession = new PromptSession({} as any);
		spyOn(mockSession as any, "generateActionChoices").and.returnValues([]);
		spyOn(mockSession as any, "getUserInput").and.returnValues(
			Promise.resolve("Complete & Run"),
			Promise.resolve("yes"),
			Promise.resolve(4200)
			);
		spyOn(mockSession as any, "completeAndRun").and.returnValues(Promise.resolve());
		spyOn(upgrade, "upgrade").and.returnValue(Promise.resolve());

		await mockSession.chooseActionLoop({} as any);

		expect(upgrade.upgrade).toHaveBeenCalledTimes(1);
		expect(upgrade.upgrade).toHaveBeenCalledWith({ skipInstall: true, _: ["upgrade"], $0: "upgrade" });

		done();
	});
	it("start - Should fire correctly with Angular Custom theme selected", async done => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({ customTemplates: [] });
		const mockSession = new PromptSession(new TemplateManager());
		spyOn(Util, "isAlphanumericExt").and.callThrough();
		spyOn(Util, "gitInit");
		spyOn(Util, "log");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		spyOn(InquirerWrapper, "input").and.returnValues(Promise.resolve("Test1"));
		spyOn(InquirerWrapper, "select").and.returnValues(
			Promise.resolve("Angular"),
			Promise.resolve("Ignite UI for Angular"),
			Promise.resolve("Default side navigation"),
			Promise.resolve("Custom")
		);
		spyOn(mockSession, "chooseActionLoop").and.returnValue(Promise.resolve());
		spyOn(process, "chdir");
		await mockSession.start();
		const CUSTOM_THEME = `
		/* See: https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes/sass/index */
		@use "igniteui-angular/theming" as *;
		$primary: #09f !default;
		$secondary: #4db8ff !default;
		$surface: #fff !default;
		$app-palette: palette($primary, $secondary, $surface);
		/* autoprefixer grid: on */
		@include core();
		@include typography($font-family: $material-typeface, $type-scale: $material-type-scale);
		@include theme($app-palette);`;
		const actualCall = (Util.processTemplates as jasmine.Spy).calls.argsFor(0)[2]["CustomTheme"].replace(/\s/g, "");
		const expectedCall = CUSTOM_THEME.replace(/\s/g, "");
		expect(actualCall).toEqual(expectedCall);
		done();
	});
	it("start - Should fire correctly with Angular Default theme selected", async done => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({ customTemplates: [] });
		const mockSession = new PromptSession(new TemplateManager());
		spyOn(Util, "isAlphanumericExt").and.callThrough();
		spyOn(Util, "gitInit");
		spyOn(Util, "log");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		spyOn(InquirerWrapper, "input").and.returnValues(Promise.resolve("Test1"));
		spyOn(InquirerWrapper, "select").and.returnValues(
			Promise.resolve("Angular"),
			Promise.resolve("Ignite UI for Angular"),
			Promise.resolve("Default side navigation"),
			Promise.resolve("Default"));
		spyOn(mockSession, "chooseActionLoop").and.returnValue(Promise.resolve());
		spyOn(process, "chdir");
		await mockSession.start();
		const DEFAULT_THEME = `,"node_modules/igniteui-angular/styles/igniteui-angular.css"`;
		const actualCall = (Util.processTemplates as jasmine.Spy).calls.argsFor(0)[2]["DefaultTheme"].replace(/\s/g, "");
		const expectedCall = DEFAULT_THEME.replace(/\s/g, "");
		expect(actualCall).toEqual(expectedCall);
		done();
	});
});
