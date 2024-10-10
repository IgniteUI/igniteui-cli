import * as path from "path";

// tslint:disable:no-implicit-dependencies
import { EmptyTree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";

describe("Update 5.0.0", () => {
	let appTree: UnitTestTree;
	const schematicRunner = new SchematicTestRunner("ig-migrate", path.join(__dirname, "../migration-collection.json"));
	const configJson = {
		defaultProject: "testProj",
		projects: {
			testProj: {
				root: "",
				prefix: "app",
				sourceRoot: "src"
			}
		},
		version: 1
	};

	beforeEach(() => {
		appTree = new UnitTestTree(new EmptyTree());
		appTree.create("/angular.json", JSON.stringify(configJson));
		appTree.create("/.editorconfig",
`
[*]
indent_style = space
indent_size = 2
`);
	});

	it("should add HammerModule", async () => {
		const indexFile = "/src/app/app.module.ts";
		appTree.create(indexFile,
`import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    FormsModule,
    BrowserModule
  ]
})
export class AppModule {
}
`
		);

		await schematicRunner.runSchematic("migration-05", {}, appTree);
		expect(appTree.readContent(indexFile).replace(/\r\n/g, "\n"))
			.toEqual(
`import { BrowserModule, HammerModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HammerModule
  ]
})
export class AppModule {
}
`.replace(/\r\n/g, "\n")
			);
	});
});
