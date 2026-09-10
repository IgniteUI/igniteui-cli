import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcDateRangePickerTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Date Range Picker"];
		this.controlGroup = "Scheduling";
		this.listInComponentTemplates = true;
		this.id = "date-range-picker";
		this.projectType = "igc-ts";
		this.name = "Date Range Picker";
		this.description = "basic IgcDateRangePicker";
	}
}
module.exports = new IgcDateRangePickerTemplate();
