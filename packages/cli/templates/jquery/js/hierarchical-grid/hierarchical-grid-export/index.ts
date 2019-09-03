import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class HierarchicalGridExportTemplate extends jQueryTemplate {
	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};

	private gridHelper: GridHelper;
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "hierarchical-grid-export";
		this.name = "Hierarchical Grid Export";
		this.description = "igHierarchicalGrid export template";
		this.projectType = "js";
		this.components = ["Hierarchical Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igHierarchicalGrid", "igExcel", "igGridExcelExporter"];

		this.gridHelper = new GridHelper();
		this.gridHelper.hierarchical = true;
		this.hasExtraConfiguration = true;
		this.extraConfigurations = [];
		this.gridHelper.space = "    ";
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Summaries", "Hiding"],
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

module.exports = new HierarchicalGridExportTemplate();
