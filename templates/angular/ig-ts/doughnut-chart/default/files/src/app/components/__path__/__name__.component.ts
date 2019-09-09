import { Component } from "@angular/core";
import { doughnutData } from "../../assets/doughnut-data";

@Component({
	selector: "$(filePrefix)",
	template: `
		<h1>$(description)</h1>
		<div style="float: left">
		<ig-doughnut-chart [(options)]="doughnutOptions" widgetId='doughnutChart'></ig-doughnut-chart>
		</div>
	`
})
export class $(ClassName)Component {
	public doughnutOptions: IgDoughnutChart;
	public data: any;

	constructor() {
		this.data = doughnutData;
		this.doughnutOptions = {
			width: "550px",
			height: "550px",
			series:
			[{
				dataSource: this.data,
				responseDataKey: "data",
				name: "Pop1990",
				labelMemberPath: "CountryName",
				valueMemberPath: "Pop1990",
				labelsPosition: "bestFit",
				formatLabel: function (context) {
					return context.itemLabel + " (" + context.item.Pop1990 + ")";
				},
				showTooltip: true,
				brushes: ["#B284BE", "#5D8AA8", "#C9FFE5", "#7CB9E8", "#F19CBB"]
			}]	
		};
	}
}