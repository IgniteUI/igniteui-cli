---
title: Web Components Dock Manager | Layout Controls | Infragistics
_description: Use Infragistics' Web Components dock manager component to manage the layout through panes, with the ability to customize it by pinning, resizing, moving and hiding panes. Check out Ignite UI for Web Components dock manager tutorials!
_keywords: dock manager, layout, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["DockManager", "DocumentHost", "DockManagerLayout", "DockManagerPaneType", "ContentPane", "SplitPane", "TabGroupPane", "PinnedLocation", "PaneHeaderElement"]
_tocName: Dock Manager
---

# Web Components Dock Manager Overview

The Infragistics Web Components Dock Manager provides a means to manage the layout of your application through panes, allowing your end-users to customize it further by pinning, resizing, moving, maximizing and hiding panes.

## Web Components Dock Manager Example

This example shows most functionalities and docking options of the [`IgcDockManagerComponent`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html) that you can use in your application.

```css
.dockManagerContent {
    padding: 0.5rem;
    height: calc(100% - 1rem);
    width: calc(100% - 1rem);
    display: flex;
    flex-direction: column;
    /* background: orange; */
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

To install the Dock Manager package execute the following command:

```cmd
npm install --save igniteui-dockmanager
```

<!-- end: Angular, React, WebComponents -->

<!-- Angular, WebComponents -->

Then it is necessary to import and call the **defineComponents()** function:

```ts
import { defineComponents, IgcDockManagerComponent } from 'igniteui-dockmanager';

defineComponents(IgcDockManagerComponent);
```

<!-- end: Angular, React, WebComponents -->

<div class="divider--half"></div>

<!-- React, WebComponents -->

## Usage

Once the Dock Manager is imported, you can add it on the page:

```html
<igc-dockmanager id="dockManager">
</igc-dockmanager>
```

> \[!Note]
> Since the Dock Manager component uses ShadowDOM and slots it is not supported on older browsers like Internet Explorer 11 and Edge 18 and below (non-Chromium versions).

The Dock Manager has a [`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#layout) property, which describes the layout of the panes. To start defining a layout, you should set the [`rootPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdocumenthost.html#rootPane) property and add child panes. Here is how you can define a layout with a single content pane:

```ts
import { IgcDockManagerPaneType, IgcSplitPaneOrientation, IgcDockManagerComponent } from 'igniteui-dockmanager';

// ...

this.dockManager = document.getElementById("dockManager") as IgcDockManagerComponent;
this.dockManager.layout = {
    rootPane: {
        type: IgcDockManagerPaneType.splitPane,
        orientation: IgcSplitPaneOrientation.horizontal,
        panes: [
            {
                type: IgcDockManagerPaneType.contentPane,
                contentId: 'content1',
                header: 'Pane 1'
            }
        ]
    }
};
```

To load the content of the panes, the Dock Manager uses [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot). The [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute of the content element should match the [`contentId`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#contentId) of the content pane in the layout configuration. It is highly recommended to set width and height of the content elements to **100%** for predictable response when the end-user is resizing panes.

```html
<igc-dockmanager id="dockManager">
    <div slot="content1" style="width: 100%; height: 100%;">Content 1</div>
</igc-dockmanager>
```

The Dock Manager defines several pane types:

- [`IgcContentPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html)
- [`IgcSplitPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html)
- [`IgcTabGroupPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html)
- [`IgcDocumentHost`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdocumenthost.html)

Each type of pane has a [`size`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdocumenthost.html#size) property. Depending on the parent orientation the size may affect either the width or the height of the pane. By default, the size of a pane is relative to the sizes of its sibling panes and defaults to 100. If you have two sibling panes, where the first one has its size set to 200 and the second one - size set to 100, the first will be twice the size of the second one and these two panes would fill up all the available space. If the absolute size of their parent is 900px, they will be sized to 600px and 300px respectively. If, for certain panes, you want to specify their sizes in pixels, instead of relying on the relative distribution of all the available space, you should set the `useFixedSize` of the parent split pane.

<!-- WebComponents -->

For more information on this refer to [Split Panes Fixed Size Mode](dock-manager-customization.md#split-panes-fixed-size-mode) topic.

 <!-- end: WebComponents -->

The end-user can perform the following actions to customize the layout at runtime:

- Pin/unpin a pane
- Resize a pane
- Close a pane
- Drag a pane to make it float
- Move a floating pane
- Dock a floating pane
- Maximize a pane

All of these are reflected in the [`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#layout) property of the Dock Manager.

### Content Pane

The [`IgcContentPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html) represents a pane with header and content. It can be hosted inside a Split Pane or a Tab Group Pane. Here is how a content pane is defined:

```ts
const contentPane: IgcContentPane = {
    type: IgcDockManagerPaneType.contentPane,
    contentId: 'content1',
    header: 'Pane 1'
}
```

The [`header`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#header) property is used to provide a text header for the content pane. This text is rendered at several places: the top content pane header, the tab header if the pane is in a tab group and the unpinned header if the pane is unpinned. You can provide a custom slot content for each of these places respectively using the [`headerId`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#headerId), [`tabHeaderId`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#tabHeaderId) and [`unpinnedHeaderId`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#unpinnedHeaderId) properties. If any of these properties is not set, the [`header`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#header) text is used. Here is how to provide a tab header slot content:

```html
<igc-dockmanager id="dockManager">
    <div slot="content1" style="width: 100%; height: 100%;">Content 1</div>
    <span slot="tabHeader1">Pane 1 Tab</span>
</igc-dockmanager>
```

```ts
const contentPane: IgcContentPane = {
    type: IgcDockManagerPaneType.contentPane,
    contentId: 'content1',
    header: 'Pane 1',
    tabHeaderId: 'tabHeader1'
}
```

When a pane is unpinned, it appears as a tab header at one of the edges of the Dock Manager. If the end-user selects it, its content appears over the docked pinned panes. To unpin a content pane, set its [`isPinned`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#isPinned) property to **false**.

```ts
const contentPane = {
    type: IgcDockManagerPaneType.contentPane,
    contentId: 'content1',
    header: 'Pane 1',
    isPinned: false
}
```

The [`isPinned`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#isPinned) property affects only content panes that are docked outside a document host. Also, content panes hosted in a floating pane cannot be unpinned.

By default, the unpin destination for a content pane is calculated automatically based on the location of the pane relative to the document host. When more than one document host is defined, the nearest one in the parent hierarchy of the unpinned content pane will be used. If there is no document host defined, the default location is used - `Left`. It is also possible to set the desired destination of the unpinned pane by using the [`unpinnedLocation`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#unpinnedLocation) property.

You can configure which end-user operations are allowed for a content pane using its [`allowClose`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#allowClose), [`allowPinning`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#allowPinning), [`allowDocking`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#allowDocking) and [`allowFloating`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#allowFloating) properties.

When defining a content pane, you can set the [`documentOnly`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#documentOnly) property to true so the pane can be docked only in a document host.

To restrict the user interaction with the content pane and its content, you can set the [`disabled`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#disabled) property to true. This will prevent all user interactions with the pane unless it is a single floating pane. The latter could be moved, maximized or closed (according to the pane's settings for maximizing and closing), so the user can have a look at the elements under it but will not be able to interact with its content.

By default, when you close a pane it gets removed from the [`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#layout) object. However, in some cases you would want to temporary hide the pane and show it later again. In order to do that without changing the [`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#layout) object you can use the [`hidden`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#hidden) property of the content pane. Setting the property to **true** will hide it from the UI, but it will remain in the [`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#layout) object. In order to override the default close behavior you can subscribe to the `PaneClose` event like this:

```ts
this.dockManager.addEventListener('paneClose', ev => {
    for (const pane of ev.detail.panes) {
        pane.hidden = true;
    }
    ev.preventDefault();
});
```

### Split Pane

The [`IgcSplitPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html) is a container pane which stacks all of its child [`panes`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#panes) horizontally or vertically based on its [`orientation`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#orientation) property. Here is how a horizontal split pane with two child content panes is defined:

```ts
const splitPane: IgcSplitPane = {
    type: IgcDockManagerPaneType.splitPane,
    orientation: IgcSplitPaneOrientation.horizontal,
    panes: [
        {
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'content1',
            header: 'Pane 1'
        },
        {
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'content2',
            header: 'Pane 2'
        }
    ]
}
```

The split pane may contain child panes of all pane types including other split panes.

By default, if the split pane is empty it is not displayed. Yet if you would like to change that behavior you can set its [`allowEmpty`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#allowEmpty) property to true and the split pane will be presented in the UI even when there is no panes inside it.

### Tab Group Pane

The [`IgcTabGroupPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html) displays its child content [`panes`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html#panes) as the tabs of a tab component. Here is how a tab group pane with a content pane for each of its two tabs is defined:

```ts
const tabGroupPane: IgcTabGroupPane = {
    type: IgcDockManagerPaneType.tabGroupPane,
    panes: [
        {
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'content1',
            header: 'Pane 1'
        },
        {
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'content2',
            header: 'Pane 2'
        }
    ]
}
```

If there is not enough space to display all tab headers, the tab group shows **More tabs** menu, which contains the non-visible tabs. If you click a tab item in that menu, the tab gets selected and moved to the first position.

The tabs also can be reordered without being detached from the tab group in which they are located. You can click on a tab of your choice and drag it left or right to the position you want it to be. If you drag the selected tab outside of the tabs area it will be detached into a floating pane.

In case you would like the tab group pane to be displayed in the UI when it has no tabs, you can set the [`allowEmpty`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html#allowEmpty) property to true.

### Document Host

The [`IgcDocumentHost`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdocumenthost.html) is an area of tabs for documents, similar to the one in Visual Studio for code editing and design view. Here is how to define a document host with two document tabs:

```ts
const docHost: IgcDocumentHost = {
    type: IgcDockManagerPaneType.documentHost,
    rootPane: {
        type: IgcDockManagerPaneType.splitPane,
        orientation: IgcSplitPaneOrientation.horizontal,
        panes: [
            {
                type: IgcDockManagerPaneType.tabGroupPane,
                panes: [
                    {
                        type: IgcDockManagerPaneType.contentPane,
                        contentId: 'content1',
                        header: 'Grid'
                    },
                    {
                        type: IgcDockManagerPaneType.contentPane,
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

The floating pane is a split pane rendered above all other ones in a floating window. The floating pane definitions are stored in the [`floatingPanes`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagerlayout.html#floatingPanes) property of the [`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#layout). Here is how to add a floating pane with a single content pane inside:

```ts
const layout: IgcDockManagerLayout = {
    rootPane: {
        // ...
    },
    floatingPanes: [
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            floatingLocation: { x: 80, y: 80 },
            floatingWidth: 200,
            floatingHeight: 150,
            floatingResizable: true,
            panes: [
                {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'content1',
                    header: 'Floating Pane 1'
                }
            ]
        }
    ]
};
```

The [`floatingLocation`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatingLocation), [`floatingWidth`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatingWidth) and [`floatingHeight`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatingHeight) properties represent absolute dimensions in pixels. Please note that these properties are applied only for the split panes in the [`floatingPanes`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagerlayout.html#floatingPanes) array.

With the [`floatingResizable`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatingResizable) and
[`allowFloatingPanesResize`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#allowFloatingPanesResize) you can set whether resizing floating panes is allowed. The `allowFloatingPanesResize` is an **IgcDockManagerComponent** property, so if the value is set to **false** none of the floating panes can be resized. The `floatingResizable` property can be applied separately on each split pane in the `floatingPanes` array and if the property value is not set, it defaults to the value of the `allowFloatingPanesResize` property. If the `floatingResizable` property is set for a specific pane, its value takes precedence over the `allowFloatingPanesResize` property value.

### Active Pane

The Dock Manager component highlights the content pane which contains the focus and exposes it in its [`activePane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#activePane) property. You can programmatically change the active pane by setting the property. You can also listen for changes of the [`activePane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#activePane) property by subscribing to the `ActivePaneChanged` event:

```ts
this.dockManager.addEventListener('activePaneChanged', ev => {
    console.log(ev.detail.oldPane);
    console.log(ev.detail.newPane);
});
```

### Docking

When you start dragging a floating pane, different docking indicators will appear depending on the position of the dragged pane. There are four main types of docking - root docking, pane docking, document host docking and splitter docking. Edge docking is available as an additional behavior when root docking is disabled and works along the orientation of the root split pane.

#### Root Docking

In this type of docking while dragging a pane, four arrow docking indicators will appear close to the four edges of the dock manager. Once released, the dragged pane will become a direct child of the Dock Manager's [`rootPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdocumenthost.html#rootPane). Visually, the newly docked pane will snap into place at the respective edge and occupy up to half of the dock manager's width or height, shifting all the other content to the other half.

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

```ts
const splitPane = this.dockManager.layout.rootPane.panes[0] as IgcSplitPane;
const contentPane = splitPane.panes[0] as IgcContentPane;
this.dockManager.removePane(contentPane);
```

This will only update the layout object. To trigger an update of the Dock Manager so the changes are reflected in the UI, the layout object should be re-assigned:

```ts
this.dockManager.layout = { ...this.dockManager.layout };
```

### Save/Load Layout

To restore or persist a layout, you simply have to get/set the value of the [`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#layout) property. Here is how to save the layout as a stringified JSON:

```ts
private savedLayout: string;

private saveLayout() {
    this.savedLayout = JSON.stringify(this.dockManager.layout);
}

private loadLayout() {
    this.dockManager.layout = JSON.parse(this.savedLayout);
}
```

<!-- WebComponents -->

### Adding Panes At Runtime

Contents and panes can be added to the [`layout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#layout) at runtime. In the example below, you can see how you can add content, document and floating panes.

```css
igc-dockmanager > div {
    padding: 0.5rem;
    height: calc(100% - 1rem);
    width: calc(100% - 1rem);
    display: flex;
    flex-direction: column;
    /* background: orange; */
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>
<!-- end: WebComponents -->

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

<!-- WebComponents -->

```css
.dockManagerContent {
    padding: 0.5rem;
    height: calc(100% - 1rem);
    width: calc(100% - 1rem);
    display: flex;
    flex-direction: column;
    /* background: orange; */
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<!-- end: WebComponents -->

<div class="divider--half"></div>

## Customization

The Dock Manager component provides the option to customize all buttons using slots and parts. To change any of the buttons you simply have to define your own element inside the Dock Manager and set the slot attribute to the corresponding identifier.

Let's utilize these slots and parts to create a customized Dock Manager layout. First, we will provide our own icons, using the `closeButton`, `maximizeButton`, `minimizeButton`, `pinButton` and `unpinButton` slots:

```html
<igc-dockmanager id="dockManager">
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
</igc-dockmanager>
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
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
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

Practice all of the above mentioned actions in the sample [demo](dock-manager.md#web-components-dock-manager-example).

## Styling

The Dock Manager uses a shadow DOM to encapsulate his styles and behaviors. As a result, you can't simply target its internal elements with the usual CSS selectors. That is why we expose components **parts** that can be targeted with the **::part** CSS selector.

```css
igc-dockmanager::part(content-pane) {
  border-radius: 10px;
}
```

In the following example, we demonstrate the ability of customizing the Dock Manager through some of the CSS parts that we've exposed.

```css
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
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```typescript
const template = document.createElement('template');

template.innerHTML = `
  <div class="menu">
    <button id="expand-btn" class="expandBtn">
      <igc-icon-component name="more" />
    </button>

    <div id="menu-items">
      <button id="pin" class="item">
        <span>Unpin</span>
        <igc-icon-component name="unpin" />
      </button>
      <button id="close" class="item">
        Close
        <igc-icon-component name="close" />
      </button>
    </div>
  </div>

  <style>
    :host {
      --main-color: rgb(227,230,233);
      --font-color: rgb(113,115,116);
    }

    #expand-btn {
        margin-top: 7px;
        border: none;
        background-color: transparent;
        color: var(--font-color);
    }

    #menu-items {
        width: 70px;
        padding: 10px;
        position: absolute;
        right: 10px;
        z-index: 1;
        background-color: var(--main-color);
        border-radius: 10px;
        display: none;
        flex-direction: column;
    }

    .item {
        display: flex;
        justify-content: space-between;
        width: inherit;
        border: none;
        background-color: var(--main-color);
        color: var(--font-color);
    }

    .item:hover {
        color: rgb(74, 76, 77);
    }
  </style>
`

export class MenuComponent extends HTMLElement {
  shadow: any;
  handlePaneClose: Event;
  handlePinPane: Event;
  menuItems: HTMLElement;

  constructor() {
      super();
      this.shadow = this.shadowRoot;
      this.shadow = this.attachShadow({mode: 'closed'});
      // clone template content nodes to the shadow DOM
      this.shadow.appendChild(template.content.cloneNode(true));

      this.handlePaneClose = new CustomEvent('closePane', {
        bubbles: true,
        cancelable: false
      });
  
      this.handlePinPane = new CustomEvent('pinPane', {
        bubbles: true,
        cancelable: false
      });
  
      this.menuItems = this.shadow.getElementById('menu-items');
  }

  connectedCallback() {
    this.shadow.getElementById('expand-btn').addEventListener('click', () => this.expandMenu());

    this.shadow.getElementById('pin').addEventListener('click', () => {
      this.dispatchEvent(this.handlePinPane);
      this.menuItems.style.display = 'none';

      this.changePinIcon();
    });

    this.shadow.getElementById('close').addEventListener('click', () => this.dispatchEvent(this.handlePaneClose));

    document.addEventListener('click', (event) => {
      if(event.target !== this) {
          this.menuItems.style.display = 'none'
      } 
    });
  }

  expandMenu() {
    this.menuItems.style.display === '' || this.menuItems.style.display === 'none' ? 
        (this.menuItems.style.display = 'flex') : (this.menuItems.style.display = 'none');
  }

  changePinIcon() {
    if (this.shadow.getElementById('pin').children[1].name === 'unpin') {
      this.shadow.getElementById('pin').children[1].name = 'pin';
      this.shadow.getElementById('pin').children[0].innerText = 'Pin';
    } else {
      this.shadow.getElementById('pin').children[1].name = 'unpin';
      this.shadow.getElementById('pin').children[0].innerText = 'Unpin';
    }
  }
}
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

<!-- WebComponents -->

```scss
@import '~igniteui-dockmanager/dist/collection/styles/igc.themes';
```

```html
<igc-dockmanager class="dark-theme">
```

<!-- end: WebComponents -->

## Localization

The Dock Manager lets you localize the strings used in context menus, tooltips, and ARIA attributes. By default, it reads the [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute from the root `<html>` element to determine which language to use. If the [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute is missing or set to an unsupported value, the Dock Manager uses [English (en)](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#IgcDockManagerResourceStringsEN).

<!-- WebComponents -->

Ready-to-use Dock Manager resource strings for Spanish (`es`), Japanese (`ja`), and Korean (`ko`) are provided via the `igniteui-i18n-resources` peer dependency. To use one of these languages, install `igniteui-i18n-resources` and register the corresponding bundle with `igniteui-i18n-core`:

```ts
import { registerI18n } from 'igniteui-i18n-core';
import { DockManagerResourceStringsES } from 'igniteui-i18n-resources';

registerI18n(DockManagerResourceStringsES, 'es');
```

If you need to support a different language, use the [addResourceStrings](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/index.html#addResourceStrings) method to provide your own translated strings:

```ts
import { addResourceStrings } from 'igniteui-dockmanager';

const dockManagerStringsFr: IgcDockManagerResourceStrings = {
  close: 'Fermer',
  // ...
};

addResourceStrings('fr', dockManagerStringsFr);
```

<!-- end: WebComponents -->

The Dock Manager also exposes a [`resourceStrings`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#resourceStrings) property that you can use to modify individual strings directly. When you set the [`resourceStrings`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#resourceStrings) property, the Dock Manager uses the strings you provide regardless of the [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute on the page.

<!-- end: React, WebComponents -->

## API References

- [`IgcDockManagerComponent`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html)
- [`IgcDocumentHost`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdocumenthost.html)
- [`IgcDockManagerLayout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagerlayout.html)
- [`IgcContentPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html)
- [`IgcSplitPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html)
- [`IgcTabGroupPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html)
