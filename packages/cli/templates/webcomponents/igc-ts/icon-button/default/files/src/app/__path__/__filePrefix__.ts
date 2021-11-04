import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="description">
      <p>igc-icon-button component</p>
    </div>
      <igc-icon-button>
      </igc-icon-button>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
