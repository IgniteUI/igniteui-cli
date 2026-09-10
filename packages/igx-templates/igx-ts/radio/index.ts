import { BaseComponent } from "@igniteui/cli-core";

class IgxRadioComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Radio";
		this.group = "Data Entry & Display";
		this.description = "renders a set of radio buttons to allow the user to make a single choice";
	}
}
module.exports = new IgxRadioComponent();
