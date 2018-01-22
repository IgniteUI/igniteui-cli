import * as fs from "fs-extra";
import * as path from "path";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { Util } from "../../../../../lib/Util";

class GridCustomTemplate extends jQueryTemplate {
	public extraConfigurations: ControlExtraConfiguration[];
	public userExtraConfiguration: {} = {};

	private gridHelper: GridHelper;

	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.extraConfigurations = [];
		this.name = "Custom Grid";
		this.description = "Grid Custom template";
		this.dependencies = ["igGrid"];
		this.id = "grid-custom";

		this.gridHelper = new GridHelper();
		this.gridHelper.space = "    ";
		this.hasExtraConfiguration = true;
		const featureConfiguration: ControlExtraConfiguration = {
			choices: [
				"Sorting", "Selection", "Updating", "Filtering",
				"ColumnMoving", "Summaries", "Resizing", "Hiding", "Paging"
			],
			default: "",
			key: "features",
			message: "Select features for the custom igGrid",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		};
		this.extraConfigurations.push(featureConfiguration);
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const destinationPath = path.join(projectPath, this.folderName(name));
		//read html
		const config = {};
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 4);

		config["$(gridfeatures)"] = features;
		config["$(componentName)"] = name;
		config["$(cssBlock)"] = this.getCssTags();
		config["$(scriptBlock)"] = this.getScriptTags();
		const pathsConfig = {};
		// TODO: Refactor to base
		if (!Util.validateTemplate(path.join(__dirname, "files"), destinationPath, config, pathsConfig)) {
			return Promise.resolve(false);
		}
		return Util.processTemplates(path.join(__dirname, "files"), destinationPath, config, pathsConfig);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new GridCustomTemplate();
