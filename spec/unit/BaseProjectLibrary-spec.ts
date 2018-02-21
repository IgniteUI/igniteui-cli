import * as path from "path";
import { BaseProjectLibrary } from "../../lib/BaseProjectLibrary";
import { TemplateManager } from "../../lib/TemplateManager";
import { Util } from "../../lib/Util";
describe("Unit - Base project library ", () => {

	it("has correct projects.", async done => {
		const mockProjects = ["angular", "jquery"];

		spyOn(Util, "getDirectoryNames").and.returnValue(mockProjects);

		const library = new BaseProjectLibrary("../test");
		expect(library.hasProject("angular")).toBe(true);
		expect(library.projects).toEqual(mockProjects);
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
		expect(library.templates[2].name).toEqual("comboCustomName");
		expect(library.components.length).toEqual(1);
		expect(library.components[0].name).toEqual("editorsName");
		done();
	});

	it("gets correct components", async done => {
		spyOn(Util, "getDirectoryNames").and.returnValues(["bar-chart", "combo"]);

		// spy on require(), https://coderwall.com/p/ck7w6g/spying-on-require-with-jasmine
		spyOn(require("module"), "_load").and.callFake((modulePath: string) => {
			if (modulePath.startsWith(__dirname)) {
				const folder = path.basename(modulePath);
				// tslint:disable-next-line:no-object-literal-type-assertion
				return {
					name: folder + "Name",
					group: folder + "Group"
				};
			} else {
				fail("unexpected require");
			}
		});

		const library = new BaseProjectLibrary(__dirname);
		expect(library.components.length).toEqual(2);
		expect(library.components[0].group).toEqual("bar-chartGroup");
		expect(library.components[1].name).toEqual("comboName");
		done();
	});

	it("gets template by id and name.", async done => {
		spyOn(Util, "getDirectoryNames").and.returnValues(["grid", "chart"], ["awesome"]);

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
					templates: {
						id: folder + "Template",
						name: folder + "TemplateName",
						group: folder + "TemplateGroup"
					}
				};
			} else {
				fail("unexpected require");
			}
		});

		const library = new BaseProjectLibrary(__dirname);

		//get templates by id
		expect(library.getTemplateById("gridTemplate")).toBeTruthy();
		expect(library.getTemplateById("gridtemplate")).toBeFalsy();
		expect(library.getTemplateById("awesome")).toBeTruthy();
		expect(library.getTemplateById("chartTemplate")).toBe(library.templates[1]);

		//get templates by name
		expect(library.getTemplateByName("gridTemplateName")).toBeTruthy();
		expect(library.getTemplateByName("gridtemplatename")).toBeFalsy();
		expect(library.getTemplateByName("awesomeCustomName")).toBeTruthy();
		expect(library.getTemplateByName("chartTemplateName")).toBe(library.templates[1]);

		done();
	});

	it("registers a template successfully.", async done => {
		spyOn(Util, "getDirectoryNames").and.returnValues(["grid", "chart"], ["awesome"]);

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
					templates: {
						id: folder + "Template",
						name: folder + "TemplateName",
						group: folder + "TemplateGroup",
						components: { name: folder + "ComponentName"}
					}
				};
			} else {
				fail("unexpected require");
			}
		});

		const library = new BaseProjectLibrary(__dirname);

		const mockTemplate = library.templates[0];
		mockTemplate.components = ["newComponent"];
		mockTemplate.name = "newName";
		library.registerTemplate(mockTemplate);

		expect(library.getTemplateById("gridTemplate")).toBeTruthy();
		expect(library.getTemplateByName("newName")).toBeTruthy();
		expect(library.getComponentByName("newComponent")).toBeTruthy();
		expect(library.templates.length).toEqual(3);
		done();
	});

	it("gets [custom] component by name.", async done => {
		spyOn(Util, "getDirectoryNames").and.returnValues(["grid", "chart"], ["awesome"]);

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
						name: folder + "Name",
						group: folder + "Group"
				};
			} else {
				fail("unexpected require");
			}
		});

		const library = new BaseProjectLibrary(__dirname);

		//get components by name
		expect(library.getComponentByName("chartName")).toBeTruthy();
		expect(library.getComponentByName("chartname")).toBeFalsy();
		expect(library.getComponentByName("awesomeCustomName")).toBeFalsy();
		expect(library.getCustomTemplateByName("awesomeCustomName")).toBeTruthy();
		expect(library.getComponentByName("gridName")).toBe(library.components[0]);

		done();
	});
});
