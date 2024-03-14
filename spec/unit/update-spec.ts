import { PackageManager } from "../../packages/core/packages/PackageManager";
import { IFileSystem } from "../../packages/core/types";
import { App, ProjectConfig, Util } from "../../packages/core/util";
import * as pkgResolve from "../../packages/core/update/package-resolve";
import { updateWorkspace } from "../../packages/core/update/Update";

interface MockFile {
	path: string;
	content: string;
	expected: string;
}

// tslint:disable: object-literal-sort-keys
describe("updateWorkspace", () => {
	let fsSpy: IFileSystem;

	describe("Igx templates", () => {
		beforeEach(() => {
			fsSpy = jasmine.createSpyObj("fsSpy", ["fileExists", "directoryExists", "readFile", "writeFile", "glob"]);
			spyOn(App.container, "get").and.returnValue(fsSpy);
			spyOnProperty(App, "workDir", "get").and.returnValue("mockDir");
			spyOn(ProjectConfig, "getConfig").and.returnValue({ project: { framework: "Angular" }});
		});

		it("Should fail if current used package is registry package", async () => {
			spyOn(pkgResolve, "getUpgradeablePackages").and.returnValue([]);
			spyOn(Util, "log");
			expect(await updateWorkspace("")).toEqual(false);
			expect(Util.log).toHaveBeenCalledWith("Your app is already using packages from the Infragistics registry. You are good to go.", "green");
		});

		it("Should fail if no packages.json is found", async () => {
			const upgradeable: pkgResolve.PackageDefinition = {
				trial: pkgResolve.NPM_ANGULAR,
				licensed: pkgResolve.FEED_ANGULAR
			};
			spyOn(pkgResolve, "getUpgradeablePackages").and.returnValue([upgradeable]);
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
			const upgradeable: pkgResolve.PackageDefinition = {
				trial: pkgResolve.NPM_ANGULAR,
				licensed: pkgResolve.FEED_ANGULAR
			};
			spyOn(pkgResolve, "getUpgradeablePackages").and.returnValue([upgradeable]);
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
					"igniteui-dockmanager": "^1.0.0",
					"some-package": "^0.0.0"
				}
			};
			(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
			(fsSpy.glob as jasmine.Spy).and.returnValues // per workspace
				([ "package.json" ], // root package.json
				[], // logic files
				[], [], [], // for each style extension
				[]); // inner package.json files
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath.indexOf("package.json") > -1) {
					return JSON.stringify(mockPackageJSON);
				}
				if (filePath.indexOf("angular.json") > -1) {
					return JSON.stringify({
						projects: {}
					});
				}
			});
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			spyOn(Util, "log");
			expect(await updateWorkspace("")).toEqual(true);
			expect(fsSpy.writeFile).toHaveBeenCalledWith("package.json", Util.formatPackageJson({
				dependencies: {
					"@alphabetically-sorted-scope/package": "^0.0.0",
					"@infragistics/igniteui-angular": "^9.1.0",
					"@infragistics/igniteui-dockmanager": "^1.0.0",
					"alphabetically-second-package": "^0.0.0",
					"some-package": "^0.0.0"
				}
			}));
			expect(fsSpy.writeFile).toHaveBeenCalledTimes(2);
			expect(fsSpy.glob).toHaveBeenCalledTimes(1);
		});

		it("Should update import paths in files correctly", async () => {
			const mockFileArray: MockFile[] = [
				{
					path: "package.json",
					content:
					`{
  "dependencies": {
      "some-package": "^0.0.0",
      "igniteui-angular": "^9.1.0",
      "igniteui-dockmanager": "^1.0.0"
  }
}
	`,
					expected:
					`{
  "dependencies": {
    "@infragistics/igniteui-angular": "^9.1.0",
    "@infragistics/igniteui-dockmanager": "^1.0.0",
    "some-package": "^0.0.0"
  }
}
`
				},
				{
				path: "src/home.component.ts",
				content:
`import { something } from 'module';
import { bait } from 'igniteui-angular-core';
import { IgxGridComponent } from 'igniteui-angular';
import { IgcDockManager } from 'igniteui-dockmanager';

export class HomeComponent {
	title = 'igniteui-angular example';
}`,
				expected:
`import { something } from 'module';
import { bait } from 'igniteui-angular-core';
import { IgxGridComponent } from '@infragistics/igniteui-angular';
import { IgcDockManager } from '@infragistics/igniteui-dockmanager';

export class HomeComponent {
	title = 'igniteui-angular example';
}`}, {
				path: "src/home.component.scss",
				content:
`@use 'igniteui-angular/theming' as *;
@use 'igniteui-dockmanager/styles/themes/test' as *;
@include igx-core();
`,
				expected:
`@use '@infragistics/igniteui-angular/theming' as *;
@use '@infragistics/igniteui-dockmanager/styles/themes/test' as *;
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
				"node_modules/igniteui-angular/styles/igniteui-angular.css",
				"node_modules/igniteui-dockmanager/styles/themes/test"
			]
		},
		"test-e2e": {}
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
				"node_modules/@infragistics/igniteui-angular/styles/igniteui-angular.css",
				"node_modules/@infragistics/igniteui-dockmanager/styles/themes/test"
			]
		},
		"test-e2e": {}
	}
}`}, {
				path: "src/app.module.ts",
				content:
`import { something } from 'module';
import { bait } from 'igniteui-angular-core';
import { IgxGridComponent } from 'igniteui-angular';
import { dockManagerLoader } from 'igniteui-dockmanager/loader';

export class HomeComponent {
title = 'igniteui-angular example';
}`,
				expected:
`import { something } from 'module';
import { bait } from 'igniteui-angular-core';
import { IgxGridComponent } from '@infragistics/igniteui-angular';
import { dockManagerLoader } from '@infragistics/igniteui-dockmanager/loader';

export class HomeComponent {
title = 'igniteui-angular example';
}`}, {
				path: ".npmrc",
				content: "",
				expected:
`@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/
//packages.infragistics.com/npm/js-licensed/:always-auth=true
`}, {
				path: ".github/workflows/node.js.yml",
				content:
`# start content
    - run: npm i # replace with \'npm ci\' after committing lock file from first install
# end content
`,
				expected:
`# start content
    - run: echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:_auth=\${{ secrets.NPM_AUTH_TOKEN }}" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:always-auth=true" >> ~/.npmrc
    - run: npm i # replace with \'npm ci\' after committing lock file from first install
# end content
`}];
			(fsSpy.glob as jasmine.Spy).and.returnValues // per workspace
				([ "package.json" ], // root package.json
				["src/home.component.ts", "src/app.module.ts"], // logic files
				["src/home.component.scss"], [], [], // for each style extension
				[]); // inner package.json files
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath.indexOf("package.json") > -1) {
					return mockFileArray.find(entry => entry.path === "package.json").content;
				}
				const fileEntry = mockFileArray.find(entry => entry.path === filePath);
				return fileEntry.content;
			});
			(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			expect(await updateWorkspace("")).toEqual(true);
			for (const fileEntry of mockFileArray) {
				expect((fsSpy.writeFile as jasmine.Spy)).toHaveBeenCalledWith(fileEntry.path, fileEntry.expected);
			}
			expect(fsSpy.glob).toHaveBeenCalledTimes(6);
		});

		it("Should update package.json files from workspaces", async () => {
			const mockAngularJson =
`{
	"projects": {
		"projectA": {
			"projectType": "application",
			"sourceRoot": "src/projectA",
			"root": ""
		},
		"projectB": {
			"projectType": "application",
			"sourceRoot": "src/projectB",
			"root": ""
		}
	}
}`;
			const mockFileArray: MockFile[] = [
				{
					path: "package.json",
					content:
					`{
  "dependencies": {
      "some-package": "^0.0.0",
      "igniteui-angular": "^9.1.0",
      "igniteui-dockmanager": "^1.0.0"
  }
}
	`,
					expected:
					`{
  "dependencies": {
    "@infragistics/igniteui-angular": "^9.1.0",
    "@infragistics/igniteui-dockmanager": "^1.0.0",
    "some-package": "^0.0.0"
  }
}
`
				},
				{
					path: "./projectA/package.json",
					content:
					`{
  "name": "projectA",
  "dependencies": {
      "some-package": "^0.0.0",
      "igniteui-angular": "^9.1.0",
      "igniteui-dockmanager": "^1.0.0"
	}
}
	`,
					expected:
					`{
  "name": "projectA",
  "dependencies": {
    "@infragistics/igniteui-angular": "^9.1.0",
    "@infragistics/igniteui-dockmanager": "^1.0.0",
    "some-package": "^0.0.0"
  }
}
`
				},
				{
					path: "./projectB/package.json",
					content:
					`{
  "name": "projectB",
  "dependencies": {
      "some-package": "^0.0.0",
      "igniteui-angular": "^9.1.0",
      "igniteui-dockmanager": "^1.0.0"
	}
}
	`,
					expected:
					`{
  "name": "projectB",
  "dependencies": {
    "@infragistics/igniteui-angular": "^9.1.0",
    "@infragistics/igniteui-dockmanager": "^1.0.0",
    "some-package": "^0.0.0"
  }
}
`}];
			(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
			(fsSpy.glob as jasmine.Spy).and.returnValues // per workspace
				([ "package.json" ], // root package.json
				[], // projectA logic files
				[], [], [], // projectA for each style extension
				[ "./projectA/package.json" ], // projectA package.json
				[], // projectB logic files
				[], [], [], // projectB for each style extension
				[ "./projectB/package.json" ]); // projectB package.json
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath.indexOf("package.json") < 0 && filePath.indexOf("angular.json") < 0) {
					return;
				} else if (filePath === "package.json" || filePath === "./package.json") {
					return mockFileArray.find(entry => entry.path === "package.json").content;
				} else if (filePath === "angular.json") {
					return mockAngularJson;
				}
				const fileEntry = mockFileArray.find(entry => entry.path === filePath);
				return fileEntry.content;
			});
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			spyOn(Util, "log");
			expect(await updateWorkspace("")).toEqual(true);
			for (const fileEntry of mockFileArray) {
				expect((fsSpy.writeFile as jasmine.Spy)).toHaveBeenCalledWith(fileEntry.path, fileEntry.expected);
			}
			expect(fsSpy.glob).toHaveBeenCalledTimes(11);
		});
	});

	describe("React", () => {
		beforeEach(() => {
			fsSpy = jasmine.createSpyObj("fsSpy", ["fileExists", "directoryExists", "readFile", "writeFile", "glob"]);
			spyOn(App.container, "get").and.returnValue(fsSpy);
			spyOnProperty(App, "workDir", "get").and.returnValue("mockDir");
			spyOn(ProjectConfig, "getConfig").and.returnValue({ project: { framework: "React" }});
		});

		it("Should fail if current used package is registry package", async () => {
			spyOn(pkgResolve, "getUpgradeablePackages").and.returnValue([]);
			spyOn(Util, "log");
			expect(await updateWorkspace("")).toEqual(false);
			expect(Util.log).toHaveBeenCalledWith("Your app is already using packages from the Infragistics registry. You are good to go.", "green");
		});

		it("Should fail if no packages.json is found", async () => {
			const upgradeable: pkgResolve.PackageDefinition = {
				trial: pkgResolve.NPM_REACT,
				licensed: pkgResolve.FEED_REACT
			};
			spyOn(pkgResolve, "getUpgradeablePackages").and.returnValue([upgradeable]);
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
			const upgradeable: pkgResolve.PackageDefinition = {
				trial: pkgResolve.NPM_REACT,
				licensed: pkgResolve.FEED_REACT
			};
			spyOn(pkgResolve, "getUpgradeablePackages").and.returnValue([upgradeable]);
			(fsSpy.directoryExists as jasmine.Spy).and.returnValue(false);
			(fsSpy.readFile as jasmine.Spy).and.returnValue(JSON.stringify(mockJSONInput, null, 4));
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(false);
			expect(await updateWorkspace("")).toEqual(false);
		});

		it("Should update package.json file, removing non-scoped igniteui-react packages", async () => {
			const mockPackageJSON = {
				dependencies: {
					"@alphabetically-sorted-scope/package": "^0.0.0",
					"alphabetically-second-package": "^0.0.0",
					"igniteui-react": "^18.5.1",
					"igniteui-dockmanager": "^1.0.0",
					"some-package": "^0.0.0"
				}
			};
			(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
			(fsSpy.glob as jasmine.Spy).and.returnValues // per workspace
				([ "package.json" ], // root package.json
				[], // logic files
				[], // for each style extension
				[]); // inner package.json files
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath.indexOf("package.json") > -1) {
					return JSON.stringify(mockPackageJSON);
				}
			});
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			spyOn(Util, "log");
			expect(await updateWorkspace("")).toEqual(true);
			expect(fsSpy.writeFile).toHaveBeenCalledWith("package.json", Util.formatPackageJson({
				dependencies: {
					"@alphabetically-sorted-scope/package": "^0.0.0",
					"@infragistics/igniteui-react": "^18.5.1",
					"@infragistics/igniteui-dockmanager": "^1.0.0",
					"alphabetically-second-package": "^0.0.0",
					"some-package": "^0.0.0"
				}
			}));
			expect(fsSpy.writeFile).toHaveBeenCalledTimes(2);
			expect(fsSpy.glob).toHaveBeenCalledTimes(4);
		});

		it("Should update import paths in files correctly", async () => {
			const mockFileArray: MockFile[] = [
				{
					path: "package.json",
					content:
					`{
  "dependencies": {
      "igniteui-dockmanager": "^1.0.0",
      "igniteui-react": "^18.5.1",
      "igniteui-react-grids": "^18.5.1",
      "some-package": "^0.0.0"
	}
}
	`,
					expected:
					`{
  "dependencies": {
    "@infragistics/igniteui-dockmanager": "^1.0.0",
    "@infragistics/igniteui-react": "^18.5.1",
    "@infragistics/igniteui-react-grids": "^18.5.1",
    "some-package": "^0.0.0"
  }
}
`
				},
	{
				path: "src/home.tsx",
				content:
`import { something } from 'module';
import { bait } from 'igniteui-react-other';
import 'igniteui-react-grids/grids';
import { IgrGridModule, IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { IgcDockManager } from 'igniteui-dockmanager';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css'

IgrGridModule.register();

export default function Home() {
	const title = 'igniteui-react example';
}`,
				expected:
`import { something } from 'module';
import { bait } from 'igniteui-react-other';
import '@infragistics/igniteui-react-grids/grids';
import { IgrGridModule, IgrGrid, IgrColumn } from '@infragistics/igniteui-react-grids';
import { IgcDockManager } from '@infragistics/igniteui-dockmanager';
import '@infragistics/igniteui-react-grids/grids/themes/light/bootstrap.css'

IgrGridModule.register();

export default function Home() {
	const title = 'igniteui-react example';
}`}, {
				path: ".npmrc",
				content: "",
				expected:
`@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/
//packages.infragistics.com/npm/js-licensed/:always-auth=true
`}, {
				path: ".github/workflows/node.js.yml",
				content:
`# start content
    - run: npm i # replace with \'npm ci\' after committing lock file from first install
# end content
`,
				expected:
`# start content
    - run: echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:_auth=\${{ secrets.NPM_AUTH_TOKEN }}" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:always-auth=true" >> ~/.npmrc
    - run: npm i # replace with \'npm ci\' after committing lock file from first install
# end content
`}
	];
			(fsSpy.glob as jasmine.Spy).and.returnValues // per workspace
				([ "package.json" ], // root package.json
				[ "src/home.tsx" ], // logic files
				[], // for each style extension
				[]); // inner package.json files
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath.indexOf("package.json") > -1) {
					return mockFileArray.find(entry => entry.path === "package.json").content;
				}
				const fileEntry = mockFileArray.find(entry => entry.path === filePath);
				return fileEntry.content;
			});
			(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			expect(await updateWorkspace("")).toEqual(true);
			for (const fileEntry of mockFileArray) {
				expect((fsSpy.writeFile as jasmine.Spy)).toHaveBeenCalledWith(fileEntry.path, fileEntry.expected);
			}
			expect(fsSpy.glob).toHaveBeenCalledTimes(4);
		});

		it("Should update package.json files from workspaces", async () => {
			const mockFileArray: MockFile[] = [
				{
					path: "package.json",
					content:
					`{
  "name": "root-project",
  "dependencies": {
      "igniteui-dockmanager": "^1.0.0",
      "igniteui-react": "^18.5.1",
      "igniteui-react-grids": "^18.5.1",
      "some-package": "^0.0.0"
	},
  "workspaces": [
      "projectA",
      "projectB"
  ]
}
	`,
					expected:
					`{
  "name": "root-project",
  "dependencies": {
    "@infragistics/igniteui-dockmanager": "^1.0.0",
    "@infragistics/igniteui-react": "^18.5.1",
    "@infragistics/igniteui-react-grids": "^18.5.1",
    "some-package": "^0.0.0"
  },
  "workspaces": [
    "projectA",
    "projectB"
  ]
}
`
				},
				{
					path: "./projectA/package.json",
					content:
					`{
  "name": "projectA",
  "dependencies": {
      "igniteui-dockmanager": "^1.0.0",
      "igniteui-react": "^18.5.1",
      "igniteui-react-grids": "^18.5.1",
      "some-package": "^0.0.0"
	}
}
	`,
					expected:
					`{
  "name": "projectA",
  "dependencies": {
    "@infragistics/igniteui-dockmanager": "^1.0.0",
    "@infragistics/igniteui-react": "^18.5.1",
    "@infragistics/igniteui-react-grids": "^18.5.1",
    "some-package": "^0.0.0"
  }
}
`
				},
				{
					path: "./projectB/package.json",
					content:
					`{
  "name": "projectB",
  "dependencies": {
      "igniteui-dockmanager": "^1.0.0",
      "igniteui-react": "^18.5.1",
      "igniteui-react-grids": "^18.5.1",
      "some-package": "^0.0.0"
	}
}
	`,
					expected:
					`{
  "name": "projectB",
  "dependencies": {
    "@infragistics/igniteui-dockmanager": "^1.0.0",
    "@infragistics/igniteui-react": "^18.5.1",
    "@infragistics/igniteui-react-grids": "^18.5.1",
    "some-package": "^0.0.0"
  }
}
`
				}];
			(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
			(fsSpy.glob as jasmine.Spy).and.returnValues // per workspace
				([ "package.json" ], // root package.json
				[], // projectA logic files
				[], // projectA for each style extension
				[ "./projectA/package.json" ], // projectA package.json
				[], // projectB logic files
				[], // projectB for each style extension
				[ "./projectB/package.json" ]); // projectB package.json
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath.indexOf("package.json") < 0) {
					return;
				} else if (filePath === "package.json" || filePath === "./package.json") {
					return mockFileArray.find(entry => entry.path === "package.json").content;
				}
				const fileEntry = mockFileArray.find(entry => entry.path === filePath);
				return fileEntry.content;
			});
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			spyOn(Util, "log");
			expect(await updateWorkspace("")).toEqual(true);
			for (const fileEntry of mockFileArray) {
				expect((fsSpy.writeFile as jasmine.Spy)).toHaveBeenCalledWith(fileEntry.path, fileEntry.expected);
			}
			expect(fsSpy.glob).toHaveBeenCalledTimes(7);
		});
	});

	describe("Webcomponents", () => {
		beforeEach(() => {
			fsSpy = jasmine.createSpyObj("fsSpy", ["fileExists", "directoryExists", "readFile", "writeFile", "glob"]);
			spyOn(App.container, "get").and.returnValue(fsSpy);
			spyOnProperty(App, "workDir", "get").and.returnValue("mockDir");
			spyOn(ProjectConfig, "getConfig").and.returnValue({ project: { framework: "Webcomponents" }});
		});

		it("Should fail if current used package is registry package", async () => {
			spyOn(pkgResolve, "getUpgradeablePackages").and.returnValue([]);
			spyOn(Util, "log");
			expect(await updateWorkspace("")).toEqual(false);
			expect(Util.log).toHaveBeenCalledWith("Your app is already using packages from the Infragistics registry. You are good to go.", "green");
		});

		it("Should fail if no packages.json is found", async () => {
			const upgradeable: pkgResolve.PackageDefinition = {
				trial: pkgResolve.NPM_WEBCOMPONENTS_CORE,
				licensed: pkgResolve.FEED_WEBCOMPONENTS_CORE
			};
			spyOn(pkgResolve, "getUpgradeablePackages").and.returnValue([upgradeable]);
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
			const upgradeable: pkgResolve.PackageDefinition = {
				trial: pkgResolve.NPM_WEBCOMPONENTS_CORE,
				licensed: pkgResolve.FEED_WEBCOMPONENTS_CORE
			};
			spyOn(pkgResolve, "getUpgradeablePackages").and.returnValue([upgradeable]);
			(fsSpy.directoryExists as jasmine.Spy).and.returnValue(false);
			(fsSpy.readFile as jasmine.Spy).and.returnValue(JSON.stringify(mockJSONInput, null, 4));
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(false);
			expect(await updateWorkspace("")).toEqual(false);
		});

		it("Should update package.json file, removing non-scoped igniteui-webcomponents packages", async () => {
			const mockPackageJSON = {
				dependencies: {
					"@alphabetically-sorted-scope/package": "^0.0.0",
					"alphabetically-second-package": "^0.0.0",
					"igniteui-webcomponents": "^4.7.0",
					"igniteui-webcomponents-core": "^4.7.0",
					"igniteui-dockmanager": "^1.0.0",
					"some-package": "^0.0.0"
				}
			};
			(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
			(fsSpy.glob as jasmine.Spy).and.returnValues // per workspace
				([ "package.json" ], // root package.json
				[], // logic files
				[]); // inner package.json files
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath.indexOf("package.json") > -1) {
					return JSON.stringify(mockPackageJSON);
				}
			});
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			spyOn(Util, "log");
			expect(await updateWorkspace("")).toEqual(true);
			expect(fsSpy.writeFile).toHaveBeenCalledWith("package.json", Util.formatPackageJson({
				dependencies: {
					"@alphabetically-sorted-scope/package": "^0.0.0",
					"@infragistics/igniteui-webcomponents-core": "^4.7.0",
					"@infragistics/igniteui-dockmanager": "^1.0.0",
					"alphabetically-second-package": "^0.0.0",
					"igniteui-webcomponents": "^4.7.0",
					"some-package": "^0.0.0"
				}
			}));
			expect(fsSpy.writeFile).toHaveBeenCalledTimes(2);
			expect(fsSpy.glob).toHaveBeenCalledTimes(3);
		});

		it("Should update import paths in files correctly", async () => {
			const mockFileArray: MockFile[] = [
				{
					path: "package.json",
					content:
					`{
  "dependencies": {
    "igniteui-webcomponents": "^4.7.0",
    "igniteui-webcomponents-core": "^4.7.0",
    "igniteui-dockmanager": "^1.0.0",
    "some-package": "^0.0.0"
  }
}
	`,
					expected:
`{
  "dependencies": {
    "@infragistics/igniteui-dockmanager": "^1.0.0",
    "@infragistics/igniteui-webcomponents-core": "^4.7.0",
    "igniteui-webcomponents": "^4.7.0",
    "some-package": "^0.0.0"
  }
}
`
				},
	{
				path: "src/app.ts",
				content:
`import { something } from 'module';
import { IgcDockManager } from 'igniteui-dockmanager';
import { defineComponents, IgcLinearProgressComponent } from 'igniteui-webcomponents';
import { ModuleManager } from 'igniteui-webcomponents-core';

export default class App extends LitElement {
	const title = 'igniteui-webcomponents example';
}`,
				expected:
`import { something } from 'module';
import { IgcDockManager } from '@infragistics/igniteui-dockmanager';
import { defineComponents, IgcLinearProgressComponent } from 'igniteui-webcomponents';
import { ModuleManager } from '@infragistics/igniteui-webcomponents-core';

export default class App extends LitElement {
	const title = 'igniteui-webcomponents example';
}`}, {
				path: ".npmrc",
				content: "",
				expected:
`@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/
//packages.infragistics.com/npm/js-licensed/:always-auth=true
`}, {
				path: ".github/workflows/node.js.yml",
				content:
`# start content
    - run: npm i # replace with \'npm ci\' after committing lock file from first install
# end content
`,
				expected:
`# start content
    - run: echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:_auth=\${{ secrets.NPM_AUTH_TOKEN }}" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:always-auth=true" >> ~/.npmrc
    - run: npm i # replace with \'npm ci\' after committing lock file from first install
# end content
`}
	];
			(fsSpy.glob as jasmine.Spy).and.returnValues // per workspace
				([ "package.json" ], // root package.json
				["src/app.ts"], // logic files
				[]); // inner package.json files
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath.indexOf("package.json") > -1) {
					return mockFileArray.find(entry => entry.path === "package.json").content;
				}
				const fileEntry = mockFileArray.find(entry => entry.path === filePath);
				return fileEntry.content;
			});
			(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			expect(await updateWorkspace("")).toEqual(true);
			for (const fileEntry of mockFileArray) {
				expect((fsSpy.writeFile as jasmine.Spy)).toHaveBeenCalledWith(fileEntry.path, fileEntry.expected);
			}
			expect(fsSpy.glob).toHaveBeenCalledTimes(3);
		});

		it("Should update package.json files from workspaces", async () => {
			const mockFileArray: MockFile[] = [
				{
					path: "package.json",
					content:
					`{
  "name": "root-project",
  "dependencies": {
    "igniteui-webcomponents": "^4.7.0",
    "igniteui-webcomponents-core": "^4.7.0",
    "igniteui-dockmanager": "^1.0.0",
    "some-package": "^0.0.0"
	},
  "workspaces": [
      "projectA",
      "projectB"
  ]
}
	`,
					expected:
					`{
  "name": "root-project",
  "dependencies": {
    "@infragistics/igniteui-dockmanager": "^1.0.0",
    "@infragistics/igniteui-webcomponents-core": "^4.7.0",
    "igniteui-webcomponents": "^4.7.0",
    "some-package": "^0.0.0"
  },
  "workspaces": [
    "projectA",
    "projectB"
  ]
}
`
				},
				{
					path: "./projectA/package.json",
					content:
					`{
  "name": "projectA",
  "dependencies": {
    "igniteui-webcomponents": "^4.7.0",
    "igniteui-webcomponents-core": "^4.7.0",
    "igniteui-dockmanager": "^1.0.0",
    "some-package": "^0.0.0"
	}
}
	`,
					expected:
					`{
  "name": "projectA",
  "dependencies": {
    "@infragistics/igniteui-dockmanager": "^1.0.0",
    "@infragistics/igniteui-webcomponents-core": "^4.7.0",
    "igniteui-webcomponents": "^4.7.0",
    "some-package": "^0.0.0"
  }
}
`
				},
				{
					path: "./projectB/package.json",
					content:
					`{
  "name": "projectB",
  "dependencies": {
    "igniteui-webcomponents": "^4.7.0",
    "igniteui-webcomponents-core": "^4.7.0",
    "igniteui-dockmanager": "^1.0.0",
    "some-package": "^0.0.0"
	}
}
	`,
					expected:
					`{
  "name": "projectB",
  "dependencies": {
    "@infragistics/igniteui-dockmanager": "^1.0.0",
    "@infragistics/igniteui-webcomponents-core": "^4.7.0",
    "igniteui-webcomponents": "^4.7.0",
    "some-package": "^0.0.0"
  }
}
`
				}];
			(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
			(fsSpy.glob as jasmine.Spy).and.returnValues // per workspace
				([ "package.json" ], // root package.json
				[], // projectA logic files
				[ "./projectA/package.json" ], // projectA package.json
				[], // projectB logic files
				[ "./projectB/package.json" ]); // projectB package.json
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath.indexOf("package.json") < 0) {
					return;
				} else if (filePath === "package.json" || filePath === "./package.json") {
					return mockFileArray.find(entry => entry.path === "package.json").content;
				}
				const fileEntry = mockFileArray.find(entry => entry.path === filePath);
				return fileEntry.content;
			});
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			spyOn(Util, "log");
			expect(await updateWorkspace("")).toEqual(true);
			for (const fileEntry of mockFileArray) {
				expect((fsSpy.writeFile as jasmine.Spy)).toHaveBeenCalledWith(fileEntry.path, fileEntry.expected);
			}
			expect(fsSpy.glob).toHaveBeenCalledTimes(5);
		});
	});
});
