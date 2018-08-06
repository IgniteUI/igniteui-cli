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
import "./styles.scss";

export default class  $(ClassName) extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: {
				summaries: false
			},
			employees : [
				{ "EmployeeID": "56250fa57ab1535722e564a6", "FirstName": "Downs", "LastName": "Holcomb", "Country": "Italy", "Age": 35, "RegistererDate": "07/25/2015", "IsActive": false },
				{ "EmployeeID": "56250fa5c0fd04f12555d44d",	"FirstName": "Mckenzie", "LastName": "Calderon", "Country": "USA", "Age": 26, "RegistererDate": "09/22/2014", "IsActive": false	},
				{ "EmployeeID": "56250fa565a7bcc21f6bd15e",	"FirstName": "Howell", "LastName": "Hawkins", "Country": "Canada", "Age": 25, "RegistererDate": "08/08/2015", "IsActive": false	},
				{ "EmployeeID": "56250fa5d71a83c33f3f6479",	"FirstName": "Sheppard", "LastName": "Nicholson", "Country": "Italy", "Age": 49, "RegistererDate": "06/28/2014", "IsActive": false },
				{ "EmployeeID": "56250fa546abbe8c616d37eb",	"FirstName": "Bettye", "LastName": "Trujillo", "Country": "Canada", "Age": 37, "RegistererDate": "04/19/2015", "IsActive": false },
				{ "EmployeeID": "56250fa535809820f2c44291",	"FirstName": "Joyce", "LastName": "Vaughan", "Country": "USA", "Age": 48, "RegistererDate": "04/24/2014", "IsActive": false	},
				{ "EmployeeID": "56250fa5732f6adc0b52ace0",	"FirstName": "Janine", "LastName": "Munoz", "Country": "USA", "Age": 59, "RegistererDate": "02/09/2014", "IsActive": true },
				{ "EmployeeID": "56250fa540b15dfd507cffb9",	"FirstName": "Betsy", "LastName": "Short", "Country": "USA", "Age": 26, "RegistererDate": "06/04/2015", "IsActive": false },
				{ "EmployeeID": "56250fa5a33146a85fdeda66",	"FirstName": "Tanisha", "LastName": "Harrington", "Country": "USA", "Age": 31, "RegistererDate": "11/25/2014", "IsActive": false },
				{ "EmployeeID": "56250fa572bea435113bb3be",	"FirstName": "French", "LastName": "Sullivan", "Country": "Italy", "Age": 37, "RegistererDate": "08/16/2015", "IsActive": true },
				{ "EmployeeID": "56250fa55f17965b7b19e3cf",	"FirstName": "Gomez", "LastName": "Sandoval", "Country": "Italy", "Age": 24, "RegistererDate": "06/19/2014", "IsActive": true },
				{ "EmployeeID": "56250fa5f630e559e163de06",	"FirstName": "Estes", "LastName": "Soto", "Country": "Canada", "Age": 24, "RegistererDate": "03/28/2015", "IsActive": false }
			],
			keys:["EmployeeID", "LastName", "Country", "Age", "IsActive", "Company", "RegistererDate"],
			columnsToSkip: []
		};

		this.export = () => {
			// export
			$.ig.GridExcelExporter.exportGrid($("#grid-export"), {
				fileName: "igGrid",
				worksheetName: 'Sheet1',
				gridStyling: "none",
				columnsToSkip: this.state.columnsToSkip
			});
		}
		this.selectionChanged = (ev, ui) => {
			this.setState({columnsToSkip: ui.items});
		}
	}

	showOverlay(grid) {
		var $gridContainer = $('#' + grid.attr('id') + '_container');
		var exportingOverlay = $('<div>');
		exportingOverlay.css({
			"width": $gridContainer.outerWidth(),
			"height": $gridContainer.outerHeight()
		}).html('<span class="exporting-text">Exporting...</span>');
		exportingOverlay.addClass("exporting-overlay");

		$gridContainer.append(exportingOverlay);
	}

	hideOverlay(exportingOverlay) {
		exportingOverlay.remove();
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2 style={{textAlign: "center"}}>$(description)</h2>
				</div>
				<div style={{textAlign: "center"}}>
				<IgCombo
					id="combo"
					width="200px"
					mode="dropdown"
					dataSource={this.state.keys}
					multiSelection={{
						enabled: true,
						showCheckboxes: true
					}}
					selectionChanged={this.selectionChanged}
					 />

				<IgButton
					click={this.export}
					onClick={this.export}
					labelText="Export"
					/>
				</div>
				<$(Control)
					id="grid-export"
					autoGenerateColumns={false}
					primaryKey="EmployeeID"
					width="100%"
					autofitLastColumn={true}
					columns={[
						{ headerText: "Employee ID", key: "EmployeeID", dataType: "string", hidden: true },
						{ headerText: "Last Name", key: "LastName", width: "15%", dataType: "string" },
						{ headerText: "Country", key: "Country", width: "15%", dataType: "string" },
						{ headerText: "Age", key: "Age", width: "15%", dataType: "number" },
						{ headerText: "Is Active", key: "IsActive", width: "15%", dataType: "bool", format: "checkbox" },
						{ headerText: "Company", key: "Company", width: "20%", dataType: "string", unbound: true, formula: function () { return "http://infragistics.com/"; } },
						{ headerText: "Register Date", key: "RegistererDate", width: "20%", dataType: "date" }
					]}
					dataSource={this.state.employees}
					features={$(gridfeatures)}
				/>
			</div>
		);
	}
}
