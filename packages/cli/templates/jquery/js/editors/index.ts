import { MultiTemplateComponent } from "../../../../lib/MultiTemplateComponent";
import { jQueryTemplate } from "../../../../lib/templates/jQueryTemplate";

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
			this.description = "pick from: igTextEditor, igNumericEditor, igCurrencyEditor, igMaskEditor, igDatePicker.";
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
	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		const extraConfig = {
			widget: this.mapItem.widget.toString()
		};

		return super.generateConfig(name, { extraConfig });
	}
}

module.exports = new EditorsComponent();
