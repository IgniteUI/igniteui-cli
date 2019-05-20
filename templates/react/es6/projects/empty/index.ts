import * as fs from "fs-extra";
import * as path from "path";
import { ControlExtraConfiguration, ProjectTemplate } from "../../../../../lib/types/index";
import { defaultDelimiters, Util } from "../../../../../lib/Util";

class EmptyProject implements ProjectTemplate {
	public _updateFile: string = "webpack.config.js";
	public id: string = "react";
	public name = "empty";
	public description = "Ignite UI CLI project for React";
	public framework: string = "react";
	public projectType: string = "jsx";
	public dependencies: string[];
	public hasExtraConfiguration: boolean = false;
	public delimiters = defaultDelimiters;

	public get templatePaths(): string[] {
		return [path.join(__dirname, "files")];
	}

	public installModules(): void {
		throw new Error("Method not implemented.");
	}
	public upgradeIgniteUIPackage(projectPath: string, packagePath: string): void {
		const filePath = path.join(projectPath, this._updateFile);
		let configFile = fs.readFileSync(filePath, "utf8");
		//comment out core + lob redirects
		configFile = configFile.replace(`"ignite-ui/js/infragistics.core.js$"`, `//$&`);
		configFile = configFile.replace(`"ignite-ui/js/infragistics.lob.js$"`, `//$&`);
		fs.writeFileSync(filePath, configFile);
	}
	public generateConfig(name: string, theme: string, ...options: any[]): {[key: string]: any} {

		//TODO update the config with [{key: "keyname", "value"}]
		return {
			"cliVersion": Util.version(),
			"dash-name": Util.lowerDashed(name),
			"description": this.description,
			"name": name,
			"path": name,
			"theme": theme
		};
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		throw new Error("Method not implemented.");
	}
}
module.exports = new EmptyProject();
