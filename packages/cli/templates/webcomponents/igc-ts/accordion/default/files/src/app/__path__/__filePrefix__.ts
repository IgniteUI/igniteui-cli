import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcAccordionComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcAccordionComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
    render() {
        return html`
        <igc-accordion singleExpand="false">
        <igc-expansion-panel>
            <div slot="title">Expansion panel 1 title</div>
            <div slot="subtitle">Expansion panel 1 subtitle</div>
            <p>Sample content 1</p>
        </igc-expansion-panel>
        <igc-expansion-panel>
            <div slot="title">Expansion panel 2 title</div>
            <div slot="subtitle">Expansion panel 2 subtitle</div>
            <p>Sample content 2</p>
        </igc-expansion-panel>
        <igc-expansion-panel>
            <div slot="title">Expansion panel 3 title</div>
            <div slot="subtitle">Expansion panel 3 subtitle</div>
            <p>Sample content 3</p>
            <input />
        </igc-expansion-panel>
        </igc-accordion>
        `;
      }
}
