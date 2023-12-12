import { FEED_PACKAGE, IgniteUIForAngularTemplate, NPM_DOCK_MANAGER, NPM_PACKAGE } from "@igniteui/angular-templates";
import { App, FS_TOKEN, IFileSystem, ProjectConfig, TypeScriptFileUpdate, Util } from "@igniteui/cli-core";
import * as path from "path";
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
		let helpers;
		beforeEach(() => {
			helpers = {
				requireMock: require,
				tsUpdateMock: jasmine.createSpyObj(
					"TypeScriptFileUpdate", ["addRoute", "addDeclaration", "addNgModuleMeta", "finalize"]) as TypeScriptFileUpdate,
				TypeScriptFileUpdate: (...args) => {
					return helpers.tsUpdateMock;
				}
			};
			App.initialize();
			// spy on require:
			spyOn(require("module"), "_load").and.callFake((modulePath: string) => {
				if (modulePath.endsWith("@igniteui/cli-core/typescript")) {
					return helpers;
				} else if (modulePath.endsWith("@igniteui/cli-core/packages/components")) {
					return { dv: ["igDvWidget"] };
				}
			});
			// spy on version due to require override
			spyOn(Util, "version").and.returnValue("1.0.0");
			spyOn(helpers, "TypeScriptFileUpdate").and.callThrough();
			// return through function to get new obj ref each time
			spyOn(ProjectConfig, "getConfig").and.callFake(() => ({ project: { sourceFiles: ["existing"] } }));
			spyOn(ProjectConfig, "setConfig");
		});

		it("registers route and declare component", async done => {
			const templ = new TestTemplate();
			const mockFS = {
				fileExists: () => {}
			};
			spyOn(templ, "fileExists").and.returnValue(true);
			spyOn(App.container, "get").and.returnValue(mockFS);
			spyOn(mockFS, "fileExists").and.callFake(file => {
				if (file === "src/app/app-routing.module.ts") {
					return true;
				}
			});
			templ.registerInProject("target/path", "view name");
			expect(helpers.TypeScriptFileUpdate)
			.toHaveBeenCalledWith(path.join("target/path", "src/app/app-routing.module.ts"));
			expect(helpers.tsUpdateMock.addRoute).toHaveBeenCalledWith(
				path.join("target/path", `src/app/view-name/view-name.component.ts`),
				"view-name", //path
				"view name" //text
			);

			expect(helpers.TypeScriptFileUpdate)
			.toHaveBeenCalledWith(path.join("target/path", "src/app/app.module.ts"));
			expect(helpers.tsUpdateMock.addDeclaration).toHaveBeenCalledWith(
				path.join("target/path", `src/app/view-name/view-name.component.ts`),
				false // if added to a custom module => true
			);
			expect(helpers.tsUpdateMock.addNgModuleMeta).toHaveBeenCalledTimes(0);
			expect(helpers.tsUpdateMock.finalize).toHaveBeenCalled();
			//config update:
			expect(ProjectConfig.setConfig).toHaveBeenCalledTimes(0);
			done();
		});
		it("updates NgModule metadata", async done => {
			const templ = new TestTemplate();
			spyOn(templ, "fileExists").and.returnValue(true);
			templ.dependencies.push({ import: "test", from: "test" });
			templ.registerInProject("", "");
			expect(helpers.tsUpdateMock.addNgModuleMeta).toHaveBeenCalledWith(
				{ import: "test", from: "test" },
				Util.applyDelimiters(templ.getBaseVariables(""), templ.delimiters.content)
			);
			resetSpy(helpers.tsUpdateMock.addNgModuleMeta);

			templ.dependencies.push({ declare: "test2", provide: "test2" });
			templ.registerInProject("", "");
			expect(helpers.tsUpdateMock.addNgModuleMeta).toHaveBeenCalledWith(
				{ import: "test", from: "test" },
				Util.applyDelimiters(templ.getBaseVariables(""), templ.delimiters.content));
			expect(helpers.tsUpdateMock.addNgModuleMeta).toHaveBeenCalledWith(
				{ declare: "test2", provide: "test2" },
				Util.applyDelimiters(templ.getBaseVariables(""), templ.delimiters.content));

			done();
		});
		it("formats relative imports", async done => {
			spyOn(TestTemplate.prototype, "getBaseVariables").and.returnValue({});
			spyOn(Util, "relativePath").and.returnValue("./relative/result/test");
			const mainPath = path.join("target", "src/app/app.module.ts");
			const filePath = path.join("target", "./test.ts");

			const templ = new TestTemplate();
			spyOn(templ, "fileExists").and.returnValue(true);
			templ.dependencies = [{ from: "./test.ts" }];
			templ.registerInProject("target", "name");

			expect(Util.relativePath).toHaveBeenCalledWith(mainPath, filePath, true, true);
			expect(helpers.tsUpdateMock.addNgModuleMeta).toHaveBeenCalledWith({ from: "./relative/result/test" }, {});

			done();
		});

		it("should skip route if skipRoute is passed", async done => {
			const templ = new TestTemplate();
			spyOn(templ, "fileExists").and.returnValue(true);
			templ.registerInProject("target/path", "view name", { skipRoute: true });
			expect(helpers.tsUpdateMock.addRoute).toHaveBeenCalledTimes(0);

			// just declare
			expect(helpers.TypeScriptFileUpdate).toHaveBeenCalledTimes(1);
			expect(helpers.TypeScriptFileUpdate)
			.toHaveBeenCalledWith(path.join("target/path", "src/app/app.module.ts"));
			expect(helpers.tsUpdateMock.addDeclaration).toHaveBeenCalledWith(
				path.join("target/path", `src/app/view-name/view-name.component.ts`),
				false // if added to a custom module => true
			);
			expect(helpers.tsUpdateMock.addNgModuleMeta).toHaveBeenCalledTimes(0);
			expect(helpers.tsUpdateMock.finalize).toHaveBeenCalled();
			done();
		});

		it("generateConfig merges variables passed under extraConfig", async done => {
			const expected = {
				camelCaseName: "test",
				ClassName: "Test",
				cliVersion: Util.version(),
				description: "test description",
				dockManagerPackage: `${NPM_DOCK_MANAGER}`,
				igxPackage: `${NPM_PACKAGE}`
			};
			Object.assign(expected, {
				// extra
				extraConfig1 : "extraConfig1",
				filePrefix: "test",
				gridFeatures : "{ features }",
				name: "test",
				path: "test"
			});

			const options = {
				extraConfig : {
					extraConfig1 : "extraConfig1",
					gridFeatures : "{ features }"
				},
				someOtherVar: false,
				someVar: "something/something.module.ts"
			};

			const templ = new TestTemplate();
			let actual = templ.generateConfig("test", options);
			expect(actual).toEqual(expected);

			spyOn(App.container.get<IFileSystem>(FS_TOKEN), "readFile").and.callFake((filePath: string) => {
				if (filePath === "./package.json") {
					return `{ "dependencies": { "${FEED_PACKAGE}": "*" } }`;
				}
			});
			expected.igxPackage = FEED_PACKAGE;
			actual = templ.generateConfig("test", options);
			expect(actual).toEqual(expected);
			done();
		});
	});
});
