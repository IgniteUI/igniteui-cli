import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxAccordionTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Accordion"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "accordion";
		this.projectType = "igx-ts";
		this.name = "Accordion";
		this.description = "Basic IgxAccordion sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxAccordionTemplate();
