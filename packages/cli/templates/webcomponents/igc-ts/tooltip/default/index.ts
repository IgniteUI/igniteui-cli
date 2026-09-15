import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcTooltipTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tooltip"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "tooltip";
		this.projectType = "igc-ts";
		this.name = "Tooltip";
		this.description = "IgcTooltip anchored to a target element";
	}
}
module.exports = new IgcTooltipTemplate();
