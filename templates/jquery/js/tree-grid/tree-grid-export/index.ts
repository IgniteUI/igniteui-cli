import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { ControlExtraConfigType, ControlExtraConfiguration } from "../../../../../lib/types/index";

class TreeGridExportTemplate extends jQueryTemplate {

	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};
	private gridHelper: GridHelper;

	constructor() {
		super(__dirname);
		this.extraConfigurations = [];
		this.id = "tree-grid-export";
		this.name = "TreeGrid Export";
		this.description = "igTreeGrid exporting template";
		this.projectType = "js";
		this.components = ["Tree Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igTreeGrid", "igExcel", "igGridExcelExporter"];
		this.gridHelper = new GridHelper();
		this.gridHelper.tree = true;
		this.hasExtraConfiguration = true;
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Filtering", "Hiding"],
			default: "",
			key: "features",
			message: "Select optional features for the export template",
			type: ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 4);
		const config = { treeGridFeatures: features };
		return super.generateConfig(name, { extraConfig : config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new TreeGridExportTemplate();
