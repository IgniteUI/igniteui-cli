import {
	AddTemplateArgs,
	App,
	ControlExtraConfiguration,
	defaultDelimiters,
	FS_TOKEN,
	IFileSystem,
	Template,
	Util
} from "@igniteui/cli-core";
import * as path from "path";
import { ReactTypeScriptFileUpdate } from "../../templates/react/ReactTypeScriptFileUpdate";

export class IgniteUIForReactTemplate implements Template {
	public components: string[];
	public controlGroup: string;
	public listInComponentTemplates: boolean = true;
	public listInCustomTemplates: boolean = false;
	public id: string;
	public name: string;
	public description: string;
	public dependencies: string[] = [];
	public framework: string = "react";
	public projectType: string;
	public hasExtraConfiguration: boolean = false;
	public packages = [];
	public delimiters = defaultDelimiters;
	// non-standard template prop
	protected widget: string;

	/**
	 * Base ReactTemplate constructor
	 * @param rootPath The template folder path. Pass in `__dirname`
	 */
	constructor(private rootPath: string) { }

	public get templatePaths(): string[] {
		return [path.join(this.rootPath, "files")];
	}

	public generateConfig(name: string, options: {}): {[key: string]: any} {
		let config = {};
		if (options["extraConfig"]) {
			config = options["extraConfig"];
		}

		config["path"] = this.folderName(name); //folder name allowed spaces, any casing
		config["name"] = Util.nameFromPath(name); // this name should not have restrictions
		config["ClassName"] = Util.className(Util.nameFromPath(name)); //first letter capital, no spaces and no dashes,
		config["filePrefix"] = Util.lowerDashed(Util.nameFromPath(name));
		config["cliVersion"] = Util.version();
		if (this.widget) {
			config["widget"] = this.widget;
			config["Control"] = Util.className(this.widget);
		}
		if (this.description) {
			config["description"] = this.description;
		}

		return config;
	}

	public registerInProject(projectPath: string, name: string, options?: AddTemplateArgs, defaultPath = false) {
		if (!options.parentName) {
			return;
		}

		const routeModulePath: string = options.parentRoutingModulePath;
		const routingModule = new ReactTypeScriptFileUpdate(path.join(projectPath, routeModulePath));

		if (!(options && options.skipRoute) && App.container.get<IFileSystem>(FS_TOKEN)
			.fileExists(routeModulePath)) {
			let nameFromPath = Util.nameFromPath(name);
			let lowerDashed = Util.lowerDashed(nameFromPath);
			let filePath = path.posix.join(projectPath, options.modulePath, `${lowerDashed}.tsx`);

			if (defaultPath) {
				routingModule.addRoute("", options.className, nameFromPath, filePath, options.routerChildren, undefined);
			}

			routingModule.addRoute(
				lowerDashed,
				options.className,
				nameFromPath,
				filePath,
				options.routerChildren,
				undefined
			);

			if (options.hasChildren) {
				nameFromPath = Util.nameFromPath(`${options.modulePath}-routes.tsx`);
				lowerDashed = Util.lowerDashed(nameFromPath);
				filePath = path.posix.join(projectPath, options.modulePath, nameFromPath);

				routingModule.addRoute(
					lowerDashed,
					options.className,
					nameFromPath,
					filePath,
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

	protected folderName(pathName: string): string {
		//TODO: should remove the spaces
		const parts = path.parse(pathName);
		let folderName = pathName;
		if (parts.dir) {
			folderName = path.join(parts.dir, parts.name);
			folderName = folderName.replace(/\\/g, "/");
			// TODO: config-based "src/app"?
			const relative = path.join(process.cwd(), "src/views", folderName);
			// path.join will also resolve any '..' segments
			// so if relative result doesn't start with CWD it's out of project root
			if (!relative.startsWith(process.cwd())) {
				Util.error(`Path ${"src/views/" + folderName} is not valid!`, "red");
				process.exit(1);
			}
			//clean up potential leading spaces in folder names (`path/    name`):
			folderName = folderName.replace(/\/\s+/g, "/");
		}
		return Util.lowerDashed(folderName);
	}
}
