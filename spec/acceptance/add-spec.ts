import {
	 FEED_ANGULAR, NPM_ANGULAR, GoogleAnalytics, GoogleAnalyticsParameters, ProjectConfig, FrameworkId, Config
} from "@igniteui/cli-core";
import * as fs from "fs";
import { EOL } from "os";
import { parse } from "path";
import * as cli from "../../packages/cli/lib/cli";
import { deleteAll, resetSpy } from "../helpers/utils";

function createMockConfig(): Config {
    return {
		version: '1.0.0',
		packagesInstalled: true,
		build: {},
		igPackageRegistry: 'https://example.com',
		skipGit: true,
		disableAnalytics: true,
		customTemplates: [],
		stepByStep: {
			frameworks: ["angular", "react"],
			[FrameworkId.angular]: {
				projTypes: ["igx-ts", "igx-es6"]
			},
			[FrameworkId.react]: {
				projTypes: ["igx-react"]
			},
			[FrameworkId.jquery]: {
				projTypes: ["igx-jquery"]
			},
			[FrameworkId.webComponents]: {
				projTypes: ["igx-webcomponents"]
			}
		},
		project: {
			defaultPort: 4200,
			framework: "mock-ng",
			projectType: "mock-igx-ts",
			projectTemplate: "mock-side-nav",
			theme: "default-theme",
			themePath: "/path/to/theme",
			components: ["mock-component"],
			isBundle: true,
			isShowcase: false,
			version: '1.0.0',
			sourceRoot: "/src",
			igniteuiSource: "igniteui-source"
		}
	};
}

describe("Add command", () => {
	let testFolder = parse(__filename).name;
	// tslint:disable:no-console
	beforeEach(() => {
		spyOn(console, "log");
		spyOn(console, "error");
		spyOn(GoogleAnalytics, "post");

		// test folder, w/ existing check:
		while (fs.existsSync(`./output/${testFolder}`)) {
			testFolder += 1;
		}
		fs.mkdirSync(`./output/${testFolder}`);
		process.chdir(`./output/${testFolder}`);
	});

	afterEach(() => {
		// clean test folder:
		process.chdir("../../");
		fs.rmdirSync(`./output/${testFolder}`);
	});

	it("Should not work without a project", async () => {
		await cli.run(["add", "grid", "name"]);

		expect(console.error).toHaveBeenCalledWith(
			jasmine.stringMatching(/Add command is supported only on existing project created with igniteui-cli\s*/)
		);
		expect(console.log).toHaveBeenCalledTimes(0);
		let expectedPrams: GoogleAnalyticsParameters = {
			t: "screenview",
			cd: "Add"
		};
		expect(GoogleAnalytics.post).toHaveBeenCalledWith(expectedPrams);

		expectedPrams = {
			t: "screenview",
			cd: "error: Add command is supported only on existing project created with igniteui-cli"
		};
		expect(GoogleAnalytics.post).toHaveBeenCalledWith(expectedPrams);
		expect(GoogleAnalytics.post).toHaveBeenCalledTimes(2);

		resetSpy(console.error);
		await cli.run(["add"]);
		expect(console.error).toHaveBeenCalledWith(
			jasmine.stringMatching(/Add command is supported only on existing project created with igniteui-cli\s*/)
		);
		expect(console.log).toHaveBeenCalledTimes(0);
	});

	it("Should not work quickstart project", async () => {
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({ project: { isShowcase: true } }));
		await cli.run(["add", "grid", "name"]);

		expect(console.error).toHaveBeenCalledWith(
			jasmine.stringMatching(/Showcases and quickstart projects don't support the add command\s*/)
		);
		expect(console.log).toHaveBeenCalledTimes(0);

		fs.unlinkSync(ProjectConfig.configFile);
	});

	it("Should not work with wrong framework", async () => {
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({ project: { framework: "angular2" } }));
		await cli.run(["add", "grid", "name"]);

		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Framework not supported\s*/));
		expect(console.log).toHaveBeenCalledTimes(0);

		fs.unlinkSync(ProjectConfig.configFile);
	});

	it("Should not work with wrong template", async () => {
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({ project: { framework: "jquery" } }));
		await cli.run(["add", "wrong", "name"]);

		expect(console.error).toHaveBeenCalledWith(
			jasmine.stringMatching(/Template doesn't exist in the current library\s*/)
		);
		expect(console.log).toHaveBeenCalledTimes(0);

		fs.unlinkSync(ProjectConfig.configFile);
	});

	it("Should correctly add jQuery template", async () => {
		// TODO: Mock out template manager and project register
		const mockConfig = createMockConfig();
		spyOn(ProjectConfig, "globalConfig").and.returnValue(mockConfig);

		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({
			project: { framework: "jquery", projectType: "js", components: [], igniteuiSource: "", themePath: "" }
		}));
		fs.writeFileSync("ignite-cli-views.js", "[];");
		await cli.run(["add", "grid", "Test view"]);

		expect(console.error).toHaveBeenCalledTimes(0);
		expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(/View 'Test view' added\s*/));

		expect(fs.existsSync("./test-view")).toBeTruthy();
		expect(fs.existsSync("./test-view/index.html")).toBeTruthy();
		fs.unlinkSync("./test-view/index.html");
		fs.unlinkSync("./test-view/style.css");
		fs.rmdirSync("./test-view");

		fs.unlinkSync("ignite-cli-views.js");
		fs.unlinkSync(ProjectConfig.configFile);
	});

	it("Should not duplicate add jq Grid template", async () => {
		const mockConfig = createMockConfig();
		spyOn(ProjectConfig, "globalConfig").and.returnValue(mockConfig);

		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({
			project: { framework: "jquery", projectType: "js", components: [], igniteuiSource: "", themePath: "" }
		}));
		fs.writeFileSync("ignite-cli-views.js", "[];");
		await cli.run(["add", "grid", "Test view"]);

		expect(console.error).toHaveBeenCalledTimes(0);
		expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(/View 'Test view' added\s*/));

		expect(fs.existsSync("./test-view")).toBeTruthy();
		expect(fs.existsSync("./test-view/index.html")).toBeTruthy();

		fs.writeFileSync("./test-view/index.html", "test");
		await cli.run(["add", "grid", "Test view"]);

		expect(console.error).toHaveBeenCalledWith(
			jasmine.stringMatching(/test-view[\\\/]index.html already exists!*/)
		);
		expect(fs.readFileSync("./test-view/index.html").toString()).toEqual("test", "Shouldn't overwrite file contents");

		// dash
		resetSpy(console.error);
		await cli.run(["add", "grid", "test-View"]);

		expect(console.error).toHaveBeenCalledWith(
			jasmine.stringMatching(/test-view[\\\/]index.html already exists!*/)
		);
		expect(fs.readFileSync("./test-view/index.html").toString()).toEqual("test", "Shouldn't overwrite file contents");

		// trim
		resetSpy(console.error);
		await cli.run(["add", "grid", "    Test-view  \t "]);

		expect(console.error).toHaveBeenCalledWith(
			jasmine.stringMatching(/test-view[\\\/]index.html already exists!*/)
		);
		expect(fs.readFileSync("./test-view/index.html").toString()).toEqual("test", "Shouldn't overwrite file contents");

		fs.unlinkSync("./test-view/index.html");
		fs.unlinkSync("./test-view/style.css");
		fs.rmdirSync("./test-view");
		fs.unlinkSync("ignite-cli-views.js");
		fs.unlinkSync(ProjectConfig.configFile);
	});

	it("Should correctly add Angular template", async () => {
		const mockConfig = createMockConfig();
		spyOn(ProjectConfig, "globalConfig").and.returnValue(mockConfig);

		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({
			project: { framework: "angular", projectType: "ig-ts", components: [] }
		}));
		fs.mkdirSync(`./src`);
		fs.mkdirSync(`./src/app`);
		fs.writeFileSync("src/app/app-routing.module.ts", "const routes: Routes = [];");
		fs.writeFileSync("src/app/app.module.ts", `@NgModule({
			declarations: [
			  AppComponent,
			  HomeComponent
			],
			imports: [ BrowserModule ],
			bootstrap: [AppComponent]
		})
		export class AppModule { }`);
		await cli.run(["add", "grid", "Test view"]);

		expect(console.error).toHaveBeenCalledTimes(0);
		expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(/View 'Test view' added\s*/));

		expect(fs.existsSync("./src/app/components/test-view")).toBeTruthy();
		const componentPath = "./src/app/components/test-view/test-view.component.ts";
		expect(fs.existsSync(componentPath)).toBeTruthy();
		// file contents:
		expect(fs.readFileSync(componentPath, "utf-8")).toContain("export class TestViewComponent");
		expect(fs.readFileSync("src/app/app-routing.module.ts", "utf-8").replace(/\s/g, "")).toBe(
			`import { TestViewComponent } from "./components/test-view/test-view.component";
			const routes: Routes = [{ path: "test-view", component: TestViewComponent, data: { text: "Test view" } }];
			`.replace(/\s/g, "")
		);
		expect(fs.readFileSync("src/app/app.module.ts", "utf-8").replace(/\s/g, "")).toBe(
			`import { TestViewComponent } from "./components/test-view/test-view.component";
			@NgModule({
				declarations: [
					AppComponent,
					HomeComponent,
					TestViewComponent
				],
				imports: [ BrowserModule ],
				bootstrap: [AppComponent]
			})
			export class AppModule {
			}
			`.replace(/\s/g, "")
		);
		fs.unlinkSync("./src/app/components/test-view/test-view.component.ts");
		fs.rmSync("./src", { recursive: true,  force: true });

		fs.unlinkSync(ProjectConfig.configFile);

		let expectedPrams: GoogleAnalyticsParameters = {
			t: "screenview",
			cd: "Add"
		};
		expect(GoogleAnalytics.post).toHaveBeenCalledWith(expectedPrams);

		expectedPrams = {
			t: "event",
			ec: "$ig add",
			ea: "template id: grid; file name: Test view",
			cd1: "angular",
			cd2: "ig-ts",
			cd5: "Data Grids",
			cd7: "grid",
			cd8: "Grid",
			cd11: false,
			cd14: undefined
		};
		expect(GoogleAnalytics.post).toHaveBeenCalledWith(expectedPrams);
		expect(GoogleAnalytics.post).toHaveBeenCalledTimes(2);
	});

	for (const igxPackage of [NPM_ANGULAR, FEED_ANGULAR]) {
		it(`Should correctly add Ignite UI for Angular template - ${igxPackage}`, async () => {
			const mockConfig = createMockConfig();
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockConfig);

			fs.writeFileSync("package.json", JSON.stringify({
				dependencies: { [igxPackage]: "9.0.0" }
			}));
			fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({
				project: { framework: "angular", projectType: "igx-ts-legacy", components: [] }
			}));
			fs.writeFileSync("tslint.json", JSON.stringify({
				rules: {
					"indent": [true, "spaces", 2],
					"prefer-const": true,
					"quotemark": [true, "single"]
				}
			}));
			fs.mkdirSync(`./src`);
			fs.mkdirSync(`./src/app`);
			fs.writeFileSync("src/app/app-routing.module.ts", "const routes: Routes = [];");
			fs.writeFileSync("src/app/app.module.ts", `@NgModule({
				declarations: [
				AppComponent,
				HomeComponent
				],
				imports: [
				BrowserModule
				],
				bootstrap: [AppComponent]
			})
			export class AppModule { }`);

			await cli.run(["add", "grid", "Test view"]);

			expect(console.error).toHaveBeenCalledTimes(0);
			expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(/View 'Test view' added\s*/));

			expect(fs.existsSync("./src/app/test-view")).toBeTruthy();
			const componentPath = "./src/app/test-view/test-view.component.ts";
			expect(fs.existsSync(componentPath)).toBeTruthy();
			// file contents:
			expect(fs.readFileSync(componentPath, "utf-8")).toContain("export class TestViewComponent");
			expect(fs.readFileSync("src/app/app-routing.module.ts", "utf-8")).toBe(
				`import { TestViewComponent } from './test-view/test-view.component';` + EOL +
				`const routes: Routes = [{ path: 'test-view', component: TestViewComponent, data: { text: 'Test view' } }];` + EOL
			);

			const expectedModuleSource =
`import { TestViewComponent } from './test-view/test-view.component';
import { IgxGridModule } from '${igxPackage}';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestViewComponent
  ],
  imports: [
    BrowserModule,
    IgxGridModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
`;
			expect(fs.readFileSync("src/app/app.module.ts", "utf-8").replace(/\r\n/g, "\n"))
				.toBe(expectedModuleSource.replace(/\r\n/g, "\n"));

			fs.unlinkSync("./src/app/test-view/test-view.component.ts");
			fs.rmSync("./src", { recursive: true,  force: true });

			fs.unlinkSync(ProjectConfig.configFile);
			fs.unlinkSync("tslint.json");
			fs.unlinkSync("package.json");
		});
	}

	it("Should correctly add Ignite UI for Angular template passing folders path and spaces/tabs in name arg"
		, async () => {
			const mockConfig = createMockConfig();
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockConfig);

			fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({
				project: { framework: "angular", projectType: "igx-ts-legacy", components: [] }
			}));
			fs.writeFileSync("tslint.json", JSON.stringify({
				rules: {
					"indent": [true, "spaces", 2],
					"prefer-const": true,
					"quotemark": [true, "single"]
				}
			}));
			fs.mkdirSync(`./src`);
			fs.mkdirSync(`./src/app`);
			fs.writeFileSync("src/app/app-routing.module.ts", "const routes: Routes = [];");
			fs.writeFileSync("src/app/app.module.ts", `@NgModule({
			declarations: [
			  AppComponent,
			  HomeComponent
			],
			imports: [
			  BrowserModule
			],
			bootstrap: [AppComponent]
		})
		export class AppModule { }`);

			await cli.run(["add", "grid", "folder/test nested folders/  \t Test Nested Folders	\t"]);

			expect(console.error).toHaveBeenCalledTimes(0);
			expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(/View 'Test Nested Folders' added\s*/));

			const componentFolder = "folder/test-nested-folders/test-nested-folders";
			expect(fs.existsSync(`./src/app/${componentFolder}`)).toBeTruthy();
			const componentPath = `./src/app/${componentFolder}/test-nested-folders.component.ts`;
			expect(fs.existsSync(componentPath)).toBeTruthy();
			// file contents:
			expect(fs.readFileSync(componentPath, "utf-8")).toContain("export class TestNestedFoldersComponent");

			expect(fs.readFileSync("src/app/app-routing.module.ts", "utf-8")).toBe(
				`import { TestNestedFoldersComponent } from './${componentFolder}/test-nested-folders.component';` + EOL +
				// tslint:disable-next-line:max-line-length
				`const routes: Routes = [{ path: 'test-nested-folders', component: TestNestedFoldersComponent, data: { text: 'Test Nested Folders' } }];` + EOL
			);

			expect(fs.readFileSync("src/app/app.module.ts", "utf-8")).toBe(
				`import { TestNestedFoldersComponent } from './${componentFolder}/test-nested-folders.component';` + EOL +
				`import { IgxGridModule } from 'igniteui-angular';` + EOL +
				`@NgModule({` + EOL +
				`  declarations: [` + EOL +
				`    AppComponent,` + EOL +
				`    HomeComponent,` + EOL +
				`    TestNestedFoldersComponent` + EOL +
				`  ],` + EOL +
				`  imports: [` + EOL +
				`    BrowserModule,` + EOL +
				`    IgxGridModule` + EOL +
				`  ],` + EOL +
				`  bootstrap: [AppComponent]` + EOL +
				`})` + EOL +
				`export class AppModule {` + EOL +
				`}` + EOL
			);

			deleteAll("./src");
			fs.rmdirSync("./src");
			fs.unlinkSync(ProjectConfig.configFile);
			fs.unlinkSync("tslint.json");
		});

	it("Should correctly add React template", async () => {
		// TODO: Mock out template manager and project register
		const mockConfig = createMockConfig();
		spyOn(ProjectConfig, "globalConfig").and.returnValue(mockConfig);

		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({
			project: { framework: "react", projectType: "es6", components: [] }
		}));
		fs.mkdirSync(`./src`);
		fs.writeFileSync("src/routes.json", "[]");
		await cli.run(["add", "grid", "My grid"]);

		expect(console.error).toHaveBeenCalledTimes(0);
		expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(/View 'My grid' added\s*/));

		expect(fs.existsSync("./src/components/my-grid")).toBeTruthy();
		expect(fs.existsSync("./src/components/my-grid/index.js")).toBeTruthy();
		fs.unlinkSync("./src/components/my-grid/index.js");
		fs.rmSync("./src", { recursive: true,  force: true });

		fs.unlinkSync(ProjectConfig.configFile);
	});
});
