import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import {
  defineComponents,
  IgcDockManagerComponent,
  type IgcDockManagerLayout,
} from 'igniteui-dockmanager';

defineComponents(IgcDockManagerComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      margin: 0px;
      width: calc(100% - 275px);
    }

    .dockManagerContent {
      padding: 0.5rem;
      height: calc(100% - 1rem);
      width: calc(100% - 1rem);
      display: flex;
      flex-direction: column;
      /* background: orange; */
    }
  `;

  @state()
  private layout: IgcDockManagerLayout = {
    rootPane: {
      type: 'splitPane',
      orientation: 'horizontal',
      panes: [
        {
          type: 'splitPane',
          orientation: 'vertical',
          panes: [
            {
              type: 'contentPane',
              contentId: 'content1',
              header: 'Content Pane 1',
            },
            {
              type: 'contentPane',
              contentId: 'content2',
              header: 'Unpinned Pane 1',
              isPinned: false,
            },
          ],
        },
        {
          type: 'splitPane',
          orientation: 'vertical',
          size: 200,
          panes: [
            {
              type: 'documentHost',
              size: 200,
              rootPane: {
                type: 'splitPane',
                orientation: 'horizontal',
                panes: [
                  {
                    type: 'tabGroupPane',
                    panes: [
                      {
                        type: 'contentPane',
                        header: 'Document 1',
                        contentId: 'content3',
                      },
                      {
                        type: 'contentPane',
                        header: 'Document 2',
                        contentId: 'content4',
                      },
                    ],
                  },
                ],
              },
            },
            {
              type: 'contentPane',
              contentId: 'content5',
              header: 'Unpinned Pane 2',
              isPinned: false,
            },
          ],
        },
        {
          type: 'splitPane',
          orientation: 'vertical',
          panes: [
            {
              type: 'tabGroupPane',
              size: 200,
              panes: [
                {
                  type: 'contentPane',
                  contentId: 'content6',
                  header: 'Tab 1',
                },
                {
                  type: 'contentPane',
                  contentId: 'content7',
                  header: 'Tab 2',
                },
                {
                  type: 'contentPane',
                  contentId: 'content8',
                  header: 'Tab 3',
                },
                {
                  type: 'contentPane',
                  contentId: 'content9',
                  header: 'Tab 4',
                },
                {
                  type: 'contentPane',
                  contentId: 'content10',
                  header: 'Tab 5',
                },
              ],
            },
            {
              type: 'contentPane',
              contentId: 'content11',
              header: 'Content Pane 2',
            },
          ],
        },
      ],
    },
    floatingPanes: [
      {
        type: 'splitPane',
        orientation: 'horizontal',
        floatingHeight: 150,
        floatingWidth: 250,
        floatingLocation: { x: 300, y: 200 },
        panes: [
          {
            type: 'contentPane',
            contentId: 'content12',
            header: 'Floating Pane',
          },
        ],
      },
    ],
  };

  render() {
    return html`
    <igc-dockmanager .layout=${this.layout}>
      <div slot="content1" class="dockManagerContent">Content 1</div>
      <div slot="content2" class="dockManagerContent">Content 2</div>
      <div slot="content3" class="dockManagerContent">Content 3</div>
      <div slot="content4" class="dockManagerContent">Content 4</div>
      <div slot="content5" class="dockManagerContent">Content 5</div>
      <div slot="content6" class="dockManagerContent">Content 6</div>
      <div slot="content7" class="dockManagerContent">Content 7</div>
      <div slot="content8" class="dockManagerContent">Content 8</div>
      <div slot="content9" class="dockManagerContent">Content 9</div>
      <div slot="content10" class="dockManagerContent">Content 10</div>
      <div slot="content11" class="dockManagerContent">Content 11</div>
      <div slot="content12" class="dockManagerContent">Content 12</div>
    </igc-dockmanager>
  `;
  }
}
