import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { BaseWithHomeIgrTsProject } from "../_base_with_home";

export class SideNavMiniIgrTsProject extends BaseWithHomeIgrTsProject implements ProjectTemplate {
	public id: string = "side-nav-mini";
	public name = "Side navigation + collapsible mini nav";
	public description = "Side navigation with a collapsible mini (icons-only) variant and responsive breakpoints";
	public dependencies: string[] = [];
	public framework: string = "react";
	public projectType: string = "igr-ts";
	public hasExtraConfiguration: boolean = false;
	public isHidden: boolean = false;

	public get templatePaths(): string[] {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}
export default new SideNavMiniIgrTsProject();
