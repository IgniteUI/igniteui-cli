import {
	AddTemplateArgs, App, ControlExtraConfiguration, defaultDelimiters, FS_TOKEN,
	IFileSystem, Template, TemplateDependency, Util
} from "@igniteui/cli-core";
import * as path from "path";
import { NPM_DOCK_MANAGER, resolveIgcPackage } from "../../templates/webcomponents/package-resolve";
import { TypeScriptFileUpdate } from "../../templates/webcomponents/TypeScriptFileUpdate";

export class IgniteUIForWebComponentsTemplate implements Template {
	public components: string[];
	public controlGroup: string;
	public listInComponentTemplates: boolean = true;
	public listInCustomTemplates: boolean = false;
	public id: string;
	public name: string;
	public description: string;
	public framework: string = "webcomponents";
	public projectType = "igc-ts";
	public hasExtraConfiguration: boolean = false;
	public packages = [];
	public dependencies: TemplateDependency[] = [];
	public delimiters = defaultDelimiters;

	public get templatePaths(): string[] {
		return [path.join(this.rootPath, "files")];
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

	public registerInProject(projectPath: string, fullName: string, options?: AddTemplateArgs) {
		App.initialize(); // remove after POC
		if (!options.parentName) {
			return;
		}
		const routeModulePath: string = options.parentRoutingModulePath;
		let routingModule = new TypeScriptFileUpdate(path.join(projectPath, routeModulePath));

		if (!(options && options.skipRoute) && App.container.get<IFileSystem>(FS_TOKEN)
			.fileExists(routeModulePath)) {

			routingModule.addRoute(
				this.fileName(fullName),
				Util.nameFromPath(fullName),
				options.routerChildren,
				undefined
			);

			if (options.hasChildren) {
				routingModule.addRoute(
					this.fileName(`${options.modulePath}-routing.ts`),
					Util.nameFromPath(`${options.modulePath}-routing.ts`),
					options.routerChildren,
					options.importAlias
				);
			}
		}
	}

	public getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		throw new Error("Method not implemented.");
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
		config["dockManagerPackage"] = resolveIgcPackage(NPM_DOCK_MANAGER);

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
