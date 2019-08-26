import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";

class GridCustomTemplate extends jQueryTemplate {
	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};
	private gridHelper: GridHelper;
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "grid-custom";
		this.name = "Custom Grid";
		this.description = "igGrid custom template";
		this.projectType = "js";
		this.components = ["Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igGrid"];

		this.gridHelper = new GridHelper();
		this.hasExtraConfiguration = true;
		this.extraConfigurations = [];
		const featureConfiguration: ControlExtraConfiguration = {
			choices: [
				"Sorting", "Selection", "Updating", "Filtering",
				"ColumnMoving", "GroupBy", "Summaries", "Resizing", "Hiding", "Paging"
			],
			default: "",
			key: "features",
			message: "Select features for the custom igGrid",
			type: ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 4);
		const config = { gridfeatures: features };
		return super.generateConfig(name, { extraConfig : config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new GridCustomTemplate();
