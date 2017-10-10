  import React, { Component } from 'react';
  import 'jquery'; 
  import 'jquery-ui'
	import "ignite-ui/js/infragistics.core-lite.js";
	import "ignite-ui/js/infragistics.lob-lite.js";
	import IgDialog from "igniteui-react/ui/igDialog.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>This is igDialog</h2>
        </div>
        <IgDialog
        id="dialog"
        height= "200px"
      />
      </div>
    );
  }
}

export default App;
