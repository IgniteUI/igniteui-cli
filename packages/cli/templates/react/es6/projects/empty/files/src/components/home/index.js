import React, { Component } from "react";

export default class Home extends Component {
  state = {};

  render() {
    return (
      <article>
        <h1>Welcome to Ignite UI for React Wrappers!</h1>
        <a
          href="https://github.com/IgniteUI/igniteui-react-wrappers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://static.infragistics.com/marketing/Website/products/ignite/Ignite-header-apps-960.png"
            alt="Ignite UI"
            height="550"
            width="550"
          />
        </a>
      </article>
    );
  }
}
