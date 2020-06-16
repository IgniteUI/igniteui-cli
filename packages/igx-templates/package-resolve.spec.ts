import { App, FS_TOKEN, IFileSystem } from "@igniteui/cli-core";
import { FEED_PACKAGE, getUpgradeablePackages, NPM_PACKAGE, resolveIgxPackage, UPGRADEABLE_PACKAGES } from "./package-resolve";

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

describe("package resolve", () => {
	describe("resolveIgxPackage", () => {
		it("should return npm package as fallback", () => {
			const mockFs = new MockFileSystem();
			spyOn(mockFs, "fileExists").and.returnValue(false);
			App.container.set(FS_TOKEN, mockFs);

			const result = resolveIgxPackage();
			expect(result).toEqual(NPM_PACKAGE);
			expect(mockFs.fileExists).toHaveBeenCalledWith("./package.json");
		});

		it("should return npm package if feed package in not in project", () => {
			const mockFs = new MockFileSystem();
			spyOn(mockFs, "fileExists").and.returnValue(true);
			spyOn(mockFs, "readFile").and.returnValue(`{ "dependencies": { "${NPM_PACKAGE}": "*" } }`);
			App.container.set(FS_TOKEN, mockFs);

			const result = resolveIgxPackage();
			expect(result).toEqual(NPM_PACKAGE);
			expect(mockFs.fileExists).toHaveBeenCalledWith("./package.json");
			expect(mockFs.readFile).toHaveBeenCalledWith("./package.json");
		});

		it("should return feed package if installed in project", () => {
			const mockFs = new MockFileSystem();
			spyOn(mockFs, "fileExists").and.returnValue(true);
			spyOn(mockFs, "readFile").and.returnValue(`{ "dependencies": { "${FEED_PACKAGE}": "*" } }`);
			App.container.set(FS_TOKEN, mockFs);

			const result = resolveIgxPackage();
			expect(result).toEqual(FEED_PACKAGE);
			expect(mockFs.fileExists).toHaveBeenCalledWith("./package.json");
			expect(mockFs.readFile).toHaveBeenCalledWith("./package.json");
		});
	});

	describe("getUpgradeablePackages", () => {
		it("should return an empty array if there are no upgradeable packages", () => {
			const mockFs = new MockFileSystem();
			const existsSpy = spyOn(mockFs, "fileExists").and.returnValue(false);
			App.container.set(FS_TOKEN, mockFs);

			expect(getUpgradeablePackages()).toEqual([]);
			existsSpy.and.returnValue(true);
			spyOn(mockFs, "readFile").and.returnValue(JSON.stringify({
				dependencies: {
					"@infragistics/igniteui-angular": "0.1.0",
					"igniteui-bait": "^9.0.1",
					"totally-not-a-crypto-miner": "^0.91"
				}
			}));

			expect(getUpgradeablePackages()).toEqual([]);
		});

		it("should return an array if containing ONLY upgradeable packages", () => {
			const mockFs = new MockFileSystem();
			const existsSpy = spyOn(mockFs, "fileExists").and.returnValue(false);
			App.container.set(FS_TOKEN, mockFs);

			expect(getUpgradeablePackages()).toEqual([]);
			existsSpy.and.returnValue(true);
			const mockObj: { dependencies: { [key: string]: string } } = {
				dependencies: {
					"@infragistics/igniteui-angular": "0.1.0",
					"igniteui-angular": "^9.0.1",
					"totally-not-a-crypto-miner": "^0.91"
				}
			};
			const mockRead = spyOn(mockFs, "readFile").and.returnValue(JSON.stringify(mockObj));
			expect(getUpgradeablePackages()).toEqual([UPGRADEABLE_PACKAGES[0]]);
			mockObj.dependencies = {
				"igniteui-angular": "^9.0.1",
				"igniteui-dockmanager": "0.1.0",
				"totally-not-a-crypto-miner": "^0.91"
			};
			mockRead.and.returnValue(JSON.stringify(mockObj));
			expect(getUpgradeablePackages()).toEqual([UPGRADEABLE_PACKAGES[0], UPGRADEABLE_PACKAGES[1]]);
		});
	});
});
