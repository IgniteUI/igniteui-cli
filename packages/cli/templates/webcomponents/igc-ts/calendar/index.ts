import { BaseComponent } from "@igniteui/cli-core";

class IgcCalendarComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Calendar";
		this.group = "Scheduling";
		this.description = `Customizable calendar component`;
	}
}
module.exports = new IgcCalendarComponent();
