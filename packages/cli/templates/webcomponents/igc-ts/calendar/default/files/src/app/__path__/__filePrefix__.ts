import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="description">
        <p>igc-calendar component</p>
      </div>
      <igc-calendar
        style="width:1300px"
        week-start="monday"
      >
        My Calendar
      </igc-calendar>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
