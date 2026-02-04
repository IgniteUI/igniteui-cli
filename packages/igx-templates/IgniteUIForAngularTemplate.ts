import {
	AddTemplateArgs, App, ControlExtraConfiguration, FS_TOKEN, IFileSystem, NPM_ANGULAR,
	NPM_DOCK_MANAGER, Template, TemplateDependency, Util, resolvePackage
} from "@igniteui/cli-core";
import { AngularTypeScriptFileUpdate } from "@igniteui/angular-templates";
import * as path from "path";

export class IgniteUIForAngularTemplate implements Template {
	public components: string[];
	public controlGroup: string;
	public listInComponentTemplates: boolean = true;
	public addAsNgModelDeclaration: boolean = true;
	public listInCustomTemplates: boolean = false;
	public id: string;
	public name: string;
	public description: string;
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration: boolean = false;
	public packages: string[] = [];

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

	public get templatePaths(): string[] {
		// Include common Angular files (like test.ts) before template-specific files
		const commonPath = path.join(__dirname, "common-files");
		return [commonPath, path.join(this.rootPath, "files")];
	}

	constructor(private rootPath: string) {
	}

	public generateConfig(name: string, options: {}): { [key: string]: any } {
		if (options["modulePath"] && !Util.fileExists(path.join(process.cwd(), `src\\app`, options["modulePath"]))) {
			Util.error(`Wrong module path provided: ${options["modulePath"]}. No components were added!`);
			return Promise.resolve(false);
		}

		return Object.assign({}, options["extraConfig"], this.getBaseVariables(name));
	}

	//TODO: rename name to fullName for clarity + in all other places fileName to fullName
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

		const mainModulePath = path.join(projectPath, `src/app/${modulePath}`);
		const folderName = this.folderName(name);
		const fileName = this.fileName(name);
		const componentFilePath = path.join(projectPath, `src/app/${folderName}/${fileName}.component.ts`);
		const className = `${Util.className(Util.nameFromPath(name))}Component`;
		// standalone components
		if (!this.fileExists(mainModulePath)) {
			const appRoutesPath = "src/app/app.routes.ts";
			if (!(options && options.skipRoute) && this.fileExists(appRoutesPath)) {
				const routesConfigPath = path.join(projectPath, appRoutesPath);
				const rountesConfig = new TsUpdate(routesConfigPath, true, { indentSize: 2, singleQuotes: true });
				rountesConfig.addRoute({
					modulePath: Util.relativePath(routesConfigPath, componentFilePath, true, true),
					path: this.fileName(name),
					data: { text: Util.nameFromPath(name) },
					identifierName: className
				});

				rountesConfig.finalize();
			}

			const componentFile = new TsUpdate(componentFilePath, true, { indentSize: 2, singleQuotes: true });
			for (const dep of this.dependencies) {
				if (dep.from && dep.from.startsWith(".")) {
					// relative file dependency
					const copy = Object.assign({}, dep);
					copy.from = Util.relativePath(
						componentFilePath,
						path.join(projectPath, copy.from!),
						true,
						true);
					componentFile.addStandaloneComponentMeta(dep,
						Util.applyDelimiters(this.getBaseVariables(name), this.delimiters.content));
					continue;
				}
				componentFile.addStandaloneComponentMeta(dep,
					Util.applyDelimiters(this.getBaseVariables(name), this.delimiters.content)
				);
			}

			componentFile.finalize();
			return;
		}

		// ngModule based components
		if (!(options && options.skipRoute) && this.fileExists("src/app/app-routing.module.ts")) {
			//1) import the component class name,
			//2) and populate the Routes array with the path and component
			//for example: { path: 'combo', component: ComboComponent }
			const routingModulePath = path.join(projectPath, "src/app/app-routing.module.ts");
			const routingModule = new TsUpdate(routingModulePath, false, { indentSize: 2, singleQuotes: true });
			routingModule.addRoute({
				modulePath: Util.relativePath(routingModulePath, componentFilePath, true, true),
				path: this.fileName(name),
				data: { text: Util.nameFromPath(name) },
				identifierName: className
			});

			routingModule.finalize();
		}

		//3) add an import of the component class from its file location.
		//4) populate the declarations portion of the @NgModule with the component class name.
		const mainModule = new TsUpdate(mainModulePath, false, { indentSize: 2, singleQuotes: true });
		mainModule.addNgModuleMeta({
				declare: this.addAsNgModelDeclaration ? [className] : [],
				from: Util.relativePath(mainModulePath, componentFilePath, true, true),
				export: modulePath !== "app.module.ts" ? [className] : []
			},
			Util.applyDelimiters(this.getBaseVariables(name), this.delimiters.content),
			true // multiline
		);

		// import IgxModules and other dependencies
		for (const dep of this.dependencies) {
			if (dep.from && dep.from.startsWith(".")) {
				// relative file dependency
				const copy = Object.assign({}, dep);
				copy.from = Util.relativePath(mainModulePath, path.join(projectPath, copy.from!), true, true);
				mainModule.addNgModuleMeta(copy,
					Util.applyDelimiters(this.getBaseVariables(name), this.delimiters.content),
					true // multiline
				);
			} else {
				mainModule.addNgModuleMeta(dep,
					Util.applyDelimiters(this.getBaseVariables(name), this.delimiters.content),
					true // multiline
				);
			}
		}

		mainModule.finalize();
	}

	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [];
	}
	public setExtraConfiguration(extraConfigKeys: {}) { }

	public fileExists(filePath: string): boolean {
		return App.container.get<IFileSystem>(FS_TOKEN).fileExists(filePath);
	}

	protected getBaseVariables(name: string): { [key: string]: string } {
		const config = {};
		config["name"] = Util.nameFromPath(name);
		config["ClassName"] = Util.className(Util.nameFromPath(name));
		config["path"] = this.folderName(name);
		config["filePrefix"] = this.fileName(name);
		config["description"] = this.description;
		config["cliVersion"] = Util.version();
		config["camelCaseName"] = Util.camelCase(name);
		config["igxPackage"] = resolvePackage(NPM_ANGULAR);
		config["dockManagerPackage"] = resolvePackage(NPM_DOCK_MANAGER);

		/** 'nameMerged' is never used igx templates, removed */
		return config;
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
