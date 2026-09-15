import { BaseComponent } from "@igniteui/cli-core";

class IgrSelectComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Select";
		this.group = "Data Entry & Display";
		this.description = `a control that provides a menu of options to choose from`;
	}
}
module.exports = new IgrSelectComponent();
