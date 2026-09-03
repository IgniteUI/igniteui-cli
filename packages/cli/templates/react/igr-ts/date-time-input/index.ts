import { BaseComponent } from "@igniteui/cli-core";

class IgrDateTimeInputComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Date Time Input";
		this.group = "Scheduling";
		this.description = `an input field for editing date and time values with a customizable format`;
	}
}
module.exports = new IgrDateTimeInputComponent();
