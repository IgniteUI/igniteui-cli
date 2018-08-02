import chalk from "chalk";
import * as inquirer from "inquirer";
import * as path from "path";
import { default as add } from "../../lib/commands/add";
import { default as start } from "../../lib/commands/start";
import { GoogleAnalytics } from "../../lib/GoogleAnalytics";
import { PackageManager } from "../../lib/packages/PackageManager";
import { ProjectConfig } from "../../lib/ProjectConfig";
import { PromptSession } from "../../lib/PromptSession";
import { TemplateManager } from "../../lib/TemplateManager";
import { Util } from "../../lib/Util";

describe("Unit - PromptSession", () => {
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	it("chooseTerm - Should call itself if no term is passed.", async done => {
		spyOn(PromptSession, "chooseTerm").and.callThrough();
		spyOn(inquirer, "prompt").and.returnValues(Promise.resolve({ term: "" }),
			Promise.resolve({ term: "" }), Promise.resolve({ term: "" }),
			Promise.resolve({ term: "" }), Promise.resolve({ term: "Test" }));
		const testVar = await PromptSession.chooseTerm();
		expect(PromptSession.chooseTerm).toHaveBeenCalled();
		expect(PromptSession.chooseTerm).toHaveBeenCalledTimes(5);
		expect(testVar).toBe("Test");
		expect(inquirer.prompt).toHaveBeenCalledTimes(5);
		done();
	});
	it("start - Should fire correctly when local project is missing", async done => {
		// tslint:disable:object-literal-sort-keys
		const mockProject = {
			generateFiles: () => Promise.resolve(true)
		};
		const mockProjectLibrary = {
			themes: ["infragistics", "infragistics.less"],
			getProject: () => {
				return mockProject;
			}
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
		// tslint:disable:no-console
		const mockFrameworks = [mockFramework1, mockFramework2];
		const mockTemplate = jasmine.createSpyObj("mockTemplate", {
			getProjectLibrary: mockProjectLibrary,
			frameworks: mockFrameworks,
			getFrameworkByName: mockFramework1,
			getFrameworkNames: () => this.frameworks.map(f => f.name),
			getProjectLibraryNames: () => projectLibraries,
			getProjectLibraryByName: mockProjectLibrary
		});
		const mockSession = new PromptSession(mockTemplate);
		const mockQuestion: inquirer.Question = {
			type: "list",
			name: "theme",
			message: "Choose the theme for the project:",
			choices: ["infragistics", new inquirer.Separator(), "infragistics.less"],
			default: "infragistics"
		};
		spyOn(Util, "greenCheck").and.callThrough();
		spyOn(Util, "log");
		spyOn(Util, "directoryExists").and.returnValue(false);
		spyOn(Util, "isAlphanumericExt").and.returnValue(true);
		spyOn(Util, "gitInit");
		spyOn(inquirer, "prompt").and.returnValues(Promise.resolve({ projectName: "Test Project" }),
			Promise.resolve({ framework: "Custom Framework 1" }),
			Promise.resolve({ project: "jQuery" }),
			Promise.resolve({ theme: "infragistics" }));
		spyOn(process, "chdir");
		spyOn(mockSession, "chooseActionLoop");
		await mockSession.start();
		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(Util.log).toHaveBeenCalledWith("  Generating project structure.");
		expect(Util.log).toHaveBeenCalledWith("");
		expect(Util.log).toHaveBeenCalledWith(Util.greenCheck() + " Project structure generated.");
		expect(Util.isAlphanumericExt).toHaveBeenCalledTimes(1);
		expect(Util.isAlphanumericExt).toHaveBeenCalledWith("Test Project");
		expect(Util.directoryExists).toHaveBeenCalledTimes(1);
		expect(Util.directoryExists).toHaveBeenCalledWith("Test Project");
		expect(Util.greenCheck).toHaveBeenCalledTimes(1 + 1);
		expect(Util.gitInit).toHaveBeenCalled();
		expect(inquirer.prompt).toHaveBeenCalledTimes(4);
		expect(inquirer.prompt).toHaveBeenCalledWith(mockQuestion);
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
		expect(mockSession.chooseActionLoop).toHaveBeenCalledWith({}, "");
		done();
	});
	it("start - New project - missing IFs", async done => {
		// tslint:disable:object-literal-sort-keys
		const mockProject = {
			generateFiles: () => Promise.resolve(true)
		};
		const mockProjectLibrary = {
			themes: ["infragistics", "infragistics.less"],
			getProject: () => {
				return mockProject;
			}
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
		// tslint:disable:no-console
		const mockFrameworks = [mockFramework1, mockFramework2];
		const mockTemplate = jasmine.createSpyObj("mockTemplate", {
			getProjectLibrary: mockProjectLibrary,
			frameworks: mockFrameworks,
			getFrameworkByName: mockFramework1,
			getFrameworkNames: () => this.frameworks.map(f => f.name),
			getProjectLibraryNames: () => projectLibraries,
			getProjectLibraryByName: mockProjectLibrary
		});
		const mockSession = new PromptSession(mockTemplate);
		const mockQuestion: inquirer.Question = {
			type: "list",
			name: "theme",
			message: "Choose the theme for the project:",
			choices: ["infragistics", new inquirer.Separator(), "infragistics.less"],
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
		spyOn(inquirer, "prompt").and.returnValues(Promise.resolve({ projectName: "*This will ** not Work *" }),
			Promise.resolve({ projectName: "Th15 w1ll" }),
			Promise.resolve({ projectName: "Th15 w1ll" }),
			Promise.resolve({ framework: "Custom Framework 1" }),
			Promise.resolve({ project: "jQuery" }),
			Promise.resolve({ theme: "infragistics" }));
		spyOn(process, "chdir");
		spyOn(mockSession, "chooseActionLoop");
		await mockSession.start();
		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(Util.log).toHaveBeenCalledWith("  Generating project structure.");
		expect(Util.log).toHaveBeenCalledWith("");
		expect(Util.error).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledWith(Util.greenCheck() + " Project structure generated.");
		expect(Util.isAlphanumericExt).toHaveBeenCalledTimes(3);
		expect(Util.isAlphanumericExt).toHaveBeenCalledWith("*This will ** not Work *");
		expect(Util.isAlphanumericExt).toHaveBeenCalledWith("Th15 w1ll");
		expect(Util.directoryExists).toHaveBeenCalledTimes(2);
		expect(Util.directoryExists).toHaveBeenCalledWith("Th15 w1ll");
		expect(Util.greenCheck).toHaveBeenCalledTimes(1 + 1);
		expect(Util.gitInit).toHaveBeenCalledTimes(0);
		expect(inquirer.prompt).toHaveBeenCalledTimes(6);
		expect(inquirer.prompt).toHaveBeenCalledWith(mockQuestion);
		expect(mockTemplate.getFrameworkByName).toHaveBeenCalledTimes(1);
		done();
	});
	it("chooseActionLoop - should run through properly - Add Component", async done => {
		// tslint:disable:object-literal-sort-keys
		const mockExtraConfigurations = [{
			choices: [],
			default: "Choice 1",
			message: "Please enter a value",
			key: "customValue1",
			type: Enumerations.ControlExtraConfigType.Value
		}, {
			choices: [],
			default: "Choice 1",
			message: "Please enter a value",
			key: "customValue2",
			type: Enumerations.ControlExtraConfigType.Value
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
			templates: mockComponentTemplates
		};
		const mockProject = {
			generateFiles: () => Promise.resolve(true)
		};
		const mockProjectLibrary = jasmine.createSpyObj("mockProjectLibrary", {
			name: "mockProjectLibrary",
			themes: ["infragistics", "infragistics.less"],
			getCustomTemplateNames: ["Custom Template 1"],
			getComponentGroups: ["Custom Group 1", "Custom Group 2"],
			getComponentNamesByGroup: ["Custom Group 1 Component 1", "Custom Group 1 Component 2"],
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
			getFrameworkNames: () => this.frameworks.map(f => f.name),
			getProjectLibraryNames: () => projectLibraries,
			getProjectLibraryByName: mockProjectLibrary
		});
		const mockSession = new PromptSession(mockTemplate);
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			project: {
				defaultPort: 4200
			}
		});
		spyOn(mockSession, "chooseActionLoop").and.callThrough();
		spyOn(Util, "log");
		spyOn(add, "addTemplate").and.returnValue(true);
		spyOn(PackageManager, "flushQueue").and.returnValue(Promise.resolve(true));
		spyOn(start, "start").and.returnValue(Promise.resolve(true));
		spyOn(inquirer, "prompt").and.returnValues(
			Promise.resolve({ action: "Add component" }),
			Promise.resolve({ componentGroup: "Back" }),
			Promise.resolve({ action: "Add component" }),
			Promise.resolve({ componentGroup: "Custom Group 1" }),
			Promise.resolve({ component: "Back" }),
			Promise.resolve({ componentGroup: "Custom Group 1" }),
			Promise.resolve({ component: "Custom Group 1 Component 2" }),
			Promise.resolve({ template: "Template 1" }),
			Promise.resolve({ componentName: "Template 1 Custom Name" }),
			Promise.resolve({ customValue1: "Test", customValue2: "Test" }),
			Promise.resolve({ action: "Complete & Run" }),
			Promise.resolve({ port: 7777})
		);
		await mockSession.chooseActionLoop(mockProjectLibrary, "infragistics");
		expect(mockSession.chooseActionLoop).toHaveBeenCalledTimes(2);
		expect(inquirer.prompt).toHaveBeenCalledTimes(12);
		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(PackageManager.flushQueue).toHaveBeenCalledWith(true);
		expect(start.start).toHaveBeenCalledTimes(1);
		expect(add.addTemplate).toHaveBeenCalledTimes(1);
		expect(inquirer.prompt).toHaveBeenCalledWith([{
			type: "input",
			default: "Choice 1",
			message: "Please enter a value",
			name: "customValue1",
			choices: []
		}, {
			type: "input",
			default: "Choice 1",
			message: "Please enter a value",
			name: "customValue2",
			choices: []
		}]);
		done();
	});
	it("chooseActionLoop - should run through properly - Add scenario", async done => {
		const mockSelectedTemplate = {
			name: "Custom Template 1"
		};
		const mockProject = {
			generateFiles: () => Promise.resolve(true)
		};
		const mockProjectLibrary = jasmine.createSpyObj("mockProjectLibrary", {
			name: "mockProjectLibrary",
			getCustomTemplateNames: [mockSelectedTemplate.name, "Custom Template 2"],
			getTemplateByName: [mockSelectedTemplate],
			getProject: () => {
				return mockProject;
			}
		});
		mockProjectLibrary.components = ["igGrid", "igCombo"];
		const mockTemplate = jasmine.createSpyObj("mockTemplate", {
			getProjectLibrary: mockProjectLibrary,
			getFrameworkNames: () => this.frameworks.map(f => f.name),
			getProjectLibraryByName: mockProjectLibrary
		});
		const mockSession = new PromptSession(mockTemplate);
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			project: {
				defaultPort: 4200
			}
		});
		spyOn(mockSession, "chooseActionLoop").and.callThrough();
		spyOn(Util, "log");
		spyOn(add, "addTemplate").and.returnValue(true);
		spyOn(PackageManager, "flushQueue").and.returnValue(Promise.resolve(true));
		spyOn(start, "start").and.returnValue(Promise.resolve(true));
		spyOn(inquirer, "prompt").and.returnValues(
			Promise.resolve({ action: "Add scenario" }),
			Promise.resolve({ customTemplate: "Back" }),
			Promise.resolve({ action: "Add scenario" }),
			Promise.resolve({ customTemplate: "Custom Template 1" }),
			Promise.resolve({ customViewName: "Custom Template Name" }),
			Promise.resolve({ action: "Complete & Run" }),
			Promise.resolve({ port: 7777})
		);
		await mockSession.chooseActionLoop(mockProjectLibrary, "infragistics");
		expect(mockSession.chooseActionLoop).toHaveBeenCalledTimes(2);
		expect(inquirer.prompt).toHaveBeenCalledTimes(7);
		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(PackageManager.flushQueue).toHaveBeenCalledWith(true);
		expect(start.start).toHaveBeenCalledTimes(1);
		expect(add.addTemplate).toHaveBeenCalledTimes(1);
		expect(add.addTemplate).toHaveBeenCalledWith("Custom Template Name", [mockSelectedTemplate]);
		done();
	});
	it("chooseActionLoop - should run through properly - Add Component", async done => {
		// tslint:disable:object-literal-sort-keys
		const mockExtraConfigurations = [{
			choices: ["Choice 1", "Choice 2", "Choice 3"],
			default: "Choice 1",
			message: "Please select a value",
			key: "customValue1",
			type: Enumerations.ControlExtraConfigType.Choice
		}, {
			choices: ["Choice 1", "Choice 2", "Choice 3"],
			default: "Choice 1",
			message: "Please select a value",
			key: "customValue2",
			type: Enumerations.ControlExtraConfigType.MultiChoice
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
			templates: mockComponentTemplates
		};
		const mockProject = {
			generateFiles: () => Promise.resolve(true)
		};
		const mockProjectLibrary = jasmine.createSpyObj("mockProjectLibrary", {
			name: "mockProjectLibrary",
			themes: ["infragistics", "infragistics.less"],
			getCustomTemplateNames: ["Custom Template 1"],
			getComponentGroups: ["Custom Group 1", "Custom Group 2"],
			getComponentNamesByGroup: ["Custom Group 1 Component 1", "Custom Group 1 Component 2"],
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
			getFrameworkNames: () => this.frameworks.map(f => f.name),
			getProjectLibraryNames: () => projectLibraries,
			getProjectLibraryByName: mockProjectLibrary
		});
		const mockSession = new PromptSession(mockTemplate);
		spyOn(ProjectConfig, "getConfig").and.returnValue({
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
		spyOn(inquirer, "prompt").and.returnValues(
			Promise.resolve({ action: "Add component" }),
			Promise.resolve({ componentGroup: "Back" }),
			Promise.resolve({ action: "Add component" }),
			Promise.resolve({ componentGroup: "Custom Group 1" }),
			Promise.resolve({ component: "Back" }),
			Promise.resolve({ componentGroup: "Custom Group 1" }),
			Promise.resolve({ component: "Custom Group 1 Component 2" }),
			Promise.resolve({ template: "Template 1" }),
			Promise.resolve({ name: "Template 1 Custom Name" }),
			Promise.resolve({ customValue1: "Test", customValue2: "Test" }),
			Promise.resolve({ action: "Complete & Run" }),
			Promise.resolve({ port: 7777})
		);
		await mockSession.chooseActionLoop(mockProjectLibrary, "infragistics");
		expect(mockSession.chooseActionLoop).toHaveBeenCalledTimes(2);
		expect(inquirer.prompt).toHaveBeenCalledTimes(12);
		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(PackageManager.flushQueue).toHaveBeenCalledWith(true);
		expect(start.start).toHaveBeenCalledTimes(1);
		expect(add.addTemplate).toHaveBeenCalledTimes(1);
		expect(inquirer.prompt).toHaveBeenCalledWith([{
			type: "list",
			default: "Choice 1",
			message: "Please select a value",
			name: "customValue1",
			choices: ["Choice 1", "Choice 2", "Choice 3"]
		}, {
			type: "checkbox",
			default: "Choice 1",
			message: "Please select a value",
			name: "customValue2",
			choices: ["Choice 1", "Choice 2", "Choice 3"]
		}]);
		done();
	});
	it("start - Should fire correctly with Angular Custom theme selected", async done => {
		const mockSession = new PromptSession(new TemplateManager());
		spyOn(Util, "isAlphanumericExt").and.callThrough();
		spyOn(Util, "gitInit");
		spyOn(Util, "log");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		spyOn(inquirer, "prompt").and.returnValues(
			Promise.resolve({ projectName: "Test1"}),
			Promise.resolve({ framework: "Angular"}),
			Promise.resolve({ projectType: "Ignite UI for Angular"}),
			Promise.resolve({ theme: "Custom"}));
		spyOn(mockSession, "chooseActionLoop").and.returnValue(Promise.resolve());
		spyOn(process, "chdir");
		await mockSession.start();
		const CUSTOM_THEME = `
		/* See: https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes.html */
		@import "~igniteui-angular/lib/core/styles/themes/index";
		$primary: #731963 !default;
		$secondary: #ce5712 !default;
		$app-palette: igx-palette($primary, $secondary);
		@include igx-core();
		@include igx-theme($app-palette);`;
		const actualCall = (Util.processTemplates as jasmine.Spy).calls.argsFor(0)[2]["$(CustomTheme)"].replace(/\s/g, "");
		const expectedCall = CUSTOM_THEME.replace(/\s/g, "");
		expect(actualCall).toEqual(expectedCall);
		done();
	});
	it("start - Should fire correctly with Angular Default theme selected", async done => {
		const mockSession = new PromptSession(new TemplateManager());
		spyOn(Util, "isAlphanumericExt").and.callThrough();
		spyOn(Util, "gitInit");
		spyOn(Util, "log");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		spyOn(inquirer, "prompt").and.returnValues(
			Promise.resolve({ projectName: "Test1"}),
			Promise.resolve({ framework: "Angular"}),
			Promise.resolve({ projectType: "Ignite UI for Angular"}),
			Promise.resolve({ theme: "Default"}));
		spyOn(mockSession, "chooseActionLoop").and.returnValue(Promise.resolve());
		spyOn(process, "chdir");
		await mockSession.start();
		const DEFAULT_THEME = `,"node_modules/igniteui-angular/styles/igniteui-angular.css"`;
		const actualCall = (Util.processTemplates as jasmine.Spy).calls.argsFor(0)[2]["$(DefaultTheme)"].replace(/\s/g, "");
		const expectedCall = DEFAULT_THEME.replace(/\s/g, "");
		expect(actualCall).toEqual(expectedCall);
		done();
	});
});
