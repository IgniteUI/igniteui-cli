import { EmptyTree, SchematicContext, SchematicsException } from "@angular-devkit/schematics";
import { UnitTestTree } from "@angular-devkit/schematics/testing";
import { createCliConfig } from "./cli-config";

describe("createCliConfig", () => {
	let tree: UnitTestTree;
	let context: SchematicContext;

	beforeEach(() => {
		tree = new UnitTestTree(new EmptyTree());
		context = {
			logger: jasmine.createSpyObj("logger", ["info", "warn"])
		} as unknown as SchematicContext;
	});

	it("should report a missing angular.json", async () => {
		const rule = createCliConfig() as (tree: UnitTestTree, context: SchematicContext) => Promise<void>;

		await expectAsync(rule(tree, context))
			.toBeRejectedWithError(SchematicsException, "angular.json was not found in the project's root");
		expect(tree.exists("ignite-ui-cli.json")).toBeFalse();
	});
});
