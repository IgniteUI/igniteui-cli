import { BaseComponent } from "@igniteui/cli-core";

class IgrDropdownComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Dropdown";
		this.group = "Data Entry & Display";
		this.description = `represents a dropdown component`;
	}
}
module.exports = new IgrDropdownComponent();
