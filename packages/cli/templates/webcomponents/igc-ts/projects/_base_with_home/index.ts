import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { BaseIgcProject } from "../_base";

export class BaseWithHomeIgcProject extends BaseIgcProject implements ProjectTemplate {
	public id: string = "base with home";
	public name = "Base With Home";
	public description = "Empty project layout structure for Ignite UI for Web Components";

	public get templatePaths() {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}
