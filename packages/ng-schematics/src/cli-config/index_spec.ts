import * as path from "path";

import { EmptyTree } from "@angular-devkit/schematics";
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";
import { FEED_PACKAGE, NPM_PACKAGE } from "@igniteui/angular-templates";

describe("cli-config schematic", () => {
	const collectionPath = path.join(__dirname, "../collection.json");
	const runner: SchematicTestRunner = new SchematicTestRunner("cli-schematics", collectionPath);
	let tree: UnitTestTree;
	const sourceRoot = "src";
	// tslint:disable: object-literal-sort-keys
	const ngJsonConfig = {
		defaultProject: "testProj",
		projects: {
			testProj: {
				sourceRoot,
				architect: {
					build: {
						options: {
							main: `${sourceRoot}/main.ts`,
							polyfills: `${sourceRoot}/polyfills.ts`,
							scripts: [],
							index: `${sourceRoot}/index.html`
						}
					},
					serve: {},
					test: {}
				}
			}
		},
		version: 1
	};

	const pkgJsonConfig = {
		dependencies: {},
		devDependencies: {},
		peerDependencies: {}
	};

	function createIgPkgJson(igxPkg = NPM_PACKAGE) {
		const filePath = `node_modules/${igxPkg}/package.json`;
		tree.create(filePath, JSON.stringify(pkgJsonConfig));
		const pkgJson = JSON.parse(tree.readContent(filePath));
		const angularCommon = "@angular/common";
		const angularCore = "@angular/core";
		const targetVersion = "^7.0.3";
		pkgJson.peerDependencies[angularCommon] = targetVersion;
		pkgJson.peerDependencies[angularCore] = targetVersion;

		tree.overwrite(filePath, JSON.stringify(pkgJson));
	}

	function populatePkgJson(igxPkg = NPM_PACKAGE) {
		const targetFile = "/package.json";
		const angularCore = "@angular/core";
		const angularCommon = "@angular/common";
		const version = "^6.1.0";
		const pkgJson = JSON.parse(tree.readContent(targetFile));
		pkgJson.dependencies[angularCore] = version;
		pkgJson.dependencies[angularCommon] = version;
		pkgJson.dependencies[igxPkg] = "~7.0.0";
		tree.overwrite(targetFile, JSON.stringify(pkgJson));
	}

	function resetTree() {
		tree.overwrite("/angular.json", JSON.stringify(ngJsonConfig));
		tree.overwrite("/package.json", JSON.stringify(pkgJsonConfig));
		tree.overwrite("/src/index.html",
			`<head>
			 </head>
			 <body>
			 </body>`);
		tree.delete("/ignite-ui-cli.json");
	}

	beforeEach(() => {
		tree = new UnitTestTree(new EmptyTree());
		tree.create("/angular.json", JSON.stringify(ngJsonConfig));
		tree.create("/package.json", JSON.stringify(pkgJsonConfig));
		tree.create("/src/index.html",
			`<head>
			 </head>
			 <body>
			 </body>`);
		createIgPkgJson();
		populatePkgJson();
	});

	it("should create the needed files correctly", () => {
		expect(tree).toBeTruthy();
		expect(tree.exists("/angular.json")).toBeTruthy();
		expect(tree.exists("/package.json")).toBeTruthy();
		expect(tree.exists("/src/index.html"));
	});

	it("should create an ignite-ui-cli.json file correctly", async () => {
		await runner.runSchematicAsync("cli-config", {}, tree).toPromise();
		expect(tree.exists("ignite-ui-cli.json")).toBeTruthy();

		const cliJsonData = JSON.parse(tree.readContent("/ignite-ui-cli.json"));
		expect(cliJsonData.project.projectTemplate).toEqual("ng-cli");
	});

	it("should add typography correctly", async () => {
		const targetFile = "/src/index.html";
		await runner.runSchematicAsync("cli-config", {}, tree).toPromise();

		const content = tree.readContent(targetFile);
		expect(content.includes("<body class=\"igx-typography\">")).toBeTruthy();
	});

	it("should add Titillium and Material Icons stylesheets correctly", async () => {
		const targetFile = "/src/index.html";
		await runner.runSchematicAsync("cli-config", {}, tree).toPromise();

		const content = tree.readContent(targetFile);
		const headContentsRegex = /(?:<head>)([\s\S]*)(?:<\/head>)/;

		expect(headContentsRegex.test(content)).toBeTruthy();
		expect(headContentsRegex.exec(content)!.pop()).toContain("family=Titillium+Web");
		expect(headContentsRegex.exec(content)!.pop()).toContain("family=Material+Icons");
	});

	it("should add the default scss theme correctly", async () => {
		const targetFile = "/src/styles.scss";
		tree.create(targetFile, "");

		await runner.runSchematicAsync("cli-config", {}, tree).toPromise();

		let content = tree.readContent(targetFile);
		expect(content.includes(`@import "~${NPM_PACKAGE}`)).toBeTruthy();

		tree.overwrite(targetFile, "");
		resetTree();
		createIgPkgJson(FEED_PACKAGE);
		populatePkgJson(FEED_PACKAGE);

		await runner.runSchematicAsync("cli-config", {}, tree).toPromise();
		content = tree.readContent(targetFile);
		expect(content.includes(`@import "~${FEED_PACKAGE}`)).toBeTruthy();
	});

	it("should add the default css theme to the workspace", async () => {
		const targetFile = "/angular.json";
		expect(tree.exists(targetFile)).toBeTruthy();

		let targetImport = `node_modules/${NPM_PACKAGE}/styles/igniteui-angular.css`;
		await runner.runSchematicAsync("cli-config", {}, tree).toPromise();
		let workspace = JSON.parse(tree.read("/angular.json")!.toString());
		let currentProjectName = workspace.defaultProject;

		expect(
			workspace.projects[currentProjectName].architect.build.options.styles.filter(
				(s: string) => s.includes(targetImport)).length
		)
			.toBeGreaterThan(0);
		expect(
			workspace.projects[currentProjectName].architect.test.options.styles.filter(
				(s: string) => s.includes(targetImport)).length
		)
			.toBeGreaterThan(0);

		resetTree();
		createIgPkgJson(FEED_PACKAGE);
		populatePkgJson(FEED_PACKAGE);
		targetImport = `node_modules/${FEED_PACKAGE}/styles/igniteui-angular.css`;

		await runner.runSchematicAsync("cli-config", {}, tree).toPromise();
		workspace = JSON.parse(tree.read("/angular.json")!.toString());
		currentProjectName = workspace.defaultProject;

		expect(
			workspace.projects[currentProjectName].architect.build.options.styles.filter(
				(s: string) => s.includes(targetImport)).length
		)
			.toBeGreaterThan(0);
		expect(
			workspace.projects[currentProjectName].architect.test.options.styles.filter(
				(s: string) => s.includes(targetImport)).length
		)
			.toBeGreaterThan(0);
	});

	it("should not add the default css theme to the workspace if the global styles file is scss", async () => {
		// if the global styles file is scss or sass - the default theme is imported there
		const stylesheet = "/src/styles.scss";
		tree.create(stylesheet, "");
		const targetFile = "/angular.json";
		expect(tree.exists(targetFile)).toBeTruthy();

		await runner.runSchematicAsync("cli-config", {}, tree).toPromise();
		const workspace = JSON.parse(tree.read("/angular.json")!.toString());
		const currentProjectName = workspace.defaultProject;

		// the schematic creates the hierarchy that leads to the styles object within the workspace,
		// providing that it is not already present
		expect(workspace.projects[currentProjectName].architect.build.styles).toBeUndefined();
		expect(workspace.projects[currentProjectName].architect.test.styles).toBeUndefined();
	});

	it("should add the default sass theme correctly", async () => {
		const targetFile = "/src/styles.sass";
		tree.create(targetFile, "");

		await runner.runSchematicAsync("cli-config", {}, tree).toPromise();

		let content = tree.readContent(targetFile);
		expect(content.includes(`@import "~${NPM_PACKAGE}`)).toBeTruthy();

		tree.overwrite(targetFile, "");
		resetTree();
		createIgPkgJson(FEED_PACKAGE);
		populatePkgJson(FEED_PACKAGE);

		await runner.runSchematicAsync("cli-config", {}, tree).toPromise();
		content = tree.readContent(targetFile);
		expect(content.includes(`@import "~${FEED_PACKAGE}`)).toBeTruthy();
	});

	it("should add BrowserAnimationsModule to app.module.ts", async () => {
		const moduleContent =
`import { NgModule } from '@angular/core';
@NgModule({
	imports: []
})
export class AppModule {
}
`;

		const moduleContentAfterSchematic =
`import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
	imports: [BrowserAnimationsModule]
})
export class AppModule {
}
`;
		const targetFile = "./src/app/app.module.ts";
		tree.create(targetFile, moduleContent);

		await runner.runSchematicAsync("cli-config", {}, tree).toPromise();
		const content = tree.readContent(targetFile);
		expect(content.replace(/\r\n/g, "\n")).toEqual(moduleContentAfterSchematic.replace(/\r\n/g, "\n"));
	});

	it("should properly display the dependency mismatch warning", async () => {
		const warns: string[] = [];
		runner.logger.subscribe(entry => {
			if (entry.level === "warn") {
				warns.push(entry.message);
			}
		});
		await runner.runSchematicAsync("cli-config", {}, tree).toPromise();
		let pattern = new RegExp(`WARNING Version mismatch detected - ${NPM_PACKAGE}`);
		expect(warns).toContain(jasmine.stringMatching(pattern));

		resetTree();
		createIgPkgJson(FEED_PACKAGE);
		populatePkgJson(FEED_PACKAGE);
		pattern = new RegExp(`WARNING Version mismatch detected - ${FEED_PACKAGE}`);

		await runner.runSchematicAsync("cli-config", {}, tree).toPromise();
		expect(warns).toContain(jasmine.stringMatching(pattern));
	});
});
