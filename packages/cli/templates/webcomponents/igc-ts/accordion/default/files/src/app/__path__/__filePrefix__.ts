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
        <igc-accordion singleExpand="false" alignment="justify">
        <igc-expansion-panel>
            <div slot="title">Ignite UI for Web Components</div>
            <p>Ignite UI for Web Components is a complete library of UI components, giving you the ability to build modern web applications using encapsulation and the concept of reusable components in a dependency-free approach.</p>
        </igc-expansion-panel>
        <igc-expansion-panel>
            <div slot="title">Ignite UI for Angular</div>
            <p>Ignite UI for Angular is a complete set of Material-based UI Widgets, Components & Sketch, Adobe XD and Figma UI kits by Infragistics. Ignite UI for Angular is designed to enable developers to build enterprise-ready, high-performance HTML5 & JavaScript apps for modern desktop browsers.</p>
        </igc-expansion-panel>
        <igc-expansion-panel>
            <div slot="title">Ignite UI for jQuery</div>
            <p>Ignite UI for jQuery helps you build powerful, high-performance web-based applications. Inside Ignite UI for jQuery you'll find user experience controls and components for creating engaging line-of-business web applications which target the browsers for both mobile & desktop environments.</p>
        </igc-expansion-panel>
        </igc-accordion>
        `;
      }
}
