import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import {
	IGNITEUI_WEBCOMPONENTS_CORE_PACKAGE,
	IGNITEUI_WEBCOMPONENTS_GRIDS_PACKAGE,
	IGNITEUI_WEBCOMPONENTS_INPUTS_PACKAGE,
	IGNITEUI_WEBCOMPONENTS_LAYOUTS_PACKAGE
} from "../../constants";

class IgcTreeTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tree"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "tree";
		this.projectType = "igc-ts";
		this.name = "Tree";
		this.description = "basic IgcTree";
		this.packages = [
			IGNITEUI_WEBCOMPONENTS_CORE_PACKAGE,
			IGNITEUI_WEBCOMPONENTS_GRIDS_PACKAGE,
			IGNITEUI_WEBCOMPONENTS_INPUTS_PACKAGE,
			IGNITEUI_WEBCOMPONENTS_LAYOUTS_PACKAGE
		];
	}
}
module.exports = new IgcTreeTemplate();
