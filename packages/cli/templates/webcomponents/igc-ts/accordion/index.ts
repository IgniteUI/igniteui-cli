import { BaseComponent } from "@igniteui/cli-core";

class IgcAccordionComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Accordion";
		this.group = "Layouts";
		this.description = `Basic accordion component`;
	}
}
module.exports = new IgcAccordionComponent();
