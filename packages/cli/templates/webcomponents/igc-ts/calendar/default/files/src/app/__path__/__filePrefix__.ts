import {
  defineComponents,
  IgcCalendarComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcCalendarComponent);

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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
