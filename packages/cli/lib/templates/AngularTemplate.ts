import {
	AddTemplateArgs, App, Config, ControlExtraConfiguration, defaultDelimiters,
	FS_TOKEN, FsFileSystem, IFileSystem, ProjectConfig, Template, TypeScriptUtils, Util
} from "@igniteui/cli-core";
import { AngularTypeScriptFileUpdate } from "@igniteui/angular-templates";

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
	protected fileSystem = new FsFileSystem();

	/**
	 * Creates a new AngularTemplate for a root path (pass in __dirname)
	 */
	constructor(private rootPath: string) { }

	public get templatePaths(): string[] {
		// Include common Angular files (like test.ts) before template-specific files
		const commonPath = path.join(__dirname, "../templates/angular/common-files");
		return [commonPath, path.join(this.rootPath, "files")];
	}

	public generateConfig(name: string, options: {}): { [key: string]: any } {
		if (options["modulePath"] && !Util.fileExists(path.join(process.cwd(), `src\\app`, options["modulePath"]))) {
			Util.error(`Wrong module path provided: ${options["modulePath"]}. No components were added!`);
			return Promise.resolve(false);
		}

		const config = Object.assign({}, options["extraConfig"], this.getBaseVariables(name));

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
		const TsUpdate: typeof AngularTypeScriptFileUpdate =
			// tslint:disable-next-line:no-submodule-imports
			require("@igniteui/angular-templates").AngularTypeScriptFileUpdate;

		const componentPath = path.join(projectPath, `src/app/components/${this.folderName(name)}/${this.fileName(name)}.component.ts`);
		const className = `${Util.className(Util.nameFromPath(name))}Component`;
		if (!(options && options.skipRoute)) {
			//1) import the component class name,
			//2) and populate the Routes array with the path and component
			//for example: { path: "combo", component: ComboComponent }
			const routingModulePath = path.join(projectPath, "src/app/app-routing.module.ts");
			const routingModule = new TsUpdate(routingModulePath, false, { singleQuotes: false });

			routingModule.addRoute({
				path: this.folderName(name),
				identifierName: className,
				modulePath: Util.relativePath(routingModulePath, componentPath, true, true),
				data: { text: Util.nameFromPath(name) }
			});

			routingModule.finalize();
		}

		//3) add an import of the component class from its file location.
		//4) populate the declarations portion of the @NgModule with the component class name.
		const mainModulePath = path.join(projectPath, `src/app/${modulePath}`);
		const relativePath = Util.relativePath(mainModulePath, componentPath, true, true);
		const mainModule = new TsUpdate(mainModulePath, false, { singleQuotes: false });
		mainModule.addNgModuleMeta({
			declare: [className],
			from: relativePath,
			export: modulePath !== "app.module.ts" ? [className] : []
		});
		mainModule.finalize();

		this.ensureSourceFiles(projectPath);
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

	protected ensureSourceFiles(projectPath: string) {
		// tslint:disable-next-line:no-submodule-imports
		const components = require("@igniteui/cli-core/packages/components");
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

		// ensure ig-ts resource files registration
		if (this.projectType === "ig-ts") { this.registerSourceFiles(config, projectPath); }
	}

	/**
	 * Register igniteui-angular-wrappers(ig-ts) resources under the project"s angular.json scripts and styles collections,
	 * so these are picked by Angular"s internal webpack to build and serve
	 */
	protected registerSourceFiles(config: Config, projectPath: string) {
		const fs: IFileSystem = App.container.get(FS_TOKEN);
		const sourceFiles: string[] = config.project.sourceFiles;
		const igniteuiSource: string = config.project.igniteuiSource;
		const themeCSS = "css/themes/infragistics/infragistics.theme.css";
		const infragisticsCSS = "css/structure/infragistics.css";
		let workspaceConfigObj;
		let updateFile = false;

		const workspacePath = path.join(projectPath, "angular.json");
		if (this.fileSystem.fileExists(workspacePath)) {
			workspaceConfigObj = JSON.parse(this.fileSystem.readFile(workspacePath));
			const scripts =
				workspaceConfigObj.projects[Object.keys(workspaceConfigObj.projects)[0]].architect.build.options.scripts;
			let styles =
				workspaceConfigObj.projects[Object.keys(workspaceConfigObj.projects)[0]].architect.build.options.styles;

			if (!styles.find(x => x.input?.includes(themeCSS)) || !styles.find(x => x.input?.includes(infragisticsCSS))) {
				styles = igniteuiSource === "@infragistics/ignite-ui-full/en/" ?
					styles.push(
						{ input: `${"@infragistics/ignite-ui-full/en/" + themeCSS}` },
						{ input: `${"@infragistics/ignite-ui-full/en/" + infragisticsCSS}` }) :
					styles.push({ input: `${"ignite-ui/" + themeCSS}` }, { input: `${"ignite-ui/" + infragisticsCSS}` });
				updateFile = true;
			}

			for (const fileName of sourceFiles) {
				if (!scripts.find(x => x.bundleName === fileName)) {
					scripts.push({
						bundleName: fileName,
						input: `${igniteuiSource + "/js/" + fileName}`
					});
					updateFile = true;
				}
			}
			if (updateFile) { fs.writeFile(workspacePath, Util.formatAngularJsonOptions(workspaceConfigObj)); }
		} else {
			Util.log(`No angular.json file found! May have to manually add igniteui-angular-wrappers styles and scripts
							(infragistics.core.js, infragistics.lob.js, etc.) to the corresponding angular.json styles and scripts collections`);
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
			// path.join will also resolve any ".." segments
			// so if relative result doesn't start with CWD it's out of project root
			if (!relative.startsWith(process.cwd())) {
				Util.error(`Path ${"src/app/" + folderName} is not valid!`, "red");
				process.exit(1);
			}
			//clean up potential leading spaces in folder names (`path/	name`):
			folderName = folderName.replace(/\/\s+/g, "/");
		}
		return Util.lowerDashed(folderName);
	}

	protected fileName(pathName: string): string {
		const name = Util.nameFromPath(pathName);
		return Util.lowerDashed(name);
	}
}
