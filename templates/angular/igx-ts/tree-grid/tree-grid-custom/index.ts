import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";
import { ControlExtraConfigType, ControlExtraConfiguration } from "../../../../../lib/types/index";

class IgxCustomTreeGridTemplate extends IgniteUIForAngularTemplate {
	private userExtraConfiguration: {} = {};

	constructor() {
		super(__dirname);
		this.components = ["Tree Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "custom-tree-grid";
		this.projectType = "igx-ts";
		this.name = "Custom Tree Grid";
		this.description = "IgxTreeGrid with optional features like sorting, filtering, row editing, etc.";
		this.dependencies = [
			{ import: "IgxTreeGridModule", from: "igniteui-angular" }
		];

		this.hasExtraConfiguration = true;
	}

	public setExtraConfiguration(extraConfigKeys: {}) {
		this.userExtraConfiguration = extraConfigKeys;
	}

	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [{
			choices: ["Sorting", "Filtering", "Cell Editing", "Row Editing", "Resizing",
				"Row Selection", "Paging", "Column Pinning", "Column Moving", "Column Hiding"],
			default: "",
			key: "columnFeatures",
			message: "Choose features for the igx-tree-grid",
			type: ControlExtraConfigType.MultiChoice
		}];
	}

	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		const columnFeatures = [];
		const columnBoolFeatures = [];
		const treeGridFeatures = [];
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
					this.formatTreeGridFeatures(feature, columnFeatures, columnBoolFeatures);
					break;
					case "Filtering":
					this.formatTreeGridFeatures(feature, columnFeatures, columnBoolFeatures);
					treeGridFeatures.push('[allowFiltering]="true"');
					break;
					case "Resizing":
						this.formatTreeGridFeatures(feature, columnFeatures, columnBoolFeatures);
						break;
					case "Column Moving":
						columnFeatures.push('[movable]="true"');
						columnBoolFeatures.push('[movable]="true"');
						break;
					case "Column Hiding":
						treeGridFeatures.push('[columnHiding]="true"');
						addGridToolbar = true;
						break;
					case "Cell Editing":
						columnFeatures.push(`[editable]="true"`);
						break;
					case "Row Editing":
						treeGridFeatures.push(`[rowEditable]="true"`);
						break;
					case "Row Selection":
						const gridFeatureText = `[rowSelectable]="true"`;
						treeGridFeatures.push(gridFeatureText);
						break;
					case "Paging":
						treeGridFeatures.push(`[paging]="true"`);
						break;
					case "Column Pinning":
						columnPinning = '[pinned]="true"';
						treeGridFeatures.push('[columnPinning]="true"');
						addGridToolbar = true;
						break;
				}
				switch (feature) {
					case "Sorting":
					case "Filtering":
					case "Editing":
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
						featuresUrls.push(`${featureUrl}cell_editing.html`);
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
				}
			}
			selectedFeatures = features.map((e, i) => {
				anchorWrapper.href = featuresUrls[i];
				anchorWrapper.text = e;
				return ` ${anchorWrapper.start}${anchorWrapper.href}${anchorWrapper.middle}` +
				`${anchorWrapper.text}${anchorWrapper.end}`;
			}).toString();
			if (selectedFeatures.length > 0) {
				selectedFeatures = `<p>Active Features:<br />${selectedFeatures}</p>`;
			}
			if (addGridToolbar) {
				treeGridFeatures.push('[showToolbar]="true" toolbarTitle="Employees"');
			}
		}
		const extraConfig = {
			columnPinning,
			selectedFeatures,
			columnBoolFeatures: columnBoolFeatures.join(" "),
			columnFeatures: columnFeatures.join(" "),
			treeGridFeatures: treeGridFeatures.join(" ")
		};
		return super.generateConfig(name, { extraConfig });
	}

	private formatTreeGridFeatures(feature: string, columnFeatures: any[], columnBoolFeatures: any[]) {
		const text = `[${feature.toLowerCase().replace("ing", "able")}]="true"`;
		columnFeatures.push(text);
		columnBoolFeatures.push(text);
	}
}
module.exports = new IgxCustomTreeGridTemplate();
