import { BaseComponent } from "@igniteui/cli-core";

class IgcTextareaComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Text area";
		this.group = "Data Entry & Display";
		this.description = `Basic text area component`;
	}
}
module.exports = new IgcTextareaComponent();
