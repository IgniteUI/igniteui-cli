import { EmptyTree, SchematicContext, SchematicsException } from "@angular-devkit/schematics";
import { UnitTestTree } from "@angular-devkit/schematics/testing";
import { createCliConfig } from "./cli-config";

describe("createCliConfig", () => {
	let tree: UnitTestTree;
	let context: SchematicContext;
	let rule: (tree: UnitTestTree, context: SchematicContext) => Promise<void>;

	beforeEach(() => {
		tree = new UnitTestTree(new EmptyTree());
		context = {
			logger: jasmine.createSpyObj("logger", ["info", "warn"])
		} as unknown as SchematicContext;
		rule = createCliConfig() as (tree: UnitTestTree, context: SchematicContext) => Promise<void>;
	});

	it("should report a missing angular.json", async () => {
		await expectAsync(rule(tree, context))
			.toBeRejectedWithError(SchematicsException, "angular.json was not found in the project's root");
		expect(tree.exists("ignite-ui-cli.json")).toBeFalse();
	});

	it("should rethrow other workspace read errors", async () => {
		tree.create("angular.json", "{ not json");

		await expectAsync(rule(tree, context))
			.toBeRejectedWithError(Error, "Unknown format - version specifier not found.");
		expect(tree.exists("ignite-ui-cli.json")).toBeFalse();
	});
});
