import React, { Component } from 'react';
import 'jquery';
import 'jquery-ui';
$(igniteImports)
import $(Control) from "igniteui-react/ui/$(widget).js";

export default class $(ClassName) extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
			<h2 style={{textAlign: "center", marginBottom: "2vw"}}>$(description)</h2>
        </div>
		<div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
        	<$(Control) id="editor" />
		</div>
      </div>
    );
  }
}
