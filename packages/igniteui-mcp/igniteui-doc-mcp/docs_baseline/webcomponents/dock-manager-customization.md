---
title: Web Components Dock Manager | Customization | Infragistics
_description: Use Infragistics' Web Components dock manager component to manage the layout through panes, with the ability to customize it. Check out Ignite UI for Web Components dock manager tutorials!
_keywords: dock manager, layout, customization, Ignite UI for Web Components
_license: commercial
mentionedTypes: ["DockManager", "ContentPane"]
_tocName: Customization
_premium: true
---

## Customizing Web Components Dock Manager

The Infragistics Web Components Dock Manager component provides you with the properties needed to further customize the layout to suit your specific application requirements.
Let's dive in and explore how Web Components DockManager empowers you to create exceptional user interfaces and enhance the productivity of your applications!

<div class="divider--half"></div>

## Proximity Dock

In this mode the joystick indicators are hidden and docking can be accomplished by dragging a pane close to the border of another pane. While dragging a pane, when the mouse cursor reaches the area corresponding to the dock position, a dock preview is shown. On mouse up the dragged pane is docked in the previewed location. To enable proximity docking, simply set the `proximityDock` property to **true**.

```ts
this.dockManager.proximityDock = true;
```

### Inner Docking

In order to right dock a dragged pane 1 in pane 2, the cursor should be in the area defined by the right border of pane 2 and the right border offset to left. The offset distance is specified as a proximity dock threshold and is set to a value of 50px. In cases where there is a splitter, docking can be performed from both sides of the splitter.

### Outer Docking

To perform outer dock, you must first meet specific criteria. In Dock Manager, outer docking is only allowed within a document host, meaning you will be docking the target pane to the outer regions of the document host.

In order to perform an outer top dock for example, must fall within the region defined by the top border of the document host and stay within the top border offset. The offset distance is specified as a proximity dock outer threshold and is explicitly set to a value of 25px. The proximity dock threshold's value of 50px remains unchanged which essentially means that in this scenario, only a 25px area is available for inner docking. In cases where there is a splitter inside the document host, outer dock can be performed from both sides of the splitter.

> NOTE: When proximity dock is enabled, users would not be able to perform an outer dock for both left and right and top and bottom positions from a single pane. For example in a scenario where two split panes are present with a splitter between them, users will be able to perform only an outer left dock when the dragged pane is over the left split pane and vice versa.

Try it for yourself in the sample below:

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

## Focus Panes Programmatically

The `focusPane` method allows developers to dynamically and programmatically focus a specific pane within the layout by providing the `contentId` of the desired pane.

```ts
this.dockManager.focusPane('content1');
```

When using the `focusPane` method, the behavior varies depending on the state of the targeted pane. Here's how it works:

1. **Floating Panes**: If the pane is floating, invoking `focusPane` will bring it into focus, set it as the activePane and ensure it appears on top of any other floating panes.

2. **Unpinned Panes**: When the targeted pane is unpinned, `focusPane` will flyout the pane to its open state.

3. **Regular Pinned Panes**: For regular pinned panes, `focusPane` will set the pane as the `activePane`.

By utilizing this method, developers can effortlessly control the visibility and positioning of panes based on user interaction or application events.

Try it for yourself in the sample below:

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

## Auto-hide Pane Headers

With the `showPaneHeaders` property of the DockManager, developers now have the flexibility to control the visibility of pane headers within the `layout`. By default, `showPaneHeaders` is set to `always` ensuring that pane headers are always visible. When set to `onHoverOnly`, all pane headers will be hidden until you hover your mouse over the top edge of a content pane. The corresponding pane header will appear and it will smoothly hide once your mouse moves away. Take a look at the example below:

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

## Control Inner Docking

By default, the Dock Manager allows users to effortlessly drag and dock panes inside each other, creating tabs. To provide more control over this functionality, we've introduced two properties - `allowInnerDock` and `acceptsInnerDock`.

By setting the `acceptsInnerDock` property of an [`IgcContentPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html), developers can control docking inside specific content panes. When this property is set to false, users will be restricted from performing inner docking in the specified pane.

```ts
{
    type: IgcDockManagerPaneType.contentPane,
    header: 'Floating 1',
    contentId: 'content3',
    acceptsInnerDock: false
}
```

If you wish to disable inner docking throughout the DockManager, simply set `allowInnerDock` to **false**. This property determines whether the end user is permitted to inner dock panes at all.

```ts
this.dockManager.allowInnerDock = false;
```

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

## Control Pane Dragging

With the `containedInBoundaries` property, developers can control whether the sides of floating panes are always contained within the DockManager. When set to **true**, pane dragging will stop once any of the sides attempt to move beyond the DockManager boundaries.

Try it in the example below:

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

## Highlight Resizing Panes

When users resize panes by dragging a splitter, it is not always obvious which panes are affected, especially in more complex layouts. To make this interaction clearer, the Dock Manager can draw a border around the panes that are currently being resized. This visual cue helps users immediately understand which parts of the layout will grow or shrink as they move the splitter.

You can enable and style this behavior by configuring the following CSS custom properties on the Dock Manager host element (or a parent element):

- `--igc-resize-target-border-color` – controls the color of the resize target border.
- `--igc-resize-target-border-width` – controls the thickness of the border (for example, `2px`).
- `--igc-resize-target-border-style` – controls the border style (for example, `solid`, `dashed`).

```css
igc-dockmanager {
    --igc-resize-target-border-color: #0078d4;
    --igc-resize-target-border-width: 2px;
    --igc-resize-target-border-style: solid;
}
```

Once these variables are set, any pane that is impacted by a splitter drag will be wrapped with the configured border for the duration of the resize operation, giving users clear, immediate feedback about which panes are being adjusted.

## Split Panes Fixed Size Mode

By default, each pane in a split layout receives a relative size compared to its siblings and that size defaults to 100. For example, if you have two sibling panes where the first pane has its size set to 400 and the second one to 200, the first will be twice the size of the second and together they will fill all the available space.

If, for certain panes, you want explicit pixel-based sizing instead of relative sizing, you can turn on fixed size mode by setting the `useFixedSize` property of the parent split pane to **true**. When this property is enabled, all children are sized in pixels based on their `size` property. In the previous example, the first pane will span 400 pixels and the second pane 200 pixels. Resizing via the splitter changes only the size of the pane you are interacting with, without redistributing space across its siblings.

As soon as the sum of the child panes' sizes exceeds the available size of the parent, the split pane becomes scrollable. The dock manager now also provides built-in autoscrolling to keep the user focused on their content:

- When users **drag panes toward the edges** of a fixed-size root pane, the container scrolls in the direction of the drag so they can easily reach off-screen areas.
- When users **resize panes via the splitter**, the container scrolls as needed to reveal newly expanded content.

For a **horizontal** split pane, autoscrolling happens to the **left** or **right**; for a **vertical** split pane, it happens to the **top** or **bottom**, depending on the direction of the drag or resize.

```ts
const splitPaneRelativeSize: IgcSplitPane = {
    type: IgcDockManagerPaneType.splitPane,
    orientation: IgcSplitPaneOrientation.horizontal,
    panes: [
        {
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'content1',
            header: 'Pane 1',
            size: 400 // Size will be relative to siblings
        },
        {
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'content2',
            header: 'Pane 2',
            size: 200 // Size will be relative to siblings
        }
    ]
}

const splitPaneFixedSize: IgcSplitPane = {
    type: IgcDockManagerPaneType.splitPane,
    orientation: IgcSplitPaneOrientation.horizontal,
    useFixedSize: true,
    panes: [
        {
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'content3',
            header: 'Pane 3',
            size: 400 // Size will be applied in pixels
        },
        {
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'content4',
            header: 'Pane 4',
            size: 200 // Size will be applied in pixels
        }
    ]
}
```

Please note that when you dock a pane inside a split pane that has `useFixedSize` set to **true** the docked pane will then have the same width/height (depending on the split pane orientation) as the floating pane.

Try it for yourself in the sample below:

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

## API References

- [`IgcDockManagerComponent`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html)
- [`IgcContentPane`](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html)
