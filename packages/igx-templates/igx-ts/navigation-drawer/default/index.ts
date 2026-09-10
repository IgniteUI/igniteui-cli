import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxNavigationDrawerTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Navigation Drawer"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "navigation-drawer";
		this.projectType = "igx-ts";
		this.name = "Navigation Drawer";
		this.description = "Basic IgxNavigationDrawer sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxNavigationDrawerTemplate();
