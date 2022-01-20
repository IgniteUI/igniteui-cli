export class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="outer-wrapper">
        <router-outlet></router-outlet>
      </div>
    `;
  }
}

customElements.define('app-root', App);
