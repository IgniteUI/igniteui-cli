import * as path from "path";
import { MultiTemplateComponent } from "../../../../lib/MultiTemplateComponent";
import { ReactTemplate } from "../../../../lib/templates/ReactTemplate";

const templates = new Map([
	["text-editor", { name: "Text Editor", widget: "igTextEditor" }],
	["numeric-editor", { name: "Numeric Editor", widget: "igNumericEditor" }],
	["currency-editor", { name: "Currency Editor", widget: "igCurrencyEditor" }],
	["mask-editor", { name: "Mask Editor", widget: "igMaskEditor" }],
	["date-picker", { name: "Date Picker", widget: "igDatePicker" }]
]);

class EditorsComponent extends MultiTemplateComponent<EditorsReactTemplate> {
	constructor() {
		super(EditorsReactTemplate, templates);
		this.name = "Editors";
		this.group = "Data Entry";
		this.description = "pick from: igTextEditor, igNumericEditor, igCurrencyEditor, igMaskEditor, igDatePicker.";
	}
}

class EditorsReactTemplate extends ReactTemplate {
	public mapItem: { name: string; widget: string; };
	constructor() {
		super(path.join(__dirname, "editors"));
		this.projectType = "es6";
		this.components = ["Editors"];
		this.controlGroup = "Editors";
		this.dependencies = ["igEditors"];
		this.hasExtraConfiguration = false;
	}
	public generateConfig(name: string, ...options: any[]): { [key: string]: any } {
		this.widget = this.mapItem.widget;
		return super.generateConfig(name, options);
	}
}

module.exports = new EditorsComponent();
