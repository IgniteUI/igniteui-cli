import * as path from "path";
import { Util } from "../../../../../lib/Util";
import { SideNavProject } from "../side-nav";

class AuthSideProject extends SideNavProject implements ProjectTemplate {
	public id: string = "side-nav-auth";
	public name = "Side navigation + login";
	public description = "Side navigation extended with user authentication module";
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
			"$(theme)": theme,
			"__path__": name
		};
		const pathsConfig = {};
		await super.generateFiles(outputPath, name, theme, ...options);
		// if (!await super.generateFiles(outputPath, name, theme, ...options)) {
		// 	// TODO ?
		// 	return false;
		// }
		return Util.processTemplates(path.join(__dirname, "./files"), path.join(outputPath, name), config, pathsConfig);
	}
}
export default new AuthSideProject();
