import React, { Component } from 'react';
import 'jquery';
import 'jquery-ui';
$(igniteImports)
import $(Control) from "igniteui-react/ui/$(widget).js";

export default class $(ClassName) extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ "CountryName": "China", "Pop1990": 1141 },
				{ "CountryName": "India", "Pop1990": 849 },
				{ "CountryName": "United States", "Pop1990": 250 },
				{ "CountryName": "Indonesia", "Pop1990": 178 },
				{ "CountryName": "Brazil", "Pop1990": 150 }
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
						id="chart"
						width={550}
						height={550}
						series={[{
							name: "Pop1990",
							labelMemberPath: "CountryName",
							valueMemberPath: "Pop1990",
							dataSource: this.state.data,
							labelsPosition: "bestFit",
							formatLabel: function (context) {
								return context.itemLabel + " (" + context.item.Pop1990 + ")";
							},
							brushes: ["#B284BE", "#5D8AA8", "#C9FFE5", "#7CB9E8", "#F19CBB"]
						}]}
					/>
				</div>
			</div>
		);
	}
}
