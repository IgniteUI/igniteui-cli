---
title: "Blazor Splitter Component | Layout Controls | Infragistics"
description: "Use the Ignite UI for Blazor Splitter component to create two resizable panes with horizontal or vertical layouts, collapse and expand behavior, keyboard support, and nested split views."
keywords: "splitter, split panes, resizable panes, web components splitter, Blazor splitter, Ignite UI for Blazor"
license: MIT
mentionedTypes: ["Splitter", "SplitterResizeEventArgs"]
llms:
  description: "The Ignite UI for Blazor Splitter provides a resizable split-pane layout that divides content into two areas: start and end."
_tocName: Splitter
---
# Blazor Splitter Overview

The Ignite UI for Blazor Splitter provides a resizable split-pane layout that divides content into two areas: `start` and `end`. Users can drag the splitter bar, use keyboard shortcuts, or collapse and expand panes with built-in controls. You can also nest splitters to build complex dashboard-style layouts.

## Blazor Splitter Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="controls">
        <IgbSwitch Change="OnOrientationChange">Make Splitter Vertical</IgbSwitch>
        <IgbSwitch Change="OnDisableCollapseChange">Disable Collapse</IgbSwitch>
        <IgbSwitch Change="OnDisableResizeChange">Disable Resize</IgbSwitch>
        <IgbSwitch Change="OnHideDragHandleChange">Hide Drag Handle</IgbSwitch>
        <IgbSwitch Change="OnHideCollapseButtonsChange">Hide Collapse Buttons</IgbSwitch>
    </div>
    <IgbSplitter Orientation="@Orientation" DisableCollapse="@DisableCollapse" DisableResize="@DisableResize" HideDragHandle="@HideDragHandle" HideCollapseButtons="@HideCollapseButtons" style="height: calc(100vh - 60px); width: 100%;">
        <div slot="start">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lacus eget turpis congue fermentum. Aliquam sollicitudin massa vel ullamcorper bibendum. Donec sit amet augue in justo fermentum facilisis vel quis quam. Vivamus eget iaculis nisi, vitae dignissim leo. Donec eget consectetur lacus. In viverra vehicula libero, quis dictum odio varius in. Phasellus aliquam elit et lectus ornare placerat. Aliquam vitae sapien facilisis, auctor enim quis, consectetur dui. Cras elementum velit eros, ut efficitur ante pellentesque in. Proin vulputate lacus dui, vitae imperdiet dui pharetra ac. Nunc sagittis, sapien et posuere varius, mauris justo tincidunt odio, in interdum lorem libero sed enim. Nulla placerat scelerisque felis vitae accumsan.
            </p>
        </div>
        <div slot="end">
            <p>
                Duis auctor, diam id vehicula consequat, lacus tellus molestie magna, sed varius nisi quam eget nisl. Donec dignissim mi et elementum laoreet. Nam dignissim quis justo eu fermentum. Proin vestibulum, neque quis elementum tincidunt, nibh mi gravida purus, eget volutpat ipsum magna in orci. Donec id mauris vitae lectus molestie blandit. Praesent non quam interdum, efficitur lacus nec, gravida mauris. Ut ac ante maximus, ultrices turpis a, aliquam magna. Praesent blandit ante ut nulla malesuada lobortis. Praesent a lobortis justo. Morbi congue, dui sed ornare faucibus, turpis felis vulputate arcu, lobortis posuere sem leo eget risus. Duis risus augue, dignissim ac tincidunt a, ullamcorper rutrum nisl. Ut ut ipsum vel purus viverra dapibus.
            </p>
        </div>
    </IgbSplitter>
   
</div>

@code {
    public SplitterOrientation Orientation { get; set; } = SplitterOrientation.Horizontal;
    public bool DisableCollapse { get; set; }
    public bool DisableResize { get; set; }
    public bool HideDragHandle { get; set; }
    public bool HideCollapseButtons { get; set; }
    
    public void OnOrientationChange(IgbCheckboxChangeEventArgs e)
    {
        this.Orientation = e.Detail.Checked ? SplitterOrientation.Vertical : SplitterOrientation.Horizontal;
    }

    public void OnDisableCollapseChange(IgbCheckboxChangeEventArgs e)
    {
        this.DisableCollapse = e.Detail.Checked;
    }

    public void OnDisableResizeChange(IgbCheckboxChangeEventArgs e)
    {
        this.DisableResize = e.Detail.Checked;
    }

    public void OnHideDragHandleChange(IgbCheckboxChangeEventArgs e)
    {
        this.HideDragHandle = e.Detail.Checked;
    }

    public void OnHideCollapseButtonsChange(IgbCheckboxChangeEventArgs e)
    {
        this.HideCollapseButtons = e.Detail.Checked;
    }
}
```

## Getting Started with Blazor Splitter

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbSplitterModule)
);
```

You will also need to link an additional CSS file to apply the styling to the `IgbSplitter` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

## Using Blazor Splitter

Use the `start` and `end` slots to place pane content:

```razor
<IgbSplitter>
  <div slot="start">Start pane content</div>
  <div slot="end">End pane content</div>
</IgbSplitter>
```

We recommend using a `<div>` or other semantic elements such as `<section>` or `<article>` for the `start` and `end` slots of the Splitter component.

### Orientation

Set the `Orientation` property to control pane direction:

- `horizontal` (default): start and end panes are rendered left and right.
- `vertical`: start and end panes are rendered top and bottom.

```razor
<IgbSplitter Orientation="SplitterOrientation.Vertical">
  <div slot="start">Top pane</div>
  <div slot="end">Bottom pane</div>
</IgbSplitter>
```

### Pane Size and Constraints

Use size properties to set initial and constrained pane sizes:

- `StartSize`, `EndSize`
- `StartMinSize`, `EndMinSize`
- `StartMaxSize`, `EndMaxSize`

Values accept CSS length values such as `px` and `%`.

```razor
<IgbSplitter
  StartSize="35%"
  EndSize="65%"
  StartMinSize="200px"
  EndMinSize="180px"
>
  <div slot="start">Navigation</div>
  <div slot="end">Main content</div>
</IgbSplitter>
```

### Collapsing and Resizing

Use these properties to control interactions:

- `DisableResize`: disables pane resizing.
- `DisableCollapse`: disables pane collapsing.
- `HideDragHandle`: hides the drag handle.
- `HideCollapseButtons`: hides collapse and expand buttons.

You can also collapse or expand panes programmatically:

```razor
<IgbSplitter @ref="SplitterRef">
  <div slot="start">Start pane</div>
  <div slot="end">End pane</div>
</IgbSplitter>

@code {
    private IgbSplitter SplitterRef;

    public async Task ToggleStartPane()
    {
      this.SplitterRef.Toggle(PanePosition.Start);
    }
}
```

### Nested Splitters

Splitters can be nested to create multi-region layouts.

```razor
@using IgniteUI.Blazor.Controls


<div id="root">
    <IgbSplitter style="height: 100vh; width: 100%;">
        <IgbSplitter slot="start" Orientation="SplitterOrientation.Vertical" StartSize="50%">
            <div slot="start">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lacus eget turpis congue fermentum. Aliquam sollicitudin massa vel ullamcorper bibendum. Donec sit amet augue in justo fermentum facilisis vel quis quam. Vivamus eget iaculis nisi, vitae dignissim leo. Donec eget consectetur lacus. In viverra vehicula libero, quis dictum odio varius in. Phasellus aliquam elit et lectus ornare placerat. Aliquam vitae sapien facilisis, auctor enim quis, consectetur dui. Cras elementum velit eros, ut efficitur ante pellentesque in. Proin vulputate lacus dui, vitae imperdiet dui pharetra ac. Nunc sagittis, sapien et posuere varius, mauris justo tincidunt odio, in interdum lorem libero sed enim. Nulla placerat scelerisque felis vitae accumsan.
                </p>
            </div>
            <div slot="end">
                <p>
                    Suspendisse potenti. Mauris vehicula neque ullamcorper tortor pulvinar gravida. Integer porttitor orci ex, ac vehicula nisi ultricies vel. Phasellus feugiat, urna eget congue sollicitudin, augue mi vulputate velit, in porttitor lacus orci sit amet eros. Donec mollis tempor mi. Ut sed justo consectetur, laoreet orci id, vestibulum velit. Aliquam ultricies arcu nec placerat eleifend. Integer ornare auctor mauris, vitae placerat est hendrerit ut.
                </p>
            </div>
        </IgbSplitter>
        <IgbSplitter slot="end" Orientation="SplitterOrientation.Vertical">
            <div slot="start">
                <p>
                    Duis auctor, diam id vehicula consequat, lacus tellus molestie magna, sed varius nisi quam eget nisl. Donec dignissim mi et elementum laoreet. Nam dignissim quis justo eu fermentum. Proin vestibulum, neque quis elementum tincidunt, nibh mi gravida purus, eget volutpat ipsum magna in orci. Donec id mauris vitae lectus molestie blandit. Praesent non quam interdum, efficitur lacus nec, gravida mauris. Ut ac ante maximus, ultrices turpis a, aliquam magna. Praesent blandit ante ut nulla malesuada lobortis. Praesent a lobortis justo. Morbi congue, dui sed ornare faucibus, turpis felis vulputate arcu, lobortis posuere sem leo eget risus. Duis risus augue, dignissim ac tincidunt a, ullamcorper rutrum nisl. Ut ut ipsum vel purus viverra dapibus.
                </p>
            </div>
            <div slot="end">
                <p>
                    Suspendisse potenti. Proin faucibus venenatis purus in pellentesque. Nunc eget justo pretium massa pellentesque sodales. Phasellus orci ligula, condimentum et faucibus id, faucibus sit amet mauris. Praesent consequat cursus mauris, eget tempus lorem. Quisque vel leo nec massa aliquam pellentesque sit amet vel erat. Phasellus at mauris laoreet, egestas magna eget, dignissim nisl. Etiam non nibh nec orci elementum facilisis a vel tortor. Praesent sagittis mattis risus non tincidunt.
                </p>
            </div>
        </IgbSplitter>
    </IgbSplitter>
</div>
```

## Events

The Splitter emits the following events during resize operations:

- `ResizeStart`: fired once when resizing starts.
- `Resizing`: fired continuously while resizing.
- `ResizeEnd`: fired once when resizing ends.

The event detail includes current `StartPanelSize`, `EndPanelSize`, and `Delta` for ongoing and end events.

```razor
<IgbSplitter ResizeEnd="OnResizeEnd">
  <div slot="start">Start pane</div>
  <div slot="end">End pane</div>
</IgbSplitter>

@code {
    public void OnResizeEnd(IgbSplitterResizeEventArgs e)
    {
        Console.WriteLine($"StartPanelSize: {e.Detail.StartPanelSize}, EndPanelSize: {e.Detail.EndPanelSize}");
    }
}
```

## Keyboard Navigation

When the splitter bar is focused:

| Keys | Description |
| ---- | ----------- |
| <kbd>Arrow Left</kbd> / <kbd>Arrow Right</kbd> | Resize panes in horizontal orientation |
| <kbd>Arrow Up</kbd> / <kbd>Arrow Down</kbd> | Resize panes in vertical orientation |
| <kbd>Home</kbd> | Snap start pane to its minimum size |
| <kbd>End</kbd> | Snap start pane to its maximum size |
| <kbd>Ctrl</kbd> + <kbd>Arrow Left</kbd> / <kbd>Arrow Up</kbd> | Collapse or expand the start pane |
| <kbd>Ctrl</kbd> + <kbd>Arrow Right</kbd> / <kbd>Arrow Down</kbd> | Collapse or expand the end pane |

## Styling

The `IgbSplitter` component exposes CSS parts for styling:

| Name | Description |
| ---- | ----------- |
| `splitter-bar` | The draggable separator between panes |
| `drag-handle` | The drag handle element in the splitter bar |
| `start-pane` | The start pane container |
| `end-pane` | The end pane container |
| `start-collapse-btn` | Button that collapses the start pane |
| `end-collapse-btn` | Button that collapses the end pane |
| `start-expand-btn` | Button that expands the start pane |
| `end-expand-btn` | Button that expands the end pane |

It also supports theme CSS variables, including:

- `--bar-color`
- `--handle-color`
- `--expander-color`
- `--bar-color-active`
- `--handle-color-active`
- `--expander-color-active`
- `--focus-color`
- `--size`

```css
igc-splitter {
  --bar-color: #011627;
  --handle-color: #ecaa53;
  --expander-color: #ecaa53;
  --bar-color-active: #011627;
  --handle-color-active: #ecaa53;
  --expander-color-active: #ecaa53;
  --focus-color: #ecaa53;
}
```

```razor
@using IgniteUI.Blazor.Controls


<div id="root">
    <IgbSplitter>
        <div slot="start">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lacus eget turpis congue fermentum. Aliquam sollicitudin massa vel ullamcorper bibendum. Donec sit amet augue in justo fermentum facilisis vel quis quam. Vivamus eget iaculis nisi, vitae dignissim leo. Donec eget consectetur lacus. In viverra vehicula libero, quis dictum odio varius in. Phasellus aliquam elit et lectus ornare placerat. Aliquam vitae sapien facilisis, auctor enim quis, consectetur dui. Cras elementum velit eros, ut efficitur ante pellentesque in. Proin vulputate lacus dui, vitae imperdiet dui pharetra ac. Nunc sagittis, sapien et posuere varius, mauris justo tincidunt odio, in interdum lorem libero sed enim. Nulla placerat scelerisque felis vitae accumsan. Curabitur id tortor laoreet, luctus justo sit amet, viverra mi. Nunc laoreet auctor metus eget suscipit. Vestibulum vestibulum imperdiet pharetra. Sed ac dignissim dui. In vitae suscipit nunc. Praesent vel felis nulla. Nullam non justo elit. Ut quis eleifend libero. Morbi ut maximus dui, non tristique risus.
            </p>
        </div>
        <div slot="end">
            <p>
                Duis auctor, diam id vehicula consequat, lacus tellus molestie magna, sed varius nisi quam eget nisl. Donec dignissim mi et elementum laoreet. Nam dignissim quis justo eu fermentum. Proin vestibulum, neque quis elementum tincidunt, nibh mi gravida purus, eget volutpat ipsum magna in orci. Donec id mauris vitae lectus molestie blandit. Praesent non quam interdum, efficitur lacus nec, gravida mauris. Ut ac ante maximus, ultrices turpis a, aliquam magna. Praesent blandit ante ut nulla malesuada lobortis. Praesent a lobortis justo. Morbi congue, dui sed ornare faucibus, turpis felis vulputate arcu, lobortis posuere sem leo eget risus. Duis risus augue, dignissim ac tincidunt a, ullamcorper rutrum nisl. Ut ut ipsum vel purus viverra dapibus. Maecenas efficitur nibh elementum, pellentesque sapien sit amet, fermentum sem. Pellentesque nisl mi, porta eget viverra a, tincidunt ac ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </p>
        </div>
    </IgbSplitter>
</div>
```

## API References
API references: `IgbSplitter`
- [`Styling & Themes`](../themes/overview.md)
## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
