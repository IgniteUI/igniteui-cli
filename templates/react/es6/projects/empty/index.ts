import * as fs from "fs-extra";
import * as path from "path";
import { ControlExtraConfiguration, ProjectTemplate } from "../../../../../lib/types/index";
import { Util } from "../../../../../lib/Util";

class EmptyProject implements ProjectTemplate {
	public _updateFile: string = "webpack.config.js";
	public id: string = "react";
	public name = "empty";
	public description = "Ignite UI CLI project for React";
	public framework: string = "react";
	public projectType: string = "jsx";
	public dependencies: string[];
	public hasExtraConfiguration: boolean = false;
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
	public async generateFiles(outputPath: string, name: string, theme: string, ...options: any[]): Promise<boolean> {

		//TODO update the config with [{key: "keyname", "value"}]
		const config = {
			"$(cliVersion)": Util.version(),
			"$(dash-name)": Util.lowerDashed(name),
			"$(name)": name,
			"$(theme)": theme,
			"__path__": name
		};
		config["$(description)"] = this.description;
		const pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "./files"), path.join(outputPath, name), config, pathsConfig);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		throw new Error("Method not implemented.");
	}
}
module.exports = new EmptyProject();
