import { ProjectConfig } from "@igniteui/cli-core";
import * as fs from "fs";
import * as os from "os";

describe("Unit - ProjectConfig", () => {
	it("hasLocalConfig returns correct values", async () => {
		const cwdSpy = spyOn(process, "cwd");
		spyOn(os, "homedir").and.returnValues("rootDir");
		spyOn(fs, "statSync").and.returnValue({
			isFile: () => true,
			isDirectory: () => false,
			isBlockDevice: () => false,
			isCharacterDevice: () => false,
			isSymbolicLink: () => false,
			isFIFO: () => false,
			isSocket: () => false,
			dev: 0,
			ino: 0,
			mode: 0,
			nlink: 0,
			uid: 0,
			gid: 0,
			rdev: 0,
			size: 0,
			blksize: 0,
			blocks: 0,
			atimeMs: 0,
			mtimeMs: 0,
			ctimeMs: 0,
			birthtimeMs: 0,
			atime: undefined,
			mtime: undefined,
			ctime: undefined,
			birthtime: undefined
		});

		// cwd matches homedir
		cwdSpy.and.returnValue("rootDir");
		expect(ProjectConfig.hasLocalConfig()).toBeFalsy();
		expect(fs.statSync).toHaveBeenCalledTimes(0);

		cwdSpy.and.returnValue("rootDir/somePath");
		expect(ProjectConfig.hasLocalConfig()).toBeTruthy();
		expect(fs.statSync).toHaveBeenCalledTimes(1);
	});
});
