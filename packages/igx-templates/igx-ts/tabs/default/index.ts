import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxTabsTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tabs"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "tabs";
		this.projectType = "igx-ts";
		this.name = "Tabs";
		this.description = "Basic IgxTabs sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxTabsTemplate();
