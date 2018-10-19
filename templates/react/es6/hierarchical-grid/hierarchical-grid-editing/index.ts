import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";
import { Util } from "../../../../../lib/Util";

import { GridHelper } from "../../../../../lib/project-utility/GridHelper";

class HierarchicalGridEditingTemplate extends ReactTemplate {
	public extraConfigurations: ControlExtraConfiguration[] = [];
	public userExtraConfiguration: {} = {};
	private gridHelper: GridHelper;

	constructor() {
		super(__dirname);
		this.id = "hierarchical-grid-editing";
		this.name = "Editing Hierarchical Grid";
		this.widget = "igHierarchicalGrid";
		this.description = "igHierarchicalGrid editing template for React";
		this.projectType = "es6";
		this.components = ["Hierarchical Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igHierarchicalGrid"];

		this.gridHelper = new GridHelper();
		this.gridHelper.hierarchical = true;
		this.hasExtraConfiguration = true;
		this.extraConfigurations.push({
			choices: ["Sorting", "Filtering", "Paging"],
			default: "",
			key: "features",
			message: "Select features for the igHierarchicalGrid",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		});
	}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		this.gridHelper.addFeature("Updating", { enableAddRow: true });
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 5);
		const config = { "$(gridfeatures)": features };
		return super.generateFiles(projectPath, name, { extraConfig : config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
}
module.exports = new HierarchicalGridEditingTemplate();
