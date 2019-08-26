import { Component } from "@angular/core";
import { northwind } from "../../assets/northwind";

@Component({
	selector: "$(filePrefix)",
	template: `
		<h1>$(description)</h1>
		<ig-hierarchical-grid [(options)]="gridOptions" widgetId='hierarchical-grid'></ig-hierarchical-grid>
	`
})
export class $(ClassName)Component {
	public gridOptions: IgGrid;
	public data: any;

	constructor() {
		this.data = northwind.results;
		this.gridOptions = {
			responseDataKey:"results",
			dataSourceType:"json",
			autoGenerateColumns:false,
			autofitLastColumn:false ,
			primaryKey:"EmployeeID",
			columns: [
				{ key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "0%", hidden: true },
				{ key: "LastName", headerText: "Last Name", dataType: "string", width: "20%" },
				{ key: "FirstName", headerText: "First Name", dataType: "string", width: "20%" },
				{ key: "Title", headerText: "Title", dataType: "string", width: "20%" },
				{ key: "City", headerText: "City", dataType: "string", width: "15%" },
				{ key: "Region", headerText: "Region", dataType: "string", width: "10%" },
				{ key: "Country", headerText: "Country", dataType: "string", width: "0%", hidden: true }
			],
			width: "500px",
			dataSource: this.data,
			features: $(gridFeatures),
			autoGenerateLayouts:false,
			columnLayouts: [
				{
					key: "Orders",
					autoGenerateColumns: false,
					autofitLastColumn: false,
					primaryKey: "OrderID",
					width: "100%",
					columns: [
						{ key: "OrderID", headerText: "Order ID", dataType: "number", width: "0%", hidden: true },
						{ key: "CustomerID", headerText: "Customer ID", dataType: "string", width: "15%" },
						{ key: "Freight", headerText: "Freight", dataType: "number", format:"0.00", width: "15%" },
						{ key: "FreightExpence", headerText: "Freight Expense", unbound: true, dataType: "number", format: "0.00", width: "20%", formula: "CalculateFreightExpence" },
						{ key: "ShipName", headerText: "Ship Name", dataType: "string", width: "25%" },
						{ key: "ShipCity", headerText: "Ship City", dataType: "string", width: "15%" },
					],
					features: [
						{
							name: "Responsive",
							enableVerticalRendering: false,
							columnSettings: [
								{
									columnKey: "Freight",
									classes: "ui-hidden-phone"
								},
								{
									columnKey: "CustomerID",
									classes: "ui-hidden-phone"
								},
								{
									columnKey: "ShipName",
									classes: "ui-hidden-phone"
								}
							]
						}
					]
				}
			]
		};
	}
}
