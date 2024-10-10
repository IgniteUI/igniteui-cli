
const templatesLocation = "../../packages/cli/templates/jquery";

describe("jQuery templates", () => {

	// tslint:disable-next-line:only-arrow-functions
	it("Templates should have IDs", async function() {
		const jQueryFramework = require(templatesLocation);
		expect(jQueryFramework.projectLibraries[0]).toBeDefined();

		for (const template of jQueryFramework.projectLibraries[0].templates) {
			expect(template.id).toBeDefined("No ID: " + template.name);
		}
	});

});
