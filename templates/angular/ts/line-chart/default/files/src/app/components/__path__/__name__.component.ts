import { Component } from "@angular/core";
import { ActivatedRoute, Routes } from "@angular/router";
import { data } from "../../assets/line-chart-data";

@Component({
	selector: "app-line-chart",
	template: `
		<div style="float: left">
			<ig-data-chart [(options)]="options" widgetId='lineChart'></ig-data-chart>
		</div>
		<div id="lineLegend" style="float: left"></div>`
})
export class $(ClassName)Component {
	public options: IgDataChart;
	public data: any[];

	constructor() {
		this.data = data;
		this.options = {
			width: "500px",
			height: "400px",
			legend: { element: "lineLegend" },
			title: "Population per Country",
			subtitle: "A comparison of population in 1995 and 2005",
			dataSource: this.data,
			axes: [{
					name: "NameAxis",
					type: "categoryX",
					label: "CountryName"
				},
				{
					name: "PopulationAxis",
					type: "numericY",
					minimumValue: 0,
					title: "Millions of People"
				}
			],
			series: [
				{
					name: "2005Population",
					type: "line",
					title: "2005",
					xAxis: "NameAxis",
					yAxis: "PopulationAxis",
					valueMemberPath: "Pop2005",
					isTransitionInEnabled: true,
					isHighlightingEnabled: true,
					thickness: 5
				},
				{
					name: "1995Population",
					type: "line",
					title: "1995",
					xAxis: "NameAxis",
					yAxis: "PopulationAxis",
					valueMemberPath: "Pop1995",
					isTransitionInEnabled: true,
					isHighlightingEnabled: true,
					thickness: 5
				}]
		};
	}
}
