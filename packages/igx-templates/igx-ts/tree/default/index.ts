import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxComboTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tree"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "tree";
		this.projectType = "igx-ts";
		this.name = "Tree";
		this.description = "IgxTree sample with selection and load-on-demand node";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxComboTemplate();
