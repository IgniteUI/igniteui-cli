import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcCalendarComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcCalendarComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  render() {
    return html`
      <igc-calendar
        style="width:1300px"
        week-start="monday"
      >
        My Calendar
      </igc-calendar>
    `;
  }
}
