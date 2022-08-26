import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcTabsComponent,
  registerIconFromText
} from 'igniteui-webcomponents';

defineComponents(IgcTabsComponent);

const homeIcon =
'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
registerIconFromText('home', homeIcon, 'material');

const searchIcon =
'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
registerIconFromText('search', searchIcon, 'material');

const favoriteIcon =
'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
registerIconFromText('favorite', favoriteIcon, 'material');

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
    render() {
        return html`
        <igc-tabs alignment="start">
            <igc-tab panel="first">
                <igc-icon name="home" collection='material' size='large'></igc-icon>
            </igc-tab>
            <igc-tab panel="second">
                <igc-icon name="search" collection='material' size='large'></igc-icon>
            </igc-tab>
            <igc-tab panel="third" disabled>
                <igc-icon name="favorite" collection='material' size='large'></igc-icon>
            </igc-tab>
            <igc-tab-panel id="first">Content 1</igc-tab-panel>
            <igc-tab-panel id="second">Content 2</igc-tab-panel>
        </igc-tabs>
        `;
      }
}
