import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcExpansionPanelComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcExpansionPanelComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    :host, igc-expansion-panel{
      width: 100%;
    }
  `;

  render() {
    return html`
      <igc-expansion-panel>
        <h1 slot="title">Golden Retriever</h1>
        <h3 slot="subtitle">Medium-large gun dog</h3>
        <span>
          The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
          and upland game birds, during hunting and shooting parties.[3] The name "retriever" refers to the breed's ability
          to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
          are easy to train to basic or advanced obedience standards.
        </span>
      </igc-expansion-panel>
      <igc-expansion-panel>
        <h1 slot="title">Dobermann</h1>
        <h3 slot="subtitle">Medium-large domestic dog</h3>
        <span>
          Dobermanns are known to be intelligent, alert, and tenaciously loyal companions and guard dogs.
          Personality varies a great deal between each individual but, if taken care of and properly trained, they are generally
          considered to be loving and devoted companions. The Dobermann is driven, strong, and sometimes stubborn.
          With a consistent approach, they can be easy to train and will learn very quickly.
        </span>
      </igc-expansion-panel>
    `;
  }
}
