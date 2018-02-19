
import { utimes } from "fs-extra";
import cli = require("../../lib/cli");
import { Util } from "../../lib/Util";
import { resetSpy } from "../helpers/utils";

describe("Generate command", () => {

	it("Should generate template when provided correct values", async done => {
		spyOn(Util, "log");
		spyOn(Util, "error");
		spyOn(Util, "isAlphanumericExt").and.returnValue(true);
		spyOn(Util, "directoryExists").and.returnValue(false);
		spyOn(Util, "processTemplates");

		await cli.run(["generate", "template"]);

		expect(Util.isAlphanumericExt).toHaveBeenCalledTimes(1);
		expect(Util.directoryExists).toHaveBeenCalled();
		expect(Util.processTemplates).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledTimes(0);
		expect(Util.log).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledWith("Project Name: custom-template, framework: jquery, type: js");
		expect(Util.processTemplates).toHaveBeenCalledWith(
			jasmine.any(String),
			jasmine.any(String),
			{
				"$(name)": "custom-template",
				"$(framework)": "jquery",
				"$(type)": "js",
				"__name__": "custom-template",
				"$(ClassName)": "CustomTemplate"
			},
			null);

		done();
	});
});
