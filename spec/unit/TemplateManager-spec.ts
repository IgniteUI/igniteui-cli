import * as path from "path";
import { ProjectConfig } from "../../lib/ProjectConfig";
import { TemplateManager } from "../../lib/TemplateManager";
import { AngularTemplate } from "../../lib/templates/AngularTemplate";
import { IgniteUIForAngularTemplate } from "../../lib/templates/IgniteUIForAngularTemplate";
import { jQueryTemplate } from "../../lib/templates/jQueryTemplate";
import { ReactTemplate } from "../../lib/templates/ReactTemplate";
import { Util } from "../../lib/Util";
import { mockProLibFactory } from "../helpers/mocks";
import { resetSpy } from "../helpers/utils";

describe("Unit - Template manager", () => {
	beforeEach(() => {
		this.mockProjLibs = {};
		this.customRequire = undefined;

		this.isTemplatesPath = modulePath => {
			return modulePath.startsWith(path.join(__dirname, "../../templates"));
		};
		// spy on require(), https://coderwall.com/p/ck7w6g/spying-on-require-with-jasmine
		spyOn(require("module"), "_load").and.callFake((modulePath: string) => {
			if (this.isTemplatesPath(modulePath)) {
				const folder = path.basename(modulePath);
				// tslint:disable-next-line:no-object-literal-type-assertion
				return {
					id: folder,
					name: folder,
					projectLibraries: this.mockProjLibs[folder]
				} as Framework;
			} else if (this.customRequire && this.customRequire.test(modulePath)) {
				return this.customRequire.require(modulePath);
			} else {
				fail(`unexpected require: ${modulePath}`);
			}
		});
	});

	it("Returns correct framework and projects", async done => {
		const frameworkIds = ["react", "angular"];
		this.mockProjLibs = frameworkIds.reduce((obj, folder) => {
			obj[folder] = [
				{ projectType: folder + "type1",  name: folder + 1 },
				{ projectType: folder + "type2",  name: folder + 2 }
			];
			return obj;
		}, {});
		spyOn(Util, "getDirectoryNames").and.returnValue(frameworkIds);

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

	it("Shows warnings for incorrect custom templates", async done => {
		spyOn(Util, "error");
		spyOn(Util, "getDirectoryNames").and.returnValue(["jquery"]);
		const template = "existing/template/";
		spyOn(ProjectConfig, "getConfig").and.returnValue({ customTemplates: [template] });
		spyOn(Util, "directoryExists").and.returnValue(true);
		spyOn(Util, "fileExists").and.returnValue(true);
		const mockProj =  mockProLibFactory("js");
		this.mockProjLibs = { jquery: [ mockProj ] };
		let group = "Grids";
		let type = "js";
		this.customRequire = {
			require: modulePath => {
				return {
					components: ["Grid"],
					controlGroup: group,
					framework: "jquery",
					id: "existing",
					projectType: type
				};
			},
			test: modulePath => modulePath.endsWith("template.json")
		};

		mockProj.hasTemplate.and.returnValue(true);
		let manager = new TemplateManager();
		expect(mockProj.registerTemplate).toHaveBeenCalledTimes(0);
		expect(Util.error).toHaveBeenCalledWith(`Template with id "existing" already exists.`);
		mockProj.hasTemplate.and.returnValue(false);

		resetSpy(Util.error);
		mockProj.projectType = "somethingElse";
		manager = new TemplateManager();
		expect(mockProj.registerTemplate).toHaveBeenCalledTimes(0);
		expect(Util.error).toHaveBeenCalledWith(
			`The framework/project type for template with id "existing" is not supported.`);
		mockProj.projectType = "js";

		resetSpy(Util.error);
		group = "NotGrids";
		manager = new TemplateManager();
		expect(mockProj.registerTemplate).toHaveBeenCalledTimes(0);
		expect(Util.error).toHaveBeenCalledWith(`No supported group for template with id "existing".`);
		group = "Grids";

		resetSpy(Util.error);
		type = "ts-not-available";
		manager = new TemplateManager();
		expect(mockProj.registerTemplate).toHaveBeenCalledTimes(0);
		expect(Util.error).toHaveBeenCalledWith(
			`The framework/project type for template with id "existing" is not supported.`);
		expect(Util.error).toHaveBeenCalledWith(`File path: ${(template + "template.json").replace(/\//g, path.sep)}`);

		done();
	});

	it("Loads custom templates from sub folders", async done => {
		spyOn(Util, "getDirectoryNames").and.returnValues(
			["jquery"], //frameworks load
			["template1", "template2"] //templates load
		);
		const template = "rootFolder/";
		spyOn(ProjectConfig, "getConfig").and.returnValue({ customTemplates: [template] });
		spyOn(Util, "directoryExists").and.returnValue(true);
		spyOn(Util, "fileExists").and.returnValues(false, true, true);
		this.mockProjLibs = { jquery: [ mockProLibFactory("js") ] };
		this.customRequire = {
			require: modulePath => {
				return {
					components: ["Grid"],
					controlGroup: "Grids",
					framework: "jquery",
					id: modulePath,
					projectType: "js"
				};
			},
			test: modulePath => modulePath.endsWith("template.json")
		};

		const manager = new TemplateManager();
		expect(Util.fileExists).toHaveBeenCalledTimes(3);
		expect(Util.fileExists).toHaveBeenCalledWith("rootFolder/template.json".replace(/\//g, path.sep));
		expect(this.mockProjLibs.jquery[0].registerTemplate).toHaveBeenCalledTimes(2);
		expect(this.mockProjLibs.jquery[0].registerTemplate).toHaveBeenCalledWith(
			jasmine.objectContaining({ id: "rootFolder/template1/template.json".replace(/\//g, path.sep) })
		);
		expect(this.mockProjLibs.jquery[0].registerTemplate).toHaveBeenCalledWith(
			jasmine.objectContaining({ id: "rootFolder/template2/template.json".replace(/\//g, path.sep) })
		);

		done();
	});

	it("Should load/create/register diff types of external custom Templates", async done => {
		spyOn(Util, "getDirectoryNames").and.returnValue(["jquery", "react", "angular"]);
		const templates = [
			"file:/template/jquery/js",
			"file:/template/react/es6",
			"path:/template/angular/ig-ts",
			"/template/angular/igx-ts"
		];
		spyOn(ProjectConfig, "getConfig").and.returnValue({ customTemplates: templates });
		spyOn(Util, "directoryExists").and.returnValue(true);
		spyOn(Util, "fileExists").and.returnValue(true);
		const mockProjLibs = this.mockProjLibs = {
			angular: [ mockProLibFactory("ig-ts"), mockProLibFactory("igx-ts")],
			jquery: [ mockProLibFactory("js") ],
			react: [ mockProLibFactory("es6") ]
		};
		this.customRequire = {
			require: modulePath => {
				const [ frameworkId, proj ] = modulePath.split(path.sep).filter(x => x && !x.includes("template"));
				return {
					components: ["Grid"],
					controlGroup: "Grids",
					framework: frameworkId,
					id: modulePath,
					projectType: proj
				};
			},
			test: modulePath => modulePath.endsWith("template.json")
		};

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
