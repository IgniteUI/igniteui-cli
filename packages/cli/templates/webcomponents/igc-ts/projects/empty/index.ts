import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { BaseWithHomeIgcProject } from "../_base_with_home";

export class EmptyPageTemplate extends BaseWithHomeIgcProject implements ProjectTemplate {
	public id: string = "empty";
	public name = "Empty Project";
	public description = "Project structure with routing and a home page";
	public framework: string = "webcomponents";
	public projectType: string = "igc-ts";
	public dependencies: string[] = [];
	public hasExtraConfiguration: boolean = false;

	public get templatePaths(): string[] {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}
export default new EmptyPageTemplate();
