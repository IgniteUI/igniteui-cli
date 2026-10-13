import { App, FS_TOKEN, IFileSystem, ROUTES_VARIABLE_NAME, Util } from "@igniteui/cli-core";
import * as path from "path";
import { IgniteUIForWebComponentsTemplate } from "../../packages/cli/lib/templates/IgniteUIForWebComponentsTemplate";
import { WebComponentsTypeScriptFileUpdate } from "../../packages/cli/templates/webcomponents/WebComponentsTypeScriptFileUpdate";

describe("Unit - IgniteUIForWebComponentsTemplate", () => {
	const routesPath = "src/app/app-routing.ts";
	let originalFs: IFileSystem;
	let mockFs: jasmine.SpyObj<IFileSystem>;
	let template: IgniteUIForWebComponentsTemplate;
	let addRouteSpy: jasmine.Spy;
	let addChildRouteSpy: jasmine.Spy;
	let finalizeSpy: jasmine.Spy;

	beforeEach(() => {
		originalFs = App.container.get<IFileSystem>(FS_TOKEN);
		mockFs = jasmine.createSpyObj<IFileSystem>("mockFs", ["fileExists", "readFile", "writeFile", "directoryExists", "glob"]);
		mockFs.fileExists.and.callFake(file => file === routesPath);
		mockFs.readFile.and.returnValue("export const routes = [];");
		App.container.set(FS_TOKEN, mockFs);

		addRouteSpy = spyOn(WebComponentsTypeScriptFileUpdate.prototype, "addRoute");
		addChildRouteSpy = spyOn(WebComponentsTypeScriptFileUpdate.prototype, "addChildRoute");
		finalizeSpy = spyOn(WebComponentsTypeScriptFileUpdate.prototype, "finalize");

		template = new IgniteUIForWebComponentsTemplate("root/path");
		template.description = "Test description";
	});

	afterEach(() => {
		App.container.set(FS_TOKEN, originalFs);
	});

	it("has webcomponents defaults and a files template path", () => {
		expect(template.framework).toBe("webcomponents");
		expect(template.projectType).toBe("igc-ts");
		expect(template.templatePaths).toEqual([path.join("root/path", "files")]);
	});

	it("throws for extra configuration methods", () => {
		expect(() => template.getExtraConfiguration()).toThrowError("Method not implemented.");
		expect(() => template.setExtraConfiguration({})).toThrowError("Method not implemented.");
	});

	describe("generateConfig", () => {
		it("returns the base variables merged with extraConfig", () => {
			const config = template.generateConfig("My Component", { extraConfig: { custom: "value" } });

			expect(config).toEqual(jasmine.objectContaining({
				custom: "value",
				name: "My Component",
				ClassName: "MyComponent",
				path: "my-component",
				filePrefix: "my-component",
				description: "Test description",
				cliVersion: Util.version(),
				camelCaseName: Util.camelCase("My Component")
			}));
			expect(config.dockManagerPackage).toBeDefined();
		});

		it("uses the folder from a nested name as path", () => {
			const config = template.generateConfig("Some Folder/My Component", {});

			expect(config.path).toBe("some-folder/my-component");
			expect(config.filePrefix).toBe("my-component");
			expect(config.name).toBe("My Component");
		});

		it("removes leading spaces from nested folder names", () => {
			const config = template.generateConfig("folder/   My Component", {});

			expect(config.path).toBe("folder/my-component");
		});

		it("exits for a path outside of the project", () => {
			spyOn(Util, "error");
			const exitSpy = spyOn(process, "exit").and.throwError("exit");

			// resolved against <cwd>/src/app, so three levels up leaves the project
			expect(() => template.generateConfig("../../../outside/comp", {})).toThrowError("exit");
			expect(Util.error).toHaveBeenCalledWith(jasmine.stringMatching(/is not valid!/), "red");
			expect(exitSpy).toHaveBeenCalledWith(1);
		});

		it("returns false and logs an error for a wrong module path", async () => {
			spyOn(Util, "error");
			spyOn(Util, "fileExists").and.returnValue(false);

			const result: unknown = template.generateConfig("comp", { modulePath: "missing.module.ts" });

			expect(await result).toBe(false);
			expect(Util.error).toHaveBeenCalledWith(
				"Wrong module path provided: missing.module.ts. No components were added!");
		});
	});

	describe("registerInProject", () => {
		const child = {
			identifierName: ROUTES_VARIABLE_NAME,
			aliasName: "childRoutes",
			modulePath: "./my-component/my-component-routing"
		};

		it("does nothing without a parent name", () => {
			template.registerInProject("", "My Component", {});

			expect(mockFs.readFile).not.toHaveBeenCalled();
			expect(addRouteSpy).not.toHaveBeenCalled();
		});

		it("adds a route for the component and finalizes", () => {
			template.registerInProject("", "My Component", { parentName: "app", parentRoutingModulePath: routesPath });

			expect(addRouteSpy).toHaveBeenCalledOnceWith(
				{ path: "my-component", identifierName: "app-my-component", name: "My Component" }, false);
			expect(addChildRouteSpy).not.toHaveBeenCalled();
			expect(finalizeSpy).toHaveBeenCalledTimes(1);
		});

		it("does not add routes when skipRoute is set", () => {
			template.registerInProject("", "My Component",
				{ parentName: "app", parentRoutingModulePath: routesPath, skipRoute: true });

			expect(addRouteSpy).not.toHaveBeenCalled();
			expect(finalizeSpy).not.toHaveBeenCalled();
		});

		it("does not add routes when the routing file doesn't exist", () => {
			template.registerInProject("", "My Component",
				{ parentName: "app", parentRoutingModulePath: "src/app/missing-routing.ts" });

			expect(addRouteSpy).not.toHaveBeenCalled();
			expect(finalizeSpy).not.toHaveBeenCalled();
		});

		it("adds a redirect route for the default path", () => {
			template.registerInProject("", "My Component",
				{ parentName: "app", parentRoutingModulePath: routesPath }, true);

			expect(addRouteSpy).toHaveBeenCalledTimes(2);
			expect(addRouteSpy.calls.argsFor(0)).toEqual([{ path: "", redirectTo: "app-my-component", name: "My Component" }]);
			expect(addRouteSpy.calls.argsFor(1)).toEqual(
				[{ path: "my-component", identifierName: "app-my-component", name: "My Component" }, false]);
			expect(addChildRouteSpy).not.toHaveBeenCalled();
		});

		it("adds child routes when the template has children", () => {
			template.registerInProject("", "My Component", {
				parentName: "app", parentRoutingModulePath: routesPath, hasChildren: true, routerChildren: "childRoutes"
			});

			expect(addChildRouteSpy).toHaveBeenCalledOnceWith("my-component", child, true);
		});

		it("adds child routes for both the default and the component path", () => {
			template.registerInProject("", "My Component", {
				parentName: "app", parentRoutingModulePath: routesPath, hasChildren: true, routerChildren: "childRoutes"
			}, true);

			expect(addChildRouteSpy).toHaveBeenCalledTimes(2);
			expect(addChildRouteSpy.calls.argsFor(0)).toEqual(["", child, true]);
			expect(addChildRouteSpy.calls.argsFor(1)).toEqual(["my-component", child, true]);
		});
	});
});
