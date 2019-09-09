import { Component } from "@angular/core";
import { lastFiveYears } from "../../assets/world-energy-production";

@Component({
	selector: "$(filePrefix)",
	template: `
		<h1>$(description)</h1>
		<div style="float: left">
			<ig-data-chart [(options)]="options" widgetId='barChart'></ig-data-chart>
		</div>
		<div id="barLegend" style="float: left"></div>`
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
			legend: { element: "barLegend" },
			axes: [{
				name: "xAxis",
				type: "numericX",
				title: "Quadrillion Btu"
			}, {
				name: "yAxis",
				type: "categoryY",
				label: "Year"
			}],
			series: [{
				name: "series1",
				title: "Canada",
				type: "bar",
				isHighlightingEnabled: true,
				isTransitionInEnabled: true,
				xAxis: "xAxis",
				yAxis: "yAxis",
				valueMemberPath: "Canada"
			}, {
				name: "series2",
				title: "Saudi Arabia",
				type: "bar",
				isHighlightingEnabled: true,
				isTransitionInEnabled: true,
				xAxis: "xAxis",
				yAxis: "yAxis",
				valueMemberPath: "SaudiArabia"
			}, {
				name: "series3",
				title: "Russia",
				type: "bar",
				isHighlightingEnabled: true,
				isTransitionInEnabled: true,
				xAxis: "xAxis",
				yAxis: "yAxis",
				valueMemberPath: "Russia"
			}, {
				name: "series4",
				title: "United States",
				type: "bar",
				isHighlightingEnabled: true,
				isTransitionInEnabled: true,
				xAxis: "xAxis",
				yAxis: "yAxis",
				valueMemberPath: "UnitedStates"
			}, {
				name: "series5",
				title: "China",
				type: "bar",
				isHighlightingEnabled: true,
				isTransitionInEnabled: true,
				xAxis: "xAxis",
				yAxis: "yAxis",
				valueMemberPath: "China"
			}]
		};
	}
}
