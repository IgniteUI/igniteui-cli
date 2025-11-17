import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { BaseIgxProject } from "../_base";

export class BasePageTemplate extends BaseIgxProject implements ProjectTemplate {
	public id: string = "base";
	public name = "Base Project";
	public description = "Project structure with routing";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration = false;

	public get templatePaths(): string[] {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}
export default new BasePageTemplate();
