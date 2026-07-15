import { BaseComponent } from "@igniteui/cli-core";

class IgrRadioGroupComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Radio Group";
		this.group = "Data Entry & Display";
		this.description = `displays a radio group.`;
	}
}
module.exports = new IgrRadioGroupComponent();
