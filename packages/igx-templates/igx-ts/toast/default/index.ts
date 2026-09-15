import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxToastTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Toast"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "toast";
		this.projectType = "igx-ts";
		this.name = "Toast";
		this.description = "Basic IgxToast sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxToastTemplate();
