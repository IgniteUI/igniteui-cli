import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";

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
			type: ControlExtraConfigType.MultiChoice
		});
	}

	public generateConfig(name: string, ...options: any[]): { [key: string]: any } {
		this.gridHelper.addFeature("Updating", { enableAddRow: true });
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 5);
		const config = { gridfeatures: features };
		return super.generateConfig(name, { extraConfig: config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
}
module.exports = new HierarchicalGridEditingTemplate();
