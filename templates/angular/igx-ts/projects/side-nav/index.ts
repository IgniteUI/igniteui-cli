import * as path from "path";
import { Util } from "../../../../../lib/Util";
import { BaseIgxProject } from "../_base";

export class SideNavProject extends BaseIgxProject implements ProjectTemplate {
	public id: string = "side-nav";
	public name = "Default side navigation";
	public description = "Project structure with side navigation drawer";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration: boolean = false;

	public async generateFiles(outputPath: string, name: string, theme: string, ...options: any[]): Promise<boolean> {
		const config = {
			"$(CustomTheme)": "",
			"$(DefaultTheme)": "",
			"$(cliVersion)": Util.version(),
			"$(dash-name)": Util.lowerDashed(name),
			"$(name)": name,
			"$(theme)": theme,
			"__path__": name
		};
		const pathsConfig = {};

		if (!await super.generateFiles(outputPath, name, theme, ...options)) {
			return false;
		}
		return Util.processTemplates(path.join(__dirname, "./files"), path.join(outputPath, name), config, pathsConfig);
	}
}
export default new SideNavProject();
