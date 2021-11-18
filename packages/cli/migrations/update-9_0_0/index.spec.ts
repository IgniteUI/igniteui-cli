import * as path from "path";

// tslint:disable:no-implicit-dependencies
import { EmptyTree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";

describe("Update 9.0.0", () => {
	let appTree: UnitTestTree;
	const schematicRunner = new SchematicTestRunner("ig-migrate", path.join(__dirname, "../migration-collection.json"));

	beforeEach(() => {
		appTree = new UnitTestTree(new EmptyTree());
	});

	it("should add igx-scrollbar class to body if needed", async done => {
		const indexFile = "/src/index.html";
		appTree.create(indexFile,
`<body>
<app-root></app-root>
</body>`
		);

		await schematicRunner.runSchematicAsync("migration-07", {}, appTree).toPromise();
		expect(appTree.readContent(indexFile))
			.toEqual(
`<body class="igx-scrollbar">
<app-root></app-root>
</body>`
			);
		appTree.overwrite(indexFile, `<body class="">`);
		await schematicRunner.runSchematicAsync("migration-07", {}, appTree).toPromise();
		expect(appTree.readContent(indexFile)).toEqual(`<body class="igx-scrollbar">`);

		appTree.overwrite(indexFile, `<body class="test class">`);
		await schematicRunner.runSchematicAsync("migration-07", {}, appTree).toPromise();
		expect(appTree.readContent(indexFile)).toEqual(`<body class="test class igx-scrollbar">`);

		appTree.overwrite(indexFile, `<body class="test igx-scrollbar">`);
		await schematicRunner.runSchematicAsync("migration-07", {}, appTree).toPromise();
		expect(appTree.readContent(indexFile)).toEqual(`<body class="test igx-scrollbar">`);
		done();
	});
});
