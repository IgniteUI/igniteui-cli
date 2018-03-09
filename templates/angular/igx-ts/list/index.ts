
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxListComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "List";
		this.group = "Grids & Lists";
	}
}
module.exports = new IgxListComponent();
