import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { SideNavIgrTsProject } from "../side-nav";

export class SideNavAuthIgrTsProject extends SideNavIgrTsProject implements ProjectTemplate {
	public id: string = "side-nav-auth";
	public name = "Side navigation + login";
	public description = "Side navigation extended with user authentication module";
	public dependencies: string[] = [];
	public framework: string = "react";
	public projectType: string = "igr-ts";
	public hasExtraConfiguration: boolean = false;
	public isHidden: boolean = true;

	public get templatePaths(): string[] {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}
export default new SideNavAuthIgrTsProject();
