import * as path from "path";

// tslint:disable:no-implicit-dependencies
import { EmptyTree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";

describe("Update 3.0.0", () => {
	let appTree: UnitTestTree;
	const schematicRunner = new SchematicTestRunner("ig-migrate", path.join(__dirname, "../migration-collection.json"));

	beforeEach(() => {
		appTree = new UnitTestTree(new EmptyTree());
	});

	it("should add ig-typography class to body if needed", async () => {
		const indexFile = "/src/index.html";
		appTree.create(indexFile,
`<body>
<app-root></app-root>
</body>`
		);

		await schematicRunner.runSchematic("migration-02", {}, appTree);
		expect(appTree.readContent(indexFile))
			.toEqual(
`<body class="ig-typography">
<app-root></app-root>
</body>`
			);
		appTree.overwrite(indexFile, `<body class="">`);
		await schematicRunner.runSchematic("migration-02", {}, appTree);
		expect(appTree.readContent(indexFile)).toEqual(`<body class="ig-typography">`);

		appTree.overwrite(indexFile, `<body class="test class">`);
		await schematicRunner.runSchematic("migration-02", {}, appTree);
		expect(appTree.readContent(indexFile)).toEqual(`<body class="test class ig-typography">`);

		appTree.overwrite(indexFile, `<body class="test ig-typography">`);
		await schematicRunner.runSchematic("migration-02", {}, appTree);
		expect(appTree.readContent(indexFile)).toEqual(`<body class="test ig-typography">`);
	});

	it("should add additional header styles to home css", async () => {
		const cssFile = "/src/app/home/home.component.css";
		appTree.create(cssFile,
`body {
  height: 100%;
}
`
		);

		await schematicRunner.runSchematic("migration-02", {}, appTree);
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
	});

	it("should remove forRoot() from IgxGridModule", async () => {
		const indexFile = "/src/app/app.module.ts";
		appTree.create(indexFile,
`@NgModule({
  imports: [
   IgxGridModule.forRoot(),
   IgxRippleModule
  ]
})`
		);

		await schematicRunner.runSchematic("migration-02", {}, appTree);
		expect(appTree.readContent(indexFile))
			.toEqual(
`@NgModule({
  imports: [
   IgxGridModule,
   IgxRippleModule
  ]
})`
			);
	});

	it("should update config", async () => {
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

		await schematicRunner.runSchematic("migration-02", {}, appTree);
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
	});
});
