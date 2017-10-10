import { Component } from "@angular/core";
import { ActivatedRoute, Routes } from "@angular/router";
import { products } from "../../assets/northwindProducts";

@Component({
	selector: "app-grid",
	template: `<ig-grid [(options)]="gridOptions" widgetId='grid'></ig-grid>`
})
export class GridComponent {
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
			features: [
				$(gridFeatures)
			]
		};
	}
}
