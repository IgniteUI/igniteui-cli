
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxTimePickerComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Time Picker";
		this.group = "Scheduling";
	}
}
module.exports = new IgxTimePickerComponent();
