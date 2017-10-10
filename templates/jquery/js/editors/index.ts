import * as path from "path";
import * as fs from "fs-extra";
import { MultiTemplateComponent } from "../../../../lib/MultiTemplateComponent";
import { Util } from "../../../../lib/Util";
import { jQueryTemplate } from "../../../../lib/templates/jQueryTemplate";
import { ProjectConfig } from "../../../../lib/ProjectConfig";

var templates = new Map([
	["text-editor",  {name:"Text Editor", widget:"igTextEditor"}], 
	["numeric-editor",  {name:"Numeric Editor", widget:"igNumericEditor"}], 
	["currency-editor",  {name:"Currency Editor", widget:"igCurrencyEditor"}], 
	["mask-editor",  {name:"Mask Editor", widget:"igMaskEditor"}], 
	["date-picker",  {name:"Date Picker", widget:"igDatePicker"}]
]); 

class EditorsComponent extends MultiTemplateComponent<EditorsJQueryTemplate> {
		constructor() {
			super(EditorsJQueryTemplate, templates);
			this.name = "Editors"; 
			this.group = "Data Entry"; 
	}
}

class EditorsJQueryTemplate extends jQueryTemplate {

	mapItem: { name: string; widget: string; };
	constructor() {
		super(__dirname);
		this.components = ["Editors"];
		this.controlGroup = "Editors";
		this.listInComponentTemplates = true;
		this.framework = "jquery";
		this.projectType = "js";
		this.dependencies = ["igEditors"];
	}
	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		var pathsConfig = {};
		var outputPath = path.join(projectPath, this.folderName(name));
		
		var pathsConfig = {};
		var projectConfig = ProjectConfig.getConfig();
		if (projectConfig != null) {
			pathsConfig["$(igniteuiSource)"] = projectConfig.project.igniteuiSource;
			pathsConfig["$(themePath)"] = projectConfig.project.themePath;
		}
		var scriptTags = this.getScriptTags();
		var cssTags = this.getCssTags();
		
		var config = {
			"$(name)": this.mapItem.name.toString(),
			"$(widget)": this.mapItem.widget.toString(),
			"$(idPlaceHolder)" : name,
			"$(cssBlock)": cssTags,
			"$(theme)": projectConfig.project.theme,
			"$(scriptBlock)": scriptTags
		};
		
		// generate scripts/imports based on framework - per template
		return Util.processTemplates(path.join(__dirname, "files"), outputPath, config, pathsConfig);
	}
}

module.exports = new EditorsComponent();