import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "@igniteui-cli/core";

class RadialChartTemplate extends ReactTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "radial-chart";
		this.name = "Radial Chart";
		this.widget = "igDataChart";
		this.description = "radial chart template for React";
		this.projectType = "es6";
		this.components = ["Radial Chart"];
		this.controlGroup = "Charts";
		this.dependencies = ["igDataChart"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new RadialChartTemplate();
