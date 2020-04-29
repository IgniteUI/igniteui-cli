import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxHierarchicalGridTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Hierarchical Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "hierarchical-grid";
		this.projectType = "igx-ts";
		this.name = "Hierarchical Grid";
		this.description = "basic IgxHierarchicalGrid";
		this.dependencies = [
			{ import: ["IgxGridModule", "IgxHierarchicalGridModule"], from: "igniteui-angular" }
		];
	}
}
module.exports = new IgxHierarchicalGridTemplate();
