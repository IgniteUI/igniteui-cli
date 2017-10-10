import * as path from "path";
import * as fs from "fs-extra";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { Util } from "../../../../../lib/Util";

class EmptyProject implements ProjectTemplate {
	id: string = "jquery";
	name: string = "jquery with Javascript";
	description: string = "The is the default empty project structure for jQuery";
	dependencies: string[];
	framework: string = "jquery";
	projectType: string = "js";
	hasExtraConfiguration: boolean = false;
	private _updateFile: string = "bs-config.js";
	private _updateFileRegex: RegExp = /\{[\s\S]*\}(?=;|$)/;
	
	upgradeIgniteUIPackage(projectPath:string, packagePath: string): void {
		var filePath = path.join(projectPath, this._updateFile);
		var configFile = fs.readFileSync(filePath, "utf8");
		var config = JSON.parse(this._updateFileRegex.exec(configFile)[0]);

		delete config.server.routes["/ignite-ui/js/infragistics.core.js"];
		delete config.server.routes["/ignite-ui/js/infragistics.lob.js"];
		config.server.routes["/ignite-ui"] = packagePath;

		configFile = configFile.replace(this._updateFileRegex, JSON.stringify(config, null, 4));
		fs.writeFileSync(filePath, configFile);
	}

	generateFiles(outputPath: string, name: string, theme: string, ...options: any[]): Promise<boolean> {
		var outDir = path.join(outputPath, name);
		var themePath = "";
		if (theme.indexOf(".less")!= -1 || theme.indexOf(".scss") != -1) {
			themePath = ".themes/" + theme.split(".")[0] + "/infragistics.theme.css";
		} else {
			themePath = "$(igniteuiSource)/css/themes/" + theme + "/infragistics.theme.css";
		}
		var variables = {
			"$(themePath)": themePath,
			"$(theme)": theme,
			"$(name)" : name,
			"$(igniteuiSource)": "./node_modules/ignite-ui"
		};

		//TODO

		var pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "./files"), outDir, variables, pathsConfig);
	}
	
	installModules(): void {
		throw new Error("Method not implemented.");
	}
	getExtraConfiguration(): ControlExtraConfiguration[] {
		return [];
	}
	setExtraConfiguration(extraConfigKeys: {}) {}
}
module.exports = new EmptyProject();