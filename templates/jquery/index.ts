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
export = new jQueryFramework() as Framework;
