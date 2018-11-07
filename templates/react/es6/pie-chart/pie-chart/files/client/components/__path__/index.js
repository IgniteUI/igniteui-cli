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
				{ "CountryName": "China", "Pop1990": 1141, "Pop2008": 1333, "Pop2025": 1458 },
				{ "CountryName": "India", "Pop1990": 849, "Pop2008": 1140, "Pop2025": 1398 },
				{ "CountryName": "United States", "Pop1990": 250, "Pop2008": 304, "Pop2025": 352 },
				{ "CountryName": "Indonesia", "Pop1990": 178, "Pop2008": 228, "Pop2025": 273 },
				{ "CountryName": "Brazil", "Pop1990": 150, "Pop2008": 192, "Pop2025": 223 }
			]
		};
	}
	render() {
		return (
			<div className="$(ClassName)">
				<div className="$(ClassName)-header">
					<h2 style={{textAlign: "center"}}>$(description)</h2>
				</div>
				<div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
					<$(Control)
						id="piechart"
						width="435px"
						height="435px"
						dataSource={this.state.population}
						dataValue="Pop2008"
						dataLabel="CountryName"
                        labelsPosition="bestFit"
						
						/>
				</div>
			</div>
		);
	}
}
