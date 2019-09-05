import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class TreeGridEditingTemplate extends jQueryTemplate {

	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};
	private gridHelper: GridHelper;

	constructor() {
		super(__dirname);
		this.extraConfigurations = [];
		this.id = "tree-grid-editing";
		this.name = "TreeGrid Editing";
		this.description = "igTreeGrid editing template";
		this.projectType = "js";
		this.components = ["Tree Grid"];
		this.controlGroup = "Data Grids";
		this.dependencies = ["igTreeGrid"];

		this.hasExtraConfiguration = true;
		this.listInComponentTemplates = true;

		this.gridHelper = new GridHelper();
		this.gridHelper.tree = true;
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Sorting", "Filtering"],
			default: "",
			key: "features",
			message: "Select optional features for the editing template",
			type: ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		this.gridHelper.addFeature("Updating", {
			columnSettings: [{
				columnKey: "progress",
				editorOptions: {
					buttonType: "spin"
				},
				editorType: "currency"
			},
			{
				columnKey: "start",
				editorType: "datepicker"
			},
			{
				columnKey: "finish",
				editorType: "datepicker"
			}]
		});
		const features = this.gridHelper.generateFeatures(
			this.userExtraConfiguration["features"], 4);
		const config = { treeGridFeatures: features };
		return super.generateConfig(name, { extraConfig : config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new TreeGridEditingTemplate();
