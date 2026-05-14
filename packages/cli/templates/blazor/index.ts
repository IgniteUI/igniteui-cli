import { Framework, ProjectLibrary } from "@igniteui/cli-core";

class BlazorFramework implements Framework {
	public id: string;
	public name: string;
	public projectLibraries: ProjectLibrary[];
	public hidden = true;

	constructor() {
		this.id = "blazor";
		this.name = "Blazor";
		this.projectLibraries = [];
		this.projectLibraries.push(require("./igb") as ProjectLibrary);
	}
}
export = new BlazorFramework() as Framework;
