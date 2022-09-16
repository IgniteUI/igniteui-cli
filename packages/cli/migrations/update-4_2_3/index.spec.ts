import * as path from "path";

// tslint:disable:no-implicit-dependencies
import { EmptyTree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";

describe("Update 4.2.3", () => {
	let appTree: UnitTestTree;
	const schematicRunner = new SchematicTestRunner("ig-migrate", path.join(__dirname, "../migration-collection.json"));
	const configJson = {
		defaultProject: "testProj",
		projects: {
			testProj: {
				sourceRoot: "/src"
			}
		},
		version: 1
	};

	beforeEach(() => {
		appTree = new UnitTestTree(new EmptyTree());
		appTree.create("/angular.json", JSON.stringify(configJson));
	});

	it("should add Awesome Grid extra paginator style", async () => {
		const stylesFile = "/src/app/awesome-grid/awesome-grid.component.scss";
		appTree.create(stylesFile,
`@use 'igniteui-angular/theming' as *;

:host ::ng-deep {

  .grid__wrapper {
    @include igx-grid($grid-sample-theme);
  }

  .igx-paginator>* {
    margin: 0 .3125rem;
    display: flex;
    align-items: center;
  }
}
`
		);

		await schematicRunner.runSchematicAsync("migration-04", {}, appTree).toPromise();
		expect(appTree.readContent(stylesFile).replace(/\r\n/g, "\n"))
			.toEqual(
`@use 'igniteui-angular/theming' as *;

:host ::ng-deep {

  .grid__wrapper {
    @include igx-grid($grid-sample-theme);
  }

  .igx-paginator {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3125rem 0;
  }

  .igx-paginator>* {
    margin: 0 .3125rem;
    display: flex;
    align-items: center;
  }
}
`.replace(/\r\n/g, "\n")
			);
	});
});
