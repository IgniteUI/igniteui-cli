import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <igc-radio-group>
        <igc-radio name="fruit" value="banana">
          Banana
        </igc-radio>
        <igc-radio name="fruit" value="orange">
          Orange
        </igc-radio>
        <igc-radio name="fruit" value="mango">
          Mango
        </igc-radio>
      </igc-radio-group>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));