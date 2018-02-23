import cli = require("../../lib/cli");
import { ProjectConfig } from "../../lib/ProjectConfig";
import { Util } from "../../lib/Util";

describe("Unit - Generate command", () => {

	it("Should generate template with default values", async done => {
		spyOn(Util, "error");
		spyOn(Util, "log");
		spyOn(Util, "processTemplates").and.returnValue(new Promise<boolean>((res, rej) => { res(true); }));
		spyOn(ProjectConfig, "globalConfig").and.returnValue({});

		await cli.run(["generate", "template"]);

		expect(Util.error).toHaveBeenCalledTimes(0);
		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(Util.log).toHaveBeenCalledWith(
			"Starting generation of template with project name: custom-template, framework: jquery, type: js");
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
		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(Util.log).toHaveBeenCalledWith(
			"Starting generation of template with project name: some-name, framework: angular, type: igx-ts");
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
