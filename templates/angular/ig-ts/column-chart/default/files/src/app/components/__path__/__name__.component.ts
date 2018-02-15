import { Component } from "@angular/core";
import { lastFiveYears } from "../../assets/world-energy-production";

@Component({
	selector: "$(filePrefix)",
	template: `
		<h1>$(description)</h1>
		<div style="float: left">
			<ig-data-chart [(options)]="options" widgetId='columnChart'></ig-data-chart>
		</div>
		<div id="columnLegend" style="float: left"></div>
	`
})
export class $(ClassName)Component {
	public options: IgDataChart;
	public data: any[];

	constructor() {
		this.data = lastFiveYears;
		this.options = {
			width: "650px",
			height: "550px",
			dataSource: this.data,
			title: "Energy Production Per Country",
			subtitle: "The top five Total Primary Energy producers",
			legend: { element: "columnLegend" },
			axes: [{
				name: "xAxis",
				type: "categoryX",
				label: "Year",
				labelTopMargin: 5
			}, {
				name: "yAxis",
				type: "numericY",
				title: "Quadrillion Btu",
			}],
			series: [{
				name: "series1",
				title: "Canada",
				type: "column",
				isHighlightingEnabled: true,
				isTransitionInEnabled: true,
				xAxis: "xAxis",
				yAxis: "yAxis",
				valueMemberPath: "Canada"
			}, {
				name: "series2",
				title: "Saudi Arabia",
				type: "column",
				isHighlightingEnabled: true,
				isTransitionInEnabled: true,
				xAxis: "xAxis",
				yAxis: "yAxis",
				valueMemberPath: "SaudiArabia"
			}, {
				name: "series3",
				title: "Russia",
				type: "column",
				isHighlightingEnabled: true,
				isTransitionInEnabled: true,
				xAxis: "xAxis",
				yAxis: "yAxis",
				valueMemberPath: "Russia"
			},
			{
				name: "series4",
				title: "United States",
				type: "column",
				isHighlightingEnabled: true,
				isTransitionInEnabled: true,
				xAxis: "xAxis",
				yAxis: "yAxis",
				valueMemberPath: "UnitedStates"
			},
			{
				name: "series5",
				title: "China",
				type: "column",
				isHighlightingEnabled: true,
				isTransitionInEnabled: true,
				xAxis: "xAxis",
				yAxis: "yAxis",
				valueMemberPath: "China"
			}]
		};
	}
}