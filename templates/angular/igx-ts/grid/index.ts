
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxGridComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Grid";
		this.group = "Grids & Lists";
		this.description = "pick from grids: basic or custom";
		this.groupPriority = 10;
	}
}
module.exports = new IgxGridComponent();
