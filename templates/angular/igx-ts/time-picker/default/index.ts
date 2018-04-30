import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

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
			{ import: "IgxTimePickerModule", from: "igniteui-angular/main" }
		];
	}
}
module.exports = new IgxTimePickerTemplate();
