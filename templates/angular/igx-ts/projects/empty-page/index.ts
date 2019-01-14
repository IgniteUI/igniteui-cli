import { BaseIgxProject } from "../_base";
import * as path from "path";
import { Util } from "../../../../../lib/Util";

export class EmptyPageTemplate extends BaseIgxProject implements ProjectTemplate {
	public id: string = "empty-page";
	public name = "Empty Template";
	public description = "Project structure with routing and a home page";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration: boolean = false;

	public async generateFiles(outputPath: string, name: string, theme: string, ...options: any[]): Promise<boolean> {
		const config = {
			"$(cliVersion)": Util.version(),
			"$(CustomTheme)": "",
			"$(dash-name)": Util.lowerDashed(name),
			"$(DefaultTheme)": "",
			"$(name)": name,
			"$(projectTemplate)": this.id,
			"$(theme)": theme,
			"__path__": name
		};
		const pathsConfig = {};

		await super.generateFiles(outputPath, name, theme, ...options)
		return Util.processTemplates(path.join(__dirname, "./files"), path.join(outputPath, name), config, pathsConfig);
	}
}
export default new EmptyPageTemplate();