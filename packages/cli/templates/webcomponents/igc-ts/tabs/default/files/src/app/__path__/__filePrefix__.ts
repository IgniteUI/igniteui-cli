import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcTabsComponent,
  registerIconFromText
} from 'igniteui-webcomponents';

defineComponents(IgcTabsComponent);

const libraryIcon =
'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v14"/><path d="M19 7.674v-.657a4 4 0 0 0-2.901-3.846l-2.824-.807A1 1 0 0 0 12 3.326V7l5.725 1.636A1 1 0 0 0 19 7.674Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3 3 0 1 1-6 0c0-1.657 1.343-2 3-2s3 .343 3 2Z"/></g></svg>';
registerIconFromText('library', libraryIcon, 'material');

const favoriteIcon =
'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
registerIconFromText('favorite', favoriteIcon, 'material');

const infoIcon =
'<svg xmlns="http://www.w3.org/2000/svg" width="0.38em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 192 512"><path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72s72-32.235 72-72S135.764 0 96 0z"/></svg>';
registerIconFromText('info', infoIcon, 'material');

@customElement('app-tabs')
export default class Tabs extends LitElement {
    render() {
        return html`
        <igc-tabs alignment="start" >
            <igc-tab panel="first">
                <igc-icon name="library" collection='material' size='large'></igc-icon> Albums
            </igc-tab>
            <igc-tab panel="second">
                <igc-icon name="favorite" collection='material' size='large'></igc-icon> Favourites
            </igc-tab>
            <igc-tab panel="third" disabled>
              <igc-icon name="info" collection='material' size='large'></igc-icon> Info
            </igc-tab>
            <igc-tab-panel id="first">
                <br /><br /><b>
                Sgt. Peppers Lonely Hearts Club Band <br /><br />
                The Dark Side of the Moon <br /><br />
                My Beautiful Dark Twisted Fantasy <br /><br />
                Led Zeppelin IV <br /><br />
                It Takes a Nation of Millions to Hold Us Back <br /><br />
                Thriller <br /><br /></b>
            </igc-tab-panel>
            <igc-tab-panel id="second">
                <br /><br /><b>
                The Dark Side of the Moon <br /><br />
                Led Zeppelin IV <br /><br />
                It Takes a Nation of Millions to Hold Us Back <br /><br />
                Thriller <br /><br /></b>
            </igc-tab-panel>
        </igc-tabs>
        `;
      }
}
