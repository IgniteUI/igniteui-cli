import * as path from "path";
import { TypeScriptFileUpdate } from "../project-utility/TypeScriptFileUpdate";
import { TypeScriptUtils as TsUtils } from "../project-utility/TypeScriptUtils";
import { ProjectConfig } from "../ProjectConfig";
import { Util } from "../Util";
import { AngularTemplate } from "./AngularTemplate";

export class IgniteUIForAngularTemplate extends AngularTemplate {

	public dependencies: TemplateDependency[] = [];

	constructor(rootPath: string) {
		super(rootPath);
	}

	public registerInProject(projectPath: string, name: string, options?: {[key: string]: any}) {
		let modulePath = "app.module.ts";
		if (options && options.modulePath) {
			modulePath = options.modulePath;
		}
		const stringDeps = this.dependencies.filter(x => typeof x === "string");
		if (stringDeps.length) {
			/** @deprecate */
			Util.warn("String dependencies are deprecated, use object descriptions.", "yellow");
			this.dependencies = this.dependencies.map(x => {
				if (typeof x === "string") {
					return { import: x, from: "igniteui-angular/main" };
				}
				return x;
			});
		}

		// D.P. Don't use the top-level import as that chains import of typescript
		// which slows down execution of the entire component noticeably (template loading)
		// https://www.typescriptlang.org/docs/handbook/modules.html#dynamic-module-loading-in-nodejs
		// tslint:disable-next-line:variable-name
		const TsUpdate: typeof TypeScriptFileUpdate =
			require("./../project-utility/TypeScriptFileUpdate").TypeScriptFileUpdate;

		//1) import the component class name,
		//2) and populate the Routes array with the path and component
		//for example: { path: 'combo', component: ComboComponent }
		const routingModule = new TsUpdate(path.join(projectPath, "src/app/app-routing.module.ts"));
		routingModule.addRoute(
			path.join(projectPath, `src/app/${this.folderName(name)}/${this.fileName(name)}.component.ts`),
			this.folderName(name), //path
			name //text
		);

		//3) add an import of the component class from its file location.
		//4) populate the declarations portion of the @NgModule with the component class name.
		const mainModulePath = path.join(projectPath, `src/app/${modulePath}`);
		const mainModule = new TsUpdate(mainModulePath);
		mainModule.addDeclaration(
			path.join(projectPath, `src/app/${this.folderName(name)}/${this.fileName(name)}.component.ts`),
			modulePath !== "app.module.ts"
		);

		// import IgxModules and other dependencies
		for (const dep of this.dependencies) {
			if (dep.from && dep.from.startsWith(".")) {
				// relative file dependency
				dep.from = TsUtils.relativePath(mainModulePath, path.join(projectPath, dep.from), true, true);
			}
			mainModule.addNgModuleMeta(dep, this.getBaseVariables(name));
		}
		mainModule.finalize();

		// make sure DV file is added to project if needed:
		this.ensureSourceFiles();
	}
}
