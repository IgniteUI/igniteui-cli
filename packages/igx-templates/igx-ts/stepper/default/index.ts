import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
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
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxStepperTemplate();
