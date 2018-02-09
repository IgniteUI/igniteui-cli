
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxGridComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Grid";
		this.group = "Grids&Lists";
	}
}
module.exports = new IgxGridComponent();
