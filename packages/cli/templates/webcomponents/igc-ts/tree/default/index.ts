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
			"igniteui-webcomponents-core@~6.0.0",
			"igniteui-webcomponents-grids@~6.0.0",
			"igniteui-webcomponents-inputs@~6.0.0",
			"igniteui-webcomponents-layouts@~6.0.0"
		];
	}
}
module.exports = new IgcTreeTemplate();
