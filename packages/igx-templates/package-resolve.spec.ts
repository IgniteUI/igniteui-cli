import { App, FS_TOKEN, IFileSystem } from "@igniteui/cli-core";
import { FEED_PACKAGE, NPM_PACKAGE, resolvePackage } from "./package-resolve";

class MockFileSystem implements IFileSystem {
	public fileExists(filePath: string): boolean {
		throw new Error("Method not implemented.");
	}
	public readFile(filePath: string, encoding?: string): string {
		throw new Error("Method not implemented.");
	}
	public writeFile(filePath: string, text: string): void {
		throw new Error("Method not implemented.");
	}
	public directoryExists(dirPath: string): boolean {
		throw new Error("Method not implemented.");
	}
	public glob(dirPath: string, pattern: string): string[] {
		throw new Error("Method not implemented.");
	}
}

describe("cli-config schematic", () => {
	it("should return npm package as fallback", () => {
		const mockFs = new MockFileSystem();
		spyOn(mockFs, "fileExists").and.returnValue(false);
		App.container.set(FS_TOKEN, mockFs);

		const result = resolvePackage();
		expect(result).toEqual(NPM_PACKAGE);
		expect(mockFs.fileExists).toHaveBeenCalledWith("./package.json");
	});

	it("should return npm package if feed package in not in project", () => {
		const mockFs = new MockFileSystem();
		spyOn(mockFs, "fileExists").and.returnValue(true);
		spyOn(mockFs, "readFile").and.returnValue(`{ "dependencies": { "${NPM_PACKAGE}": "*" } }`);
		App.container.set(FS_TOKEN, mockFs);

		const result = resolvePackage();
		expect(result).toEqual(NPM_PACKAGE);
		expect(mockFs.fileExists).toHaveBeenCalledWith("./package.json");
		expect(mockFs.readFile).toHaveBeenCalledWith("./package.json");
	});

	it("should return feed package if installed in project", () => {
		const mockFs = new MockFileSystem();
		spyOn(mockFs, "fileExists").and.returnValue(true);
		spyOn(mockFs, "readFile").and.returnValue(`{ "dependencies": { "${FEED_PACKAGE}": "*" } }`);
		App.container.set(FS_TOKEN, mockFs);

		const result = resolvePackage();
		expect(result).toEqual(FEED_PACKAGE);
		expect(mockFs.fileExists).toHaveBeenCalledWith("./package.json");
		expect(mockFs.readFile).toHaveBeenCalledWith("./package.json");
	});
});
