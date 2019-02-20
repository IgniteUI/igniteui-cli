import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxSelectComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Select";
		this.group = "Data Entry & Display";
		this.description = "provides an input with dropdown list allowing selection of a single item.";
	}
}
module.exports = new IgxSelectComponent();
