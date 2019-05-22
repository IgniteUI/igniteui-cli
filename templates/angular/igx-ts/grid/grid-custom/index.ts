import { EOL } from "os";
import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";
import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui-cli/core";

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
		this.description = "IgxGrid with optional features like sorting, filtering, editing, etc.";
		this.dependencies = [
			{ import: "IgxGridModule", from: "igniteui-angular" },
			{ import: "IgxCheckboxModule", from: "igniteui-angular" }
		];

		this.hasExtraConfiguration = true;
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}

	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [{
			choices: ["Sorting", "Filtering", "Cell Editing", "Row Editing", "Group By", "Resizing",
				"Row Selection", "Paging", "Column Pinning", "Column Moving", "Column Hiding"],
			default: "",
			key: "columnFeatures",
			message: "Choose features for the igx-grid",
			type: ControlExtraConfigType.MultiChoice
		}];
	}

	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		const columnFeatures = [];
		const columnBoolFeatures = [];
		const gridFeatures = [];
		const featureUrl = "https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid_";
		const anchorWrapper = {
			start: `<a href="`,
			// tslint:disable-next-line:object-literal-sort-keys
			href: ``,
			middle: `" target="_blank">`,
			text: ``,
			end: `</a>`
		};
		let checkBoxBind = `[checked]="cell.value" [disabled]="true"`;
		const datePickerEditor = "";
		let selectedFeatures = "";
		let columnPinning = "";
		let groupByColumn = "";
		let addGridToolbar = false;

		if (this.userExtraConfiguration["columnFeatures"]) {
			const features = this.userExtraConfiguration["columnFeatures"] as string[];
			const featuresUrls = [];
			for (const feature of this.userExtraConfiguration["columnFeatures"] as string[]) {
				switch (feature) {
					case "Sorting":
					case "Filtering":
					case "Resizing":
						const text = `[${feature.toLowerCase().replace("ing", "able")}]="true"`;
						columnFeatures.push(text);
						columnBoolFeatures.push(text);
						break;
					case "Column Moving":
						columnFeatures.push('[movable]="true"');
						columnBoolFeatures.push('[movable]="true"');
						break;
					case "Column Hiding":
						gridFeatures.push('[columnHiding]="true"');
						addGridToolbar = true;
						break;
					case "Cell Editing":
						columnFeatures.push(`[editable]="true"`);
						checkBoxBind = `[ngModel]="cell.value" (ngModelChange)="cell.update($event)"`;
						// enable Date Picker, ngModel
						// this.dependencies.push({ import: "IgxDatePickerModule", from: "igniteui-angular" });
						this.dependencies.push({ import: "FormsModule", from: "@angular/forms" });
						// datePickerEditor = EOL +
						// 	`<ng-template igxCellEditor let-cell="cell">` + EOL +
						// 	`  <igx-date-picker cancelButtonLabel="cancel" todayButtonLabel="today" [(ngModel)]="cell.value"` +
						// 	` (onOpen)="pickerOpen()" (onClose)="pickerClose()">` + EOL +
						// 	`  </igx-date-picker>` + EOL +
						// 	`</ng-template>`;
						// TODO: make a Util .pad()
						// datePickerEditor = datePickerEditor.replace(/([\r\n]+)/g, `$&${"  ".repeat(3)}`);
						break;
						case "Row Editing":
						gridFeatures.push(`[rowEditable]="true"`);
						this.dependencies.push({ import: "IgxDatePickerModule", from: "igniteui-angular" });
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
						gridFeatures.push('[columnPinning]="true"');
						addGridToolbar = true;
						break;
					case "Group By":
						groupByColumn = '[groupable]="true"';
						break;
				}
				switch (feature) {
					case "Sorting":
					case "Filtering":
					case "Paging":
						featuresUrls.push(`${featureUrl}${feature}.html`);
						break;
					case "Resizing":
						featuresUrls.push(`${featureUrl}column_resizing.html`);
						break;
					case "Column Pinning":
						featuresUrls.push(`${featureUrl}column_pinning.html`);
						break;
					case "Cell Editing":
						featuresUrls.push(`${featureUrl}editing.html`);
						break;
					case "Row Editing":
						featuresUrls.push(`${featureUrl}row_editing.html`);
						break;
					case "Column Moving":
						featuresUrls.push(`${featureUrl}column_moving.html`);
						break;
					case "Column Hiding":
						featuresUrls.push(`${featureUrl}column_hiding.html`);
						break;
					case "Row Selection":
						featuresUrls.push(`${featureUrl}selection.html`);
						break;
					case "Group By":
						featuresUrls.push(`${featureUrl}groupby.html`);
						break;
				}
			}
			selectedFeatures = features.map((e, i) => {
				anchorWrapper.href = featuresUrls[i];
				anchorWrapper.text = e;
				return ` ${anchorWrapper.start}${anchorWrapper.href}${anchorWrapper.middle}` +
				`${anchorWrapper.text}${anchorWrapper.end}`;
			}).toString();
			if (selectedFeatures.length > 0) {
				selectedFeatures = `<p>Active Features: ${selectedFeatures}</p>`;
			}
			if (addGridToolbar) {
				gridFeatures.push('[showToolbar]="true" toolbarTitle="Employees"');
			}
		}
		const extraConfig = {
			checkBoxBind,
			columnPinning,
			datePickerEditor,
			groupByColumn,
			selectedFeatures,
			columnBoolFeatures: columnBoolFeatures.join(" "),
			columnFeatures: columnFeatures.join(" "),
			gridFeatures: gridFeatures.join(" ")
		};
		return super.generateConfig(name, { extraConfig });
	}
}
module.exports = new IgxCustomGridTemplate();
