import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import {
  defineComponents,
  IgcDateTimeInputComponent,
  registerIconFromText
} from 'igniteui-webcomponents';

defineComponents(IgcDateTimeInputComponent);
const clearIcon =
'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
registerIconFromText('clear', clearIcon, 'material');

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
    @query('igc-date-time-input')
      _input!: Element

    render() {
    return html`
    <igc-date-time-input
    label="Choose Date"
    .value=${new Date(2022, 6, 12, 7, 30, 0)}
    .inputFormat="dd/MM/yyyy"
    .displayFormat="dd/MM/yyyy"
    .minValue=${new Date(2022, 6, 2, 7, 30, 0)}
    .maxValue=${new Date(2022, 6, 27, 7, 30, 0)}
    .spinDelta={date: 2, year: 10,}>
        <igc-icon name="clear" collection='material' size='large' slot="suffix" @click=${handleClear}></igc-icon>
        <span slot="helper-text">This is some helper text</span>
    </igc-date-time-input>
        `;
      }

    handleClear() {
        (this._input as IgcDateTimeInputComponent)!.clear();
    }
}
