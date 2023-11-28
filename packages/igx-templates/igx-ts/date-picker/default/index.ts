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
	}
}
module.exports = new IgxDatePickerTemplate();
