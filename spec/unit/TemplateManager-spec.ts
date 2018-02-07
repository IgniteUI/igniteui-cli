import * as path from "path";
import { ProjectConfig } from "../../lib/ProjectConfig";
import { TemplateManager } from "../../lib/TemplateManager";
import { AngularTemplate } from "../../lib/templates/AngularTemplate";
import { IgniteUIForAngularTemplate } from "../../lib/templates/IgniteUIForAngularTemplate";
import { jQueryTemplate } from "../../lib/templates/jQueryTemplate";
import { ReactTemplate } from "../../lib/templates/ReactTemplate";
import { Util } from "../../lib/Util";

describe("Unit - Template manager", () => {
	beforeEach(() => {
		this.isTemplatesPath = modulePath => {
			return modulePath.startsWith(path.join(__dirname, "../../templates"));
		};
	});

	it("Returns correct framework and projects", async done => {
		const frameworkIds = ["react", "angular"];

		spyOn(Util, "getDirectoryNames").and.returnValue(frameworkIds);
		// spy on require(), https://coderwall.com/p/ck7w6g/spying-on-require-with-jasmine
		spyOn(require("module"), "_load").and.callFake((modulePath: string) => {
			if (this.isTemplatesPath(modulePath)) {
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
				fail(`unexpected require: ${modulePath}`);
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

	xit("Shows warnings for incorrect custom templates", async done => {
	});

	it("Should load/create/register diff types of external custom Templates", async done => {
		const projects = [
			[ "jquery", "js" ],
			[ "react", "es6" ],
			[ "angular", "ig-ts" ],
			[ "angular", "igx-ts" ]
		];
		const templates = [
			"/template/jquery/js",
			"/template/react/es6",
			"/template/angular/ig-ts",
			"/template/angular/igx-ts"
		];
		spyOn(ProjectConfig, "getConfig").and.returnValue({ customTemplates: templates.map(x => `file:${x}`) });
		spyOn(Util, "isDirectory").and.returnValue(true);
		spyOn(Util, "isFile").and.returnValue(true);
		const mockProLibFactory = (type, groups = ["Grids"], components = ["Grid"]) => {
			return {
				getComponentGroups: jasmine.createSpy("getComponentGroups").and.returnValue(groups),
				getComponentNamesByGroup: jasmine.createSpy("getComponentNamesByGroup").and.returnValue(components),
				hasTemplate: jasmine.createSpy("hasTemplate").and.returnValue(false),
				projectType: type,
				registerTemplate: jasmine.createSpy("registerTemplate")
			};
		};
		const mockProjLibs = {
			angular: [ mockProLibFactory("ig-ts"), mockProLibFactory("igx-ts")],
			jquery: [ mockProLibFactory("js") ],
			react: [ mockProLibFactory("es6") ]
		};
		// spy on require(), https://coderwall.com/p/ck7w6g/spying-on-require-with-jasmine
		spyOn(require("module"), "_load").and.callFake((modulePath: string) => {
			if (this.isTemplatesPath(modulePath)) {
				const folder = path.basename(modulePath);
				// tslint:disable-next-line:no-object-literal-type-assertion
				return {
					id: folder,
					name: folder,
					projectLibraries: mockProjLibs[folder]
				} as Framework;
			} else if (modulePath.endsWith("template.json")) {
				const [ frameworkId, proj ] = modulePath.split(path.sep).filter(x => x && !x.includes("template"));
				// tslint:disable-next-line:no-object-literal-type-assertion
				return {
					components: ["Grid"],
					controlGroup: "Grids",
					framework: frameworkId,
					id: modulePath,
					projectType: proj
				} as Template;
			} else {
				fail(`unexpected require: ${modulePath}`);
			}
		});

		// load:
		const manager = new TemplateManager();

		const template = (frameworkId, proj) => ({
			framework: frameworkId,
			id: `/template/${frameworkId}/${proj}/template.json`.replace(/\//g, path.sep),
			projectType: proj,
			rootPath: `/template/${frameworkId}/${proj}`.replace(/\//g, path.sep)
		});
		expect(mockProjLibs.jquery[0].registerTemplate).toHaveBeenCalledTimes(1);
		expect(mockProjLibs.jquery[0].registerTemplate).toHaveBeenCalledWith(jasmine.any(jQueryTemplate));
		expect(mockProjLibs.jquery[0].registerTemplate).toHaveBeenCalledWith(
			jasmine.objectContaining(template("jquery", "js"))
		);
		expect(mockProjLibs.react[0].registerTemplate).toHaveBeenCalledTimes(1);
		expect(mockProjLibs.react[0].registerTemplate).toHaveBeenCalledWith(jasmine.any(ReactTemplate));
		expect(mockProjLibs.react[0].registerTemplate).toHaveBeenCalledWith(
			jasmine.objectContaining(template("react", "es6"))
		);
		expect(mockProjLibs.angular[0].registerTemplate).toHaveBeenCalledTimes(1);
		expect(mockProjLibs.angular[0].registerTemplate).toHaveBeenCalledWith(jasmine.any(AngularTemplate));
		expect(mockProjLibs.angular[0].registerTemplate).toHaveBeenCalledWith(
			jasmine.objectContaining(template("angular", "ig-ts"))
		);
		expect(mockProjLibs.angular[1].registerTemplate).toHaveBeenCalledTimes(1);
		expect(mockProjLibs.angular[1].registerTemplate).toHaveBeenCalledWith(jasmine.any(IgniteUIForAngularTemplate));
		expect(mockProjLibs.angular[1].registerTemplate).toHaveBeenCalledWith(
			jasmine.objectContaining(template("angular", "igx-ts"))
		);
		done();
	});
});
