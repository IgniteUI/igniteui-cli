
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxDatePickerComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Date Picker";
		this.group = "Scheduling";
		this.description = "displays a month-view calendar or a pop-up calendar that lets users pick a single date";
	}
}
module.exports = new IgxDatePickerComponent();
