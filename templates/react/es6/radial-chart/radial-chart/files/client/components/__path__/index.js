import React, { Component } from 'react';
import 'jquery';
import 'jquery-ui';
$(igniteImports)
import $(Control) from "igniteui-react/ui/$(widget).js";

import { data } from "../../data/temperature.js";

export default class $(ClassName) extends Component {
	constructor(props) {
		super(props);
		this.state = { view: data };
	}
	render() {
		return (
			<div className="$(ClassName)">
				<div className="$(ClassName)-header">
					<h2 style={{textAlign: "center", marginBottom: "2vw"}}>$(description)</h2>
				</div>
				<div style={{float: "left", marginLeft: "33vw"}}>
					<$(Control)
						id="radialchart"
						width="20vw"
						height="400px"
						dataSource={this.state.view}
						responseDataKey="temperature"
						legend={{ element: "radialLegend" }}
						title="New York City vs. Philadelphia"
						subtitle="A comparison of daily temperatures"						
						axes={[{
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
						}]}
						series={[{							
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
						}]}
						horizontalZoomable={true}
						verticalZoomable={true}
						windowResponse="immediate"
						/>
				</div>
				<div id="radialLegend" style={{float: "left"}}></div>
			</div>
		);
	}
}
