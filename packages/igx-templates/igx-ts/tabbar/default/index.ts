import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxBottomNavTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Bottom Navigation"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "bottom-nav";
		this.projectType = "igx-ts";
		this.name = "Bottom Navigation";
		this.description = "three item bottom navigation template";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxBottomNavTemplate();
