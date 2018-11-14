import { Tree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");

describe("schematics", () => {
	it("works", () => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const tree = runner.runSchematic("schematics", {}, Tree.empty());

		expect(tree.files).toEqual([]);
	});
});
