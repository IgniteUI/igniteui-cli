import { Component } from "@angular/core";
import { financialData } from "../../assets/financial-data";

@Component({
	selector: "$(filePrefix)",
	template: `
		<h1>$(description)</h1>
		<div style="float: left">
			<ig-data-chart [(options)]="candleOptions" widgetId='candlestickChart'>
			</ig-data-chart>
		</div>
	
		<div style="float: left; width: 500px; height: 500px;">
			<ig-data-chart [(options)]="ohlcOptions" widgetId='ohlcChart'>
			</ig-data-chart>
		</div>
	`
})
export class $(ClassName)Component {
	public candleOptions: IgDataChart;
	public ohlcOptions: IgDataChart;
	public data: any;

	constructor() {
		this.data = financialData;
		this.candleOptions = {
			width: "500px",
			height: "500px",
			title: "Microsoft (MSFT) vs. Adobe (ADBE)",
			subtitle: "A comparison of stocks over time",
			horizontalZoomable: true,
			verticalZoomable: true,
			windowResponse: "immediate",
			axes: [{
				name: "xAxis",
				type: "categoryX",
				dataSource: this.data,
				responseDataKey: "data",
				label: "Date",
				title: "Date",
				interval: 10
			}, {
				name: "yAxis",
				type: "numericY",
				title: "Price"
			}],
			series: [{
				name: "series1",
				dataSource: this.data,
				responseDataKey: "data",
				title: "Price Series",
				type: "financial",
				displayType: "candlestick",
				isTransitionInEnabled: true,
				isHighlightingEnabled: true,
				xAxis: "xAxis",
				yAxis: "yAxis",
				openMemberPath: "Open",
				highMemberPath: "High",
				lowMemberPath: "Low",
				closeMemberPath: "Close",
				thickness: 1,
				trendLineBrush: "rgba(68, 172, 214, .8)",
				trendLineThickness: 5,
				trendLineType: "exponentialAverage",
				negativeBrush: "rgba(198, 45, 54, .8)"
			}, {
				name: "series2",
				dataSource: this.data,
				responseDataKey: "dataAdobe",
				title: "Price Series",
				type: "financial",
				isTransitionInEnabled: true,
				isHighlightingEnabled: true,
				displayType: "candlestick",
				xAxis: "xAxis",
				yAxis: "yAxis",
				openMemberPath: "Open",
				highMemberPath: "High",
				lowMemberPath: "Low",
				closeMemberPath: "Close",
				thickness: 1,
				trendLineBrush: "rgba(73, 73, 73, .8)",
				trendLineThickness: 5,
				trendLineType: "exponentialAverage",
				negativeBrush: "rgba(198, 45, 54, .8)"
			}]
		};
		this.ohlcOptions = {
			width: "500px",
			height: "500px",
			title: "Microsoft (MSFT) vs. Adobe (ADBE)",
			subtitle: "A comparison of stocks over time",
			axes: [{
				name: "xAxis",
				type: "categoryX",
				dataSource: this.data,
				responseDataKey: "data",
				label: "Date",
				interval: 10,
				title: "Date"
			}, {
				name: "yAxis",
				type: "numericY",
				title: "Price"
			}],
			series: [{
				name: "series1",
				dataSource: this.data,
				responseDataKey: "data",
				title: "Price Series",
				type: "financial",
				isTransitionInEnabled: true,
				displayType: "ohlc",
				xAxis: "xAxis",
				yAxis: "yAxis",
				openMemberPath: "Open",
				highMemberPath: "High",
				lowMemberPath: "Low",
				closeMemberPath: "Close",
				
				thickness: 2,
				trendLineBrush: "rgba(68, 172, 214, .8)",
				trendLineThickness: 5,
				trendLineType: "exponentialAverage",
				negativeBrush: "rgba(198, 45, 54, .8)"
			}, {
				name: "series2",
				dataSource: this.data,
				responseDataKey: "dataAdobe",
				title: "Price Series",
				type: "financial",
				isTransitionInEnabled: true,
				displayType: "ohlc",
				xAxis: "xAxis",
				yAxis: "yAxis",
				openMemberPath: "Open",
				highMemberPath: "High",
				lowMemberPath: "Low",
				closeMemberPath: "Close",
				thickness: 2,
				trendLineBrush: "rgba(73, 73, 73, .8)",
				trendLineThickness: 5,
				trendLineType: "exponentialAverage",
				negativeBrush: "rgba(198, 45, 54, .8)"
			}],
			horizontalZoomable: true,
			verticalZoomable: true,
			windowResponse: "immediate"
		};
	}
}