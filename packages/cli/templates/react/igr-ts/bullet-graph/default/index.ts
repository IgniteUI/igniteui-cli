import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_GAUGES_PACKAGE } from "../../constants";

class IgrTsBulletGraphTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Bullet Graph"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "bullet-graph";
		this.projectType = "igr-ts";
		this.name = "Bullet Graph";
		this.description = `allows for a linear and concise view of measures compared against a scale.`;
		this.packages = [IGNITEUI_REACT_GAUGES_PACKAGE];
	}
}
module.exports = new IgrTsBulletGraphTemplate();
