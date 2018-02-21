import * as path from "path";
import { BaseProjectLibrary } from "../../lib/BaseProjectLibrary";
import { TemplateManager } from "../../lib/TemplateManager";
import { Util } from "../../lib/Util";
describe("Unit - Base project library ", () => {

	it("has correct project.", async done => {
		const projFolder = "react";

		spyOn(Util, "getDirectoryNames").and.returnValue(projFolder);

		const library = new BaseProjectLibrary("../test");
		expect(library.hasProject("react")).toBe(true);
		expect(Util.getDirectoryNames).toHaveBeenCalledWith(path.join("../test", "projects"));
		done();
	});

	it("gets correct custom templates", async done => {

		spyOn(Util, "getDirectoryNames").and.returnValues(["bar-chart", "combo"]);

		// spy on require(), https://coderwall.com/p/ck7w6g/spying-on-require-with-jasmine
		spyOn(require("module"), "_load").and.callFake((modulePath: string) => {
			if (modulePath.startsWith(path.join(__dirname, "custom-templates"))) {
				const folder = path.basename(modulePath);
				// tslint:disable-next-line:no-object-literal-type-assertion
				return {
					id: folder,
					name: folder + "Name",
					group: folder + "Group"
				};
			} else {
				fail("unexpected require");
			}
		});

		const library = new BaseProjectLibrary(__dirname);
		expect(library.getCustomTemplateNames()).toEqual(["bar-chartName", "comboName"]);
		done();
	});

	it("gets correct templates", async done => {
		spyOn(Util, "getDirectoryNames").and.returnValues(["bar-chart", "combo"], ["editors"]);

		// spy on require(), https://coderwall.com/p/ck7w6g/spying-on-require-with-jasmine
		spyOn(require("module"), "_load").and.callFake((modulePath: string) => {
			if (modulePath.startsWith(path.join(__dirname, "custom-templates"))) {
				const folder = path.basename(modulePath);
				// tslint:disable-next-line:no-object-literal-type-assertion
				return {
					id: folder,
					name: folder + "CustomName",
					group: folder + "CustomGroup"
				};
			}
			if (modulePath.startsWith(__dirname)) {
				const folder = path.basename(modulePath);
				// tslint:disable-next-line:no-object-literal-type-assertion
				return {
					id: folder,
					name: folder + "Name",
					group: folder + "Group",
					templates: folder + "Template"
				};
			} else {
				fail("unexpected require");
			}
		});

		const library = new BaseProjectLibrary(__dirname);
		spyOn(library, "customTemplates");
		expect(library.templates.length).toEqual(3);
		expect(library.templates[2].name).toEqual("editorsCustomName");
		done();
	});
});
