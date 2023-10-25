import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { BaseWithHomeIgrTsProject } from "../_base_with_home";

export class TopNavIgrTsProject extends BaseWithHomeIgrTsProject implements ProjectTemplate {
	public id: string = "top-nav";
	public name = "Default top navigation";
	public description = "Project structure with top navigation menu";
	public dependencies: string[] = [];
	public framework: string = "react";
	public projectType: string = "igr-ts";
	public hasExtraConfiguration: boolean = false;

	public get templatePaths(): string[] {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}
export default new TopNavIgrTsProject();
