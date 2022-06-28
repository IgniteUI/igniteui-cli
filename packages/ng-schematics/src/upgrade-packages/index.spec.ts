import { EmptyTree } from "@angular-devkit/schematics";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";
import { App, FS_TOKEN, FS_TYPE_TOKEN, FsTypes, GoogleAnalytics, ProjectConfig, ProjectLibrary, ProjectTemplate } from "@igniteui/cli-core";
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

	it("calls project template upgradeIgniteUIPackages and schedules install accordingly", async done => {
		const runner = new SchematicTestRunner("schematics", collectionPath);

		const mockConfig = {
			customTemplates: [],
			project: {
				framework: "mock-ng",
				projectType: "mock-igx-ts",
				projectTemplate: "mock-side-nav"
			}
		};
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockConfig);

		const mockProjTemplate: Partial<ProjectTemplate> = {
			upgradeIgniteUIPackages: async () => true
		};
		const upgradeSpy = spyOn(mockProjTemplate, "upgradeIgniteUIPackages");
		const mockLib: Partial<ProjectLibrary> = {
			getProject: jasmine.createSpy().and.returnValue(mockProjTemplate),
			hasProject: jasmine.createSpy().and.returnValue(false),
			projectIds: ["another-mock"]
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

		done();
	});
});
