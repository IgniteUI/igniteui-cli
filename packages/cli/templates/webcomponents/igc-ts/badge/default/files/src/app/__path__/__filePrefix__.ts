import {
  defineComponents,
  IgcBadgeComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcBadgeComponent);

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        #labels {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          border-style: groove;
        }
        igc-badge {
          padding: 3px;
        }
        label {
          padding: 5px;
        }
      </style>
      <div id='labels'>
        <label>Labels</label>
        <igc-badge
          outlined=true>
            Awaiting test
        </igc-badge>
        <igc-badge
          outlined=true
          variant='danger'>
            Critical issue
        </igc-badge>
        <igc-badge
            outlined=true
            variant='success'>
              Verified
        </igc-badge>
      </div>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));
