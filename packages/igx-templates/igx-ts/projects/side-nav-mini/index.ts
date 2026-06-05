import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { SideNavProject } from "../side-nav";

export class SideNavMiniProject extends SideNavProject implements ProjectTemplate {
	public id: string = "side-nav-mini";
	public name = "Side navigation + collapsible mini nav";
	public description = "Side navigation with a collapsible mini (icons-only) variant and responsive breakpoints";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration = false;

	public get templatePaths() {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}

export default new SideNavMiniProject();
