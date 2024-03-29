import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxDialogTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Dialog"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "dialog";
		this.projectType = "igx-ts";
		this.name = "Dialog";
		this.description = "Standart dialog template";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxDialogTemplate();
