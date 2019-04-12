import * as fs from "fs-extra";
import * as path from "path";
import { AddTemplateArgs, ControlExtraConfiguration, Template } from "../types/index";
import { Util } from "../Util";

export class ReactTemplate extends Template {
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

	// non-standard template prop
	protected widget: string;

	private configFile: string = "./client/pages/routesTemplate.js";
	private replacePattern: RegExp = /\[[\s\S]*\](?=;)/;

	/**
	 * Base ReactTemplate constructor
	 * @param rootPath The template folder path. Pass in `__dirname`
	 */
	constructor(private rootPath: string) {
		super();
	}

	public generateFiles(projectPath: string, name: string, options: {}): Promise<boolean> {
		let config = {};
		if (options["extraConfig"]) {
			config = options["extraConfig"];
		}
		const pathsConfig = {};

		config["__path__"] = this.folderName(name); //folder name allowed spaces, any casing
		config["$(name)"] = Util.nameFromPath(name); // this name should not have restrictions
		config["$(ClassName)"] = Util.className(Util.nameFromPath(name)); //first letter capital, no spaces and no dashes,
		config["$(cliVersion)"] = Util.version();
		if (this.widget) {
			config["$(widget)"] = this.widget;
			config["$(Control)"] = Util.className(this.widget);
		}
		config["$(igniteImports)"] = this.getImports();
		if (this.description) {
			config["$(description)"] = this.description;
		}

		// copy/template files to project
		if (!Util.validateTemplate(path.join(this.rootPath, "files"), projectPath, config, pathsConfig)) {
			return Promise.resolve(false);
		}
		return Util.processTemplates(path.join(this.rootPath, "files"), projectPath, config, pathsConfig);
	}

	public registerInProject(projectPath: string, name: string, options?: AddTemplateArgs) {
		if (options && options.skipRoute) {
			return;
		}
		let configFile = fs.readFileSync(path.join(projectPath, this.configFile), "utf8");
		const viewsArr = JSON.parse(this.replacePattern.exec(configFile)[0]);
		viewsArr.push({
			folder: this.getViewLink(name),
			path: "/" + this.folderName(Util.nameFromPath(name)),
			text: this.getToolbarLink(name)
		});
		configFile = configFile.replace(this.replacePattern, JSON.stringify(viewsArr, null, 4));
		fs.writeFileSync(path.join(projectPath, this.configFile), configFile);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		throw new Error("Method not implemented.");
	}

	protected getImports(): string {
		const config = require("../packages/components");
		let builder = "";
		builder += "\r\n";
		builder += "// Ignite UI Required Combined JavaScript Files\r\n";
		builder += `import "ignite-ui/js/infragistics.core.js";\r\n`;
		builder += `import "ignite-ui/js/infragistics.lob.js";\r\n`;
		if (this.dependencies.filter(x => config.dv.indexOf(x) !== -1).length) {
			builder += `import "ignite-ui/js/infragistics.dv.js";\r\n`;
		}
		return builder;
	}

	protected folderName(pathName: string): string {
		//TODO: should remove the spaces
		const parts = path.parse(pathName);
		let folderName = pathName;
		if (parts.dir) {
			folderName = path.join(parts.dir, parts.name);
			folderName = folderName.replace(/\\/g, "/");
			// TODO: config-based "src/app"?
			const relative = path.join(process.cwd(), "client/components", folderName);
			// path.join will also resolve any '..' segments
			// so if relative result doesn't start with CWD it's out of project root
			if (!relative.startsWith(process.cwd())) {
				Util.error(`Path ${"client/components/" + folderName} is not valid!`, "red");
				process.exit(1);
			}
			//clean up potential leading spaces in folder names (`path/    name`):
			folderName = folderName.replace(/\/\s+/g, "/");
		}
		return Util.lowerDashed(folderName);
	}
	protected getViewLink(name: string): string {
		const filePath = this.folderName(name) + "/index.js";
		return filePath;
	}

	protected getToolbarLink(name: string): string {
		name = Util.nameFromPath(name);
		const toolbarLink = name.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
		return toolbarLink;
	}
}
