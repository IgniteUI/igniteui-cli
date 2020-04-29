import React, { Component } from 'react';
import 'jquery';
import 'jquery-ui';
$(igniteImports)
import $(Control) from "igniteui-react/ui/$(widget).js";

import { northwind } from './northwind.js';

export default class  $(ClassName) extends Component {
	constructor(props) {
		super(props);
		this.state = northwind;
	}
	render() {
		return(
			<div className="App">
				<div className="App-header">
					<h2 style={{textAlign: "center"}}>$(description)</h2>
				</div>
				<div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
					<$(Control)
						id="grid-templating"
						width="700px"
						autoCommit={true}
						autoGenerateColumns={false}
						dataSource={this.state}
						responseDataKey="results"
						dataSourceType="json"
						columns={[
							{ headerText: "Product Name", key: "ProductName", width: 300 },
							{ headerText: "Unit Price", key: "UnitPrice", type: 'number', width: 150, template: "$ ${UnitPrice} {{if parseInt(${UnitPrice}) >= 19 }}<img width='10' height='15' src= 'https://www.igniteui.com/images/samples/templating-engine/colTemplateWithConditionalCell/arrowUp.gif' />	{{else}} <img width='10' height='15' src= 'https://www.igniteui.com/images/samples/templating-engine/colTemplateWithConditionalCell/arrowDown.gif' /> {{/if}}" },
							{ headerText: "Units In Stock", key: "UnitsInStock", width: 125 },
							{ headerText: "Units On Order", key: "UnitsOnOrder", width: 125 },
							{ headerText: " ", key: "DeltaPrice", hidden: true }
						]}
						features={$(gridfeatures)}
					/>
				</div>
     		 </div>
		);
	}
}
