import * as path from "path";
import * as fs from "fs-extra";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { Util } from "../../../../../lib/Util";

class GridEditingTemplate extends jQueryTemplate {
	private gridHelper: GridHelper;
	extraConfigurations: ControlExtraConfiguration[];

	public userExtraConfiguration: {};


	/**
	 *
	 */
	constructor() {
		super(__dirname)
		this.extraConfigurations = [];
		this.name = "Custom Grid";
		this.description = "Grid Custom template";
		this.dependencies = ["igGrid"];
		this.id = "grid-custom";

		this.gridHelper = new GridHelper();
		this.gridHelper.space = "    ";
		this.hasExtraConfiguration = true;
		var featureConfiguration: ControlExtraConfiguration = {
			key: "features",
			choices: ["Sorting", "Selection","Updating", "Filtering", "ColumnMoving", "Summaries", "Resizing", "Hiding", "Paging"],
			default: "",
			type: Enumerations.ControlExtraConfigType.MultiChoice,
			message: "Select features for the custom igGrid"
		}
		this.extraConfigurations.push(featureConfiguration);
	}
	setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}
	generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const destinationPath = path.join(projectPath, this.folderName(name));
		//read html
		const config = {};
		const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 4);

		config["$(gridfeatures)"] = features;
		config["$(componentName)"] = name;
		config["$(cssBlock)"] = this.getCssTags();
		config["$(scriptBlock)"] = this.getScriptTags();
		var pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "files"), destinationPath, config, pathsConfig);
	}
	getExtraConfiguration(): ControlExtraConfiguration[] {
		return this.extraConfigurations;
	}
}

module.exports = new GridEditingTemplate();