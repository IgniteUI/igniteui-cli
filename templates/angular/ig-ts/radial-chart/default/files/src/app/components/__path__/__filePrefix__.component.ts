import { Component } from "@angular/core";
import { temperature } from "../../assets/temperature";

@Component({
	selector: "$(filePrefix)",
	template: `
		<h1>$(description)</h1>
		<div style="float: left">
			<ig-data-chart [(options)]="options" widgetId='radialChart'></ig-data-chart>
		</div>
		<div id="radialLegend" style="float: left"></div>`
})
export class $(ClassName)Component {
	public options: IgDataChart;
	public data: any[];

	constructor() {
		this.data = temperature;
		this.options = {
			id: "radialChart",
			width: "400px",
			height: "400px",
			dataSource: this.data,
			title: "New York City vs. Philadelphia",
			subtitle: "A comparison of daily temperatures",
			legend: { element: "radialLegend" },
			horizontalZoomable: true,
			verticalZoomable: true,
			windowResponse:"immediate",
			axes: [{
				name: "angleAxis",
				type: "categoryAngle",
				label: "Time",
				startAngleOffset: -90,
				interval: 1
			}, {
				name: "radiusAxis",
				type: "numericRadius",
				innerRadiusExtentScale: .1,
				maximumValue: 95,
				minimumValue: 75,
				interval: 5,
				radiusExtentScale: .6
			}],
			series: [{
				name: "series1",
				title: 'Philadelphia',
				type: "radialArea",
				angleAxis: "angleAxis",
				valueAxis: "radiusAxis",
				valueMemberPath: "PhiladelphiaTemp",
				markerType: "circle"
			}, {
				name: "series2",
				title: 'New York City',
				type: "radialArea",
				angleAxis: "angleAxis",
				valueAxis: "radiusAxis",
				valueMemberPath: "NewYorkCityTemp",
				markerType: "circle"
			}]
		};
	}
}