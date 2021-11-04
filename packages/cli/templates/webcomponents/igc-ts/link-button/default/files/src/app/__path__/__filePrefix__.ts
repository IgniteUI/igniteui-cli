import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="description">
        <p>igc-link-button component</p>
      </div>
      <igc-link-button>
        Click me
      </igc-link-button>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
