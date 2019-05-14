import * as path from "path";
import { ProjectTemplate } from "../../../../../lib/types/index";
import { Util } from "../../../../../lib/Util";
import { BaseIgrProject } from "../_base";

export class TopNavIgrProject extends BaseIgrProject implements ProjectTemplate {
	public id: string = "top-nav";
	public name = "Default top navigation";
	public description = "Project structure with top navigation menu";
	public dependencies: string[] = [];
	public framework: string = "react";
	public projectType: string = "igr-es6";
	public hasExtraConfiguration: boolean = false;

	public get templatePath(): string[] {
		return [...super.templatePath, path.join(__dirname, "files")];
	}
}
export default new TopNavIgrProject();
