import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class TreeGridEditingTemplate extends AngularTemplate {
	private gridHelper: GridHelper;
	private extraConfigurations: ControlExtraConfiguration[];
	private userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.id = "tree-grid-editing";
		this.name = "TreeGrid Editing";
		this.widget = "igTreeGrid";
		this.controlGroup = "Data Grids";
		this.description = "igTreeGrid editing template for Angular";
		this.dependencies = ["igTreeGrid"];
		this.projectType = "ig-ts";
		this.listInComponentTemplates = true;
		this.hasExtraConfiguration = true;
		this.extraConfigurations = [];

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

	public generateConfig(name: string, ...options: any[]): { [key: string]: any } {
		this.gridHelper.addFeature("Updating", {
			columnSettings: [
				{
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
				}
			]
		});
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 3);
		const config = { treeGridFeatures: features };
		return super.generateConfig(name, { extraConfig: config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new TreeGridEditingTemplate();
