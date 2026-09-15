import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxSplitterTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Splitter"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "splitter";
		this.projectType = "igx-ts";
		this.name = "Splitter";
		this.description = "Basic IgxSplitter sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxSplitterTemplate();
