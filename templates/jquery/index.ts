class jQueryFramework implements Framework {
	id: string;
	name: string;
	projectLibraries: ProjectLibrary[];

	constructor() {
		this.id = "jquery";
		this.name = "jQuery";
		this.projectLibraries = [];
		this.projectLibraries.push(require("./js") as ProjectLibrary);
	}
}
export = new jQueryFramework();