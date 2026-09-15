import { BaseComponent } from "@igniteui/cli-core";

class IgxCheckboxComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Checkbox";
		this.group = "Data Entry & Display";
		this.description = "a selection component that allows users to make a binary choice for a condition";
	}
}
module.exports = new IgxCheckboxComponent();
