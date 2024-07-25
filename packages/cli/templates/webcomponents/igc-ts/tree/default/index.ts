import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcTreeTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tree"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "tree";
		this.projectType = "igc-ts";
		this.name = "Tree";
		this.description = "basic IgcTree";
		this.packages = [
			"igniteui-webcomponents-core@~4.2.5",
			"igniteui-webcomponents-grids@~4.2.5",
			"igniteui-webcomponents-inputs@~4.2.5",
			"igniteui-webcomponents-layouts@~4.2.5"
		];
	}
}
module.exports = new IgcTreeTemplate();
