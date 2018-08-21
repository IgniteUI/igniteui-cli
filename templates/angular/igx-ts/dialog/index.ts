
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxDialogComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Dialog";
		this.group = "Interactions";
	}
}
module.exports = new IgxDialogComponent();
