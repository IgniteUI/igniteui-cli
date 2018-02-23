
import * as fs from "fs-extra";
import * as path from "path";
import quickstart, { default as quickstartCmd } from "../../lib/commands/quickstart";
import { ProjectConfig } from "../../lib/ProjectConfig";
import { PromptSession } from "../../lib/PromptSession";
import { Util } from "../../lib/Util";
import { resetSpy } from "../helpers/utils";

describe("Unit - Quickstart command", () => {

	fit("Creates quickstart for the specified framework", async done => {
		spyOn(Util, "log");
		spyOn(Util, "directoryExists").and.returnValue(true);
		spyOn(Util, "processTemplates");
		spyOn(process, "chdir");

		await quickstartCmd.execute({ name: "specified framework", framework: "angular"});

		const outDir = path.join(process.cwd(), "angular-quickstart");
		const quickStartFiles = path.join(__dirname, "../../templates/quickstart", "angular");
		expect(Util.processTemplates).toHaveBeenCalledWith(quickStartFiles, outDir, {}, {});

		expect(Util.log).toHaveBeenCalledWith("Quick Start!");
		expect(Util.log).toHaveBeenCalledWith("angular-quickstart loaded");
		expect(Util.log).toHaveBeenCalledTimes(2);
		done();
	});
});
