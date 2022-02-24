import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  IgcDockManagerComponent,
  IgcDockManagerPaneType,
  IgcSplitPaneOrientation,
} from 'igniteui-dockmanager';

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    :host, igc-dockmanager {
      height: 100%;
      margin: 0px;
      padding-left: 275px;
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

    .dockManagerFull {
      padding: 0rem;
      margin: 0rem;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .dockManagerFrame {
      padding: 0rem;
      margin: 0rem;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .employeesDetailsRow {
      height: 4rem;
      display: flex;
      flex-direction: row;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      align-items: center;
    }
  `;

  render() {
    return html`
    <igc-dockmanager id="dockManager">
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

  firstUpdated() {
    const dockManager = this.shadowRoot?.getElementById('dockManager') as IgcDockManagerComponent;
    dockManager.layout = {
      rootPane: {
        type: IgcDockManagerPaneType.splitPane,
        orientation: IgcSplitPaneOrientation.horizontal,
        panes: [
          {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.vertical,
            panes: [
              {
                type: IgcDockManagerPaneType.contentPane,
                contentId: 'content1',
                header: 'Content Pane 1',
              },
              {
                type: IgcDockManagerPaneType.contentPane,
                contentId: 'content2',
                header: 'Unpinned Pane 1',
                isPinned: false,
              },
            ],
          },
          {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.vertical,
            size: 200,
            panes: [
              {
                type: IgcDockManagerPaneType.documentHost,
                size: 200,
                rootPane: {
                  type: IgcDockManagerPaneType.splitPane,
                  orientation: IgcSplitPaneOrientation.horizontal,
                  panes: [
                    {
                      type: IgcDockManagerPaneType.tabGroupPane,
                      panes: [
                        {
                          type: IgcDockManagerPaneType.contentPane,
                          header: 'Document 1',
                          contentId: 'content3',
                        },
                        {
                          type: IgcDockManagerPaneType.contentPane,
                          header: 'Document 2',
                          contentId: 'content4',
                        },
                      ],
                    },
                  ],
                },
              },
              {
                type: IgcDockManagerPaneType.contentPane,
                contentId: 'content5',
                header: 'Unpinned Pane 2',
                isPinned: false,
              },
            ],
          },
          {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.vertical,
            panes: [
              {
                type: IgcDockManagerPaneType.tabGroupPane,
                size: 200,
                panes: [
                  {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'content6',
                    header: 'Tab 1',
                  },
                  {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'content7',
                    header: 'Tab 2',
                  },
                  {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'content8',
                    header: 'Tab 3',
                  },
                  {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'content9',
                    header: 'Tab 4',
                  },
                  {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'content10',
                    header: 'Tab 5',
                  },
                ],
              },
              {
                type: IgcDockManagerPaneType.contentPane,
                contentId: 'content11',
                header: 'Content Pane 2',
              },
            ],
          },
        ],
      },
      floatingPanes: [
        {
          type: IgcDockManagerPaneType.splitPane,
          orientation: IgcSplitPaneOrientation.horizontal,
          floatingHeight: 150,
          floatingWidth: 250,
          floatingLocation: { x: 300, y: 200 },
          panes: [
            {
              type: IgcDockManagerPaneType.contentPane,
              contentId: 'content12',
              header: 'Floating Pane',
            },
          ],
        },
      ],
    };
  }
}
