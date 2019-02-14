import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxSelectComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Select";
		this.group = "Grids & Lists";
		this.description = "provides an input with dropdown list allowing selection of a single item.";
	}
}
module.exports = new IgxSelectComponent();
