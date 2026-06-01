import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

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
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrAccordionTemplate();
