import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcVirtualScrollTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Virtual Scroll"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "virtual-scroll";
		this.projectType = "igc-ts";
		this.name = "Virtual Scroll";
		this.description = "basic IgcVirtualScroll";
	}
}
module.exports = new IgcVirtualScrollTemplate();
