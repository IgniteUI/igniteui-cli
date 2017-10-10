import * as fs from "fs-extra";
import * as path from "path";
import { Util } from "../Util";

export abstract class AngularTemplate implements Template {
	public components: string[];
	public controlGroup: string;
	public listInComponentTemplates: boolean = true;
	public listInCustomTemplates: boolean = false;
	public id: string;
	public name: string;
	public description: string;
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string;
	public hasExtraConfiguration: boolean = false;

	/**
	 * Creates a new AngularTemplate for a root path (pass in __dirname)
	 */
	constructor(private rootPath: string) {
	}
	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const config = {
			__name__: this.fileName(name), // TODO: optionally pass as a different variable than name.
			__path__: this.folderName(name)
		};
		const pathsConfig = {};
		return Util.processTemplates(path.join(this.rootPath, "files"), projectPath, config, pathsConfig);
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
			path.join(projectPath, `src/app/components/${this.folderName(name)}/${this.fileName(name)}.component.ts`),
			this.folderName(name), //path
			name //text
		);

		//3) add an import of the component class from its file location.
		//4) populate the declarations portion of the @NgModule with the component class name.
		TypeScriptFileUpdate.addDeclaration(
			path.join(projectPath, "src/app/app.module.ts"),
			path.join(projectPath, `src/app/components/${this.folderName(name)}/${this.fileName(name)}.component.ts`)
		);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [];
	}
	public setExtraConfiguration(extraConfigKeys: {}) { }

	protected folderName(name: string): string {
		//TODO: should remove the spaces
		return name.split(" ").join("-").toLowerCase();
	}

	protected fileName(name: string): string {
		//TODO: should remove the spaces
		return name.split(" ").join("-").toLowerCase();
	}
}
