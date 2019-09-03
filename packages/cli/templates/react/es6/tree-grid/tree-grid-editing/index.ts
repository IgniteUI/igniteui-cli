import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";

class TreeGridEditingTemplate extends ReactTemplate {

	public extraConfigurations: ControlExtraConfiguration[] = [];
	public userExtraConfiguration: {} = {};
	private gridHelper: GridHelper;

	constructor() {
		super(__dirname);
		this.id = "tree-grid-editing";
		this.name = "Editing Tree Grid";
		this.description = "igTreeGrid editing template for React";
		this.projectType = "es6";
		this.widget = "igTreeGrid";
		this.components = ["Tree Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igTreeGrid"];

		this.gridHelper = new GridHelper();
		this.gridHelper.tree = true;
		this.hasExtraConfiguration = true;
		this.extraConfigurations.push({
			choices: ["Sorting", "Filtering"],
			default: "",
			key: "features",
			message: "Select features for the igTreeGrid",
			type: ControlExtraConfigType.MultiChoice
		});
	}

	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		this.gridHelper.addFeature("Updating");
		const features = this.gridHelper.generateFeatures(
			this.userExtraConfiguration["features"], 5);
		const config = { treeGridFeatures: features };
		return super.generateConfig(name, { extraConfig : config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
}
module.exports = new TreeGridEditingTemplate();
