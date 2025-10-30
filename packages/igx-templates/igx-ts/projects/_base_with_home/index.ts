import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { BaseIgxProject } from "../_base";

export class BaseWithHomeProject extends BaseIgxProject implements ProjectTemplate {
	public id: string = "base-with-home";
	public name = "Base with home";
	public description = "Empty project layout structure for Ignite UI for Angular with home page";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration = false;

	public get templatePaths() {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}

export default new BaseWithHomeProject();
