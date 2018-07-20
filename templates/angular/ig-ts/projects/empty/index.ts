import * as path from "path";
import { Util } from "../../../../../lib/Util";
import { ProjectConfig } from "./../../../../../lib/ProjectConfig";

class EmptyAngularProject implements ProjectTemplate {
	public id: string = "angular";
	public name = "empty";
	public description = "Ignite UI CLI project for Angular";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "ig-ts";
	public hasExtraConfiguration: boolean = false;

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
}
module.exports = new EmptyAngularProject();
