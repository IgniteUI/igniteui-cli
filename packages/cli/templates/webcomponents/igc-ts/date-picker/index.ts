import { BaseComponent } from "@igniteui/cli-core";

class IgcDatePickerComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "DatePicker";
		this.group = "Scheduling";
		this.description = `Basic date picker component`;
	}
}
module.exports = new IgcDatePickerComponent();
