import * as fs from "fs-extra";
import * as path from "path";
import { Util } from "../../../../../lib/Util";
import { ProjectConfig } from "./../../../../../lib/ProjectConfig";

class EmptyAngularProject implements ProjectTemplate {
	public id: string = "angular";
	public name = "empty";
	public description = "The is the default empty project structure for angular";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "ts";
	public hasExtraConfiguration: boolean = false;

	private _updateFile: string = "webpack.config.js";

	public installModules(): void {
		throw new Error("Method not implemented.");
	}
	public upgradeIgniteUIPackage(projectPath: string, packagePath: string): void {
		const config = ProjectConfig.getConfig();
		const files: string[] = config.project.sourceFiles;
		config.project.sourceFiles = files.map(x => {
			if (x === "infragistics.core-lite.js") {
				return "infragistics.core.js";
			} else if (x === "infragistics.lob-lite.js") {
				return "infragistics.lob.js";
			}
			return x;
		});
		ProjectConfig.setConfig(config);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [];
	}
	public setExtraConfiguration(extraConfigKeys: any[]) { }
	public generateFiles(outputPath: string, name: string, theme: string, ...options: any[]): Promise<boolean> {
		const config = {
			"__path__": name,
			"$(theme)": theme
		};
		const pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "./files"), path.join(outputPath, name), config, pathsConfig);
	}
}
module.exports = new EmptyAngularProject();
