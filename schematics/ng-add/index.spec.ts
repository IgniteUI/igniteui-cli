import { EmptyTree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";
// tslint:disable-next-line:no-submodule-imports
import * as path from "path";

describe("schematics", () => {
	const collectionPath = path.join(__dirname, "../collection.json");
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
	});

	it("should add packages to package.json dependencies", () => {
		expect(tree).toBeTruthy();
		expect(tree.exists("/angular.json")).toBeTruthy();
		expect(tree.exists("/package.json")).toBeTruthy();

		runner.runSchematic("ng-add", {}, tree);

		const pkgJsonData = JSON.parse(tree.readContent("/package.json"));
		expect(pkgJsonData.dependencies).toBeTruthy();
		expect(pkgJsonData.devDependencies).toBeFalsy();
	});

	it("should add the correct cli packages to package.json dependencies", () => {
		expect(tree).toBeTruthy();
		expect(tree.exists("/angular.json")).toBeTruthy();
		expect(tree.exists("/package.json")).toBeTruthy();

		runner.runSchematic("ng-add", {}, tree);

		const pkgJsonData = JSON.parse(tree.readContent("/package.json"));
		expect(pkgJsonData.dependencies).toBeTruthy();
		expect(pkgJsonData.devDependencies).toBeFalsy();

		const dependenciesFound = Object.keys(pkgJsonData.dependencies)
			.filter(pkg => pkg.includes("igniteui-angular") || pkg.includes("web-animations-js"));
		expect(dependenciesFound.length).toBeGreaterThan(0);
	});

	it("should create an ignite-ui-cli.json file correctly", () => {
		expect(tree).toBeTruthy();
		expect(tree.exists("/angular.json")).toBeTruthy();
		expect(tree.exists("/package.json")).toBeTruthy();

		runner.runSchematic("ng-add", {}, tree);
		expect(tree.exists("ignite-ui-cli.json")).toBeTruthy();

		const cliJsonData = JSON.parse(tree.readContent("/ignite-ui-cli.json"));
		expect(cliJsonData.project.projectTemplate).toEqual("ng-cli");
	});
});
