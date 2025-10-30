import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { BaseWithHomeProject } from "../_base_with_home";

export class EmptyPageTemplate extends BaseWithHomeProject implements ProjectTemplate {
	public id: string = "empty";
	public name = "Empty Project";
	public description = "Project structure with routing and a home page";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration = false;

	public get templatePaths(): string[] {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}
export default new EmptyPageTemplate();
