
import { Config, FrameworkId, GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";
import { default as testCmd } from "../../packages/cli/lib/commands/test";

function createMockConfig(): Config {
    return {
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
}

describe("Unit - Test command", () => {
	beforeAll(() => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		spyOn(Util, "execSync");
	});

	it("Run tests for the current project", async done => {
		await testCmd.test({ skipAnalytics: true, _: ["test"], $0: "test" });
		expect (Util.execSync).toHaveBeenCalledWith("npm test", { stdio: "inherit" });

		done();
	});

	it("Run e2e tests for igx-ts Angular project type", async done => {
		const mockProjectConfig = createMockConfig();
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		await testCmd.test({ e2e: true, skipAnalytics: true, _: ["test"], $0: "test" });
		expect (Util.execSync).toHaveBeenCalledWith("npm run e2e", { stdio: "inherit" });

		done();
	});

	it("e2e command for ig-ts Angular project type runs test command instead", async done => {
		const mockProjectConfig = createMockConfig();
		mockProjectConfig.project.framework = "angular";
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		await testCmd.test({ e2e: true, skipAnalytics: true, _: ["test"], $0: "test" });
		expect (Util.execSync).toHaveBeenCalledWith("npm test", { stdio: "inherit" });

		done();
	});

	it("e2e command for jQuery project runs test command instead", async done => {
		const mockProjectConfig = createMockConfig();
		mockProjectConfig.project.framework = "jquery";
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		await testCmd.test({ e2e: true, skipAnalytics: true, _: ["test"], $0: "test" });
		expect (Util.execSync).toHaveBeenCalledWith("npm test", { stdio: "inherit" });

		done();
	});

	it("e2e command for React project runs test command instead", async done => {
		const mockProjectConfig = createMockConfig();
		mockProjectConfig.project.framework = "react";
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		await testCmd.test({ e2e: true, skipAnalytics: true, _: ["test"], $0: "test" });
		expect (Util.execSync).toHaveBeenCalledWith("npm test", { stdio: "inherit" });

		done();
	});
});
