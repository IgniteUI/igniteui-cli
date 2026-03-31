import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrAccordionTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Accordion"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "accordion";
		this.projectType = "igr-ts";
		this.name = "Accordion";
		this.description = "basic IgrAccordion";
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrAccordionTemplate();
