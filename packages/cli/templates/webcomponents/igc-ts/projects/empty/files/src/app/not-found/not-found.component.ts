import { LitElement, html, customElement } from 'lit-element';

@customElement('lit-not-found')
export class HomeComponent extends LitElement {
  render() {
    return html`
    <h2>Error 404: Page not found</h2>
    `;
  }
}
