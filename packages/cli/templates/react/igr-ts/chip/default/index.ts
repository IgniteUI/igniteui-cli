import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrChipTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Chip"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "chip";
		this.projectType = "igr-ts";
		this.name = "Chip";
		this.description = "basic IgrChip";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrChipTemplate();
