import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcStepperTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Stepper"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "stepper";
		this.projectType = "igc-ts";
		this.name = "Stepper";
		this.description = "IgcStepper with horizontal steps";
	}
}
module.exports = new IgcStepperTemplate();
