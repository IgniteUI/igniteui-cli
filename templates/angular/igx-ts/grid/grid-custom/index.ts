import { EOL } from "os";
import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxCustomGridTemplate extends IgniteUIForAngularTemplate {
	private userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.components = ["Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "custom-grid";
		this.projectType = "igx-ts";
		this.name = "Custom Grid";
		this.description = "IgxGrid with optional sorting, filtering and editing features.";
		this.dependencies = [
			{ import: "IgxGridModule", from: "igniteui-angular/main", root: true },
			{ import: "IgxCheckboxModule", from: "igniteui-angular/main" }
		];

		this.hasExtraConfiguration = true;
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}

	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [{
			choices: ["Sorting", "Filtering", "Editing"],
			default: "",
			key: "columnFeatures",
			message: "Choose features for the igx-grid",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		}];
	}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const columnFeatures = [];
		const columnBoolFeatures = [];
		let checkBoxBind = `[checked]="cell.value" [disabled]="true"`;
		let datePickerEditor = "";
		let selectedFeatures = "";

		if (this.userExtraConfiguration["columnFeatures"]) {
			const features = this.userExtraConfiguration["columnFeatures"] as string[];
			for (const feature of this.userExtraConfiguration["columnFeatures"] as string[]) {
				switch (feature) {
				case "Sorting":
				case "Filtering":
					const text = `[${feature.toLowerCase().replace("ing", "able")}]="true"`;
					columnFeatures.push(text);
					columnBoolFeatures.push(text);
					break;
				case "Editing":
					columnFeatures.push(`[editable]="true"`);
					checkBoxBind = `[(ngModel)]="cell.value"`;
					// enable Date Picker, ngModel
					this.dependencies.push({ import: "IgxDatePickerModule", from: "igniteui-angular/main" });
					this.dependencies.push({ import: "FormsModule", from: "@angular/forms" });
					datePickerEditor = EOL +
					`<ng-template igxCellEditor let-cell="cell">` + EOL +
					`  <igx-datePicker cancelButtonLabel="cancel" todayButtonLabel="today" [(ngModel)]="cell.value">` + EOL +
					`  </igx-datePicker>` + EOL +
					`</ng-template>`;
					// TODO: make a Util .pad()
					datePickerEditor = datePickerEditor.replace(/([\r\n]+)/g, `$&${ "  ".repeat(3) }`);
					break;
				}
			}
			selectedFeatures = features.toString();
		}
		const extraConfig = {
			"$(checkBoxBind)": checkBoxBind,
			"$(columnBoolFeatures)": columnBoolFeatures.join(" "),
			"$(columnFeatures)": columnFeatures.join(" "),
			"$(datePickerEditor)": datePickerEditor,
			"$(selectedFeatures)": selectedFeatures
		};
		return super.generateFiles(projectPath, name, { extraConfig });
	}
}
module.exports = new IgxCustomGridTemplate();
