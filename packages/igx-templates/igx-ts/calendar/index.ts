
import { BaseComponent } from "@igniteui-cli/core";

class IgxCalendarComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Calendar";
		this.group = "Scheduling";
	}
}
module.exports = new IgxCalendarComponent();
