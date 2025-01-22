import { Component } from '@angular/core';
import {
  IgcDockManagerLayout,
  IgcDockManagerPaneType,
  IgcSplitPaneOrientation
} from '<%=dockManagerPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: false
})
export class <%=ClassName%>Component {

  public layout: IgcDockManagerLayout = {
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
              header: 'Content Pane 1'
            },
            {
              type: IgcDockManagerPaneType.contentPane,
              contentId: 'content2',
              header: 'Unpinned Pane 1',
              isPinned: false
            }
          ]
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
                        contentId: 'content3'
                      },
                      {
                        type: IgcDockManagerPaneType.contentPane,
                        header: 'Document 2',
                        contentId: 'content4'
                      }
                    ]
                  }
                ]
              }
            },
            {
              type: IgcDockManagerPaneType.contentPane,
              contentId: 'content5',
              header: 'Unpinned Pane 2',
              isPinned: false
            }
          ]
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
                  header: 'Tab 1'
                },
                {
                  type: IgcDockManagerPaneType.contentPane,
                  contentId: 'content7',
                  header: 'Tab 2'
                }
              ]
            },
            {
              type: IgcDockManagerPaneType.contentPane,
              contentId: 'content8',
              header: 'Content Pane 2'
            }
          ]
        }
      ]
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
            contentId: 'content9',
            header: 'Floating Pane'
          }
        ]
      }
    ]
  };
}
