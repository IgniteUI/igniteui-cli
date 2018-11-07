import React, { Component } from 'react';
import 'jquery';
import 'jquery-ui';
$(igniteImports)
import $(Control) from "igniteui-react/ui/$(widget).js";

import { dataObj } from "../../data/financial-data.js";

export default class $(ClassName) extends Component {
	constructor(props) {
		super(props);
		this.state = { view: dataObj };
	}
	render() {
		return (
			<div className="$(ClassName)">
				<div className="$(ClassName)-header">
					<h2 style={{textAlign: "center", marginBottom: "3%"}}>$(description)</h2>
				</div>
				<div style={{float: "left", marginLeft: "2vw"}}>
						<$(Control)
							id="financialchart"
							width="40vw"
							height="500px"
							title="Microsoft (MSFT) vs. Adobe (ADBE)"
							subtitle="A comparison of stocks over time"
							horizontalZoomable={true}
							verticalZoomable={true}
							windowResponse="immediate"
							axes={[{
								name: "xAxis",
								type: "categoryX",
								dataSource: this.state.view,
								responseDataKey:"data",
								label: "Date",
								title: "Date",
								interval: 10
							}, {
								name: "yAxis",
								type: "numericY",
								title: "Price",
							}]}
							series={[{
								name: "series1",
								dataSource: this.state.view,
								responseDataKey:"data",
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
								showTooltip: true,
								thickness: 1,
								trendLineBrush: "rgba(68, 172, 214, .8)",
								trendLineThickness: 5,
								trendLineType: "exponentialAverage",
								negativeBrush: "rgba(198, 45, 54, .8)"
							}, {
								name: "series2",
								dataSource: this.state.view,
								responseDataKey:"dataAdobe",
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
								showTooltip: true,
								thickness: 1,
								trendLineBrush: "rgba(73, 73, 73, .8)",
								trendLineThickness: 5,
								trendLineType: "exponentialAverage",
								negativeBrush: "rgba(198, 45, 54, .8)"
							}]}
						/>
				</div>
				<div style={{float: "left"}}>
						<$(Control)
							id="financialchart"
							width="40vw"
							height="500px"

							title="Microsoft (MSFT) vs. Adobe (ADBE)"
							subtitle="A comparison of stocks over time"
							horizontalZoomable={true}
							verticalZoomable={true}
							windowResponse="immediate"
							axes={[{
								name: "xAxis",
								type: "categoryX",
								dataSource: this.state.view,
								responseDataKey:"data",
								label: "Date",
								title: "Date",
								interval: 10
							}, {
								name: "yAxis",
								type: "numericY",
								title: "Price",
							}]}
							series={[{
								name: "series1",
								dataSource: this.state.view,
								responseDataKey:"data",
								title: "Price Series",
								type: "financial",
								isTransitionInEnabled: true,
								displayType: "OHLC",
								xAxis: "xAxis",
								yAxis: "yAxis",
								openMemberPath: "Open",
								highMemberPath: "High",
								lowMemberPath: "Low",
								closeMemberPath: "Close",
								showTooltip: true,
								thickness: 2,
								trendLineBrush: "rgba(68, 172, 214, .8)",
								trendLineThickness: 5,
								trendLineType: "exponentialAverage",
								negativeBrush: "rgba(198, 45, 54, .8)"
							}, {
								name: "series2",
								dataSource: this.state.view,
								responseDataKey: "dataAdobe",
								title: "Price Series",
								type: "financial",
								isTransitionInEnabled: true,
								displayType: "OHLC",
								xAxis: "xAxis",
								yAxis: "yAxis",
								openMemberPath: "Open",
								highMemberPath: "High",
								lowMemberPath: "Low",
								closeMemberPath: "Close",
								showTooltip: true,
								thickness: 2,
								trendLineBrush: "rgba(73, 73, 73, .8)",
								trendLineThickness: 5,
								trendLineType: "exponentialAverage",
								negativeBrush: "rgba(198, 45, 54, .8)"
							}]}
						/>
				</div>
			</div>
		);
	}
}
