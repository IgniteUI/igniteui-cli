
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxListComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "List";
		this.group = "Grids & Lists";
		this.description = `displays rows of items and supports one or more header items as well as
							search and filtering of list items.`;
	}
}
module.exports = new IgxListComponent();
