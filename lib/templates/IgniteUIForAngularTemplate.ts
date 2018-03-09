import * as fs from "fs-extra";
import * as path from "path";
import { ProjectConfig } from "../ProjectConfig";
import { Util } from "../Util";
// import { TypeScriptFileUpdate } from "./../project-utility/TypeScriptFileUpdate";
import { AngularTemplate } from "./AngularTemplate";

export class IgniteUIForAngularTemplate extends AngularTemplate {

	public dependencies: TemplateDependency[] = [];

	constructor(rootPath: string) {
		super(rootPath);
	}

	public registerInProject(projectPath: string, name: string) {
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

		// D.P. Don't use top-level import as that chains import of typescript
		// which slows down execution of the entire component noticeably
		const tsFileUpdate = require("./../project-utility/TypeScriptFileUpdate").TypeScriptFileUpdate;

		//1) import the component class name,
		//2) and populate the Routes array with the path and component
		//for example: { path: 'combo', component: ComboComponent }
		tsFileUpdate.addRoute(
			path.join(projectPath, "src/app/app-routing.module.ts"),
			path.join(projectPath, `src/app/${this.folderName(name)}/${this.fileName(name)}.component.ts`),
			this.folderName(name), //path
			name //text
		);

		//3) add an import of the component class from its file location.
		//4) populate the declarations portion of the @NgModule with the component class name.
		tsFileUpdate.addDeclaration(
			path.join(projectPath, "src/app/app.module.ts"),
			path.join(projectPath, `src/app/${this.folderName(name)}/${this.fileName(name)}.component.ts`)
		);

		for (const dep of this.dependencies) {
			if (dep.import && dep.from) {

				// import IgxModules:
				tsFileUpdate.addIgxImport(
					path.join(projectPath, "src/app/app.module.ts"),
					typeof dep.import === "string" ? dep.import.split(/\s*,\s*/) : dep.import,
					dep.from
				);
			}
		}

		// make sure DV file is added to project if needed:
		this.ensureSourceFiles();
	}
}
