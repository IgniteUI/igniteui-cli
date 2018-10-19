
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxTabsComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Tabs";
		this.group = "Layouts";
	}
}
module.exports = new IgxTabsComponent();
