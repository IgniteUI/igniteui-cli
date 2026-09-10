import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcSplitterTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Splitter"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "splitter";
		this.projectType = "igc-ts";
		this.name = "Splitter";
		this.description = "IgcSplitter with two horizontally split panes";
	}
}
module.exports = new IgcSplitterTemplate();
