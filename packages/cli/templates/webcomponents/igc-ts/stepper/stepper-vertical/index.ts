import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcStepperVerticalTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Stepper"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "stepper-vertical";
		this.projectType = "igc-ts";
		this.name = "Stepper Vertical";
		this.description = "IgcStepper with vertical, linear steps";
	}
}
module.exports = new IgcStepperVerticalTemplate();
