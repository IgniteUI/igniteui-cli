import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import { GoogleAnalytics, ProjectConfig } from "@igniteui/cli-core";
import * as path from "path";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";

const collectionPath = path.join(__dirname, "../collection.json");

describe("component",  () => {

	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	it("works", done => {
		const runner = new SchematicTestRunner("schematics", collectionPath);
		const mockInst = {
			generateConfig: jasmine.createSpy(),
			packages: [],
			registerInProject: jasmine.createSpy(),
			templatePaths: []
		};
		const mockLib = {
			getCustomTemplates: () => {},
			getTemplateById: jasmine.createSpy().and.returnValue(mockInst),
			hasTemplate: jasmine.createSpy().and.returnValue(true)
		};
		const projLibSpy = spyOn(SchematicsTemplateManager.prototype, "getProjectLibrary");
		projLibSpy.and.returnValue(mockLib);

		const mockConfig = {
			customTemplates: ["path:C:\work\GitHub\ignite-ui-cli\output\custom-templ"],
			project: {
				theme: "Custom"
			}
		};
		const projConfigSpy = spyOn(ProjectConfig, "getConfig");
		projConfigSpy.and.returnValue(mockConfig);

		const tree = runner.runSchematicAsync("component",
			{ name: "my-combo", template: "combo", templateInst: mockInst, skipRoute: false }, Tree.empty());
		tree.subscribe(state => {
			expect(mockInst.generateConfig).toHaveBeenCalledWith("my-combo", {});
			expect(mockInst.registerInProject).toHaveBeenCalledWith("", "my-combo", { skipRoute: false, modulePath: undefined });
			expect(projLibSpy).toHaveBeenCalledWith("angular", "igx-ts");
			expect(mockLib.hasTemplate).toHaveBeenCalledWith("combo");
			expect(mockLib.getTemplateById).toHaveBeenCalledWith("combo");
			expect(state.files).toEqual([]);
			done();
		});
	});
});
