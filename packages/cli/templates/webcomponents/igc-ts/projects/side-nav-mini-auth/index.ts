import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { SideNavMiniProject } from "../side-nav-mini";

export class SideNavMiniAuthIgcProject extends SideNavMiniProject implements ProjectTemplate {
	public id: string = "side-nav-mini-auth";
	public name = "Side navigation (mini) + login";
	public description = "Collapsible mini side navigation extended with user authentication module";
	public dependencies: string[] = [];
	public framework: string = "webcomponents";
	public projectType: string = "igc-ts";
	public hasExtraConfiguration: boolean = false;
	public isHidden: boolean = true;

	public get templatePaths(): string[] {
		return [
			...super.templatePaths,
			path.join(__dirname, "../side-nav-auth/files"),
			path.join(__dirname, "files")
		];
	}
}
export default new SideNavMiniAuthIgcProject();
