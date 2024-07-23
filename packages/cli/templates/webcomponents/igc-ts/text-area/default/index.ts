import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcTextareaComponent extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Teaxtarea"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "text-area";
		this.projectType = "igc-ts";
		this.name = "Text area";
		this.description = "basic IgcTextarea";
	}
}
module.exports = new IgcTextareaComponent();
