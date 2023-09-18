import { ProjectConfig } from "@igniteui/cli-core";
import * as fs from "fs";
import * as os from "os";

describe("Unit - ProjectConfig", () => {
	it("hasLocalConfig returns correct values", async () => {
		const cwdSpy = spyOn(process, "cwd");
		spyOn(os, "homedir").and.returnValues("rootDir");
		// tslint:disable:no-object-literal-type-assertion
		spyOn(fs, "statSync").and.returnValue({ isFile: () => true } as fs.Stats | fs.BigIntStats);

		// cwd matches homedir
		cwdSpy.and.returnValue("rootDir");
		expect(ProjectConfig.hasLocalConfig()).toBeFalsy();
		expect(fs.statSync).toHaveBeenCalledTimes(0);

		cwdSpy.and.returnValue("rootDir/somePath");
		expect(ProjectConfig.hasLocalConfig()).toBeTruthy();
		expect(fs.statSync).toHaveBeenCalledTimes(1);
	});
});
