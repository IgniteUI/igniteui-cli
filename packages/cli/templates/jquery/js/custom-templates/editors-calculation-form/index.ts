import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class DataCalculationFormTemplate extends jQueryTemplate {
	constructor() {
		super(__dirname);
		this.id = "editors-calculation-form";
		this.projectType = "js";
		this.components = [ "Editors", "Combo", "Validator" ];
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "Editors Data Calculation Form";
		this.description = "shows basic options of the igNumericEditor, igTextEditor, igCheckbox, " +
			"igPercentEditor, igMaskEditor and igDateEditor, demonstrated with a loan calculator.";
		this.dependencies = [ "igEditors", "igCombo", "igValidator"];
	}

}
module.exports = new DataCalculationFormTemplate();
