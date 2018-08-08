
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxDropDownComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "DropDown";
		this.group = "Grids & Lists";
	}
}
module.exports = new IgxDropDownComponent();
