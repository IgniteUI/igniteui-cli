import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { ProjectExtras } from "../_base";
import { SideNavProject } from "../side-nav";

/** What the authentication files need, shared with side-nav-mini-auth */
export const authExtras = (angularMajor: string): ProjectExtras => ({
	// both follow Angular's majors; at their latest they would outrun the project's Angular once a new major ships
	dependencies: [`angular-auth-oidc-client@${angularMajor}`],
	devDependencies: [`@angular/language-service@${angularMajor}`, "@types/facebook-js-sdk"],
	types: ["facebook-js-sdk"]
});

export class AuthSideProject extends SideNavProject implements ProjectTemplate {
	public id: string = "side-nav-auth";
	public name = "Side navigation + login";
	public description = "Side navigation extended with user authentication module";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration = false;
	public isHidden = true;
	protected extras = authExtras;

	public get templatePaths() {
		return [...super.templatePaths, path.join(__dirname, "files")];
	}
}

export default new AuthSideProject();
