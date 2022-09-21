import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { BaseIgcProject } from "../_base";

export class BasePageTemplate extends BaseIgcProject implements ProjectTemplate {
	public id: string = "base";
	public name = "Base Project";
	public description = "Project structure with routing";
	public framework: string = "webcomponents";
	public projectType: string = "igc-ts";
	public dependencies: string[];
	public hasExtraConfiguration: boolean = false;

	public get templatePaths(): string[] {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}
export default new BasePageTemplate();
