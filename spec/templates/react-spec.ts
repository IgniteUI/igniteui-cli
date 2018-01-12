import { Util } from "../../lib/Util";

describe("React templates", () => {

	// tslint:disable-next-line:only-arrow-functions
	it("Templates should have IDs", async function(done) {
		const reactFramework = require("../../templates/react");
		expect(reactFramework.projectLibraries[0]).toBeDefined();

		for (const template of reactFramework.projectLibraries[0].templates) {
			expect(template.id).toBeDefined("No ID: " + template.name + " type: " + template.projectType);
		}
		done();
	});

	it("Templates should have no internal collisions", async done => {
		const reactFramework: Framework = require("../../templates/react");
		const projLibrary = reactFramework.projectLibraries.find(x => x.projectType == "es6");
		for (let i = 0; i < projLibrary.templates.length; i++) {
			const element = projLibrary.templates[i];
			for (let j = i + 1; j < projLibrary.templates.length; j++) {
				const target = projLibrary.templates[j];
				// pass some __path__ so those won't match
				expect(
					Util.validateTemplate(element["rootPath"] + "/files", target["rootPath"] + "/files", {__path__: "1"}, {})
				).toBeTruthy(`Template ${element.id} can overwrite ${target.id}`);
			}
		}
		done();
	});
});
