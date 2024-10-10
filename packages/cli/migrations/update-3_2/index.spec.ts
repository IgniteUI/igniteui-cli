import * as path from "path";

// tslint:disable:no-implicit-dependencies
import { EmptyTree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";

describe("Update 3.2.0", () => {
	let appTree: UnitTestTree;
	const schematicRunner = new SchematicTestRunner("ig-migrate", path.join(__dirname, "../migration-collection.json"));
	const configJson = {
		defaultProject: "testProj",
		projects: {
			testProj: {
				root: "",
				sourceRoot: "/src"
			}
		},
		version: 1
	};

	beforeEach(() => {
		appTree = new UnitTestTree(new EmptyTree());
		appTree.create("/angular.json", JSON.stringify(configJson));
	});

	it("should update CustomDateSummary summaryResult assignment", async () => {
		const summaryFile = "/src/app/grid-summaries/grid-summaries.component.ts";
		appTree.create(summaryFile,
`class CustomDateSummary extends IgxDateSummaryOperand {
   constructor() {
     super();
   }
   public operate(data?: any[]): IgxSummaryResult[] {
     const result = [];
    result.push({
      key: 'earliest',
      label: 'Earliest Date',
      summaryResult: (IgxDateSummaryOperand.earliest(data)).toLocaleDateString()
    });
    result.push({
      key: 'latest',
      label: 'Latest Date',
      summaryResult: (IgxDateSummaryOperand.latest(data)).toLocaleDateString()
    });
     return result;
   }
 }`
		);

		await schematicRunner.runSchematic("migration-03", {}, appTree);
		expect(appTree.readContent(summaryFile))
			.toEqual(
`class CustomDateSummary extends IgxDateSummaryOperand {
   constructor() {
     super();
   }
   public operate(data?: any[]): IgxSummaryResult[] {
     const result = [];
    result.push({
      key: 'earliest',
      label: 'Earliest Date',
      summaryResult: data.length ? (IgxDateSummaryOperand.earliest(data)).toLocaleDateString() : null
    });
    result.push({
      key: 'latest',
      label: 'Latest Date',
      summaryResult: data.length ? (IgxDateSummaryOperand.latest(data)).toLocaleDateString() : null
    });
     return result;
   }
 }`
			);
	});
});
