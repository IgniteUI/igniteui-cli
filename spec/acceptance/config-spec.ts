import { GoogleAnalytics, GoogleAnalyticsParameters } from "@igniteui/cli-core";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as cli from "../../packages/cli/lib/cli";
import { deleteAll, resetSpy } from "../helpers/utils";

describe("Config command", () => {
	let testFolder = path.parse(__filename).name;

	// tslint:disable:no-console
	beforeEach(() => {
		spyOn(console, "log");
		spyOn(console, "error");
		spyOn(GoogleAnalytics, "post");

		// test folder, w/ existing check:
		while (fs.existsSync(`./output/${testFolder}`)) {
			testFolder += 1;
		}
		fs.mkdirSync(`./output/${testFolder}`);
		process.chdir(`./output/${testFolder}`);

		// ~/.global/ homedir for global files:
		fs.mkdirSync(`.global`);
		spyOn(os, "homedir").and.returnValue(path.join(process.cwd(), ".global"));
	});

	afterEach(() => {
		// clean test folder:
		process.chdir("../../");
		deleteAll(`./output/${testFolder}`);
		fs.rmdirSync(`./output/${testFolder}`);
	});

	it("Should not work without a project & global flag", async () => {
		await cli.run(["config", "get", "igPackageRegistry"]);
		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/No configuration file found in this folder!\s*/));

		let expectedParams: GoogleAnalyticsParameters = {
			t: "screenview",
			cd: "Config"
		};
		expect(GoogleAnalytics.post).toHaveBeenCalledWith(expectedParams);

		expectedParams = {
			t: "screenview",
			cd: "error: No configuration file found in this folder!"
		};
		expect(GoogleAnalytics.post).toHaveBeenCalledWith(expectedParams);
		expect(GoogleAnalytics.post).toHaveBeenCalledTimes(2);

		resetSpy(console.error);
		await cli.run(["config", "set", "igPackageRegistry", "maybe"]);
		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/No configuration file found in this folder!\s*/));

		resetSpy(console.error);
		await cli.run(["config", "add", "igPackageRegistry", "maybe"]);
		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/No configuration file found in this folder!\s*/));
		expect(console.log).toHaveBeenCalledTimes(0);
	});

	it("Should correctly read and update global values", async () => {
		await cli.run(["config", "get", "igPackageRegistry", "--global"]);
		expect(console.log).toHaveBeenCalledWith(
			jasmine.stringMatching("https://packages.infragistics.com/npm/js-licensed/")
		);

		resetSpy(console.log);
		await cli.run(["config", "set", "igPackageRegistry", "https://example.com", "--global"]);
		expect(console.log).toHaveBeenCalledWith(`Property "igPackageRegistry" set.`);
		expect(fs.existsSync("./.global/ignite-ui-cli.json")).toBeTruthy("Global config file not created");
		const test: any = { igPackageRegistry: "https://example.com" };
		expect(JSON.parse(fs.readFileSync("./.global/ignite-ui-cli.json", "utf-8"))).toEqual(test);
		await cli.run(["config", "get", "igPackageRegistry", "--global"]);
		expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching("https://example.com"));

		expect(console.error).toHaveBeenCalledTimes(0);
	});

	it("Should correctly read and update local values", async () => {
		fs.writeFileSync("ignite-ui-cli.json", JSON.stringify({ igPackageRegistry: "https://example.com" }));
		await cli.run(["config", "get", "igPackageRegistry", "--global"]);
		expect(console.log).toHaveBeenCalledWith(
			jasmine.stringMatching("https://packages.infragistics.com/npm/js-licensed/")
		);
		await cli.run(["config", "get", "igPackageRegistry"]);
		expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching("https://example.com"));
		await cli.run(["config", "get", "customTemplates"]);
		expect(console.log).toHaveBeenCalledWith([]);
		resetSpy(console.log);

		resetSpy(console.log);
		await cli.run(["config", "add", "customTemplates", "path:C:\\Test"]);
		expect(console.log).toHaveBeenCalledWith(`Property "customTemplates" updated.`);
		expect(fs.existsSync("./.global/ignite-ui-cli.json")).toBeFalsy();
		const test: any = { igPackageRegistry: "https://example.com", customTemplates: ["path:C:\\Test"] };
		expect(JSON.parse(fs.readFileSync("ignite-ui-cli.json", "utf-8"))).toEqual(test);
		await cli.run(["config", "get", "customTemplates"]);
		expect(console.log).toHaveBeenCalledWith(["path:C:\\Test"]);

		expect(console.error).toHaveBeenCalledTimes(0);
	});
});
