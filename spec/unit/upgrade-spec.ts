import {
	App, BaseTemplate, BaseTemplateManager, Config, GoogleAnalytics, PackageManager, ProjectConfig,
	ProjectLibrary, ProjectTemplate, Template, TEMPLATE_MANAGER, Util
} from "@igniteui/cli-core";
import * as detectFrameworkModule from "../../packages/core/util/detect-framework";

import { default as upgradeCmd } from "../../packages/cli/lib/commands/upgrade";

describe("Unit - Upgrade command", () => {
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(process, "chdir");
		spyOn(Util, "execSync");
		spyOn(PackageManager, "installPackages");
	});

	it("Upgrade an Ignite UI for Angular project", async () => {
		const config: Config = {
			project: {
				framework: "angular",
				projectTemplate: "test-template",
				projectType: "igx-ts"
			}
		} as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(config);

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

		const mockProjTemplate: ProjectTemplate = {
			...mockBaseTemplate,
			installModules: jasmine.createSpy().and.callFake(() => {}),
			upgradeIgniteUIPackages: null
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

		const mockProjLib: ProjectLibrary = {
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
			projects: [mockProjTemplate],
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
			getProject: null,
			hasProject: jasmine.createSpy().and.returnValue(true),
			hasTemplate: jasmine.createSpy().and.returnValue(false),
			registerTemplate: jasmine.createSpy()
		};

		const mockTemplateManager: Partial<BaseTemplateManager> = { getProjectLibrary: () => null };
		App.container.set(TEMPLATE_MANAGER, mockTemplateManager);
		spyOn(mockTemplateManager, "getProjectLibrary").and.returnValue(mockProjLib);
		spyOn(mockProjLib, "getProject").and.returnValue(mockProjTemplate);
		const upgradeIgniteUIPackagesSpy = spyOn(mockProjTemplate, "upgradeIgniteUIPackages");

		upgradeIgniteUIPackagesSpy.and.returnValue(Promise.resolve(true));
		await upgradeCmd.handler({ skipInstall: true, _: ["upgrade"], $0: "upgrade" });
		expect(mockTemplateManager.getProjectLibrary).toHaveBeenCalledTimes(1);
		expect(mockTemplateManager.getProjectLibrary)
			.toHaveBeenCalledWith(config.project.framework, config.project.projectType);
		expect(mockProjLib.getProject).toHaveBeenCalledWith(config.project.projectTemplate);
		expect(mockProjTemplate.upgradeIgniteUIPackages).toHaveBeenCalledTimes(1);
		expect(mockProjTemplate.upgradeIgniteUIPackages).toHaveBeenCalledWith(process.cwd(), "");
		expect(Util.execSync).not.toHaveBeenCalled();

		upgradeIgniteUIPackagesSpy.and.returnValue(Promise.resolve(false));
		await upgradeCmd.handler({ skipInstall: false, _: ["upgrade"], $0: "upgrade" });
		expect(mockProjTemplate.upgradeIgniteUIPackages).toHaveBeenCalledTimes(2);
		expect(Util.execSync).not.toHaveBeenCalled();

		upgradeIgniteUIPackagesSpy.and.returnValue(Promise.resolve(true));
		await upgradeCmd.handler({ skipInstall: false, _: ["upgrade"], $0: "upgrade" });
		expect(mockProjTemplate.upgradeIgniteUIPackages).toHaveBeenCalledTimes(3);
		expect(Util.execSync).toHaveBeenCalledWith("npm install --quiet");
	});

	it("Logs error for not supported framework", async () => {
		const config: Config = {
			project: {
				framework: "jquery"
			}
		} as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(config);

		await upgradeCmd.handler({ _: ["upgrade"], $0: "upgrade" });
		expect(Util.log).toHaveBeenCalledTimes(1);
	});

	it("Should auto-detect framework from package.json when config has no project", async () => {
		const config = {} as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(config);
		spyOn(detectFrameworkModule, "detectFrameworkFromPackageJson").and.returnValue("react");

		const mockProjTemplate: ProjectTemplate = {
			id: "mock",
			name: "mock",
			description: "mock",
			delimiters: { content: { start: "{{", end: "}}" }, path: { start: "[[", end: "]]" } },
			dependencies: [],
			framework: "react",
			projectType: "igr-ts",
			hasExtraConfiguration: false,
			isHidden: false,
			templatePaths: [],
			generateConfig: jasmine.createSpy().and.returnValue({}),
			getExtraConfiguration: jasmine.createSpy().and.returnValue([]),
			setExtraConfiguration: jasmine.createSpy(),
			installModules: jasmine.createSpy(),
			upgradeIgniteUIPackages: jasmine.createSpy().and.returnValue(Promise.resolve(true))
		};

		const mockProjLib: Partial<ProjectLibrary> = {
			projectIds: ["default-project"],
			getProject: jasmine.createSpy().and.returnValue(mockProjTemplate),
			hasProject: jasmine.createSpy().and.returnValue(false)
		};

		const mockTemplateManager: Partial<BaseTemplateManager> = { getProjectLibrary: () => null };
		App.container.set(TEMPLATE_MANAGER, mockTemplateManager);
		spyOn(mockTemplateManager, "getProjectLibrary").and.returnValue(mockProjLib as ProjectLibrary);

		await upgradeCmd.handler({ skipInstall: true, _: ["upgrade"], $0: "upgrade" });
		expect(detectFrameworkModule.detectFrameworkFromPackageJson).toHaveBeenCalled();
		expect(mockTemplateManager.getProjectLibrary).toHaveBeenCalledWith("react", "igr-ts");
		expect(mockProjTemplate.upgradeIgniteUIPackages).toHaveBeenCalledWith(process.cwd(), "");
	});

	it("Should log a message when no framework can be detected", async () => {
		const config = {} as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(config);
		spyOn(detectFrameworkModule, "detectFrameworkFromPackageJson").and.returnValue(null);

		await upgradeCmd.handler({ _: ["upgrade"], $0: "upgrade" });
		expect(Util.log).toHaveBeenCalledWith(
			jasmine.stringMatching(/Unable to determine the project framework/), "yellow"
		);
	});
});
