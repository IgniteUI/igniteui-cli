
describe("jQuery templates", () => {

	// tslint:disable-next-line:only-arrow-functions
	it("Templates should have IDs", async function(done) {
		const jQueryFramework = require("../../templates/jquery");
		expect(jQueryFramework.projectLibraries[0]).toBeDefined();

		for (const template of jQueryFramework.projectLibraries[0].templates) {
			expect(template.id).toBeDefined("No ID: " + template.name);
		}
		done();
	});

});
