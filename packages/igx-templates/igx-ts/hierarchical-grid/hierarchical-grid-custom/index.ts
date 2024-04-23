import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";
import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";

class IgxHierarchicalGridTemplate extends IgniteUIForAngularTemplate {
	private userExtraConfiguration = {};
	private usePinning: boolean;
	/** starts with empty string to create a new line on join when something else is added */
	private additionalElements = [""];
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
			{
				import: [
					"IgxHierarchicalGridComponent",
					"IgxRowIslandComponent",
					"IgxColumnComponent",
					"IgxIconComponent"
				],
				from: "<%=igxPackage%>",
				standalone: true
			}
		];
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
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
			type: ControlExtraConfigType.MultiChoice
		}];
	}

	public generateConfig(name: string, ...options: any[]): {[key: string]: any} {
		const columnFeatures = [];
		const gridFeatures = [];
		const extraConfig = {
			selectedFeatures: this.getSelectedFeatures(columnFeatures, gridFeatures),

			// must be assigned after getSelectedFeatures evaluates, TODO: refactor method
			additionalMarkup: this.additionalElements.join("\n"),

			// tslint:disable-next-line: object-literal-sort-keys
			columnFeatures: columnFeatures.join(" "),
			gridFeatures: gridFeatures.join(" "),
			rowIslandFeatures: gridFeatures.join(" ").replace(/Singers/g, "Albums")
		};
		if (this.usePinning) {
			Object.assign(extraConfig, {
				albumPin: this.pinningTemplate("Album"),
				artistPin: this.pinningTemplate("Artist"),
				awardsPin: this.pinningTemplate("Awards"),
				grammyPin: this.pinningTemplate("Grammy"),
				launchPin: this.pinningTemplate("Launch"),
				nominationsPin: this.pinningTemplate("Nominations")
			});
		}

		return super.generateConfig(name, { extraConfig });
	}

	//tslint:disable
	private pinningTemplate(columnName: string): string {
		// https://github.com/IgniteUI/igniteui-angular/issues/3998
		// Defining let-columnRef="column" does not seem to work.
		// Angular passes in the $implicit(ly) defined value.
		return `<ng-template igxHeader let-columnRef>
			<div class="title-inner">
				<span style="float:left">${columnName}</span>
				<igx-icon class="pin-icon" family="fas" name="fa-thumbtack" (click)="toggleColumn(columnRef, $event)"></igx-icon>
			</div>
		</ng-template>`.replace(/\t/g, "  ");
	}

	private getSelectedFeatures(columnFeatures: string[], gridFeatures: string[]) {
		const toolbarActions = [];
		const columnBoolFeatures = [];
		let selectedFeatures = "";
		const featureUrl = "https://www.infragistics.com/products/ignite-ui-angular/angular/components/hierarchicalgrid/";
		const anchorWrapper = {
			start: `<a href="`,
			href: ``,
			middle: `" target="_blank">`,
			text: ``,
			end: `</a>`
		};

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
						gridFeatures.push('[moving]="true"');
						break;
					case "Column Hiding":
						toolbarActions.push("      <igx-grid-toolbar-hiding title='Column Hiding'></igx-grid-toolbar-hiding>");
						break;
					case "Cell Editing":
						columnFeatures.push(`[editable]="true"`);
						this.dependencies.push({ import: "FormsModule", from: "@angular/forms", standalone: true });
						break;
					case "Row Selection":
						const gridFeatureText = `rowSelection="multiple"`;
						gridFeatures.push(gridFeatureText);
						break;
					case "Paging":
						this.additionalElements.push(`  <igx-paginator [perPage]="5"></igx-paginator>`);
						this.dependencies.push({
							standalone: true,
							import: 'IgxPaginatorComponent',
							from: "<%=igxPackage%>"
						});
						break;
					case "Column Pinning":
						this.usePinning = true;
						break;
				}

				featuresUrls.push(this.getFeatureUrl(feature, featureUrl));
				selectedFeatures = features.map((e, i) => {
					anchorWrapper.href = featuresUrls[i];
					anchorWrapper.text = e;
					return ` ${anchorWrapper.start}${anchorWrapper.href}${anchorWrapper.middle}` +
						`${anchorWrapper.text}${anchorWrapper.end}`;
				}).toString();
				if (selectedFeatures.length > 0) {
					selectedFeatures = `<p>Active Features: ${selectedFeatures}</p>`;
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
							},
						],
					];

					const parts = [
						"  <igx-grid-toolbar>",
						"    <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>",
						"    <igx-grid-toolbar-actions>",
						...toolbarActions,
						"    </igx-grid-toolbar-actions>",
						"  </igx-grid-toolbar>"
					];
					this.additionalElements.splice(1, 0, parts.join("\n"));
				}
			}
		}

		return selectedFeatures;
	}

	private getFeatureUrl(feature: string, featureUrl: string): string {
		switch (feature) {
			case "Sorting":
			case "Filtering":
			case "Paging":
				return `${featureUrl}${feature.toLocaleLowerCase()}`;
			case "Resizing":
				return `${featureUrl}column-resizing`;
			case "Column Pinning":
				return `${featureUrl}column-pinning`;
			case "Cell Editing":
				return `${featureUrl}editing`;
			case "Column Moving":
				return `${featureUrl}column-moving`;
			case "Column Hiding":
				return `${featureUrl}column-hiding`;
			case "Row Selection":
				return `${featureUrl}selection`;
		}
	}
}
module.exports = new IgxHierarchicalGridTemplate();
