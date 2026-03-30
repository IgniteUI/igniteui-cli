import { App, Framework, Util } from "@igniteui/cli-core";

const templatesLocation = "../../packages/cli/templates/webcomponents";
describe("Web Components templates", () => {
	beforeAll(() => {
		App.initialize();
	});

	it("Templates should have IDs", async function() {
		const wcFramework = require(templatesLocation);
		expect(wcFramework.projectLibraries[0]).toBeDefined();

		for (const template of wcFramework.projectLibraries[0].templates) {
			expect(template.id)
				.withContext("No ID: " + template.name + " type: " + template.projectType)
				.toBeDefined();
		}
	});

	it("Igc Templates should have no internal collisions", async () => {
		const wcFramework: Framework = require(templatesLocation);
		const projLibrary = wcFramework.projectLibraries.find(x => x.projectType === "igc-ts");
		expect(projLibrary).toBeDefined();

		for (let i = 0; i < projLibrary.templates.length; i++) {
			const element = projLibrary.templates[i];
			for (let j = i + 1; j < projLibrary.templates.length; j++) {
				const target = projLibrary.templates[j];
				// pass some __path__ so those won't match
				expect(
					(Util as any).validateTemplate(element["rootPath"] + "/files", target["rootPath"] + "/files", {path: "1"}, {})
				)
					.withContext(`Template ${element.id} can overwrite ${target.id}`)
					.toBeTruthy();
			}
		}
	});
});
