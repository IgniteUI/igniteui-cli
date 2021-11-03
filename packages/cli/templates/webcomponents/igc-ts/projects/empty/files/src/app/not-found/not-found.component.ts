export default class NotFound extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h2>Error 404: Page not found</h2>
    `;
  }
}

customElements.define('app-not-found', NotFound);
