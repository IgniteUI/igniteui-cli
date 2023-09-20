import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { BaseWithHomeIgrTsProject } from "../_base_with_home";

export class EmptyIgrTsProject extends BaseWithHomeIgrTsProject implements ProjectTemplate {
	public id: string = "empty";
	public name = "Empty project";
	public description = "Empty project structure with home page";
	public dependencies: string[] = [];
	public framework: string = "react";
	public projectType: string = "igr-ts-es6";
	public hasExtraConfiguration: boolean = false;

	public get templatePaths(): string[] {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}
export default new EmptyIgrTsProject();
