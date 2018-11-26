import { EmptyTree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";
// tslint:disable-next-line:no-submodule-imports
import * as path from "path";

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

		const content = tree.read(targetFile).toString();
		expect(content.includes("<body class=\"igx-typography\">")).toBeTruthy();
	});

	it("should add Titillium and Material Icons stylesheets correctly", () => {
		const targetFile = "/src/index.html";
		expect(tree).toBeTruthy();
		expect(tree.exists("/angular.json")).toBeTruthy();
		expect(tree.exists(targetFile)).toBeTruthy();

		runner.runSchematic("cli-config", {}, tree);

		const content = tree.read(targetFile).toString();
		const headContentsRegex = /(?:<head>)([\s\S]*)(?:<\/head>)/;

		expect(headContentsRegex.test(content)).toBeTruthy();
		expect(headContentsRegex.exec(content).pop().includes("family=Titillium+Web")).toBeTruthy();
		expect(headContentsRegex.exec(content).pop().includes("family=Material+Icons")).toBeTruthy();
	});
});
