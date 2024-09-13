import { App, BaseTemplate, Config, ControlExtraConfigType, GoogleAnalytics, PackageManager, ProjectConfig,
	ProjectLibrary, ProjectTemplate, Template, Util } from "@igniteui/cli-core";
import * as inquirer from "inquirer";
import * as path from "path";
import { default as add } from "../../packages/cli/lib/commands/add";
import { default as start } from "../../packages/cli/lib/commands/start";
import { default as upgrade } from "../../packages/cli/lib/commands/upgrade";
import { PromptSession } from "../../packages/cli/lib/PromptSession";
import { TemplateManager } from "../../packages/cli/lib/TemplateManager";

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
        upgradeIgniteUIPackages: jasmine.createSpy().and.returnValue(Promise.resolve(true))
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

describe("Unit - PromptSession", () => {
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	// TODO: most of the tests use same setup - move the setup to beforeAll call
	it("chooseTerm - Should call itself if no term is passed.", async () => {
		spyOn(PromptSession, "chooseTerm").and.callThrough();
		spyOn(inquirer, "prompt").and.returnValues(Promise.resolve({ term: "" }),
			Promise.resolve({ term: "" }), Promise.resolve({ term: "" }),
			Promise.resolve({ term: "" }), Promise.resolve({ term: "Test" }));
		const testVar = await PromptSession.chooseTerm();
		expect(PromptSession.chooseTerm).toHaveBeenCalled();
		expect(PromptSession.chooseTerm).toHaveBeenCalledTimes(5);
		expect(testVar).toBe("Test");
		expect(inquirer.prompt).toHaveBeenCalledTimes(5);
	});
	it("start - Should create new project correctly", async () => {
		const mockProjectConfig = {
			project: {
				isShowcase: true
			}
		} as unknown as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);
		// tslint:disable:object-literal-sort-keys
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
		// tslint:disable:no-console
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
		const mockQuestion: inquirer.Question = {
			type: "list",
			name: "theme",
			message: "Choose the theme for the project:",
			choices: ["infragistics", new inquirer.Separator(), "infragistics.less"],
			default: "infragistics"
		};
		spyOn(Util, "greenCheck").and.callThrough();
		spyOn(Util, "log");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		spyOn(Util, "getAvailableName").and.returnValue("IG Project");
		spyOn(Util, "gitInit");
		spyOn(inquirer, "prompt").and.returnValues(Promise.resolve({ projectName: "Test Project" }),
			Promise.resolve({ framework: "Custom Framework 1" }),
			Promise.resolve({ project: "jQuery" }),
			Promise.resolve({ theme: "infragistics" }));
		spyOn(process, "chdir");
		spyOn(mockSession, "chooseActionLoop");
		await mockSession.start();
		expect(Util.log).toHaveBeenCalledTimes(4);
		expect(Util.log).toHaveBeenCalledWith("  Proj Template: Project 1");
		expect(Util.log).toHaveBeenCalledWith("  Generating project structure.");
		expect(Util.log).toHaveBeenCalledWith("");
		expect(Util.log).toHaveBeenCalledWith(Util.greenCheck() + " Project structure generated.");
		expect(inquirer.prompt).toHaveBeenCalledWith(
			jasmine.objectContaining({
				type: "input",
				message: "Enter a name for your project:",
				validate: jasmine.any(Function)
			}));
		expect(Util.getAvailableName).toHaveBeenCalledTimes(1);
		expect(Util.getAvailableName).toHaveBeenCalledWith("IG Project", true);
		expect(Util.greenCheck).toHaveBeenCalledTimes(1 + 1);
		expect(Util.gitInit).toHaveBeenCalled();
		expect(inquirer.prompt).toHaveBeenCalledTimes(4);
		expect(inquirer.prompt).toHaveBeenCalledWith(mockQuestion);
		expect(mockTemplate.getFrameworkByName).toHaveBeenCalledTimes(1);
	});
	it("start - Should go into chooseActionLoop if project has local config", async () => {
		const mockBaseTemplate = createMockBaseTemplate();
        const mockProjectTemplate = createMockProjectTemplate(mockBaseTemplate);
        const mockNewTemplate = createMockTemplate(mockBaseTemplate);
        const mockLibrary = createMockLibrary(mockNewTemplate, mockProjectTemplate);
		const mockTemplate = jasmine.createSpyObj("mockTemplate", {
			getProjectLibrary: mockLibrary
		});
		const mockSession = new PromptSession(mockTemplate);
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		const mockProjectConfig = {
			project: {
				isShowcase: false
			}
		 } as unknown as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);
		spyOn(mockSession, "chooseActionLoop");
		spyOn(Util, "directoryExists").and.returnValue(false);
		await mockSession.start();
		expect(ProjectConfig.hasLocalConfig).toHaveBeenCalledTimes(1);
		expect(mockTemplate.getProjectLibrary).toHaveBeenCalledTimes(1);
		expect(mockSession.chooseActionLoop).toHaveBeenCalledTimes(1);
		expect(mockSession.chooseActionLoop).toHaveBeenCalledWith(mockLibrary);
	});
	it("start - Should skip framework/projType input w/ restricted config", async () => {
		const mockProjectConfig = {
			stepByStep: {
				frameworks: ["angular"],
				angular: {
					projTypes: ["igx-ts"]
				}
			}
		} as unknown as Config;

		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);
		// tslint:disable:object-literal-sort-keys
		const mockBaseTemplate = createMockBaseTemplate();
        const mockProjectTemplate = createMockProjectTemplate(mockBaseTemplate);
		mockProjectTemplate.name = "Project";
		mockProjectTemplate.templatePaths = ["test"];
		const mockProjectLibrary = {
			themes: ["infragistics"],
			projectIds: ["empty"],
			projects: [mockProjectTemplate]
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
		spyOn(Util, "fileExists").and.returnValue(false);
		const mockFileSystem = {
			fileExists: jasmine.createSpy().and.returnValue(false),
			readFile: jasmine.createSpy().and.returnValue(JSON.stringify({ key: "value" }))
		};
		spyOn(App.container, 'get').and.returnValue(mockFileSystem);
		spyOn(Util, "isAlphanumericExt").and.returnValue(true);
		spyOn(Util, "gitInit");
		spyOn(inquirer, "prompt").and.returnValues(
			Promise.resolve({ projectName: "Test Project" })
		);
		spyOn(process, "chdir");
		spyOn(mockSession, "chooseActionLoop");
		spyOn(process, "cwd").and.returnValue("Mock");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		await mockSession.start();

		// prompt only for project name:
		expect(inquirer.prompt).toHaveBeenCalledTimes(1);
		expect(inquirer.prompt).toHaveBeenCalledWith(
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
		expect(mockProjectTemplate.generateConfig).toHaveBeenCalledWith("Test Project", mockProjectLibrary.themes[0]);
		expect(Util.processTemplates)
			.toHaveBeenCalledWith("test", path.join("Mock", "Test Project"), {}, mockProjectTemplate.delimiters, false);
		expect(Util.log).toHaveBeenCalledWith(" Project structure generated.");
		expect(Util.gitInit).toHaveBeenCalled();
		expect(mockSession.chooseActionLoop).toHaveBeenCalled();
	});
	it("start - New project - missing IFs", async () => {
		// tslint:disable:object-literal-sort-keys
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
		// tslint:disable:no-console
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
		const mockQuestion: inquirer.Question = {
			type: "list",
			name: "theme",
			message: "Choose the theme for the project:",
			choices: ["infragistics", new inquirer.Separator(), "infragistics.less"],
			default: "infragistics"
		};
		const mockProjectConfig = {
			skipGit: true,
			project: {
				isShowcase: true
			}
		} as unknown as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);
		spyOn(Util, "greenCheck").and.callThrough();
		spyOn(Util, "log");
		spyOn(Util, "directoryExists").and.returnValues(true);
		spyOn(Util, "isAlphanumericExt").and.callThrough();
		spyOn(Util, "gitInit");
		spyOn(Util, "error");
		spyOn(inquirer, "prompt").and.returnValues(
			Promise.resolve({ projectName: "Dummy name" }),
			Promise.resolve({ framework: "Custom Framework 1" }),
			Promise.resolve({ project: "jQuery" }),
			Promise.resolve({ theme: "infragistics" }));
		spyOn(process, "chdir");
		spyOn(mockSession, "chooseActionLoop");
		await mockSession.start();

		expect(inquirer.prompt).toHaveBeenCalledTimes(4);
		expect(Util.log).toHaveBeenCalledTimes(4);
		expect(Util.log).toHaveBeenCalledWith("  Proj Template: Project 1");
		expect(Util.log).toHaveBeenCalledWith("");
		expect(Util.log).toHaveBeenCalledWith("  Generating project structure.");
		expect(Util.log).toHaveBeenCalledWith(Util.greenCheck() + " Project structure generated.");

		expect(Util.greenCheck).toHaveBeenCalledTimes(1 + 1);
		expect(Util.gitInit).toHaveBeenCalledTimes(0);
		expect(inquirer.prompt).toHaveBeenCalledWith(mockQuestion);
		expect(mockTemplate.getFrameworkByName).toHaveBeenCalledTimes(1);

		// validate:
		const firstCallArgs = (inquirer.prompt as jasmine.Spy).calls.first().args[0];
		expect(firstCallArgs.validate).toEqual(jasmine.any(Function));
		expect(firstCallArgs.validate("*This will ** not Work *")).toBe(false);
		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(firstCallArgs.validate("Th15 w1ll")).toBe(true);
		expect(Util.isAlphanumericExt).toHaveBeenCalledTimes(2);
		expect(Util.isAlphanumericExt).toHaveBeenCalledWith("*This will ** not Work *");
		expect(Util.isAlphanumericExt).toHaveBeenCalledWith("Th15 w1ll");
		expect(Util.directoryExists).toHaveBeenCalledTimes(3);
		expect(Util.directoryExists).toHaveBeenCalledWith("Th15 w1ll");
	});
	it("chooseActionLoop - should run through properly - Add Component", async () => {
		// tslint:disable:object-literal-sort-keys
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
		const mockProjectConfig = {
			project: {
				defaultPort: 4200
			}
		 } as unknown as Config;
		spyOn(ProjectConfig, "localConfig").and.returnValue(mockProjectConfig);
		spyOn(mockSession, "chooseActionLoop").and.callThrough();
		spyOn(Util, "log");
		spyOn(add, "addTemplate").and.returnValue(Promise.resolve(true));
		spyOn(PackageManager, "flushQueue").and.returnValue(Promise.resolve());
		spyOn(start, "start").and.returnValue(Promise.resolve());
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
			Promise.resolve({ port: 7777 })
		);
		spyOn(ProjectConfig, "setConfig");
		await mockSession.chooseActionLoop(mockProjectLibrary);
		expect(mockSession.chooseActionLoop).toHaveBeenCalledTimes(1);
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
	});
	it("chooseActionLoop - should run through properly - Add scenario", async () => {
		const mockBaseTemplate = createMockBaseTemplate();
        const mockSelectedTemplate = createMockTemplate(mockBaseTemplate);
		mockSelectedTemplate.name = "Custom Template 1";
		const mockProject = {
			generateConfig: () => Promise.resolve(true)
		};
		const mockProjectLibrary = jasmine.createSpyObj("mockProjectLibrary", {
			name: "mockProjectLibrary",
			getCustomTemplateNames: [mockSelectedTemplate.name, "Custom Template 2"],
			getTemplateByName: [mockSelectedTemplate],
			getCustomTemplates: [mockSelectedTemplate, { name: "Not selected" }, { name: "Not selected" }],
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
		const mockProjectConfig = {
				packagesInstalled: true,
				project: {
					defaultPort: 4200,
					framework: "angular",
					projectType: "igx-ts"
				}
		 } as unknown as Config;
		spyOn(ProjectConfig, "localConfig").and.returnValue(mockProjectConfig);
		spyOn(mockSession, "chooseActionLoop").and.callThrough();
		spyOn(Util, "log");
		spyOn(add, "addTemplate").and.returnValue(Promise.resolve(true));
		spyOn(PackageManager, "flushQueue").and.returnValue(Promise.resolve());
		spyOn(start, "start").and.returnValue(Promise.resolve());
		spyOn(Util, "getAvailableName").and.callThrough();
		spyOn(inquirer, "prompt").and.returnValues(
			Promise.resolve({ action: "Add scenario" }),
			Promise.resolve({ customTemplate: "Back" }),
			Promise.resolve({ action: "Add scenario" }),
			Promise.resolve({ customTemplate: "Custom Template 1" }),
			Promise.resolve({ customViewName: "Custom Template Name" }),
			Promise.resolve({ usePaidAngular: "no" }),
			Promise.resolve({ action: "Complete & Run" }),
			Promise.resolve({ port: 7777 })
		);
		spyOn(ProjectConfig, "setConfig");
		spyOn(Util, "directoryExists").and.returnValue(false);
		spyOn(Util, "fileExists").and.returnValue(false);
		await mockSession.chooseActionLoop(mockProjectLibrary);
		expect(mockSession.chooseActionLoop).toHaveBeenCalledTimes(1);
		expect(inquirer.prompt).toHaveBeenCalledTimes(8);
		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(PackageManager.flushQueue).toHaveBeenCalledWith(true);
		expect(start.start).toHaveBeenCalledTimes(1);
		expect(Util.getAvailableName).toHaveBeenCalledTimes(1);
		expect(add.addTemplate).toHaveBeenCalledTimes(1);
		expect(add.addTemplate).toHaveBeenCalledWith("Custom Template Name", mockSelectedTemplate);
	});
	it("chooseActionLoop - should run through properly - Add Component", async () => {
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
		const mockProjectConfig = {
			project: {
				defaultPort: 4200
			}
	    } as unknown as Config;
		spyOn(ProjectConfig, "localConfig").and.returnValue(mockProjectConfig);
		spyOn(mockSession, "chooseActionLoop").and.callThrough();
		spyOn(Util, "log");
		spyOn(add, "addTemplate").and.returnValue(Promise.resolve(true));
		spyOn(PackageManager, "flushQueue").and.returnValue(Promise.resolve());
		//spyOn(start, "start").and.returnValue(Promise.resolve({port: 3333 }));
		spyOn(start, "start").and.returnValue(Promise.resolve());
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
			Promise.resolve({ port: 7777 })
		);
		spyOn(ProjectConfig, "setConfig");
		await mockSession.chooseActionLoop(mockProjectLibrary);
		expect(mockSession.chooseActionLoop).toHaveBeenCalledTimes(1);
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
	});
	it("chooseActionLoop - Complete and Run should update default port", async () => {
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
		const mockProjectConfig = {
			project: {
				defaultPort: 4200,
				framework: "angular",
				projectType: "igx-ts"
			},
			packagesInstalled: true
		} as unknown as Config;
		spyOn(ProjectConfig, "localConfig").and.returnValue(mockProjectConfig);
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		const mockSession = new PromptSession(mockTemplate);
		spyOn(mockSession, "chooseActionLoop").and.callThrough();
		spyOn(inquirer, "prompt").and.returnValues(
			Promise.resolve({ action: "Complete & Run" }),
			Promise.resolve({ port: 7777 })
		);
		mockProjectConfig.project.defaultPort = 7777;
		spyOn(start, "start");
		spyOn(ProjectConfig, "setConfig");

		await mockSession.chooseActionLoop(mockProjectLibrary);
		expect(start.start).toHaveBeenCalledWith({ port: 7777 });
		expect(ProjectConfig.setConfig).toHaveBeenCalledWith(mockProjectConfig);

		// validate:
		spyOn(Util, "log");
		spyOn(Util, "error");
		const lastCallArgs = (inquirer.prompt as jasmine.Spy).calls.mostRecent().args[0];
		expect(lastCallArgs.validate).toEqual(jasmine.any(Function));

		expect(lastCallArgs.validate("not a number")).toBe(false);
		expect(lastCallArgs.validate("1a")).toBe(false);
		expect(Util.error).toHaveBeenCalledWith(
			"port should be a number. Input valid port or use the suggested default port",
			"red");
		expect(lastCallArgs.validate("3210")).toBe(true);
		expect(Util.error).toHaveBeenCalledTimes(2);
	});
	it("chooseActionLoop - should call `upgradePackages` when update angular is true", async () => {
		const mockProjectConfig = {
			project: {
				defaultPort: 4200,
				framework: "angular",
				projectType: "igx-ts"
			},
			packagesInstalled: false
		} as unknown as Config;
		spyOn(ProjectConfig, "localConfig").and.returnValue(mockProjectConfig);
		spyOn(ProjectConfig, "setConfig");

		const mockSession = new PromptSession({} as any);
		spyOn(mockSession as any, "generateActionChoices").and.returnValues([]);
		spyOn(mockSession as any, "getUserInput").and.returnValues(
			Promise.resolve("Complete & Run"),
			Promise.resolve("yes"),
			Promise.resolve(4200)
			);
		spyOn(mockSession as any, "completeAndRun").and.returnValues(Promise.resolve());
		spyOn(upgrade, "upgrade").and.returnValue();

		await mockSession.chooseActionLoop({} as any);

		expect(upgrade.upgrade).toHaveBeenCalledTimes(1);
		expect(upgrade.upgrade).toHaveBeenCalledWith({ skipInstall: true, _: ["upgrade"], $0: "upgrade" });
	});
	it("start - Should fire correctly with Angular Custom theme selected", async () => {
		const mockProjectConfig =  {
			customTemplates: [],
			project: {
				isShowcase: true
			}
		} as unknown as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);
		const mockSession = new PromptSession(new TemplateManager());
		spyOn(Util, "isAlphanumericExt").and.callThrough();
		spyOn(Util, "gitInit");
		spyOn(Util, "log");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		spyOn(inquirer, "prompt").and.returnValues(
			Promise.resolve({ projectName: "Test1" }),
			Promise.resolve({ framework: "Angular" }),
			Promise.resolve({ projectType: "Ignite UI for Angular" }),
			Promise.resolve({ projTemplate: "Default side navigation" }),
			Promise.resolve({ theme: "Custom" }));
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
	});
	it("start - Should fire correctly with Angular Default theme selected", async () => {
		const mockProjectConfig =  {
			customTemplates: [],
			project: {
				isShowcase: true
			}
		} as unknown as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);
		const mockSession = new PromptSession(new TemplateManager());
		spyOn(Util, "isAlphanumericExt").and.callThrough();
		spyOn(Util, "gitInit");
		spyOn(Util, "log");
		spyOn(Util, "processTemplates").and.returnValue(Promise.resolve(true));
		spyOn(inquirer, "prompt").and.returnValues(
			Promise.resolve({ projectName: "Test1" }),
			Promise.resolve({ framework: "Angular" }),
			Promise.resolve({ projectType: "Ignite UI for Angular" }),
			Promise.resolve({ projTemplate: "Default side navigation" }),
			Promise.resolve({ theme: "Default" }));
		spyOn(mockSession, "chooseActionLoop").and.returnValue(Promise.resolve());
		spyOn(process, "chdir");
		await mockSession.start();
		const DEFAULT_THEME = `,"node_modules/igniteui-angular/styles/igniteui-angular.css"`;
		const actualCall = (Util.processTemplates as jasmine.Spy).calls.argsFor(0)[2]["DefaultTheme"].replace(/\s/g, "");
		const expectedCall = DEFAULT_THEME.replace(/\s/g, "");
		expect(actualCall).toEqual(expectedCall);
	});
});
