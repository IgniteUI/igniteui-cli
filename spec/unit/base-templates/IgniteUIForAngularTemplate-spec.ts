import * as path from "path";
import { TypeScriptFileUpdate } from "../../../lib/project-utility/TypeScriptFileUpdate";
import { TypeScriptUtils } from "../../../lib/project-utility/TypeScriptUtils";
import { ProjectConfig } from "../../../lib/ProjectConfig";
import { IgniteUIForAngularTemplate } from "../../../lib/templates/IgniteUIForAngularTemplate";
import { resetSpy } from "../../helpers/utils";

describe("Unit - IgniteUIForAngularTemplate Base", () => {
	class TestTemplate extends IgniteUIForAngularTemplate {
		constructor() {
			super("root/path");
			this.name = "Test Template";
			this.description = "test description";
			this.dependencies = [];
		}
		public getBaseVariables(name) { return super.getBaseVariables(name); }
	}

	describe("registerInProject", () => {
		const helpers = {
			// tslint:disable
			tsUpdateMock: jasmine.createSpyObj("TypeScriptFileUpdate", ["addRoute", "addDeclaration", "addNgModuleMeta", "finalize"]) as TypeScriptFileUpdate,
			TypeScriptFileUpdate: function() {
				return helpers.tsUpdateMock;
			},
			// tslint:enable
			requireMock: require
		};
		beforeEach(() => {
			// spy on require:
			spyOn(require("module"), "_load").and.callFake((modulePath: string) => {
				if (modulePath.endsWith("../project-utility/TypeScriptFileUpdate")) {
					return helpers;
				} else if (modulePath.endsWith("../packages/components")) {
					return { dv: ["igDvWidget"] };
				}
			});
			spyOn(helpers, "TypeScriptFileUpdate").and.callThrough();
			// return through function to get new obj ref each time
			spyOn(ProjectConfig, "getConfig").and.callFake(() => ({ project: { sourceFiles: ["existing"] } }));
			spyOn(ProjectConfig, "setConfig");
		});

		it("registers route and declare component", async done => {
			const templ = new TestTemplate();
			templ.registerInProject("target/path", "view name");
			expect(helpers.TypeScriptFileUpdate).toHaveBeenCalledWith(path.join("target/path", "src/app/app-routing.module.ts"));
			expect(helpers.tsUpdateMock.addRoute).toHaveBeenCalledWith(
				path.join("target/path", `src/app/view-name/view-name.component.ts`),
				"view-name", //path
				"view name" //text
			);

			expect(helpers.TypeScriptFileUpdate).toHaveBeenCalledWith(path.join("target/path", "src/app/app.module.ts"));
			expect(helpers.tsUpdateMock.addDeclaration).toHaveBeenCalledWith(
				path.join("target/path", `src/app/view-name/view-name.component.ts`)
			);
			expect(helpers.tsUpdateMock.addNgModuleMeta).toHaveBeenCalledTimes(0);
			expect(helpers.tsUpdateMock.finalize).toHaveBeenCalled();
			//config update:
			expect(ProjectConfig.setConfig).toHaveBeenCalledTimes(0);
			done();
		});
		it("updates NgModule metadata", async done => {
			const templ = new TestTemplate();
			templ.dependencies.push({ import: "test", from: "test" });
			templ.registerInProject("", "");
			expect(helpers.tsUpdateMock.addNgModuleMeta).toHaveBeenCalledWith(
				{ import: "test", from: "test" },
				templ.getBaseVariables("")
			);
			resetSpy(helpers.tsUpdateMock.addNgModuleMeta);

			templ.dependencies.push({ declare: "test2", provide: "test2" });
			templ.registerInProject("", "");
			expect(helpers.tsUpdateMock.addNgModuleMeta).toHaveBeenCalledWith(
				{ import: "test", from: "test" },
				templ.getBaseVariables(""));
			expect(helpers.tsUpdateMock.addNgModuleMeta).toHaveBeenCalledWith(
				{ declare: "test2", provide: "test2" },
				templ.getBaseVariables(""));

			done();
		});
		it("formats relative imports", async done => {
			spyOn(TestTemplate.prototype, "getBaseVariables").and.returnValue({});
			spyOn(TypeScriptUtils, "relativePath").and.returnValue("./relative/result/test");
			const mainPath = path.join("target", "src/app/app.module.ts");
			const filePath = path.join("target", "./test.ts");

			const templ = new TestTemplate();
			templ.dependencies = [{ from: "./test.ts" }];
			templ.registerInProject("target", "name");

			expect(TypeScriptUtils.relativePath).toHaveBeenCalledWith(mainPath, filePath, true, true);
			expect(helpers.tsUpdateMock.addNgModuleMeta).toHaveBeenCalledWith({ from: "./relative/result/test" }, {});

			done();
		});
	});
});
