class ReactFramework implements Framework {
	id: string;
	name: string;
	projectLibraries: ProjectLibrary[];

	constructor() {
		this.id = "react";
		this.name = "React";
		this.projectLibraries = [];
		this.projectLibraries.push(require("./es6") as ProjectLibrary);
	}
}
export = new ReactFramework();