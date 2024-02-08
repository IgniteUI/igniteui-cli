import { App, IFileSystem, PackageManager, ProjectConfig, Util } from "@igniteui/cli-core";
import * as reactPkgResolve from "./react/package-resolve";
import * as wcPkgResolve from "./webcomponents/package-resolve";
import { updateWorkspace } from "./Update";
import { PackageDefinition } from "./../../core/types/PackageDefinition";

interface MockFile {
	path: string;
	content: string;
	expected: string;
}

// tslint:disable: object-literal-sort-keys
describe("updateWorkspace", () => {
	let fsSpy: IFileSystem;

	describe("React", () => {
		beforeEach(() => {
			fsSpy = jasmine.createSpyObj("fsSpy", ["fileExists", "directoryExists", "readFile", "writeFile", "glob"]);
			spyOn(App.container, "get").and.returnValue(fsSpy);
			spyOnProperty(App, "workDir", "get").and.returnValue("mockDir");
			spyOn(ProjectConfig, "getConfig").and.returnValue({ project: { framework: "React" }});
		});

		it("Should fail if current used package is registry package", async () => {
			spyOn(reactPkgResolve, "getReactUpgradeablePackages").and.returnValue([]);
			spyOn(Util, "log");
			expect(await updateWorkspace("")).toEqual(false);
			expect(Util.log).toHaveBeenCalledWith("Your app is already using packages from the Infragistics registry. You are good to go.", "green");
		});

		it("Should fail if no packages.json is found", async () => {
			const upgradable: PackageDefinition = {
				trial: reactPkgResolve.NPM_REACT,
				licensed: reactPkgResolve.FEED_REACT
			};
			spyOn(reactPkgResolve, "getReactUpgradeablePackages").and.returnValue([upgradable]);
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
			const upgradable: PackageDefinition = {
				trial: reactPkgResolve.NPM_REACT,
				licensed: reactPkgResolve.FEED_REACT
			};
			spyOn(reactPkgResolve, "getReactUpgradeablePackages").and.returnValue([upgradable]);
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
			(fsSpy.glob as jasmine.Spy).and.returnValues([]);
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
			expect(fsSpy.glob).toHaveBeenCalledTimes(1);
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
import { bait } from 'igniteui-react-core';
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
import { bait } from 'igniteui-react-core';
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
			(fsSpy.glob as jasmine.Spy).and.returnValues(
				["src/home.tsx"]);
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
			expect(fsSpy.glob).toHaveBeenCalledTimes(1);
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
			spyOn(wcPkgResolve, "getWebcomponentsUpgradeablePackages").and.returnValue([]);
			spyOn(Util, "log");
			expect(await updateWorkspace("")).toEqual(false);
			expect(Util.log).toHaveBeenCalledWith("Your app is already using packages from the Infragistics registry. You are good to go.", "green");
		});

		it("Should fail if no packages.json is found", async () => {
			const upgradable: PackageDefinition = {
				trial: wcPkgResolve.NPM_WEBCOMPONENTS_CORE,
				licensed: wcPkgResolve.FEED_WEBCOMPONENTS_CORE
			};
			spyOn(wcPkgResolve, "getWebcomponentsUpgradeablePackages").and.returnValue([upgradable]);
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
			const upgradable: PackageDefinition = {
				trial: wcPkgResolve.NPM_WEBCOMPONENTS_CORE,
				licensed: wcPkgResolve.FEED_WEBCOMPONENTS_CORE
			};
			spyOn(wcPkgResolve, "getWebcomponentsUpgradeablePackages").and.returnValue([upgradable]);
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
					"igniteui-webcomponents": "^4.7.0",
					"igniteui-webcomponents-core": "^4.7.0",
					"igniteui-dockmanager": "^1.0.0",
					"some-package": "^0.0.0"
				}
			};
			(fsSpy.fileExists as jasmine.Spy).and.returnValue(true);
			(fsSpy.glob as jasmine.Spy).and.returnValues([]);
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
			expect(fsSpy.glob).toHaveBeenCalledTimes(1);
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
			(fsSpy.glob as jasmine.Spy).and.returnValues(
				["src/app.ts"]);
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
			expect(fsSpy.glob).toHaveBeenCalledTimes(1);
		});
	});
});
