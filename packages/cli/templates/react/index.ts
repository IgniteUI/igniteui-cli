import { Framework, ProjectLibrary } from "@igniteui/cli-core";

class ReactFramework implements Framework {
	public id: string;
	public name: string;
	public projectLibraries: ProjectLibrary[];

	constructor() {
		this.id = "react";
		this.name = "React";
		this.projectLibraries = [];
		// this.projectLibraries.push(require("./es6") as ProjectLibrary);
		// this.projectLibraries.push(require("./igr-es6") as ProjectLibrary);
		this.projectLibraries.push(require("./igr-ts") as ProjectLibrary);
	}
}
export = new ReactFramework() as Framework;
