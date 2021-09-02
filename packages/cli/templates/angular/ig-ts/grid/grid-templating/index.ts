import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class GridTemplatingTemplate extends AngularTemplate {
	private gridHelper: GridHelper;
	private extraConfigurations: ControlExtraConfiguration[];
	private userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.id = "grid-templating";
		this.name = "Grid Templating";
		this.controlGroup = "Data Grids";
		this.widget = "igGrid";
		this.description = "igGrid templating template for Angular";
		this.dependencies = ["igGrid"];
		this.projectType = "ig-ts";
		this.extraConfigurations = [];
		this.hasExtraConfiguration = true;
		this.listInComponentTemplates = true;

		this.gridHelper = new GridHelper();
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Sorting", "Paging", "Filtering"],
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

	public generateConfig(name: string, ...options: any[]): { [key: string]: any } {
		this.gridHelper.addFeature("Updating");
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 3);
		const config = { gridFeatures: features };
		return super.generateConfig(name, { extraConfig: config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new GridTemplatingTemplate();
