import React, { Component } from 'react';
import 'jquery';
import 'jquery-ui';
$(igniteImports)
import $(Control) from "igniteui-react/ui/$(widget).js";

export default class $(ClassName) extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hierarchicalDS : [
				{
					"id": 0, "tasks": "Project Plan", "start": "6/2/2014", "finish": "8/22/2014", "duration": "60d", "progress": "32%", "products": [
					{ "id": 1, "tasks": "Planning", "start": "6/2/2014", "finish": "6/4/2014", "duration": "3d", "progress": "100%" },
					{ "id": 2, "tasks": "Write a specification", "start": "6/5/2014", "finish": "6/6/2014", "duration": "2d", "progress": "100%" },
					{ "id": 3, "tasks": "Create a demo application", "start": "6/9/2014", "finish": "6/11/2014", "duration": "3d", "progress": "100%" },
					{ "id": 4, "tasks": "Collect a feedback", "start": "6/12/2014", "finish": "6/12/2014", "duration": "1d", "progress": "100%" },
					{ "id": 5, "tasks": "Design", "start": "6/13/2014", "finish": "6/19/2014", "duration": "5d", "progress": "60%", "products": [
						{ "id": 8, "tasks": "Conceptual Design", "start": "6/13/2014", "finish": "6/16/2014", "duration": "2d", "progress": "100%" },
						{ "id": 9, "tasks": "Preliminary Design", "start": "6/17/2014", "finish": "6/18/2014", "duration": "2d", "progress": "65%" },
						{ "id": 10, "tasks": "Final Design", "start": "6/19/2014", "finish": "6/19/2014", "duration": "1d", "progress": "15%" }
					]},
					{
					"id": 6, "tasks": "Development", "start": "6/20/2014", "finish": "8/20/2014", "duration": "44d", "progress": "5%", "products": [
						{ "id": 11, "tasks": "Implementation", "start": "6/20/2014", "finish": "7/17/2014", "duration": "20d", "progress": "5%" },
						{ "id": 12, "tasks": "Testing", "start": "7/18/2014", "finish": "7/31/2014", "duration": "10d", "progress": "0%" },
						{ "id": 13, "tasks": "Bug fixing", "start": "8/1/2014", "finish": "8/14/2014", "duration": "10d", "progress": "0%" },
						{ "id": 14, "tasks": "Documenting", "start": "8/15/2014", "finish": "8/20/2014", "duration": "4d", "progress": "0%" }
					]
					},
					{ "id": 7, "tasks": "Project Complete", "start": "8/21/2014", "finish": "8/22/2014", "duration": "2d", "progress": "0%" }
					]
				}
			]
		};
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2 style={{textAlign: "center"}}>$(description)</h2>
				</div>
				<$(Control)
					id="checkboxModeTreeGrid"
					width="100%"
					dataSource={this.state.hierarchicalDS}
					autoGenerateColumns={false}
					height="500"
					primaryKey="id"
					columns={[
						{ headerText: "ID", key: "id", width: "10%", dataType: "number", hidden: true },
						{ headerText: "Tasks", key: "tasks", width: "30%", dataType: "string" },
						{ headerText: "Start", key: "start", width: "20%", dataType: "string" },
						{ headerText: "Finish", key: "finish", width: "20%", dataType: "string" },
						{ headerText: "Duration", key: "duration", width: "20%", dataType: "string" },
						{ headerText: "Progress", key: "progress", width: "10%", dataType: "string" }
					]}
					childDataKey="products"
					features={$(treeGridFeatures)}
				/>
      		</div>
		);
	}
}
