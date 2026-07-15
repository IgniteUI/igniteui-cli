import { App } from "@igniteui/cli-core";

const templatesLocation = "../../packages/cli/templates/jquery";

describe("jQuery templates", () => {
	beforeAll(() => {
		App.initialize();
	});

	it("Templates should have IDs", async function() {
		const jQueryFramework = require(templatesLocation);
		expect(jQueryFramework.projectLibraries[0]).toBeDefined();

		for (const template of jQueryFramework.projectLibraries[0].templates) {
			expect(template.id)
				.withContext("No ID: " + template.name)
				.toBeDefined();
		}
	});

});
