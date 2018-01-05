import * as path from "path";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";
import { Util } from "../../../../../lib/Util";
import { TreeGridFeatureHelper } from "../../../../jquery/js/tree-grid/treegridfeaturehelper";

class TreeGridCustomTemplate extends AngularTemplate {
	private extraConfigurations: ControlExtraConfiguration[];
	private userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.id = "tree-grid-custom";
		this.name = "Custom TreeGrid";
		this.controlGroup = "Data Grids";
		this.description = "Tree Grid custom template for Angular";
		this.dependencies = ["igTreeGrid"];
		this.projectType = "ig-ts";
		this.listInComponentTemplates = true;
		this.hasExtraConfiguration = true;
		this.extraConfigurations = [];
		const featureConfiguration: ControlExtraConfiguration = {
			choices: ["Sorting", "RowSelectors", "Filtering", "Updating", "Filtering", "ColumnMoving", "Resizing", "Hiding"],
			default: "",
			key: "features",
			message: "Select features for the igTreeGrid",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const config = {
			"$(ClassName)": this.className(name),
			"__name__": this.fileName(name),
			"__path__": this.folderName(name)
		};
		const features = TreeGridFeatureHelper.generateFeatures(this.userExtraConfiguration["features"]);

		config["$(treeGridFeatures)"] = features;
		config["$(componentName)"] = name;
		const pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "files"), projectPath, config, pathsConfig);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new TreeGridCustomTemplate();
