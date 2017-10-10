import * as path from 'path';
import * as fs from "fs-extra";
import { Util } from "../../../../../lib/Util";


class EmptyProject implements ProjectTemplate {
	_updateFile: string = "webpack.config.js";
	id: string = "react";
    name = "empty";
    description = "The is the default empty project structure for jQuery";
    framework: string = "react";
    projectType: string = "jsx";
    dependencies: string[];
    hasExtraConfiguration: boolean = false;
	installModules(): void {
		throw new Error("Method not implemented.");
	}
	upgradeIgniteUIPackage(projectPath:string, packagePath: string): void {
		var filePath = path.join(projectPath, this._updateFile);
		var configFile = fs.readFileSync(filePath, "utf8");
		//comment out core + lob redirects
		configFile = configFile.replace(`"ignite-ui/js/infragistics.core.js$"`, `//"ignite-ui/js/infragistics.core.js$"`);
		configFile = configFile.replace(`"ignite-ui/js/infragistics.lob.js$"`, `//"ignite-ui/js/infragistics.lob.js$"`);
		fs.writeFileSync(filePath, configFile);
	}
	generateFiles(outputPath: string, name: string, theme: string, ...options: any[]): Promise<boolean> {

		//TODO update the config with [{key: "keyname", "value"}]
		var config = {
			"__path__": name,
			"$(theme)": theme
		}
		var pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "./files"), path.join(outputPath, name), config, pathsConfig);
	}
	getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}
	setExtraConfiguration(extraConfigKeys: {}) {
		throw new Error("Method not implemented.");
	}
}
module.exports = new EmptyProject();