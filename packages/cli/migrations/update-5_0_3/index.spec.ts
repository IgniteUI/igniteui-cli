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
	});

	it("should update error handler service if found", async () => {
		const errorService = "src/app/error-routing/error/global-error-handler.service.ts";
		appTree.create(errorService,
`import { ErrorHandler, Injectable, isDevMode } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  handleError(error) {
    if (isDevMode()) {
        throw error;
    }
  }
}
`
		);

		await schematicRunner.runSchematic("migration-06", {}, appTree);
		expect(appTree.readContent(errorService).replace(/\r\n/g, "\n"))
			.toEqual(
`import { ErrorHandler, Injectable, isDevMode } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  handleError(error) {
    if (isDevMode()) {
        console.error(error);
    }
  }
}
`.replace(/\r\n/g, "\n")
			);
	});
});
