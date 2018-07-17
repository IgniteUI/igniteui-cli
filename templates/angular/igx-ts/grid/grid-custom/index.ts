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
			{ import: "IgxGridModule", from: "igniteui-angular", root: true },
			{ import: "IgxCheckboxModule", from: "igniteui-angular" }
		];

		this.hasExtraConfiguration = true;
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}

	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [{
			choices: ["Sorting", "Filtering", "Editing", "Summaries", "Resizing",
			"Row Selection", "Paging", "Column Pinning"],
			default: "",
			key: "columnFeatures",
			message: "Choose features for the igx-grid",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		}];
	}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
		const columnFeatures = [];
		const columnBoolFeatures = [];
		const gridFeatures = [];
		let checkBoxBind = `[checked]="cell.value" [disabled]="true"`;
		let datePickerEditor = "";
		let selectedFeatures = "";
		let summaryColumn = "";
		let columnPinning = "";

		if (this.userExtraConfiguration["columnFeatures"]) {
			const features = this.userExtraConfiguration["columnFeatures"] as string[];
			for (const feature of this.userExtraConfiguration["columnFeatures"] as string[]) {
				switch (feature) {
				case "Sorting":
				case "Filtering":
				case "Resizing":
					const text = `[${feature.toLowerCase().replace("ing", "able")}]="true"`;
					columnFeatures.push(text);
					columnBoolFeatures.push(text);
					break;
				case "Editing":
					columnFeatures.push(`[editable]="true"`);
					checkBoxBind = `[ngModel]="cell.value" (ngModelChange)="cell.update($event)"`;
					// enable Date Picker, ngModel
					this.dependencies.push({ import: "IgxDatePickerModule", from: "igniteui-angular" });
					this.dependencies.push({ import: "FormsModule", from: "@angular/forms" });
					datePickerEditor = EOL +
					`<ng-template igxCellEditor let-cell="cell">` + EOL +
					`  <igx-datePicker cancelButtonLabel="cancel" todayButtonLabel="today" [(ngModel)]="cell.value"` +
						` (onOpen)="pickerOpen()" (onClose)="pickerClose()">` + EOL +
					`  </igx-datePicker>` + EOL +
					`</ng-template>`;
					// TODO: make a Util .pad()
					datePickerEditor = datePickerEditor.replace(/([\r\n]+)/g, `$&${ "  ".repeat(3) }`);
					break;
					case "Summaries":
					summaryColumn = '[hasSummary]="true"';
					break;
					case "Row Selection":
					const gridFeatureText = `[rowSelectable]="true"`;
					gridFeatures.push(gridFeatureText);
					break;
					case "Paging":
					gridFeatures.push(`[paging]="true"`);
					break;
					case "Column Pinning":
					columnPinning = '[pinned]="true"';
					break;
				}
			}
			selectedFeatures = features.toString();
		}
		const extraConfig = {
			"$(checkBoxBind)": checkBoxBind,
			"$(columnBoolFeatures)": columnBoolFeatures.join(" "),
			"$(columnFeatures)": columnFeatures.join(" "),
			"$(columnPinning)": columnPinning,
			"$(datePickerEditor)": datePickerEditor,
			"$(gridFeatures)": gridFeatures.join(" "),
			"$(selectedFeatures)": selectedFeatures,
			"$(summaryColumn)": summaryColumn
		};
		return super.generateFiles(projectPath, name, { extraConfig });
	}
}
module.exports = new IgxCustomGridTemplate();
