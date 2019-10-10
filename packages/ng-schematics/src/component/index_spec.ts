import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");

describe("component", () => {
	it("works", () => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const mockInst = {
			generateConfig: jasmine.createSpy(),
			packages: [],
			registerInProject: jasmine.createSpy(),
			templatePaths: []
		};
		const tree = runner.runSchematic("component",
		{ name: "my-combo", template: "combo", templateInst: mockInst, skipRoute: false }, Tree.empty());
		expect(mockInst.generateConfig).toHaveBeenCalledWith("my-combo", {});
		expect(mockInst.registerInProject).toHaveBeenCalledWith("", "my-combo", { skipRoute: false });
		expect(tree.files).toEqual([]);
	});
});
