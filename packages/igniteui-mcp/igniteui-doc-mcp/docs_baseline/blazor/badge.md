---
title: Blazor Badge | Infragistics
_description: Infragistics' Blazor Badge component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: Blazor, UI controls, web widgets, UI widgets, Web Components, Blazor Badge Components, Infragistics
_license: MIT
mentionedTypes: ["Badge"]
_tocName: Badge
---

# Blazor Badge Overview

The Ignite UI for Blazor Badge is a component used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually designed with predefined styles to communicate information, success, warnings, or errors.

## Blazor Badge Example

```razor
@using IgniteUI.Blazor.Controls


<div class="sample center">
    <IgbBadge Outlined="true" />
</div>

@code {

}
```


<div class="divider"></div>

## Usage

Before using the [`IgbBadge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBadge.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbBadgeModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbBadge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBadge.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbBadge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBadge.html) is as follows:

```razor
<IgbBadge />
```

To display a subtle border around the badge, you can set the [`Outlined`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBadge.html#IgniteUI_Blazor_Controls_IgbBadge_Outlined) attribute of the badge.

```razor
<IgbBadge Outlined="true" />
```

## Examples

### Variants

The Ignite UI for Blazor badge supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `primary`(default), `info`, `success`, `warning`, or `danger` to the [`Variant`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBadge.html#IgniteUI_Blazor_Controls_IgbBadge_Variant) attribute.

```razor
<IgbBadge Variant="@BadgeVariant.Success" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="sample center">
    <IgbBadge Variant="@StyleVariant.Success" />
</div>

@code {

}
```


### Shape

The badge component supports `rounded`(default) and `square` shapes. These values can be assigned to the [`Shape`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBadge.html#IgniteUI_Blazor_Controls_IgbBadge_Shape) attribute.

```razor
<IgbBadge Shape="@BadgeShape.Square" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="sample center">
    <IgbBadge Shape="@BadgeShape.Square" />
</div>

@code {

}
```


### Dot

The Ignite UI for Blazor badge component can also render as a minimal dot indicator for notifications by setting its `dot` attribute. Dot badges do not support content, but they can be outlined and can use any of the available dot types (e.g., primary, success, info, etc.).

```razor
<IgbBadge Dot="true" />
```




## Styling

The [`IgbBadge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBadge.html) component exposes a `base` CSS part that can be used to change all of its style properties.

```css
igc-badge::part(base) {
    --background-color: var(--ig-error-A100);
    --border-radius: 2px;
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="sample center">
    <IgbBadge />
</div>

@code {

}
```


<div class="divider--half"></div>

## API References

- [`IgbBadge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBadge.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
