import * as path from "path";
import { TypeScriptFileUpdate } from "../../../lib/project-utility/TypeScriptFileUpdate";
import { TypeScriptUtils } from "../../../lib/project-utility/TypeScriptUtils";
import { ProjectConfig } from "../../../lib/ProjectConfig";
import { AngularTemplate } from "../../../lib/templates/AngularTemplate";
import { Util } from "../../../lib/Util";

describe("Unit - AngularTemplate Base", () => {
	// tslint:disable:object-literal-sort-keys
	class TestTemplate extends AngularTemplate {
		constructor() {
			super("root/path");
			this.name = "Test Template";
			this.description = "test description";
		}
	}
	class TestWidgetTemplate extends AngularTemplate {
		public widget = "widget no-process";
	}

	it("generateFiles call processTemplates with correct path and variables", async done => {
		const expected = {
			"$(name)": "my component",
			"$(ClassName)": "MyComponent",
			"__name__": "my-component",
			"__path__": "my-component",
			"$(filePrefix)": "my-component",
			"$(description)": "test description",
			"$(nameMerged)": "TestTemplate"
		};
		spyOn(Util, "processTemplates");
		spyOn(Util, "validateTemplate").and.returnValue(true);

		const templ = new TestTemplate();
		templ.generateFiles("/target/path", "my component");
		expect(Util.validateTemplate).toHaveBeenCalledWith(
			path.join("root/path" , "files"),
			"/target/path",
			expected, {});
		expect(Util.processTemplates).toHaveBeenCalledWith(
			path.join("root/path" , "files"),
			"/target/path",
			expected, {});
		done();
	});

	it("generateFiles merge passed variables", async done => {
		const expected = {
			"$(name)": "page",
			"$(ClassName)": "Page",
			"__name__": "page",
			"__path__": "page",
			"$(filePrefix)": "page",
			"$(description)": undefined,
			// widget
			"$(widget)": "widget no-process",
			// extra
			"$(extraConfig1)" : "extraConfig1",
			"$(gridFeatures)" : "{ features }"
		};
		spyOn(Util, "processTemplates");
		spyOn(Util, "validateTemplate").and.returnValue(true);

		const templ = new TestWidgetTemplate("root");
		templ.generateFiles("/target/path", "page", { extraConfig : {
			"$(extraConfig1)" : "extraConfig1",
			"$(gridFeatures)" : "{ features }"
		} });
		expect(Util.validateTemplate).toHaveBeenCalledWith(
			path.join("root" , "files"),
			"/target/path",
			expected, {});
		expect(Util.processTemplates).toHaveBeenCalledWith(
			path.join("root" , "files"),
			"/target/path",
			expected, {});
		done();
	});

	describe("registerInProject", () => {
		const helpers = {
			// tslint:disable
			tsUpdateMock: jasmine.createSpyObj("TypeScriptFileUpdate", ["addRoute", "addDeclaration", "finalize"]) as TypeScriptFileUpdate,
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
				path.join("target/path", `src/app/components/view-name/view-name.component.ts`),
				"view-name", //path
				"view name" //text
			);

			expect(helpers.TypeScriptFileUpdate).toHaveBeenCalledWith(path.join("target/path", "src/app/app.module.ts"));
			expect(helpers.tsUpdateMock.addDeclaration).toHaveBeenCalledWith(
				path.join("target/path", `src/app/components/view-name/view-name.component.ts`)
			);
			expect(helpers.tsUpdateMock.finalize).toHaveBeenCalled();

			//config update:
			expect(ProjectConfig.setConfig).toHaveBeenCalledTimes(0);
			done();
		});
		it("updates project config", async done => {
			const templ = new TestTemplate();
			templ.dependencies.push("igDvWidget");
			templ.registerInProject("", "");
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith({ project: {
				sourceFiles: ["existing", "infragistics.dv.js"]
			} });

			templ.dependencies.push("igExcel");
			templ.registerInProject("", "");
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith({ project: {
				sourceFiles: ["existing", "infragistics.dv.js", "infragistics.excel-bundled.js"]
			} });

			templ.dependencies.push("igGridExcelExporter");
			templ.registerInProject("", "");
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith({ project: {
				sourceFiles: [
					"existing",
					"infragistics.dv.js",
					"infragistics.excel-bundled.js",
					"modules/infragistics.gridexcelexporter.js"
				]
			} });
			done();
		});
	});
});
