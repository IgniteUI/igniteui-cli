
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxInputGroupComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Input Group";
		this.group = "Data Entry & Display";
	}
}
module.exports = new IgxInputGroupComponent();
