import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";

import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { ControlExtraConfigType, ControlExtraConfiguration } from "../../../../../lib/types/index";

class HierarchicalGridCustomTemplate extends ReactTemplate {
	public extraConfigurations: ControlExtraConfiguration[] = [];
	public userExtraConfiguration: {} = {};
	private gridHelper: GridHelper;

	constructor() {
		super(__dirname);
		this.id = "hierarchical-grid-custom";
		this.widget = "igHierarchicalGrid";
		this.name = "Custom Hierarchical Grid";
		this.description = "igHierarchicalGrid custom template for React";
		this.projectType = "es6";
		this.components = ["Hierarchical Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igHierarchicalGrid"];

		this.gridHelper = new GridHelper();
		this.gridHelper.hierarchical = true;
		this.hasExtraConfiguration = true;
		this.extraConfigurations.push({
			choices: [
				"Sorting", "Selection", "Updating", "Filtering", "ColumnMoving",
				"Resizing", "Hiding", "Paging", "Summaries"
			],
			default: "",
			key: "features",
			message: "Select features for the igHierarchicalGrid",
			type: ControlExtraConfigType.MultiChoice
		});
	}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 5);
		const config = { "$(gridfeatures)": features };
		return super.generateFiles(projectPath, name, { extraConfig: config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
}
module.exports = new HierarchicalGridCustomTemplate();
