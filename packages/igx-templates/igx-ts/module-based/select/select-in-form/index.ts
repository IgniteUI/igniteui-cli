import { IgniteUIForAngularTemplate } from "../../../../IgniteUIForAngularTemplate";

class IgxSelectTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Select In Form"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "select-in-form";
		this.projectType = "igx-ts";
		this.name = "Select In Form";
		this.description = "IgxSelect in a form";
		this.dependencies = [{
			import: [
				"IgxSelectModule",
				"IgxButtonModule",
				"IgxToggleModule",
				"IgxToastModule"
			],
			from: "<%=igxPackage%>"
		}, {
			import: ["FormsModule"],
			from: "@angular/forms"
		}];
	}
}
module.exports = new IgxSelectTemplate();
