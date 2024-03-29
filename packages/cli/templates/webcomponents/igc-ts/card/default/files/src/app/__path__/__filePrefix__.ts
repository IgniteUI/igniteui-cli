import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcCardComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcCardComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    igc-card {
      width: 400px;
    }
  `;

  render() {
    return html`
      <igc-card>
        <igc-card-media style="max-height: 194px">
          <img
            src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=180"
          />
        </igc-card-media>
        <igc-card-header>
          <igc-avatar
            slot="thumbnail"
            size="small"
            shape="rounded"
            src="https://www.infragistics.com/angular-demos/assets/images/men/1.jpg"
          >
          </igc-avatar>
          <h3 slot="title">Title</h3>
          <h5 slot="subtitle">Subtitle</h5>
        </igc-card-header>
        <igc-card-content>
          <p>
            New York City comprises 5 boroughs sitting where the Hudson River
            meets the Atlantic Ocean. At its core is Manhattan, a densely
            populated borough that’s among the world’s major commercial,
            financial and cultural centers.
          </p>
        </igc-card-content>
        <hr
          style="height: 1px; margin: 0 0 8px 0; background-color: rgba(0,0,0, 0.2); border: 0px"
        />
        <igc-card-actions>
          <igc-button slot="start" variant="flat">Like</igc-button>
          <igc-button slot="start" variant="flat">Learn More</igc-button>
          <igc-icon slot="end" name="home" collection="default"></igc-icon>
        </igc-card-actions>
      </igc-card>
    `;
  }
}
