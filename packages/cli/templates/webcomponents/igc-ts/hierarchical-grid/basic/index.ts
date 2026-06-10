import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcHierarchicalGridTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Hierarchical Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "hierarchical-grid";
		this.projectType = "igc-ts";
		this.name = "Hierarchical Grid";
		this.description = "IgcHierarchicalGrid with basic configuration";
		this.packages = [ "igniteui-webcomponents-grids@~7.1.0" ];
	}
}
module.exports = new IgcHierarchicalGridTemplate();
