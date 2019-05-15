import * as path from "path";
import { ProjectTemplate } from "../../../../../lib/types/index";
import { Util } from "../../../../../lib/Util";
import { SideNavProject } from "../side-nav";

export class AuthSideProject extends SideNavProject implements ProjectTemplate {
	public id: string = "side-nav-auth";
	public name = "Side navigation + login";
	public description = "Side navigation extended with user authentication module";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration: boolean = false;

	public get templatePath() {
		return [...super.templatePath, path.join(__dirname, "files")];
	}
}
export default new AuthSideProject();
