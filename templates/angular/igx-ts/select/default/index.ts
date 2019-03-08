import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxSelectTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Select"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "select";
		this.projectType = "igx-ts";
		this.name = "Select";
		this.description = "basic IgxSelect";
		this.dependencies = [{
			import: [
				"IgxSelectModule", "IgxFilterModule",
				"IgxButtonModule", "IgxToggleModule"
			],
			from: "igniteui-angular"
		}];
	}
}
module.exports = new IgxSelectTemplate();
