import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lit-not-found')
export default class NotFound extends LitElement {
  render() {
    return html`
    <h2>Error 404: Page not found</h2>
    `;
  }
}
