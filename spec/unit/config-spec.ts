import { Config, FrameworkId, GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";
import { default as configCmd } from "../../packages/cli/lib/commands/config";

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

describe("Unit - Config command", () => {
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	describe("Get", () => {
		it("Should show error w/o existing project and global flag", async done => {
			spyOn(Util, "error");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

			await configCmd.getHandler({ property: "test", _: ["config"], $0: "config" });
			expect(Util.error).toHaveBeenCalledWith("No configuration file found in this folder!", "red");
			done();
		});

		it("Should show error for missing prop", async done => {
			const mockProjectConfig = createMockConfig();
			spyOn(Util, "error");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

			await configCmd.getHandler({ property: "test", _: ["config"], $0: "config" });
			expect(ProjectConfig.getConfig).toHaveBeenCalledWith(undefined);
			expect(Util.error).toHaveBeenCalledWith(`No value found for "test" property`, "red");
			done();
		});

		it("Should show error for missing prop and global flag", async done => {
			const mockProjectConfig = createMockConfig();
			spyOn(Util, "error");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

			await configCmd.getHandler({ property: "test", global: true, _: ["config"], $0: "config" });
			expect(ProjectConfig.getConfig).toHaveBeenCalledWith(true);
			expect(Util.error).toHaveBeenCalledWith(`No value found for "test" property`, "red");
			done();
		});

		it("Should return value for property", async done => {
			const mockProjectConfig = createMockConfig();
			spyOn(Util, "log");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

			await configCmd.getHandler({ property: "version", _: ["config"], $0: "config" });
			expect(ProjectConfig.getConfig).toHaveBeenCalledWith(undefined);
			expect(Util.log).toHaveBeenCalledWith("1.0.0");
			done();
		});
	});

	describe("Set", () => {
		beforeEach(() => {
			spyOn(Util, "log");
			spyOn(Util, "error");
			spyOn(ProjectConfig, "getSchema").and.returnValue(
				{
					properties: {
						arrayProperty: {
							items: {
								type: "string"
							},
							type: "array"
						},
						booleanProperty: {
							type: "boolean"
						},
						stringProperty: {
							type: "string"
						}
					},
					type: "object"
				}
			);
		});

		it("Should show error w/o existing project and global flag", async done => {
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

			await configCmd.setHandler({ property: "test", value: true, _: ["config"], $0: "config" });
			expect(Util.error).toHaveBeenCalledWith("No configuration file found in this folder!", "red");
			done();
		});

		it("Should show error when invalid value provided", async done => {
			const mockProjectConfig = createMockConfig();
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockProjectConfig);

			await configCmd.setHandler({ property: "packagesInstalled", value: "non boolean value", global: true, _: ["config"], $0: "config" });

			expect(Util.error).toHaveBeenCalledTimes(1);
			expect(Util.error).toHaveBeenCalledWith("Invalid value provided for packagesInstalled property", "red");
			expect(Util.log).toHaveBeenCalledTimes(0);
			done();
		});

		it("Should show error when invalid value type provided", async done => {
			const mockProjectConfig = createMockConfig();
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockProjectConfig);

			await configCmd.setHandler({ property: "packagesInstalled", value: '{ "object-Value": "for boolean"}', global: true, _: ["config"], $0: "config" });

			expect(Util.error).toHaveBeenCalledTimes(1);
			expect(Util.error).toHaveBeenCalledWith(
				"Invalid value type provided for packagesInstalled property\nValue should be of type boolean", "red");
			expect(Util.log).toHaveBeenCalledTimes(0);
			done();
		});

		it("Should show error for array property", async done => {
			const mockProjectConfig = createMockConfig();
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockProjectConfig);

			// tslint:disable-next-line:quotemark
			await configCmd.setHandler({ property: "customTemplates", value: '["Not", "empty", "array"]', global: true, _: ["config"], $0: "config" });

			expect(Util.error).toHaveBeenCalledTimes(1);
			expect(Util.error).toHaveBeenCalledWith("Provided value should be an empty array for customTemplates property", "red");
			expect(Util.log).toHaveBeenCalledTimes(0);
			done();
		});

		it("Should reset array property when empty array is provided", async done => {
			const mockProjectConfig = createMockConfig();
			mockProjectConfig.customTemplates = ["Some value", "More values"];
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockProjectConfig);
			spyOn(ProjectConfig, "setConfig");

			await configCmd.setHandler({ property: "customTemplates", value: "[]", global: true, _: ["config"], $0: "config" });

			expect(Util.error).toHaveBeenCalledTimes(0);
			expect(Util.log).toHaveBeenCalledTimes(1);
			expect(Util.log).toHaveBeenCalledWith("Property \"customTemplates\" set.");
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith(mockProjectConfig, true /*global*/);
			done();
		});

		it("Should set global prop", async done => {
			const mockProjectConfig = createMockConfig();
			spyOn(ProjectConfig, "hasLocalConfig");
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockProjectConfig);
			spyOn(ProjectConfig, "localConfig");
			spyOn(ProjectConfig, "setConfig");

			await configCmd.setHandler({ property: "igPackageRegistry", value: true, global: true, _: ["config"], $0: "config" });

			expect(ProjectConfig.hasLocalConfig).toHaveBeenCalledTimes(0);
			expect(ProjectConfig.localConfig).toHaveBeenCalledTimes(0);
			expect(ProjectConfig.globalConfig).toHaveBeenCalled();
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith(mockProjectConfig, true /*global*/);
			expect(Util.log).toHaveBeenCalledWith(`Property "stringProperty" set.`);
			done();
		});

		it("Should set local prop", async done => {
			const mockProjectConfig = createMockConfig();
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "localConfig").and.returnValue(mockProjectConfig);
			spyOn(ProjectConfig, "globalConfig");
			spyOn(ProjectConfig, "setConfig");

			await configCmd.setHandler({ property: "packagesInstalled", value: true, _: ["config"], $0: "config" });
			expect(ProjectConfig.globalConfig).toHaveBeenCalledTimes(0);
			expect(ProjectConfig.localConfig).toHaveBeenCalled();
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith(mockProjectConfig, undefined);
			expect(Util.log).toHaveBeenCalledWith(`Property "booleanProperty" set.`);
			done();
		});
	});

	describe("Add", () => {
		it("Should show error w/o existing project and global flag", async done => {
			spyOn(Util, "error");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

			await configCmd.addHandler({ property: "test", value: true, _: ["config"], $0: "config" });
			expect(Util.error).toHaveBeenCalledWith("No configuration file found in this folder!", "red");
			done();
		});

		it("Should show error for non-array property", async done => {
			const mockProjectConfig = createMockConfig();
			spyOn(Util, "error");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "localConfig").and.returnValue(mockProjectConfig);

			await configCmd.addHandler({ property: "version", value: "", _: ["config"], $0: "config" });
			expect(Util.error).toHaveBeenCalledWith(
				`Configuration property "version" is not an array, use config set instead.`,
				"red");
			done();
		});

		it("Should skip existing", async done => {
			const mockProjectConfig = createMockConfig();
			mockProjectConfig.customTemplates = ["existing"];
			spyOn(Util, "log");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "localConfig").and.returnValue(mockProjectConfig);

			await configCmd.addHandler({ property: "customTemplates", value: "existing", _: ["config"], $0: "config" });
			expect(Util.log).toHaveBeenCalledWith(`Value already exists in "customTemplates".`);
			done();
		});

		it("Should create/add to global prop", async done => {
			const mockProjectConfig = createMockConfig();
			spyOn(Util, "log");
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockProjectConfig);
			spyOn(ProjectConfig, "setConfig");

			await configCmd.addHandler({ property: "customTemplates", value: "one", global: true, _: ["config"], $0: "config" });
			mockProjectConfig.customTemplates = ["one"];
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith(mockProjectConfig, true);
			expect(Util.log).toHaveBeenCalledWith(`Property "customTemplates" updated.`);

			await configCmd.addHandler({ property: "customTemplates", value: "two", global: true, _: ["config"], $0: "config" });
			mockProjectConfig.customTemplates = ["one", "two"];
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith(mockProjectConfig, true);
			expect(Util.log).toHaveBeenCalledWith(`Property "customTemplates" updated.`);
			done();
		});

		it("Should add to local prop", async done => {
			const mockProjectConfig = createMockConfig();
			spyOn(Util, "log");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "localConfig").and.returnValue(mockProjectConfig);
			spyOn(ProjectConfig, "setConfig");

			await configCmd.addHandler({ property: "customTemplates", value: "first", _: ["config"], $0: "config" });
			mockProjectConfig.customTemplates = ["first"]
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith(mockProjectConfig, undefined);
			expect(Util.log).toHaveBeenCalledWith(`Property "customTemplates" updated.`);
			done();
		});
	});
});
