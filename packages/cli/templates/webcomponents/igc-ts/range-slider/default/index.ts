import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcRangeSliderTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Range Slider"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "range-slider";
		this.projectType = "igc-ts";
		this.name = "Range Slider";
		this.description = "basic IgcRangeSlider";
	}
}
module.exports = new IgcRangeSliderTemplate();
