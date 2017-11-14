class AngularFramework implements Framework {
	public id: string;
	public name: string;
	public projectLibraries: ProjectLibrary[];

	constructor() {
		this.id = "angular";
		this.name = "Angular";
		this.projectLibraries = [];
		this.projectLibraries.push(require("./ts") as ProjectLibrary);
	}
}
export = new AngularFramework() as Framework;
