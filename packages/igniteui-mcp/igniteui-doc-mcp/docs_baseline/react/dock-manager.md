---
title: React Dock Manager | Layout Controls | Infragistics
_description: Use Infragistics' React dock manager component to manage the layout through panes, with the ability to customize it by pinning, resizing, moving and hiding panes. Check out Ignite UI for React dock manager tutorials!
_keywords: dock manager, layout, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["DockManager", "DocumentHost", "DockManagerLayout", "DockManagerPaneType", "ContentPane", "SplitPane", "TabGroupPane", "PinnedLocation", "PaneHeaderElement"]
_tocName: Dock Manager
---

# React Dock Manager Overview

The Infragistics React Dock Manager provides a means to manage the layout of your application through panes, allowing your end-users to customize it further by pinning, resizing, moving, maximizing and hiding panes.

## React Dock Manager Example

This example shows most functionalities and docking options of the [`IgrDockManager`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html) that you can use in your application.

```css
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
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './DockManagerStyles.css';
import {  IgrDockManager, IgrDockManagerPaneType, IgrSplitPaneOrientation } from 'igniteui-react-dockmanager';

export default class DockManagerOverview extends React.Component {

    public dockManager: IgrDockManager;

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDockManager id="dockManager">
                    <div slot="content1" className="dockManagerContent">Content 1</div>
                    <div slot="content2" className="dockManagerContent">Content 2</div>
                    <div slot="content3" className="dockManagerContent">Content 3</div>
                    <div slot="content4" className="dockManagerContent">Content 4</div>
                    <div slot="content5" className="dockManagerContent">Content 5</div>
                    <div slot="content6" className="dockManagerContent">Content 6</div>
                    <div slot="content7" className="dockManagerContent">Content 7</div>
                    <div slot="content8" className="dockManagerContent">Content 8</div>
                    <div slot="content9" className="dockManagerContent">Content 9</div>
                </IgrDockManager>
            </div>
        );
    }

    public createContentPane(contentID: string, paneHeader: string): any {
        const pane = {
            // size: 150,
            header: paneHeader,
            type: IgrDockManagerPaneType.contentPane,
            contentId: contentID
        };
        return pane;
    }

    public createSplitPane(orientation: IgrSplitPaneOrientation, contentPanes: any[], size?: number): any {
        const pane =  {
            type: IgrDockManagerPaneType.splitPane,
            orientation: orientation,
            panes: contentPanes,
            size: size
        };
        return pane;
    }

    public createTabPane(orientation: IgrSplitPaneOrientation, contentPanes: any[], size?: number): any {
        const pane =  {
            type: IgrDockManagerPaneType.documentHost,
            size: size,
            rootPane: {
                type: IgrDockManagerPaneType.splitPane,
                orientation: orientation,
                panes: [
                    {
                        type: IgrDockManagerPaneType.tabGroupPane,
                        panes: contentPanes
                    }
                ]
            }
        };
        return pane;
    }

    public componentDidMount() {

        const pane1 = this.createContentPane('content1', 'Content Pane 1');
        const pane2 = this.createContentPane('content2', 'Unpinned Pane 1');
        pane2.isPinned = false;

        const pane3 = this.createContentPane('content3', 'Document 1');
        const pane4 = this.createContentPane('content4', 'Document 2');

        const contentPane5 = this.createContentPane('content5', 'Unpinned Pane 2');
        contentPane5.isPinned = false;

        const pane6 = this.createContentPane('content6', 'Tab 1');
        const pane7 = this.createContentPane('content7', 'Tab 2');
        const pane8 = this.createContentPane('content8', 'Content Pane 2');
        const pane9 = this.createContentPane('content9', 'Floating Pane');

        const tabPane1 = this.createTabPane(IgrSplitPaneOrientation.horizontal, [ pane3, pane4 ], 200);

        const splitPane1 = this.createSplitPane(IgrSplitPaneOrientation.vertical, [ pane1, pane2 ]);
        const splitPane2 = this.createSplitPane(IgrSplitPaneOrientation.vertical, [ tabPane1, contentPane5 ], 200);

        this.dockManager = document.getElementById("dockManager") as IgrDockManager;
        this.dockManager.layout = {
            rootPane: {
                type: IgrDockManagerPaneType.splitPane,
                orientation: IgrSplitPaneOrientation.horizontal,
                panes: [
                    splitPane1, // or:
                    // {
                    //     type: IgrDockManagerPaneType.splitPane,
                    //     orientation: IgrSplitPaneOrientation.vertical,
                    //     panes: [ pane1, pane2 ]
                    // },
                    splitPane2, // or:
                    // {
                    //     type: IgrDockManagerPaneType.splitPane,
                    //     orientation: IgrSplitPaneOrientation.vertical,
                    //     size: 200,
                    //     panes: [
                    //         tabPane1,
                    //         contentPane5
                    //     ]
                    // },
                    {
                        type: IgrDockManagerPaneType.splitPane,
                        orientation: IgrSplitPaneOrientation.vertical,
                        panes: [
                            {
                                type: IgrDockManagerPaneType.tabGroupPane,
                                size: 200,
                                panes: [ pane6, pane7 ]
                            },
                            pane8
                        ]
                    }
                ]
            },
            floatingPanes: [
                {
                    type: IgrDockManagerPaneType.splitPane,
                    orientation: IgrSplitPaneOrientation.horizontal,
                    floatingHeight: 150,
                    floatingWidth: 250,
                    floatingLocation: { x: 300, y: 200 },
                    panes: [ pane9 ]
                }
            ]
        };
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DockManagerOverview/>);
```


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

To install the Dock Manager package execute the following command:

```cmd
npm install --save igniteui-react-dockmanager
```

<!-- end: Angular, React, WebComponents -->

<!-- end: Angular, React, WebComponents -->

<div class="divider--half"></div>

<!-- React, WebComponents -->

## Usage

Once the Dock Manager is imported, you can add it on the page:

```tsx
<IgrDockManager id="dockManager">
</IgrDockManager>
```

> \[!Note]
> Since the Dock Manager component uses ShadowDOM and slots it is not supported on older browsers like Internet Explorer 11 and Edge 18 and below (non-Chromium versions).

The Dock Manager has a [`layout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#layout) property, which describes the layout of the panes. To start defining a layout, you should set the [`rootPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdocumenthost.html#rootPane) property and add child panes. Here is how you can define a layout with a single content pane:

```tsx
import {  IgrDockManager, IgrDockManagerPaneType, IgrSplitPaneOrientation } from 'igniteui-react-dockmanager';

// ...

this.dockManager = document.getElementById("dockManager") as IgrDockManager;
this.dockManager.layout = {
    rootPane: {
        type: IgrDockManagerPaneType.splitPane,
        orientation: IgrSplitPaneOrientation.horizontal,
        panes: [
            {
                type: IgrDockManagerPaneType.contentPane,
                contentId: 'content1',
                header: 'Pane 1'
            }
        ]
    }
};
```

To load the content of the panes, the Dock Manager uses [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot). The [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute of the content element should match the [`contentId`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#contentId) of the content pane in the layout configuration. It is highly recommended to set width and height of the content elements to **100%** for predictable response when the end-user is resizing panes.

```tsx
<IgrDockManager id="dockManager">
    <div slot="content1" style={{ width: '100%', height: '100%' }}>Content 1</div>
</IgrDockManager>
```

The Dock Manager defines several pane types:

- [`IgrContentPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html)
- [`IgrSplitPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrsplitpane.html)
- [`IgrTabGroupPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrtabgrouppane.html)
- [`IgrDocumentHost`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdocumenthost.html)

Each type of pane has a [`size`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdocumenthost.html#size) property. Depending on the parent orientation the size may affect either the width or the height of the pane. By default, the size of a pane is relative to the sizes of its sibling panes and defaults to 100. If you have two sibling panes, where the first one has its size set to 200 and the second one - size set to 100, the first will be twice the size of the second one and these two panes would fill up all the available space. If the absolute size of their parent is 900px, they will be sized to 600px and 300px respectively. If, for certain panes, you want to specify their sizes in pixels, instead of relying on the relative distribution of all the available space, you should set the `useFixedSize` of the parent split pane.

The end-user can perform the following actions to customize the layout at runtime:

- Pin/unpin a pane
- Resize a pane
- Close a pane
- Drag a pane to make it float
- Move a floating pane
- Dock a floating pane
- Maximize a pane

All of these are reflected in the [`layout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#layout) property of the Dock Manager.

### Content Pane

The [`IgrContentPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html) represents a pane with header and content. It can be hosted inside a Split Pane or a Tab Group Pane. Here is how a content pane is defined:

```tsx
const contentPane: IgrContentPane = {
    type: IgrDockManagerPaneType.contentPane,
    contentId: 'content1',
    header: 'Pane 1'
}
```

The [`header`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#header) property is used to provide a text header for the content pane. This text is rendered at several places: the top content pane header, the tab header if the pane is in a tab group and the unpinned header if the pane is unpinned. You can provide a custom slot content for each of these places respectively using the [`headerId`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#headerId), [`tabHeaderId`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#tabHeaderId) and [`unpinnedHeaderId`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#unpinnedHeaderId) properties. If any of these properties is not set, the [`header`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#header) text is used. Here is how to provide a tab header slot content:

```tsx
<IgrDockManager id="dockManager">
    <div slot="content1" style={{ width: '100%', height: '100%' }}>Content 1</div>
    <span slot="tabHeader1">Pane 1 Tab</span>
</IgrDockManager>
```

```tsx
const contentPane: IgrContentPane = {
    type: IgrDockManagerPaneType.contentPane,
    contentId: 'content1',
    header: 'Pane 1',
    tabHeaderId: 'tabHeader1'
}
```

When a pane is unpinned, it appears as a tab header at one of the edges of the Dock Manager. If the end-user selects it, its content appears over the docked pinned panes. To unpin a content pane, set its [`isPinned`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#isPinned) property to **false**.

```tsx
const contentPane = {
    type: IgrDockManagerPaneType.contentPane,
    contentId: 'content1',
    header: 'Pane 1',
    isPinned: false
}
```

The [`isPinned`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#isPinned) property affects only content panes that are docked outside a document host. Also, content panes hosted in a floating pane cannot be unpinned.

By default, the unpin destination for a content pane is calculated automatically based on the location of the pane relative to the document host. When more than one document host is defined, the nearest one in the parent hierarchy of the unpinned content pane will be used. If there is no document host defined, the default location is used - `Left`. It is also possible to set the desired destination of the unpinned pane by using the [`unpinnedLocation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#unpinnedLocation) property.

You can configure which end-user operations are allowed for a content pane using its [`allowClose`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#allowClose), [`allowPinning`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#allowPinning), [`allowDocking`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#allowDocking) and [`allowFloating`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#allowFloating) properties.

When defining a content pane, you can set the [`documentOnly`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#documentOnly) property to true so the pane can be docked only in a document host.

To restrict the user interaction with the content pane and its content, you can set the [`disabled`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#disabled) property to true. This will prevent all user interactions with the pane unless it is a single floating pane. The latter could be moved, maximized or closed (according to the pane's settings for maximizing and closing), so the user can have a look at the elements under it but will not be able to interact with its content.

By default, when you close a pane it gets removed from the [`layout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#layout) object. However, in some cases you would want to temporary hide the pane and show it later again. In order to do that without changing the [`layout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#layout) object you can use the [`hidden`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html#hidden) property of the content pane. Setting the property to **true** will hide it from the UI, but it will remain in the [`layout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#layout) object. In order to override the default close behavior you can subscribe to the `PaneClose` event like this:

```ts
this.dockManager.addEventListener('paneClose', ev => {
    for (const pane of ev.detail.panes) {
        pane.hidden = true;
    }
    ev.preventDefault();
});
```

```tsx
this.dockManager.addEventListener('paneClose', ev => {
    for (const pane of ev.detail.panes) {
        pane.hidden = true;
    }
    ev.preventDefault();
});
```

### Split Pane

The [`IgrSplitPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrsplitpane.html) is a container pane which stacks all of its child [`panes`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrsplitpane.html#panes) horizontally or vertically based on its [`orientation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrsplitpane.html#orientation) property. Here is how a horizontal split pane with two child content panes is defined:

```tsx
const splitPane: IgrSplitPane = {
    type: IgrDockManagerPaneType.splitPane,
    orientation: IgrSplitPaneOrientation.horizontal,
    panes: [
        {
            type: IgrDockManagerPaneType.contentPane,
            contentId: 'content1',
            header: 'Pane 1'
        },
        {
            type: IgrDockManagerPaneType.contentPane,
            contentId: 'content2',
            header: 'Pane 2'
        }
    ]
}
```

The split pane may contain child panes of all pane types including other split panes.

By default, if the split pane is empty it is not displayed. Yet if you would like to change that behavior you can set its [`allowEmpty`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrsplitpane.html#allowEmpty) property to true and the split pane will be presented in the UI even when there is no panes inside it.

### Tab Group Pane

The [`IgrTabGroupPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrtabgrouppane.html) displays its child content [`panes`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrtabgrouppane.html#panes) as the tabs of a tab component. Here is how a tab group pane with a content pane for each of its two tabs is defined:

```tsx
const tabGroupPane: IgrTabGroupPane = {
    type: IgrDockManagerPaneType.tabGroupPane,
    panes: [
        {
            type: IgrDockManagerPaneType.contentPane,
            contentId: 'content1',
            header: 'Pane 1'
        },
        {
            type: IgrDockManagerPaneType.contentPane,
            contentId: 'content2',
            header: 'Pane 2'
        }
    ]
}
```

If there is not enough space to display all tab headers, the tab group shows **More tabs** menu, which contains the non-visible tabs. If you click a tab item in that menu, the tab gets selected and moved to the first position.

The tabs also can be reordered without being detached from the tab group in which they are located. You can click on a tab of your choice and drag it left or right to the position you want it to be. If you drag the selected tab outside of the tabs area it will be detached into a floating pane.

In case you would like the tab group pane to be displayed in the UI when it has no tabs, you can set the [`allowEmpty`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrtabgrouppane.html#allowEmpty) property to true.

### Document Host

The [`IgrDocumentHost`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdocumenthost.html) is an area of tabs for documents, similar to the one in Visual Studio for code editing and design view. Here is how to define a document host with two document tabs:

```tsx
const docHost: IgrDocumentHost = {
    type: IgrDockManagerPaneType.documentHost,
    rootPane: {
        type: IgrDockManagerPaneType.splitPane,
        orientation: IgrSplitPaneOrientation.horizontal,
        panes: [
            {
                type: IgrDockManagerPaneType.tabGroupPane,
                panes: [
                    {
                        type: IgrDockManagerPaneType.contentPane,
                        contentId: 'content1',
                        header: 'Grid'
                    },
                    {
                        type: IgrDockManagerPaneType.contentPane,
                        contentId: 'content4',
                        header: "List"
                    }
                ]
            }
        ]
    }
}
```

### Floating Pane

The floating pane is a split pane rendered above all other ones in a floating window. The floating pane definitions are stored in the [`floatingPanes`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrdockmanagerlayout.html#floatingPanes) property of the [`layout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#layout). Here is how to add a floating pane with a single content pane inside:

```tsx
const layout: IgrDockManagerLayout = {
    rootPane: {
        // ...
    },
    floatingPanes: [
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.horizontal,
            floatingLocation: { x: 80, y: 80 },
            floatingWidth: 200,
            floatingHeight: 150,
            floatingResizable: true,
            panes: [
                {
                    type: IgrDockManagerPaneType.contentPane,
                    contentId: 'content1',
                    header: 'Floating Pane 1'
                }
            ]
        }
    ]
};
```

The [`floatingLocation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrsplitpane.html#floatingLocation), [`floatingWidth`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrsplitpane.html#floatingWidth) and [`floatingHeight`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrsplitpane.html#floatingHeight) properties represent absolute dimensions in pixels. Please note that these properties are applied only for the split panes in the [`floatingPanes`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrdockmanagerlayout.html#floatingPanes) array.

With the [`floatingResizable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrsplitpane.html#floatingResizable) and
[`allowFloatingPanesResize`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#allowFloatingPanesResize) you can set whether resizing floating panes is allowed. The `allowFloatingPanesResize` is an **IgcDockManagerComponent** property, so if the value is set to **false** none of the floating panes can be resized. The `floatingResizable` property can be applied separately on each split pane in the `floatingPanes` array and if the property value is not set, it defaults to the value of the `allowFloatingPanesResize` property. If the `floatingResizable` property is set for a specific pane, its value takes precedence over the `allowFloatingPanesResize` property value.

### Active Pane

The Dock Manager component highlights the content pane which contains the focus and exposes it in its [`activePane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#activePane) property. You can programmatically change the active pane by setting the property. You can also listen for changes of the [`activePane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#activePane) property by subscribing to the `ActivePaneChanged` event:

```ts
this.dockManager.addEventListener('activePaneChanged', ev => {
    console.log(ev.detail.oldPane);
    console.log(ev.detail.newPane);
});
```

```tsx
this.dockManager.addEventListener('activePaneChanged', ev => {
    console.log(ev.detail.oldPane);
    console.log(ev.detail.newPane);
});
```

### Docking

When you start dragging a floating pane, different docking indicators will appear depending on the position of the dragged pane. There are four main types of docking - root docking, pane docking, document host docking and splitter docking. Edge docking is available as an additional behavior when root docking is disabled and works along the orientation of the root split pane.

#### Root Docking

In this type of docking while dragging a pane, four arrow docking indicators will appear close to the four edges of the dock manager. Once released, the dragged pane will become a direct child of the Dock Manager's [`rootPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdocumenthost.html#rootPane). Visually, the newly docked pane will snap into place at the respective edge and occupy up to half of the dock manager's width or height, shifting all the other content to the other half.

<img class="responsive-img" src="../../images/dockmanager-root-docking.jpg" alt="dockmanager-root-docking" />

#### Pane Docking

Docking indicators will appear in the center of a content pane or a tab group pane when dragging the floating pane over it. Once released, the dragged pane will snap into place on any side of the target pane or get grouped together with the target pane to create a tabbed layout. Based on the combination of the initial layout and the dock position, the docking operation may cause the dynamic creation of a new split or tab group pane that would become the new parent of both the dragged and the target panes.

<img class="responsive-img" src="../../images/dockmanager-pane-docking.jpg" alt="dockmanager-pane-docking" />

#### Document Host Docking

If the dragged pane is over a document host, then additional docking indicators will appear that will allow for docking relative to the target pane or the whole document host.

<img class="responsive-img" src="../../images/dockmanager-document-host-docking.jpg" alt="dockmanager-document-host-docking" />

#### Splitter Docking

Splitter docking lets your end-users place panes with precision inside an existing split layout. While dragging a floating pane, if the cursor moves close to any splitter between two panes, a docking indicator will appear over that splitter.

When the user drops the pane over this indicator, the dock manager inserts the pane into the split pane that owns the targeted splitter, adjusting the neighboring panes to make room. This makes it easy to refine complex layouts by inserting new tools or views exactly between two existing panes, without having to restructure the entire layout.

If your scenario requires a simpler experience without this level of precision, splitter docking can be disabled by setting the Dock Manager `allowSplitterDock` property to **false**.

<img class="responsive-img" src="../../images/dockmanager-splitter-docking.jpg" alt="dockmanager-splitter-docking"/>

#### Edge Docking

Edge docking gives your end-users a simple way to add important panes at the very beginning or at the very end of their main layout, without having to carefully target a specific splitter or pane. Once root docking is disabled by setting the `allowRootDock` property to **false**, the dock manager automatically enables edge docking indicators along the first and last positions of the root split pane. Since the root split pane is either horizontal or vertical, edge docking is available only in that single direction (left/right for a horizontal root or top/bottom for a vertical root).

This behavior is especially useful when the root pane is scrollable (when its `useFixedSize` property is set to **true** and the content extends beyond the visible area). In these scenarios, users can:

- For a **horizontal** root split pane, drag any pane towards the **left** edge to dock it as the first item, or towards the **right** edge to dock it as the last item.
- For a **vertical** root split pane, drag any pane towards the **top** edge to dock it as the first item, or towards the **bottom** edge to dock it as the last item.

When the user drops the pane over the edge docking indicator, the dock manager inserts the pane at the chosen edge and automatically scrolls it into view. This ensures that newly added tool windows or dashboards are immediately visible, even in complex, scrollable layouts.

<img class="responsive-img" src="../../images/dockmanager-edge-docking.jpg" alt="dockmanager-edge-docking"/>

### Update Layout

In some scenarios you may need to customize the layout of the Dock Manager by adding or removing a pane, changing orientation, etc., for example:

```tsx
const splitPane = this.dockManager.layout.rootPane.panes[0] as IgrSplitPane;
const contentPane = splitPane.panes[0] as IgrContentPane;
this.dockManager.removePane(contentPane);
```

This will only update the layout object. To trigger an update of the Dock Manager so the changes are reflected in the UI, the layout object should be re-assigned:

```ts
this.dockManager.layout = { ...this.dockManager.layout };
```

```tsx
this.dockManager.layout = { ...this.dockManager.layout };
```

### Save/Load Layout

To restore or persist a layout, you simply have to get/set the value of the [`layout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#layout) property. Here is how to save the layout as a stringified JSON:

```ts
private savedLayout: string;

private saveLayout() {
    this.savedLayout = JSON.stringify(this.dockManager.layout);
}

private loadLayout() {
    this.dockManager.layout = JSON.parse(this.savedLayout);
}
```

```tsx
private savedLayout: string;

private saveLayout() {
    this.savedLayout = JSON.stringify(this.dockManager.layout);
}

private loadLayout() {
    this.dockManager.layout = JSON.parse(this.savedLayout);
}
```

### Events

The Dock Manager component raises events when specific end-user interactions are performed for example closing, pinning, resizing and dragging a pane. You can find the full list of Dock Manager events in this [topic](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagereventmap.html).

<!-- end: React, WebComponents -->

<div class="divider--half"></div>

 <!-- WebComponents, React, Angular -->

Here is how to add an event listener for the `PaneClose` event:

```ts
this.dockManager.addEventListener('paneClose', ev => console.log(ev.detail));
```

<!-- end: WebComponents, React, Angular -->

<div class="divider--half"></div>

<div class="divider--half"></div>

## Customization

The Dock Manager component provides the option to customize all buttons using slots and parts. To change any of the buttons you simply have to define your own element inside the Dock Manager and set the slot attribute to the corresponding identifier.

Let's utilize these slots and parts to create a customized Dock Manager layout. First, we will provide our own icons, using the `closeButton`, `maximizeButton`, `minimizeButton`, `pinButton` and `unpinButton` slots:

```tsx
<IgrDockManager id="dockManager">
    <div slot="content1" class="dockManagerContent">Content 1</div>
    <div slot="content2" class="dockManagerContent">Content 2</div>
    <div slot="content3" class="dockManagerContent">Content 3</div>
    <!-- ... -->

    <button slot="closeButton">x</button>

    <button slot="maximizeButton">
        <img src="https://www.svgrepo.com/show/419558/arrow-top-chevron-chevron-top.svg" alt="arrow-top-chevron-chevron-top" />
    </button>

    <button slot="minimizeButton">
        <img src="https://www.svgrepo.com/show/419557/bottom-chevron-chevron-down.svg" alt="bottom-chevron-chevron-down" />
    </button>

    <button slot="pinButton">
        <img src="https://www.svgrepo.com/show/154123/pin.svg" alt="pin" />
    </button>

    <button slot="unpinButton">
        <img src="https://www.svgrepo.com/show/154123/pin.svg" alt="pin" />
    </button>
</IgrDockManager>
```

Then, we will use the exposed parts in our stylesheet. This way we have full control of the component's styling:

```css
igc-dockmanager::part(unpinned-tab-area) {
    background: #bee9ec;
}

igc-dockmanager::part(unpinned-tab-area--left) {
    border-right: 1px dashed #004d7a;
}

igc-dockmanager::part(unpinned-tab-area--bottom) {
    border-top: 1px dashed #004d7a;
}

igc-dockmanager::part(tab-header-close-button),
igc-dockmanager::part(pane-header-close-button) {
    background-color: #e73c7e;
}

igc-dockmanager::part(pane-header-pin-button),
igc-dockmanager::part(pane-header-unpin-button) {
  background: rgb(218, 218, 218);
  border: none;
  width: 24px;
  height: 24px;
  color: #fff;
}

igc-dockmanager::part(tabs-maximize-button),
igc-dockmanager::part(tabs-minimize-button),
igc-dockmanager::part(pane-header-minimize-button),
igc-dockmanager::part(pane-header-maximize-button) {
  width: 24px;
  height: 24px;
  border: none;
  transition: opacity 250ms ease-in-out;
  opacity: 0.3;
  margin-right: 15px;
  margin-top: -5px;
  margin-left: 0px;
}
```

If everything went well, we should now have a DockManager with customized icons and tab area. Let's have a look at it:

```css
.dockManagerContent {
    padding: 0.5rem;
    height: calc(100% - 1rem);
    width: calc(100% - 1rem);
    display: flex;
    flex-direction: column;
    /* background: orange; */
}

igc-dockmanager::part(unpinned-tab-area) {
    background: #bee9ec;
}

igc-dockmanager::part(unpinned-tab-area--left) {
    border-right: 1px dashed #004d7a;
}

igc-dockmanager::part(unpinned-tab-area--bottom) {
    border-top: 1px dashed #004d7a;
}

igc-dockmanager::part(tab-header-close-button),
igc-dockmanager::part(pane-header-close-button) {
    background-color: #e73c7e;
}

igc-dockmanager::part(context-menu-unpin-button),
igc-dockmanager::part(pane-header-pin-button),
igc-dockmanager::part(pane-header-unpin-button) {
    background: rgb(218, 218, 218);
    border: none;
    width: 24px;
    height: 24px;
    color: #fff;
}

igc-dockmanager::part(tabs-maximize-button),
igc-dockmanager::part(tabs-minimize-button),
igc-dockmanager::part(pane-header-minimize-button),
igc-dockmanager::part(pane-header-maximize-button) {
    width: 24px;
    height: 24px;
    border: none;
    transition: opacity 250ms ease-in-out;
    opacity: 0.3;
    margin-right: 15px;
    margin-top: -5px;
    margin-left: 0px;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './DockManagerStyles.css';
import { IgrDockManager, IgrDockManagerPaneType, IgrSplitPaneOrientation } from 'igniteui-react-dockmanager';

export default class DockManagerOverview extends React.Component {

    public dockManager: IgrDockManager;

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDockManager id="dockManager">
                    <div slot="content1" className="dockManagerContent">Content 1</div>
                    <div slot="content2" className="dockManagerContent">Content 2</div>
                    <div slot="content3" className="dockManagerContent">Content 3</div>
                    <div slot="content4" className="dockManagerContent">Content 4</div>
                    <div slot="content5" className="dockManagerContent">Content 5</div>
                    <div slot="content6" className="dockManagerContent">Content 6</div>
                    <div slot="content7" className="dockManagerContent">Content 7</div>
                    <div slot="content8" className="dockManagerContent">Content 8</div>
                    <div slot="content9" className="dockManagerContent">Content 9</div>
                </IgrDockManager>
            </div>
        );
    }

    public createContentPane(contentID: string, paneHeader: string): any {
        const pane = {
            // size: 150,
            header: paneHeader,
            type: IgrDockManagerPaneType.contentPane,
            contentId: contentID
        };
        return pane;
    }

    public createSplitPane(orientation: IgrSplitPaneOrientation, contentPanes: any[], size?: number): any {
        const pane =  {
            type: IgrDockManagerPaneType.splitPane,
            orientation: orientation,
            panes: contentPanes,
            size: size
        };
        return pane;
    }

    public createTabPane(orientation: IgrSplitPaneOrientation, contentPanes: any[], size?: number): any {
        const pane =  {
            type: IgrDockManagerPaneType.documentHost,
            size: size,
            rootPane: {
                type: IgrDockManagerPaneType.splitPane,
                orientation: orientation,
                panes: [
                    {
                        type: IgrDockManagerPaneType.tabGroupPane,
                        panes: contentPanes
                    }
                ]
            }
        };
        return pane;
    }

    public componentDidMount() {

        const pane1 = this.createContentPane('content1', 'Content Pane 1');
        const pane2 = this.createContentPane('content2', 'Unpinned Pane 1');
        pane2.isPinned = false;

        const pane3 = this.createContentPane('content3', 'Document 1');
        const pane4 = this.createContentPane('content4', 'Document 2');

        const contentPane5 = this.createContentPane('content5', 'Unpinned Pane 2');
        contentPane5.isPinned = false;

        const pane6 = this.createContentPane('content6', 'Tab 1');
        const pane7 = this.createContentPane('content7', 'Tab 2');
        const pane8 = this.createContentPane('content8', 'Content Pane 2');
        const pane9 = this.createContentPane('content9', 'Floating Pane');

        const tabPane1 = this.createTabPane(IgrSplitPaneOrientation.horizontal, [ pane3, pane4 ], 200);

        const splitPane1 = this.createSplitPane(IgrSplitPaneOrientation.vertical, [ pane1, pane2 ]);
        const splitPane2 = this.createSplitPane(IgrSplitPaneOrientation.vertical, [ tabPane1, contentPane5 ], 200);

        this.dockManager = document.getElementById("dockManager") as IgrDockManager;
        this.dockManager.layout = {
            rootPane: {
                type: IgrDockManagerPaneType.splitPane,
                orientation: IgrSplitPaneOrientation.horizontal,
                panes: [
                    splitPane1, // or:
                    // {
                    //     type: IgcDockManagerPaneType.splitPane,
                    //     orientation: IgcSplitPaneOrientation.vertical,
                    //     panes: [ pane1, pane2 ]
                    // },
                    splitPane2, // or:
                    // {
                    //     type: IgcDockManagerPaneType.splitPane,
                    //     orientation: IgcSplitPaneOrientation.vertical,
                    //     size: 200,
                    //     panes: [
                    //         tabPane1,
                    //         contentPane5
                    //     ]
                    // },
                    {
                        type: IgrDockManagerPaneType.splitPane,
                        orientation: IgrSplitPaneOrientation.vertical,
                        panes: [
                            {
                                type: IgrDockManagerPaneType.tabGroupPane,
                                size: 200,
                                panes: [ pane6, pane7 ]
                            },
                            pane8
                        ]
                    }
                ]
            },
            floatingPanes: [
                {
                    type: IgrDockManagerPaneType.splitPane,
                    orientation: IgrSplitPaneOrientation.horizontal,
                    floatingHeight: 150,
                    floatingWidth: 250,
                    floatingLocation: { x: 300, y: 200 },
                    panes: [ pane9 ]
                }
            ]
        };
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DockManagerOverview/>);
```


Below you can find a list containing the slot names for all of the buttons as well as the splitter handle:

| Slot name | Description |
| ----------|------------ |
| `closeButton` | The close buttons. |
| `paneHeaderCloseButton` | The close buttons of the pane headers. |
| `tabHeaderCloseButton` | The close buttons of the tab headers. |
| `moreTabsButton` | The more tabs buttons. |
| `moreOptionsButton` | The more options buttons. |
| `maximizeButton` | The maximize buttons. |
| `minimizeButton` | The minimize buttons. |
| `pinButton` | The pin buttons. |
| `unpinButton` | The unpin buttons. |
| `splitterHandle` | The splitter handle. |

You can find each slot's corresponding part in the **CSS Parts** under **Styling** section of this page.

### CSS Variables

The following table describes all CSS variables used for styling the dock-manager component:

| CSS variable         | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| `--igc-background-color`               | The background color of the header inside the pane navigator component. |
| `--igc-accent-color`                   | The background color of the buttons inside the pane header actions part on focus. |
| `--igc-active-color`                   | The text and box-shadow color used for the components in active state. |
| `--igc-border-color`                   | The border bottom color of the pane header component. |
| `--igc-font-family`                    | The font-family of the dock-manager component. |
| `--igc-dock-background`                | The background color of the dock-manager, tab and floating-pane components. |
| `--igc-dock-text`                      | The text color of the dock-manager and the floating pane components. |
| `--igc-pane-header-background`         | The background color of the pane header component. |
| `--igc-pane-header-text`               | The text color of the pane header component. |
| `--igc-pane-content-background`        | The background color of the content inside the dock-manager and the tab panel components. |
| `--igc-pane-content-text`              | The text color of the content inside the dock-manager and the tab panel components. |
| `--igc-tab-text`                       | The text color of the tab header component. |
| `--igc-tab-background`                 | The background color of the tab header component. |
| `--igc-tab-border-color`               | The border color of the tab header component. |
| `--igc-tab-text-active`                | The text color of the selected tab header component. |
| `--igc-tab-background-active`          | The background color of the selected tab header component. |
| `--igc-tab-border-color-active`        | The border color of the selected tab header component. |
| `--igc-pinned-header-background`       | The background color of the unpinned pane header component. |
| `--igc-pinned-header-text`             | The text color of the unpinned pane header component. |
| `--igc-splitter-background`            | The background color of the splitter component. |
| `--igc-splitter-handle`                | The background color of the splitter handle. |
| `--igc-button-text`                    | The color of the buttons inside the pane header actions part. |
| `--igc-flyout-shadow-color`            | The box-shadow color of the content pane component. |
| `--igc-joystick-background`            | The background color of the joystick and the root docking indicator components. |
| `--igc-joystick-border-color`          | The border color of the joystick and the root docking indicator components. |
| `--igc-joystick-icon-color`            | The icon color of the joystick and the root docking indicator components. |
| `--igc-joystick-background-active`     | The hover background color of the joystick and the root docking indicator components. |
| `--igc-joystick-icon-color-active`     | The hover icon color of the joystick and the root docking indicator components. |
| `--igc-floating-pane-border-color`     | The border color of the floating panes. |
| `--igc-context-menu-background`        | The background color of the context menu items. |
| `--igc-context-menu-background-active` | The background color of the context menu items on hover and focus. |
| `--igc-context-menu-color`             | The text color of the context menu items. |
| `--igc-context-menu-color-active`      | The text color of the context menu items on hover and focus. |
| `--igc-drop-shadow-background`         | The background color of the drop shadow. |
| `--igc-disabled-color`                 | The text color of the components in disabled state. |

## Keyboard Navigation

Keyboard navigation enhances the accessibility of the **Dock Manager** and provides a rich variety of interactions to the end-user like navigating through all panes, splitting the view in multiple directions through docking the active pane, etc.

The shortcuts are as follows:

### Docking

- <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>↑</kbd> Docks to global top
- <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>↓</kbd> Docks to global bottom
- <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>→</kbd> Docks to global right
- <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>←</kbd> Docks to global left
- <kbd>SHIFT</kbd> + <kbd>↑</kbd> With multiple tabs in a tab group splits the view and docks the focused tab above
- <kbd>SHIFT</kbd> + <kbd>↓</kbd> With multiple tabs in a tab group splits the view and docks the focused tab below
- <kbd>SHIFT</kbd> + <kbd>→</kbd> With multiple tabs in a tab group splits the view and docks the focused tab right
- <kbd>SHIFT</kbd> + <kbd>←</kbd> With multiple tabs in a tab group splits the view and docks the focused tab left

### Navigating

- <kbd>CMD/CTRL</kbd> + <kbd>F6</kbd> or <kbd>CMD/CTRL</kbd> + <kbd>→</kbd> Focuses next tab in document host
- <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>F6</kbd> or <kbd>CMD/CTRL</kbd> + <kbd>←</kbd> Focuses previous tab in document host
- <kbd>ALT</kbd> + <kbd>F6</kbd> Focuses next content pane
- <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>F6</kbd> Focuses previous content pane

### Pane Navigator

Тhe following keyboard shortcuts show a navigator from which you can iterate through panes and documents.

- <kbd>CMD/CTRL</kbd> + <kbd>F7</kbd> or <kbd>CMD/CTRL</kbd> + <kbd>F8</kbd>  Starts from the first document forward
- <kbd>ALT</kbd> + <kbd>F7</kbd> or <kbd>ALT</kbd> + <kbd>F8</kbd> Starts from the first pane forward
- <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>F7</kbd> or <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>F8</kbd> Starts from the last document backwards
- <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>F7</kbd> or <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>F8</kbd> Starts from the last pane backwards

### Other

- <kbd>ALT</kbd> + <kbd>F3</kbd> Closes the active pane

Practice all of the above mentioned actions in the sample [demo](dock-manager.md#react-dock-manager-example).

## Styling

The Dock Manager uses a shadow DOM to encapsulate his styles and behaviors. As a result, you can't simply target its internal elements with the usual CSS selectors. That is why we expose components **parts** that can be targeted with the **::part** CSS selector.

```css
igc-dockmanager::part(content-pane) {
  border-radius: 10px;
}
```

In the following example, we demonstrate the ability of customizing the Dock Manager through some of the CSS parts that we've exposed.

```css
.auto-y-overflow {
    overflow-y: auto;
}

.line-through {
    text-decoration: line-through;
}

.light-gray-caption {
    color: lightgray;
}

.usd-caption {
    font-size: 12pt;
}

.margin-avatar {
    margin: 0.5rem;
}

:root {
  --main-color: rgb(227,230,233);
  --secondary-color: rgb(113,115,116);
  --white: #ffffff;
  --font-color: rgb(113,115,116);

  display: flex;
  flex-direction: column;
  height: 100%;
}

igc-dockmanager {
  background-color: var(--main-color);
  padding: 20px;
}

igc-dockmanager::part(pane-header) {
  background-color: var(--white);
  border-bottom: 2px solid var(--main-color);
}

igc-dockmanager::part(pane-header active) {
  font-weight: 700;
  color: var(--secondary-color);
  box-shadow: none;
  border-bottom: 2px solid var(--secondary-color);
}

igc-dockmanager::part(pane-header-content) {
  color: rgba(104, 97, 97, 0.938);
}

igc-dockmanager::part(splitter) {
  flex: 0 0 15px;
}

igc-dockmanager::part(splitter-base) {
  background: transparent;
}

igc-dockmanager::part(splitter-base)::after {
  content: none;
}

igc-dockmanager::part(content-pane) {
  border-radius: 10px;
}

igc-dockmanager::part(tab-header bottom) {
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: var(--main-color);
}

igc-dockmanager::part(tab-header active selected bottom) {
  font-weight: 700;
  color: var(--secondary-color);
  box-shadow: inset 0 2px 0 0 var(--secondary-color);
}

igc-dockmanager::part(tab-strip-area bottom) {
  border-radius: 0 0 10px 10px;
  border-bottom: 2px solid var(--main-color);
  background-color: var(--white);
}

igc-dockmanager::part(tab-strip-actions bottom) {
  display: none;
}

igc-dockmanager::part(tabs-content) {
  border-radius: 10px 10px 0 0;
  background-color: var(--white);
}

igc-dockmanager::part(root-docking-indicator),
igc-dockmanager::part(docking-indicator) {
  background-color: rgba(49, 45, 49, 0.733);
  color: var(--white);
  border: none;
  border-radius: 5px;
  margin: 2px
}

igc-dockmanager::part(docking-preview) {
  background-color: var(--main-color);
  opacity: 0.7;
}

igc-dockmanager::part(unpinned-pane-header) {
  border-radius: 5px;
  margin-bottom: 5px;
  box-shadow: inset 0 2px 0 0 var(--secondary-color);
  background-color: var(--white);
}

igc-dockmanager::part(floating-window) {
  border-radius: 10px;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.floatingHeader {
  display: flex;
  justify-content: space-between;
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

.closeButton {
  width: inherit;
  border: none;
  background: transparent;
  color: var(--font-color);
  font-size: 14px;
}

.stock-price{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.stock-item-movement-up {
  display: flex;
  color: rgb(0,153,255);
}
.stock-item-movement-down {
  display: flex;
  color: rgb(233, 80, 164);
}

igc-avatar::part(image) {
  background-color: white;
}

igc-card {
  height: inherit;
}

igc-card-content {
  padding-top: 5px;
  padding-bottom: 0px;
}

/* ACCOUNTS */

.account-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* TOP MOVERS */

.top-movers-content {
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  justify-content: space-evenly;
}

.top-move-stock-item {
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* PHYSICAL CARDS */

.add-card-btn {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
}

.size-small {
  --ig-size: var(--ig-size-small);
}

.size-medium {
  --ig-size: var(--ig-size-medium);
}

.size-large {
  --ig-size: var(--ig-size-large);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './DockManagerStyles.css';
import {
    IgrDockManager,
    IgrContentPane,
    IgrDockManagerLayout,
    IgrDockManagerPaneType,
    IgrSplitPane,
    IgrSplitPaneOrientation,
    IgrTabGroupPane
} from 'igniteui-react-dockmanager';
import { IgrAvatar, IgrButton, IgrCard, IgrCardActions, IgrCardContent, IgrIcon, IgrList, IgrListItem, registerIconFromText } from "igniteui-react" ;
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const arrowDown = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 10l5 5 5-5H7z'/></svg>";
const arrowUp = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 14l5-5 5 5H7z'/></svg>";

export default class DockManagerStyling extends React.Component {

    public dockManager: IgrDockManager;
    public layouts: any[];

    constructor(props: any){        
        super(props);        
        this.onSampleResize = this.onSampleResize.bind(this);   
        registerIconFromText("arrow-down", arrowDown, "material");
        registerIconFromText("arrow-up", arrowUp, "material");
    }

    public render(): JSX.Element {
        return (
            <div id="sampleContainer" className="container sample">
                <IgrDockManager id="dockManager" style={{height: "100%", width: "100%"}}>
                    <div slot="accountHeader" className="header">
                        <span>ACCOUNTS</span>
                        {/* <menu-component></menu-component> */}
                    </div>
                    <div slot="accountFloatingHeader" className="floatingHeader">
                        <span>ACCOUNTS</span>
                        <button id="close" className="closeButton">
                            <IgrIcon name="close" />
                        </button>
                    </div>
                    <div className="dockManagerFull" slot="content1">
                        <IgrCard className="auto-y-overflow" elevated>
                            <IgrCardContent>
                                <div className="account-content">
                                    <div>
                                        <h1>$2980.00</h1>
                                        <span className="usd-caption">United States Dollar</span>
                                    </div>

                                    <IgrAvatar className="margin-avatar size-medium" src="https://dl.infragistics.com/x/img/flags/USA.png" shape="rounded">
                                            <span>USA</span>
                                    </IgrAvatar>
                                </div>
                            </IgrCardContent>

                            <IgrCardActions>
                                <div style={{display: "flex"}}>
                                    <div slot="start">
                                        <IgrButton className="size-medium" variant="fab">
                                            <span>Add Money</span>
                                        </IgrButton>
                                    </div>
                                    <div slot="start">
                                        <IgrButton className="size-medium" variant="fab">
                                            <span>Send</span>
                                        </IgrButton>
                                    </div>
                                </div>
                            </IgrCardActions>
                        </IgrCard>
                    </div>

                    <div slot="todayTopMovers" className="header">
                        <span>TODAY&apos;S TOP MOVERS</span>
                        {/* <menu-component></menu-component> */}
                    </div>
                    <div slot="todayTopMoversFloatingHeader" className="floatingHeader">
                        <span>TODAY&apos;S TOP MOVERS </span>
                        <button id="close" className="closeButton">
                            <IgrIcon name="close" />
                        </button>
                    </div>
                    <div className="dockManagerFull" style={{overflowY: "scroll"}} slot="content2">
                        <div className="top-movers-content size-large">
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/TSLA.png" shape="circle">
                                    <span>TSLA</span>
                                </IgrAvatar>
                                <span>1017,08$</span>
                                <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>12,54%</div>
                            </div>
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/AMC.png" shape="circle">
                                    <span>AMC</span>
                                </IgrAvatar>
                                <span>39,33$</span>
                                <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>12,72%</div>
                            </div>
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/GOEV.png" shape="circle">
                                    <span>GOEV</span>
                                </IgrAvatar>
                                <span>12,33$</span>
                                <div className="stock-item-movement-up"><IgrIcon name="arrow-up" collection="material"></IgrIcon>45,92%</div>
                            </div>
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/LCID.png" shape="circle">
                                    <span>LCID</span>
                                </IgrAvatar>
                                <span>58,14$</span>
                                <div className="stock-item-movement-up"><IgrIcon name="arrow-up" collection="material"></IgrIcon>29,42%</div>
                            </div>
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/NIO.png" shape="circle">
                                    <span>NIO</span>
                                </IgrAvatar>
                                <span>21,67$</span>
                                <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>7,25%</div>
                            </div>
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/STNE.png" shape="circle">
                                    <span>STNE</span>
                                </IgrAvatar>
                                <span>22,48$</span>
                                <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>28,68%</div>
                            </div>
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/ROKU.png" shape="circle">
                                    <span>ROKU</span>
                                </IgrAvatar>
                                <span>249,35$</span>
                                <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>9,5%</div>
                            </div>
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/MAXR.png" shape="circle">
                                    <span>MAXR</span>
                                </IgrAvatar>
                                <span>33,14$</span>
                                <div className="stock-item-movement-up"><IgrIcon name="arrow-up" collection="material"></IgrIcon>8,12%</div>
                            </div>
                        </div>
                    </div>
                    <div slot="transactionsHeader" className="header">
                        <span>TRANSACTIONS</span>
                        {/* <menu-component></menu-component> */}
                    </div>
                    <div slot="transactionsFloatingHeader" className="floatingHeader">
                        <span>TRANSACTIONS</span>
                        <button id="close" className="closeButton">
                            <IgrIcon name="close" />
                        </button>
                    </div>
                    <div className="dockManagerFull" slot="content3" >
                        <IgrList id="list" className="auto-y-overflow">
                            <IgrListItem>
                                <div slot="start" >
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-2.svg" shape="circle">
                                        <span>AMZN</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Money added via **0000</h2>
                                <span slot="subtitle">14:40</span>
                                <div slot="end" className="stock-price">
                                    <span>+ 2000$</span>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-only.svg" shape="circle">
                                        <span>SET</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Sports Event Tickets</h2>
                                <span slot="subtitle">Jun 21, 06:15, Declined because your card is inactive</span>
                                <div slot="end" className="stock-price">
                                    <span className="line-through">1017,08 $</span>
                                    <span className="light-gray-caption">900,08 $</span>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start" >
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-only.svg" shape="circle">
                                        <span>AT</span>
                                    </IgrAvatar>
                                </div>                                
                                <h2 slot="title">Airplane Tickets</h2>
                                <span slot="subtitle">Jun 21, 06:15, Declined because your card is inactive</span>
                                <div slot="end" className="stock-price">
                                    <span className="line-through">985,00 $</span>
                                    <span className="light-gray-caption">980,00 $</span>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start" >
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/building.svg" shape="circle">
                                        <span>H</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Hotel</h2>
                                <span slot="subtitle">Jun 21, 06:15</span>
                                <div slot="end" className="stock-price">
                                    <span>- 400,00 $</span>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/atm.svg" shape="circle">
                                        <span>ATM</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Cash at ATM 000000</h2>
                                <span slot="subtitle">14:40</span>
                                <div slot="end" className="stock-price">
                                    <span>- 140$</span>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-1.svg" shape="circle">
                                        <span>U</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Utilities</h2>
                                <span slot="subtitle">21/06/2021 16:00</span>
                                <div slot="end" className="stock-price">
                                    <span>- 200$</span>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/atm.svg" shape="circle">
                                        <span>ATM</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Cash at ATM 000001</h2>
                                <span slot="subtitle">10:10</span>
                                <div slot="end" className="stock-price">
                                    <span>- 280$</span>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start" >
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-2.svg" shape="circle">
                                        <span>MA</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Money added via **0000</h2>
                                <span slot="subtitle">14:40</span>
                                <div slot="end" className="stock-price">
                                    <span>+ 2000$</span>
                                </div>
                            </IgrListItem>
                        </IgrList>
                    </div>

                    <div slot="popularStocksHeader" className="header">
                        <span>POPULAR STOCKS</span>
                        {/* <menu-component></menu-component> */}
                    </div>
                    <div slot="popularStocksFloatingHeader" className="floatingHeader">
                        <span>POPULAR STOCKS</span>
                        <button id="close" className="closeButton">
                            <IgrIcon name="close" />
                        </button>
                    </div>
                    <div className="dockManagerFull" slot="content4">
                        <IgrList id="list" className="auto-y-overflow">
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/TSLA.png" shape="circle">
                                        <span>TSLA</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Tesla</h2>
                                <span slot="subtitle">TSLA - Electric Vehicles</span>
                                <div slot="end" className="stock-price">
                                    <span>1017,08 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>12,54%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/APPL.png" shape="circle">
                                        <span>APPL</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Apple</h2>
                                <span slot="subtitle">APPL - iPhones and Macs</span>
                                <div slot="end" className="stock-price">
                                    <span>150,47 $</span>
                                    <div className="stock-item-movement-up"><IgrIcon name="arrow-up" collection="material"></IgrIcon>0,2%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/NIO.png" shape="circle">
                                        <span>NIO</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">NIO</h2>
                                <span slot="subtitle">NIO - Electric Vehicles</span>
                                <div slot="end" className="stock-price">
                                    <span>40,07 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>7,25%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/AMZN.png" shape="circle">
                                        <span>AMZN</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Amazon</h2>
                                <span slot="subtitle">AMZN - E-Commerce</span>
                                <div slot="end" className="stock-price">
                                    <span>3582,32 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>2,68%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/GME.png" shape="circle">
                                        <span>GME</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Game Stop</h2>
                                <span slot="subtitle">GME - Video Games Retail</span>
                                <div slot="end" className="stock-price">
                                    <span>205,60 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>5,96%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/AMC.png" shape="circle">
                                        <span>AMC</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">AMC</h2>
                                <span slot="subtitle">AMC - Entertainment</span>
                                <div slot="end" className="stock-price">
                                    <span>39,33 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>12,72%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/MSFT.png" shape="circle">
                                        <span>MSFT</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Microsoft</h2>
                                <span slot="subtitle">MSFT - Tech Giant</span>
                                <div slot="end" className="stock-price">
                                    <span>335,66 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>0,39%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/SPCE.png" shape="circle">
                                        <span>SPCE</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Virgin Galactic</h2>
                                <span slot="subtitle">SPCE - Space Tourism</span>
                                <div slot="end" className="stock-price">
                                    <span>18,90 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>1,66%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/PFE.png" shape="circle">
                                        <span>PFE</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Pfizer</h2>
                                <span slot="subtitle">PFE - Pharmaceuticals</span>
                                <div slot="end" className="stock-price">
                                    <span>49,43 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>0,60%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/GOOGL.png" shape="circle">
                                        <span>GOOGL</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Alpabet (Class A)</h2>
                                <span slot="subtitle">GOOGL - Tech Giant</span>
                                <div slot="end" className="stock-price">
                                    <span>2972,88 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>0,02%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/META.png" shape="circle">
                                        <span>META</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Meta Platforms</h2>
                                <span slot="subtitle">FB - Tech Giant</span>
                                <div slot="end" className="stock-price">
                                    <span>347,86 $</span>
                                    <div className="stock-item-movement-up"><IgrIcon name="arrow-up" collection="material"></IgrIcon>2,04%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/PLTR.png" shape="circle">
                                        <span>PLTR</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Palantir</h2>
                                <span slot="subtitle">PLTR - Data Analytics</span>
                                <div slot="end" className="stock-price">
                                    <span>23,30 $</span>
                                    <div className="stock-item-movement-up"><IgrIcon name="arrow-up" collection="material"></IgrIcon>2,06%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/AAL.png" shape="circle">
                                        <span>AAL</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">American Airlines</h2>
                                <span slot="subtitle">AAL - Airline Service</span>
                                <div slot="end" className="stock-price">
                                    <span>20,45 $</span>
                                    <div className="stock-item-movement-up"><IgrIcon name="arrow-up" collection="material"></IgrIcon>0.79%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://dl.infragistics.com/x/img/logo/company/NFLX.png" shape="circle">
                                        <span>NFLX</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Netflix</h2>
                                <span slot="subtitle">NFLX - TV Streaming</span>
                                <div slot="end" className="stock-price">
                                    <span>679,39 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>0,47%</div>
                                </div>
                            </IgrListItem>
                        </IgrList>
                    </div>

                    <div slot="cardsHeader" className="header">
                        <span>PHYSICAL CARDS</span>
                        {/* <menu-component></menu-component> */}
                    </div>
                    <div slot="cardsFloatingHeader" className="floatingHeader">
                        <span>TODAY&apos;S TOP MOVERS</span>
                        <button id="close" className="closeButton">
                            <IgrIcon name="close" />
                        </button>
                    </div>
                    <div className="dockManagerFull" slot="content5">
                        <IgrCard className="auto-y-overflow" elevated>
                            <IgrCardContent>                                
                                <IgrButton className="add-card-btn size-small" variant="flat">
                                    <span>+ Add Card</span>
                                </IgrButton>                                
                                <IgrList id="list" className="auto-y-overflow">
                                    <IgrListItem>
                                        <div slot="start">
                                            <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/mastercard.svg" shape="circle">
                                                <span>MC</span>
                                            </IgrAvatar>
                                        </div>
                                        <h2 slot="title">Standard **0000</h2>
                                        <span slot="subtitle">Expires on 11/26</span>
                                    </IgrListItem>
                                    <IgrListItem>
                                        <div slot="start">
                                            <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/visa.svg" shape="circle">
                                                <span>VISA</span>
                                            </IgrAvatar>
                                        </div>
                                        <h2 slot="title">Rose gold **0000</h2>
                                        <span slot="subtitle">Expires on 11/24</span>
                                    </IgrListItem>
                                    <IgrListItem>
                                        <div slot="start" >
                                            <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/visa.svg" shape="circle">
                                                <span>VISA</span>
                                            </IgrAvatar>
                                        </div>
                                        <h2 slot="title">Virtual card **0000</h2>
                                        <span slot="subtitle">Expires on 10/22</span>
                                    </IgrListItem>
                                </IgrList>
                            </IgrCardContent>

                        </IgrCard>
                    </div>
                </IgrDockManager>
            </div>
        );
    }

    public getContentPane(header: string, contentId: string, headerId: string, floatingHeaderId: string): IgrContentPane {
        const pane: IgrContentPane = {
            type: IgrDockManagerPaneType.contentPane,
            header: header,
            contentId: contentId,
            headerId: headerId,
            floatingHeaderId: floatingHeaderId,
            isPinned: true,
            allowMaximize: false,
            allowPinning: false,
            allowClose: false
        };
                
        return pane;
    }

    public getLayout1() : IgrDockManagerLayout{

        const accountPane = this.getContentPane("ACCOUNTS", "content1", "accountHeader", "accountFloatingHeader");
        const topMoversPane = this.getContentPane("TODAY'S TOP MOVERS", "content2", "todayTopMovers", "todayTopMoversFloatingHeader");        
        const transactionsPane = this.getContentPane("TRANSACTIONS", "content3", "transactionsHeader", "transactionsFloatingHeader");
        const popularStocksPane = this.getContentPane("POPULAR STOCKS", "content4", "popularStocksHeader", "popularStocksFloatingHeader");
        const cardsPane = this.getContentPane("PHYSICAL CARDS", "content5", "cardsHeader", "cardsFloatingHeader");        

        const splitPane1: IgrSplitPane =
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.horizontal,
            panes: []
        };        

        const splitPane2: IgrSplitPane =
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.vertical,
            size: 300,
            panes: []
        };

        const splitPane3: IgrSplitPane =
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.horizontal,
            size: 300,
            panes: []
        };

        //AccountPane, CardsPane
        const splitPane4: IgrSplitPane =
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.vertical,
            size: 300,
            panes: []                 
        };

        //TransactionsPane
        const splitPane5: IgrSplitPane =
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.vertical,
            size: 300,
            panes: []
        };

        //Top Movers
        const splitPane6: IgrSplitPane =
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.horizontal,
            size: 130,
            panes: []
        };

        //Popular Stocks
        const splitPane7: IgrSplitPane =
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.vertical,
            size: 200,
            panes: []
        };

        splitPane4.panes.push(accountPane);
        splitPane4.panes.push(cardsPane);

        splitPane5.panes.push(transactionsPane);

        splitPane6.panes.push(topMoversPane);

        splitPane7.panes.push(popularStocksPane);

        splitPane3.panes.push(splitPane4);
        splitPane3.panes.push(splitPane5);

        splitPane2.panes.push(splitPane3);
        splitPane2.panes.push(splitPane6);

        splitPane1.panes.push(splitPane2);
        splitPane1.panes.push(splitPane7);

        const layout: IgrDockManagerLayout = {
            rootPane: splitPane1
        }

        return layout;
    }

    public getLayout2() : IgrDockManagerLayout
    {
        const accountPane = this.getContentPane("ACCOUNTS", "content1", "accountHeader", "accountFloatingHeader");
        const topMoversPane = this.getContentPane("TODAY'S TOP MOVERS", "content2", "todayTopMovers", "todayTopMoversFloatingHeader");        
        const transactionsPane = this.getContentPane("TRANSACTIONS", "content3", "transactionsHeader", "transactionsFloatingHeader");
        const popularStocksPane = this.getContentPane("POPULAR STOCKS", "content4", "popularStocksHeader", "popularStocksFloatingHeader");
        const cardsPane = this.getContentPane("PHYSICAL CARDS", "content5", "cardsHeader", "cardsFloatingHeader");        


        const splitPane1: IgrSplitPane =
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.horizontal,
            panes: []
        };

        const splitPane2: IgrSplitPane =
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.vertical,
            size: 300,
            panes: []
        };

        const splitPane3: IgrSplitPane =
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.horizontal,
            size: 300,
            panes: []
        };

        //Transactions Pane, TGP1
        const splitPane4: IgrSplitPane =
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.vertical,
            size: 300,
            panes: []
        };

        //Popular Stocks Pane
        const splitPane5: IgrSplitPane =
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.vertical,
            size: 300,
            panes: []
        };

        //Top Movers
        const splitPane6: IgrSplitPane =
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.horizontal,
            size: 130,
            panes: []
        };

        //AccountPane, CardsPane
        const tabGroupPane1: IgrTabGroupPane =
        {
            type: IgrDockManagerPaneType.tabGroupPane,
            size: 100,
            panes: []
        };

        tabGroupPane1.panes.push(accountPane);
        tabGroupPane1.panes.push(cardsPane);

        splitPane4.panes.push(tabGroupPane1);
        splitPane4.panes.push(transactionsPane);

        splitPane5.panes.push(popularStocksPane);

        splitPane6.panes.push(topMoversPane);

        splitPane3.panes.push(splitPane4);
        splitPane3.panes.push(splitPane5);

        splitPane2.panes.push(splitPane3);
        splitPane2.panes.push(splitPane6);

        splitPane1.panes.push(splitPane2);

        const layout: IgrDockManagerLayout = {
            rootPane: splitPane1
        };        

        return layout;
    }

    public getLayout3() : IgrDockManagerLayout
    {
        const accountPane = this.getContentPane("ACCOUNTS", "content1", "accountHeader", "accountFloatingHeader");
        const topMoversPane = this.getContentPane("TODAY'S TOP MOVERS", "content2", "todayTopMovers", "todayTopMoversFloatingHeader");
        const transactionsPane = this.getContentPane("TRANSACTIONS", "content3", "transactionsHeader", "transactionsFloatingHeader");
        const popularStocksPane = this.getContentPane("POPULAR STOCKS", "content4", "popularStocksHeader", "popularStocksFloatingHeader");
        const cardsPane = this.getContentPane("PHYSICAL CARDS", "content5", "cardsHeader", "cardsFloatingHeader");

        const splitPane1: IgrSplitPane =
        {
            type: IgrDockManagerPaneType.splitPane,
            orientation: IgrSplitPaneOrientation.vertical,
            panes: []
        };

        const tabGroupPane1: IgrTabGroupPane =
        {
            type: IgrDockManagerPaneType.tabGroupPane,
            size: 200,
            panes: []
        };

        const tabGroupPane2: IgrTabGroupPane =
        {
            type: IgrDockManagerPaneType.tabGroupPane,
            size: 300,
            panes: []
        };

        tabGroupPane1.panes.push(accountPane);
        tabGroupPane1.panes.push(cardsPane);
        tabGroupPane1.panes.push(transactionsPane);

        tabGroupPane2.panes.push(popularStocksPane);
        tabGroupPane2.panes.push(topMoversPane);

        splitPane1.panes.push(tabGroupPane1);
        splitPane1.panes.push(tabGroupPane2);

        const layout: IgrDockManagerLayout = {
            rootPane: splitPane1
        };        

        return layout;
    }

    public onSampleResize() {        
        const width = this.dockManager.offsetWidth;

        if (width > 1200) {
            this.dockManager.layout = this.layouts[0];
        }
        if (width <= 1200) {
            this.dockManager.layout = this.layouts[1];
        }
        if (width <= 800) {
            this.dockManager.layout = this.layouts[2];
        }
    }

    public componentDidMount() {

        const layout1: IgrDockManagerLayout = this.getLayout1();
        const layout2: IgrDockManagerLayout = this.getLayout2();
        const layout3: IgrDockManagerLayout = this.getLayout3();

        this.dockManager = document.getElementById("dockManager") as IgrDockManager;

        window.onresize = this.onSampleResize;

        this.dockManager.layout = layout1;

        this.layouts = [layout1, layout2, layout3];
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DockManagerStyling/>);
```


<div class="divider--half"></div>

### CSS Parts

| Part name | Description |
| ---------|------------ |
| `content-pane` | The content pane component. |
| `pane-header`  | The content pane header component. |
| `pane-header-content` | The content area of the content pane header. |
| `pane-header-actions` | The actions area of the content pane header. |
| `active` | Indicates an active state. Applies to `pane-header`, `pane-header-content`, `pane-header-actions`, `tab-header`. |
| `floating`  | Indicates a floating pane placement. Applies to `pane-header`, `pane-header-content`, `pane-header-actions`. |
| `window` | Indicates a floating window placement. Applies to `pane-header`, `pane-header-content`, `pane-header-actions`. |
| `split-pane` | The split pane component. |
| `splitter` | The resizing splitter component. |
| `splitter-base` | The base element of the splitter component. |
| `splitter-ghost`| The ghost element of the splitter component. |
| `unpinned-pane-header` | The unpinned pane header component. |
| `tab-header` | The tab header component. |
| `tab-header-more-options-button` | The more options button in the tab header. |
| `tab-header-close-button` | The close button in the tab header. |
| `selected` | Indicates a selected state. Applies to `tab-header` and `tab-header-close-button`. |
| `hovered` | Indicates a hovered state. Applies to `tab-header-close-button`. |
| `header-title` | The text title of the tab header. |
| `tab-strip-area` | The tab strip area containing the tab headers. |
| `tab-strip-actions` | The tab strip area containing the tab actions. |
| `top` | Indicates a top tabs position. Applies to `tab-header`, `tab-strip-area`, `tab-strip-actions`. |
| `bottom` | Indicates a bottom tabs position. Applies to `tab-header`, `tab-strip-area`, `tab-strip-actions`. |
| `context-menu` | The context menu component. |
| `context-menu-item` | An item in the context menu component. |
| `docking-preview` | The docking preview area. |
| `docking-indicator` | The non-root docking indicator. |
| `root-docking-indicator` | The root docking indicator. |
| `splitter-docking-indicator` | The splitter docking indicator. |
| `pane-navigator` | The pane navigator component. |
| `pane-navigator-header` | The header area of the pane navigator. |
| `pane-navigator-body` | The body area of the pane navigator. |
| `pane-navigator-items-group` | An items group in the pane navigator component. |
| `pane-navigator-items-group-title` | The title element of an items group in the pane navigator. |
| `pane-navigator-item` | An item in the pane navigator. |
| `pane-header-close-button` | The close button in the pane header. |
| `pane-header-maximize-button` | The maximize button in the pane header. |
| `pane-header-minimize-button` | The minimize button in the pane header. |
| `pane-header-pin-button` | The pin button in the pane header. |
| `pane-header-unpin-button` | The unpin button in the pane header. |
| `tabs-maximize-button` | The tabs maximize button. |
| `tabs-minimize-button` | The tabs minimize button. |
| `tabs-more-button` | The more tabs button. |
| `context-menu-unpin-button` | The unpin button in the context menu. |
| `context-menu-close-button` | The close button in the context menu. |
| `splitter-handle` | The splitter handle. |
| `horizontal` | Indicates a horizontal position. Applies to `splitter-handle`. |
| `vertical` | Indicates a vertical position. Applies to `splitter-handle`. |

<!-- React, WebComponents -->

### Themes

The Dock Manager comes with a light and a dark theme. The light theme is the default one. To change it to dark, you only need to import the **igc.themes.css** file in your css and add the **dark-theme** class to the Dock Manager or any of its parents:

<!-- React -->

```scss
@import 'igniteui-dockmanager/dist/collection/styles/igc.themes';
```

```tsx
<IgrDockManager class="dark-theme">
```

<!-- end: React -->

## Localization

The Dock Manager component supports localizing the strings used in the context menus, tooltips and aria attributes. By default, the Dock Manager detects the language of the page by searching for a [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute on any of its parents. If the [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute is not set or is set to a value which the Dock Manager does not support, the default language used is [English (en)](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#IgcDockManagerResourceStringsEN). The Dock Manager provides built-in localized strings for the following languages: [English (en)](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#IgcDockManagerResourceStringsEN), [Japanese (jp)](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#IgcDockManagerResourceStringsJP), [Korean (ko)](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#IgcDockManagerResourceStringsKO) and [Spanish (es)](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#IgcDockManagerResourceStringsES).

The Dock Manager exposes [`resourceStrings`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#resourceStrings) property which allows you to modify the strings. If you set the [`resourceStrings`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html#resourceStrings) property, the Dock Manager will use your strings no matter what [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute is set.

<!-- end: React, WebComponents -->

## API References

- [`IgrDockManager`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdockmanager.html)
- [`IgrDocumentHost`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdocumenthost.html)
- [`IgrDockManagerLayout`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrdockmanagerlayout.html)
- [`IgrContentPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrcontentpane.html)
- [`IgrSplitPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrsplitpane.html)
- [`IgrTabGroupPane`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/interfaces/igniteui-react.igrtabgrouppane.html)
