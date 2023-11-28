import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

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
	}
}
module.exports = new IgxSelectTemplate();
