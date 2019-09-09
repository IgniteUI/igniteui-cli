import { Component } from "@angular/core";
import { population } from "../../assets/data";

@Component({
	selector: "$(filePrefix)",
	template: `
		<h1>$(description)</h1>
		<div style="float: left">
			<ig-pie-chart [(options)]="options" widgetId='pieChart'></ig-pie-chart>
		</div>
	`
})
export class $(ClassName)Component {
	public options: IgPieChart;
	public data: any[];

	constructor() {
		this.data = population;
		this.options = {
			width: "435px",
			height: "435px",
			dataSource: this.data,
			dataValue: "Pop2008",
			dataLabel: "CountryName",
			labelsPosition: "bestFit"
		};
	}
}