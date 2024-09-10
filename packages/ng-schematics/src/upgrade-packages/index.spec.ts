import { EmptyTree } from "@angular-devkit/schematics";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";
import { App, BaseTemplate, FrameworkId, FS_TOKEN, FS_TYPE_TOKEN, FsTypes, GoogleAnalytics, ProjectConfig, ProjectLibrary, ProjectTemplate, Template } from "@igniteui/cli-core";
import * as path from "path";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";
import { NgTreeFileSystem } from "../utils/NgFileSystem";

describe("Schematics upgrade-packages", () => {
	// tslint:disable: object-literal-sort-keys

	let appTree: UnitTestTree;
	const collectionPath = path.join(__dirname, "../collection.json");
	const schematicName = "upgrade-packages";

	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
		appTree = new UnitTestTree(new EmptyTree());
	});

	it("calls project template upgradeIgniteUIPackages and schedules install accordingly", async () => {
		const runner = new SchematicTestRunner("schematics", collectionPath);

		const mockConfig = {
			version: '1.0.0',
			packagesInstalled: true,
			build: {},
			igPackageRegistry: 'https://example.com',
			skipGit: true,
			disableAnalytics: true,
			customTemplates: [],
			stepByStep: {
				frameworks: ["angular", "react"],
				[FrameworkId.angular]: {
					projTypes: ["igx-ts", "igx-es6"]
				},
				[FrameworkId.react]: {
					projTypes: ["igx-react"]
				},
				[FrameworkId.jquery]: {
					projTypes: ["igx-jquery"]
				},
				[FrameworkId.webComponents]: {
					projTypes: ["igx-webcomponents"]
				}
			},
			project: {
				defaultPort: 4200,
				framework: "mock-ng",
				projectType: "mock-igx-ts",
				projectTemplate: "mock-side-nav",
				theme: "default-theme",
				themePath: "/path/to/theme",
				components: ["mock-component"],
				isBundle: true,
				isShowcase: false,
				version: '1.0.0',
				sourceRoot: "/src",
				igniteuiSource: "igniteui-source"
			}
		};
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockConfig);

		const mockProjTemplate: Partial<ProjectTemplate> = {
			upgradeIgniteUIPackages: async () => true
		};
		const upgradeSpy = spyOn(mockProjTemplate, "upgradeIgniteUIPackages");

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

        const mockProjectTemplate: ProjectTemplate = {
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

		const mockLib: ProjectLibrary = {
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
			getProject: jasmine.createSpy().and.returnValue(mockProjTemplate),
			hasProject: jasmine.createSpy().and.returnValue(false),
			hasTemplate: jasmine.createSpy().and.returnValue(false),
			registerTemplate: jasmine.createSpy()
		};

		const projLibSpy = spyOn(SchematicsTemplateManager.prototype, "getProjectLibrary");
		projLibSpy.and.returnValue(mockLib);
		upgradeSpy.and.returnValue(Promise.resolve(false));

		await runner.runSchematicAsync(schematicName, { }, appTree).toPromise();
		expect(GoogleAnalytics.post).toHaveBeenCalledWith({
			t: "screenview",
			cd: "Upgrade packages"
		});
		expect(projLibSpy).toHaveBeenCalledWith("mock-ng", "mock-igx-ts");
		expect(mockLib.hasProject).toHaveBeenCalledWith("mock-side-nav");
		expect(mockLib.getProject).toHaveBeenCalledWith("another-mock");
		expect(App.container.get(FS_TYPE_TOKEN)).toEqual(FsTypes.virtual, "setVirtual not called");
		expect(App.container.get(FS_TOKEN)).toEqual(jasmine.any(NgTreeFileSystem));

		expect(upgradeSpy).toHaveBeenCalledTimes(1);
		expect(upgradeSpy).toHaveBeenCalledWith("", "");
		expect(runner.tasks).toEqual([]);

		upgradeSpy.and.returnValue(Promise.resolve(true));
		await runner.runSchematicAsync(schematicName, { skipInstall: true }, appTree).toPromise();
		expect(upgradeSpy).toHaveBeenCalledTimes(2);
		expect(runner.tasks).toEqual([]);

		await runner.runSchematicAsync(schematicName, { }, appTree).toPromise();
		expect(upgradeSpy).toHaveBeenCalledTimes(3);
		const installTaskOptions = new NodePackageInstallTask().toConfiguration();
		expect(runner.tasks).toContain(jasmine.objectContaining(installTaskOptions));
	});
});
