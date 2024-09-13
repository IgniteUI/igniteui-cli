import { Config, GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";
import { default as configCmd } from "../../packages/cli/lib/commands/config";

describe("Unit - Config command", () => {
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	describe("Get", () => {
		it("Should show error w/o existing project and global flag", async () => {
			spyOn(Util, "error");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

			await configCmd.getHandler({ property: "test", _: ["config"], $0: "config" });
			expect(Util.error).toHaveBeenCalledWith("No configuration file found in this folder!", "red");
		});

		it("Should show error for missing prop", async () => {
			const mockProjectConfig = { } as unknown as Config;
			spyOn(Util, "error");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

			await configCmd.getHandler({ property: "test", _: ["config"], $0: "config" });
			expect(ProjectConfig.getConfig).toHaveBeenCalledWith(undefined);
			expect(Util.error).toHaveBeenCalledWith(`No value found for "test" property`, "red");
		});

		it("Should show error for missing prop and global flag", async () => {
			const mockProjectConfig = { } as unknown as Config;
			spyOn(Util, "error");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

			await configCmd.getHandler({ property: "test", global: true, _: ["config"], $0: "config" });
			expect(ProjectConfig.getConfig).toHaveBeenCalledWith(true);
			expect(Util.error).toHaveBeenCalledWith(`No value found for "test" property`, "red");
		});

		it("Should return value for property", async () => {
			const mockProjectConfig = { version: "1.0.0" } as unknown as Config;
			spyOn(Util, "log");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

			await configCmd.getHandler({ property: "version", _: ["config"], $0: "config" });
			expect(ProjectConfig.getConfig).toHaveBeenCalledWith(undefined);
			expect(Util.log).toHaveBeenCalledWith("1.0.0");
		});
	});

	describe("Set", () => {
		beforeEach(() => {
			spyOn(Util, "log");
			spyOn(Util, "error");
			spyOn(ProjectConfig, "getSchema").and.returnValue(
				{
					properties: {
						customTemplates: {
							items: {
								type: "string"
							},
							type: "array"
						},
						packagesInstalled: {
							type: "boolean"
						},
						igPackageRegistry: {
							type: "string"
						}
					},
					type: "object"
				}
			);
		});

		it("Should show error w/o existing project and global flag", async () => {
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

			await configCmd.setHandler({ property: "test", value: true, _: ["config"], $0: "config" });
			expect(Util.error).toHaveBeenCalledWith("No configuration file found in this folder!", "red");
		});

		it("Should show error when invalid value provided", async () => {
			const mockProjectConfig = { packagesInstalled: true } as unknown as Config;
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockProjectConfig);

			await configCmd.setHandler({ property: "packagesInstalled", value: "non boolean value", global: true, _: ["config"], $0: "config" });

			expect(Util.error).toHaveBeenCalledTimes(1);
			expect(Util.error).toHaveBeenCalledWith("Invalid value provided for packagesInstalled property", "red");
			expect(Util.log).toHaveBeenCalledTimes(0);
		});

		it("Should show error when invalid value type provided", async () => {
			const mockProjectConfig = { packagesInstalled: true } as unknown as Config;
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockProjectConfig);

			await configCmd.setHandler({ property: "packagesInstalled", value: '{ "object-Value": "for boolean"}', global: true, _: ["config"], $0: "config" });

			expect(Util.error).toHaveBeenCalledTimes(1);
			expect(Util.error).toHaveBeenCalledWith(
				"Invalid value type provided for packagesInstalled property\nValue should be of type boolean", "red");
			expect(Util.log).toHaveBeenCalledTimes(0);
		});

		it("Should show error for array property", async () => {
			const mockProjectConfig = { customTemplates: [] } as unknown as Config;
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockProjectConfig);

			// tslint:disable-next-line:quotemark
			await configCmd.setHandler({ property: "customTemplates", value: '["Not", "empty", "array"]', global: true, _: ["config"], $0: "config" });

			expect(Util.error).toHaveBeenCalledTimes(1);
			expect(Util.error).toHaveBeenCalledWith("Provided value should be an empty array for customTemplates property", "red");
			expect(Util.log).toHaveBeenCalledTimes(0);
		});

		it("Should reset array property when empty array is provided", async () => {
			const mockProjectConfig = { customTemplates: [] } as unknown as Config;
			mockProjectConfig.customTemplates = ["Some value", "More values"];
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockProjectConfig);
			spyOn(ProjectConfig, "setConfig");

			await configCmd.setHandler({ property: "customTemplates", value: "[]", global: true, _: ["config"], $0: "config" });

			expect(Util.error).toHaveBeenCalledTimes(0);
			expect(Util.log).toHaveBeenCalledTimes(1);
			expect(Util.log).toHaveBeenCalledWith("Property \"customTemplates\" set.");
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith(mockProjectConfig, true /*global*/);
		});

		it("Should set global prop", async () => {
			const mockProjectConfig = { igPackageRegistry: "https://example.com" } as unknown as Config;
			spyOn(ProjectConfig, "hasLocalConfig");
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockProjectConfig);
			spyOn(ProjectConfig, "localConfig");
			spyOn(ProjectConfig, "setConfig");

			await configCmd.setHandler({ property: "igPackageRegistry", value: true, global: true, _: ["config"], $0: "config" });

			expect(ProjectConfig.hasLocalConfig).toHaveBeenCalledTimes(0);
			expect(ProjectConfig.localConfig).toHaveBeenCalledTimes(0);
			expect(ProjectConfig.globalConfig).toHaveBeenCalled();
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith(mockProjectConfig, true /*global*/);
			expect(Util.log).toHaveBeenCalledWith(`Property "igPackageRegistry" set.`);
		});

		it("Should set local prop", async () => {
			const mockProjectConfig = { igPackageRegistry: "https://example.com" } as unknown as Config;
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "localConfig").and.returnValue(mockProjectConfig);
			spyOn(ProjectConfig, "globalConfig");
			spyOn(ProjectConfig, "setConfig");

			await configCmd.setHandler({ property: "packagesInstalled", value: true, _: ["config"], $0: "config" });
			expect(ProjectConfig.globalConfig).toHaveBeenCalledTimes(0);
			expect(ProjectConfig.localConfig).toHaveBeenCalled();
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith(mockProjectConfig, undefined);
			expect(Util.log).toHaveBeenCalledWith(`Property "packagesInstalled" set.`);
		});
	});

	describe("Add", () => {
		it("Should show error w/o existing project and global flag", async () => {
			spyOn(Util, "error");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

			await configCmd.addHandler({ property: "test", value: true, _: ["config"], $0: "config" });
			expect(Util.error).toHaveBeenCalledWith("No configuration file found in this folder!", "red");
		});

		it("Should show error for non-array property", async () => {
			const mockProjectConfig = { version: "1.0.0" } as unknown as Config;
			spyOn(Util, "error");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "localConfig").and.returnValue(mockProjectConfig);

			await configCmd.addHandler({ property: "version", value: "", _: ["config"], $0: "config" });
			expect(Util.error).toHaveBeenCalledWith(
				`Configuration property "version" is not an array, use config set instead.`,
				"red");
		});

		it("Should skip existing", async () => {
			const mockProjectConfig = { customTemplates: [] } as unknown as Config;
			mockProjectConfig.customTemplates = ["existing"];
			spyOn(Util, "log");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "localConfig").and.returnValue(mockProjectConfig);

			await configCmd.addHandler({ property: "customTemplates", value: "existing", _: ["config"], $0: "config" });
			expect(Util.log).toHaveBeenCalledWith(`Value already exists in "customTemplates".`);
		});

		it("Should create/add to global prop", async () => {
			const mockProjectConfig = { } as unknown as Config;
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
		});

		it("Should add to local prop", async () => {
			const mockProjectConfig = { customTemplates: [] } as unknown as Config;
			spyOn(Util, "log");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "localConfig").and.returnValue(mockProjectConfig);
			spyOn(ProjectConfig, "setConfig");

			await configCmd.addHandler({ property: "customTemplates", value: "first", _: ["config"], $0: "config" });
			mockProjectConfig.customTemplates = ["first"]
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith(mockProjectConfig, undefined);
			expect(Util.log).toHaveBeenCalledWith(`Property "customTemplates" updated.`);
		});
	});
});
