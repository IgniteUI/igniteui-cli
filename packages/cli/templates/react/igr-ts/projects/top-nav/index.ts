import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { BaseWithHomeIgrTsProject } from "../_base_with_home";

export class SideNavIgrTsProject extends BaseWithHomeIgrTsProject implements ProjectTemplate {
	public id: string = "side-nav";
	public name = "Default side navigation";
	public description = "Project structure with side navigation drawer";
	public dependencies: string[] = [];
	public framework: string = "react";
	public projectType: string = "igr-ts";
	public hasExtraConfiguration: boolean = false;
	public isHidden: boolean = false;

	public get templatePaths(): string[] {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}
export default new SideNavIgrTsProject();
