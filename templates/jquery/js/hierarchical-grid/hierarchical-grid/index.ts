import * as fs from "fs-extra";
import * as path from "path";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { ProjectConfig } from "../../../../../lib/ProjectConfig";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { Util } from "../../../../../lib/Util";

class HierarchicalGridTemplate extends jQueryTemplate {
	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};

	private gridHelper: GridHelper;
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.extraConfigurations = [];
		this.name = "Hierarchical Grid";
		this.description = "Hierarchical Grid default template";
		this.dependencies = ["igHierarchicalGrid"];
		this.id = "hierarchical-grid";
		this.hasExtraConfiguration = true;

		this.gridHelper = new GridHelper();
		this.gridHelper.hierarchical = true;
		this.gridHelper.space = "    ";
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Sorting", "Paging", "Filtering"],
			default: "",
			key: "features",
			message: "Select features for the igHierarchicalGrid",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const destinationPath = path.join(projectPath, this.folderName(name));
		const config = {};
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

		config["$(gridfeatures)"] = features;
		config["$(componentName)"] = name;
		config["$(cssBlock)"] = this.getCssTags();
		config["$(scriptBlock)"] = this.getScriptTags();
		const pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "files"), destinationPath, config, pathsConfig);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new HierarchicalGridTemplate();
