import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcSplitterVerticalTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Splitter"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "splitter-vertical";
		this.projectType = "igc-ts";
		this.name = "Splitter Vertical";
		this.description = "IgcSplitter with vertically stacked, collapsible panes";
	}
}
module.exports = new IgcSplitterVerticalTemplate();
