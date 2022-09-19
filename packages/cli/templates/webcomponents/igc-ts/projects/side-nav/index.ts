import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { BaseWithHomeIgcProject } from "../_base_with_home";

export class SideNavProject extends BaseWithHomeIgcProject implements ProjectTemplate {
	public id: string = "side-nav";
	public name = "Default side navigation";
	public description = "Project structure with side navigation drawer";
	public framework: string = "webcomponents";
	public projectType: string = "igc-ts";
	public dependencies: string[];
	public hasExtraConfiguration: boolean = false;

	public get templatePaths() {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}
export default new SideNavProject();
