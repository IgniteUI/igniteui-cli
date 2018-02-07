
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxDatePickerComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "DatePicker";
		this.group = "Scheduling";
	}
}
module.exports = new IgxDatePickerComponent();