import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IgcHierarchicalGridComponent, IgcRowIslandComponent } from 'igniteui-webcomponents-grids';
import { ARTISTS, type Artist } from './data.js';

import gridTheme from 'igniteui-webcomponents-grids/grids/themes/light/material.css?inline';

IgcHierarchicalGridComponent.register();
IgcRowIslandComponent.register();

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .page {
      width: 100%;
      margin-top: 40px;
      padding: 0 48px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .title {
      color: rgb(0, 153, 255);
      text-align: center;
      font-size: 2.5rem;
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 0;
    }

    .subtitle {
      text-align: center;
      margin-bottom: 32px;
      margin-top: 16px;
      font-size: 14px;
    }

    .subtitle a {
      color: rgb(0, 153, 255);
    }

    .grid-wrapper {
      width: 100%;
      max-width: 1200px;
    }
  `;

  @state()
  data: Artist[] = ARTISTS;

  render() {
    return html`
      <style>${gridTheme}</style>
      <div class="page">
        <p class="title">$(name)</p>
        <p class="subtitle">
          IgcHierarchicalGrid with basic configuration.<br />
          You can read more about configuring the IgcHierarchicalGrid component in the
          <a href="https://www.infragistics.com/products/ignite-ui-web-components/web-components/components/grids/hierarchical-grid/overview.html" target="_blank">
            official documentation
          </a>.
        </p>
        <div class="grid-wrapper">
          <igc-hierarchical-grid
            class="ig-typography"
            .data=${this.data}
            primary-key="Artist"
            height="600px"
            width="100%"
          >
            <igc-column field="Artist" data-type="string"></igc-column>
            <igc-column field="HasGrammyAward" header="Has Grammy Award" data-type="boolean"></igc-column>
            <igc-column field="Debut" data-type="number"></igc-column>
            <igc-column field="GrammyNominations" header="Grammy Nominations" data-type="number"></igc-column>
            <igc-column field="GrammyAwards" header="Grammy Awards" data-type="number"></igc-column>
            <igc-row-island child-data-key="Albums" primary-key="Album">
              <igc-column field="Album" data-type="string"></igc-column>
              <igc-column field="LaunchDate" header="Launch Date" data-type="date"></igc-column>
              <igc-column field="BillboardReview" header="Billboard Review" data-type="number"></igc-column>
              <igc-column field="USBillboard200" header="US Billboard 200" data-type="number"></igc-column>
              <igc-row-island child-data-key="Songs" primary-key="TrackNumber">
                <igc-column field="TrackNumber" header="Track" data-type="string"></igc-column>
                <igc-column field="Title" data-type="string"></igc-column>
                <igc-column field="Released" data-type="string"></igc-column>
                <igc-column field="Genre" data-type="string"></igc-column>
              </igc-row-island>
            </igc-row-island>
          </igc-hierarchical-grid>
        </div>
      </div>
    `;
  }
}
