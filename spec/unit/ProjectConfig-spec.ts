import fs from "fs";
import os from "os";
import { ProjectConfig } from "@igniteui/cli-core";

describe("Unit - ProjectConfig", () => {
	it("hasLocalConfig returns correct values", async done => {
		const cwdSpy = spyOn(process, "cwd");
		spyOn(os, "homedir").and.returnValues("rootDir");
		spyOn(fs, "statSync").and.returnValue({ isFile: () => true });

		// cwd matches homedir
		cwdSpy.and.returnValue("rootDir");
		expect(ProjectConfig.hasLocalConfig()).toBeFalsy();
		expect(fs.statSync).toHaveBeenCalledTimes(0);

		cwdSpy.and.returnValue("rootDir/somePath");
		expect(ProjectConfig.hasLocalConfig()).toBeTruthy();
		expect(fs.statSync).toHaveBeenCalledTimes(1);

		done();
	});
});
