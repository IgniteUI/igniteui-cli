import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcDialogTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Dialog"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "dialog";
		this.projectType = "igc-ts";
		this.name = "Dialog";
		this.description = "basic IgcDialog";
	}
}
module.exports = new IgcDialogTemplate();
