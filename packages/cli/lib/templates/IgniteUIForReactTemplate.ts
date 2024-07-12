import {
	AddTemplateArgs,
	App,
	ControlExtraConfiguration,
	defaultDelimiters,
	FS_TOKEN,
	IFileSystem,
	REACT_APP_ROUTING_NAME,
	RouteLike,
	ROUTES_VARIABLE_NAME,
	Template,
	Util
} from "@igniteui/cli-core";
import * as fs from "fs-extra";
import * as path from "path";
import { ReactTypeScriptFileUpdate } from "../../templates/react/ReactTypeScriptFileUpdate";
import { JsxEmit } from "typescript";

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

		if (this.projectType === "igr-es6") {
			this.registerJSONRoute(projectPath, name, options.parentRoutingModulePath);
			return;
		}

		const routeModulePath: string = options.parentRoutingModulePath;

		if (!(options && options.skipRoute)
			&& App.container.get<IFileSystem>(FS_TOKEN).fileExists(routeModulePath)) {
			const routingModule = new ReactTypeScriptFileUpdate(
				path.join(projectPath, routeModulePath),
				{ convertTabsToSpaces: false, indentSize: 2, singleQuotes: true },
				{ jsx: JsxEmit.Preserve }
			);

			const modulePath = `./${Util.lowerDashed(name)}/${Util.lowerDashed(name)}-routes`;
			if (defaultPath) {
				routingModule.addRoute({
						index: true,
						redirectTo: options.path,
					}
				);
			}

			routingModule.addRoute({
					path: this.fileName(name),
					element: Util.className(name),
					text: Util.nameFromPath(name)
				},
				false // multiline
			);

			if (options.hasChildren) {
				const child: RouteLike = {
					identifierName: ROUTES_VARIABLE_NAME,
					aliasName: options.routerChildren,
					modulePath
				};
				routingModule.addChildRoute(this.fileName(name), child, true);
			}

			routingModule.finalize();
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
			//clean up potential leading spaces in folder names (`path/ name`):
			folderName = folderName.replace(/\/\s+/g, "/");
		}
		return Util.lowerDashed(folderName);
	}

	protected fileName(pathName: string): string {
		const name = Util.nameFromPath(pathName);
		return Util.lowerDashed(name);
	}

	protected registerJSONRoute(projectPath: string, name: string, routingModulePath: string) {
		const configFile = fs.readFileSync(path.join(projectPath, routingModulePath), "utf8");
		const viewsArr = JSON.parse(configFile);
		viewsArr.push({
			componentPath: this.getViewLink(name),
			path: "/" + this.folderName(Util.nameFromPath(name)),
			text: this.getToolbarLink(name)
		});

		fs.writeFileSync(path.join(projectPath, routingModulePath), JSON.stringify(viewsArr, null, 4));
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
