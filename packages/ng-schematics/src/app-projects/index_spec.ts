import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");

describe("app-projects", () => {
	it("works", async () => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const tree = Tree.empty();
		const mockOptions = {
			name: "mock-name",
			projTemplate: {
				generateConfig: jasmine.createSpy("generateConfig").and.returnValue({}),
				id: "mock-id",
				templatePaths: ["mock-template"]
			},
			theme: "mock-theme"
		};
		spyOn(tree, "read").and.returnValue(Buffer.from(`Mock package content "igniteui-cli":`));
		spyOn(tree, "overwrite");
		await runner.runSchematic("app-projects", mockOptions, tree);

		expect(mockOptions.projTemplate.generateConfig).toHaveBeenCalled();
		expect(tree.read).toHaveBeenCalledWith("./package.json");
		expect(tree.overwrite).toHaveBeenCalledWith("./package.json", `Mock package content "@igniteui/angular-schematics":`);
	});
});
