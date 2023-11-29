import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
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
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxSelectTemplate();
