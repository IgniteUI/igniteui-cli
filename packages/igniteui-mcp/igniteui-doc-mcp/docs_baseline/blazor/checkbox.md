---
title: "Checkbox"
description: "The Blazor Checkbox lets users select, clear, or set an indeterminate option in forms and interactive interfaces."
keywords: "Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Checkbox components, Blazor Checkbox controls"
license: MIT
last_updated: "2026-08-25"
relatedComponents: [Switch]
mentionedTypes: ["Checkbox"]
llms:
  description: "The Blazor Checkbox is a component that lets you add checkboxes to your Blazor apps."
_tocName: Checkbox
---
# Blazor Checkbox Component

The Blazor Checkbox is a component that lets you add checkboxes to your Blazor apps. It behaves as a standard HTML checkbox, enabling users to select basic checked and unchecked states or an additional indeterminate state. You also get full control over the styling of the Blazor checkbox component and ability to use it with forms.

## Live Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div class="shopping-list">
        <IgbList class="list">
            @foreach (var group in Groups)
            {
                <IgbListHeader class="group-header">
                    <span class="group-title">@group.Title</span>
                </IgbListHeader>

                @foreach (var item in group.Items)
                {
                    <IgbListItem class="@(item.Checked ? "shopping-item shopping-item-checked" : "shopping-item")">
                        <IgbCheckbox slot="start" Checked="item.Checked" Change="@(args => item.Checked = args.Detail.Checked)">
                            <span>@item.Label</span>
                        </IgbCheckbox>
                        <IgbIconButton slot="end" class="item-menu" Variant="IconButtonVariant.Flat"
                                       IconName="more_vert" Collection="material" />
                    </IgbListItem>
                }
            }
        </IgbList>
        <IgbButton class="add-item" Variant="ButtonVariant.Fab">
            <IgbIcon @ref="IconRef" IconName="add" Collection="material" />
        </IgbButton>
    </div>
</div>

@code {
    private const string MoreVertIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/></svg>";
    private const string AddIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>";

    private IgbIcon IconRef;

    private class ShoppingItem
    {
        public string Label { get; set; }
        public bool Checked { get; set; }
    }

    private class ShoppingGroup
    {
        public string Title { get; set; }
        public List<ShoppingItem> Items { get; set; }
    }

    private List<ShoppingGroup> Groups { get; set; } = new List<ShoppingGroup>
    {
        new ShoppingGroup
                new ShoppingItem { Label = "Bread", Checked = false },
                new ShoppingItem { Label = "Milk 4l", Checked = false },
        // ... 1 more items
            }
        },
        new ShoppingGroup
        {
            Title = "Fruit and vegetable shop",
            Items = new List<ShoppingItem>
            {
                new ShoppingItem { Label = "Strawberries", Checked = false },
                new ShoppingItem { Label = "Lemons", Checked = false },
                new ShoppingItem { Label = "Single Line Item", Checked = true },
            }
        }
    };

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            IconRef.EnsureReady().ContinueWith(_ =>
            {
                IconRef.RegisterIconFromText("more_vert", MoreVertIcon, "material");
                IconRef.RegisterIconFromText("add", AddIcon, "material");
            });
        }
    }
}
```

## Anatomy

The Blazor Checkbox renders a selectable control with an optional label.

**Checkbox anatomy:** The Checkbox component presents a selectable control with checked, unchecked, and indeterminate states.

<style>{`
  .checkbox-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .checkbox-anatomy .igd-anatomy__image {
    max-width: 142.5px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Checkbox Indicator:</strong> indicates the current state. By default it is unselected. Could be before or after the label<br />
<strong>2. Label (optional):</strong> specifies the target data available for selection and deselection</span>

The Blazor Checkbox consists of an indicator and optional label content. Set the label position when the label should appear before or after the indicator.

```text
Checkbox
├── Checkbox Indicator
└── Label (optional)
```

## Getting Started

To use the Blazor Checkbox, follow the [Ignite UI for Blazor Getting Started](../general-getting-started.md) topic for the basic project setup, then install or register the component for your target platform.

Register the Ignite UI for Blazor services:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor();
```

Registering [`IgbCheckboxModule`](mcp:get_api_reference?platform=blazor&component=IgbCheckboxModule), the Checkbox's client resource module, is **optional**: the component loads its resources when it first renders. Listing it in `builder.Services.AddIgniteUIBlazor(typeof(IgbCheckboxModule))` can be used to preload resources or to support elements created only on the client (see [Component Modules](../general-getting-started.md#component-modules)).

Then link the theme CSS file in the app's host page (**wwwroot/index.html** in a standalone Blazor WebAssembly or Blazor Hybrid app, **Pages/_Host.cshtml** in a Blazor Server app, **Components/App.razor** in a Blazor Web App):

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

After registration, render the [`IgbCheckbox`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox) with the platform-specific element or wrapper:

```razor
<IgbCheckbox />
```

**Warning: Warning**

The [`IgbCheckbox`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox) component doesn't work with a standard HTML `<form>` element in Blazor. Use the Blazor `EditForm` component instead.

## Usage

At its core, the [`IgbCheckbox`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox) lets users choose between selected and unselected states, with support for an indeterminate state when an option represents a partial selection.

You can specify if the label should be positioned before or after the checkbox toggle by setting the [`LabelPosition`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox&member=labelPosition) attribute of the checkbox. Allowed values are `before` and `after` (default):

```razor
<IgbCheckbox LabelPosition="@ToggleLabelPosition.Before">Label</IgbCheckbox>
```

The checkbox can also be labelled by elements external to the checkbox. In this case, the user is given full control to position and style the label in accordance with their needs.

```razor
<span id="checkbox-label">Label</span>
<IgbCheckbox AriaLabelledBy="checkbox-label" />
```

### States

The Checkbox supports different state-related attributes. You can use the [`checked`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox&member=checked) attribute to set the initial state of the checkbox to on or off.

```razor
<IgbCheckbox Checked="true" />
```

You can use the [`indeterminate`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox&member=indeterminate) attribute to set the checkbox's value to neither **true** nor **false**.

```razor
<IgbCheckbox Indeterminate="true" />
```

You can use the [`disabled`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox&member=disabled) attribute to disable the Checkbox.

```razor
<IgbCheckbox Disabled="true" />
```

You can use the [`invalid`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox&member=invalid) attribute to mark the Checkbox as invalid.

```razor
<IgbCheckbox Invalid="true" />
```

You can use the [`required`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox&member=required) property to mark the Checkbox as required.

```razor
<IgbCheckbox Required="true" />
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    @* the checkboxes are display-only, so user interaction is blocked from the CSS *@
    <div class="states">
        <div class="state">
            <span class="state-label">Indeterminate</span>
            <IgbCheckbox Indeterminate="true" aria-label="Indeterminate" />
        </div>
        <div class="state">
            <span class="state-label">On</span>
            <IgbCheckbox Checked="true" aria-label="On" />
        </div>
        <div class="state">
            <span class="state-label">Off</span>
            <IgbCheckbox aria-label="Off" />
        </div>
        <div class="state">
            <span class="state-label">Disabled</span>
            <IgbCheckbox Disabled="true" aria-label="Disabled" />
        </div>
        <div class="state">
            <span class="state-label">Invalid</span>
            <IgbCheckbox Invalid="true" aria-label="Invalid" />
        </div>
        <div class="state">
            <span class="state-label">Required</span>
            <IgbCheckbox Required="true" aria-label="Required" />
        </div>
    </div>
</div>

@code {

}
```

### Do/Don't

When many Checkboxes are necessary, arrange them in a column group so users can quickly scan the list. Fewer Checkboxes may be arranged on a single line next to each other, but avoid arranging them in multiple columns.

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 24px 0 16px;">
  
  
</div>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px;">
  <div>
    <p style="color: #258b3b; font-weight: 600; margin: 0 0 8px;">Do</p>
    <p style="margin: 0;">Stack checkboxes vertically in a single column to make options easy to scan and read.</p>
  </div>
  <div>
    <p style="color: #e40046; font-weight: 600; margin: 0 0 8px;">Don't</p>
    <p style="margin: 0;">Avoid arranging checkboxes into multiple columns, as this breaks vertical reading patterns and makes scanning difficult.</p>
  </div>
</div>

## Properties

The following properties cover the main Checkbox configuration options documented on this page. See the full API reference for the complete generated list.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`checked`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox&member=checked) | `boolean` | `false` | Gets or sets whether the checkbox is selected. |
| [`indeterminate`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox&member=indeterminate) | `boolean` | `false` | Gets or sets whether the checkbox is in an indeterminate state. |
| [`labelPosition`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox&member=labelPosition) | `ToggleLabelPosition` | `after` | Sets the position of the checkbox label. |
| [`required`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox&member=required) | `boolean` | `false` | Gets or sets whether the Checkbox is required. |
| [`invalid`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox&member=invalid) | `boolean` | `false` | Gets or sets whether the Checkbox is invalid. |
| [`disabled`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox&member=disabled) | `boolean` | `false` | Gets or sets whether the Checkbox is disabled. |
| [`value`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox&member=value) | `string` | — | Gets or sets the value used when the Checkbox is submitted with a form. |

## Styling

The Blazor Checkbox uses CSS parts and CSS variables to customize its appearance.

### Sass Theming

Use the Ignite UI for Blazor theme system to style the Checkbox consistently with the rest of your application. Verify the available Sass theme parameters in the API documentation before adding a custom theme.

### CSS Variables

Use the following styling properties to customize the Checkbox indicator and selected-state appearance:

| Variable | What it changes |
| --- | --- |
| `--tick-color` | The color of the check icon. |
| `--fill-color` | The background color of the selected checkbox. |

### Style Parts

Use the following CSS parts to target the Checkbox structure:

| Part | What it styles |
| --- | --- |
| `base` | The base wrapper of the Checkbox. |
| `control` | The checkbox control element. |
| `indicator` | The checkbox indicator icon. |
| `label` | The Checkbox label. |

### Custom Styling

The following selectors customize the Checkbox indicator color and selected-state fill:

| Selector | Declaration | Effect |
| --- | --- | --- |
| `igc-checkbox::part(indicator)` | `--tick-color` | Changes the check icon color. |
| `igc-checkbox::part(control checked)::after` | `--fill-color` | Changes the selected checkbox background color. |

```css
igc-checkbox::part(indicator) {
  --tick-color: var(--ig-secondary-500-contrast); /* check icon color */
}
```

```css
igc-checkbox::part(control checked)::after {
  --fill-color: var(--ig-secondary-500); /* checkbox background color */
}
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div class="team-card">
        <p class="team-title">Team members</p>

        <IgbCheckbox class="select-all"
                     LabelPosition="ToggleLabelPosition.Before"
                     Checked="AllSelected"
                     Indeterminate="SomeSelected && !AllSelected"
                     Change="OnSelectAllChange">
            <span>Select all</span>
        </IgbCheckbox>

        <IgbList class="members">
            @foreach (var member in Members)
            {
                <IgbListItem class="@(member.Selected ? "member member-selected" : "member")">
                    <IgbAvatar slot="start" Src="@member.Avatar" Shape="AvatarShape.Circle" Alt="@member.Name" />
                    <span slot="title" class="member-name">@member.Name</span>
                    <span slot="subtitle" class="member-email">@member.Email</span>
                    <IgbCheckbox slot="end" class="member-check"
                                 aria-label="@member.Name"
                                 Checked="member.Selected"
                                 Change="@(args => member.Selected = args.Detail.Checked)" />
                </IgbListItem>
            }
        </IgbList>

        <IgbButton class="continue-button" Variant="ButtonVariant.Contained">Continue</IgbButton>
    </div>
</div>

@code {
    private class TeamMember
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Avatar { get; set; }
        public bool Selected { get; set; }
    }

    private List<TeamMember> Members { get; set; } = new List<TeamMember>
    {
        new TeamMember { Name = "Emily Potter", Email = "emily@team.com", Avatar = "https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png", Selected = false },
        new TeamMember { Name = "Alex Lima", Email = "alex@team.com", Avatar = "https://dl.infragistics.com/x/img/avatars/avatar-profile-05.png", Selected = true },
        new TeamMember { Name = "Mateo García", Email = "mateo@team.com", Avatar = "https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png", Selected = false },
        // ... 1 more items
    };

    private bool AllSelected => this.Members.TrueForAll(m => m.Selected);

    private bool SomeSelected => this.Members.Exists(m => m.Selected);

    private void OnSelectAllChange(IgbCheckboxChangeEventArgs args)
    {
        this.Members.ForEach(m => m.Selected = args.Detail.Checked);
    }
}
```

### Styling with Tailwind

You can style the Blazor Checkbox with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```razor
<IgbCheckbox Class="![--tick-color:var(--ig-secondary-500)]" />
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Checkbox's default theme styles.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@import url("https://use.typekit.net/bng2zgw.css");

@tailwind utilities;

:root {
    /* The design's own palette. It lives here instead of coming from the theme
       palette, so the sample keeps its colors in every theme. */
    --color-filter-primary: #0176ff;
    --color-filter-title: #004699;
    --color-filter-divider: #e5ebf3;
    --color-filter-ink: #1a314a;
    --color-filter-empty: #a9b8cc;
}

/* divide-y only sets the width and the color; the solid style comes from
   preflight, which this sample keeps off so it does not restyle the components. */
.divide-y > :not([hidden]) ~ :not([hidden]) {
    border-top-style: solid;
}

/* The design's 44px header: an 8px inset around the title's 28px box. */
igc-expansion-panel::part(header) {
    padding: 0.5rem 1rem;
}

/* A 40px row in every theme. The padding sits on the base rather than on the
   control, so the padding a theme adds around the box for its ripple can no
   longer stretch the row. */
.filter-option::part(base) {
    gap: 0.75rem;
    padding: 0.5rem 0.625rem;
}

.filter-option::part(control) {
    padding: 0;
}

.filter-option::part(indicator) {
    --indicator-size: 1rem;
}
```

## Accessibility

The Blazor Checkbox provides a selectable control with a label and state that must remain understandable for keyboard and assistive technology users.

### Keyboard Interaction

The Checkbox uses the keyboard behavior provided by its rendered control. A disabled Checkbox is
not keyboard interactive, and the Space key changes its checked state.

Use the keyboard interaction provided by the Checkbox and verify the focus and state-change behavior for the target platform.

| Key / interaction | Action |
| --- | --- |
| Tab / Shift+Tab | Moves focus to or away from the Checkbox when it is enabled and focusable. |
| Space | Toggles the checked state of the focused Checkbox. |
| Indeterminate state | The Checkbox exposes its current state when the indeterminate state is enabled. |

### Screen Readers / ARIA

The Checkbox exposes its checked state, disabled state, and, when configured, required, invalid,
and indeterminate states through the semantics of its rendered control.

- Provide meaningful label content for every Checkbox so assistive technology users can identify
  its purpose.
- When the label is outside the component, connect it with the supported labelling mechanism and
  verify the announcement in the target platform.
- Preserve the Checkbox state semantics when customizing or wrapping the control.
- Change event handlers report state changes; they do not replace the accessible name or state.

The checked, unchecked, required, invalid, disabled, and indeterminate states must remain available to assistive technology through the component's supported semantics. Verify the rendered announcement against the platform API documentation.

### Accessibility Compliance

Verify the rendered Blazor Checkbox against the accessibility requirements of the application.

| Criterion | How the component supports the requirement |
| --- | --- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The enabled Checkbox can receive keyboard focus and its checked state can be changed with Space. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The Checkbox exposes its accessible name and current selection state through the rendered control and supported state semantics. |
| [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification) | When the Checkbox is invalid, expose the validation state and provide an appropriate message in the surrounding form. |

Your responsibilities:

- Give every Checkbox a meaningful accessible name.
- Keep focus visible and preserve sufficient contrast when customizing the Checkbox theme.
- Ensure required, invalid, disabled, and indeterminate states are also communicated when visual
  styling alone is insufficient.
- Test the rendered Checkbox with keyboard navigation and supported assistive technologies.

## API References

The Blazor Checkbox API reference provides the complete API surface for the component.

[`IgbCheckbox`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox)

## Dependencies

The Blazor Checkbox requires a theme stylesheet to apply its visual styling. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

## Additional Resources

Use the following Blazor resources for API details and project support:

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

## Related Components

The Blazor Checkbox is intended for selectable form options. Use the following related component when you need an immediate on/off action instead:

- [`IgbSwitch`](mcp:get_api_reference?platform=blazor&component=IgbSwitch)

## FAQ

These frequently asked questions cover common Blazor Checkbox selection, accessibility, form, and validation scenarios.

  **Q: Can I use the Checkbox with a form?**

    Use the Blazor `EditForm` component instead of a standard HTML `<form>` and bind the checked state of the Checkbox to your model.
  
  **Q: How do I show a partially selected Checkbox?**

    The Blazor Checkbox supports a third, indeterminate state for partially selected options. Set the `indeterminate` property to enable that state.
  
  **Q: How do I provide an accessible Checkbox label?**

    The Blazor Checkbox should have meaningful label content so assistive technology users can identify its purpose. When the label is outside the component, connect it with the supported labelling mechanism such as `aria-labelledby`.
  
  **Q: How do I mark a Checkbox as required or invalid?**

    Set the `required` property to indicate that the Checkbox must be selected and the `invalid` property to expose a validation state. Provide an appropriate validation message in the surrounding form when the Checkbox is invalid.
  

