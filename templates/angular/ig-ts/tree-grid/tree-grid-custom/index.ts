import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";
import { ControlExtraConfigType, ControlExtraConfiguration } from "../../../../../lib/types/index";

class TreeGridCustomTemplate extends AngularTemplate {
	private gridHelper: GridHelper;
	private extraConfigurations: ControlExtraConfiguration[];
	private userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.id = "tree-grid-custom";
		this.name = "Custom TreeGrid";
		this.controlGroup = "Data Grids";
		this.widget = "igTreeGrid";
		this.description = "igTreeGrid custom template for Angular";
		this.dependencies = ["igTreeGrid"];
		this.projectType = "ig-ts";
		this.listInComponentTemplates = true;
		this.hasExtraConfiguration = true;
		this.extraConfigurations = [];

		this.gridHelper = new GridHelper();
		this.gridHelper.tree = true;
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Sorting", "Selection", "Filtering", "Updating", "ColumnMoving", "Resizing", "Hiding"],
			default: "",
			key: "features",
			message: "Select features for the igTreeGrid",
			type: ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}

	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 3);
		const config = { "$(treeGridFeatures)": features };
		return super.generateConfig(name, { extraConfig : config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new TreeGridCustomTemplate();
