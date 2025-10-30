import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { BaseWithHomeProject } from "../_base_with_home";

export class SideNavProject extends BaseWithHomeProject implements ProjectTemplate {
	public id: string = "side-nav";
	public name = "Default side navigation";
	public description = "Project structure with side navigation drawer";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration = false;

	public get templatePaths() {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}

export default new SideNavProject();
