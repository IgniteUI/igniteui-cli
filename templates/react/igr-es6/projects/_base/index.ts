import * as path from "path";
import { Util } from "../../../../../lib/Util";

export class BaseIgrProject implements ProjectTemplate {
	public id: string = "base";
	public name = "base";
	public description = "Ignite UI CLI project for React";
	public framework: string = "react";
	public projectType: string = "jsx";
	public dependencies: string[];
	public hasExtraConfiguration: boolean = false;

	public async generateFiles(outputPath: string, name: string, theme: string, ...options: any[]): Promise<boolean> {
		//TODO update the config with [{key: "keyname", "value"}]
		const config = {
			"$(cliVersion)": Util.version(),
			"$(dash-name)" : Util.lowerDashed(name),
			"$(name)": name,
			"$(theme)": theme,
			"__path__": name
		};
		config["$(description)"] = this.description;
		const pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "./files"), path.join(outputPath, name), config, pathsConfig);
	}

	public installModules(): void {
		throw new Error("Method not implemented.");
	}
	public upgradeIgniteUIPackage(projectPath: string, packagePath: string): void {
		throw new Error("Method not implemented.");
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		throw new Error("Method not implemented.");
	}
}
