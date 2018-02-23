import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import cli = require("../../lib/cli");
import { ProjectConfig } from "../../lib/ProjectConfig";
import { Util } from "../../lib/Util";
import { deleteAll } from "../helpers/utils";

describe("Unit - Generate command", () => {
	let testFolder = path.parse(__filename).name;

	beforeEach(() => {
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
		process.chdir("../../");
		deleteAll(`./output/${testFolder}`);
		fs.rmdirSync(`./output/${testFolder}`);
	});

	it("Should generate template with default values", async done => {
		spyOn(Util, "error");
		spyOn(Util, "log");
		spyOn(Util, "processTemplates").and.returnValue(new Promise<boolean>((res, rej) => { res(true); }));
		spyOn(ProjectConfig, "globalConfig").and.returnValue({});

		await cli.run(["generate", "template"]);

		expect(Util.error).toHaveBeenCalledTimes(0);
		expect(Util.log).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledWith("Property \"customTemplates\" updated.");
		expect(Util.log).toHaveBeenCalledWith("Template generated successfully");
		expect(Util.processTemplates).toHaveBeenCalledWith(
			jasmine.any(String),
			jasmine.any(String),
			{
				"$(templateFramework)": "jquery",
				"$(templateName)": "custom-template",
				"$(templateType)": "js"
			},
			null);

		done();
	});

	it("Should generate template with custom values", async done => {
		spyOn(Util, "error");
		spyOn(Util, "log");
		spyOn(Util, "processTemplates").and.returnValue(new Promise<boolean>((res, rej) => { res(true); }));
		spyOn(ProjectConfig, "globalConfig").and.returnValue({});

		await cli.run(["generate", "template", "some-name", "-f=angular", "-t=igx-ts"]);

		expect(Util.error).toHaveBeenCalledTimes(0);
		expect(Util.log).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledWith("Property \"customTemplates\" updated.");
		expect(Util.log).toHaveBeenCalledWith("Template generated successfully");
		expect(Util.processTemplates).toHaveBeenCalledWith(
			jasmine.any(String),
			jasmine.any(String),
			{
				"$(templateFramework)": "angular",
				"$(templateName)": "some-name",
				"$(templateType)": "igx-ts"
			},
			null);

		done();
	});
});
