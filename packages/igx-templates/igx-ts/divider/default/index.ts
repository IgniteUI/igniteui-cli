import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxDividerTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Divider"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "divider";
		this.projectType = "igx-ts";
		this.name = "Divider";
		this.description = "Basic igx-divider sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxDividerTemplate();
