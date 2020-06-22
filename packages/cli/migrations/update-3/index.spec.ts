import * as path from "path";

// tslint:disable:no-implicit-dependencies
import { virtualFs } from "@angular-devkit/core";
import { EmptyTree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";

describe("Update 3.0.0", () => {
	let appTree: UnitTestTree;
	const schematicRunner = new SchematicTestRunner("ig-migrate", path.join(__dirname, "../migration-collection.json"));

	beforeEach(() => {
		appTree = new UnitTestTree(new EmptyTree());
	});

	it("should add igx-typography class to body if needed", async done => {
		const indexFile = "/src/index.html";
		appTree.create(indexFile,
`<body>
<app-root></app-root>
</body>`
		);

		schematicRunner.runSchematicAsync("migration-02", {}, appTree);
		expect(appTree.readContent(indexFile))
			.toEqual(
`<body class="igx-typography">
<app-root></app-root>
</body>`
			);
		appTree.overwrite(indexFile, `<body class="">`);
		schematicRunner.runSchematicAsync("migration-02", {}, appTree);
		expect(appTree.readContent(indexFile)).toEqual(`<body class="igx-typography">`);

		appTree.overwrite(indexFile, `<body class="test class">`);
		schematicRunner.runSchematicAsync("migration-02", {}, appTree);
		expect(appTree.readContent(indexFile)).toEqual(`<body class="test class igx-typography">`);

		appTree.overwrite(indexFile, `<body class="test igx-typography">`);
		schematicRunner.runSchematicAsync("migration-02", {}, appTree);
		expect(appTree.readContent(indexFile)).toEqual(`<body class="test igx-typography">`);
		done();
	});

	it("should add additional header styles to home css", async done => {
		const cssFile = "/src/app/home/home.component.css";
		appTree.create(cssFile,
`body {
  height: 100%;
}
`
		);

		schematicRunner.runSchematicAsync("migration-02", {}, appTree);
		expect(appTree.readContent(cssFile))
			.toEqual(
`body {
  height: 100%;
}

h1 {
  font-size: 3rem;
  font-weight: 600;
  color: rgba(0, 0, 0, .74);
}

h3 {
  font-size: 1.75rem;
  font-weight: 600;
}
`
			);
		done();
	});

	it("should remove forRoot() from IgxGridModule", async done => {
		const indexFile = "/src/app/app.module.ts";
		appTree.create(indexFile,
`@NgModule({
  imports: [
   IgxGridModule.forRoot(),
   IgxRippleModule
  ]
})`
		);

		schematicRunner.runSchematicAsync("migration-02", {}, appTree);
		expect(appTree.readContent(indexFile))
			.toEqual(
`@NgModule({
  imports: [
   IgxGridModule,
   IgxRippleModule
  ]
})`
			);
		done();
	});

	it("should update config", async done => {
		const indexFile = "ignite-ui-cli.json";
		appTree.create(indexFile,
`{
    "version": "",
    "project": {
        "framework": "angular",
        "projectType": "igx-ts",
        "projectTemplate": ""
    },
    "packagesInstalled": true
}`
		);

		schematicRunner.runSchematicAsync("migration-02", {}, appTree);
		expect(appTree.readContent(indexFile))
			.toEqual(
`{
    "version": "3.0.0",
    "project": {
        "framework": "angular",
        "projectType": "igx-ts",
        "projectTemplate": "side-nav"
    },
    "packagesInstalled": true
}
`
			);
		done();
	});
});
