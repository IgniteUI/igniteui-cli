import { BaseComponent } from "@igniteui/cli-core";

class IgrAccordionComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Accordion";
		this.group = "Layouts";
		this.description = `enables displaying of content in a vertically collapsible fashion.`;
	}
}
module.exports = new IgrAccordionComponent();
