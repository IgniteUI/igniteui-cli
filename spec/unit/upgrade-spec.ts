import {
	BaseTemplate, BaseTemplateManager, Config, GoogleAnalytics, PackageManager, ProjectConfig,
	ProjectLibrary, ProjectTemplate, Template, Util
} from "@igniteui/cli-core";

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
		// tslint:disable-next-line: no-object-literal-type-assertion
		const config: Config = {
			project: {
				framework: "angular",
				projectTemplate: "test-template",
				projectType: "igx-ts"
			}
		} as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(config);

		// const mockProject: Partial<ProjectTemplate> = {
		// 	upgradeIgniteUIPackages: () => null
		// };
		// const mockProjLib: Partial<ProjectLibrary> = { getProject: () => null, hasProject: () => true };

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
            templatePaths: ["/path/to/template"],
            generateConfig: jasmine.createSpy().and.returnValue({}),
            getExtraConfiguration: jasmine.createSpy().and.returnValue([]),
            setExtraConfiguration: jasmine.createSpy()
        };

        const mockProjTemplate: ProjectTemplate = {
            ...mockBaseTemplate,
            installModules: jasmine.createSpy().and.callFake(() => {}),
            upgradeIgniteUIPackages: jasmine.createSpy().and.returnValue(Promise.resolve(true)),
            generateConfig: jasmine.createSpy().and.returnValue({}),
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
			getProject: jasmine.createSpy().and.returnValue(mockProjTemplate),
			hasProject: jasmine.createSpy().and.returnValue(false),
			hasTemplate: jasmine.createSpy().and.returnValue(false),
			registerTemplate: jasmine.createSpy()
		};

		const mockTemplateManager: Partial<BaseTemplateManager> = { getProjectLibrary: () => null };
		upgradeCmd.templateManager = mockTemplateManager as any;
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
		// tslint:disable-next-line: no-object-literal-type-assertion
		const config: Config = {
			project: {
				framework: "jquery"
			}
		} as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(config);

		await upgradeCmd.handler({ _: ["upgrade"], $0: "upgrade" });
		expect(Util.log).toHaveBeenCalledTimes(1);
	});
});
