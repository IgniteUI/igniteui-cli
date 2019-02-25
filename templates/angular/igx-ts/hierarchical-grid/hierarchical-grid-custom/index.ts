import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxHierarchicalGridTemplate extends IgniteUIForAngularTemplate {
	private userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.components = ["Hierarchical Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "hierarchical-grid-custom";
		this.projectType = "igx-ts";
		this.name = "Custom Hierarchical Grid";
		this.description = "a customizable IgxHierarchicalGrid";
		this.dependencies = [
			{ import: ["IgxGridModule", "IgxHierarchicalGridModule"], from: "igniteui-angular" }
		];

		this.hasExtraConfiguration = true;
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}

	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [{
			choices: ["Sorting", "Filtering", "Cell Editing", "Resizing", "Row Selection",
				"Paging", "Column Pinning", "Column Moving", "Column Hiding"],
			default: "",
			key: "columnFeatures",
			message: "Choose features for the igx-hierarchical-grid",
			type: Enumerations.ControlExtraConfigType.MultiChoice
		}];
	}

	public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
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
		let selectedFeatures = "";
		let columnPinning = "";
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
						break;
					case "Column Hiding":
						gridFeatures.push('[showToolbar]="true" [columnHiding]="true" [toolbarTitle]="Singers"' +
							' columnHidingTitle="Column Hiding" hiddenColumnText="Hidden"');
						addGridToolbar = true;
						break;
					case "Cell Editing":
						columnFeatures.push(`[editable]="true"`);
						this.dependencies.push({ import: "FormsModule", from: "@angular/forms" });
						break;
					case "Row Selection":
						const gridFeatureText = `[rowSelectable]="true"`;
						gridFeatures.push(gridFeatureText);
						break;
					case "Paging":
						gridFeatures.push(`[paging]="true" [perPage]="5"`);
						break;
					case "Column Pinning":
						columnPinning = '[pinned]="true"';
						gridFeatures.push('[columnPinning]="true"');
						addGridToolbar = true;
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
					case "Column Moving":
						featuresUrls.push(`${featureUrl}column_moving.html`);
						break;
					case "Column Hiding":
						featuresUrls.push(`${featureUrl}column_hiding.html`);
						break;
					case "Row Selection":
						featuresUrls.push(`${featureUrl}selection.html`);
						break;
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
		}
		const extraConfig = {
			// "$(checkBoxBind)": checkBoxBind,
			// "$(columnBoolFeatures)": columnBoolFeatures.join(" "),
			"$(columnFeatures)": columnFeatures.join(" "),
			// "$(columnPinning)": columnPinning,
			// "$(datePickerEditor)": datePickerEditor,
			"$(gridFeatures)": gridFeatures.join(" "),
			"$(pinningTemplate)": "",
			"$(selectedFeatures)": selectedFeatures,
		};
		return super.generateFiles(projectPath, name, { extraConfig });
	}

	//tslint:disable
	private pinningTemplate(columnName: string): string {
		return `
		<ng-template igxHeader>
			<div class="title-inner">
				<span style="float:left">${columnName}</span>
				<igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(${columnName.toLowerCase()})"></igx-icon>
			</div>
		</ng-template>
		`;
	}
}
module.exports = new IgxHierarchicalGridTemplate();
