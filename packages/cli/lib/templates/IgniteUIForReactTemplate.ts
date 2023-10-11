import { AddTemplateArgs, ControlExtraConfiguration, defaultDelimiters, Template, Util } from "@igniteui/cli-core";
import * as fs from "fs-extra";
import { ReactTypeScriptFileUpdate } from "../../templates/react/ReactTypeScriptFileUpdate";
import * as path from "path";

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

	private configFile: string = "./src/routes.tsx";

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

	public registerInProject(projectPath: string, name: string, options?: AddTemplateArgs) {
		if (options && options.skipRoute) {
			return;
		}

		const routeModulePath: string = 'src/routes.tsx';
		const routingModule = new ReactTypeScriptFileUpdate(path.join(projectPath, routeModulePath));

		routingModule.addRoute(
			path.join(projectPath, `src/views/${this.folderName(name)}`),
			Util.lowerDashed(Util.nameFromPath(name)),
			Util.className(Util.nameFromPath(name)),
			options.routerChildren,
			undefined
		);
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
	protected getViewLink(name: string): string {
		const filePath = "./views/" + this.folderName(name);
		return filePath;
	}

	protected getToolbarLink(name: string): string {
		name = Util.nameFromPath(name);
		const toolbarLink = name.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
		return toolbarLink;
	}
}
