import { App, Framework, Util } from "@igniteui/cli-core";

const templatesLocation = "../../packages/cli/templates/angular";

describe("Angular templates", () => {
	beforeAll(() => {
		App.initialize();
	});

	it("Templates should have IDs", async function() {
		const angularFramework = require(templatesLocation);
		expect(angularFramework.projectLibraries[0]).toBeDefined();

		for (const template of angularFramework.projectLibraries[0].templates) {
			expect(template.id)
				.withContext("No ID: " + template.name + " type: " + template.projectType)
				.toBeDefined();
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
				)
					.withContext(`Template ${element.id} can overwrite ${target.id}`)
					.toBeTruthy();
			}
		}
	});

	it("Igx templates should reference igniteui-angular 21.2.0", async () => {
		const angularFramework: Framework = require(templatesLocation);
		const projLibrary = angularFramework.projectLibraries.find(x => x.projectType === "igx-ts");
		const packageRefs = projLibrary.templates
			.flatMap(x => x.packages || [])
			.filter(x => typeof x === "string" && x.startsWith("igniteui-angular@~"));

		expect(packageRefs.length).toBeGreaterThan(0);
		for (const packageRef of packageRefs) {
			expect(packageRef).toBe("igniteui-angular@~21.2.0");
		}
	});
});
