import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrDateRangePickerTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Date Range Picker"];
		this.controlGroup = "Scheduling";
		this.listInComponentTemplates = true;
		this.id = "date-range-picker";
		this.projectType = "igr-ts";
		this.name = "Date Range Picker";
		this.description = "basic IgrDateRangePicker";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrDateRangePickerTemplate();
