import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcAccordionTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Accordion"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "accordion";
		this.projectType = "igc-ts";
		this.name = "Accordion";
		this.description = "basic IgcAccordion";
	}
}
module.exports = new IgcAccordionTemplate();
