import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxCardTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Card"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "card";
		this.projectType = "igx-ts";
		this.name = "Card";
		this.description = "Basic IgxCard sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxCardTemplate();
