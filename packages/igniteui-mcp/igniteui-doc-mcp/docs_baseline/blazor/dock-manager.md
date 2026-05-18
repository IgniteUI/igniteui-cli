---
title: Blazor Dock Manager | Layout Controls | Infragistics
_description: Use Infragistics' Blazor dock manager component to manage the layout through panes, with the ability to customize it by pinning, resizing, moving and hiding panes. Check out Ignite UI for Blazor dock manager tutorials!
_keywords: dock manager, layout, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["DockManager", "DocumentHost", "DockManagerLayout", "DockManagerPaneType", "ContentPane", "SplitPane", "TabGroupPane", "PinnedLocation", "PaneHeaderElement"]
_tocName: Dock Manager
---

# Blazor Dock Manager Overview

The Infragistics Blazor Dock Manager provides a means to manage the layout of your application through panes, allowing your end-users to customize it further by pinning, resizing, moving, maximizing and hiding panes.

## Blazor Dock Manager Example

This example shows most functionalities and docking options of the [`IgbDockManager`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDockManager.html) that you can use in your application.

```razor
@inject IJSRuntime JSRuntime;
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
         <IgbDockManager @ref="dockManager" Layout="Layout" Height="100%" Width="100%">
            <div slot="content1">Content 1 - pane docked to left side</div>
            <div slot="content2">Content 2 - pane pinned to left side</div>
            <div slot="content3">Content 3 - document pane</div>
            <div slot="content4">Content 4 - document pane</div>
            <div slot="content5">Content 5- pane docked to the bottom</div>
            <div slot="content6">Content 6 - tab pane 1</div>
            <div slot="content7">Content 7 - tab pane 2</div>
            <div slot="content8">Content 8 - tab pane 3</div>
            <div slot="content9">Content 9 - tab pane 4</div>
            <div slot="content10">Content 10 - tab pane 5</div>
            <div slot="content11">Content 11 -  pane docked bottom right</div>
            <div slot="content12">Content 12 - floating pane</div>
        </IgbDockManager>
    </div>
</div>

@code {

    public IgbDockManager dockManager { get; set; }
    public IgbDockManagerLayout Layout { get; set; }

    protected override void OnInitialized()
    {
        Layout = new IgbDockManagerLayout();
        Layout.RootPane = new IgbSplitPane();
        Layout.RootPane.PaneType = DockManagerPaneType.SplitPane;
        Layout.RootPane.Orientation = SplitPaneOrientation.Horizontal;

        IgbSplitPane rootsplitPane1 = new IgbSplitPane
            {
                PaneType = DockManagerPaneType.SplitPane,
                Orientation = SplitPaneOrientation.Vertical,
            };

        IgbContentPane contentPane1 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                Header = "Content Pane 1",
                ContentId = "content1"
            };

        IgbContentPane contentPane2 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                Header = "Unpinned Pane 1",
                ContentId = "content2",
                IsPinned = false
            };

        IgbSplitPane splitPane2 = new IgbSplitPane
            {
                PaneType = DockManagerPaneType.SplitPane,
                Orientation = SplitPaneOrientation.Vertical,
                Size = 200,
            };

        IgbDocumentHost documentHost1 = new IgbDocumentHost
            {
                PaneType = DockManagerPaneType.DocumentHost,
                Size = 200,
            };

        IgbSplitPane documentHost1RootSplitPane = new IgbSplitPane
            {
                PaneType = DockManagerPaneType.SplitPane,
                Orientation = SplitPaneOrientation.Horizontal,
            };

        IgbTabGroupPane tabGroupPane1 = new IgbTabGroupPane
            {
                PaneType = DockManagerPaneType.TabGroupPane,

            };

        IgbContentPane documentContentPane1 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                Header = "Document 1",
                ContentId = "content3"
            };

        IgbContentPane documentContentPane2 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                Header = "Document 2",
                ContentId = "content4"
            };

        IgbContentPane contentPane5 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                ContentId = "content5",
                Header = "Unpinned Pane 2",
                IsPinned = false
            };


        IgbSplitPane rootsplitPane2 = new IgbSplitPane
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Vertical,

        };

        IgbTabGroupPane tabGroupPane2 = new IgbTabGroupPane
            {
                PaneType = DockManagerPaneType.TabGroupPane,
                Size = 200,

            };

        IgbContentPane tabGroupContentPane1 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                ContentId = "content6",
                Header = "Tab 1"
            };
        IgbContentPane tabGroupContentPane2 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                ContentId = "content7",
                Header = "Tab 2"
            };
        IgbContentPane tabGroupContentPane3 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                ContentId = "content8",
                Header = "Tab 3"
            };
        IgbContentPane tabGroupContentPane4 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                ContentId = "content9",
                Header = "Tab 4"
            };
        IgbContentPane tabGroupContentPane5 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                ContentId = "content10",
                Header = "Tab 5"
            };

        IgbContentPane contentPane6 = new IgbContentPane
        {
            PaneType = DockManagerPaneType.ContentPane,
            ContentId = "content11",
            Header = "Content Pane 2"
        };

        IgbSplitPane floatingSplitPane = new IgbSplitPane
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Horizontal,
            FloatingHeight = 150,
            FloatingWidth = 250,
            FloatingLocation = new IgbDockManagerPoint { X = 300, Y = 200 },

        };
        IgbContentPane contentPane7 = new IgbContentPane
        {
            PaneType = DockManagerPaneType.ContentPane,
            ContentId = "content12",
            Header = "Floating Pane"
        };


        rootsplitPane1.Panes.Add(contentPane1);
        rootsplitPane1.Panes.Add(contentPane2);
        splitPane2.Panes.Add(documentHost1);
        splitPane2.Panes.Add(contentPane5);
        documentHost1.RootPane = documentHost1RootSplitPane;
        documentHost1RootSplitPane.Panes.Add(tabGroupPane1);
        tabGroupPane1.Panes.Add(documentContentPane1);
        tabGroupPane1.Panes.Add(documentContentPane2);
        rootsplitPane2.Panes.Add(tabGroupPane2);
        tabGroupPane2.Panes.Add(tabGroupContentPane1);
        tabGroupPane2.Panes.Add(tabGroupContentPane2);
        tabGroupPane2.Panes.Add(tabGroupContentPane3);
        tabGroupPane2.Panes.Add(tabGroupContentPane4);
        tabGroupPane2.Panes.Add(tabGroupContentPane5);
        rootsplitPane2.Panes.Add(contentPane6);
        floatingSplitPane.Panes.Add(contentPane7);
        Layout.RootPane.Panes.Add(rootsplitPane1);
        Layout.RootPane.Panes.Add(splitPane2);
        Layout.RootPane.Panes.Add(rootsplitPane2);
        Layout.FloatingPanes.Add(floatingSplitPane);
    }

}
```

<div class="divider--half"></div>

<!-- end: Angular, React, WebComponents -->

<div class="divider--half"></div>

<div class="divider--half"></div>

<div class="divider--half"></div>

<div class="divider--half"></div>

## Customization

The Dock Manager component provides the option to customize all buttons using slots and parts. To change any of the buttons you simply have to define your own element inside the Dock Manager and set the slot attribute to the corresponding identifier.

Let's utilize these slots and parts to create a customized Dock Manager layout. First, we will provide our own icons, using the `closeButton`, `maximizeButton`, `minimizeButton`, `pinButton` and `unpinButton` slots:

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

```razor
@inject IJSRuntime JSRuntime;
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">

        <style>
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
        </style>


        <IgbDockManager @ref="dockManager" Layout="Layout" Height="100%" Width="100%">

            <button slot="closeButton">x</button>

            <button slot="maximizeButton">
                <img src="https://www.svgrepo.com/show/419558/arrow-top-chevron-chevron-top.svg" width="17" height="17" alt="" />
            </button>

            <button slot="minimizeButton">
                <img src="https://www.svgrepo.com/show/419557/bottom-chevron-chevron-down.svg" width="17" height="17" alt="" />
            </button>

            <button slot="pinButton">
                <img src="https://www.svgrepo.com/show/154123/pin.svg" width="17" height="17" alt="" />
            </button>

            <button slot="unpinButton">
                <img src="https://www.svgrepo.com/show/154123/pin.svg" width="17" height="17" alt="" />
            </button>

            <div slot="content1">Content 1 - pane docked to left side</div>
            <div slot="content2">Content 2 - pane pinned to left side</div>
            <div slot="content3">Content 3 - document pane</div>
            <div slot="content4">Content 4 - document pane</div>
            <div slot="content5">Content 5- pane docked to the bottom</div>
            <div slot="content6">Content 6 - tab pane 1</div>
            <div slot="content7">Content 7 - tab pane 2</div>
            <div slot="content8">Content 8 - tab pane 3</div>
            <div slot="content9">Content 9 - tab pane 4</div>
            <div slot="content10">Content 10 - tab pane 5</div>
            <div slot="content11">Content 11 -  pane docked bottom right</div>
            <div slot="content12">Content 12 - floating pane</div>
        </IgbDockManager>
    </div>
</div>

@code {

    public IgbDockManager dockManager { get; set; }
    public IgbDockManagerLayout Layout { get; set; }

    protected override void OnInitialized()
    {
        Layout = new IgbDockManagerLayout();
        Layout.RootPane = new IgbSplitPane();
        Layout.RootPane.PaneType = DockManagerPaneType.SplitPane;
        Layout.RootPane.Orientation = SplitPaneOrientation.Horizontal;

        IgbSplitPane rootsplitPane1 = new IgbSplitPane
            {
                PaneType = DockManagerPaneType.SplitPane,
                Orientation = SplitPaneOrientation.Vertical,
            };

        IgbContentPane contentPane1 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                Header = "Content Pane 1",
                ContentId = "content1"
            };

        IgbContentPane contentPane2 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                Header = "Unpinned Pane 1",
                ContentId = "content2",
                IsPinned = false
            };

        IgbSplitPane splitPane2 = new IgbSplitPane
            {
                PaneType = DockManagerPaneType.SplitPane,
                Orientation = SplitPaneOrientation.Vertical,
                Size = 200,
            };

        IgbDocumentHost documentHost1 = new IgbDocumentHost
            {
                PaneType = DockManagerPaneType.DocumentHost,
                Size = 200,
            };

        IgbSplitPane documentHost1RootSplitPane = new IgbSplitPane
            {
                PaneType = DockManagerPaneType.SplitPane,
                Orientation = SplitPaneOrientation.Horizontal,
            };

        IgbTabGroupPane tabGroupPane1 = new IgbTabGroupPane
            {
                PaneType = DockManagerPaneType.TabGroupPane,

            };

        IgbContentPane documentContentPane1 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                Header = "Document 1",
                ContentId = "content3"
            };

        IgbContentPane documentContentPane2 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                Header = "Document 2",
                ContentId = "content4"
            };

        IgbContentPane contentPane5 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                ContentId = "content5",
                Header = "Unpinned Pane 2",
                IsPinned = false
            };


        IgbSplitPane rootsplitPane2 = new IgbSplitPane
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Vertical,

        };

        IgbTabGroupPane tabGroupPane2 = new IgbTabGroupPane
            {
                PaneType = DockManagerPaneType.TabGroupPane,
                Size = 200,

            };

        IgbContentPane tabGroupContentPane1 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                ContentId = "content6",
                Header = "Tab 1"
            };
        IgbContentPane tabGroupContentPane2 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                ContentId = "content7",
                Header = "Tab 2"
            };
        IgbContentPane tabGroupContentPane3 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                ContentId = "content8",
                Header = "Tab 3"
            };
        IgbContentPane tabGroupContentPane4 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                ContentId = "content9",
                Header = "Tab 4"
            };
        IgbContentPane tabGroupContentPane5 = new IgbContentPane
            {
                PaneType = DockManagerPaneType.ContentPane,
                ContentId = "content10",
                Header = "Tab 5"
            };

        IgbContentPane contentPane6 = new IgbContentPane
        {
            PaneType = DockManagerPaneType.ContentPane,
            ContentId = "content11",
            Header = "Content Pane 2"
        };

        IgbSplitPane floatingSplitPane = new IgbSplitPane
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Horizontal,
            FloatingHeight = 150,
            FloatingWidth = 250,
            FloatingLocation = new IgbDockManagerPoint { X = 300, Y = 200 },

        };
        IgbContentPane contentPane7 = new IgbContentPane
        {
            PaneType = DockManagerPaneType.ContentPane,
            ContentId = "content12",
            Header = "Floating Pane"
        };


        rootsplitPane1.Panes.Add(contentPane1);
        rootsplitPane1.Panes.Add(contentPane2);
        splitPane2.Panes.Add(documentHost1);
        splitPane2.Panes.Add(contentPane5);
        documentHost1.RootPane = documentHost1RootSplitPane;
        documentHost1RootSplitPane.Panes.Add(tabGroupPane1);
        tabGroupPane1.Panes.Add(documentContentPane1);
        tabGroupPane1.Panes.Add(documentContentPane2);
        rootsplitPane2.Panes.Add(tabGroupPane2);
        tabGroupPane2.Panes.Add(tabGroupContentPane1);
        tabGroupPane2.Panes.Add(tabGroupContentPane2);
        tabGroupPane2.Panes.Add(tabGroupContentPane3);
        tabGroupPane2.Panes.Add(tabGroupContentPane4);
        tabGroupPane2.Panes.Add(tabGroupContentPane5);
        rootsplitPane2.Panes.Add(contentPane6);
        floatingSplitPane.Panes.Add(contentPane7);
        Layout.RootPane.Panes.Add(rootsplitPane1);
        Layout.RootPane.Panes.Add(splitPane2);
        Layout.RootPane.Panes.Add(rootsplitPane2);
        Layout.FloatingPanes.Add(floatingSplitPane);
    }

}
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

Practice all of the above mentioned actions in the sample [demo](dock-manager.md#blazor-dock-manager-example).

## Styling

The Dock Manager uses a shadow DOM to encapsulate his styles and behaviors. As a result, you can't simply target its internal elements with the usual CSS selectors. That is why we expose components **parts** that can be targeted with the **::part** CSS selector.

```css
igc-dockmanager::part(content-pane) {
  border-radius: 10px;
}
```

In the following example, we demonstrate the ability of customizing the Dock Manager through some of the CSS parts that we've exposed.

```razor
@inject IJSRuntime JSRuntime;
@using IgniteUI.Blazor.Controls
@using System.Timers

<style>
:root {
    --main-color: rgb(227,230,233);
    --secondary-color: rgb(113,115,116);
    --white: #ffffff;
    --font-color: rgb(113,115,116);
    display: flex;
    flex-direction: column;
    height: 100%;
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

.stock-price {
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

</style>


<div id="root">
    <IgbDockManager @ref=dockManager id="dockManager" Height="100%" Width="100%" Layout="Layout">
        <div slot="accountHeader" class="header">
            <span>ACCOUNTS</span>
            <menu-component></menu-component>
        </div>
        <div slot="accountFloatingHeader" class="floatingHeader">
            <span>ACCOUNTS</span>
            <button id="close" class="closeButton">
                <IgbIcon IconName="close" />
            </button>
        </div>
        <div class="dockManagerFull" slot="content1">
            <IgbCard style="overflow-y: auto;" elevated>
                <IgbCardContent>
                    <div class="account-content">
                        <div>
                            <h1>$2980.00</h1>
                            <span style="font-size: 12pt;">United States Dollar</span>
                        </div>

                        <IgbAvatar  style="margin: 0.5rem;" class="size-medium" Src="https://dl.infragistics.com/x/img/flags/USA.png"
                                    Shape="@AvatarShape.Rounded">USA</IgbAvatar>
                    </div>
                </IgbCardContent>

                <IgbCardActions>
                    <div>
                        <IgbButton Variant="@ButtonVariant.Fab" class="size-medium" slot="start">
                            Add Money
                        </IgbButton>
                        <IgbButton Variant="@ButtonVariant.Fab" class="size-medium" slot="start">
                            Send
                        </IgbButton>
                    </div>
                </IgbCardActions>
            </IgbCard>
        </div>

        <div slot="todayTopMovers" class="header">
            <span>TODAY'S TOP MOVERS</span>
            <menu-component></menu-component>
        </div>
        <div slot="todayTopMoversFloatingHeader" class="floatingHeader">
            <span>TODAY'S TOP MOVERS</span>
            <button id="close" class="closeButton">
                <IgbIcon IconName="close" />
            </button>
        </div>
        <div class="dockManagerFull" slot="content2" style="overflow-y: auto;">
            <div class="top-movers-content size-large">
                <div class="top-move-stock-item">
                    <IgbAvatar Src="https://dl.infragistics.com/x/img/logo/company/TSLA.png" Shape="@AvatarShape.Circle">TSLA</IgbAvatar>
                    <span>1017,08$</span>
                    <div class="stock-item-movement-down">
                        <IgbIcon @ref=RegisterIconRef IconName="arrow-down" Collection="material"/>
                        12,54%
                    </div>
                </div>
                <div class="top-move-stock-item">
                    <IgbAvatar Src="https://dl.infragistics.com/x/img/logo/company/AMC.png" Shape="@AvatarShape.Circle">AMC</IgbAvatar>
                    <span>39,33$</span>
                    <div class="stock-item-movement-down">
                        <IgbIcon IconName="arrow-down" Collection="material"></IgbIcon>
                        12,72%
                    </div>
                </div>
                <div class="top-move-stock-item">
                    <IgbAvatar Src="https://dl.infragistics.com/x/img/logo/company/GOEV.png" Shape="@AvatarShape.Circle">GOEV</IgbAvatar>
                    <span>12,33$</span>
                    <div class="stock-item-movement-up"><IgbIcon IconName="arrow-up" Collection="material"></IgbIcon>45,92%</div>
                </div>
                <div class="top-move-stock-item">
                    <IgbAvatar Src="https://dl.infragistics.com/x/img/logo/company/LCID.png" Shape="@AvatarShape.Circle">LCID</IgbAvatar>
                    <span>58,14$</span>
                    <div class="stock-item-movement-up"><IgbIcon IconName="arrow-up" Collection="material"></IgbIcon>29,42%</div>
                </div>
                <div class="top-move-stock-item">
                    <IgbAvatar Src="https://dl.infragistics.com/x/img/logo/company/NIO.png" Shape="@AvatarShape.Circle">NIO</IgbAvatar>
                    <span>21,67$</span>
                    <div class="stock-item-movement-down"><IgbIcon IconName="arrow-down" Collection="material"></IgbIcon>7,25%</div>
                </div>
                <div class="top-move-stock-item">
                    <IgbAvatar Src="https://dl.infragistics.com/x/img/logo/company/STNE.png" Shape="@AvatarShape.Circle">STNE</IgbAvatar>
                    <span>22,48$</span>
                    <div class="stock-item-movement-down"><IgbIcon IconName="arrow-down" Collection="material"></IgbIcon>28,68%</div>
                </div>
                <div class="top-move-stock-item">
                    <IgbAvatar Src="https://dl.infragistics.com/x/img/logo/company/ROKU.png" Shape="@AvatarShape.Circle">ROKU</IgbAvatar>
                    <span>249,35$</span>
                    <div class="stock-item-movement-down"><IgbIcon IconName="arrow-down" Collection="material"></IgbIcon>9,5%</div>
                </div>
                <div class="top-move-stock-item">
                    <IgbAvatar Src="https://dl.infragistics.com/x/img/logo/company/MAXR.png" Shape="@AvatarShape.Circle">MAXR</IgbAvatar>
                    <span>33,14$</span>
                    <div class="stock-item-movement-up"><IgbIcon IconName="arrow-up" Collection="material"></IgbIcon>8,12%</div>
                </div>
            </div>
        </div>
        <div slot="transactionsHeader" class="header">
            <span>TRANSACTIONS</span>
            <menu-component></menu-component>
        </div>
        <div slot="transactionsFloatingHeader" class="floatingHeader">
            <span>TRANSACTIONS</span>
            <button id="close" class="closeButton">
                <IgbIcon IconName="close" />
            </button>
        </div>
        <div class="dockManagerFull" slot="content3">
            <IgbList id="list" style="overflow-y: auto;">
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-2.svg" Shape="@AvatarShape.Circle">AMZN</IgbAvatar>
                    <h2 slot="title">Money added via **0000</h2>
                    <span slot="subtitle">14:40</span>
                    <div slot="end" class="stock-price">
                        <span>+ 2000$</span>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-only.svg" Shape="@AvatarShape.Circle">SET</IgbAvatar>
                    <h2 slot="title">Sports Event Tickets</h2>
                    <span slot="subtitle">Jun 21, 06:15, Declined because your card is inactive</span>
                    <div slot="end" class="stock-price">
                        <span style="text-decoration: line-through;">1017,08 $</span>
                        <span style="color: lightgray;">900,08 $</span>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-only.svg" Shape="@AvatarShape.Circle">AT</IgbAvatar>
                    <h2 slot="title">Airplane Tickets</h2>
                    <span slot="subtitle">Jun 21, 06:15, Declined because your card is inactive</span>
                    <div slot="end" class="stock-price">
                        <span style="text-decoration: line-through;">985,00 $</span>
                        <span style="color: lightgray;">980,00 $</span>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/building.svg" Shape="@AvatarShape.Circle">H</IgbAvatar>
                    <h2 slot="title">Hotel</h2>
                    <span slot="subtitle">Jun 21, 06:15</span>
                    <div slot="end" class="stock-price">
                        <span>- 400,00 $</span>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/atm.svg" Shape="@AvatarShape.Circle">ATM</IgbAvatar>
                    <h2 slot="title">Cash at ATM 000000</h2>
                    <span slot="subtitle">14:40</span>
                    <div slot="end" class="stock-price">
                        <span>- 140$</span>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-1.svg" Shape="@AvatarShape.Circle">U</IgbAvatar>
                    <h2 slot="title">Utilities</h2>
                    <span slot="subtitle">21/06/2021 16:00</span>
                    <div slot="end" class="stock-price">
                        <span>- 200$</span>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/atm.svg" Shape="@AvatarShape.Circle">ATM</IgbAvatar>
                    <h2 slot="title">Cash at ATM 000001</h2>
                    <span slot="subtitle">10:10</span>
                    <div slot="end" class="stock-price">
                        <span>- 280$</span>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-2.svg" Shape="@AvatarShape.Circle">MA</IgbAvatar>
                    <h2 slot="title">Money added via **0000</h2>
                    <span slot="subtitle">14:40</span>
                    <div slot="end" class="stock-price">
                        <span>+ 2000$</span>
                    </div>
                </IgbListItem>
            </IgbList>
        </div>

        <div slot="popularStocksHeader" class="header">
            <span>POPULAR STOCKS</span>
            <menu-component></menu-component>
        </div>
        <div slot="popularStocksFloatingHeader" class="floatingHeader">
            <span>POPULAR STOCKS</span>
            <button id="close" class="closeButton">
                <IgbIcon IconName="close" />
            </button>
        </div>
        <div class="dockManagerFull" slot="content4">
            <IgbList id="list" style="overflow-y: auto;">
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://dl.infragistics.com/x/img/logo/company/TSLA.png" Shape="@AvatarShape.Circle">TSLA</IgbAvatar>
                    <h2 slot="title">Tesla</h2>
                    <span slot="subtitle">TSLA - Electric Vehicles</span>
                    <div slot="end" class="stock-price">
                        <span>1017,08 $</span>
                        <div class="stock-item-movement-down"><IgbIcon IconName="arrow-down" Collection="material"></IgbIcon>12,54%</div>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://dl.infragistics.com/x/img/logo/company/APPL.png" Shape="@AvatarShape.Circle">APPL</IgbAvatar>
                    <h2 slot="title">Apple</h2>
                    <span slot="subtitle">APPL - iPhones and Macs</span>
                    <div slot="end" class="stock-price">
                        <span>150,47 $</span>
                        <div class="stock-item-movement-up"><IgbIcon IconName="arrow-up" Collection="material"></IgbIcon>0,2%</div>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://dl.infragistics.com/x/img/logo/company/NIO.png" Shape="@AvatarShape.Circle">NIO</IgbAvatar>
                    <h2 slot="title">NIO</h2>
                    <span slot="subtitle">NIO - Electric Vehicles</span>
                    <div slot="end" class="stock-price">
                        <span>40,07 $</span>
                        <div class="stock-item-movement-down"><IgbIcon IconName="arrow-down" Collection="material"></IgbIcon>7,25%</div>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://dl.infragistics.com/x/img/logo/company/AMZN.png" Shape="@AvatarShape.Circle">AMZN</IgbAvatar>
                    <h2 slot="title">Amazon</h2>
                    <span slot="subtitle">AMZN - E-Commerce</span>
                    <div slot="end" class="stock-price">
                        <span>3582,32 $</span>
                        <div class="stock-item-movement-down"><IgbIcon IconName="arrow-down" Collection="material"></IgbIcon>2,68%</div>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://dl.infragistics.com/x/img/logo/company/GME.png" Shape="@AvatarShape.Circle">GME</IgbAvatar>
                    <h2 slot="title">Game Stop</h2>
                    <span slot="subtitle">GME - Video Games Retail</span>
                    <div slot="end" class="stock-price">
                        <span>205,60 $</span>
                        <div class="stock-item-movement-down"><IgbIcon IconName="arrow-down" Collection="material"></IgbIcon>5,96%</div>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://dl.infragistics.com/x/img/logo/company/AMC.png" Shape="@AvatarShape.Circle">AMC</IgbAvatar>
                    <h2 slot="title">AMC</h2>
                    <span slot="subtitle">AMC - Entertainment</span>
                    <div slot="end" class="stock-price">
                        <span>39,33 $</span>
                        <div class="stock-item-movement-down"><IgbIcon IconName="arrow-down" Collection="material"></IgbIcon>12,72%</div>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://dl.infragistics.com/x/img/logo/company/MSFT.png" Shape="@AvatarShape.Circle">MSFT</IgbAvatar>
                    <h2 slot="title">Microsoft</h2>
                    <span slot="subtitle">MSFT - Tech Giant</span>
                    <div slot="end" class="stock-price">
                        <span>335,66 $</span>
                        <div class="stock-item-movement-down"><IgbIcon IconName="arrow-down" Collection="material"></IgbIcon>0,39%</div>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://dl.infragistics.com/x/img/logo/company/SPCE.png" Shape="@AvatarShape.Circle">SPCE</IgbAvatar>
                    <h2 slot="title">Virgin Galactic</h2>
                    <span slot="subtitle">SPCE - Space Tourism</span>
                    <div slot="end" class="stock-price">
                        <span>18,90 $</span>
                        <div class="stock-item-movement-down"><IgbIcon IconName="arrow-down" Collection="material"></IgbIcon>1,66%</div>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://dl.infragistics.com/x/img/logo/company/PFE.png" Shape="@AvatarShape.Circle">PFE</IgbAvatar>
                    <h2 slot="title">Pfizer</h2>
                    <span slot="subtitle">PFE - Pharmaceuticals</span>
                    <div slot="end" class="stock-price">
                        <span>49,43 $</span>
                        <div class="stock-item-movement-down"><IgbIcon IconName="arrow-down" Collection="material"></IgbIcon>0,60%</div>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" src="https://dl.infragistics.com/x/img/logo/company/GOOGL.png" Shape="@AvatarShape.Circle">GOOGL</IgbAvatar>
                    <h2 slot="title">Alpabet (Class A)</h2>
                    <span slot="subtitle">GOOGL - Tech Giant</span>
                    <div slot="end" class="stock-price">
                        <span>2972,88 $</span>
                        <div class="stock-item-movement-down"><IgbIcon IconName="arrow-down" Collection="material"></IgbIcon>0,02%</div>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://dl.infragistics.com/x/img/logo/company/META.png" Shape="@AvatarShape.Circle">META</IgbAvatar>
                    <h2 slot="title">Meta Platforms</h2>
                    <span slot="subtitle">FB - Tech Giant</span>
                    <div slot="end" class="stock-price">
                        <span>347,86 $</span>
                        <div class="stock-item-movement-up"><IgbIcon IconName="arrow-up" Collection="material"></IgbIcon>2,04%</div>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://dl.infragistics.com/x/img/logo/company/PLTR.png" Shape="@AvatarShape.Circle">PLTR</IgbAvatar>
                    <h2 slot="title">Palantir</h2>
                    <span slot="subtitle">PLTR - Data Analytics</span>
                    <div slot="end" class="stock-price">
                        <span>23,30 $</span>
                        <div class="stock-item-movement-up"><IgbIcon IconName="arrow-up" Collection="material"></IgbIcon>2,06%</div>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://dl.infragistics.com/x/img/logo/company/AAL.png" Shape="@AvatarShape.Circle">AAL</IgbAvatar>
                    <h2 slot="title">American Airlines</h2>
                    <span slot="subtitle">AAL - Airline Service</span>
                    <div slot="end" class="stock-price">
                        <span>20,45 $</span>
                        <div class="stock-item-movement-up"><IgbIcon IconName="arrow-up" Collection="material"></IgbIcon>0.79%</div>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Src="https://dl.infragistics.com/x/img/logo/company/NFLX.png" Shape="@AvatarShape.Circle">NFLX</IgbAvatar>
                    <h2 slot="title">Netflix</h2>
                    <span slot="subtitle">NFLX - TV Streaming</span>
                    <div slot="end" class="stock-price">
                        <span>679,39 $</span>
                        <div class="stock-item-movement-down"><IgbIcon IconName="arrow-down" Collection="material"></IgbIcon>0,47%</div>
                    </div>
                </IgbListItem>
            </IgbList>
        </div>

        <div slot="cardsHeader" class="header">
            <span>PHYSICAL CARDS</span>
            <menu-component></menu-component>
        </div>
        <div slot="cardsFloatingHeader" class="floatingHeader">
            <span>TODAY'S TOP MOVERS</span>
            <button id="close" class="closeButton">
                <IgbIcon IconName="close" />
            </button>
        </div>
        <div class="dockManagerFull" slot="content5">
            <IgbCard style="overflow-y: auto;" Elevated=true>
                <IgbCardContent>
                    <IgbButton Variant="@ButtonVariant.Flat" class="add-card-btn size-small">
                        + Add Card
                    </IgbButton>
                    <IgbList id="list" style="overflow-y: auto;">
                        <IgbListItem>
                            <IgbAvatar slot="start" Src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/mastercard.svg" Shape="@AvatarShape.Circle">MC</IgbAvatar>
                            <h2 slot="title">Standard **0000</h2>
                            <span slot="subtitle">Expires on 11/26</span>
                        </IgbListItem>
                        <IgbListItem>
                            <IgbAvatar slot="start" Src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/visa.svg" Shape="@AvatarShape.Circle">VISA</IgbAvatar>
                            <h2 slot="title">Rose gold **0000</h2>
                            <span slot="subtitle">Expires on 11/24</span>
                        </IgbListItem>
                        <IgbListItem>
                            <IgbAvatar slot="start" Src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/visa.svg" Shape="@AvatarShape.Circle">VISA</IgbAvatar>
                            <h2 slot="title">Virtual card **0000</h2>
                            <span slot="subtitle">Expires on 10/22</span>
                        </IgbListItem>
                    </IgbList>
                </IgbCardContent>
            </IgbCard>
        </div>
    </IgbDockManager>
</div>

@code {

    public IgbDockManager dockManager { get; set; }
    public IgbDockManagerLayout Layout { get; set; }
    public IgbIcon RegisterIconRef{ get; set; }    

    private double MaxWidth = 1200;
    private double MinWidth = 800;

    public IgbDockManagerLayout[] layouts;
    private Timer _timer;

    protected override void OnInitialized()
    {
        IgbDockManagerLayout layout1 = this.GetLayout1();
        IgbDockManagerLayout layout2 = this.GetLayout2();
        IgbDockManagerLayout layout3 = this.GetLayout3();

        this.Layout = layout1;
        layouts = new IgbDockManagerLayout[] { layout1, layout2, layout3 };        
    }

    public async void TimerElapsed(object sender, ElapsedEventArgs e)
    {
        double dockWidth = await JSRuntime.InvokeAsync<double>("getDockManagerOffset", null);

        if (dockWidth != double.NaN)
        {
            IgbDockManagerLayout newLayout = null;

            if (dockWidth >= this.MaxWidth)
            {
                newLayout = this.layouts[0];
            }
            else if (dockWidth < this.MaxWidth && dockWidth > this.MinWidth)
            {
                newLayout = this.layouts[1];
            }
            else if (dockWidth <= this.MinWidth)
            {
                newLayout = this.layouts[2];
            }

            if (newLayout != null && this.Layout != newLayout && this.dockManager != null)
            {
                this.Layout = newLayout;
                this.dockManager.Layout = this.Layout;
            }
        }        
    }    

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if(firstRender && this.RegisterIconRef != null)
        {
            await this.RegisterIconRef.EnsureReady();

            var arrowDown = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 10l5 5 5-5H7z'/></svg>";
            var arrowUp = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 14l5-5 5 5H7z'/></svg>";

            await this.RegisterIconRef.RegisterIconFromTextAsync("arrow-down", arrowDown, "material");
            await this.RegisterIconRef.RegisterIconFromTextAsync("arrow-up", arrowUp, "material");            

            if(_timer == null)
            {
                _timer = new Timer();
                _timer.AutoReset = true;
                _timer.Elapsed += TimerElapsed;
                _timer.Interval = 500;
                _timer.Start();   
            }            
        } 
    }

    public IgbContentPane GetContentPane(string header, string contentId, string headerId, string floatingHeaderId)
    {
        var pane = new IgbContentPane()
        {
            PaneType = DockManagerPaneType.ContentPane,
            Header = header,
            ContentId = contentId,
            HeaderId = headerId,
            FloatingHeaderId = floatingHeaderId,
            IsPinned = true,
            AllowMaximize = false,
            AllowPinning = false,
            AllowClose = false
        };

        return pane;
    }

    public IgbDockManagerLayout GetLayout1()
    {
        var accountPane = this.GetContentPane("ACCOUNTS", "content1", "accountHeader", "accountFloatingHeader");
        var topMoversPane = this.GetContentPane("TODAY'S TOP MOVERS", "content2", "todayTopMovers", "todayTopMoversFloatingHeader");        
        var transactionsPane = this.GetContentPane("TRANSACTIONS", "content3", "transactionsHeader", "transactionsFloatingHeader");
        var popularStocksPane = this.GetContentPane("POPULAR STOCKS", "content4", "popularStocksHeader", "popularStocksFloatingHeader");
        var cardsPane = this.GetContentPane("PHYSICAL CARDS", "content5", "cardsHeader", "cardsFloatingHeader");        

        var splitPane1 = new IgbSplitPane()
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Horizontal
        };

        var splitPane2 = new IgbSplitPane()
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Vertical,
            Size = 300
        };

        var splitPane3 = new IgbSplitPane()
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Horizontal,
            Size = 300
        };

        //AccountPane, CardsPane
        var splitPane4 = new IgbSplitPane()
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Vertical,
            Size = 300            
        };

        //TransactionsPane
        var splitPane5 = new IgbSplitPane()
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Vertical,
            Size = 300
        };

        //Top Movers
        var splitPane6 = new IgbSplitPane()
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Horizontal,
            Size = 130
        };

        //Popular Stocks
        var splitPane7 = new IgbSplitPane()
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Vertical,
            Size = 200
        };

        splitPane4.Panes.Add(accountPane);
        splitPane4.Panes.Add(cardsPane);

        splitPane5.Panes.Add(transactionsPane);

        splitPane6.Panes.Add(topMoversPane);

        splitPane7.Panes.Add(popularStocksPane);

        splitPane3.Panes.Add(splitPane4);
        splitPane3.Panes.Add(splitPane5);

        splitPane2.Panes.Add(splitPane3);
        splitPane2.Panes.Add(splitPane6);

        splitPane1.Panes.Add(splitPane2);
        splitPane1.Panes.Add(splitPane7);

        IgbDockManagerLayout layout = new IgbDockManagerLayout();
        layout.RootPane = splitPane1;

        return layout;
    }

    public IgbDockManagerLayout GetLayout2()
    {
        var accountPane = this.GetContentPane("ACCOUNTS", "content1", "accountHeader", "accountFloatingHeader");
        var topMoversPane = this.GetContentPane("TODAY'S TOP MOVERS", "content2", "todayTopMovers", "todayTopMoversFloatingHeader");        
        var transactionsPane = this.GetContentPane("TRANSACTIONS", "content3", "transactionsHeader", "transactionsFloatingHeader");
        var popularStocksPane = this.GetContentPane("POPULAR STOCKS", "content4", "popularStocksHeader", "popularStocksFloatingHeader");
        var cardsPane = this.GetContentPane("PHYSICAL CARDS", "content5", "cardsHeader", "cardsFloatingHeader");        


        IgbSplitPane splitPane1 = new IgbSplitPane()
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Horizontal
        };

        IgbSplitPane splitPane2 = new IgbSplitPane()
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Vertical,
            Size = 300
        };

        IgbSplitPane splitPane3 = new IgbSplitPane()
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Horizontal,
            Size = 300
        };

        //Transactions Pane, TGP1
        IgbSplitPane splitPane4 = new IgbSplitPane()
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Vertical,
            Size = 300
        };

        //Popular Stocks Pane
        IgbSplitPane splitPane5 = new IgbSplitPane()
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Vertical,
            Size = 300
        };

        //Top Movers
        IgbSplitPane splitPane6 = new IgbSplitPane()
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Horizontal,
            Size = 130
        };

        //AccountPane, CardsPane
        IgbTabGroupPane tabGroupPane1 = new IgbTabGroupPane()
        {
                PaneType = DockManagerPaneType.TabGroupPane,
                Size = 100
        };

        tabGroupPane1.Panes.Add(accountPane);
        tabGroupPane1.Panes.Add(cardsPane);

        splitPane4.Panes.Add(tabGroupPane1);
        splitPane4.Panes.Add(transactionsPane);

        splitPane5.Panes.Add(popularStocksPane);

        splitPane6.Panes.Add(topMoversPane);

        splitPane3.Panes.Add(splitPane4);
        splitPane3.Panes.Add(splitPane5);

        splitPane2.Panes.Add(splitPane3);
        splitPane2.Panes.Add(splitPane6);

        splitPane1.Panes.Add(splitPane2);

        IgbDockManagerLayout layout = new IgbDockManagerLayout();
        layout.RootPane = splitPane1;

        return layout;
    }

    public IgbDockManagerLayout GetLayout3()
    {
        var accountPane = this.GetContentPane("ACCOUNTS", "content1", "accountHeader", "accountFloatingHeader");
        var topMoversPane = this.GetContentPane("TODAY'S TOP MOVERS", "content2", "todayTopMovers", "todayTopMoversFloatingHeader");
        var transactionsPane = this.GetContentPane("TRANSACTIONS", "content3", "transactionsHeader", "transactionsFloatingHeader");
        var popularStocksPane = this.GetContentPane("POPULAR STOCKS", "content4", "popularStocksHeader", "popularStocksFloatingHeader");
        var cardsPane = this.GetContentPane("PHYSICAL CARDS", "content5", "cardsHeader", "cardsFloatingHeader");

        IgbSplitPane splitPane1 = new IgbSplitPane()
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Vertical
        };

        IgbTabGroupPane tabGroupPane1 = new IgbTabGroupPane()
        {
            PaneType = DockManagerPaneType.TabGroupPane,
            Size = 200
        };

        IgbTabGroupPane tabGroupPane2 = new IgbTabGroupPane()
        {
            PaneType = DockManagerPaneType.TabGroupPane,
            Size = 300
        };

        tabGroupPane1.Panes.Add(accountPane);
        tabGroupPane1.Panes.Add(cardsPane);
        tabGroupPane1.Panes.Add(transactionsPane);

        tabGroupPane2.Panes.Add(popularStocksPane);
        tabGroupPane2.Panes.Add(topMoversPane);

        splitPane1.Panes.Add(tabGroupPane1);
        splitPane1.Panes.Add(tabGroupPane2);

        IgbDockManagerLayout layout = new IgbDockManagerLayout();
        layout.RootPane = splitPane1;

        return layout;
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

## API References

- [`IgbDockManager`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDockManager.html)
- [`IgbDocumentHost`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDocumentHost.html)
- [`IgbDockManagerLayout`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDockManagerLayout.html)
- [`IgbContentPane`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbContentPane.html)
- [`IgbSplitPane`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSplitPane.html)
- [`IgbTabGroupPane`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTabGroupPane.html)
