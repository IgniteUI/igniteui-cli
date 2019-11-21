import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { BaseIgxProject } from "../_base";

export class EmptyPageTemplate extends BaseIgxProject implements ProjectTemplate {
	public id: string = "empty-page";
	public name = "Empty Project";
	public description = "Project structure with routing and a home page";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration: boolean = false;

	public get templatePaths(): string[] {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}
export default new EmptyPageTemplate();
