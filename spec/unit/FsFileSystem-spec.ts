import * as fs from "fs";
import * as glob from "glob";
import { FsFileSystem } from "../../packages/core/util/FileSystem";

describe("Unit - FsFileSystem", () => {
	let fileSystem: FsFileSystem;

	beforeEach(() => {
		fileSystem = new FsFileSystem();
	});

	describe("writeFile", () => {
		it("should create parent directories when they do not exist", () => {
			spyOn(fs, "existsSync").and.returnValue(false);
			spyOn(fs, "mkdirSync");
			spyOn(fs, "writeFileSync");

			fileSystem.writeFile("/some/new/dir/file.json", "content");

			expect(fs.mkdirSync).toHaveBeenCalledWith("/some/new/dir", { recursive: true });
			expect(fs.writeFileSync).toHaveBeenCalledWith("/some/new/dir/file.json", "content");
		});

		it("should skip mkdir when parent directory already exists", () => {
			spyOn(fs, "existsSync").and.returnValue(true);
			spyOn(fs, "mkdirSync");
			spyOn(fs, "writeFileSync");

			fileSystem.writeFile("/existing/dir/file.json", "content");

			expect(fs.mkdirSync).not.toHaveBeenCalled();
			expect(fs.writeFileSync).toHaveBeenCalledWith("/existing/dir/file.json", "content");
		});
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
