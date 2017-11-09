
import { BaseComponent } from "../../../../lib/BaseComponent";

class ComboComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Combo";
		this.group = "Data Entry";
	}
}
module.exports = new ComboComponent();
