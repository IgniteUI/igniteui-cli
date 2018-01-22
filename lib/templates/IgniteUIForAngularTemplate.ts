import * as fs from "fs-extra";
import * as path from "path";
import { ProjectConfig } from "../ProjectConfig";
import { Util } from "../Util";
import { AngularTemplate } from "./AngularTemplate";

export class IgniteUIForAngularTemplate extends AngularTemplate {

	constructor(rootPath: string) {
		super(rootPath);
	}

	public registerInProject(projectPath: string, name: string) {
		// D.P. Don't use top-level import as that chains import of typescript
		// which slows down execution of the entire component noticeably
		const TypeScriptFileUpdate = require("./../project-utility/TypeScriptFileUpdate").TypeScriptFileUpdate;

		//1) import the component class name,
		//2) and populate the Routes array with the path and component
		//for example: { path: 'combo', component: ComboComponent }
		TypeScriptFileUpdate.addRoute(
			path.join(projectPath, "src/app/app-routing.module.ts"),
			path.join(projectPath, `src/app/${this.folderName(name)}/${this.fileName(name)}.component.ts`),
			this.folderName(name), //path
			name //text
		);

		//3) add an import of the component class from its file location.
		//4) populate the declarations portion of the @NgModule with the component class name.
		TypeScriptFileUpdate.addDeclaration(
			path.join(projectPath, "src/app/app.module.ts"),
			path.join(projectPath, `src/app/${this.folderName(name)}/${this.fileName(name)}.component.ts`)
		);

		// import IgxModules:
		TypeScriptFileUpdate.addIgxImport(
			path.join(projectPath, "src/app/app.module.ts"),
			this.dependencies,
			"igniteui-angular/main"
		);

		// make sure DV file is added to project if needed:
		this.ensureSourceFiles();
	}
}
