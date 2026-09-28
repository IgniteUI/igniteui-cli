import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcBreadcrumbComponent,
  IgcBreadcrumbsComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcBreadcrumbsComponent, IgcBreadcrumbComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <nav aria-label="Breadcrumb">
        <igc-breadcrumbs>
          <igc-breadcrumb>
            <a href="/home">Home</a>
          </igc-breadcrumb>
          <igc-breadcrumb>
            <a href="/category">Category</a>
          </igc-breadcrumb>
          <igc-breadcrumb current>
            <a href="/category/item">Item</a>
          </igc-breadcrumb>
        </igc-breadcrumbs>
      </nav>
    `;
  }
}
