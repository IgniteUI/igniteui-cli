// tslint:disable:no-implicit-dependencies
import { EmptyTree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";
// tslint:disable-next-line:no-submodule-imports
import { getWorkspace } from "@schematics/angular/utility/config";
import * as fs from "fs";
import * as path from "path";
import { deleteAll } from "../../spec/helpers/utils";

describe("schematics", () => {
	const collectionPath = path.join(__dirname, "../cli-collection.json");
	const runner: SchematicTestRunner = new SchematicTestRunner("cli-schematics", collectionPath);
	let tree: UnitTestTree;
	const ngJsonConfig = {
		defaultProject: "testProj",
		projects: {
			testProj: {
				architect: {
					serve: {}
				}
			}
		}
	};

	const pkgJsonConfig = {
		dependencies: null,
		devDependencies: null
	};

	beforeEach(() => {
		tree = new UnitTestTree(new EmptyTree());
		tree.create("/angular.json", JSON.stringify(ngJsonConfig));
		tree.create("/package.json", JSON.stringify(pkgJsonConfig));
		tree.create("/src/index.html",
			`<head>
			 </head>
			 <body>
			 </body>`);
	});

	it("should create an ignite-ui-cli.json file correctly", () => {
		expect(tree).toBeTruthy();
		expect(tree.exists("/angular.json")).toBeTruthy();
		expect(tree.exists("/package.json")).toBeTruthy();

		runner.runSchematic("cli-config", {}, tree);
		expect(tree.exists("ignite-ui-cli.json")).toBeTruthy();

		const cliJsonData = JSON.parse(tree.readContent("/ignite-ui-cli.json"));
		expect(cliJsonData.project.projectTemplate).toEqual("ng-cli");
	});

	it("should add typography correctly", () => {
		const targetFile = "/src/index.html";
		expect(tree).toBeTruthy();
		expect(tree.exists("/angular.json")).toBeTruthy();
		expect(tree.exists(targetFile)).toBeTruthy();

		runner.runSchematic("cli-config", {}, tree);

		const content = tree.readContent(targetFile);
		expect(content.includes("<body class=\"igx-typography\">")).toBeTruthy();
	});

	it("should add Titillium and Material Icons stylesheets correctly", () => {
		const targetFile = "/src/index.html";
		expect(tree).toBeTruthy();
		expect(tree.exists("/angular.json")).toBeTruthy();
		expect(tree.exists(targetFile)).toBeTruthy();

		runner.runSchematic("cli-config", {}, tree);

		const content = tree.readContent(targetFile);
		const headContentsRegex = /(?:<head>)([\s\S]*)(?:<\/head>)/;

		expect(headContentsRegex.test(content)).toBeTruthy();
		expect(headContentsRegex.exec(content).pop().includes("family=Titillium+Web")).toBeTruthy();
		expect(headContentsRegex.exec(content).pop().includes("family=Material+Icons")).toBeTruthy();
	});

	it("should add the default scss theme correctly", () => {
		const targetFile = "/src/styles.scss";
		tree.create(targetFile, "");

		runner.runSchematic("cli-config", {}, tree);

		const content = tree.readContent(targetFile);
		expect(content.includes("@import")).toBeTruthy();
	});

	it("should add the default css theme to the workspace", () => {
		const cssFile = "/src/styles.css";
		tree.create(cssFile, "");
		const targetFile = "/angular.json";
		expect(tree.exists(targetFile)).toBeTruthy();

		const targetImport = "node_modules/igniteui-angular/styles/igniteui-angular.css";
		runner.runSchematic("cli-config", {}, tree);
		const workspace = getWorkspace(tree) as any;
		const currentProjectName = workspace.defaultProject;

		expect(
			workspace.projects[currentProjectName].architect.build.options.styles.filter(s => s.includes(targetImport)).length
		)
			.toBeGreaterThan(0);
		expect(
			workspace.projects[currentProjectName].architect.test.options.styles.filter(s => s.includes(targetImport)).length
		)
			.toBeGreaterThan(0);
	});

	it("should add the default sass theme correctly", () => {
		const targetFile = "/src/styles.sass";
		tree.create(targetFile, "");

		runner.runSchematic("cli-config", {}, tree);

		const content = tree.readContent(targetFile);
		expect(content.includes("@import")).toBeTruthy();
	});

	it("should add BrowserAnimationsModule to app.module.ts", () => {
		const moduleContent =
			`import { NgModule } from '@angular/core';\r\n` +
			`@NgModule({\r\n` +
			`	imports: []\r\n` +
			`})\r\n` +
			`export class AppModule {\r\n` +
			`}\r\n`;

		const moduleContentAfterSchematic =
			`import { NgModule } from '@angular/core';\r\n` +
			`import { BrowserAnimationsModule } from "@angular/platform-browser/animations";\r\n` +
			`@NgModule({\r\n` +
			`	imports: [BrowserAnimationsModule]\r\n` +
			`})\r\n` +
			`export class AppModule {\r\n` +
			`}\r\n`;

		const targetFile = path.join(process.cwd(), "/src/app/app.module.ts");
		if (!fs.existsSync("./src")) {
			fs.mkdirSync("./src");
			process.chdir("./src");
			if (!fs.existsSync("./app")) {
				fs.mkdirSync("./app");
				process.chdir("../");
			}
		}
		fs.writeFileSync(targetFile, moduleContent);

		runner.runSchematic("cli-config", {}, tree);
		const content = fs.readFileSync(targetFile, "utf8");
		expect(content).toEqual(moduleContentAfterSchematic);
		deleteAll("./src");
		fs.rmdirSync("./src");
	});
});
