class AngularFramework implements Framework {
	id: string;
	name: string;
	projectLibraries: ProjectLibrary[];

	constructor() {
		this.id = "angular";
		this.name = "Angular";
		this.projectLibraries = [];
		this.projectLibraries.push(require("./ts") as ProjectLibrary);
	}
}
export = new AngularFramework();