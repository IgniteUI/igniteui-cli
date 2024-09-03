import {
	BaseTemplateManager, Config, GoogleAnalytics, PackageManager, ProjectConfig, ProjectLibrary, ProjectTemplate, Util
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

	it("Upgrade an Ignite UI for Angular project", async done => {
		// tslint:disable-next-line: no-object-literal-type-assertion
		const config: Config = {
			project: {
				framework: "angular",
				projectTemplate: "test-template",
				projectType: "igx-ts"
			}
		} as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(config);

		const mockProject: Partial<ProjectTemplate> = {
			upgradeIgniteUIPackages: () => null
		};
		const mockProjLib: Partial<ProjectLibrary> = { getProject: () => null, hasProject: () => true };
		const mockTemplateManager: Partial<BaseTemplateManager> = { getProjectLibrary: () => null };
		upgradeCmd.templateManager = mockTemplateManager as any;
		spyOn(mockTemplateManager, "getProjectLibrary").and.returnValue(mockProjLib);
		spyOn(mockProjLib, "getProject").and.returnValue(mockProject);
		const upgradeIgniteUIPackagesSpy = spyOn(mockProject, "upgradeIgniteUIPackages");

		upgradeIgniteUIPackagesSpy.and.returnValue(Promise.resolve(true));
		await upgradeCmd.handler({ skipInstall: true, _: ["upgrade"], $0: "upgrade" });
		expect(mockTemplateManager.getProjectLibrary).toHaveBeenCalledTimes(1);
		expect(mockTemplateManager.getProjectLibrary)
			.toHaveBeenCalledWith(config.project.framework, config.project.projectType);
		expect(mockProjLib.getProject).toHaveBeenCalledWith(config.project.projectTemplate);
		expect(mockProject.upgradeIgniteUIPackages).toHaveBeenCalledTimes(1);
		expect(mockProject.upgradeIgniteUIPackages).toHaveBeenCalledWith(process.cwd(), "");
		expect(Util.execSync).not.toHaveBeenCalled();

		upgradeIgniteUIPackagesSpy.and.returnValue(Promise.resolve(false));
		await upgradeCmd.handler({ skipInstall: false, _: ["upgrade"], $0: "upgrade" });
		expect(mockProject.upgradeIgniteUIPackages).toHaveBeenCalledTimes(2);
		expect(Util.execSync).not.toHaveBeenCalled();

		upgradeIgniteUIPackagesSpy.and.returnValue(Promise.resolve(true));
		await upgradeCmd.handler({ skipInstall: false, _: ["upgrade"], $0: "upgrade" });
		expect(mockProject.upgradeIgniteUIPackages).toHaveBeenCalledTimes(3);
		expect(Util.execSync).toHaveBeenCalledWith("npm install --quiet");

		done();
	});

	it("Logs error for not supported framework", async done => {
		// tslint:disable-next-line: no-object-literal-type-assertion
		const config: Config = {
			project: {
				framework: "jquery"
			}
		} as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(config);

		await upgradeCmd.handler({ _: ["upgrade"], $0: "upgrade" });
		expect(Util.log).toHaveBeenCalledTimes(1);
		done();
	});
});
