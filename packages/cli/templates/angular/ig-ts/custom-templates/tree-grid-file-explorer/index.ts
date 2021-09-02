import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class TreeGridFileExplorerTemplate extends AngularTemplate {
	private gridHelper: GridHelper;
	private extraConfigurations: ControlExtraConfiguration[];
	private userExtraConfiguration = {};

	constructor() {
		super(__dirname);
		this.id = "tree-grid-file-explorer";
		this.name = "Tree Grid File Explorer";
		this.widget = "igTreeGrid";
		this.controlGroup = "Data Grids";
		this.description = "igTreeGrid file explorer template for Angular";
		this.dependencies = ["igTreeGrid"];
		this.projectType = "ig-ts";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.hasExtraConfiguration = true;
		this.extraConfigurations = [];

		this.gridHelper = new GridHelper();
		this.gridHelper.tree = true;
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Sorting"],
			default: "",
			key: "features",
			message: "Select features for the igTreeGrid",
			type: ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}

	public generateConfig(name: string, ...options: any[]): { [key: string]: any } {
		this.gridHelper.addFeature("Selection", { multipleSelection: true });
		this.gridHelper.updateFeature("RowSelectors", {
			checkBoxMode: "biState",
			enableCheckBoxes: true,
			enableRowNumbering: false,
			enableSelectAllForPaging: true,
			rowSelectorColumnWidth: null
		});
		this.gridHelper.addFeature("Filtering", {
			columnSettings: [{
				columnKey: "dateModified",
				condition: "after"
			},
			{
				columnKey: "size",
				condition: "greaterThan"
			}]
		});
		this.gridHelper.addFeature("Paging", { pageSize: 4, mode: "rootLevelOnly" });
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 3);
		const config = { treeGridFeatures: features };
		return super.generateConfig(name, { extraConfig: config });
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new TreeGridFileExplorerTemplate();
