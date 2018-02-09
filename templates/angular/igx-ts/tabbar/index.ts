
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxTabbarComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Tabbar";
		this.group = "Layouts";
	}
}
module.exports = new IgxTabbarComponent();
