import * as path from "path";
import { MultiTemplateComponent } from "../../../../lib/MultiTemplateComponent";
import { AngularTemplate } from "../../../../lib/templates/AngularTemplate";

const templates = new Map([
	["text-editor",  {name: "Text Editor", widget: "ig-text-editor"}],
	["numeric-editor",  {name: "Numeric Editor", widget: "ig-numeric-editor"}],
	["currency-editor",  {name: "Currency Editor", widget: "ig-currency-editor"}],
	["mask-editor",  {name: "Mask Editor", widget: "ig-mask-editor"}],
	["date-picker",  {name: "Date Picker", widget: "ig-date-picker"}]
]);

class EditorsComponent extends MultiTemplateComponent<EditorsAngularComponent> {
	constructor() {
		super(EditorsAngularComponent, templates);
		this.name = "Editors";
		this.group = "Data Entry";
		this.description = "pick from: igTextEditor, igNumericEditor, igCurrencyEditor, igMaskEditor, igDatePicker.";
	}
}

class EditorsAngularComponent extends AngularTemplate {
	public mapItem: { name: string; widget: string; };
	constructor() {
		super(path.join(__dirname, "default"));
		this.projectType = "ig-ts";
		this.components = ["Editors"];
		this.controlGroup = "Editors";
		this.dependencies = ["igEditors"];
		this.hasExtraConfiguration = false;
	}
	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		this.widget = this.mapItem.widget;
		return super.generateFiles(projectPath, name, options);
	}
}

module.exports = new EditorsComponent();
