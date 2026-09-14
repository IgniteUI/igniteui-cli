import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxExpansionPanelTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Expansion Panel"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "expansion-panel";
		this.projectType = "igx-ts";
		this.name = "Expansion Panel";
		this.description = "Basic IgxExpansionPanel sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxExpansionPanelTemplate();
