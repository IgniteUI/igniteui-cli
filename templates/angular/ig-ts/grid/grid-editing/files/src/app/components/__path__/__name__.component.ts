import { Component } from "@angular/core";
import { products } from "../../assets/northwindProducts";

@Component({
	selector: "$(filePrefix)",
	template: `
		<h1>$(description)</h1>
		<ig-grid [(options)]="gridOptions" widgetId='grid-editing'></ig-grid>
	`
})
export class $(ClassName)Component {
	public gridOptions: IgGrid;
	public products: any[];

	constructor() {
		this.products = products;
		this.gridOptions = {
			columns: [
				{ headerText: "Product ID", key: "ProductID", dataType: "number" },
				{ headerText: "Product Name", key: "Name", dataType: "string" },
				{ headerText: "Product Number", key: "ProductNumber", dataType: "string" }
			],
			width: "500px",
			dataSource: this.products,
			autoCommit : true,
			primaryKey: "ProductID",
			features: $(gridFeatures)
		};
	}
}
