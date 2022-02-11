import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-not-found')
export default class NotFound extends LitElement {
  render() {
    return html`
      <h2>Error 404: Page not found</h2>
    `;
  }
}
