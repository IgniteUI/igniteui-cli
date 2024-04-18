import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcListTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["List"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "list";
		this.projectType = "igc-ts";
		this.name = "List";
		this.description = "basic IgcList";
	}
}
module.exports = new IgcListTemplate();
