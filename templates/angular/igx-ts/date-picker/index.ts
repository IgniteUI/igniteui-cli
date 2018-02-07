
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxDatePickerComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Date Picker";
		this.group = "Scheduling";
	}
}
module.exports = new IgxDatePickerComponent();
