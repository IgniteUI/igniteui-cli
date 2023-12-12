import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxDropDownTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Drop Down"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "dropdown";
		this.projectType = "igx-ts";
		this.name = "Drop Down";
		this.description = "Basic IgxDropDown sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxDropDownTemplate();
