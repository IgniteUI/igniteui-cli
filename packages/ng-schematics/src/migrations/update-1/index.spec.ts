import * as path from "path";
import { EmptyTree } from "@angular-devkit/schematics";
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";

describe("Update 17.1.0", () => {
	let appTree: UnitTestTree;
	const schematicRunner = new SchematicTestRunner("ig-migrate", path.join(__dirname, "../migration-collection.json"));

	beforeEach(() => {
		appTree = new UnitTestTree(new EmptyTree());
	});

	it("change projectType to legacy", async () => {
		appTree.create(
			"./ignite-ui-cli.json",
`{
  "igPackageRegistry": "https://packages.infragistics.com/npm/js-licensed/",
  "customTemplates": [],
  "skipGit": false,
  "skipAnalytic": false,
  "version": "13.0.1",
  "project": {
    "defaultPort": 4200,
    "framework": "angular",
    "projectType": "igx-ts",
    "projectTemplate": "side-nav",
    "theme": "Default",
    "themePath": "node_modules/igniteui-angular/styles/igniteui-angular.css",
    "isBundle": false,
    "bundleFilePath": "",
    "igniteuiSource": "",
    "components": [],
    "sourceFiles": [],
    "isShowcase": false,
    "version": ""
  },
  "build": {}
}
`
		);

		const tree = await schematicRunner.runSchematicAsync("migration-01", { applyMigrations: true }, appTree).toPromise();
		expect(tree.readContent("./ignite-ui-cli.json"))
			.toEqual(
`{
  "igPackageRegistry": "https://packages.infragistics.com/npm/js-licensed/",
  "customTemplates": [],
  "skipGit": false,
  "skipAnalytic": false,
  "version": "13.0.1",
  "project": {
    "defaultPort": 4200,
    "framework": "angular",
    "projectType": "igx-ts-legacy",
    "projectTemplate": "side-nav",
    "theme": "Default",
    "themePath": "node_modules/igniteui-angular/styles/igniteui-angular.css",
    "isBundle": false,
    "bundleFilePath": "",
    "igniteuiSource": "",
    "components": [],
    "sourceFiles": [],
    "isShowcase": false,
    "version": ""
  },
  "build": {}
}`
			);
	});

});
