
import { BaseComponent } from "../../../../lib/BaseComponent";

class HierarchicalGridComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Hierarchical Grid";
		this.group = "Data Grids";
	}
}
module.exports = new HierarchicalGridComponent();