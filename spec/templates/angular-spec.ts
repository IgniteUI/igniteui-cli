import { Framework, Util } from "@igniteui/cli-core";

const templatesLocation = "../../packages/cli/templates/angular";

describe("Angular templates", () => {

	// tslint:disable-next-line:only-arrow-functions
	it("Templates should have IDs", async function() {
		const angularFramework = require(templatesLocation);
		expect(angularFramework.projectLibraries[0]).toBeDefined();
		expect(angularFramework.projectLibraries[1]).toBeDefined();

		for (const template of angularFramework.projectLibraries[0].templates) {
			expect(template.id).toBeDefined("No ID: " + template.name + " type: " + template.projectType);
		}
		for (const template of angularFramework.projectLibraries[1].templates) {
			expect(template.id).toBeDefined("No ID: " + template.name + " type: " + template.projectType);
		}
	});

	it("Ig templates should have no internal collisions", async () => {
		const angularFramework: Framework = require(templatesLocation);
		const projLibrary = angularFramework.projectLibraries.find(x => x.projectType === "ig-ts");
		for (let i = 0; i < projLibrary.templates.length; i++) {
			const element = projLibrary.templates[i];
			for (let j = i + 1; j < projLibrary.templates.length; j++) {
				const target = projLibrary.templates[j];
				// pass some __path__ so those won't match
				expect(
					(Util as any).validateTemplate(element["rootPath"] + "/files", target["rootPath"] + "/files", {path: "1"}, {})
				).toBeTruthy(`Template ${element.id} can overwrite ${target.id}`);
			}
		}
	});

	it("Igx templates should have no internal collisions", async () => {
		const angularFramework: Framework = require(templatesLocation);
		const projLibrary = angularFramework.projectLibraries.find(x => x.projectType === "igx-ts");
		for (let i = 0; i < projLibrary.templates.length; i++) {
			const element = projLibrary.templates[i];
			for (let j = i + 1; j < projLibrary.templates.length; j++) {
				const target = projLibrary.templates[j];
				// pass some __path__ so those won't match
				expect(
					(Util as any).validateTemplate(element["rootPath"] + "/files", target["rootPath"] + "/files", {path: "1"}, {})
				).toBeTruthy(`Template ${element.id} can overwrite ${target.id}`);
			}
		}
	});
});
