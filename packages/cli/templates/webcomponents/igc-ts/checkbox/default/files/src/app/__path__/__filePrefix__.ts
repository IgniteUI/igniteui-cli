import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="description">
      <p>igc-checkbox component</p>
    </div>
    <igc-checkbox
      checked="true"
    >
      Label
    </igc-checkbox>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
