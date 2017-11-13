
describe("New", () => {

	// tslint:disable-next-line:only-arrow-functions
	it("jQuery js templates should have IDs", async function(done) {
		const jQueryFramework = require("../../templates/jquery");
		expect(jQueryFramework.projectLibraries[0]).toBeDefined();

		for (const template of jQueryFramework.projectLibraries[0].templates) {
			// tslint:disable-next-line:no-console
			console.log("checking", template.name);
			expect(template.id).toBeDefined("No ID: " + template.name);
		}
		done();
	});

});
