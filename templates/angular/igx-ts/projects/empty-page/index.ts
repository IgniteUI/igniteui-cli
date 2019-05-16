import * as path from "path";
import { ProjectTemplate } from "../../../../../lib/types/index";
import { Util } from "../../../../../lib/Util";
import { BaseIgxProject } from "../_base";

export class EmptyPageTemplate extends BaseIgxProject implements ProjectTemplate {
	public id: string = "empty-project";
	public name = "Empty Project";
	public description = "Project structure with routing and a home page";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration: boolean = false;

	public get templatePath(): string[] {
		return [...super.templatePath, path.join(__dirname, "files")];
	}
}
export default new EmptyPageTemplate();
