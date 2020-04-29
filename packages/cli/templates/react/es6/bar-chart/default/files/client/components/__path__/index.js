import React, { Component } from 'react';
import 'jquery';
import 'jquery-ui';
$(igniteImports)
import $(Control) from "igniteui-react/ui/$(widget).js";

import { data } from "../../data/world-energy-production.js";

export default class $(ClassName) extends Component {
	constructor(props) {
		super(props);
		this.state = { view: data };
	}
	render() {
		return (
			<div className="$(ClassName)">
				<div className="$(ClassName)-header">
					<h2 style={{textAlign: "center"}}>$(description)</h2>
				</div>
				<div style={{float: "left", paddingLeft: "11vw"}}>
					<$(Control)
						id="barchart"
						width="65vw"
						height="550px"
						dataSource={this.state.view}
						responseDataKey="lastFiveYears"
						title="Energy Production Per Country"
						subtitle="The top five Total Primary Energy producers"
						legend={{ element: "barLegend" }}
						axes={[{
							name: "xAxis",
							type: "numericX",
							title: "Quadrillion Btu"
						}, {
							name: "yAxis",
							type: "categoryY",
							label: "Year"
						}]}
						series={[{
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
						}]}
					/>
				</div>
				<div id="barLegend" style={{float: "left"}}></div>
			</div>
		);
	}
}
