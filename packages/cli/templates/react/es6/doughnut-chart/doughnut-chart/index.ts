import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "@igniteui/cli-core";

class DoughnutChartTemplate extends ReactTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "doughnut-chart";
		this.name = "Doughnut Chart";
		this.widget = "igDoughnutChart";
		this.description = "igDataChart template";
		this.projectType = "es6";
		this.components = ["Doughnut Chart"];
		this.controlGroup = "Charts";
		this.dependencies = ["igDataChart"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new DoughnutChartTemplate();
