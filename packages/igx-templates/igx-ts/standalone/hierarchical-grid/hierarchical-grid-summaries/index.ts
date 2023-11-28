import { IgniteUIForAngularTemplate } from "../../../../IgniteUIForAngularTemplate";

class IgxHierarchicalGridTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Hierarchical Grid With Summaries"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "hierarchical-grid-summaries";
		this.projectType = "igx-ts";
		this.name = "Hierarchical Grid With Summaries";
		this.description = "IgxHierarchicalGrid with summaries";
	}
}
module.exports = new IgxHierarchicalGridTemplate();
