import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxDatePickerTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Date Picker"];
		this.controlGroup = "Scheduling";
		this.listInComponentTemplates = true;
		this.id = "date-picker";
		this.projectType = "igx-ts";
		this.name = "Date Picker";
		this.description = "basic IgxDatePicker";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxDatePickerTemplate();
