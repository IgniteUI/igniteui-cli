import {
	AddTemplateArgs, ControlExtraConfiguration, defaultDelimiters,
	ProjectConfig, Template, TypeScriptFileUpdate, Util
} from "@igniteui/cli-core";
import * as path from "path";

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
	public packages = [];
	public delimiters = defaultDelimiters;

	protected widget: string;

	/**
	 * Creates a new AngularTemplate for a root path (pass in __dirname)
	 */
	constructor(private rootPath: string) { }

	public get templatePaths(): string[] {
		return [path.join(this.rootPath, "files")];
	}

	public generateConfig(name: string, options: {}): { [key: string]: any } {
		const config = {};
		if (options["modulePath"] && !Util.fileExists(path.join(process.cwd(), `src\\app`, options["modulePath"]))) {
			Util.error(`Wrong module path provided: ${options["modulePath"]}. No components were added!`);
			return Promise.resolve(false);
		}

		const terms = [];
		for (const key of Object.keys(options)) {
			terms.push(options[key]);
		}
		Object.assign(config, ...terms, this.getBaseVariables(name));

		return config;
	}

	public registerInProject(projectPath: string, name: string, options?: AddTemplateArgs) {
		let modulePath = "app.module.ts";
		if (options && options.modulePath) {
			modulePath = options.modulePath;
		}
		// D.P. Don't use the top-level import as that chains import of typescript
		// which slows down execution of the entire component noticeably (template loading)
		// https://www.typescriptlang.org/docs/handbook/modules.html#dynamic-module-loading-in-nodejs
		// tslint:disable-next-line:variable-name
		const TsUpdate: typeof TypeScriptFileUpdate =
			// tslint:disable-next-line:no-submodule-imports
			require("@igniteui/cli-core/typescript").TypeScriptFileUpdate;

		if (!(options && options.skipRoute)) {
			//1) import the component class name,
			//2) and populate the Routes array with the path and component
			//for example: { path: 'combo', component: ComboComponent }
			const routingModule = new TsUpdate(path.join(projectPath, "src/app/app-routing.module.ts"));
			routingModule.addRoute(
				path.join(projectPath, `src/app/components/${this.folderName(name)}/${this.fileName(name)}.component.ts`),
				this.folderName(name), //path
				Util.nameFromPath(name) //text
			);
		}

		//3) add an import of the component class from its file location.
		//4) populate the declarations portion of the @NgModule with the component class name.
		const mainModule = new TsUpdate(path.join(projectPath, `src/app/${modulePath}`));
		mainModule.addDeclaration(
			path.join(projectPath, `src/app/components/${this.folderName(name)}/${this.fileName(name)}.component.ts`),
			modulePath !== "app.module.ts"
		);
		mainModule.finalize();

		// make sure DV file is added to project if needed:
		this.ensureSourceFiles();
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [];
	}
	public setExtraConfiguration(extraConfigKeys: {}) { }

	protected getBaseVariables(name: string) {
		const config = {};
		config["name"] = Util.nameFromPath(name);
		config["ClassName"] = Util.className(Util.nameFromPath(name));
		config["path"] = this.folderName(name);
		config["filePrefix"] = this.fileName(name);
		config["description"] = this.description;
		config["cliVersion"] = Util.version();
		config["camelCaseName"] = Util.camelCase(name);

		if (this.widget) {
			config["widget"] = this.widget;
		}
		if (this.name) {
			config["nameMerged"] = this.name.replace(/ /g, "");
		}
		return config;
	}

	protected ensureSourceFiles() {
		const components = require("../packages/components");
		const config = ProjectConfig.getConfig();
		const files: string[] = config.project.sourceFiles;
		const dvDependencies = this.dependencies.filter(x => components.dv.indexOf(x) !== -1);

		if (dvDependencies.length && files.indexOf("infragistics.dv.js") === -1) {
			files.push("infragistics.dv.js");
			ProjectConfig.setConfig(config);
		}

		if (this.dependencies.indexOf("igExcel") !== -1 && files.indexOf("infragistics.excel-bundled.js") === -1) {
			files.push("infragistics.excel-bundled.js");
			ProjectConfig.setConfig(config);
		}

		if (this.dependencies.indexOf("igGridExcelExporter") !== -1
			&& files.indexOf("modules/infragistics.gridexcelexporter.js") === -1) {
			files.push("modules/infragistics.gridexcelexporter.js");
			ProjectConfig.setConfig(config);
		}
	}

	protected folderName(pathName: string): string {
		//TODO: should remove the spaces
		const parts = path.parse(pathName);
		let folderName = pathName;
		if (parts.dir) {
			folderName = path.join(parts.dir, parts.name);
			folderName = folderName.replace(/\\/g, "/");
			// TODO: config-based "src/app"?
			const relative = path.join(process.cwd(), "src/app", folderName);
			// path.join will also resolve any '..' segments
			// so if relative result doesn't start with CWD it's out of project root
			if (!relative.startsWith(process.cwd())) {
				Util.error(`Path ${"src/app/" + folderName} is not valid!`, "red");
				process.exit(1);
			}
			//clean up potential leading spaces in folder names (`path/    name`):
			folderName = folderName.replace(/\/\s+/g, "/");
		}
		return Util.lowerDashed(folderName);
	}

	protected fileName(pathName: string): string {
		const name = Util.nameFromPath(pathName);
		return Util.lowerDashed(name);
	}
}
