import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class HierarchicalGridTemplate extends AngularTemplate {
	private gridHelper: GridHelper;
	private extraConfigurations: ControlExtraConfiguration[];
	private userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.id = "hierarchical-grid";
		this.name = "Hierarchical Grid";
		this.controlGroup = "Data Grids";
		this.widget = "igHierarchicalGrid";
		this.description = "igHierarchicalGrid default template for Angular";
		this.dependencies = ["igHierarchicalGrid"];
		this.projectType = "ig-ts";
		this.extraConfigurations = [];
		this.hasExtraConfiguration = true;
		this.listInComponentTemplates = true;

		this.gridHelper = new GridHelper();
		this.gridHelper.hierarchical = true;
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Sorting", "Paging", "Filtering"],
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

	public generateConfig(name: string, ...options: any[]): { [key: string]: any } {
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 3);
		const config = { gridFeatures: features };
		return super.generateConfig(name, { extraConfig: config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new HierarchicalGridTemplate();
