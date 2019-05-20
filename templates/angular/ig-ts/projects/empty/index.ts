import * as path from "path";
import { ControlExtraConfiguration } from "../../../../../lib/types/ControlExtraConfiguration";
import { ProjectTemplate } from "../../../../../lib/types/index";
import { defaultDelimiters, Util } from "../../../../../lib/Util";
import { ProjectConfig } from "./../../../../../lib/ProjectConfig";

class EmptyAngularProject implements ProjectTemplate {
	public id: string = "angular";
	public name = "empty";
	public description = "Ignite UI CLI Default empty project structure for Angular";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "ig-ts";
	public hasExtraConfiguration: boolean = false;
	public delimiters = defaultDelimiters;

	public get templatePaths(): string[] {
		return [path.join(__dirname, "files")];
	}

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
	public generateConfig(name: string, theme: string, ...options: any[]): {[key: string]: any} {
		return {
			"cliVersion": Util.version(),
			"dash-name": Util.lowerDashed(name),
			"description": this.description,
			"name": name,
			"path": name,
			"theme": theme
		};
	}
}
module.exports = new EmptyAngularProject();
