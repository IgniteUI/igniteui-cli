import { EmptyTree } from "@angular-devkit/schematics";
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";
import { getWorkspace } from "@schematics/angular/utility/config";
import * as path from "path";

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
					serve: {}
				}
			}
		}
	};

	const pkgJsonConfig = {
		dependencies: {},
		devDependencies: {},
		peerDependencies: {}
	};

	function createIgPkgJson() {
		const filePath = "node_modules/igniteui-angular/package.json";
		tree.create(filePath, JSON.stringify(pkgJsonConfig));
		const pkgJson = JSON.parse(tree.readContent(filePath));
		const angularCommon = "@angular/common";
		const angularCore = "@angular/core";
		const targetVersion = "^7.0.3";
		pkgJson.peerDependencies[angularCommon] = targetVersion;
		pkgJson.peerDependencies[angularCore] = targetVersion;

		tree.overwrite(filePath, JSON.stringify(pkgJson));
	}

	function populatePkgJson() {
		const targetFile = "/package.json";
		const angularCore = "@angular/core";
		const angularCommon = "@angular/common";
		const version = "^6.1.0";
		const pkgJson = JSON.parse(tree.readContent(targetFile));
		pkgJson.dependencies[angularCore] = version;
		pkgJson.dependencies[angularCommon] = version;
		tree.overwrite(targetFile, JSON.stringify(pkgJson));
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

	it("should create an ignite-ui-cli.json file correctly", () => {
		runner.runSchematic("cli-config", {}, tree);
		expect(tree.exists("ignite-ui-cli.json")).toBeTruthy();

		const cliJsonData = JSON.parse(tree.readContent("/ignite-ui-cli.json"));
		expect(cliJsonData.project.projectTemplate).toEqual("ng-cli");
	});

	it("should add typography correctly", () => {
		const targetFile = "/src/index.html";
		runner.runSchematic("cli-config", {}, tree);

		const content = tree.readContent(targetFile);
		expect(content.includes("<body class=\"igx-typography\">")).toBeTruthy();
	});

	it("should add Titillium and Material Icons stylesheets correctly", () => {
		const targetFile = "/src/index.html";
		runner.runSchematic("cli-config", {}, tree);

		const content = tree.readContent(targetFile);
		const headContentsRegex = /(?:<head>)([\s\S]*)(?:<\/head>)/;

		expect(headContentsRegex.test(content)).toBeTruthy();
		expect(headContentsRegex.exec(content)!.pop()).toContain("family=Titillium+Web");
		expect(headContentsRegex.exec(content)!.pop()).toContain("family=Material+Icons");
	});

	it("should add the default scss theme correctly", () => {
		const targetFile = "/src/styles.scss";
		tree.create(targetFile, "");

		runner.runSchematic("cli-config", {}, tree);

		const content = tree.readContent(targetFile);
		expect(content.includes("@import")).toBeTruthy();
	});

	it("should add the default css theme to the workspace", () => {
		const targetFile = "/angular.json";
		expect(tree.exists(targetFile)).toBeTruthy();

		const targetImport = "node_modules/igniteui-angular/styles/igniteui-angular.css";
		runner.runSchematic("cli-config", {}, tree);
		const workspace = getWorkspace(tree) as any;
		const currentProjectName = workspace.defaultProject;

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

	it("should not add the default css theme to the workspace if the global styles file is scss", () => {
		// if the global styles file is scss or sass - the default theme is imported there
		const stylesheet = "/src/styles.scss";
		tree.create(stylesheet, "");
		const targetFile = "/angular.json";
		expect(tree.exists(targetFile)).toBeTruthy();

		runner.runSchematic("cli-config", {}, tree);
		const workspace = getWorkspace(tree) as any;
		const currentProjectName = workspace.defaultProject;

		// the schematic creates the hierarchy that leads to the styles object within the workspace,
		// providing that it is not already present
		expect(workspace.projects[currentProjectName].architect.build.styles).toBeFalsy();
		expect(workspace.projects[currentProjectName].architect.test).toBeFalsy();
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

		runner.runSchematic("cli-config", {}, tree);
		const content = tree.readContent(targetFile);
		expect(content.replace(/\r\n/g, "\n")).toEqual(moduleContentAfterSchematic.replace(/\r\n/g, "\n"));
	});

	it("should properly display the dependency mismatch warning", () => {
		spyOn(console, "warn");
		runner.runSchematic("cli-config", {}, tree);
		// tslint:disable-next-line:no-console
		expect(console.warn).toHaveBeenCalledWith(jasmine.stringMatching(/WARNING */));
	});
});
