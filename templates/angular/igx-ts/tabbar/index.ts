
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxBottomNavComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Bottom Navigation";
		this.group = "Layouts";
	}
}
module.exports = new IgxBottomNavComponent();
