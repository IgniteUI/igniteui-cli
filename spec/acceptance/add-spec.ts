import {
	FEED_ANGULAR,
	NPM_ANGULAR,
	GoogleAnalytics,
	GoogleAnalyticsParameters,
	ProjectConfig,
	Config,
	PackageManager
} from "@igniteui/cli-core";
import * as fs from "fs";
import { parse } from "path";
import * as cli from "../../packages/cli/lib/cli";
import { deleteAll, resetSpy } from "../helpers/utils";

describe("Add command", () => {
	let testFolder = parse(__filename).name;
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
		const mockConfig = {} as unknown as Config;
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
		const mockConfig = {} as unknown as Config;
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
			jasmine.stringMatching(/test-view[\\\/]style.css already exists!*/)
		);
		expect(fs.readFileSync("./test-view/index.html").toString()).toEqual("test", "Shouldn't overwrite file contents");

		// dash
		resetSpy(console.error);
		await cli.run(["add", "grid", "test-View"]);

		expect(console.error).toHaveBeenCalledWith(
			jasmine.stringMatching(/test-view[\\\/]style.css already exists!*/)
		);
		expect(fs.readFileSync("./test-view/index.html").toString()).toEqual("test", "Shouldn't overwrite file contents");

		// trim
		resetSpy(console.error);
		await cli.run(["add", "grid", "    Test-view  \t "]);

		expect(console.error).toHaveBeenCalledWith(
			jasmine.stringMatching(/test-view[\\\/]style.css already exists!*/)
		);
		expect(fs.readFileSync("./test-view/index.html").toString()).toEqual("test", "Shouldn't overwrite file contents");

		fs.unlinkSync("./test-view/index.html");
		fs.unlinkSync("./test-view/style.css");
		fs.rmdirSync("./test-view");
		fs.unlinkSync("ignite-cli-views.js");
		fs.unlinkSync(ProjectConfig.configFile);
	});

	for (const igxPackage of [NPM_ANGULAR, FEED_ANGULAR]) {
		it(`Should correctly add Ignite UI for Angular template - ${igxPackage}`, async () => {
			const mockConfig = {} as unknown as Config;
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockConfig);

			fs.writeFileSync("package.json", JSON.stringify({
				dependencies: { [igxPackage]: "9.0.0" }
			}));
			fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({
				project: { framework: "angular", projectType: "igx-ts", components: [] }
			}));
			fs.writeFileSync(".editorconfig", `
				[*.ts]
				indent_style = space
				indent_size = 2
				quote_type = single
			`);
			fs.mkdirSync(`./src`);
			fs.mkdirSync(`./src/app`);
			fs.writeFileSync("src/app/app.routes.ts",
`import { Routes } from '@angular/router';
import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';

export const routes: Routes = [
  { path: 'error', component: UncaughtError },
  { path: '**', component: NotFound } // must always be last
];
`);

			const appContent =
`import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Home - IgniteUI for Angular');
}
`;

			fs.writeFileSync("src/app/app.ts", appContent);
			await cli.run(["add", "grid", "Test view"]);

			expect(console.error).toHaveBeenCalledTimes(0);
			expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(/View 'Test view' added\s*/));

			expect(fs.existsSync("./src/app/test-view")).toBeTruthy();
			const componentPath = "./src/app/test-view/test-view.ts";
			expect(fs.existsSync(componentPath)).toBeTruthy();
			// file contents:
			expect(fs.readFileSync(componentPath, "utf-8")).toContain(`import { ColumnType, IgxGridComponent, IgxPaginatorComponent } from '${igxPackage}';`);

			const expectedRoutesSource =
`import { Routes } from '@angular/router';
import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';
import { TestView } from './test-view/test-view';

export const routes: Routes = [
  { path: 'error', component: UncaughtError },
  { path: 'test-view', component: TestView, data: { text: 'Test view' } },
  { path: '**', component: NotFound } // must always be last
];
`;
			expect(fs.readFileSync("src/app/app.routes.ts", "utf-8").replace(/\r\n/g, "\n"))
				.toBe(expectedRoutesSource.replace(/\r\n/g, "\n"));

			expect(fs.readFileSync("src/app/app.ts", "utf-8")).toBe(appContent);

			fs.unlinkSync("./src/app/test-view/test-view.ts");
			fs.rmSync("./src", { recursive: true,  force: true });

			fs.unlinkSync(ProjectConfig.configFile);
			fs.unlinkSync(".editorconfig");
			fs.unlinkSync("package.json");
		});
	}

	it("Should correctly add Ignite UI for Angular template passing folders path and spaces/tabs in name arg"
		, async () => {
			const mockConfig = {} as unknown as Config;
			spyOn(ProjectConfig, "globalConfig").and.returnValue(mockConfig);
			spyOn(PackageManager, "queuePackage");

			fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({
				project: { framework: "angular", projectType: "igx-ts", components: [] }
			}));
			fs.writeFileSync(".editorconfig", `
				[*.ts]
				indent_style = space
				indent_size = 2
				quote_type = single
			`);
			fs.mkdirSync(`./src`);
			fs.mkdirSync(`./src/app`);
			fs.writeFileSync("src/app/app.routes.ts",
`import { Routes } from '@angular/router';

export const routes: Routes = [
];
`);

			await cli.run(["add", "grid", "folder/test nested folders/  \t Test Nested Folders	\t"]);

			expect(console.error).toHaveBeenCalledTimes(0);
			expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(/View 'Test Nested Folders' added\s*/));

			const componentFolder = "folder/test-nested-folders/test-nested-folders";
			expect(fs.existsSync(`./src/app/${componentFolder}`)).toBeTruthy();
			const componentPath = `./src/app/${componentFolder}/test-nested-folders.ts`;
			expect(fs.existsSync(componentPath)).toBeTruthy();
			// file contents:
			expect(fs.readFileSync(componentPath, "utf-8")).toContain("export class TestNestedFolders");

			const expectedRoutesSource =
`import { Routes } from '@angular/router';
import { TestNestedFolders } from './${componentFolder}/test-nested-folders';

export const routes: Routes = [
  { path: 'test-nested-folders', component: TestNestedFolders, data: { text: 'Test Nested Folders' } }
];
`;
			expect(fs.readFileSync("src/app/app.routes.ts", "utf-8").replace(/\r\n/g, "\n"))
				.toBe(expectedRoutesSource.replace(/\r\n/g, "\n"));

			deleteAll("./src");
			fs.rmdirSync("./src");
			fs.unlinkSync(ProjectConfig.configFile);
			fs.unlinkSync(".editorconfig");
	});

	it("Should correctly add React template", async () => {
		// TODO: Mock out template manager and project register
		const mockConfig = {} as unknown as Config;
		spyOn(ProjectConfig, "globalConfig").and.returnValue(mockConfig);
		spyOn(PackageManager, "queuePackage");

		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({
			project: { framework: "react", projectType: "igr-ts", components: [] }
		}));
		fs.mkdirSync(`./src`);
		fs.mkdirSync(`./src/app`);
		fs.writeFileSync("src/app/app-routes.tsx", `
			export const routes = [
			];
		`);
		await cli.run(["add", "grid", "My grid"]);

		expect(console.error).toHaveBeenCalledTimes(0);
		expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(/View 'My grid' added\s*/));

		expect(fs.existsSync("./src/app/my-grid/my-grid.tsx")).toBeTruthy();
		expect(fs.existsSync("./src/app/my-grid/my-grid.test.tsx")).toBeTruthy();

		deleteAll("./src");
		fs.rmdirSync("./src");
		fs.unlinkSync(ProjectConfig.configFile);
	});
});
