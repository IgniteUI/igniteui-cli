import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxTimePickerTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Time Picker"];
		this.controlGroup = "Scheduling";
		this.listInComponentTemplates = true;
		this.id = "time-picker";
		this.projectType = "igx-ts";
		this.name = "Time Picker";
		this.description = "IgxTimePicker with initial value";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxTimePickerTemplate();
