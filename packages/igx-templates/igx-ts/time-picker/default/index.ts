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
		this.dependencies = [
			{ import: "IgxTimePickerModule", from: "<%=igxPackage%>" }
		];
	}
}
module.exports = new IgxTimePickerTemplate();
