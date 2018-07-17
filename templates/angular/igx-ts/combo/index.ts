
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxComboComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Combo";
		this.group = "Grids & Lists";
	}
}
module.exports = new IgxComboComponent();
