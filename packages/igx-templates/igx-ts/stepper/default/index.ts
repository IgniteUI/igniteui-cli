import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxStepperTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Stepper"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "stepper";
		this.projectType = "igx-ts";
		this.name = "Stepper";
		this.description = "Basic IgxStepper sample";
	}
}
module.exports = new IgxStepperTemplate();
