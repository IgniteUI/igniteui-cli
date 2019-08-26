import React, { Component } from 'react';
import 'jquery';
import 'jquery-ui';
$(igniteImports)
import $(Control) from "igniteui-react/ui/$(widget).js";

export default class $(ClassName) extends Component {
	constructor(props) {
		super(props);
		this.state = {
			population: [
				{ "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
				{ "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
				{ "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
				{ "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
				{ "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
			]
		};
	}
	render() {
		return (
			<div className="$(ClassName)">
				<div className="$(ClassName)-header">
					<h2 style={{textAlign: "center"}}>$(description)</h2>
				</div>
				<div style={{float: "left", marginLeft: "13vw"}}>
					<$(Control)
						id="linechart"
						width="60vw"
						height="400px"
						legend={{ element: "lineLegend" }}
						title="Population per Country"
						subtitle="A comparison of population in 1995 and 2005"
						dataSource={ this.state }
						responseDataKey="population"
						axes={[
							{
								name: "NameAxis",
								type: "categoryX",
								label: "CountryName"
							},
							{
								name: "PopulationAxis",
								type: "numericY",
								minimumValue: 0,
								title: "Millions of People",
							}
						]}
						series={[
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
							}
							]}
					/>
				</div>
				<div id="lineLegend" style={{float: "left"}}></div>
			</div>
		);
	}
}
