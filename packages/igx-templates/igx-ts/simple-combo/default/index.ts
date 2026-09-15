import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxSimpleComboTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Simple Combo"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "simple-combo";
		this.projectType = "igx-ts";
		this.name = "Simple Combo";
		this.description = "Basic IgxSimpleCombo sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxSimpleComboTemplate();
