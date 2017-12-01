import * as fs from "fs-extra";
import * as path from "path";
import { Util } from "../../../../../lib/Util";

class EmptyJsBlocksProject implements ProjectTemplate {
	public id: string = "angular";
	public name = "empty";
	public description = "The is the default empty angular project structure for JsBlocks";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration: boolean = false;

	public installModules(): void {
		throw new Error("Method not implemented.");
	}
	public upgradeIgniteUIPackage(projectPath: string, packagePath: string): void {
		// noop
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [];
	}
	public setExtraConfiguration(extraConfigKeys: any[]) { }
	public generateFiles(outputPath: string, name: string, theme: string, ...options: any[]): Promise<boolean> {
		const config = {
			"$(dash-name)": Util.lowerDashed(name),
			"$(name)": name,
			"$(theme)": theme,
			"__path__": name
		};
		const pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "./files"), path.join(outputPath, name), config, pathsConfig);
	}
}
module.exports = new EmptyJsBlocksProject();
