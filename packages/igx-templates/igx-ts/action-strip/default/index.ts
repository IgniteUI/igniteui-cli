import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxActionStripTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Action Strip"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "action-strip";
		this.projectType = "igx-ts";
		this.name = "Action Strip";
		this.description = "Basic IgxActionStrip sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxActionStripTemplate();
