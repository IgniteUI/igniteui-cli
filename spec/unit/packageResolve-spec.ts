import { IFileSystem } from "../../packages/core/types";
import { App } from "../../packages/core/util";
import {
	FEED_DOCK_MANAGER, FEED_ANGULAR, getUpgradeablePackages,
	NPM_DOCK_MANAGER, NPM_ANGULAR, resolveIgxPackage, PackageDefinition
} from "../../packages/core/update/package-resolve";

class MockFileSystem implements IFileSystem {
	public fileExists(filePath: string): boolean {
		throw new Error("fileExists is not implemented.");
	}
	public readFile(filePath: string, encoding?: string): string {
		throw new Error("readFile is not implemented.");
	}
	public writeFile(filePath: string, text: string): void {
		throw new Error("writeFile not implemented.");
	}
	public directoryExists(dirPath: string): boolean {
		throw new Error("directoryExists not implemented.");
	}
	public glob(dirPath: string, pattern: string): string[] {
		throw new Error("glob not implemented.");
	}
}

describe("Igx templates - package resolve", () => {
	describe("resolveIgxPackage", () => {
		it("should return npm package as fallback", () => {
			const mockFs = new MockFileSystem();
			spyOn(mockFs, "fileExists").and.returnValue(false);
			spyOn(App.container, "get").and.returnValue(mockFs);

			const result = resolveIgxPackage(NPM_ANGULAR);
			expect(result).toEqual(NPM_ANGULAR);
			expect(mockFs.fileExists).toHaveBeenCalledWith("./package.json");
		});

		it("should return npm package if feed package in not in project", () => {
			const mockFs = new MockFileSystem();
			spyOn(mockFs, "fileExists").and.returnValue(true);
			spyOn(App.container, "get").and.returnValue(mockFs);
			const readSpy = spyOn(mockFs, "readFile").and.returnValue(`{ "dependencies": { "${NPM_ANGULAR}": "*" } }`);

			let result = resolveIgxPackage(NPM_ANGULAR);
			expect(result).toEqual(NPM_ANGULAR);
			expect(mockFs.fileExists).toHaveBeenCalledWith("./package.json");
			expect(mockFs.readFile).toHaveBeenCalledWith("./package.json");

			readSpy.and.returnValue(`{ "dependencies": { "${NPM_DOCK_MANAGER}": "*" } }`);
			result = resolveIgxPackage(NPM_DOCK_MANAGER);
			expect(result).toEqual(NPM_DOCK_MANAGER);
		});

		it("should return feed package if installed in project", () => {
			const mockFs = new MockFileSystem();
			spyOn(mockFs, "fileExists").and.returnValue(true);
			const readSpy = spyOn(mockFs, "readFile").and.returnValue(`{ "dependencies": { "${FEED_ANGULAR}": "*" } }`);
			spyOn(App.container, "get").and.returnValue(mockFs);

			let result = resolveIgxPackage(NPM_ANGULAR);
			expect(result).toEqual(FEED_ANGULAR);
			expect(mockFs.fileExists).toHaveBeenCalledWith("./package.json");
			expect(mockFs.readFile).toHaveBeenCalledWith("./package.json");

			readSpy.and.returnValue(`{ "dependencies": { "${FEED_DOCK_MANAGER}": "*" } }`);
			result = resolveIgxPackage(NPM_DOCK_MANAGER);
			expect(result).toEqual(FEED_DOCK_MANAGER);
		});
	});

	describe("getUpgradeablePackages", () => {
		it("should return an empty array if there are no upgradeable packages", () => {
			const mockFs = new MockFileSystem();
			const existsSpy = spyOn(mockFs, "fileExists").and.returnValue(false);
			spyOn(App.container, "get").and.returnValue(mockFs);

			expect(getUpgradeablePackages()).toEqual([]);
			existsSpy.and.returnValue(true);
			spyOn(mockFs, "readFile").and.returnValue(JSON.stringify({
				dependencies: {
					"@infragistics/igniteui-angular": "0.1.0",
					"igniteui-bait": "^9.0.1",
					"kek": "1.0.1"
				}
			}));

			expect(getUpgradeablePackages()).toEqual([]);
		});

		it("should return an array if containing ONLY upgradeable packages", () => {
			const mockFs = new MockFileSystem();
			const existsSpy = spyOn(mockFs, "fileExists").and.returnValue(false);
			spyOn(App.container, "get").and.returnValue(mockFs);

			expect(getUpgradeablePackages()).toEqual([]);
			existsSpy.and.returnValue(true);
			const mockObj: { dependencies: { [key: string]: string } } = {
				dependencies: {
					"@infragistics/igniteui-angular": "0.1.0",
					"igniteui-angular": "^9.0.1",
					"kek": "1.0.1"
				}
			};
			const mockRead = spyOn(mockFs, "readFile").and.returnValue(JSON.stringify(mockObj));
			const expected: PackageDefinition[] = [
				{ trial: NPM_ANGULAR, licensed: FEED_ANGULAR }
			];
			expect(getUpgradeablePackages()).toEqual(expected);
			mockObj.dependencies = {
				"igniteui-angular": "^9.0.1",
				"igniteui-dockmanager": "0.1.0",
				"kek": "1.0.1"
			};
			expected.push({ trial: NPM_DOCK_MANAGER, licensed: FEED_DOCK_MANAGER });
			mockRead.and.returnValue(JSON.stringify(mockObj));
			expect(getUpgradeablePackages()).toEqual(expected);
		});
	});
});
