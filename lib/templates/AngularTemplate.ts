import * as fs from "fs-extra";
import * as path from "path";
import { TypeScriptFileUpdate } from "../project-utility/TypeScriptFileUpdate";
import { ProjectConfig } from "../ProjectConfig";
import { Util } from "../Util";

export class AngularTemplate implements Template {
	public components: string[];
	public controlGroup: string;
	public listInComponentTemplates: boolean = true;
	public listInCustomTemplates: boolean = false;
	public id: string;
	public name: string;
	public description: string;
	public dependencies: Array<string | object> = [];
	public framework: string = "angular";
	public projectType: string;
	public hasExtraConfiguration: boolean = false;
	protected widget: string;

	/**
	 * Creates a new AngularTemplate for a root path (pass in __dirname)
	 */
	constructor(private rootPath: string) {
	}
	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const config = {
			"$(ClassName)": Util.className(name),
			"__name__": this.fileName(name), // TODO: optionally pass as a different variable than name.
			"__path__": this.folderName(name)
		};
		if (this.widget) {
			config["$(widget)"] = this.widget;
		}
		if (this.name) {
			config["$(name)"] = this.name;
			config["$(filePrefix)"] = this.fileName(name);
			config["$(nameMerged)"] = this.name.replace(/ /g, ""); // this is needed for editors
			config["$(description)"] = this.description;
		}
		const pathsConfig = {};
		if (!Util.validateTemplate(path.join(this.rootPath, "files"), projectPath, config, pathsConfig)) {
			return Promise.resolve(false);
		}
		return Util.processTemplates(path.join(this.rootPath, "files"), projectPath, config, pathsConfig);
	}

	public registerInProject(projectPath: string, name: string) {
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
			path.join(projectPath, `src/app/components/${this.folderName(name)}/${this.fileName(name)}.component.ts`),
			this.folderName(name), //path
			name //text
		);

		//3) add an import of the component class from its file location.
		//4) populate the declarations portion of the @NgModule with the component class name.
		const mainModule = new TsUpdate(path.join(projectPath, "src/app/app.module.ts"));
		mainModule.addDeclaration(
			path.join(projectPath, `src/app/components/${this.folderName(name)}/${this.fileName(name)}.component.ts`)
		);
		mainModule.finalize();

		// make sure DV file is added to project if needed:
		this.ensureSourceFiles();
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [];
	}
	public setExtraConfiguration(extraConfigKeys: {}) { }

	protected ensureSourceFiles() {
		const components = require("../packages/components");
		const config = ProjectConfig.getConfig();
		const files: string[] = config.project.sourceFiles;
		const dvDependencies = this.dependencies.filter(x => components.dv.indexOf(x) !== -1);

		if (dvDependencies.length && files.indexOf("infragistics.dv.js") === -1) {
			files.push("infragistics.dv.js");
			ProjectConfig.setConfig(config);
		}

		if (this.dependencies.indexOf("igExcel") !== -1) {
			files.push("infragistics.excel-bundled.js");
			ProjectConfig.setConfig(config);
		}

		if (this.dependencies.indexOf("igGridExcelExporter") !== -1) {
			files.push("modules/infragistics.gridexcelexporter.js");
			ProjectConfig.setConfig(config);
		}
	}

	protected folderName(name: string): string {
		//TODO: should remove the spaces
		return Util.lowerDashed(name);
	}

	protected fileName(name: string): string {
		//TODO: should remove the spaces
		return Util.lowerDashed(name);
	}
}
