import { LitElement, html, customElement } from 'lit-element';
import './app/home/HomeComponent';
import './app/not-found/not-found.component';

@customElement('lit-app')
export class App extends LitElement {
  render() {
    return html`
      <slot>
        <lit-home>
          Your Home component is missing!
        </lit-home>
      </slot>
    `;
  }
}
