import { GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";
import { default as configCmd } from "../../packages/cli/lib/commands/config";

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
			spyOn(Util, "error");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({ notTest: "ig" });

			await configCmd.getHandler({ property: "test", _: ["config"], $0: "config" });
			expect(ProjectConfig.getConfig).toHaveBeenCalledWith(undefined);
			expect(Util.error).toHaveBeenCalledWith(`No value found for "test" property`, "red");
			done();
		});

		it("Should show error for missing prop and global flag", async done => {
			spyOn(Util, "error");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({ notTest: "ig" });

			await configCmd.getHandler({ property: "test", global: true, _: ["config"], $0: "config" });
			expect(ProjectConfig.getConfig).toHaveBeenCalledWith(true);
			expect(Util.error).toHaveBeenCalledWith(`No value found for "test" property`, "red");
			done();
		});

		it("Should return value for property", async done => {
			spyOn(Util, "log");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({ test: "igValue" });

			await configCmd.getHandler({ property: "test", _: ["config"], $0: "config" });
			expect(ProjectConfig.getConfig).toHaveBeenCalledWith(undefined);
			expect(Util.log).toHaveBeenCalledWith("igValue");
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
			spyOn(ProjectConfig, "globalConfig").and.returnValue({ booleanProperty: true });

			await configCmd.setHandler({ property: "booleanProperty", value: "non boolean value", global: true, _: ["config"], $0: "config" });

			expect(Util.error).toHaveBeenCalledTimes(1);
			expect(Util.error).toHaveBeenCalledWith("Invalid value provided for booleanProperty property", "red");
			expect(Util.log).toHaveBeenCalledTimes(0);
			done();
		});

		it("Should show error when invalid value type provided", async done => {
			spyOn(ProjectConfig, "globalConfig").and.returnValue({ booleanProperty: true });

			await configCmd.setHandler({ property: "booleanProperty", value: '{ "object-Value": "for boolean"}', global: true, _: ["config"], $0: "config" });

			expect(Util.error).toHaveBeenCalledTimes(1);
			expect(Util.error).toHaveBeenCalledWith(
				"Invalid value type provided for booleanProperty property\nValue should be of type boolean", "red");
			expect(Util.log).toHaveBeenCalledTimes(0);
			done();
		});

		it("Should show error for array property", async done => {
			spyOn(ProjectConfig, "globalConfig").and.returnValue({ arrayProperty: [] });

			// tslint:disable-next-line:quotemark
			await configCmd.setHandler({ property: "arrayProperty", value: '["Not", "empty", "array"]', global: true, _: ["config"], $0: "config" });

			expect(Util.error).toHaveBeenCalledTimes(1);
			expect(Util.error).toHaveBeenCalledWith("Provided value should be an empty array for arrayProperty property", "red");
			expect(Util.log).toHaveBeenCalledTimes(0);
			done();
		});

		it("Should reset array property when empty array is provided", async done => {
			spyOn(ProjectConfig, "globalConfig").and.returnValue({ arrayProperty: ["Some value", "More values"] });
			spyOn(ProjectConfig, "setConfig");

			await configCmd.setHandler({ property: "arrayProperty", value: "[]", global: true, _: ["config"], $0: "config" });

			expect(Util.error).toHaveBeenCalledTimes(0);
			expect(Util.log).toHaveBeenCalledTimes(1);
			expect(Util.log).toHaveBeenCalledWith("Property \"arrayProperty\" set.");
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith({ arrayProperty: [] }, true /*global*/);
			done();
		});

		it("Should set global prop", async done => {
			spyOn(ProjectConfig, "hasLocalConfig");
			spyOn(ProjectConfig, "globalConfig").and.returnValue({ stringProperty: "ig" });
			spyOn(ProjectConfig, "localConfig");
			spyOn(ProjectConfig, "setConfig");

			await configCmd.setHandler({ property: "stringProperty", value: true, global: true, _: ["config"], $0: "config" });

			expect(ProjectConfig.hasLocalConfig).toHaveBeenCalledTimes(0);
			expect(ProjectConfig.localConfig).toHaveBeenCalledTimes(0);
			expect(ProjectConfig.globalConfig).toHaveBeenCalled();
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith({ stringProperty: true }, true /*global*/);
			expect(Util.log).toHaveBeenCalledWith(`Property "stringProperty" set.`);
			done();
		});

		it("Should set local prop", async done => {
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "localConfig").and.returnValue({ stringProperty: "ig" });
			spyOn(ProjectConfig, "globalConfig");
			spyOn(ProjectConfig, "setConfig");

			await configCmd.setHandler({ property: "booleanProperty", value: true, _: ["config"], $0: "config" });
			expect(ProjectConfig.globalConfig).toHaveBeenCalledTimes(0);
			expect(ProjectConfig.localConfig).toHaveBeenCalled();
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith({ stringProperty: "ig", booleanProperty: true }, undefined);
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
			spyOn(Util, "error");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "localConfig").and.returnValue({ test: "notArray" });

			await configCmd.addHandler({ property: "test", value: "", _: ["config"], $0: "config" });
			expect(Util.error).toHaveBeenCalledWith(
				`Configuration property "test" is not an array, use config set instead.`,
				"red");
			done();
		});

		it("Should skip existing", async done => {
			spyOn(Util, "log");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "localConfig").and.returnValue({ test: ["existing"] });

			await configCmd.addHandler({ property: "test", value: "existing", _: ["config"], $0: "config" });
			expect(Util.log).toHaveBeenCalledWith(`Value already exists in "test".`);
			done();
		});

		it("Should create/add to global prop", async done => {
			spyOn(Util, "log");
			spyOn(ProjectConfig, "globalConfig").and.returnValue({ });
			spyOn(ProjectConfig, "setConfig");

			await configCmd.addHandler({ property: "test", value: "one", global: true, _: ["config"], $0: "config" });
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith({ test: ["one"] }, true);
			expect(Util.log).toHaveBeenCalledWith(`Property "test" updated.`);

			await configCmd.addHandler({ property: "test", value: "two", global: true, _: ["config"], $0: "config" });
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith({ test: ["one", "two"] }, true);
			expect(Util.log).toHaveBeenCalledWith(`Property "test" updated.`);
			done();
		});

		it("Should add to local prop", async done => {
			spyOn(Util, "log");
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "localConfig").and.returnValue({ test: [] });
			spyOn(ProjectConfig, "setConfig");

			await configCmd.addHandler({ property: "test", value: "first", _: ["config"], $0: "config" });
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith({ test: ["first"] }, undefined);
			expect(Util.log).toHaveBeenCalledWith(`Property "test" updated.`);
			done();
		});
	});
});
