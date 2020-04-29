import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class GridCustomTemplate extends AngularTemplate {
	private gridHelper: GridHelper;
	private extraConfigurations: ControlExtraConfiguration[];
	private userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.id = "grid-custom";
		this.name = "Custom Grid";
		this.widget = "igGrid";
		this.controlGroup = "Data Grids";
		this.description = "igGrid custom template for Angular";
		this.dependencies = ["igGrid"];
		this.projectType = "ig-ts";
		this.extraConfigurations = [];
		this.hasExtraConfiguration = true;
		this.listInComponentTemplates = true;

		this.gridHelper = new GridHelper();
		const featureConfiguration: ControlExtraConfiguration = {
			choices: [
				"Sorting", "Selection", "Updating", "Filtering", "ColumnMoving",
				"Summaries", "GroupBy", "Resizing", "Hiding"
		],
			default: "",
			key: "features",
			message: "Select features for the igGrid",
			type: ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}

	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		this.gridHelper.addFeature("Updating");
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 3);
		const config = { gridFeatures: features };
		return super.generateConfig(name, { extraConfig : config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new GridCustomTemplate();
