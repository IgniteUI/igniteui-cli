import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxHierarchicalGridTemplate extends IgniteUIForAngularTemplate {
	private userExtraConfiguration: {};
	private usePinning: boolean;

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
		const gridFeatures = [];
		let pinningConfig: {};
		const extraConfig = {
			"$(selectedFeatures)": this.getSelectedFeatures(columnFeatures, gridFeatures),
			// tslint:disable-next-line: object-literal-sort-keys
			"$(columnFeatures)": columnFeatures.join(" "),
			"$(gridFeatures)": gridFeatures.join(" "),
			"$(rowIslandFeatures)": gridFeatures.join(" ").replace(/Singers/g, "Albums")
		};
		if (this.usePinning) {
			pinningConfig = {
				"$(album-pin)": this.pinningTemplate("Album"),
				"$(artist-pin)": this.pinningTemplate("Artist"),
				"$(awards-pin)": this.pinningTemplate("Awards"),
				"$(grammy-pin)": this.pinningTemplate("Grammy"),
				"$(launch-pin)": this.pinningTemplate("Launch"),
				"$(nominations-pin)": this.pinningTemplate("Nominations")
			};
		}

		return super.generateFiles(projectPath, name, { extraConfig, pinningConfig });
	}

	//tslint:disable
	private pinningTemplate(columnName: string): string {
		// https://github.com/IgniteUI/igniteui-angular/issues/3998
		// Defining let-columnRef="column" does not seem to work.
		// Angular passes in the $implicit(ly) defined value.
		return `<ng-template igxHeader let-columnRef>
			<div class="title-inner">
				<span style="float:left">${columnName}</span>
				<igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(columnRef)"></igx-icon>
			</div>
		</ng-template>`;
	}

	private getSelectedFeatures(columnFeatures: string[], gridFeatures: string[]) {
		const columnBoolFeatures = [];
		let addGridToolbar = false;
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
						columnFeatures.push('[movable]="true"');
						break;
					case "Column Hiding":
						gridFeatures.push('[showToolbar]="true" [columnHiding]="true" toolbarTitle="Singers"' +
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
				if (addGridToolbar) {
					gridFeatures.push('[showToolbar]="true" toolbarTitle="Singers"');
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
				return `${featureUrl}${feature}.html`;
			case "Resizing":
				return `${featureUrl}column_resizing.html`;
			case "Column Pinning":
				return `${featureUrl}column_pinning.html`;
			case "Cell Editing":
				return `${featureUrl}editing.html`;
			case "Column Moving":
				return `${featureUrl}column_moving.html`;
			case "Column Hiding":
				return `${featureUrl}column_hiding.html`;
			case "Row Selection":
				return `${featureUrl}selection.html`;
		}
	}
}
module.exports = new IgxHierarchicalGridTemplate();
