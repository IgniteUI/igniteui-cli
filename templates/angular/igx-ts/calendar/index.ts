
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxCalendarComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Calendar";
		this.group = "Scheduling";
	}
}
module.exports = new IgxCalendarComponent();
