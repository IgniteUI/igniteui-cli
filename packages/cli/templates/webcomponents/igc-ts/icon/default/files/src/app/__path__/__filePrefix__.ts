import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="description">
        <p>igc-icon component</p>
      </div>
      <igc-icon name="github" slot="suffix">
      </igc-icon>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
