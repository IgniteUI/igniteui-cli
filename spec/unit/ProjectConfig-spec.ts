import * as fs from "fs";
import * as os from "os";
import { ProjectConfig } from "@igniteui-cli/core";

describe("Unit - ProjectConfig", () => {
	it("hasLocalConfig returns correct values", async done => {

		const cwdSpy = spyOn(process, "cwd");
		spyOn(os, "homedir").and.returnValues("rootDir");
		spyOn(fs, "existsSync").and.returnValue(true);

		// cwd matches homedir
		cwdSpy.and.returnValue("rootDir");
		expect(ProjectConfig.hasLocalConfig()).toBeFalsy();
		expect(fs.existsSync).toHaveBeenCalledTimes(0);

		cwdSpy.and.returnValue("rootDir/somePath");
		expect(ProjectConfig.hasLocalConfig()).toBeTruthy();
		expect(fs.existsSync).toHaveBeenCalledTimes(1);

		done();
	});
});
