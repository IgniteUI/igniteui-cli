import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcLinearGaugeTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["LinearGauge"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "linear-gauge";
		this.projectType = "igc-ts";
		this.name = "Linear Gauge";
		this.description = "IgcLinearGauge";
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcLinearGaugeTemplate();
