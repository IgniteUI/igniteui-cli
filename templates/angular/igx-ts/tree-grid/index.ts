
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxGridComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Tree Grid";
		this.group = "Grids & Lists";
		this.description = "pick from tree grids: custom or with summaries";
		this.groupPriority = 11;
	}
}
module.exports = new IgxGridComponent();
