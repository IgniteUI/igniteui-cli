import * as path from "path";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";
import { Util } from "../../../../../lib/Util";

class EditorsCalculationForm extends AngularTemplate {
	private extraConfigurations: ControlExtraConfiguration[];
	private userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.id = "editors-calculation-form";
		this.projectType = "ig-ts";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "Editors Data Calculation Form";
		this.description = "This template shows basic options of the igNumericEditor, igTextEditor, igCheckbox, " +
		"igPercentEditor, igMaskEditor and igDateEditor, demonstrated with a loan calculator.";
		this.dependencies = ["igEditors", "igCombo", "igValidator"];
	}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const config = {
			"$(ClassName)": Util.className(name),
			"__name__": this.fileName(name),
			"__path__": this.folderName(name)
		};
		const pathsConfig = {};
		// TODO: Refactor to base
		if (!Util.validateTemplate(path.join(__dirname, "files"), projectPath, config, pathsConfig)) {
			return Promise.resolve(false);
		}
		return Util.processTemplates(path.join(__dirname, "files"), projectPath, config, pathsConfig);
	}
}

module.exports = new EditorsCalculationForm();
