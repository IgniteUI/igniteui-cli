---
title: "Blazor Radio Group Component"
description: "The Blazor Radio and Radio Group let users select exactly one option from a set of mutually exclusive options, arranged vertically or horizontally."
keywords: "Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Radio Button components, Blazor Radio Button controls, Blazor Radio Group component, Blazor Radio Group control"
license: MIT
last_updated: "2026-10-09"
relatedComponents: [Checkbox, Switch, Select]
mentionedTypes: ["Radio", "RadioGroup"]
llms:
  description: "The Blazor Radio and Radio Group are components that let users select exactly one option from a set of mutually exclusive options."
_tocName: Radio Group
---
# Radio Group

The Blazor Radio and Radio Group are components that let users select exactly one option from a set of mutually exclusive options. Each radio button represents one option, and the Radio Group arranges the radio buttons in a vertical or horizontal layout.

## Live Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample radio-overview">
    <form class="feedback-form" @onsubmit:preventDefault="true">
        <span id="feedback-title" class="feedback-title">Does our app meet your expectations?</span>
        <IgbRadioGroup name="expectations" aria-labelledby="feedback-title" @bind-Value="expectations">
            <IgbRadio Value="@("exceeds")">Exceeds expectations</IgbRadio>
            <IgbRadio Value="@("meets")">Meets expectations</IgbRadio>
            <IgbRadio Value="@("below")">Below expectations</IgbRadio>
        </IgbRadioGroup>
        <IgbButton DisplayType="ButtonBaseType.Submit" class="feedback-send">Send</IgbButton>
    </form>
</div>

@code {
    private string expectations = "exceeds";
}
```

## Anatomy

The Blazor Radio Group contains radio buttons, and each radio button is made of a radio control and a label.

**Radio Group anatomy:** The Radio Group contains radio buttons, each made of a radio control and a label.

<style>{`
  .radio-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .radio-anatomy .igd-anatomy__image {
    max-width: 237.5px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Radio Button Label:</strong> indicates the content you want to select or unselect<br />
<strong>2. Radio Button:</strong> indicates if the state is selected. The default state of the input is unselected<br />
<strong>3. Button Group:</strong> a container that groups related options and allows only one selection at a time</span>

The following diagram shows the element structure of the Blazor Radio Group. Each radio button pairs its radio control with label content, which can be placed before or after the control.

```text
igc-radio-group                  — groups the radio buttons
└── igc-radio                    — one per option
    └── [part="base"]            — the <label> that wraps the input, the control, and the label
        ├── input[type="radio"]  — the native radio input
        ├── [part="control"]     — the radio control
        └── [part="label"]       — the slotted label content
```

## Getting Started

To use the Blazor Radio and Radio Group, follow the [Ignite UI for Blazor Getting Started](../general-getting-started.md) topic for the basic project setup, then import or register the components for your target platform.

Register the Ignite UI for Blazor services:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor();
```

Registering [`IgbRadioGroupModule`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroupModule), the client resource module of the [`IgbRadioGroup`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroup), is **optional**: the component loads its resources when it first renders. Listing it in `builder.Services.AddIgniteUIBlazor(typeof(IgbRadioGroupModule))` can be used to preload resources or to support elements created only on the client; it also registers the radio elements inside the group. A [`IgbRadio`](mcp:get_api_reference?platform=blazor&component=IgbRadio) used on its own has its own module, [`IgbRadioModule`](mcp:get_api_reference?platform=blazor&component=IgbRadioModule) (see [Component Modules](../general-getting-started.md#component-modules)).

Then add the theme stylesheet to your host page:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

After registration, place the Blazor Radio components inside a Radio Group and give the group a `name`, so that users can select only one of the options. Set `value` on each radio button to identify the selected option.

```razor
<IgbRadioGroup name="fruit">
    <IgbRadio Value="apple" Checked="true">Apple</IgbRadio>
    <IgbRadio Value="banana">Banana</IgbRadio>
    <IgbRadio Value="mango">Mango</IgbRadio>
</IgbRadioGroup>
```

**Note:** 
The Blazor Radio components are mutually exclusive only when they share a `name`. The Radio Group applies its `name` to every radio button it contains; radio buttons without a `name` act independently of each other.

### Prerequisites and Version Compatibility

The Blazor Radio and Radio Group ship in the following package. The samples in this topic are built with the version listed next to it.

| Package | Version used in the samples |
| --- | --- |
| `IgniteUI.Blazor` (or `IgniteUI.Blazor.Trial`) | 26.1.98 |

## Usage

### Layout

The Blazor Radio places its label after the radio control by default. Set the [`labelPosition`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=labelPosition) property to `before` to place the label before the control. In a vertical Radio Group, radio buttons with the label before the control align to the end of the group.

Place the radio buttons as direct children of the Radio Group. Radio buttons inside a wrapper element aren't part of the group, and the group doesn't lay them out.

```razor
<IgbRadioGroup name="color">
    <IgbRadio Value="yellow" LabelPosition="ToggleLabelPosition.Before" Checked="true">Yellow</IgbRadio>
    <IgbRadio Value="orange" LabelPosition="ToggleLabelPosition.Before">Orange</IgbRadio>
</IgbRadioGroup>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample radio-layout">
    <div class="radio-layout-item">
        <span>Label After</span>
        <IgbRadioGroup name="color-after" @bind-Value="colorAfter">
            <IgbRadio Value="@("yellow")">Yellow</IgbRadio>
            <IgbRadio Value="@("orange")">Orange</IgbRadio>
            <IgbRadio Value="@("purple")">Purple</IgbRadio>
        </IgbRadioGroup>
    </div>
    <div class="radio-layout-item">
        <IgbRadioGroup name="color-before" @bind-Value="colorBefore">
            <IgbRadio Value="@("yellow")" LabelPosition="ToggleLabelPosition.Before">Yellow</IgbRadio>
            <IgbRadio Value="@("orange")" LabelPosition="ToggleLabelPosition.Before">Orange</IgbRadio>
            <IgbRadio Value="@("purple")" LabelPosition="ToggleLabelPosition.Before">Purple</IgbRadio>
        </IgbRadioGroup>
        <span>Label Before</span>
    </div>
</div>

@code {
    private string colorAfter = "yellow";
    private string colorBefore = "yellow";
}
```

### Orientation

The Blazor Radio Group stacks its radio buttons in a column or places them in a row. Set the [`alignment`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroup&member=alignment) property to `vertical` or `horizontal`. The default alignment is `vertical`.

```razor
<IgbRadioGroup name="chart" Alignment="ContentOrientation.Horizontal">
    <IgbRadio Value="line" Checked="true">Line</IgbRadio>
    <IgbRadio Value="bar">Bar</IgbRadio>
    <IgbRadio Value="pie">Pie</IgbRadio>
</IgbRadioGroup>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample radio-orientation">
    <div class="radio-orientation-item billing-cycle">
        <span id="billing-title" class="radio-orientation-title">Billing cycle</span>
        <IgbRadioGroup name="billing" Alignment="ContentOrientation.Vertical" aria-labelledby="billing-title" @bind-Value="billing">
            <IgbRadio Value="@("monthly")">Monthly</IgbRadio>
            <IgbRadio Value="@("annual")">Annual</IgbRadio>
            <IgbRadio Value="@("two-year")">Two-year</IgbRadio>
        </IgbRadioGroup>
    </div>
    <div class="radio-orientation-item chart-type">
        <span id="chart-title" class="radio-orientation-title">Chart type</span>
        <IgbRadioGroup name="chart" Alignment="ContentOrientation.Horizontal" aria-labelledby="chart-title" @bind-Value="chart">
            <IgbRadio Value="@("line")">Line</IgbRadio>
            <IgbRadio Value="@("bar")">Bar</IgbRadio>
            <IgbRadio Value="@("pie")">Pie</IgbRadio>
        </IgbRadioGroup>
    </div>
</div>

@code {
    private string billing = "monthly";
    private string chart = "line";
}
```

### Interaction States

The Blazor Radio shows a hover state when the pointer is over it and a focus ring when it receives keyboard focus. Set the [`invalid`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=invalid) property to show the invalid state, which draws the radio control in the error color of the theme.

```razor
<IgbRadio Value="daily" Invalid="true">Daily Updates</IgbRadio>
```

The following sample shows the hover, focused, and focused and hovered states for checked, unchecked, and invalid radio buttons.

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JS

<div class="container sample radio-states">
    @* The radios only show their states, so they take no pointer or keyboard input. *@
    <div class="radio-states-grid" inert>
        <span></span>
        <span class="column-caption">Hover</span>
        <span class="column-caption">Focused</span>
        <span class="column-caption">Focused &amp; Hover</span>
        <div class="radio-states-group">
            <span class="row-caption">Enabled / On</span>
            <IgbRadio class="hover" Value="@("daily")" Checked="true">Daily Updates</IgbRadio>
            <IgbRadio class="focused" Value="@("weekly")" Checked="true">Weekly Updates</IgbRadio>
            <IgbRadio class="focused-hover" Value="@("monthly")" Checked="true">Monthly Updates</IgbRadio>
            <span class="row-caption">Enabled / Off</span>
            <IgbRadio class="hover off" Value="@("daily")">Daily Updates</IgbRadio>
            <IgbRadio class="focused off" Value="@("weekly")">Weekly Updates</IgbRadio>
            <IgbRadio class="focused-hover off" Value="@("monthly")">Monthly Updates</IgbRadio>
        </div>
        <div class="radio-states-group">
            <span class="row-caption">Invalid / On</span>
            <IgbRadio class="hover" Value="@("daily")" Checked="true" Invalid="true">Daily Updates</IgbRadio>
            <IgbRadio class="focused" Value="@("weekly")" Checked="true" Invalid="true">Weekly Updates</IgbRadio>
            <IgbRadio class="focused-hover" Value="@("monthly")" Checked="true" Invalid="true">Monthly Updates</IgbRadio>
            <span class="row-caption">Invalid / Off</span>
            <IgbRadio class="hover off" Value="@("daily")" Invalid="true">Daily Updates</IgbRadio>
            <IgbRadio class="focused off" Value="@("weekly")" Invalid="true">Weekly Updates</IgbRadio>
            <IgbRadio class="focused-hover off" Value="@("monthly")" Invalid="true">Monthly Updates</IgbRadio>
        </div>
    </div>
</div>

@code {
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JS.InvokeVoidAsync("radioInteractionState.showFocus");
        }
    }
}
```

### Disabled States

Set the [`disabled`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=disabled) property to disable a Blazor Radio. A disabled radio button can't be selected, and keyboard navigation skips it.

```razor
<IgbRadioGroup name="age">
    <IgbRadio Value="18-27" Checked="true">18-27</IgbRadio>
    <IgbRadio Value="28-39">28-39</IgbRadio>
    <IgbRadio Value="40-55" Disabled="true">40-55</IgbRadio>
</IgbRadioGroup>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample radio-disabled">
    <div class="age-question">
        <span id="age-title" class="age-title">What is your age?</span>
        <IgbRadioGroup name="age" aria-labelledby="age-title" @bind-Value="age">
            <IgbRadio Value="@("18-27")">18-27</IgbRadio>
            <IgbRadio Value="@("28-39")">28-39</IgbRadio>
            <IgbRadio Value="@("40-55")" Disabled="true">40-55</IgbRadio>
        </IgbRadioGroup>
    </div>
</div>

@code {
    private string age = "18-27";
}
```

### On/Off States

A Blazor Radio is either on (checked) or off. Set the [`checked`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=checked) property on a radio button to turn it on, or set the [`value`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroup&member=value) of the Radio Group to turn on the radio button with the matching value. Turning a radio button on turns off the other radio buttons in the group.

```razor
<IgbRadioGroup name="age" Value="18-27">
    <IgbRadio Value="18-27">18-27</IgbRadio>
    <IgbRadio Value="28-39">28-39</IgbRadio>
    <IgbRadio Value="40-55">40-55</IgbRadio>
</IgbRadioGroup>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample radio-on-off">
    <div class="age-question">
        <span id="age-title" class="age-title">What is your age?</span>
        <IgbRadioGroup name="age" aria-labelledby="age-title" @bind-Value="age">
            <IgbRadio Value="@("18-27")">18-27</IgbRadio>
            <IgbRadio Value="@("28-39")">28-39</IgbRadio>
            <IgbRadio Value="@("40-55")">40-55</IgbRadio>
        </IgbRadioGroup>
    </div>
</div>

@code {
    private string age = "18-27";
}
```

### Forms

The Blazor Radio submits the `value` of the selected radio button under the group's `name`. Set the [`required`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=required) property on a radio button of the group to require a selection before the form is submitted.

To show a message when the selection is missing, put it in the `value-missing` slot of a radio button. The required selection makes every radio button of the group invalid, so place the message in the last radio button to show it below the group.

```razor
<IgbRadioGroup name="fruit">
    <IgbRadio Value="apple" Required="true">Apple</IgbRadio>
    <IgbRadio Value="banana">Banana</IgbRadio>
    <IgbRadio Value="orange">
        Orange
        <span slot="value-missing">Choose a fruit.</span>
    </IgbRadio>
</IgbRadioGroup>
```

**Warning: Warning**

The [`IgbRadio`](mcp:get_api_reference?platform=blazor&component=IgbRadio) component doesn't work with a standard HTML `<form>` element in Blazor. Use the Blazor `EditForm` component instead.

### Do/Don't

When extending a Radio Group with additional items, make sure that they are aligned consistently and form a single column. Avoid layout in multiple columns, as well as situations with more than one Radio element with on state at a time.

<div class="igd-sample-container" data-spacing="lg">
  <div class="igd-sample-frame">
    
  </div>
</div>

## Properties

The following properties cover the Blazor Radio and Radio Group options documented on this page. See the API references for the complete generated list.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`Checked`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=checked) | `bool` | `false` | Gets or sets whether the radio button is on. |
| [`Disabled`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=disabled) | `bool` | `false` | Gets or sets whether the radio button is disabled. |
| [`Invalid`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=invalid) | `bool` | `false` | Gets or sets whether the radio button is in the invalid state. |
| [`LabelPosition`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=labelPosition) | `ToggleLabelPosition` | `ToggleLabelPosition.After` | Sets whether the label is placed before or after the radio control. |
| [`Required`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=required) | `bool` | `false` | Gets or sets whether a selection is required. |
| [`Value`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=value) | `string` | — | Gets or sets the value submitted with the form when the radio button is on. |
| [`Alignment`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroup&member=alignment) (Radio Group) | `ContentOrientation` | `ContentOrientation.Vertical` | Sets whether the radio buttons are stacked in a column or placed in a row. |
| [`Value`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroup&member=value) (Radio Group) | `string` | — | Gets or sets the value of the radio button that is on. |

## Methods

The Blazor Radio exposes the following methods.

| Name | Description |
| --- | --- |
| [`CheckValidity()`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=checkValidity) | Checks the validity of the radio button and returns `true` when it's valid. |
| [`ReportValidity()`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=reportValidity) | Checks the validity of the radio button, shows its invalid state when it isn't valid, and returns `true` when it's valid. |
| [`SetCustomValidity(message)`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=setCustomValidity) | Sets a custom validation message. Pass an empty string to clear it. |
| [`Click()`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=click) | Simulates a click on the radio button, which turns it on. |
| [`FocusComponent(options)`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=focusComponent) | Moves focus to the radio button. |
| [`BlurComponent()`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=blurComponent) | Removes focus from the radio button. |

Each method also has an asynchronous version that returns a `Task`, for example `CheckValidityAsync()`.

## Events

The Blazor Radio emits an event when the user turns a radio button on.

| Name | Description |
| --- | --- |
| [`Change`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=change) | Emitted when the checked state of a radio button changes. The event arguments carry the `checked` state and the `value` of the radio button. |
| [`ValueChanged`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroup&member=valueChanged) (Radio Group) | Raised with the new value of the Radio Group when its selection changes. `@bind-Value` uses it. |
| [`CheckedChanged`](mcp:get_api_reference?platform=blazor&component=IgbRadio&member=checkedChanged) | Raised with the new checked state of the radio button. `@bind-Checked` uses it. |

## Styling

The Blazor Radio is styled through the Ignite UI for Blazor theme and the CSS variables it generates. CSS parts give you access to the internal elements of the radio button. The following sample draws the radio buttons of a shipping form with a custom palette and typeface.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample radio-styling">
    <div class="shipping-card">
        <div class="shipping-header">
            <span id="shipping-title" class="shipping-title">Shipping method</span>
        </div>
        <IgbRadioGroup class="shipping-methods" name="shipping" aria-labelledby="shipping-title" @bind-Value="shipping">
            <IgbRadio class="shipping-method" Value="@("standard")">Standard <span class="shipping-detail">(2-4 business days)</span></IgbRadio>
            <IgbRadio class="shipping-method" Value="@("express")">Express <span class="shipping-detail">(next day by 6 pm)</span></IgbRadio>
            <IgbRadio class="shipping-method" Value="@("pickup")">Pickup point <span class="shipping-detail">(400 + locations)</span></IgbRadio>
            <IgbRadio class="shipping-method" Value="@("same-day")" Disabled="true">Same-day <span class="shipping-detail">(not available)</span></IgbRadio>
        </IgbRadioGroup>
    </div>
</div>

@code {
    private string shipping = "standard";
}
```

### Sass Theming

Create a theme with the `radio-theme` function and include it with the `tokens` mixin. Setting `$empty-color` and `$fill-color` is enough for a fully styled radio button, because the theme derives the remaining colors from them.

```scss
@use "igniteui-theming" as *;

$custom-radio-theme: radio-theme(
  $empty-color: #345779,
  $fill-color: #2dabe8,
);

:root {
  @include tokens($custom-radio-theme);
}
```

When you set a primary parameter, the theme derives its dependent parameters:

| Primary parameter | Dependent parameters | What it changes |
| --- | --- | --- |
| `$empty-color` | `$hover-color`, `$focus-outline-color` (Indigo) | The border of an unchecked radio button. |
| `$fill-color` | `$fill-color-hover`, `$fill-hover-border-color`, `$focus-border-color` (Bootstrap), `$focus-outline-color` (Bootstrap), `$focus-outline-color-filled` (Indigo) | The border and dot of a checked radio button. |
| `$label-color` | `$label-color-hover` | The label text. |
| `$error-color` | `$error-color-hover`, `$focus-outline-color-error` | The label, border, and dot in the invalid state. |

### CSS Variables

Set the following CSS variables on a radio button, or on one of its ancestors, to change its colors without a Sass theme:

| Variable | What it changes |
| --- | --- |
| `--ig-radio-label-color` | The label text. |
| `--ig-radio-empty-color` | The border of an unchecked radio button. |
| `--ig-radio-empty-fill-color` | The fill of an unchecked radio button. |
| `--ig-radio-fill-color` | The border and dot of a checked radio button. |
| `--ig-radio-hover-color` | The border and dot on hover. |
| `--ig-radio-fill-color-hover` | The dot of a checked radio button on hover. |
| `--ig-radio-error-color` | The label, border, and dot in the invalid state. |
| `--ig-radio-disabled-color` | The border and dot of a disabled radio button. |
| `--ig-radio-disabled-label-color` | The label of a disabled radio button. |
| `--ig-radio-focus-outline-color` | The focus outline. |

### Style Parts

Use the following CSS parts to target the internal elements of the Blazor Radio. Each part also carries the `checked` part name while the radio button is on, so `::part(control checked)` targets only a checked radio control.

| Part | What it styles |
| --- | --- |
| `base` | The wrapper of the radio control and the label. |
| `control` | The radio control. |
| `label` | The label. |

```css
igc-radio {
  --ig-radio-fill-color: #0176ff;
  --ig-radio-empty-color: #a9b8cc;
}

igc-radio::part(label) {
  color: #002b5c;
  font-weight: 600;
}
```

### Styling with Tailwind

You can style the Blazor Radio with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

Use the `light-radio` or `dark-radio` class for the corresponding theme and override its CSS variables with arbitrary properties:

```razor
<IgbRadio Class="!light-radio ![--empty-color:#576E60] ![--fill-color:#7B9E89]" Value="tokyo">Tokyo</IgbRadio>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the default theme styles of the Radio.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@import url("https://use.typekit.net/bng2zgw.css");

@tailwind utilities;

:root {
    /* The design's own palette. It lives here instead of coming from the theme
       palette, so the sample keeps its colors in every theme. */
    --color-export-primary: #0176ff;
    --color-export-primary-strong: #006ae6;
    --color-export-tint: #e6f2ff;
    --color-export-tint-strong: #cce4ff;
    --color-export-title: #00142b;
    --color-export-ink: #002b5c;
    --color-export-muted: #556c86;
    --color-export-divider: #d2dbe8;
    --color-export-empty: #a9b8cc;
    --color-export-cancel: #616161;
}

/* The design draws the radio as a 2px ring with a 10px dot in a 40px slot. Each
   theme draws the radio its own way, so the whole radio is drawn here. */
.format-option::part(base) {
    gap: 0.125rem;
}

.format-option::part(control) {
    width: 2.5rem;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
}

.format-option::part(control)::before,
.format-option::part(control)::after {
    top: 50%;
    left: 50%;
    width: 1.25rem;
    min-width: 0;
    height: 1.25rem;
    border-radius: 50%;
}

/* The ring */
.format-option::part(control)::after {
    transform: translate(-50%, -50%);
    border: 0.125rem solid var(--color-export-empty);
    background: white;
}

.format-option::part(control checked)::after {
    border-color: var(--color-export-primary);
}

/* The dot */
.format-option::part(control)::before {
    transform: translate(-50%, -50%) scale(0);
    border: none;
    background: var(--color-export-primary);
}

.format-option::part(control checked)::before {
    transform: translate(-50%, -50%) scale(0.5);
}
```

## Accessibility

The Blazor Radio renders a native radio input, so assistive technologies announce each radio button with its role, label, and checked state.

### Keyboard Interaction

The Blazor Radio Group moves focus and selection between its enabled radio buttons with the arrow keys. Disabled radio buttons are skipped.

| Key | Action |
| --- | --- |
| Tab / Shift+Tab | Moves focus into or out of the Radio Group. |
| Arrow Down / Arrow Right | Moves focus to the next enabled radio button and turns it on. From the last radio button, moves to the first one. In right-to-left layouts, Arrow Right moves to the previous radio button. |
| Arrow Up / Arrow Left | Moves focus to the previous enabled radio button and turns it on. From the first radio button, moves to the last one. In right-to-left layouts, Arrow Left moves to the next radio button. |
| Space | Turns on the focused radio button. |
| Enter | Submits the form that contains the radio button. |

When a radio button in the group is on, it is the only tab stop of the group. When none of the radio buttons is on, each of them is a tab stop.

In `IgniteUI.Blazor` 26.1, clearing the selection in code leaves no tab stop in the group. See [Known Limitations](#known-limitations).

### Screen Readers / ARIA

- Each Blazor Radio renders a native `<input type="radio">`, which exposes the radio role, the checked state, and the disabled and required states.
- The label content of the radio button is its accessible name.

- The Radio Group renders the `radiogroup` role. In `IgniteUI.Blazor` 26.1, it doesn't set `aria-orientation`.

- Give the Radio Group an accessible name, for example with `aria-labelledby` pointing to the question it answers.

### Accessibility Compliance

Verify the rendered Blazor Radio and Radio Group against the accessibility requirements of your application.

| Criterion | How the component supports the requirement |
| --- | --- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | Users move between the enabled radio buttons and turn them on with the arrow keys and Space. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | Each radio button exposes its label as the accessible name, the radio role, and its checked state through the native radio input. |

Your responsibilities:

- Give every radio button meaningful label content, and give the Radio Group an accessible name.
- Keep the focus ring visible and preserve sufficient contrast when you customize the Radio colors.
- Show a validation message when the Radio is invalid, so the error isn't conveyed by color alone. Use the `value-missing` slot, as shown in [Forms](#forms).
- Test the rendered Radio Group with keyboard navigation and the assistive technologies your users rely on.

## Known Limitations

The Blazor Radio and Radio Group have the following known limitations:

- The Radio doesn't work with a standard HTML `<form>` element in Blazor. Use the Blazor `EditForm` component instead.
- In `IgniteUI.Blazor` 26.1, a radio button can't be labelled by an element outside of it. `IgbRadio` has no `AriaLabelledBy` parameter, and an `aria-labelledby` attribute doesn't give the radio button an accessible name. Put the label text inside the radio button.
- In `IgniteUI.Blazor` 26.1, clearing the selection in code takes every radio button out of the tab order. Keyboard users can't reach the group until a mouse click or your code turns one of its radio buttons on again.

## API References

See the complete Blazor Radio and Radio Group API references:

- [`IgbRadio`](mcp:get_api_reference?platform=blazor&component=IgbRadio)

- [`IgbRadioGroup`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroup)

## Dependencies

The Blazor Radio requires a theme stylesheet to apply its visual styling. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

## Additional Resources

Use the following Blazor resources for API details and project support:

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

## Related Components

The Blazor Radio is intended for one choice from a short list of mutually exclusive options. Use the following related components for other kinds of choices:

- [Checkbox](./checkbox.md) - Use Checkbox when users can select more than one option.
- [Switch](./switch.md) - Use Switch when the control turns a single setting on or off immediately.
- [Select](./select.md) - Use Select when the list of options is long or space is limited.

## FAQ

These frequently asked questions cover common Blazor Radio and Radio Group selection, form, and state scenarios.

  **Q: How do I get the selected value when the user changes the selection?**

    Handle the `Change` event on the Blazor Radio Group. The change event arguments carry the `value` of the radio button the user turned on. You can also bind the selected value with `@bind-Value` on the Radio Group. The change event doesn't fire when you set the Radio Group `value` in code.
  
  **Q: How do I select a radio button from code?**

    Set the Blazor Radio Group `value` to the `value` of the radio button you want to turn on. You can also set `checked` on that radio button, which turns off the other radio buttons in the group. Selecting a radio button in code doesn't fire the change event.
  
  **Q: How do I clear the selection of a Radio Group?**

    Users can't turn off a selected Blazor Radio by clicking it again, which is the standard radio button behavior. To clear the selection in code, set the Radio Group `value` to an empty string or another value that none of its radio buttons has. In `IgniteUI.Blazor` 26.1, this also takes every radio button out of the tab order, as described in [Known Limitations](#known-limitations). If users need to clear the selection themselves, add a "None" option or a separate clear button.
  
  **Q: Why can more than one radio button be on at the same time?**

    Blazor Radio buttons are mutually exclusive only when they share the same `name`, so radio buttons without a shared `name` can be on at the same time. Set `name` on the Radio Group, which applies it to all of its radio buttons, or set the same `name` on each radio button.
  
  **Q: How do I make a selection required in a form?**

    Set `required` on any radio button of the Blazor Radio Group, and the whole group requires a selection. Place the Radio Group in a Blazor `EditForm`, because the Radio doesn't work with a standard HTML `<form>` element in Blazor.
  
  **Q: How do I disable all radio buttons of a Radio Group?**

    The Blazor Radio Group doesn't have a `disabled` property of its own. To disable the whole group, set `disabled` on each of its radio buttons, for example by binding all of them to the same state.
  

