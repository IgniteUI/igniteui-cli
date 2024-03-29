import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxComboTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Combo"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "combo";
		this.projectType = "igx-ts";
		this.name = "Combo";
		this.description = "basic IgxCombo with templating";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxComboTemplate();
