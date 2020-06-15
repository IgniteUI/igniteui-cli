import { ProjectConfig, TypeScriptFileUpdate, Util } from "@igniteui/cli-core";
import * as path from "path";
import { AngularTemplate } from "../../../packages/cli/lib/templates/AngularTemplate";

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

	it("generateConfig call processTemplates with correct path and variables", async done => {
		const expected = {
			name: "my component",
			ClassName: "MyComponent",
			path: "my-component",
			filePrefix: "my-component",
			description: "test description",
			cliVersion: Util.version(),
			camelCaseName: "myComponent",
			nameMerged: "TestTemplate"
		};
		spyOn(Util, "processTemplates");
		// const validateSpy = spyOn<any>(Util, "validateTemplate").and.returnValue(true);

		const templ = new TestTemplate();
		const actual = templ.generateConfig("my component", {});
		expect(actual).toEqual(expected);
		// expect(validateSpy).toHaveBeenCalledWith(
		// 	path.join("root/path" , "files"),
		// 	"/target/path",
		// 	expected, {});
		// expect(Util.processTemplates).toHaveBeenCalledWith(
		// 	path.join("root/path" , "files"),
		// 	"/target/path",
		// 	expected, {});
		done();
	});

	it("generateConfig merge passed variables under extraConfig (only)", async done => {
		const expected = {
			name: "page",
			ClassName: "Page",
			path: "page",
			filePrefix: "page",
			description: undefined,
			// widget
			widget: "widget no-process",
			// extra
			extraConfig1 : "extraConfig1",
			camelCaseName: "page",
			gridFeatures : "{ features }",
			cliVersion: Util.version()
		};
		spyOn(Util, "processTemplates");
		// const validateSpy = spyOn<any>(Util, "validateTemplate").and.returnValue(true);

		const templ = new TestWidgetTemplate("root");
		let actual = templ.generateConfig("page", { extraConfig : {
			extraConfig1 : "extraConfig1",
			gridFeatures : "{ features }"
		} });
		expect(actual).toEqual(expected);
		// expect(validateSpy).toHaveBeenCalledWith(
		// 	path.join("root" , "files"),
		// 	"/target/path",
		// 	expected, {});
		// expect(Util.processTemplates).toHaveBeenCalledWith(
		// 	path.join("root" , "files"),
		// 	"/target/path",
		// 	expected, {});
		actual = templ.generateConfig("page", {
			extraConfig : {
				extraConfig1 : "extraConfig1",
				gridFeatures : "{ features }"
			},
			someOtherVar: "some/some.module.ts",
			someThirdVar: false
		});
		expect(actual).toEqual(expected);
		done();
	});

	describe("registerInProject", () => {
		let helpers;
		beforeEach(() => {
			helpers = {
				tsUpdateMock: jasmine.createSpyObj(
					"TypeScriptFileUpdate", ["addRoute", "addDeclaration", "finalize"]) as TypeScriptFileUpdate,
				TypeScriptFileUpdate: () => helpers.tsUpdateMock,
				requireMock: require
			};
			// spy on require:
			spyOn(require("module"), "_load").and.callFake((modulePath: string) => {
				if (modulePath.endsWith("@igniteui/cli-core/typescript")) {
					return helpers;
				} else if (modulePath.endsWith("@igniteui/cli-core/packages/components")) {
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
				path.join("target/path", `src/app/components/view-name/view-name.component.ts`),
				false // if added to a custom module => true
			);
			expect(helpers.tsUpdateMock.finalize).toHaveBeenCalled();

			//config update:
			expect(ProjectConfig.setConfig).toHaveBeenCalledTimes(0);
			done();
		});
		it("should skip route if skipRoute is passed", async done => {
			const templ = new TestTemplate();
			templ.registerInProject("target/path", "view name", { skipRoute: true });
			expect(helpers.tsUpdateMock.addRoute).toHaveBeenCalledTimes(0);

			// just declare
			expect(helpers.TypeScriptFileUpdate).toHaveBeenCalledTimes(1);
			expect(helpers.TypeScriptFileUpdate).toHaveBeenCalledWith(path.join("target/path", "src/app/app.module.ts"));
			expect(helpers.tsUpdateMock.addDeclaration).toHaveBeenCalledWith(
				path.join("target/path", `src/app/components/view-name/view-name.component.ts`),
				false // if added to a custom module => true
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
