import { Component } from "@angular/core";
import { files } from "../../assets/data-fe";

@Component({
	selector: "$(filePrefix)",
	template: `
		<h1>$(description)</h1>
		<ig-tree-grid [(options)]="gridOptions" widgetId='tree-grid'></ig-tree-grid>`,
	styles: [`
		:host /deep/ .ui-icon.ui-igtreegrid-expansion-indicator.ui-icon-minus {
			background: url(src/app/assets/opened_folder.png) !important;
			background-repeat: no-repeat;
		}
		:host /deep/ .ui-icon.ui-igtreegrid-expansion-indicator.ui-icon-plus {
			background: url(src/app/assets/folder.png) !important;
			background-repeat: no-repeat;
		}
		:host /deep/ .ui-icon-plus:before {
			content: '' !important;
		}
		:host /deep/ .ui-icon-minus:before{
		content: '' !important;
		}
	`]
})
export class $(ClassName)Component {
	public gridOptions: IgTreeGrid;
	public items: any[];

	constructor() {
		this.items = files;
		this.gridOptions = {
			id: "basicTreeGrid",
			width: "800px",
			height:"400px",
			dataSource: this.items,
			autoGenerateColumns: false,
			primaryKey: "name",
			columns: [
				{ headerText: "Name", key: "name", width: "250px", dataType: "string" },
				{ headerText: "Date Modified", key: "dateModified", width: "130px", dataType: "date"},
				{ headerText: "Type", key: "type", width: "230px", dataType: "string" },
				{ headerText: "Size in KB", key: "size", width: "130px", dataType: "number" }
			],
			childDataKey: "files",
			initialExpandDepth: 2,
			features: $(treeGridFeatures)
		};
	}
}
