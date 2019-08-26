import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "@igniteui-cli/core";

class FunnelChartTemplate extends ReactTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "funnel-chart";
		this.name = "Funnel Chart";
		this.widget = "igFunnelChart";
		this.description = "igFunnelChart template";
		this.projectType = "es6";
		this.components = ["Funnel Chart"];
		this.controlGroup = "Charts";
		this.dependencies = ["igDataChart"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new FunnelChartTemplate();
