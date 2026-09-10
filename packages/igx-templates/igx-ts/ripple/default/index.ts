import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxRippleTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Ripple"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "ripple";
		this.projectType = "igx-ts";
		this.name = "Ripple";
		this.description = "Basic igxRipple sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxRippleTemplate();
