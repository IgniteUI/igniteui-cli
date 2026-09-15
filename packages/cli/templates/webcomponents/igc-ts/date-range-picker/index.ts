import { BaseComponent } from "@igniteui/cli-core";

class IgcDateRangePickerComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Date Range Picker";
		this.group = "Scheduling";
		this.description = `Lets users pick a start and end date from a dual calendar popover`;
	}
}
module.exports = new IgcDateRangePickerComponent();
