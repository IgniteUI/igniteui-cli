import { ControlExtraConfigType, ControlExtraConfiguration, TemplateDependency } from "@igniteui/cli-core";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

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
			{
				standalone: true,
				import: "IgxTreeGridComponent",
				from: "<%=igxPackage%>"
			},
			{
				standalone: true,
				import: "IgxColumnComponent",
				from: "<%=igxPackage%>"
			}
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

	public generateConfig(name: string, ...options: any[]): { [key: string]: any } {
		let additionalMarkup = "";
		/** starts with empty string to create a new line on join when something else is added */
		const additionalElements = [""];
		const toolbarActions = [];
		const columnFeatures = [];
		const columnBoolFeatures = [];
		const treeGridFeatures = [];
		const featureUrl = "https://www.infragistics.com/products/ignite-ui-angular/angular/components/treegrid/";

		const anchorWrapper = {
			start: `<a href="`,
			href: ``,
			middle: `" target="_blank">`,
			text: ``,
			end: `</a>`
		};
		let selectedFeatures = "";
		let columnPinning = "";
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
						treeGridFeatures.push('[moving]="true"');
						break;
					case "Column Hiding":
						toolbarActions.push("      <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>");
						break;
					case "Cell Editing":
						columnFeatures.push(`[editable]="true"`);
						break;
					case "Row Editing":
						treeGridFeatures.push(`[rowEditable]="true"`);
						break;
					case "Row Selection":
						const gridFeatureText = `rowSelection="multiple"`;
						treeGridFeatures.push(gridFeatureText);
						break;
					case "Paging":
						additionalElements.push(`  <igx-paginator></igx-paginator>`);
						this.dependencies.push({
							standalone: true,
							import: "IgxPaginatorComponent",
							from: "<%=igxPackage%>"
						});
						break;
					case "Column Pinning":
						columnPinning = '[pinned]="true"';
						toolbarActions.push("      <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>");
						break;
				}
				switch (feature) {
					case "Sorting":
					case "Filtering":
					case "Editing":
					case "Paging":
						featuresUrls.push(`${featureUrl}${feature.toLocaleLowerCase()}`);
						break;
					case "Resizing":
						featuresUrls.push(`${featureUrl}column-resizing`);
						break;
					case "Column Pinning":
						featuresUrls.push(`${featureUrl}column-pinning`);
						break;
					case "Cell Editing":
						featuresUrls.push(`${featureUrl}editing`);
						break;
					case "Row Editing":
						featuresUrls.push(`${featureUrl}row-editing`);
						break;
					case "Column Moving":
						featuresUrls.push(`${featureUrl}column-moving`);
						break;
					case "Column Hiding":
						featuresUrls.push(`${featureUrl}column-hiding`);
						break;
					case "Row Selection":
						featuresUrls.push(`${featureUrl}selection`);
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
			if (toolbarActions.length) {
				this.dependencies = [
					...this.dependencies,
					...[
						{
							standalone: true,
							import: "IgxGridToolbarComponent",
							from: "<%=igxPackage%>"
						},
						{
							standalone: true,
							import: "IgxGridToolbarTitleComponent",
							from: "<%=igxPackage%>"
						},
						{
							standalone: true,
							import: "IgxGridToolbarActionsComponent",
							from: "<%=igxPackage%>"
						},
						{
							standalone: true,
							import: "IgxGridToolbarPinningComponent",
							from: "<%=igxPackage%>"
						},
						{
							standalone: true,
							import: "IgxGridToolbarHidingComponent",
							from: "<%=igxPackage%>"
						}
					]
				];

				const parts = [
					"  <igx-grid-toolbar>",
					"    <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>",
					"    <igx-grid-toolbar-actions>",
					...toolbarActions,
					"    </igx-grid-toolbar-actions>",
					"  </igx-grid-toolbar>"
				];
				additionalElements.splice(1, 0, parts.join("\n"));
			}
			additionalMarkup = additionalElements.join("\n");
		}

		const extraConfig = {
			additionalMarkup,
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
