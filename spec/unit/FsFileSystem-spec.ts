import * as glob from "glob";
import { FsFileSystem } from "../../packages/core/util/FileSystem";

describe("Unit - FsFileSystem", () => {
	let fileSystem: FsFileSystem;

	beforeEach(() => {
		fileSystem = new FsFileSystem();
	});

	describe("glob", () => {
		it("should pass a forward-slash pattern to glob even when dirPath uses backslashes", () => {
			spyOn(glob, "sync").and.returnValue([]);
			const windowsDirPath = "C:\\Work\\git\\project\\src";
			fileSystem.glob(windowsDirPath, "**/*.ts");
			expect(glob.sync).toHaveBeenCalledWith(
				"C:/Work/git/project/src/**/*.ts",
				jasmine.objectContaining({ nodir: true })
			);
		});

		it("should pass a forward-slash pattern to glob even when pattern contains backslashes", () => {
			spyOn(glob, "sync").and.returnValue([]);
			fileSystem.glob("C:\\Work\\project", "sub\\**\\*.ts");
			expect(glob.sync).toHaveBeenCalledWith(
				"C:/Work/project/sub/**/*.ts",
				jasmine.objectContaining({ nodir: true })
			);
		});

		it("should work correctly with forward-slash paths (non-Windows)", () => {
			spyOn(glob, "sync").and.returnValue([
				"/home/user/project/src/app.ts"
			] as any);
			const result = fileSystem.glob("/home/user/project", "src/**/*.ts");
			expect(glob.sync).toHaveBeenCalledWith(
				"/home/user/project/src/**/*.ts",
				jasmine.objectContaining({ nodir: true })
			);
			expect(result).toEqual(["/home/user/project/src/app.ts"]);
		});
	});
});
