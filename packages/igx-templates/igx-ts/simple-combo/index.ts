import { BaseComponent } from "@igniteui/cli-core";

class IgxSimpleComboComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Simple Combo";
		this.group = "Data Entry & Display";
		this.description = "a single-selection combo with editable input for filtering data";
	}
}
module.exports = new IgxSimpleComboComponent();
