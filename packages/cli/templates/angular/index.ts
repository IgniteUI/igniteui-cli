import { Framework, ProjectLibrary } from "@igniteui/cli-core";

class AngularFramework implements Framework {
	public id: string;
	public name: string;
	public projectLibraries: ProjectLibrary[];

	constructor() {
		this.id = "angular";
		this.name = "Angular";
		this.projectLibraries = [];
		this.projectLibraries.push(...require("@igniteui/angular-templates").default as ProjectLibrary[]);
		// this.projectLibraries.push(require("./ig-ts") as ProjectLibrary);
	}
}
export = new AngularFramework() as Framework;
