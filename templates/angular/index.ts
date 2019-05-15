import { Framework, ProjectLibrary } from "../../lib/types/index";

class AngularFramework implements Framework {
	public id: string;
	public name: string;
	public projectLibraries: ProjectLibrary[];

	constructor() {
		this.id = "angular";
		this.name = "Angular";
		this.projectLibraries = [];
		this.projectLibraries.push(require("./igx-ts") as ProjectLibrary);
		this.projectLibraries.push(require("./ig-ts") as ProjectLibrary);
	}
}
export = new AngularFramework() as Framework;
