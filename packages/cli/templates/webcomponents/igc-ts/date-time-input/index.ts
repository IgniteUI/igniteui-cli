import { BaseComponent } from "@igniteui/cli-core";

class IgcDateTimeInputComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "DateTimeInput";
		this.group = "Data Entry & Display";
		this.description = `Basic date time input component`;
	}
}
module.exports = new IgcDateTimeInputComponent();
