import { BaseComponent } from "@igniteui/cli-core";

class IgrComboComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Combo";
		this.group = "Data Entry & Display";
		this.description = `a searchable, multi-select dropdown bound to a data source`;
	}
}
module.exports = new IgrComboComponent();
