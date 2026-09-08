import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrStepperTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Stepper"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "stepper";
		this.projectType = "igr-ts";
		this.name = "Stepper";
		this.description = "basic IgrStepper";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrStepperTemplate();
