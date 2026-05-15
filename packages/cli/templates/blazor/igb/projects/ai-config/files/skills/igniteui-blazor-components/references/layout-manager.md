# Layout Manager Components - Dock Manager & Tile Manager

> **Part of the [`igniteui-blazor-components`](../SKILL.md) skill hub.**
> For project setup and module registration - see [`setup.md`](./setup.md).

## Contents

- [Dock Manager](#dock-manager)
  - [Basic Setup](#basic-setup)
  - [Pane Types](#pane-types)
  - [Layout Serialization](#layout-serialization)
  - [Events](#events)
- [Tile Manager](#tile-manager)
- [Key Rules](#key-rules)

---

## Overview
This reference gives high-level guidance on when to use each layout manager component, their key features, and common API members. For detailed documentation, call `get_doc` from `igniteui-cli`; use `search_api` and `get_api_reference` for Blazor API details.

## Dock Manager

> **Docs:** [Dock Manager](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/layouts/dock-manager)

Dock Manager provides an IDE-like dockable pane layout. Users can drag panes to dock, float, pin/unpin, and close them at runtime.

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbDockManagerModule));
```

### Basic Setup

Dock Manager uses a C# layout object graph to define pane structure. Pane content is projected via named slots.

```razor
<IgbDockManager @ref="DockRef" Layout="DockLayout" style="height: 600px;">
    <!-- Content slots - the slot name matches IgbContentPane.ContentId -->
    <div slot="panel1">Panel 1 Content</div>
    <div slot="panel2">Panel 2 Content</div>
    <div slot="panel3">Panel 3 Content</div>
</IgbDockManager>

@code {
    IgbDockManager DockRef { get; set; }

    IgbDockManagerLayout DockLayout { get; set; } = new IgbDockManagerLayout
    {
        RootPane = new IgbSplitPane
        {
            PaneType = DockManagerPaneType.SplitPane,
            Orientation = SplitPaneOrientation.Horizontal,
            Panes = new()
            {
                new IgbTabGroupPane
                {
                    PaneType = DockManagerPaneType.TabGroupPane,
                    Panes = new List<IgbContentPane>
                    {
                        new IgbContentPane
                        {
                            PaneType = DockManagerPaneType.ContentPane,
                            ContentId = "panel1",
                            Header = "Panel 1"
                        },
                        new IgbContentPane
                        {
                            PaneType = DockManagerPaneType.ContentPane,
                            ContentId = "panel2",
                            Header = "Panel 2"
                        }
                    }
                },
                new IgbContentPane
                {
                    PaneType = DockManagerPaneType.ContentPane,
                    ContentId = "panel3",
                    Header = "Panel 3",
                    Size = 250
                }
            }
        }
    };
}
```

### Pane Types

| Class | Description |
|---|---|
| `IgbSplitPane` | Container that splits horizontally or vertically into child panes |
| `IgbTabGroupPane` | Container that groups content panes into tabs |
| `IgbContentPane` | Leaf pane with actual content (maps to a named slot) |

Key properties on `IgbContentPane`:

| Property | Type | Description |
|---|---|---|
| `ContentId` | `string` | Must match the `slot` name on the projected content element |
| `Header` | `string` | Pane tab header title |
| `Size` | `double` | Initial size (pixels or percentage depending on parent) |
| `AllowClose` | `bool` | Shows/hides the close button (default: `true`) |
| `AllowPinning` | `bool` | Allows pin/unpin (default: `true`) |
| `AllowMaximize` | `bool` | Allows maximize (default: `true`) |
| `AllowFloating` | `bool` | Allows tearing off into a floating window (default: `true`) |
| `IsPinned` | `bool` | Set to `false` to start as an unpinned (collapsed to edge) pane |
| `Floating` | `bool` | Starts as a floating window |
| `FloatingLocation` | `IgbDockManagerPoint` | Initial position of a floating pane |
| `FloatingWidth` | `double` | Initial width of a floating pane |
| `FloatingHeight` | `double` | Initial height of a floating pane |

Key properties on `IgbSplitPane`:

| Property | Type | Description |
|---|---|---|
| `Orientation` | `SplitPaneOrientation` | `Horizontal` or `Vertical` |
| `Panes` | pane collection | Child panes. Use the exact collection type and initialization style shown in the current MCP docs. |
| `Size` | `double` | Size in parent context |

### Layout Serialization

Persisting a Dock Manager layout is version-sensitive. The current `dock-manager` MCP overview documents the layout object graph, pane content slots, styling, and keyboard behavior; it does not show a verified Blazor serialization sample in this reference. Before generating persistence code, inspect the current installed API and use only the documented event signatures and methods for that version.

> **AGENT INSTRUCTION - Layout serialization:** The serialized JSON contains only pane structure and positions. It does **not** serialize the slot content. The slot content markup must remain static in the Razor template; only pane arrangement changes at runtime.

### Events

| Event | Description |
|---|---|
| `LayoutChange` | Fires when the layout is modified by user interaction (drag, close, resize) |
| `PaneClose` | Fires when a pane is closed; `e.Detail.Panes` contains the closed pane(s) |
| `ActivePaneChange` | Fires when the active (focused) pane changes |
| `Splitter Resize` | Fires while a splitter is being dragged |

---

## Tile Manager

> **Docs:** [Tile Manager](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/layouts/tile-manager)

Tile Manager provides a resizable, draggable tile/widget dashboard layout.

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbTileManagerModule));
```

```razor
<IgbTileManager ColumnCount="4" Gap="8px" ResizeMode="@TileManagerResizeMode.Always" DragMode="@TileManagerDragMode.TileHeader">
    <IgbTile ColSpan="2" RowSpan="1">
        <span slot="title">Revenue Chart</span>
        <!-- tile content -->
    </IgbTile>
    <IgbTile ColSpan="1" RowSpan="2">
        <span slot="title">KPIs</span>
        <!-- tile content -->
    </IgbTile>
    <IgbTile ColSpan="1">
        <span slot="title">Recent Orders</span>
        <!-- tile content -->
    </IgbTile>
</IgbTileManager>
```

Key attributes on `IgbTileManager`: `ColumnCount`, `Gap` (CSS length string such as `"8px"`), `MinColumnWidth`, `MinRowHeight`, `ResizeMode` (`TileManagerResizeMode.*`), `DragMode` (`TileManagerDragMode.*`).

Key attributes on `IgbTile`: `ColSpan`, `RowSpan`, `ColStart`, `RowStart`, `DisableFullscreen`, `DisableMaximize`, `DisableResize`.

Slots on `IgbTile`: `title` (header), `actions` (header action buttons), `fullscreen-action`, `maximize-action`, `side-adorner`, `corner-adorner`, `bottom-adorner`. Default slot = tile body content.

Methods on `IgbTileManager`: `SaveLayout()` and `LoadLayout(string)` persist tile order, size, and position. Tile content is not serialized.

---

## Key Rules

1. **`IgbContentPane.ContentId` must exactly match the `slot` attribute of the projected HTML element.** A mismatch causes the pane to render empty.
2. **Dock Manager must have an explicit height** (via CSS or inline style). Without a height it renders as 0px.
3. **Layout serialization only persists structure, not content.** Slot content is always defined in Razor markup.
4. **`IgbTileManager` uses CSS Grid internally.** Set `ColumnCount` to control the number of columns.
5. **Do not invent Dock Manager serialization APIs.** Use `dock-manager` and the installed API before writing persistence code.
6. **Tile Manager serialization uses `SaveLayout()` / `LoadLayout(string)`.** The saved payload stores tile layout properties, not tile content.
