import { Config, GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";
import { default as testCmd } from "../../packages/cli/lib/commands/test";

describe("Unit - Test command", () => {
	beforeAll(() => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		spyOn(Util, "execSync");
	});

	it("Run tests for the current project", async () => {
		await testCmd.test({ skipAnalytics: true, _: ["test"], $0: "test" });
		expect (Util.execSync).toHaveBeenCalledWith("npm test", { stdio: "inherit" });
	});

	it("Run e2e tests for igx-ts Angular project type", async () => {
		const mockProjectConfig = {
			project: {
				framework: "angular",
				projectType: "igx-ts"
			}
		} as unknown as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		await testCmd.test({ e2e: true, skipAnalytics: true, _: ["test"], $0: "test" });
		expect (Util.execSync).toHaveBeenCalledWith("npm run e2e", { stdio: "inherit" });
	});

	it("e2e command for ig-ts Angular project type runs test command instead", async () => {
		const mockProjectConfig = {
			project: {
			  framework: "angular",
			  projectType: "ig-ts"
		    }
		 } as unknown as Config;
		mockProjectConfig.project.framework = "angular";
		mockProjectConfig.project.projectType = "ig-ts";
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		await testCmd.test({ e2e: true, skipAnalytics: true, _: ["test"], $0: "test" });
		expect (Util.execSync).toHaveBeenCalledWith("npm test", { stdio: "inherit" });
	});

	it("e2e command for jQuery project runs test command instead", async () => {
		const mockProjectConfig = {
			project: {
				framework: "jquery"
			}
		 } as unknown as Config;
		mockProjectConfig.project.framework = "jquery";
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		await testCmd.test({ e2e: true, skipAnalytics: true, _: ["test"], $0: "test" });
		expect (Util.execSync).toHaveBeenCalledWith("npm test", { stdio: "inherit" });
	});

	it("e2e command for React project runs test command instead", async () => {
		const mockProjectConfig = {
			project: {
				framework: "react"
			}
		 } as unknown as Config;
		mockProjectConfig.project.framework = "react";
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		await testCmd.test({ e2e: true, skipAnalytics: true, _: ["test"], $0: "test" });
		expect (Util.execSync).toHaveBeenCalledWith("npm test", { stdio: "inherit" });
	});
});
