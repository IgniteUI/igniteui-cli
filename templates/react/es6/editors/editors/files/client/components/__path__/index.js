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
			<h2>$(description)</h2>
        </div>
        <$(Control) id="editor" />
      </div>
    );
  }
}
