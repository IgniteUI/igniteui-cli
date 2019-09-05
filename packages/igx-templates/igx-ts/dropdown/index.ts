
import { BaseComponent } from "@igniteui/cli-core";

class IgxDropDownComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Drop Down";
		this.group = "Data Entry & Display";
	}
}
module.exports = new IgxDropDownComponent();
