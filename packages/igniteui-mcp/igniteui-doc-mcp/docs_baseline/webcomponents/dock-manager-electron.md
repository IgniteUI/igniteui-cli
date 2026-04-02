---
title: Web Components Dock Manager | Desktop Integration | Infragistics
_description: Use Infragistics' Web Components dock manager component to manage the layout of multi-window Electron desktop application. Check out Ignite UI for Web Components dock manager tutorials!
_keywords: dock manager, layout, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["DockManager", "DocumentHost", "DockManagerLayout", "DockManagerPaneType", "ContentPane", "SplitPane", "TabGroupPane", "PinnedLocation", "PaneHeaderElement"]
_tocName: Desktop Integration
_premium: true
---

# Web Components Dock Manager Desktop Integration

The Infragistics Web Components Dock Manager component can be used in a multi-window [Electron](https://www.electronjs.org/) desktop application to manage the layout of each window, drag panes outside of a window in order to create a new window and drag/drop panes from one window to another. You could find a sample implementation of such application in the following repository https://github.com/IgniteUI/dock-manager-electron-app.

<!-- TODO: Add a gif of the application and a link to download the exe -->

<img class="responsive-img" src="../../images/dockmanager-electron-app.gif"
alt="Web Components Dock Manager desktop integration"/>

## Implementation

Let's go through the most important parts of the implementation of this application.

### Project Structure

We have used the [Electron Forge](https://www.electronforge.io/) CLI tool and its [Typescript + Webpack](https://www.electronforge.io/templates/typescript-+-webpack-template) template to create an Electron application. Electron has two types of processes: Main and Renderer.

- The Main process creates web pages by creating **BrowserWindow** instances. Each **BrowserWindow** instance runs the web page in its Renderer process.
- The Renderer process manages only the corresponding web page.

The **index.ts** script specifies the entry point of the Electron application that will run the Main process. Most of the code of our application is inside the **renderer.ts** file which runs in the Renderer process. The **index.html** represents the content of the web page. The styles of the web page are hosted in the **index.css** file.

### Dock Manager Setup

After installing the Dock Manager package, we have registered the Dock Manager component using the **defineCustomElements()** in the **renderer.ts** file. This allows to add the **<igc-dockmanager>** in the **index.html** file.

For the Dock Manager pane contents we have used **iframe** elements which host different urls. In our case these urls point to [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular) samples. Since the **iframe** elements are self-contained, moving them from one window to another is easily accomplished.

### Drag and drop

In order to support dragging panes outside the application window we have replaced the built-in drag/drop which creates in-application floating panes with a custom implementation based on the [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API). We have subscribed to the `PaneHeaderConnected` and `TabHeaderConnected` events which are fired when a header element is connected to the DOM. When a header element is connected we reset the built-in [`dragService`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcpaneheaderelement.html#dragService) and attach `DragStart` and `DragEnd` event listeners.

```ts
const paneHeaderConnected = (event: CustomEvent<IgcPaneHeaderConnectionEventArgs>) => {
    const element = event.detail.element;
    element.dragService.destroy();
    element.dragService = null;
    element.draggable = true;
    element.ondragstart = ev => {
        paneHeaderDragStart(event.detail.pane, ev);
    };
    element.ondragend = ev => {
        paneHeaderDragEnd(ev);
    };
}

dockManager.addEventListener('paneHeaderConnected', paneHeaderConnected);
```

In the `PaneHeaderDragStart` function we set the [`draggedPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#draggedPane) property of the Dock Manager component which will notify it that a drag operation has been started.

```ts
const paneHeaderDragStart = async (pane: IgcContentPane, event: DragEvent) => {
    event.dataTransfer.dropEffect = 'move';
    dockManager.draggedPane = pane;
    // ...
}
```

We have subscribed to the `DragOver` and `drop` events of the `document` element. In the `DragOver` listener we notify the Dock Manager that the mouse is dragged over it by setting its [`dropPosition`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#dropPosition)) property. This forces the Dock Manager to display its docking indicators.

```ts
const handleDocumentDragOver = (event: DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    dockManager.dropPosition = {
      x: event.clientX,
      y: event.clientY
    };
}

document.addEventListener('dragover', handleDocumentDragOver);
document.addEventListener('drop', handleDocumentDrop);
```

In the `paneHeaderDragEnd` function we detect if the pane was dropped outside the application window and we call the `droppedOutOfWindow` function.

```ts
const paneHeaderDragEnd = async (event: DragEvent) => {
    event.preventDefault();
    // ...

    // dropped outside of the application
    if (event.dataTransfer.dropEffect === 'none') {
        await droppedOutOfWindow(event);
    }
    // ...
}
```

When the pane header is dropped inside a document we call the `DropPane` method which notifies the Dock Manager that the dragged pane was dropped. If the pane was dropped on a docking indicator the method returns **true**. If the pane was dropped in the same window it was dragged from, the pane will be docked to its new position automatically. However, if it was dropped in another window we call the `droppedInAnotherWindow` function which first removes the pane from the source Dock Manager and then adds it to the new one.

```ts
const handleDocumentDrop = async (event: DragEvent) => {
    const contentId = (dockManager.draggedPane as IgcContentPane).contentId;

    const docked = await dockManager.dropPane();

    if (docked) {
        const contentElement = dockManager.querySelector('[slot=' + contentId + ']');

        // if the content element is missing from the current dock manager it means it comes from another window
        if (!contentElement) {
            await droppedInAnotherWindow();
        }
    }
}
```

When a pane is dropped out of its current window, we need to remove the [`draggedPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html#draggedPane) from its Dock Manager component and update the layout.

```ts
const draggedPane = dockManager.draggedPane as IgcContentPane;
await dockManager.removePane(draggedPane);
dockManager.layout = { ...dockManager.layout };
```

Next, we need to move the pane content element to its new window. For this purpose, we use the [document.adoptNode()](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptNode) method, which allows us to transfer the content element node to the new document and finally, append it as a child of the new Dock Manager component.

```ts
const contentElement = dockManager.querySelector('[slot=' + draggedPane.contentId + ']');
const newDocument = childWindow.document;
const newDockManager = newDocument.getElementById('dockManager') as IgcDockManagerComponent;
const adoptedNode = newDocument.adoptNode(contentElement);
newDockManager.appendChild(adoptedNode);
```

### Window Management

We are using the native [window.open()](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) method to open a new window in the Renderer process. We set the `nativeWindowOpen` option to **true** when creating the `BrowserWindow` in the **index.ts**. This gives us direct access to the child `Window` object and its `document`. You could read more about opening windows from the Renderer process in this Electron [topic](https://www.electronjs.org/docs/api/window-open). Please note that the `nativeWindowOpen` option is still experimental.

```ts
mainWindow = new BrowserWindow({
    height: 800,
    width: 1000,
    webPreferences: {
        nativeWindowOpen: true
    }
});
```

In this application we have implemented an `IDockManagerWindow` type which could be either a main window (`IMainDockManagerWindow`) or a child window (`IChildDockManagerWindow`). The main window is the one created when the application starts. It contains references to all its child windows. A child window is created when a pane is dropped out of a window and has a reference to the main window of the application.

For the full source code please clone the [repository](https://github.com/IgniteUI/dock-manager-electron-app).

## API References

- [`IgcDockManagerComponent`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html)
- [`IgcDocumentHost`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdocumenthost.html)
- [`IgcDockManagerLayout`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagerlayout.html)
- [`IgcContentPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html)
