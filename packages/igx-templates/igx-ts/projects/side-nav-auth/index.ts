import { ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";
import { ProjectExtras } from "../_base";
import { SideNavProject } from "../side-nav";

/** What the authentication files need, shared with side-nav-mini-auth */
export const authExtras = (angularMajor: string): ProjectExtras => ({
	// its majors ship weeks to months after Angular's, and its peer is `@angular/core >=20`; `<=major` takes the newest
	// one up to the project's Angular, so it neither outruns it nor fails while the matching major is not out yet
	dependencies: [`angular-auth-oidc-client@<=${angularMajor}`],
	// part of Angular, released with each major; at its latest it would outrun the project's Angular
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
