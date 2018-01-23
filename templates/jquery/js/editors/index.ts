import * as fs from "fs-extra";
import * as path from "path";
import { MultiTemplateComponent } from "../../../../lib/MultiTemplateComponent";
import { ProjectConfig } from "../../../../lib/ProjectConfig";
import { jQueryTemplate } from "../../../../lib/templates/jQueryTemplate";
import { Util } from "../../../../lib/Util";

const templates = new Map([
	["text-editor",  {name: "Text Editor", widget: "igTextEditor"}],
	["numeric-editor",  {name: "Numeric Editor", widget: "igNumericEditor"}],
	["currency-editor",  {name: "Currency Editor", widget: "igCurrencyEditor"}],
	["mask-editor",  {name: "Mask Editor", widget: "igMaskEditor"}],
	["date-picker",  {name: "Date Picker", widget: "igDatePicker"}]
]);

class EditorsComponent extends MultiTemplateComponent<EditorsJQueryTemplate> {
		constructor() {
			super(EditorsJQueryTemplate, templates);
			this.name = "Editors";
			this.group = "Data Entry";
	}
}

class EditorsJQueryTemplate extends jQueryTemplate {

	public mapItem: { name: string; widget: string; };
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
		const pathsConfig = {};
		const outputPath = path.join(projectPath, this.folderName(name));

		const projectConfig = ProjectConfig.getConfig();
		if (projectConfig != null) {
			pathsConfig["$(igniteuiSource)"] = projectConfig.project.igniteuiSource;
			pathsConfig["$(themePath)"] = projectConfig.project.themePath;
		}
		const scriptTags = this.getScriptTags();
		const cssTags = this.getCssTags();

		const config = {
			"$(cssBlock)": cssTags,
			"$(idPlaceHolder)" : name,
			"$(name)": this.mapItem.name.toString(),
			"$(scriptBlock)": scriptTags,
			"$(theme)": projectConfig.project.theme,
			"$(widget)": this.mapItem.widget.toString()
		};

		// generate scripts/imports based on framework - per template
		// TODO: Refactor to base
		if (!Util.validateTemplate(path.join(__dirname, "files"), projectPath, config, pathsConfig)) {
			return Promise.resolve(false);
		}
		return Util.processTemplates(path.join(__dirname, "files"), outputPath, config, pathsConfig);
	}
}

module.exports = new EditorsComponent();
