import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcTreeGridTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tree Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "tree-grid";
		this.projectType = "igc-ts";
		this.name = "Tree Grid";
		this.description = "IgcTreeGrid with hierarchical data";
		this.packages = [ "igniteui-webcomponents-grids@~7.1.0" ];
	}
}
module.exports = new IgcTreeGridTemplate();
