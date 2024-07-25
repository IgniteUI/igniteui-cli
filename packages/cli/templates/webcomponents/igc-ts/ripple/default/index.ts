import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcRippleTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Ripple"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "ripple";
		this.projectType = "igc-ts";
		this.name = "Ripple";
		this.description = "basic IgcRipple";
	}
}
module.exports = new IgcRippleTemplate();
