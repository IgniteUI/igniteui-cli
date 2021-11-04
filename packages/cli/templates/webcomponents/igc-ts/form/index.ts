import { BaseComponent } from "@igniteui/cli-core";

class IgcFormComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Form";
		this.group = "Data Entry & Display";
		this.description = `Customizable form component`;
	}
}
module.exports = new IgcFormComponent();
