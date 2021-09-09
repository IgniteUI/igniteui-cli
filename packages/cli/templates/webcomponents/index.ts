import { Framework, ProjectLibrary } from "@igniteui/cli-core";

class WebComponentsFramework implements Framework {
	public id: string;
	public name: string;
	public projectLibraries: ProjectLibrary[];

	constructor() {
		this.id = "webcomponents";
		this.name = "WebComponents";
		this.projectLibraries = [];
		this.projectLibraries.push(require("./igc-ts") as ProjectLibrary);
	}
}
export = new WebComponentsFramework() as Framework;