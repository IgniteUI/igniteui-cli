import React, { Component } from 'react';
import 'jquery';
import 'jquery-ui';
$(igniteImports)
import $(Control) from "igniteui-react/ui/$(widget).js";

export default class $(ClassName) extends Component {
	constructor(props) {
		super(props);
		this.state = {
			platforms: [
				{ Name: "jQuery/HTML5/ASP.NET MVC Controls" },
				{ Name: "ASP.NET Controls" },
				{ Name: "Windows Forms Controls" },
				{ Name: "WPF Controls" },
				{ Name: "Android Native mobile controls" },
				{ Name: "iOS Controls" },
				{ Name: "SharePlus" },
				{ Name: "ReportPlus" },
				{ Name: "Indigo Studio" }
			]
		};
	}
	render() {
		return (
			<div className="$(ClassName)">
				<div className="$(ClassName)-header">
					<h2 style={{textAlign: "center", marginBottom: "2vw"}}>$(description)</h2>
				</div>
				<div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
					<$(Control)
						id="combo"
						width="16vw"
						dataSource={this.state.platforms}
						textKey="Name"
						valueKey="Name"
						multiSelection={{
							enabled: true,
							showCheckboxes: true
						}}
						dropDownOrientation="bottom"
					/>
				</div>
			</div>
		);
	}
}
