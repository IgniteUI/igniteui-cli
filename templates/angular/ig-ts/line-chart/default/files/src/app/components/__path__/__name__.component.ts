import { Component } from "@angular/core";
import { data } from "../../assets/line-chart-data";

@Component({
	selector: "$(filePrefix)",
	template: `
	<h1>$(description)</h1>
	<div class="selectionOptions" (change)="selectionChanged($event)" >
		Series type:
		<select id="seriesType">
			<option value="line" selected="selected">Line</option>
			<option value="stepLine">Step Line</option>
			<option value="spline">Spline</option>
			<option value="splineArea">Spline Area</option>
		</select>
		<br>
		<br>
	</div>
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

	updateChart(curSelection){
		//Series require the whole object 
		this.options = Object.assign({}, this.options, { series: [
			{
				name: "2005Population",
				type: curSelection,
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
				type: curSelection,
				title: "1995",
				xAxis: "NameAxis",
				yAxis: "PopulationAxis",
				valueMemberPath: "Pop1995",
				isTransitionInEnabled: true,
				isHighlightingEnabled: true,
				thickness: 5
			}
		]});
	}
	
	selectionChanged (event: Event){
		//pass currently selected Option from the Select element
		this.updateChart((<HTMLSelectElement>event.target).value);
	}
}