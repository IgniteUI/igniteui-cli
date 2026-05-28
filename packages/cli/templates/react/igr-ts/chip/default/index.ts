import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

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
		this.packages = ["igniteui-react@~19.7.0"];
	}
}
module.exports = new IgrChipTemplate();
