# Layout & Navigation Components

> **Part of the [`igniteui-blazor-components`](../SKILL.md) skill hub.**
> For project setup and module registration - see [`setup.md`](./setup.md).

## Contents

- [Tabs](#tabs)
- [Stepper](#stepper)
- [Accordion & Expansion Panel](#accordion--expansion-panel)
- [Navbar](#navbar)
- [Navigation Drawer](#navigation-drawer)
- [Tree](#tree)
- [Key Rules](#key-rules)

---

## Overview
This reference gives high-level guidance on layout and navigation components, their key features, and common API members. For detailed documentation, call `get_doc` from `igniteui-cli`; use `search_api` and `get_api_reference` for Blazor API details.

## Tabs

> **Docs:** [Tabs](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/layouts/tabs)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbTabsModule));
```

For icon tabs, use the `label` slot inside `IgbTab`:

```razor
<IgbTab>
    <IgbIcon slot="label" IconName="home" Collection="material" />
    Home
</IgbTab>
```

Key attributes on `IgbTabs`: `Alignment` (`TabsAlignment.Start` / `End` / `Center` / `Justify`), `Activation` (`TabsActivation.Auto` / `Manual`). On `IgbTab`: `Label`, `Disabled`, `Selected`.

Events on `IgbTabs`: `Change` - fires when the selected tab changes.

CSS parts: `headers`, `headers-content`, `headers-wrapper`, `header`, `selected-indicator`, `content`.

---

## Stepper

> **Docs:** [Stepper](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/layouts/stepper)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbStepperModule));
```

```razor
<IgbStepper Linear="true" Orientation="StepperOrientation.Horizontal" @ref="StepperRef">
    <IgbStep>
        <span slot="title">Personal Info</span>
        <!-- step content -->
        <IgbInput Label="Name" />
    </IgbStep>
    <IgbStep>
        <span slot="title">Address</span>
        <!-- step content -->
    </IgbStep>
    <IgbStep>
        <span slot="title">Confirm</span>
        <!-- step content -->
    </IgbStep>
</IgbStepper>

@code {
    IgbStepper StepperRef { get; set; }

    void GoNext() => StepperRef.Next();
    void GoPrev() => StepperRef.Prev();
}
```

Key attributes on `IgbStepper`: `Linear` (prevents skipping steps), `Orientation` (`StepperOrientation.Horizontal` / `Vertical`), `StepType` (`StepperStepType.Indicator` / `Title` / `Full`), `TitlePosition` (`StepperTitlePosition.Bottom` / `Top` / `End` / `Start`), `HorizontalAnimation`, `VerticalAnimation`, `AnimationDuration`.

Key attributes on `IgbStep`: `Complete`, `Optional`, `Disabled`, `Invalid`, `Active`.

Slots on `IgbStep`: `indicator` (custom icon/number), `title`, `subtitle`.

Methods on `IgbStepper`: `Next()`, `Prev()`, `NavigateTo(index)`, `Reset()`.

Events: `ActiveStepChanging` (cancellable), `ActiveStepChanged`.

---

## Accordion & Expansion Panel

> **Docs:** [Accordion](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/layouts/accordion), [Expansion Panel](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/layouts/expansion-panel)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbAccordionModule));
// IgbExpansionPanel is included in IgbAccordionModule
```

```razor
<!-- Accordion (wraps multiple expansion panels) -->
<IgbAccordion SingleExpand="true">
    <IgbExpansionPanel>
        <span slot="title">Section 1</span>
        <span slot="subtitle">Optional subtitle</span>
        <p>Content for section 1.</p>
    </IgbExpansionPanel>
    <IgbExpansionPanel Open="true">
        <span slot="title">Section 2</span>
        <p>Content for section 2.</p>
    </IgbExpansionPanel>
</IgbAccordion>

<!-- Standalone expansion panel -->
<IgbExpansionPanel @ref="PanelRef">
    <span slot="title">Details</span>
    <p>Expanded content here.</p>
</IgbExpansionPanel>

@code {
    IgbExpansionPanel PanelRef { get; set; }
    void Toggle() => PanelRef.Toggle();
}
```

Key attributes on `IgbAccordion`: `SingleExpand` (only one panel open at a time). On `IgbExpansionPanel`: `Open`, `Disabled`.

Slots on `IgbExpansionPanel`: `title`, `subtitle`, `indicator` (custom expand icon).

Events on `IgbExpansionPanel`: `Opening` (cancellable), `Opened`, `Closing` (cancellable), `Closed`.

Methods: `Show()`, `Hide()`, `Toggle()`.

---

## Navbar

> **Docs:** [Navbar](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/menus/navbar)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbNavbarModule));
```

```razor
<IgbNavbar>
    <IgbIconButton slot="start" IconName="menu" Collection="material" @onclick="() => DrawerRef.Toggle()" />
    <h3>My Application</h3>
    <IgbIconButton slot="end" IconName="search" Collection="material" />
    <IgbIconButton slot="end" IconName="more_vert" Collection="material" />
</IgbNavbar>
```

Slots: `start` (left content, e.g., menu button), `end` (right content, e.g., action icons). The default slot is used for the title.

CSS parts: `base`, `start`, `middle`, `end`.

Required theme CSS:

```html
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

> **AGENT INSTRUCTION:** Register icons used by `IgbNavbar` and `IgbIconButton` before relying on them in samples. Call `await iconRef.EnsureReady()` before `RegisterIconAsync()` or `RegisterIconFromTextAsync()`.

---

## Navigation Drawer

> **Docs:** [Navigation Drawer](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/menus/navigation-drawer)

```csharp
builder.Services.AddIgniteUIBlazor(
    typeof(IgbNavDrawerModule),
    typeof(IgbNavDrawerItemModule),
    typeof(IgbNavDrawerHeaderItemModule)
);
```

```razor
<IgbNavDrawer @ref="DrawerRef" Open="true">
    <IgbNavDrawerHeaderItem>My App</IgbNavDrawerHeaderItem>

    <IgbNavDrawerItem @ref="HomeItem" @onclick="() => Activate(HomeItem)">
        <IgbIcon slot="icon" IconName="home" Collection="material" />
        <span slot="content">Home</span>
    </IgbNavDrawerItem>

    <IgbNavDrawerItem @ref="SearchItem" @onclick="() => Activate(SearchItem)">
        <IgbIcon slot="icon" IconName="search" Collection="material" />
        <span slot="content">Search</span>
    </IgbNavDrawerItem>
</IgbNavDrawer>

<IgbIconButton IconName="menu" Collection="material" @onclick="() => DrawerRef.Toggle()" />

@code {
    IgbNavDrawer DrawerRef { get; set; }
    IgbNavDrawerItem HomeItem { get; set; }
    IgbNavDrawerItem SearchItem { get; set; }

    List<IgbNavDrawerItem> AllItems => new() { HomeItem, SearchItem };

    void Activate(IgbNavDrawerItem item)
    {
        item.Active = true;
        foreach (var i in AllItems.Where(x => x != item))
            i.Active = false;
    }
}
```

Navbar integration:

```razor
<IgbNavbar>
    <IgbIconButton slot="start" IconName="menu" Collection="material" @onclick="() => DrawerRef.Show()" />
    <span>Home</span>
</IgbNavbar>

<IgbNavDrawer @ref="DrawerRef" Open="true" Position="NavDrawerPosition.Start">
    <IgbNavDrawerHeaderItem>Navigation</IgbNavDrawerHeaderItem>

    <IgbNavDrawerItem @ref="HomeItem" @onclick="() => Activate(HomeItem)">
        <IgbIcon slot="icon" IconName="home" Collection="material" />
        <span slot="content">Home</span>
    </IgbNavDrawerItem>

    <IgbNavDrawerItem @ref="SearchItem" @onclick="() => Activate(SearchItem)">
        <IgbIcon slot="icon" IconName="search" Collection="material" />
        <span slot="content">Search</span>
    </IgbNavDrawerItem>
</IgbNavDrawer>
```

Mini variant:

```razor
<IgbNavDrawer @ref="DrawerRef" Open="true">
    <IgbNavDrawerHeaderItem>Navigation</IgbNavDrawerHeaderItem>

    <IgbNavDrawerItem>
        <IgbIcon slot="icon" IconName="home" Collection="material" />
        <span slot="content">Home</span>
    </IgbNavDrawerItem>

    <div slot="mini">
        <IgbNavDrawerItem>
            <IgbIcon slot="icon" IconName="home" Collection="material" />
        </IgbNavDrawerItem>
    </div>
</IgbNavDrawer>
```

Key attributes on `IgbNavDrawer`: `Open`, `Position` (`NavDrawerPosition.Start` / `End` / `Top` / `Bottom`). Use the `mini` slot to provide collapsed icon-only content.

Methods: `Show()`, `Hide()`, `Toggle()`.

CSS parts: `base`, `main`, `mini`.

> **AGENT INSTRUCTION - IgbNavDrawer shadow DOM mechanics:**
>
> Regardless of `Open` state or `style` on the host, `::part(base)` is always rendered as `position: fixed; transform: translateX(-Npx)`. When the component considers itself closed it also sets `inert` on `::part(base)`. The host element itself contributes `width: 0` to the layout because the fixed part takes no space.
>
> This means:
> - `Open="true"` alone makes the panel visible but it still floats over content as an overlay.
> - `slot="mini"` content switches the component to a collapsible expand/collapse mode with an icon-only collapsed state.
> - To make the drawer occupy real space in the layout (pinned sidebar), the shadow DOM parts must be overridden in **global CSS** (not `.razor.css`): give the host an explicit width, override `::part(base)` to `position: relative; transform: none`, hide `::part(overlay)`, and remove the `inert` attribute via JS in `OnAfterRenderAsync`. Do **not** call `DrawerRef.Show()` in `OnAfterRenderAsync` - it throws "component not ready"; CSS handles visibility instead.

> **AGENT INSTRUCTION:** Icons used inside `IgbNavDrawerItem` must be registered via `IgbIcon.RegisterIconFromTextAsync()` or `RegisterIconAsync()` in `OnAfterRenderAsync(bool firstRender)` before they display. Call `await iconRef.EnsureReady()` first.

---

## Tree

> **Docs:** [Tree](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/grids/tree)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbTreeModule));
```

```razor
<IgbTree Selection="TreeSelection.Multiple">
    <IgbTreeItem Expanded="true" Label="Documents">
        <IgbTreeItem Label="Report.docx" />
        <IgbTreeItem Label="Notes.txt" />
    </IgbTreeItem>
    <IgbTreeItem Label="Downloads">
        <IgbTreeItem Label="archive.zip" />
    </IgbTreeItem>
</IgbTree>
```

Key attributes on `IgbTree`: `Selection` (`TreeSelection.None` / `Multiple` / `Cascade`). On `IgbTreeItem`: `Label`, `Expanded`, `Selected`, `Disabled`, `Active`.

Slots on `IgbTreeItem`: `label` (custom label content), `indicator` (expand/collapse icon override). Nest `IgbTreeItem` children directly inside a parent `IgbTreeItem`.

Events on `IgbTree`: `NodeSelectionChanging` (cancellable), `NodeSelectionChanged`, `NodeExpanded`, `NodeCollapsed`.

---

## Key Rules

1. **Stepper with `Linear="true"` prevents users from skipping steps.** Do not set `Linear` if free navigation is intended.
2. **Activate/deactivate `IgbNavDrawerItem` programmatically** by setting `item.Active` - there is no automatic selection tracking.
3. **Register icons via `RegisterIconFromTextAsync` in `OnAfterRenderAsync(bool firstRender)`**, and always call `await component.EnsureReady()` first.
4. **`IgbAccordion` with `SingleExpand="true"` closes other panels when one is opened.** This is the most common use case for accordions.
