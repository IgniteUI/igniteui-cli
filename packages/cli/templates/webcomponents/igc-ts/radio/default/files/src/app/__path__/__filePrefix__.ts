import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="description">
        <p>igc-radio component</p>
      </div>
      <igc-radio>
        Label
      </igc-radio>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
