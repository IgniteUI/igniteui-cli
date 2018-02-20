import cli = require("../../lib/cli");
import { Util } from "../../lib/Util";

describe("Generate command", () => {

	it("Should generate template with default values", async done => {
		spyOn(Util, "error");
		spyOn(Util, "log");
		spyOn(Util, "processTemplates").and.returnValue(new Promise<boolean>((res, rej) => { res(false); }));

		await cli.run(["generate", "template"]);

		expect(Util.error).toHaveBeenCalledTimes(0);
		expect(Util.log).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledWith("Project Name: custom-template, framework: jquery, type: js");
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
		spyOn(Util, "processTemplates").and.returnValue(new Promise<boolean>((res, rej) => { res(false); }));

		await cli.run(["generate", "template", "some-name", "angular", "igx-ts"]);

		expect(Util.error).toHaveBeenCalledTimes(0);
		expect(Util.log).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledWith("Project Name: some-name, framework: angular, type: igx-ts");
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
