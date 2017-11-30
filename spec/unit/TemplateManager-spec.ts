import * as path from "path";
import { TemplateManager } from "../../lib/TemplateManager";
import { Util } from "../../lib/Util";
describe("Unit - Template manager", () => {

	it("Return correct framework and projects", async done => {
		const frameworkIds = ["react", "angular"];

		spyOn(Util, "getDirectoryNames").and.returnValue(frameworkIds);
		// spy on require(), https://coderwall.com/p/ck7w6g/spying-on-require-with-jasmine
		spyOn(require("module"), "_load").and.callFake((modulePath: string) => {
			if (modulePath.startsWith(path.join(__dirname, "../../templates"))) {
				const folder = path.basename(modulePath);
				// tslint:disable-next-line:no-object-literal-type-assertion
				return {
					id: folder,
					name: folder,
					projectLibraries: [
						{ projectType: folder + "type1",  name: folder + 1 },
						{ projectType: folder + "type2",  name: folder + 2 }
					]
				} as Framework;
			} else {
				fail("unexpected require");
			}
		});

		const manager = new TemplateManager();
		expect(Util.getDirectoryNames).toHaveBeenCalledWith(path.join(__dirname, "../../templates"));
		expect(manager.getFrameworkNames()).toEqual(frameworkIds);

		expect(manager.getProjectLibraryNames("test-framework")).toEqual([]);
		expect(manager.getProjectLibraryNames(frameworkIds[0])).toEqual([frameworkIds[0] + 1, frameworkIds[0] + 2]);

		// get project
		const framework = manager.getFrameworkById(frameworkIds[1]);
		expect(framework.id).toBe(frameworkIds[1]);

		// by name
		expect(manager.getProjectLibraryByName(framework, "wrong")).toBeUndefined();
		expect(manager.getProjectLibraryByName(framework, frameworkIds[1] + "1")).toBe(framework.projectLibraries[0]);
		expect(manager.getProjectLibraryByName(framework, frameworkIds[1] + "2")).toBe(framework.projectLibraries[1]);

		// by type
		expect(manager.getProjectLibrary("test")).toBeNull();
		expect(manager.getProjectLibrary(frameworkIds[1])).toBe(framework.projectLibraries[0]);
		expect(manager.getProjectLibrary(frameworkIds[1], "test")).toBeUndefined();
		expect(manager.getProjectLibrary(frameworkIds[1], frameworkIds[1] + "type1")).toBe(framework.projectLibraries[0]);
		expect(manager.getProjectLibrary(frameworkIds[1], frameworkIds[1] + "type2")).toBe(framework.projectLibraries[1]);
		done();
	});
});
