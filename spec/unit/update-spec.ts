import { PackageManager } from "../../packages/core/packages/PackageManager";
import { Config, IFileSystem } from "../../packages/core/types";
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
			const mockProjectConfig = {
				project: {
					framework: "Angular"
				}
			 } as unknown as Config;
			mockProjectConfig.project.framework = "Angular";
			spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);
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
			expect(fsSpy.writeFile).toHaveBeenCalledTimes(1);
			expect(fsSpy.glob).toHaveBeenCalledTimes(1);
		});

		it("Should add npmrc file if it does not exist", async () => {
			const npmrc: MockFile = {
				path: ".npmrc",
				content: "",
				expected:
`@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/
//packages.infragistics.com/npm/js-licensed/:always-auth=true
`};
			(fsSpy.glob as jasmine.Spy).and.returnValues(// per workspace
				["package.json"], // root package.json
				["src/home.component.ts", "src/app.module.ts"], // logic files
				["src/home.component.scss"], [], [], // for each style extension
				[] // inner package.json files
			);
			// ensure .npmrc does not exist
			(fsSpy.fileExists as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath === ".npmrc") {
					return false;
				}
				return true;
			});
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath === "angular.json") {
					return "{}";
				}
				if (filePath === "package.json") {
					return `{"dependencies":[]}`;
				}
				return "";
			});
			spyOn(Object, "keys").and.returnValue([]);
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			spyOn(pkgResolve, "getUpgradeablePackages").and.returnValue([{
				trial: "mock-trial",
				licensed: "mock-licensed"
			}]);
			expect(await updateWorkspace("")).toEqual(true);
			expect((fsSpy.writeFile as jasmine.Spy)).toHaveBeenCalledWith(npmrc.path, npmrc.expected);
		});

		it("Should not modify existing npmrc file", async () => {
			(fsSpy.glob as jasmine.Spy).and.returnValues(// per workspace
				["package.json"], // root package.json
				["src/home.component.ts", "src/app.module.ts"], // logic files
				["src/home.component.scss"], [], [], // for each style extension
				[] // inner package.json files
			);
			// ensure .npmrc does exist
			(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath === "angular.json") {
					return "{}";
				}
				if (filePath === "package.json") {
					return `{"dependencies":[]}`;
				}
				return "";
			});
			spyOn(Object, "keys").and.returnValue([]);
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			spyOn(pkgResolve, "getUpgradeablePackages").and.returnValue([{
				trial: "mock-trial",
				licensed: "mock-licensed"
			}]);
			expect(await updateWorkspace("")).toEqual(true);
			expect((fsSpy.writeFile as jasmine.Spy)).toHaveBeenCalledTimes(1);
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
}`},
{
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
`},
{
				path: ".github/workflows/github-pages.yml",
				content:
`# start content
    - run: npm i # replace with 'npm ci' after committing lock file from first install
# end content
`,
				expected:
`# start content
    - run: echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:_auth=\${{ secrets.NPM_AUTH_TOKEN }}" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:always-auth=true" >> ~/.npmrc
    - run: npm i # replace with 'npm ci' after committing lock file from first install
# end content
`},
{
				path: ".azure/workflows/azure-pipelines.yml",
				content:
`# start content
    - script: npm i # replace with 'npm ci' after committing lock file from first install
# end content
`,
				expected:
`# start content
    - script: |
        echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
        echo "//packages.infragistics.com/npm/js-licensed/:_auth=$NPM_AUTH_TOKEN" >> ~/.npmrc
        echo "//packages.infragistics.com/npm/js-licensed/:always-auth=true" >> ~/.npmrc
      displayName: 'Authenticate'
      env:
        NPM_AUTH_TOKEN: $(NPM_AUTH_TOKEN)
    - script: npm i # replace with 'npm ci' after committing lock file from first install
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
			const mockProjectConfig = {
				project: {
					framework: "React"
				}
			 } as unknown as Config;
			spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);
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
				[], // html files
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
			expect(fsSpy.writeFile).toHaveBeenCalledTimes(1);
			expect(fsSpy.glob).toHaveBeenCalledTimes(6);
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
`},
{
				path: ".github/workflows/github-pages.yml",
				content:
`# start content
    - run: npm i # replace with 'npm ci' after committing lock file from first install
# end content
`,
				expected:
`# start content
    - run: echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:_auth=\${{ secrets.NPM_AUTH_TOKEN }}" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:always-auth=true" >> ~/.npmrc
    - run: npm i # replace with 'npm ci' after committing lock file from first install
# end content
`},
{
				path: ".azure/workflows/azure-pipelines.yml",
				content:
`# start content
    - script: npm i # replace with 'npm ci' after committing lock file from first install
# end content
`,
				expected:
`# start content
    - script: |
        echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
        echo "//packages.infragistics.com/npm/js-licensed/:_auth=$NPM_AUTH_TOKEN" >> ~/.npmrc
        echo "//packages.infragistics.com/npm/js-licensed/:always-auth=true" >> ~/.npmrc
      displayName: 'Authenticate'
      env:
        NPM_AUTH_TOKEN: $(NPM_AUTH_TOKEN)
    - script: npm i # replace with 'npm ci' after committing lock file from first install
# end content
`},
{
	path: "index.html",
	content:
	`<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="shortcut icon" href="/favicon.ico" />
		<meta
		name="viewport"
		content="width=device-width, initial-scale=1, shrink-to-fit=no"
		/>
		<meta name="theme-color" content="#000000" />
		<title>IgniteUI for React</title>
		<link rel="stylesheet" href="./styles.css" />
		<link rel="stylesheet"
		href="node_modules/igniteui-react-grids/grids/themes/light/bootstrap.css"
	</head>
	<body>
		<div id="root"></div>
	</body>
	<script type="module" src="/src/main.tsx"></script>
	</html>`,
	expected:
	`<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="shortcut icon" href="/favicon.ico" />
		<meta
		name="viewport"
		content="width=device-width, initial-scale=1, shrink-to-fit=no"
		/>
		<meta name="theme-color" content="#000000" />
		<title>IgniteUI for React</title>
		<link rel="stylesheet" href="./styles.css" />
		<link rel="stylesheet"
		href="node_modules/@infragistics/igniteui-react-grids/grids/themes/light/bootstrap.css"
	</head>
	<body>
		<div id="root"></div>
	</body>
	<script type="module" src="/src/main.tsx"></script>
	</html>`
}];
			(fsSpy.glob as jasmine.Spy).and.returnValues // per workspace
				([ "package.json" ], // root package.json
				["index.html"], // html file
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
			expect(fsSpy.glob).toHaveBeenCalledTimes(6);
		});

		it("Should update package.json files from workspaces with glob patterns", async () => {
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
      "projects/*"
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
    "projects/*"
  ]
}
`
				},
				{
					path: "./projects/charts/package.json",
					content:
					`{
  "name": "charts-project",
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
  "name": "charts-project",
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
					path: "./projects/charts/package.json",
					content:
					`{
  "name": "charts-project",
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
  "name": "charts-project",
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
			// Mock directoryExists to return true for valid workspace directories and src subdirectories
			(fsSpy.directoryExists as jasmine.Spy).and.callFake((dirPath: string) => {
				return dirPath.includes("projects/charts") || dirPath.includes("projects") || dirPath.endsWith("/src");
			});
			
			// Mock glob to simulate finding workspace directories and files
			(fsSpy.glob as jasmine.Spy).and.callFake((dirPath: string, pattern: string) => {
				if (pattern === "projects/*") {
					return ["projects/charts"];
				} else if (pattern === "package.json") {
					return ["package.json"];
				} else if (pattern === "**/*.tsx") {
					if (dirPath.includes("charts")) {
						return [];
					}
					return [];
				} else if (pattern === "**/*.css") {
					return [];
				} else if (pattern === "**/package.json") {
					if (dirPath.includes("charts")) {
						return ["./projects/charts/package.json"];
					}
					return [];
				}
				return [];
			});
			
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath.indexOf("package.json") < 0) {
					return;
				} else if (filePath === "package.json" || filePath === "./package.json") {
					return mockFileArray.find(entry => entry.path === "package.json").content;
				}
				const fileEntry = mockFileArray.find(entry => entry.path === filePath);
				return fileEntry ? fileEntry.content : "";
			});
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			spyOn(Util, "log");
			expect(await updateWorkspace("")).toEqual(true);
			for (const fileEntry of mockFileArray) {
				expect((fsSpy.writeFile as jasmine.Spy)).toHaveBeenCalledWith(fileEntry.path, fileEntry.expected);
			}
			// Expect: 1 for projects/*, 1 for package.json files at root, 1 for logic files, 1 for style files, 1 for package.json in workspace, 1 for vite.config.ts  
			expect(fsSpy.glob).toHaveBeenCalledTimes(7);
		});

		it("Should update vite.config.ts file correctly", async () => {
			const mockFileArray: MockFile[] = [
				{
					path: "package.json",
					content:
					`{
  "dependencies": {
      "igniteui-react-grids": "^18.5.1",
      "some-package": "^0.0.0"
  }
}
	`,
					expected:
					`{
  "dependencies": {
    "@infragistics/igniteui-react-grids": "^18.5.1",
    "some-package": "^0.0.0"
  }
}
`
				},
				{
					path: "vite.config.ts",
					content:
`import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/igniteui-react-grids/grids/themes/light/bootstrap.css",
          dest: "themes",
        },
        {
          src: "node_modules/igniteui-react-grids/grids/themes/light/fluent.css",
          dest: "themes",
        },
      ],
    }),
  ],
});`,
					expected:
`import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@infragistics/igniteui-react-grids/grids/themes/light/bootstrap.css",
          dest: "themes",
        },
        {
          src: "node_modules/@infragistics/igniteui-react-grids/grids/themes/light/fluent.css",
          dest: "themes",
        },
      ],
    }),
  ],
});`
				}];
			(fsSpy.glob as jasmine.Spy).and.returnValues // per workspace
				([ "package.json" ], // root package.json
				[], // html file
				[ "src/home.tsx" ], // logic files
				[], // for each style extension
				[], // inner package.json files
				["vite.config.ts"]); // vite config files
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath.indexOf("package.json") > -1) {
					return mockFileArray.find(entry => entry.path === "package.json").content;
				}
				const fileEntry = mockFileArray.find(entry => entry.path === filePath);
				return fileEntry ? fileEntry.content : "";
			});
			(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			expect(await updateWorkspace("")).toEqual(true);
			for (const fileEntry of mockFileArray) {
				expect((fsSpy.writeFile as jasmine.Spy)).toHaveBeenCalledWith(fileEntry.path, fileEntry.expected);
			}
			expect(fsSpy.glob).toHaveBeenCalledTimes(6);
		});

		it("Should detect and update React projects with projects/* structure but no explicit workspaces", async () => {
			const mockFileArray: MockFile[] = [
				{
					path: "package.json",
					content:
					`{
  "name": "grid-demos-react",
  "dependencies": {
      "igniteui-react-grids": "^18.5.1",
      "some-package": "^0.0.0"
	}
}
	`,
					expected:
					`{
  "name": "grid-demos-react",
  "dependencies": {
    "@infragistics/igniteui-react-grids": "^18.5.1",
    "some-package": "^0.0.0"
  }
}
`
				},
				{
					path: "projects/erp-hierarchical-grid/src/app.tsx",
					content:
`import { IgrGridModule, IgrGrid } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

export default function App() {
	return <IgrGrid />;
}`,
					expected:
`import { IgrGridModule, IgrGrid } from '@infragistics/igniteui-react-grids';
import '@infragistics/igniteui-react-grids/grids/themes/light/bootstrap.css';

export default function App() {
	return <IgrGrid />;
}`
				},
				{
					path: "projects/finance-grid/src/components/GridComponent.tsx",
					content:
`import { IgrColumn } from 'igniteui-react-grids';

export const GridComponent = () => {
	return <IgrColumn />;
}`,
					expected:
`import { IgrColumn } from '@infragistics/igniteui-react-grids';

export const GridComponent = () => {
	return <IgrColumn />;
}`
				}];

			(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
			// Mock directoryExists to return true for projects directories and src
			(fsSpy.directoryExists as jasmine.Spy).and.callFake((dirPath: string) => {
				return dirPath === "projects" || dirPath.endsWith("/projects") || dirPath.includes("projects/") || dirPath === "src" || dirPath.endsWith("/src");
			});
			
			// Mock glob to simulate finding projects directories and files
			(fsSpy.glob as jasmine.Spy).and.callFake((dirPath: string, pattern: string) => {
				if (pattern === "package.json") {
					return ["package.json"];
				} else if (pattern === "projects/*") {
					return ["projects/erp-hierarchical-grid", "projects/finance-grid"];
				} else if (pattern === "**/*.tsx") {
					if (dirPath.includes("erp-hierarchical-grid")) {
						return ["projects/erp-hierarchical-grid/src/app.tsx"];
					} else if (dirPath.includes("finance-grid")) {
						return ["projects/finance-grid/src/components/GridComponent.tsx"];
					} else if (dirPath.endsWith("/src")) {
						return []; // src directory has no tsx files
					}
					return [];
				} else if (pattern === "**/*.css") {
					return [];
				} else if (pattern === "**/package.json") {
					return [];
				} else if (pattern === "vite.config.ts") {
					return [];
				}
				return [];
			});
			
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath.indexOf("package.json") > -1) {
					return mockFileArray.find(entry => entry.path === "package.json").content;
				}
				const fileEntry = mockFileArray.find(entry => entry.path === filePath);
				return fileEntry ? fileEntry.content : "";
			});
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			spyOn(Util, "log");
			expect(await updateWorkspace("")).toEqual(true);
			for (const fileEntry of mockFileArray) {
				expect((fsSpy.writeFile as jasmine.Spy)).toHaveBeenCalledWith(fileEntry.path, fileEntry.expected);
			}
			// Expect calls for: package.json, projects/*, src tsx files, src css files, src package.json, vite.config.ts, erp-hierarchical-grid tsx files, erp-hierarchical-grid css files, erp-hierarchical-grid package.json, finance-grid tsx files, finance-grid css files, finance-grid package.json
			expect(fsSpy.glob).toHaveBeenCalledTimes(13);
		});
	});

	describe("Webcomponents", () => {
		beforeEach(() => {
			fsSpy = jasmine.createSpyObj("fsSpy", ["fileExists", "directoryExists", "readFile", "writeFile", "glob"]);
			spyOn(App.container, "get").and.returnValue(fsSpy);
			spyOnProperty(App, "workDir", "get").and.returnValue("mockDir");
			const mockProjectConfig = {
				project: {
					framework: "Webcomponents"
				}
			 } as unknown as Config;
			spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);
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
				[], //index.html
				[], // logic files
				[ "./project/package.json" ]); // inner package.json files
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
			expect(fsSpy.glob).toHaveBeenCalledTimes(5);
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
    "igniteui-webcomponents-grids": "^4.7.0",
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
    "@infragistics/igniteui-webcomponents-grids": "^4.7.0",
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
}`},
{
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
`},
{
				path: ".github/workflows/github-pages.yml",
				content:
`# start content
    - run: npm i # replace with 'npm ci' after committing lock file from first install
# end content
`,
				expected:
`# start content
    - run: echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:_auth=\${{ secrets.NPM_AUTH_TOKEN }}" >> ~/.npmrc
    - run: echo "//packages.infragistics.com/npm/js-licensed/:always-auth=true" >> ~/.npmrc
    - run: npm i # replace with 'npm ci' after committing lock file from first install
# end content
`},
{
				path: ".azure/workflows/azure-pipelines.yml",
				content:
`# start content
    - script: npm i # replace with 'npm ci' after committing lock file from first install
# end content
`,
				expected:
`# start content
    - script: |
        echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
        echo "//packages.infragistics.com/npm/js-licensed/:_auth=$NPM_AUTH_TOKEN" >> ~/.npmrc
        echo "//packages.infragistics.com/npm/js-licensed/:always-auth=true" >> ~/.npmrc
      displayName: 'Authenticate'
      env:
        NPM_AUTH_TOKEN: $(NPM_AUTH_TOKEN)
    - script: npm i # replace with 'npm ci' after committing lock file from first install
# end content
`},
{
	path: "index.html",
	content:
	`<!doctype html>
<html lang="en-GB">
<head>
	<meta charset="utf-8">
	<base href="/">
	<title>Ignite UI for Web Components</title>
	<link rel="stylesheet" href="./node_modules/igniteui-webcomponents-grids/grids/themes/light/bootstrap.css">
	<link rel="stylesheet" href="./styles.css">
</head>
<body class="ig-scrollbar">
	<app-root></app-root>

	<script type="module" src="./dist/src/index.js"></script>
</body>
</html>
	`,
	expected:
	`<!doctype html>
<html lang="en-GB">
<head>
	<meta charset="utf-8">
	<base href="/">
	<title>Ignite UI for Web Components</title>
	<link rel="stylesheet" href="./node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/bootstrap.css">
	<link rel="stylesheet" href="./styles.css">
</head>
<body class="ig-scrollbar">
	<app-root></app-root>

	<script type="module" src="./dist/src/index.js"></script>
</body>
</html>
	`

},];
			(fsSpy.glob as jasmine.Spy).and.returnValues // per workspace
				([ "package.json" ], // root package.json
				["index.html"], // html file
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
			expect(fsSpy.glob).toHaveBeenCalledTimes(5);
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
			// Mock directoryExists to return true for workspace directories
			(fsSpy.directoryExists as jasmine.Spy).and.callFake((dirPath: string) => {
				return dirPath.includes("projectA") || dirPath.includes("projectB");
			});
			(fsSpy.glob as jasmine.Spy).and.returnValues // per workspace
				([ "package.json" ], // root package.json
				[], //index.html
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
			expect(fsSpy.glob).toHaveBeenCalledTimes(7);
		});

		it("Should update vite.config.ts file correctly", async () => {
			const mockFileArray: MockFile[] = [
				{
					path: "package.json",
					content:
					`{
  "dependencies": {
    "igniteui-webcomponents-grids": "^4.7.0",
    "some-package": "^0.0.0"
  }
}
	`,
					expected:
`{
  "dependencies": {
    "@infragistics/igniteui-webcomponents-grids": "^4.7.0",
    "some-package": "^0.0.0"
  }
}
`
				},
				{
					path: "vite.config.ts",
					content:
`import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "node_modules/igniteui-webcomponents-grids/grids/themes/light/bootstrap.css",
            dest: "themes",
          },
          {
            src: "node_modules/igniteui-webcomponents-grids/grids/themes/light/fluent.css",
            dest: "themes",
          },
        ],
      }),
    ],
  };
});`,
					expected:
`import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/bootstrap.css",
            dest: "themes",
          },
          {
            src: "node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/fluent.css",
            dest: "themes",
          },
        ],
      }),
    ],
  };
});`
				}];
			(fsSpy.glob as jasmine.Spy).and.returnValues // per workspace
				([ "package.json" ], // root package.json
				[], // html file
				["src/app.ts"], // logic files
				[], // inner package.json files
				["vite.config.ts"]); // vite config files
			(fsSpy.readFile as jasmine.Spy).and.callFake((filePath: string) => {
				if (filePath.indexOf("package.json") > -1) {
					return mockFileArray.find(entry => entry.path === "package.json").content;
				}
				const fileEntry = mockFileArray.find(entry => entry.path === filePath);
				return fileEntry ? fileEntry.content : "";
			});
			(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
			spyOn(PackageManager, "ensureRegistryUser").and.returnValue(true);
			expect(await updateWorkspace("")).toEqual(true);
			for (const fileEntry of mockFileArray) {
				expect((fsSpy.writeFile as jasmine.Spy)).toHaveBeenCalledWith(fileEntry.path, fileEntry.expected);
			}
			expect(fsSpy.glob).toHaveBeenCalledTimes(5);
		});
	});
});
