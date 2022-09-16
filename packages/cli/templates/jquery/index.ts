import { Framework, ProjectLibrary } from "@igniteui/cli-core";

// tslint:disable-next-line:class-name
class jQueryFramework implements Framework {
	public id: string;
	public name: string;
	public projectLibraries: ProjectLibrary[];

	constructor() {
		this.id = "jquery";
		this.name = "jQuery";
		this.projectLibraries = [];
		this.projectLibraries.push(require("./js") as ProjectLibrary);
	}
}

export const factory = () => new jQueryFramework() as Framework;
