import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcDialogFormTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Dialog"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "dialog-form";
		this.projectType = "igc-ts";
		this.name = "Dialog Form";
		this.description = "IgcDialog hosting a short form";
	}
}
module.exports = new IgcDialogFormTemplate();
