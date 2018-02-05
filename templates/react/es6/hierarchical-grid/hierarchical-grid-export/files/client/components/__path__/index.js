import React, { Component } from 'react';
import * as $ from 'jquery';
import 'jquery-ui';
$(igniteImports)

import "ignite-ui/js/modules/infragistics.ext_core.js";
import "ignite-ui/js/modules/infragistics.ext_collections.js";
import "ignite-ui/js/modules/infragistics.ext_text.js";
import "ignite-ui/js/modules/infragistics.ext_io.js";
import "ignite-ui/js/modules/infragistics.ext_ui.js";
import "ignite-ui/js/modules/infragistics.documents.core_core.js";
import "ignite-ui/js/modules/infragistics.ext_collectionsextended.js";
import "ignite-ui/js/modules/infragistics.excel_core.js";
import "ignite-ui/js/modules/infragistics.ext_threading.js";
import "ignite-ui/js/modules/infragistics.ext_web.js";
import "ignite-ui/js/modules/infragistics.xml.js";
import "ignite-ui/js/modules/infragistics.documents.core_openxml.js";
import "ignite-ui/js/modules/infragistics.excel_serialization_openxml.js";
import "ignite-ui/js/modules/infragistics.gridexcelexporter.js";

import $(Control) from "igniteui-react/ui/$(widget).js";
import IgButton from "igniteui-react/ui/igButton.js"

import { northwind } from './northwind.js';

export default class $(ClassName) extends Component {
	constructor(props) {
		super(props);
		this.state = northwind;

		this.export = () => {
			// export
			$.ig.GridExcelExporter.exportGrid($("#hierarchicalGrid"), {
				fileName: "igHierarchicalGrid",
				worksheetName: 'Sheet1'
			});
		}
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>$(description)</h2>
				</div>

				<IgButton 
				onClick={this.export}
				labelText="Export"
				/>
				<$(Control)
					id="hierarchicalGrid"
					features={$(gridfeatures)}
					width="100%"
					autoCommit={true}
					autoGenerateColumns={false}
					autofitLastColumn={false}
					dataSource={this.state}
					responseDataKey="results"
					dataSourceType="json"
					columns={[
						{ key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "0%", hidden: true },
						{ key: "LastName", headerText: "Last Name", dataType: "string", width: "20%" },
						{ key: "FirstName", headerText: "First Name", dataType: "string", width: "20%" },
						{ key: "Title", headerText: "Title", dataType: "string", width: "20%" },
						{ key: "City", headerText: "City", dataType: "string", width: "15%" },
						{ key: "Region", headerText: "Region", dataType: "string", width: "10%" },
						{ key: "Country", headerText: "Country", dataType: "string", width: "0%", hidden: true }
					]}
					childrenDataProperty="Orders"
					autoGenerateLayouts={false}
					columnLayouts={[
						{
							key: "Orders",
							autoCommit: true,
							autoGenerateColumns: false,
							autofitLastColumn: false,
							primaryKey: "OrderID",
							width: "100%",
							columns: [
								{ key: "OrderID", headerText: "Order ID", dataType: "number", width: "10%", hidden: true },
								{ key: "Freight", headerText: "Freight", dataType: "string", width: "15%" },
								{ key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
								{ key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "25%" },
								{ key: "ShipCity", headerText: "Ship City", dataType: "string", width: "20%" },
								{ key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "20%" }
							],
						}
					]}
				/>

      </div>
		);
	}
}
