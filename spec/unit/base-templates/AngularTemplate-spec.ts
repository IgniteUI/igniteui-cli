import { App, Config, ProjectConfig, Util } from "@igniteui/cli-core";
import * as path from "path";
import { AngularTemplate } from "../../../packages/cli/lib/templates/AngularTemplate";
import { AngularTypeScriptFileUpdate } from "@igniteui/angular-templates";

describe("Unit - AngularTemplate Base", () => {
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

	it("generateConfig call processTemplates with correct path and variables", async () => {
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
	});

	it("generateConfig merge passed variables under extraConfig (only)", async () => {
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
	});

	describe("registerInProject", () => {
		let helpers;
		beforeEach(() => {
		    const tsUpdateMock = jasmine.createSpyObj(
			    "AngularTypeScriptFileUpdate", ["addRoute", "addNgModuleMeta", "finalize"]) as AngularTypeScriptFileUpdate;
			function AngularTypeScriptFileUpdate() {
			    this.addRoute = tsUpdateMock.addRoute;
			    this.addNgModuleMeta = tsUpdateMock.addNgModuleMeta;
			    this.finalize = tsUpdateMock.finalize;
			}

		    helpers = {
		        tsUpdateMock,
			    AngularTypeScriptFileUpdate,
			    requireMock: require
		    }

			// spy on require:
			spyOn(require("module"), "_load").and.callFake((modulePath: string) => {
				if (modulePath.endsWith("@igniteui/angular-templates")) {
					return helpers;
				} else if (modulePath.endsWith("@igniteui/cli-core/packages/components")) {
					return { dv: ["igDvWidget"] };
				}
			});
			spyOn(helpers, "AngularTypeScriptFileUpdate").and.callThrough();

			const mockFileSystem = {
				fileExists: jasmine.createSpy().and.returnValue(false),
				readFile: jasmine.createSpy().and.returnValue(JSON.stringify({ key: "value" })),
				writeFile: jasmine.createSpy().and.callThrough()
			};
			spyOn(App.container, 'get').and.returnValue(mockFileSystem);

			const mockProjectConfig = {
				project: {
					sourceFiles: ["existing"]
				}
			} as unknown as Config;
			// return through function to get new obj ref each time
			spyOn(ProjectConfig, "getConfig").and.callFake(() => (mockProjectConfig));
			spyOn(ProjectConfig, "setConfig");
		});

		it("registers route and declare component", async () => {
			const templ = new TestTemplate();
			templ.registerInProject("target/path", "view name");
			expect(helpers.AngularTypeScriptFileUpdate)
				.toHaveBeenCalledWith(path.join("target/path", "src/app/app-routing.module.ts"), false, { singleQuotes: false });
			expect(helpers.tsUpdateMock.addRoute).toHaveBeenCalledWith(
				{
					path: 'view-name',
					identifierName: 'ViewNameComponent',
					modulePath: './components/view-name/view-name.component',
					data: { text: 'view name' }
				}
			);

			expect(helpers.AngularTypeScriptFileUpdate)
				.toHaveBeenCalledWith(path.join("target/path", "src/app/app.module.ts"), false, { singleQuotes: false });
			expect(helpers.tsUpdateMock.addNgModuleMeta).toHaveBeenCalledWith(
				{
					declare: [
					  "ViewNameComponent",
					],
					from: "./components/view-name/view-name.component",
					export: [],
				}
			);
			expect(helpers.tsUpdateMock.finalize).toHaveBeenCalled();

			//config update:
			expect(ProjectConfig.setConfig).toHaveBeenCalledTimes(0);
		});
		it("should skip route if skipRoute is passed", async () => {
			const templ = new TestTemplate();
			templ.registerInProject("target/path", "view name", { skipRoute: true });
			expect(helpers.tsUpdateMock.addRoute).toHaveBeenCalledTimes(0);

			// just declare
			expect(helpers.AngularTypeScriptFileUpdate).toHaveBeenCalledTimes(1);
			expect(helpers.AngularTypeScriptFileUpdate).toHaveBeenCalledWith(path.join("target/path", "src/app/app.module.ts"),
				false, { singleQuotes: false });
			expect(helpers.tsUpdateMock.addNgModuleMeta).toHaveBeenCalledWith(
				{
					declare: [
					  "ViewNameComponent",
					],
					from: "./components/view-name/view-name.component",
					export: [],
				}
			);
			expect(helpers.tsUpdateMock.finalize).toHaveBeenCalled();

			//config update:
			expect(ProjectConfig.setConfig).toHaveBeenCalledTimes(0);
		});
		it("updates project config", async () => {
			const templ = new TestTemplate();
			templ.dependencies.push("igDvWidget");
			templ.registerInProject("", "");
			const firstMockProjectConfig = {
				project: {
					sourceFiles: ["existing", "infragistics.dv.js"]
				}
			} as unknown as Config;
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith(firstMockProjectConfig);

			templ.dependencies.push("igExcel");
			templ.registerInProject("", "");
			const secondMockProjectConfig = {
				project: {
					sourceFiles: ["existing", "infragistics.dv.js", "infragistics.excel-bundled.js"]
				}
			} as unknown as Config;
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith(secondMockProjectConfig);

			templ.dependencies.push("igGridExcelExporter");
			templ.registerInProject("", "");
			const thirdMockProjectConfig = {
				project: {
					sourceFiles: [
						"existing",
						"infragistics.dv.js",
						"infragistics.excel-bundled.js",
						"modules/infragistics.gridexcelexporter.js"
					]
				}
			} as unknown as Config;
			expect(ProjectConfig.setConfig).toHaveBeenCalledWith(thirdMockProjectConfig);
		});
	});
});
