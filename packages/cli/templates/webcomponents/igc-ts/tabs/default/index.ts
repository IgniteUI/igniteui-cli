import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcTabsTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tabs"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "tabs";
		this.projectType = "igc-ts";
		this.name = "Tabs";
		this.description = "basic IgcTabs";
	}
}
module.exports = new IgcTabsTemplate();
