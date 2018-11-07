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
				{ Budget: 30, Department: "Administration" },
				{ Budget: 50, Department: "Sales" },
				{ Budget: 60, Department: "IT" },
				{ Budget: 50, Department: "Marketing" },
				{ Budget: 100, Department: "Development" },
				{ Budget: 20, Department: "Support" }
			]
		};
	}
	render() {
		return (
			<div className="$(ClassName)">
				<div className="$(ClassName)-header">
					<h2 style={{textAlign: "center", marginBottom: "4%"}}>$(description)</h2>
				</div>
				<div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
					<$(Control)
						id="chartNormal"
						width={325}
						height={450}
						dataSource={ this.state }
						responseDataKey="data"
						valueMemberPath="Budget"
						innerLabelMemberPath="Budget"
						innerLabelVisibility="visible"
						outerLabelMemberPath="Department"
						outerLabelVisibility="visible"
					/>
				</div>
			</div>
		);
	}
}
