import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { SideNavMiniProject } from "../side-nav-mini";

export class SideNavMiniAuthProject extends SideNavMiniProject implements ProjectTemplate {
	public id: string = "side-nav-mini-auth";
	public name = "Side navigation (mini) + login";
	public description = "Collapsible mini navigation extended with user authentication module";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration = false;
	public isHidden = true;

	public get templatePaths() {
		return [
			...super.templatePaths,
			// Auth overlay: app.routes.ts, app.config.ts, authentication/ (shared with side-nav-auth)
			path.join(__dirname, "../side-nav-auth/files"),
			// Mini+auth specific: app.ts and app.html that combine both
			path.join(__dirname, "files")
		];
	}
}

export default new SideNavMiniAuthProject();
