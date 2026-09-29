import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrVirtualScrollTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Virtual Scroll"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "virtual-scroll";
		this.projectType = "igr-ts";
		this.name = "Virtual Scroll";
		this.description = "basic IgrVirtualScroll";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrVirtualScrollTemplate();
