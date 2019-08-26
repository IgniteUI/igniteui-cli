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
				<div style={{float: "left", marginLeft: "10vw"}}>
					<$(Control)
						id="columnchart"
						width="65vw"
						height="350px"
						dataSource={this.state.view}	
						responseDataKey="lastFiveYears"
						legend={{ element: "columnLegend" }}
						title="Energy Production Per Country"
						subtitle="The top five Total Primary Energy producers"
						axes={[{
							name: "xAxis",
							type: "categoryX",
							label: "Year",
                    		labelTopMargin: 5
						}, {
							name: "yAxis",
							type: "numericY",
							label: "Quadrillion Btu"
						}]}
						series={[{
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
						}, {
							name: "series4",
							title: "United States",
							type: "column",
							isHighlightingEnabled: true,
							isTransitionInEnabled: true,
							xAxis: "xAxis",
							yAxis: "yAxis",
							valueMemberPath: "UnitedStates"
						}, {
							name: "series5",
							title: "China",
							type: "column",
							isHighlightingEnabled: true,
							isTransitionInEnabled: true,
							xAxis: "xAxis",
							yAxis: "yAxis",
							valueMemberPath: "China"
						}]}
					/>
				</div>
				<div id="columnLegend" style={{float: "left"}}></div>
			</div>
		);
	}
}
