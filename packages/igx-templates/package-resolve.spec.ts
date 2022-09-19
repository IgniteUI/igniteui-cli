import { App, FS_TOKEN, IFileSystem } from "@igniteui/cli-core";
import {
	FEED_DOCK_MANAGER, FEED_PACKAGE, getUpgradeablePackages,
	NPM_DOCK_MANAGER, NPM_PACKAGE, PackageDefinition, resolveIgxPackage
} from "./package-resolve";

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
	public removeDir(dirPath: string, force: boolean): boolean {
		throw new Error("Method not implemented.");
	}
	public glob(dirPath: string, pattern: string): string[] {
		throw new Error("Method not implemented.");
	}
}

describe("Igx templates - package resolve", () => {
	describe("resolveIgxPackage", () => {
		it("should return npm package as fallback", () => {
			const mockFs = new MockFileSystem();
			spyOn(mockFs, "fileExists").and.returnValue(false);
			App.container.set(FS_TOKEN, mockFs);

			const result = resolveIgxPackage(NPM_PACKAGE);
			expect(result).toEqual(NPM_PACKAGE);
			expect(mockFs.fileExists).toHaveBeenCalledWith("./package.json");
		});

		it("should return npm package if feed package in not in project", () => {
			const mockFs = new MockFileSystem();
			spyOn(mockFs, "fileExists").and.returnValue(true);
			const readSpy = spyOn(mockFs, "readFile").and.returnValue(`{ "dependencies": { "${NPM_PACKAGE}": "*" } }`);
			App.container.set(FS_TOKEN, mockFs);

			let result = resolveIgxPackage(NPM_PACKAGE);
			expect(result).toEqual(NPM_PACKAGE);
			expect(mockFs.fileExists).toHaveBeenCalledWith("./package.json");
			expect(mockFs.readFile).toHaveBeenCalledWith("./package.json");

			readSpy.and.returnValue(`{ "dependencies": { "${NPM_DOCK_MANAGER}": "*" } }`);
			result = resolveIgxPackage(NPM_DOCK_MANAGER);
			expect(result).toEqual(NPM_DOCK_MANAGER);
		});

		it("should return feed package if installed in project", () => {
			const mockFs = new MockFileSystem();
			spyOn(mockFs, "fileExists").and.returnValue(true);
			const readSpy = spyOn(mockFs, "readFile").and.returnValue(`{ "dependencies": { "${FEED_PACKAGE}": "*" } }`);
			App.container.set(FS_TOKEN, mockFs);

			let result = resolveIgxPackage(NPM_PACKAGE);
			expect(result).toEqual(FEED_PACKAGE);
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
			App.container.set(FS_TOKEN, mockFs);

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
			App.container.set(FS_TOKEN, mockFs);

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
				{ trial: NPM_PACKAGE, licensed: FEED_PACKAGE }
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
