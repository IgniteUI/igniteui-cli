import { BaseComponent } from "@igniteui/cli-core";

class IgrCheckboxComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Checkbox";
		this.group = "Data Entry & Display";
		this.description = `displays a checkbox with customizable label and state.`;
	}
}
module.exports = new IgrCheckboxComponent();
