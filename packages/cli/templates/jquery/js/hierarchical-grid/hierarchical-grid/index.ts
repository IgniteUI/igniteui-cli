import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class HierarchicalGridTemplate extends jQueryTemplate {
	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};
	private gridHelper: GridHelper;

	constructor() {
		super(__dirname);
		this.id = "hierarchical-grid";
		this.name = "Hierarchical Grid";
		this.description = "igHierarchicalGrid default template";
		this.projectType = "js";
		this.components = ["Hierarchical Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igHierarchicalGrid"];

		this.gridHelper = new GridHelper();
		this.gridHelper.hierarchical = true;
		this.gridHelper.space = "    ";
		this.hasExtraConfiguration = true;
		this.extraConfigurations = [];
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
	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		// tslint:disable:object-literal-sort-keys
		this.gridHelper.addFeature("Responsive", {
			inherit: false,
			enableVerticalRendering: false,
			columnSettings: [
				{
					columnKey: "Title",
					classes: "ui-hidden-phone"
				},
				{
					columnKey: "Region",
					classes: "ui-hidden-phone"
				},
				{
					columnKey: "City",
					classes: "ui-hidden-phone"
				}
			]
		});
		// tslint:enable:object-literal-sort-keys
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 4);
		const config = { gridfeatures: features };
		return super.generateConfig(name, { extraConfig : config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new HierarchicalGridTemplate();
