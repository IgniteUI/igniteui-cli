import { ControlExtraConfiguration } from "@igniteui/cli-core";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

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
		this.description = "shows basic options of the igNumericEditor, igTextEditor, igCheckbox, " +
		"igPercentEditor, igMaskEditor and igDateEditor, demonstrated with a loan calculator.";
		this.dependencies = ["igEditors", "igCombo", "igValidator"];
	}
}

module.exports = new EditorsCalculationForm();
