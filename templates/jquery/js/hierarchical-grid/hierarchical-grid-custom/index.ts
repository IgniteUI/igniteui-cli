import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { ControlExtraConfigType, ControlExtraConfiguration } from "../../../../../lib/types/index";

class HierarchicalGridEditingTemplate extends jQueryTemplate {
	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};
	public hasExtraConfiguration = true;

	private gridHelper: GridHelper;
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "hierarchical-grid-custom";
		this.name = "Hierarchical Grid Custom";
		this.description = "igHierarchicalGrid custom template";
		this.projectType = "js";
		this.components = ["Hierarchical Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igHierarchicalGrid"];

		this.gridHelper = new GridHelper();
		this.gridHelper.hierarchical = true;
		this.extraConfigurations = [];
		const featureConfiguration: ControlExtraConfiguration = {
			choices: [
				"Sorting", "Selection", "Updating", "Filtering",
				"ColumnMoving", "Summaries", "Resizing", "Hiding", "Paging"
			],
			default: "",
			key: "features",
			message: "Select features for the igHierarchicalGrid",
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

module.exports = new HierarchicalGridEditingTemplate();
