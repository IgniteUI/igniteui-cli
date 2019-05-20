import * as path from "path";
import { ProjectTemplate } from "../../../../../lib/types/index";
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

	public get templatePaths() {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}

export default new SideNavProject();
