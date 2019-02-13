import * as path from "path";
import { Util } from "../../../../../lib/Util";
import { BaseIgrProject } from "../_base";

export class TopNavIgrProject extends BaseIgrProject implements ProjectTemplate {
	public id: string = "top-nav";
	public name = "Default top navigation";
	public description = "Project structure with top navigation menu";
	public dependencies: string[] = [];
	public framework: string = "react";
	public projectType: string = "igr-es6";
	public hasExtraConfiguration: boolean = false;

	public async generateFiles(outputPath: string, name: string, theme: string, ...options: any[]): Promise<boolean> {
		const config = {
			"$(cliVersion)": Util.version(),
			"$(dash-name)" : Util.lowerDashed(name),
			"$(name)": name,
			"$(theme)": theme,
			"__path__": name
		};
		config["$(description)"] = this.description;
		const pathsConfig = {};

		if (!await super.generateFiles(outputPath, name, theme, ...options)) {
			return false;
		}
		return Util.processTemplates(path.join(__dirname, "./files"), path.join(outputPath, name), config, pathsConfig);
	}
}
export default new TopNavIgrProject();
