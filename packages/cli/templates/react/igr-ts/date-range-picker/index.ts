import { BaseComponent } from "@igniteui/cli-core";

class IgrDateRangePickerComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Date Range Picker";
		this.group = "Scheduling";
		this.description = `an input that allows the user to select a range of dates`;
	}
}
module.exports = new IgrDateRangePickerComponent();
