import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { BaseIgrTsProject } from "../_base";

export class BaseWithHomeIgrTsProject extends BaseIgrTsProject implements ProjectTemplate {
	public id: string = "base-with-home";
	public name = "Base with home";
	public description = "React project structure with home view";
	public dependencies: string[] = [];
	public framework: string = "react";
	public projectType: string = "igr-ts";
	public hasExtraConfiguration: boolean = false;

	public get templatePaths(): string[] {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}
export default new BaseWithHomeIgrTsProject();
