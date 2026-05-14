# Data Display Components

> **Part of the [`igniteui-blazor-components`](../SKILL.md) skill hub.**
> For project setup and module registration - see [`setup.md`](./setup.md).

## Contents

- [Button & Button Group](#button--button-group)
- [Icon & Icon Button](#icon--icon-button)
- [Card](#card)
- [Carousel](#carousel)
- [List](#list)
- [Avatar](#avatar)
- [Badge](#badge)
- [Chip](#chip)
- [Circular Progress](#circular-progress)
- [Linear Progress](#linear-progress)
- [Dropdown](#dropdown)
- [Tooltip](#tooltip)
- [Ripple](#ripple)
- [Key Rules](#key-rules)

---

## Overview
This reference gives high-level guidance on data display and action components, their key features, and common API members. For detailed documentation, call `get_doc` from `igniteui-cli`; use `search_api` and `get_api_reference` for Blazor API details.

## Button & Button Group

> **Docs:** [Button](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/inputs/button), [Button Group](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/inputs/button-group)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbButtonModule), typeof(IgbButtonGroupModule));
```

```razor
<!-- Button variants -->
<IgbButton Variant="@ButtonVariant.Contained" @onclick="Save">Save</IgbButton>
<IgbButton Variant="@ButtonVariant.Outlined" @onclick="Cancel">Cancel</IgbButton>
<IgbButton Variant="@ButtonVariant.Flat">Flat</IgbButton>

<!-- Button Group (toggle buttons) -->
<IgbButtonGroup Selection="ButtonGroupSelection.Single">
    <IgbToggleButton Value="left">Left</IgbToggleButton>
    <IgbToggleButton Value="center" Selected="true">Center</IgbToggleButton>
    <IgbToggleButton Value="right">Right</IgbToggleButton>
</IgbButtonGroup>
```

Key attributes on `IgbButton`: `Variant` (`ButtonVariant.Contained` / `Outlined` / `Flat` / `Fab`), `Disabled`, `DisplayType` (`ButtonBaseType.Button` / `Submit` / `Reset`), `Href` (renders as `<a>`).

Key attributes on `IgbButtonGroup`: `Selection` (`ButtonGroupSelection.Single` / `SingleRequired` / `Multiple`), `Alignment` (`ContentOrientation.Horizontal` / `ContentOrientation.Vertical`).

---

## Icon & Icon Button

> **Docs:** [Icon](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/layouts/icon), [Icon Button](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/inputs/icon-button)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbIconModule), typeof(IgbIconButtonModule));
```

```razor
<IgbIcon @ref="MyIcon" IconName="home" Collection="material" />
<IgbIconButton @ref="MenuBtn" IconName="menu" Collection="material" Variant="@IconButtonVariant.Flat" />

@code {
    IgbIcon MyIcon { get; set; }
    IgbIconButton MenuBtn { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && MyIcon != null)
        {
            await MyIcon.EnsureReady();
            string svg = "<svg>...</svg>";
            await MyIcon.RegisterIconFromTextAsync("home", svg, "material");
        }
    }
}
```

Key attributes: `IconName`, `Collection`, `Mirrored` (for RTL). Size is controlled via CSS `--ig-size: var(--ig-size-small | --ig-size-medium | --ig-size-large)`.

> **AGENT INSTRUCTION - Icon Registration:** Icons are registered by name+collection. Registration must happen in `OnAfterRenderAsync(bool firstRender)` after calling `EnsureReady()`. Re-use the same collection name across the app for consistency.

---

## Card

> **Docs:** [Card](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/layouts/card)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbCardModule));
```

```razor
<IgbCard style="width: 350px;">
    <IgbCardMedia>
        <img src="photo.jpg" alt="Card image" />
    </IgbCardMedia>
    <IgbCardHeader>
        <h3 slot="title">Jane Doe</h3>
        <span slot="subtitle">Photographer</span>
    </IgbCardHeader>
    <IgbCardContent>
        <p>A short description of Jane Doe.</p>
    </IgbCardContent>
    <IgbCardActions>
        <IgbButton slot="start" Variant="@ButtonVariant.Flat">Like</IgbButton>
        <IgbButton slot="start" Variant="@ButtonVariant.Flat">Share</IgbButton>
    </IgbCardActions>
</IgbCard>
```

Sub-components: `IgbCardMedia`, `IgbCardHeader`, `IgbCardContent`, `IgbCardActions`. Slots on `IgbCardHeader`: `thumbnail`, `title`, `subtitle`.

---

## Carousel

> **Docs:** [Carousel](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/layouts/carousel)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbCarouselModule));
```

```razor
<IgbCarousel>
    <IgbCarouselSlide Active="true">
        <img src="slide-1.jpg" alt="Slide 1" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="slide-2.jpg" alt="Slide 2" />
    </IgbCarouselSlide>
</IgbCarousel>
```

Use Carousel for image/content slides, banners, onboarding panels, or media galleries. Check the `carousel` MCP doc for current slide APIs, navigation controls, indicators, autoplay, animation, and CSS parts.

---

## List

> **Docs:** [List](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/grids/list)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbListModule), typeof(IgbListItemModule), typeof(IgbListHeaderModule));
```

```razor
<IgbList>
    <IgbListHeader>Contacts</IgbListHeader>
    @foreach (var contact in Contacts)
    {
        <IgbListItem>
            <IgbAvatar slot="start" Shape="@AvatarShape.Circle">@contact.Initials</IgbAvatar>
            <span slot="title">@contact.Name</span>
            <span slot="subtitle">@contact.Phone</span>
            <IgbIconButton slot="end" IconName="delete" Collection="material" />
        </IgbListItem>
    }
</IgbList>
```

Slots on `IgbListItem`: `start`, `end`, `title`, `subtitle`.

---

## Avatar

> **Docs:** [Avatar](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/layouts/avatar)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbAvatarModule));
```

```razor
<!-- Image avatar -->
<IgbAvatar Src="avatar.png" Alt="User photo" Shape="@AvatarShape.Circle" />

<!-- Initials avatar -->
<IgbAvatar Shape="@AvatarShape.Circle">AB</IgbAvatar>

<!-- Icon avatar -->
<IgbAvatar Shape="@AvatarShape.Square">
    <IgbIcon IconName="person" Collection="material" />
</IgbAvatar>
```

Key attributes: `Src`, `Alt`, `Initials`, `Shape` (`AvatarShape.Circle` / `Square` / `Rounded`). Size is controlled via CSS `--ig-size: var(--ig-size-small | --ig-size-medium | --ig-size-large)`.

---

## Badge

> **Docs:** [Badge](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/inputs/badge)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbBadgeModule));
```

```razor
<IgbBadge Variant="@BadgeVariant.Primary">5</IgbBadge>
<IgbBadge Variant="@BadgeVariant.Danger" Shape="@BadgeShape.Dot" />
```

Key attributes: `Variant` (`BadgeVariant.Primary` / `Info` / `Success` / `Warning` / `Danger`), `Shape` (`BadgeShape.Rounded` / `Square` / `Dot`), `Outlined`.

---

## Chip

> **Docs:** [Chip](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/inputs/chip)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbChipModule));
```

```razor
<IgbChip Selectable="true" Removable="true" Remove="OnChipRemoved">
    <IgbIcon slot="start" IconName="star" Collection="material" />
    Blazor
</IgbChip>

@code {
    void OnChipRemoved(IgbComponentBoolValueChangedEventArgs e) { /* handle removal */ }
}
```

Key attributes: `Selectable`, `Selected`, `Removable`, `Disabled`, `Variant` (`ChipVariant.Primary` / `Info` / `Success` / `Warning` / `Danger`).

Slots: `start`, `end` (prefix/suffix icons).

Events: `Select`, `Remove`.

---

## Circular Progress

> **Docs:** [Circular Progress](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/inputs/circular-progress)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbCircularProgressModule));
```

```razor
<!-- Determinate -->
<IgbCircularProgress Value="65" Max="100">
    <span slot="default">65%</span>
</IgbCircularProgress>

<!-- Indeterminate (spinner) -->
<IgbCircularProgress Indeterminate="true" />
```

Key attributes: `Value`, `Max`, `Indeterminate`, `AnimationDuration`, `Variant` (`ProgressBaseVariant.Primary` / `Info` / `Success` / `Warning` / `Danger`).

---

## Linear Progress

> **Docs:** [Linear Progress](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/inputs/linear-progress)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbLinearProgressModule));
```

```razor
<IgbLinearProgress Value="42" Max="100" Striped="true" />
<IgbLinearProgress Indeterminate="true" />
```

Key attributes: `Value`, `Max`, `Indeterminate`, `Striped`, `Variant`, `LabelAlign` (`LinearProgressLabelAlign.TopStart` / `Top` / `TopEnd` / `BottomStart` / `Bottom` / `BottomEnd`).

---

## Dropdown

> **Docs:** [Dropdown](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/inputs/dropdown)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbDropdownModule));
```

```razor
<div>
    <IgbDropdown>
        <IgbButton slot="target">Options</IgbButton>
        <IgbDropdownHeader>Actions</IgbDropdownHeader>
        <IgbDropdownItem Value="edit">Edit</IgbDropdownItem>
        <IgbDropdownItem Value="delete">Delete</IgbDropdownItem>
        <IgbDropdownItem Value="disabled" Disabled="true">Archive</IgbDropdownItem>
    </IgbDropdown>
</div>

```

Key attributes on `IgbDropdown`: `Placement` (`PopoverPlacement.*`), `Flip`, `Distance`, `SameWidth`, `KeepOpenOnOutsideClick`, `KeepOpenOnSelect`. Key attributes on `IgbDropdownItem`: `Value`, `Selected`, `Disabled`. Events on `IgbDropdown`: `Opening`, `Opened`, `Closing`, `Closed`, `Change`.

---

## Tooltip

> **Docs:** [Tooltip](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/inputs/tooltip)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbTooltipModule));
```

```razor
<IgbButton id="hover-button">Hover me</IgbButton>
<IgbTooltip Anchor="hover-button" Placement="@PopoverPlacement.Top">
    This is a tooltip
</IgbTooltip>
```

Key attributes: `Anchor` (target element ID string), `Placement` (`PopoverPlacement.Top` / `Bottom` / `Left` / `Right` and start/end variants), `ShowDelay`, `HideDelay`, `ShowTriggers`, `HideTriggers`, `Sticky`, `WithArrow`, `Open`.

---

## Ripple

> **Docs:** [Ripple](https://www.infragistics.com/products/ignite-ui-blazor/blazor/components/inputs/ripple)

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbRippleModule));
```

Attach to any element with the `igcRipple` attribute or nest `IgbRipple` inside a container:

```razor
<div style="position: relative; padding: 16px; cursor: pointer;">
    Click me
    <IgbRipple />
</div>
```

CSS part: `base`. Customize color via `--color` CSS custom property.

---

## Key Rules

1. **Register each module explicitly.** `IgbButtonModule` and `IgbIconButtonModule` are separate modules.
2. **Icons must be registered before they display.** Use `EnsureReady()` + `RegisterIconFromTextAsync()` in `OnAfterRenderAsync(bool firstRender)`.
3. **`IgbCard` does not set a default width.** Always set a width via inline style or CSS class.
4. **Prefer the Dropdown `target` slot for the trigger.** For an external trigger, follow the current `dropdown` MCP doc and call `Show()`, `Hide()`, or `Toggle()` on the dropdown reference.
5. **`IgbTooltip.Anchor` uses the target element ID string in the documented Blazor pattern.** Give the target an `id` and pass that same value to `Anchor`.
