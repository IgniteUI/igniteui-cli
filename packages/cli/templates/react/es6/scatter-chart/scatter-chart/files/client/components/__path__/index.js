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
				<div style={{float: "left", marginLeft: "13vw"}}>
					<$(Control)
						id="scatterchart"
						width="60vw"
						height="400px"
						dataSource={this.state.view}
						responseDataKey="agriculturalData"
						title="U.S. Agricultural Production Per Year"
						subtitle="Data from 1961-2007"						
						axes={[{
							name: "xAxis",
							type: "numericX",
							interval: 10,
                        	title: "Year"
						}, {
							name: "yAxis",
							type: "numericY",
							title: "Billions of USD",
							maximumValue: 200000,
							formatLabel: function (val) {
								var bVal = (val / 1000),
								rounded = Math.round(bVal * 100) / 100;
								return "$"+ rounded;
							}
						}]}
						series={[{
							name: "scatter",
							type: "scatter",
							xAxis: "xAxis",
							yAxis: "yAxis",
							xMemberPath: "Year",
							yMemberPath: "Value",
							markerType: "circle"
						}
						]}
						horizontalZoomable={true}
						verticalZoomable={true}
						windowResponse="immediate"
						/>
				</div>
			</div>
		);
	}
}
