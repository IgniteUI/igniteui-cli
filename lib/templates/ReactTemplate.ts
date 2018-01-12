import * as fs from "fs-extra";
import * as path from "path";
import { Util } from "../Util";

export abstract class ReactTemplate implements Template {
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

	// non-standard template prop
	protected widget: string;

	private configFile: string = "./client/pages/routesTemplate.js";
	private replacePattern: RegExp = /\[[\s\S]*\](?=;)/;

	/**
	 * Base ReactTemplate constructor
	 * @param rootPath The template folder path. Pass in `__dirname`
	 */
	constructor(private rootPath: string) {}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const config = {};
		const pathsConfig = {};

		config["__path__"] =  this.folderName(name); //folder name allowed spaces, any casing
		config["$(name)"] = name; // this name should not have restrictions
		config["$(ClassName)"] = this.className(name); //first letter capital, no spaces,
		if (this.widget) {
			config["$(widget)"] = this.widget;
			config["$(Control)"] = this.className(this.widget);
		}
		config["$(igniteImports)"] = this.getImports();
		if (this.description) {
			config["$(Description)"] = this.description;
		}

		// copy/template files to project
		if (!Util.validateTemplate(path.join(this.rootPath, "files"), projectPath, config, pathsConfig)) {
			return Promise.resolve(false);
		}
		return Util.processTemplates(path.join(this.rootPath, "files"), projectPath, config, pathsConfig);
	}

	public registerInProject(projectPath: string, name: string) {
		let configFile = fs.readFileSync(path.join(projectPath, this.configFile), "utf8");
		const viewsArr = JSON.parse(this.replacePattern.exec(configFile)[0]);
		viewsArr.push({path: "/" + this.folderName(name), folder: this.getViewLink(name), text: this.getToolbarLink(name)});
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

	protected folderName(name: string): string {
		//TODO: should remove the spaces
		return name.split(" ").join("-").toLowerCase();
	}
	protected getViewLink(name: string): string {
		const filePath = this.folderName(name) + "/index.js";
		return filePath;
	}

	protected getToolbarLink(name: string): string {
		const toolbarLink = name.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
		return toolbarLink;
	}

	protected className(name: string): string {
		const className = name.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1)).replace(/\s/g, "");
		return className;
	}
}
