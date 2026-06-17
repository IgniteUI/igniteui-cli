import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { SideNavProject } from "../side-nav";

export class SideNavMiniProject extends SideNavProject implements ProjectTemplate {
	public id: string = "side-nav-mini";
	public name = "Side navigation + collapsible mini nav";
	public description = "Side navigation with a collapsible mini (icons-only) variant and responsive breakpoints";
	public framework: string = "webcomponents";
	public projectType: string = "igc-ts";
	public dependencies: string[] = [];
	public hasExtraConfiguration: boolean = false;

	public get templatePaths() {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}
export default new SideNavMiniProject();
