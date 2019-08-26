import { Component } from "@angular/core";
import { products } from "../../assets/northwindProductsFlat";

@Component({
	selector: "$(filePrefix)",
	template: `
		<h1>$(description)</h1>
		<ig-grid [(options)]="gridOptions" widgetId='grid-templating'></ig-grid>
	`
})
export class $(ClassName)Component {
	public gridOptions: IgGrid;
	public products: any[];

	constructor() {
		this.products = products;
		this.gridOptions = {
			width: "700px",
			dataSource: this.products,
			autoCommit: true,
			autoGenerateColumns: false,
			primaryKey: "ProductID",
			dataSourceType: "json",
			columns: [
				{ headerText: "Product Name", key: "ProductName", width: 300 },
				{ headerText: "Unit Price", key: "UnitPrice", type: 'number', width: 150, template: "$ ${UnitPrice} {{if parseInt(${UnitPrice}) >= 19 }}<img width='10' height='15' src= 'https://www.igniteui.com/images/samples/templating-engine/colTemplateWithConditionalCell/arrowUp.gif' />	{{else}} <img width='10' height='15' src= 'https://www.igniteui.com/images/samples/templating-engine/colTemplateWithConditionalCell/arrowDown.gif' /> {{/if}}" },
				{ headerText: "Units In Stock", key: "UnitsInStock", width: 125 },
				{ headerText: "Units On Order", key: "UnitsOnOrder", width: 125 },
				{ headerText: " ", key: "DeltaPrice", hidden: true }
			],
			features: $(gridFeatures)
		};
	}
}
