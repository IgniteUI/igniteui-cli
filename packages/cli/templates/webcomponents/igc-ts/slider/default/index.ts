import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcSliderComponent extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Slider"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "slider";
		this.projectType = "igc-ts";
		this.name  = "Slider";
		this.description = `Basic slider component`;
	}
}
module.exports = new IgcSliderComponent();
