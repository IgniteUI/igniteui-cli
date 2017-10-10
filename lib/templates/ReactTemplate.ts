import * as fs from "fs-extra";
import * as path from "path";
import { Util } from "../Util";

export abstract class ReactTemplate implements Template {
	components: string[];
	controlGroup: string;
	listInComponentTemplates: boolean = true;
	listInCustomTemplates: boolean = false;
	id: string;
	name: string;
	description: string;
	dependencies: string[] = [];
	framework: string = "react";
	projectType: string;
	hasExtraConfiguration: boolean = false;

	// non-standard template prop
	protected widget: string;

	private configFile: string = "./client/pages/routesTemplate.js";
	private replacePattern: RegExp = /\[[\s\S]*\](?=;)/;

	/**
	 * Base ReactTemplate constructor
	 * @param rootPath The template folder path. Pass in `__dirname`
	 */
	constructor(private rootPath: string) {}

	generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		var config = {}, pathsConfig = {};

		config["__path__"] =  this.folderName(name); //folder name allowed spaces, any casing
		config["$(name)"] = name; // This name should not have restrictions
		config["$(ClassName)"] = this.className(name);//first letter capital, no spaces,
		if (this.widget) {
			config["$(widget)"] = this.widget;
			config["$(Control)"] = this.className(this.widget);
		}
		config["$(igniteImports)"] = this.getImports();
		if (this.description) {
			config["$(Description)"] = this.description;
		}

		// copy/template files to project
		return Util.processTemplates(path.join(this.rootPath, "files"), projectPath, config, pathsConfig);
	}

	protected folderName(name: string) : string {
		//TODO: should remove the spaces
		return name.split(" ").join("-").toLowerCase();
	}
	protected getViewLink(name: string) : string {
		var path = this.folderName(name) + "/index.js";
		return path;
	}

	protected getToolbarLink(name: string) : string {
		var toolbarLink = name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		return toolbarLink;
	}

	protected className(name: string) : string {
		var className = name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1);}).replace(/\s/g, "");
		return className;
	}

	registerInProject(projectPath: string, name: string) {
		var configFile = fs.readFileSync(path.join(projectPath, this.configFile), "utf8");
		var viewsArr = JSON.parse(this.replacePattern.exec(configFile)[0]);
		viewsArr.push({path: "/" + this.folderName(name), folder: this.getViewLink(name), text: this.getToolbarLink(name)});
		configFile = configFile.replace(this.replacePattern, JSON.stringify(viewsArr, null, 4));
		fs.writeFileSync(path.join(projectPath, this.configFile), configFile);
	}
	getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}
	setExtraConfiguration(extraConfigKeys: {}) {
		throw new Error("Method not implemented.");
	}

	getImports(): string {
		var config = require("../packages/components.json");
		var builder = "";
		builder += "\r\n"
		builder += "// Ignite UI Required Combined JavaScript Files\r\n";
		builder += `import "ignite-ui/js/infragistics.core.js";\r\n`;
		builder += `import "ignite-ui/js/infragistics.lob.js";\r\n`;
		if (this.dependencies.filter(x => config.dv.indexOf(x) != -1).length) {
			builder += `import "ignite-ui/js/infragistics.dv.js";\r\n`;
		}
		return builder;
	}
}