import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class DataCalculationFormTemplate extends jQueryTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "editors-calculation-form";
		this.framework = "jquery";
		this.projectType = "js";
		this.components = ["igTextEditor", "igCurrencyEditor", "igCombo", "igPercentEditor", "igDatePicker", "igNumericEditor", "igCheckboxEditor", "igValidator"];
		this.listInCustomTemplates = true;
		this.name = "Editors - Data Calculation Form";
		this.description = "This tempalte shows basic options of the igNumericEditor, igTextEditor, igCheckbox, igPercentEditor, igMaskEditor and igDateEditor, demonstrated with a loan calculator.";
		this.dependencies = ["igTextEditor", "igCurrencyEditor", "igCombo", "igPercentEditor", "igDatePicker", "igNumericEditor", "igCheckboxEditor"];
	}

}
module.exports = new DataCalculationFormTemplate();