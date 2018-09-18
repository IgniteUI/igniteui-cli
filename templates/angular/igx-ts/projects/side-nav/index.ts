import * as path from "path";
import { Util } from "../../../../../lib/Util";
import { BaseIgxProject } from "../base";

class SideNavProject extends BaseIgxProject implements ProjectTemplate {
	public id: string = "angular";
	public name = "empty";
	public description = "Default empty angular project structure for Ignite UI for Angular";
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
