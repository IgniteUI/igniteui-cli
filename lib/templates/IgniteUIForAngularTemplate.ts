import * as path from "path";
import { TypeScriptFileUpdate } from "@igniteui-cli/core";
import { AddTemplateArgs, TemplateDependency } from "@igniteui-cli/core";
import { Util } from "@igniteui-cli/core";
import { AngularTemplate } from "./AngularTemplate";

export class IgniteUIForAngularTemplate extends AngularTemplate {

	public dependencies: TemplateDependency[] = [];

	public delimiters = {
		content: {
			end: `%>`,
			start: `<%=`
		},
		path: {
			end: `__`,
			start: `__`
		}
	};

	constructor(rootPath: string) {
		super(rootPath);
	}

	//TODO: rename name to fullName for clarity + in all other places fileName to fullName
	public registerInProject(projectPath: string, name: string, options?: AddTemplateArgs) {
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

		if (!(options && options.skipRoute) && Util.fileExists("src/app/app-routing.module.ts")) {
			//1) import the component class name,
			//2) and populate the Routes array with the path and component
			//for example: { path: 'combo', component: ComboComponent }
			const routingModule = new TsUpdate(path.join(projectPath, "src/app/app-routing.module.ts"));
			routingModule.addRoute(
				path.join(projectPath, `src/app/${this.folderName(name)}/${this.fileName(name)}.component.ts`),
				this.fileName(name),		//path
				Util.nameFromPath(name)		//text
			);
		}

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
				const copy = Object.assign({}, dep);
				copy.from = Util.relativePath(mainModulePath, path.join(projectPath, copy.from), true, true);
				mainModule.addNgModuleMeta(copy,
					Util.applyDelimiters(this.getBaseVariables(name), this.delimiters.content));
			} else {
				mainModule.addNgModuleMeta(dep,
					Util.applyDelimiters(this.getBaseVariables(name), this.delimiters.content));
			}
		}
		mainModule.finalize();

		// make sure DV file is added to project if needed:
		this.ensureSourceFiles();
	}
}
