import { App, IFileSystem, PackageManager, ProjectConfig, Util } from "@igniteui/cli-core";
import * as path from "path";
import * as pkgResolve from "./package-resolve";
import { updateWorkspace } from "./Update";

interface MockFile {
	path: string;
	content: string;
	expected: string;
}

// tslint:disable: object-literal-sort-keys
describe("updateWorkspace - Unit tests", () => {
	let fsSpy: IFileSystem;
	beforeAll(() => {
		fsSpy = jasmine.createSpyObj("fsSpy", ["fileExists", "directoryExists", "readFile", "writeFile", "glob"]);
		spyOn(App.container, "get").and.returnValue(fsSpy);
		spyOnProperty(App, "workDir", "get").and.returnValue("mockDir");
		spyOn(ProjectConfig, "getConfig").and.returnValue({});
	});
	it("Should fail if current used package is registry package", async () => {
		spyOn(pkgResolve, "resolvePackage").and.returnValue(pkgResolve.FEED_PACKAGE);
		expect(await updateWorkspace("")).toEqual(false);
	});

	it("Should fail if '@infragistics' node modules are installed", async () => {
		spyOn(pkgResolve, "resolvePackage").and.returnValue(pkgResolve.NPM_PACKAGE);
		(fsSpy.directoryExists as jasmine.Spy).and.returnValue(true);
		spyOn(Util, "log");
		expect(await updateWorkspace("root")).toEqual(false);
		expect(fsSpy.directoryExists).toHaveBeenCalledWith(path.join("mockDir", "root", "node_modules", "@infragistics"));
		expect(Util.log).toHaveBeenCalledWith("@infragistics module already exists. Nothing to do here.");
	});

	it("Should fail if no packages.json is found", async () => {
		spyOn(pkgResolve, "resolvePackage").and.returnValue(pkgResolve.NPM_PACKAGE);
		(fsSpy.directoryExists as jasmine.Spy).and.returnValue(false);
		(fsSpy.readFile as jasmine.Spy).and.returnValue("");
		spyOn(Util, "log");
		expect(await updateWorkspace("")).toEqual(false);
		expect(Util.log).toHaveBeenCalledWith("Package.json not found!");
	});

	it("Should fail if infragistics registry cannot be reached", async () => {
		const mockJSONInput = {
			someName: "testValue"
		};
		spyOn(pkgResolve, "resolvePackage").and.returnValue(pkgResolve.NPM_PACKAGE);
		(fsSpy.directoryExists as jasmine.Spy).and.returnValue(false);
		(fsSpy.readFile as jasmine.Spy).and.returnValue(JSON.stringify(mockJSONInput, null, 4));
		spyOn(PackageManager, "ensureRegistryUser").and.returnValue(false);
		expect(await updateWorkspace("")).toEqual(false);
	});

	it("Should update package.json file, removing non-scoped igniteui-angular packages", async () => {
		const mockPackageJSON = {
			dependencies: {
				"@alphabetically-sorted-scope/package": "^0.0.0",
				"alphabetically-second-package": "^0.0.0",
				"igniteui-angular": "^9.1.0",
				"some-package": "^0.0.0"
			}
		};
		(fsSpy.fileExists as jasmine.Spy).and.returnValue(false);
		(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
			if (filePath.indexOf("package.json") > -1) {
				return JSON.stringify(mockPackageJSON);
			}
			if (filePath === "angular.json") {
				return JSON.stringify({
					projects: {}
				});
			}
		});
		spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
		spyOn(Util, "log");
		expect(await updateWorkspace("")).toEqual(false);
		expect(fsSpy.writeFile).toHaveBeenCalledWith("package.json", JSON.stringify({
			dependencies: {
				"@alphabetically-sorted-scope/package": "^0.0.0",
				"@infragistics/igniteui-angular": "^9.1.0",
				"alphabetically-second-package": "^0.0.0",
				"some-package": "^0.0.0"
			}
		}, null, 2));
	});

	it("Should update import paths in files correctly", async () => {
		const mockPackageJSON = {
			dependencies: {
				"some-package": "^0.0.0",
				"igniteui-angular": "^9.1.0"
			}
		};
		const mockFileArray: MockFile[] = [{
			path: "src/home.component.ts",
			content:
`import { something } from 'module';
import { bait } from 'igniteui-angular-core';
import { IgxGridComponent } from 'igniteui-angular';

export class HomeComponent {
	title = 'igniteui-angular example';
}`,
			expected:
`import { something } from 'module';
import { bait } from 'igniteui-angular-core';
import { IgxGridComponent } from '@infragistics/igniteui-angular';

export class HomeComponent {
	title = 'igniteui-angular example';
}`}, {
			path: "src/home.component.scss",
			content:
`@import '~igniteui-angular/lib/core/styles/themes/utilities';
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
`,
			expected:
`@import '~@infragistics/igniteui-angular/lib/core/styles/themes/utilities';
@import '~@infragistics/igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
`}, {
			path: "angular.json",
			content:
`{
	"projects": {
		"test": {
			"projectType": "application",
			"sourceRoot": "src",
			"root": "",
			"styles": [
				"src/styles.scss",
				"node_modules/igniteui-angular/styles/igniteui-angular.css"
			]
		}
	}
}`,
			expected:
`{
	"projects": {
		"test": {
			"projectType": "application",
			"sourceRoot": "src",
			"root": "",
			"styles": [
				"src/styles.scss",
				"node_modules/@infragistics/igniteui-angular/styles/igniteui-angular.css"
			]
		}
	}
}`}, {
	path: "src/app.module.ts",
	content:
`import { something } from 'module';
import { bait } from 'igniteui-angular-core';
import { IgxGridComponent } from 'igniteui-angular';

export class HomeComponent {
title = 'igniteui-angular example';
}`,
	expected:
`import { something } from 'module';
import { bait } from 'igniteui-angular-core';
import { IgxGridComponent } from '@infragistics/igniteui-angular';

export class HomeComponent {
title = 'igniteui-angular example';
}`}];
		(fsSpy.glob as jasmine.Spy).and.returnValue(
			["src/home.component.ts", "src/home.component.scss", "src/app.module.ts"]);
		(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
			if (filePath.indexOf("package.json") > -1) {
				return JSON.stringify(mockPackageJSON);
			}
			const fileEntry = mockFileArray.find(entry => entry.path === filePath);
			return fileEntry.content;
		});
		(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
		spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
		expect(await updateWorkspace("")).toEqual(true);
		for (const fileEntry of mockFileArray) {
			expect(fsSpy.writeFile).toHaveBeenCalledWith(fileEntry.path, fileEntry.expected);
		}
		expect(fsSpy.glob).toHaveBeenCalledTimes(4);
	});
});
