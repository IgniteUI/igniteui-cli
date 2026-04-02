---
title: Web Components Dock Manager | Embed Frames | Infragistics
_description: Use Infragistics' Web Components dock manager to embed interactive content using panes. View Ignite UI for Web Components dock manager tutorials!
_keywords: dock manager, embed frames, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["DockManager"]
_tocName: Embedding Frames
_premium: true
---

# Web Components Embedding Frames in Dock Manager

The Infragistics Web Components Dock Manager component provides you with the layout for embedding interactive content in your application using panes.

## Web Components Embedding Frames in Dock Manager Example

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
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dock-manager-overview-iframe" data-demos-base-url="http://localhost:4200">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

<!--
## Usage

Once the Dock Manager is imported, you can add it on the page:

```html
<igc-dockmanager id="dockManager">
</igc-dockmanager>
```

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

```html
<igc-dockmanager id="dockManager">
    <div slot="content1" style="width: 100%; height: 100%;">Content 1</div>
</igc-dockmanager>
``` -->

## API References

- [`IgcDockManagerComponent`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html)
