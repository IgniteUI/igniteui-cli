import { LitElement, html, customElement, css } from 'lit-element';
import './app/home/HomeComponent';
import './app/not-found/not-found.component';

@customElement('lit-app')
export class App extends LitElement {
  static styles = css`
    .topnav {
      background-color: #4f4c4c;
      overflow: hidden;
    }

    .topnav a {
      float: left;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
    }

    .topnav a:hover {
      background-color: #ddd;
      color: black;
    }

    .topnav a.active {
      background-color: #008cba;
      color: white;
    }
  `;

  render() {
    return html`
      <div class="topnav">
        <a class="active" href="/">Home</a>
      </div>

      <slot>
        <lit-home>
          Your Home component is missing!
        </lit-home>
      </slot>
    `;
  }
}
